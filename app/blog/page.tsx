import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { blogCategories, blogPosts, formatPostDate } from "@/lib/blog";

const pageSize = 24;
type Props = { searchParams: Promise<{ page?: string | string[]; category?: string | string[] }> };
function getListing(params: { page?: string | string[]; category?: string | string[] }) {
 const category = params.category === undefined ? undefined : blogCategories.find(item => item.slug === params.category);
 if (params.category !== undefined && !category) return null;
 const posts = category ? blogPosts.filter(post => post.categories.includes(category.name)) : blogPosts;
 const pageCount = Math.ceil(posts.length / pageSize);
 if (params.page !== undefined && (typeof params.page !== "string" || !/^[1-9]\d*$/.test(params.page))) return null;
 const page = params.page === undefined ? 1 : Number(params.page);
 if (!Number.isSafeInteger(page) || page > pageCount) return null;
 return { category, posts, pageCount, page };
}
function pageHref(page: number, category?: string) {
 const query = new URLSearchParams();
 if (category) query.set("category", category);
 if (page > 1) query.set("page", String(page));
 const suffix = query.toString();
 return suffix ? `/blog/?${suffix}` : "/blog/";
}
export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
 const listing = getListing(await searchParams);
 const label = listing?.category ? `${listing.category.name} Articles` : "Blog";
 const title = listing && listing.page > 1 ? `${label} - Page ${listing.page}` : label;
 return { title, description: listing?.category ? `Explore ${listing.category.name} guides and articles from Hosting Nigeria.` : "Practical guides on web hosting in Nigeria, domain names, WordPress and building your business online from Hosting Nigeria.", alternates: { canonical: pageHref(listing?.page ?? 1, listing?.category?.slug) } };
}
export default async function BlogPage({ searchParams }: Props) {
 const listing = getListing(await searchParams);
 if (!listing) notFound();
 const { category, posts, page, pageCount } = listing;
 const visiblePosts = posts.slice((page - 1) * pageSize, page * pageSize);
 return <><SiteHeader/><main className="blog-page"><section className="blog-hero"><div className="wrap blog-hero-grid"><div><span className="faq-eyebrow">THE HOSTING NIGERIA BLOG</span><h1><em>Web Hosting in Nigeria</em> guides and insights.</h1><p>Practical tips on hosting, domains, WordPress and everything you need to grow online.</p></div><div className="blog-hero-visual"><Image src="/blog-hero-transparent.png" alt="Web Hosting in Nigeria guides and insights" width={1659} height={948} priority/></div></div></section><section className="section wrap">{category && <div className="blog-category-heading"><div><span className="faq-eyebrow">BROWSE BY CATEGORY</span><h2>{category.name}</h2></div><Link href="/blog/">View all articles <ArrowRight size={16}/></Link></div>}<div className="blog-grid">{visiblePosts.map(post => <article className="blog-card" key={post.slug}><Link href={post.url} className="blog-card-image" aria-label={post.title}>{post.image ? <img src={post.image} alt={post.title} loading="lazy"/> : <span>HN<span>.</span></span>}</Link><div className="blog-card-body"><div className="blog-card-meta">{post.categories[0] || "Guides"} <span>·</span> {formatPostDate(post.date)}</div><h3><Link href={post.url}>{post.title}</Link></h3><p>{post.description}</p><Link href={post.url} className="blog-read-more">Read article <ArrowRight size={16}/></Link></div></article>)}</div>{pageCount > 1 && <nav className="blog-pagination" aria-label="Blog pages">{page > 1 && <Link className="blog-pagination-direction" href={pageHref(page - 1, category?.slug)}><ArrowLeft size={16}/> Previous</Link>}<div className="blog-pagination-numbers">{Array.from({ length: pageCount }, (_, index) => index + 1).map(number => <Link key={number} href={pageHref(number, category?.slug)} aria-label={`Page ${number}`} aria-current={number === page ? "page" : undefined} className={number === page ? "is-active" : undefined}>{number}</Link>)}</div>{page < pageCount && <Link className="blog-pagination-direction" href={pageHref(page + 1, category?.slug)}>Next <ArrowRight size={16}/></Link>}</nav>}</section></main><SiteFooter/></>;
}
