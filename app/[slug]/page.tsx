import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { blogCategories, blogPosts, getPost, formatPostDate } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return blogPosts.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
 const post = getPost((await params).slug);
 if (!post) return {};
 const title = post.seoTitle && !post.seoTitle.includes("%%") ? post.seoTitle : post.title;
 return { title: { absolute: title }, description: post.description, alternates: { canonical: post.url }, openGraph: { type: "article", title, description: post.description, url: post.url, publishedTime: post.date.replace(" ", "T") + "Z", ...(post.image ? { images: [{ url: post.image, alt: post.title }] } : {}) }, twitter: { card: "summary_large_image", title, description: post.description, ...(post.image ? { images: [post.image] } : {}) } };
}
export default async function BlogPost({ params }: Props) {
 const post = getPost((await params).slug); if (!post) notFound();
 const related = blogPosts.filter((p) => p.slug !== post.slug && p.categories.some((category) => post.categories.includes(category))).slice(0,3);
 const recent = blogPosts.filter((p) => p.slug !== post.slug).slice(0,5);
 const structuredData = { "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title, description: post.description, mainEntityOfPage: `https://hostingnigeria.com${post.url}`, publisher: { "@type": "Organization", name: "Hosting Nigeria", url: "https://hostingnigeria.com/" }, ...(post.image ? { image: `https://hostingnigeria.com${post.image}` } : {}) };
 return <><SiteHeader/><main className="blog-page"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}/>
  <section className="article-hero"><div className="wrap"><div className="article-hero-content"><div className="article-hero-meta"><span>{post.categories[0] || "Guides"}</span><time dateTime={post.date.slice(0,10)}>{formatPostDate(post.date)}</time></div><h1>{post.title}</h1><div className="article-hero-accent" aria-hidden="true"/></div></div></section>
  <div className="wrap article-layout"><article className="article-main">{post.image && <img className="article-featured" src={post.image} alt={post.title}/>}<div className="article-content" dangerouslySetInnerHTML={{ __html: post.content }}/></article>
   <aside className="article-sidebar" aria-label="Blog sidebar"><div className="article-sidebar-block article-categories"><span className="faq-eyebrow">EXPLORE TOPICS</span><h2>Categories</h2><nav aria-label="Blog categories">{blogCategories.map(category => <Link key={category.slug} href={`/blog/?category=${category.slug}`}><span>{category.name}</span><span className="category-count">{category.count}</span></Link>)}</nav></div><div className="article-sidebar-block"><span className="faq-eyebrow">FROM OUR BLOG</span><h2>Recent articles</h2><div className="article-sidebar-posts">{recent.map(item=><Link key={item.slug} href={item.url}><span>{item.title}</span><ArrowRight size={16}/></Link>)}</div></div><div className="article-sidebar-cta"><span className="faq-eyebrow">READY TO GET ONLINE?</span><h2>Give your ideas a home.</h2><p>Find reliable hosting for your website with Hosting Nigeria.</p><Link href="/web-hosting/">View hosting plans <ArrowRight size={16}/></Link></div></aside>
  </div>
  {related.length > 0 && <section className="section section-tint article-related"><div className="wrap"><div className="blog-list-heading"><div><span className="faq-eyebrow">KEEP READING</span><h2>More from our blog</h2></div><Link className="blog-read-more" href="/blog/">View all articles <ArrowRight size={16}/></Link></div><div className="blog-grid">{related.map(item=><article className="blog-card" key={item.slug}><Link href={item.url} className="blog-card-image" aria-label={item.title}>{item.image ? <img src={item.image} alt={item.title} loading="lazy"/> : <span>HN<span>.</span></span>}</Link><div className="blog-card-body"><div className="blog-card-meta">{formatPostDate(item.date)}</div><h3><Link href={item.url}>{item.title}</Link></h3><Link href={item.url} className="blog-read-more">Read article <ArrowRight size={16}/></Link></div></article>)}</div></div></section>}
 </main><SiteFooter/></>;
}
