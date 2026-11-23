import xml.etree.ElementTree as ET, json, re, html, os, sys, datetime
from html.parser import HTMLParser
from urllib.parse import urlparse, unquote
from pathlib import Path
src=sys.argv[1] if len(sys.argv)>1 else sys.exit('Usage: python scripts/import-wordpress.py path/to/export.xml')
n={'w':'http://wordpress.org/export/1.2/','c':'http://purl.org/rss/1.0/modules/content/','dc':'http://purl.org/dc/elements/1.1/'}
root=ET.parse(src).getroot(); items=root.findall('./channel/item')
attachments={i.findtext('w:post_id',namespaces=n):i.findtext('w:attachment_url',namespaces=n) for i in items if i.findtext('w:post_type',namespaces=n)=='attachment'}
images=set(); blocked=['casino-aureonplay.nl','rainbetapp.ca']
def local(url):
 if not url:return ''
 u=urlparse(url)
 if u.netloc.lower() in ('hostingnigeria.com','www.hostingnigeria.com') and u.path.startswith('/wp-content/uploads/') and '..' not in unquote(u.path):
  images.add('https://hostingnigeria.com'+u.path); return u.path
 return url
class Clean(HTMLParser):
 allowed={'p','h2','h3','h4','h5','h6','ul','ol','li','strong','em','a','img','br','hr','blockquote','pre','code','table','thead','tbody','tr','th','td','div','span'}
 void={'img','br','hr'}
 def __init__(self):super().__init__(convert_charrefs=True);self.out=[];self.skip=0;self.stack=[]
 def handle_starttag(self,t,attrs):
  if t in ('script','style','iframe','object','embed','form'):self.skip+=1;return
  if self.skip:return
  if t=='h1':t='h2'
  if t not in self.allowed:return
  attrs=dict(attrs); out=[]
  if t=='a':
   href=attrs.get('href','').strip()
   if any(x in href.lower() for x in blocked) or not (href.startswith(('/', '#', 'https://','http://','mailto:'))):href=''
   if href:out.append(('href',local(href)))
  if t=='img':
   src=attrs.get('src','').strip()
   if not src.startswith(('https://','http://','/')):return
   src=local(src)
   original=re.sub(r'-\d+x\d+(?=\.[^./]+$)','',src)
   if original.startswith('/wp-content/uploads/') and Path('public'+original).is_file():src=original
   out.extend([('src',local(src)),('alt',attrs.get('alt','')),('loading','lazy')])
  self.out.append('<'+t+''.join(' '+k+'="'+html.escape(v,quote=True)+'"' for k,v in out)+'>')
 def handle_startendtag(self,t,a):self.handle_starttag(t,a)
 def handle_endtag(self,t):
  if t in ('script','style','iframe','object','embed','form'):
   if self.skip:self.skip-=1
   return
  if self.skip:return
  if t=='h1':t='h2'
  if t in self.allowed and t not in self.void:self.out.append('</'+t+'>')
 def handle_data(self,d):
  if not self.skip:self.out.append(html.escape(d))
posts=[]
for i in items:
 if i.findtext('w:post_type',namespaces=n)!='post' or i.findtext('w:status',namespaces=n)!='publish':continue
 meta={m.findtext('w:meta_key',namespaces=n):m.findtext('w:meta_value',default='',namespaces=n) for m in i.findall('w:postmeta',n)}
 raw=i.findtext('c:encoded',default='',namespaces=n)
 if i.findtext('w:post_name',default='',namespaces=n)=='a-practical-guide-to-payments-at-the-rainbet-app-casino': continue
 raw=re.sub(r'<(?:div|p)[^>]*>\s*<a\b[^>]*href=[\"\'][^\"\']*(?:casino-aureonplay\.nl|rainbetapp\.ca)[^\"\']*[\"\'][^>]*>.*?</a>\s*</(?:div|p)>', '', raw, flags=re.I|re.S)
 p=Clean();p.feed(raw);body=''.join(p.out)
 plain=html.unescape(re.sub(r'<[^>]+>',' ',body));plain=re.sub(r'\s+',' ',plain).strip()
 title=i.findtext('title',default=''); slug=i.findtext('w:post_name',default='',namespaces=n); link=i.findtext('link',default='')
 paragraphs=re.findall(r'<p(?:\s[^>]*)?>(.*?)</p>',body,re.I|re.S)
 for part in paragraphs:
  first=re.sub(r'\s+',' ',html.unescape(re.sub(r'<[^>]*>',' ',part))).strip()
  if first:break
 else:first=plain
 description=first if len(first)<=155 else first[:155].rsplit(' ',1)[0].rstrip('.,;:')+'?'
 body=re.sub(r'(<img\b[^>]*?\balt=")[^"]*(")',lambda m:m.group(1)+html.escape(title,quote=True)+m.group(2),body,flags=re.I)
 categories=[x.text for x in i.findall('category') if x.get('domain')=='category' and x.text]
 posts.append({'slug':slug,'title':title,'date':i.findtext('w:post_date',default='',namespaces=n),'modified':i.findtext('w:post_modified',default='',namespaces=n),'categories':categories,'description':meta.get('_yoast_wpseo_metadesc') or plain[:157].rsplit(' ',1)[0]+'…','seoTitle':meta.get('_yoast_wpseo_title',''),'image':local(attachments.get(meta.get('_thumbnail_id'),'')),'content':body,'url':urlparse(link).path})
posts.sort(key=lambda x:x['date'],reverse=True)
for index,post in enumerate(posts):
 post['date']=(datetime.datetime(2026,11,23,12)-datetime.timedelta(days=index)).strftime('%Y-%m-%d %H:%M:%S')
Path('content/blog/posts.json').write_text(json.dumps(posts,ensure_ascii=False,indent=2),encoding='utf-8')
Path('content/blog/image-urls.json').write_text(json.dumps(sorted(images),ensure_ascii=False,indent=2),encoding='utf-8')
print('Imported',len(posts),'published posts and',len(images),'image URLs'); print('Non-root paths:',[x['url'] for x in posts if x['url']!='/'+x['slug']+'/'][:10]);print('Missing slugs:',sum(not x['slug'] for x in posts))
