import concurrent.futures,urllib.request,urllib.parse,json,pathlib,time,sys
urls=json.loads(pathlib.Path(sys.argv[1] if len(sys.argv)>1 else 'content/blog/image-urls.json').read_text(encoding='utf-8')); base=pathlib.Path('public').resolve()
def get(url):
 try:
  path=urllib.parse.unquote(urllib.parse.urlparse(url).path); dst=(base/path.lstrip('/')).resolve()
  if base not in dst.parents:return (url,'unsafe path')
  if dst.exists():return (url,'existing')
  req=urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0'})
  with urllib.request.urlopen(req,timeout=20) as r:
   if not r.headers.get('Content-Type','').startswith('image/'):return (url,'not an image')
   data=r.read(12000001)
   if len(data)>12000000:return (url,'too large')
  dst.parent.mkdir(parents=True,exist_ok=True);dst.write_bytes(data);return (url,'ok')
 except Exception as e:return (url,str(e))
with concurrent.futures.ThreadPoolExecutor(max_workers=12) as pool: results=list(pool.map(get,urls))
failed=[{'url':u,'error':s} for u,s in results if s not in ('ok','existing')]
pathlib.Path('content/blog/missing-images.json').write_text(json.dumps(failed,indent=2),encoding='utf-8')
print('Downloaded or already present:',len(results)-len(failed),'of',len(results));print('Failures:',len(failed));print(failed[:3])
