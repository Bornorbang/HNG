import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Check, CloudUpload, Gauge, Globe2, HardDrive, Headphones, LayoutDashboard, LockKeyhole, Mail, Server, ShieldCheck, Sparkles, UsersRound, Zap } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const title = "WordPress Hosting in Nigeria - Hosting Nigeria";
const description = "Get fast and affordable WordPress hosting in Nigeria from ₦2,500/month, with WordPress pre-installed, free SSL, daily backups and expert support.";
const url = "https://hostingnigeria.com/wordpress-hosting/";
export const metadata: Metadata = { title: { absolute: title }, description, alternates: { canonical: url }, openGraph: { type: "website", locale: "en_US", url, siteName: "Hosting Nigeria", title, description, images: [{ url: "/infrastructure-green.png", alt: "WordPress Hosting in Nigeria" }] }, twitter: { card: "summary_large_image", site: "@hostingnigeria", title, description, images: ["/infrastructure-green.png"] }, robots: { index: true, follow: true } };
const orderUrl = "https://portal.hostingnigeria.com/index.php?rp=/store/wordpress-hosting";
const plans = [
  { name: "WP Starter", price: "2,500", annual: "25,000", tagline: "A great start for your WordPress website.", features: ["2 Websites", "5GB SSD Storage", "2GB Dedicated RAM", "Unlimited Bandwidth", "Unlimited Email Accounts", "Free SSL Certificate", "WordPress Auto-Installed", "Daily Backups", "99.9% Uptime Guarantee", "24/7 Support"] },
  { name: "WP Business", price: "7,000", annual: "70,000", tagline: "More room for your growing business.", featured: true, features: ["5 Websites", "10GB SSD Storage", "2GB Dedicated RAM", "Unlimited Bandwidth", "Unlimited Email Accounts", "Free SSL Certificate", "Free .com.ng Domain", "WordPress Auto-Installed", "Daily Backups", "99.9% Uptime Guarantee", "24/7 Support"] },
  { name: "WP Unlimited", price: "10,000", annual: "90,000", tagline: "More flexibility for ambitious websites.", features: ["Unlimited Websites", "20GB SSD Storage", "2GB Dedicated RAM", "Unlimited Bandwidth", "Unlimited Email Accounts", "Free SSL Certificate", "Free .com.ng Domain", "WordPress Auto-Installed", "Daily Backups", "Unlimited SQL Databases", "Priority Support", "SSH Access"] },
];
const included = [
  { icon: Sparkles, title: "WordPress Pre-Installed", text: "Start building without installing WordPress yourself." },
  { icon: LockKeyhole, title: "Free SSL Certificate", text: "Help secure your website and visitor data." },
  { icon: CloudUpload, title: "Daily Backups", text: "Keep regular backups of your website data." },
  { icon: HardDrive, title: "SSD Storage", text: "Fast storage for a responsive website." },
  { icon: Mail, title: "Email Accounts", text: "Communicate using your own domain name." },
  { icon: Headphones, title: "Expert Support", text: "Get help with your hosting when you need it." },
];
const comparison = [
  ["Websites", "2", "5", "Unlimited"], ["SSD storage", "5GB", "10GB", "20GB"], ["Dedicated RAM", "2GB", "2GB", "2GB"], ["Bandwidth", "Unlimited", "Unlimited", "Unlimited"], ["Email accounts", "Unlimited", "Unlimited", "Unlimited"], ["Free SSL", "Included", "Included", "Included"], ["WordPress auto-installed", "Included", "Included", "Included"], ["Daily backups", "Included", "Included", "Included"], ["Free .com.ng domain", "—", "Included", "Included"], ["24/7 support", "Included", "Included", "Included"], ["Uptime guarantee", "99.9%", "99.9%", "99.9%"], ["Unlimited SQL databases", "—", "—", "Included"], ["Priority support", "—", "—", "Included"], ["SSH access", "—", "—", "Included"],
];
const benefits = [
  { icon: Zap, title: "Optimized performance", text: "SSD storage and caching help your WordPress website run smoothly." },
  { icon: Sparkles, title: "Ready for WordPress", text: "WordPress comes pre-installed so you can start building sooner." },
  { icon: ShieldCheck, title: "Free SSL protection", text: "Help protect the connection between your website and visitors." },
  { icon: CloudUpload, title: "Daily backups", text: "Regular backups help you keep a copy of your website data." },
  { icon: LayoutDashboard, title: "Simple management", text: "Manage your website with tools designed to make hosting easier." },
  { icon: Gauge, title: "Room to grow", text: "Choose a plan that fits your website as your needs change." },
];
const audiences = [
  { icon: Globe2, title: "Blogs & personal sites", text: "Share your ideas, work, and stories with the world." },
  { icon: UsersRound, title: "Small businesses", text: "Build a professional online home for your business." },
  { icon: Sparkles, title: "Online stores", text: "Create a WordPress website for your products and customers." },
  { icon: Server, title: "Growing websites", text: "Choose more resources as your website and audience grow." },
];
const faqs = [
  { q: "What is WordPress hosting?", a: "WordPress hosting is configured for websites built with WordPress. Our plans include WordPress pre-installed, SSD storage, free SSL, and daily backups." },
  { q: "Which WordPress hosting plan should I choose?", a: "WP Starter supports two websites and is a good place to start. WP Business supports five websites, while WP Unlimited is designed for larger projects and includes unlimited websites." },
  { q: "Is WordPress installed for me?", a: "Yes. WordPress is automatically installed with our WordPress hosting plans, so you can begin building your website." },
  { q: "Is a free domain included?", a: "WP Business and WP Unlimited include a free .com.ng domain. Check registration and renewal terms during checkout." },
  { q: "Are SSL and backups included?", a: "Yes. All three WordPress hosting plans include a free SSL certificate and daily backups." },
  { q: "Can I upgrade my WordPress hosting plan?", a: "Yes. You can upgrade your hosting plan as your website and resource requirements grow." },
];
function Heading({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) { return <div className="wh-heading"><span>{eyebrow}</span><h2>{title}</h2><p>{children}</p></div>; }
export default function WordPressHostingPage() { return <><SiteHeader/><main className="web-hosting-page">
  <section className="wh-hero"><div className="wrap wh-hero-grid"><div><span className="wh-eyebrow"><span/> WORDPRESS HOSTING IN NIGERIA</span><h1 className="wp-hero-title">WordPress Hosting in<span className="wh-title-break"><br/></span> Nigeria, <em>built for growth.</em></h1><p>Get your website online with affordable WordPress hosting in Nigeria. Enjoy WordPress pre-installed, free SSL, daily backups, and support when you need it.</p><div className="wh-actions"><a className="button button-green" href="#plans">View Hosting Plans <ArrowUpRight size={16}/></a><a className="button button-outline" href="#compare">Compare Features</a></div><div className="wh-hero-perks"><span><Check size={16}/> WordPress Pre-Installed</span><span><Check size={16}/> Free SSL</span><span><Check size={16}/> Daily Backups</span><span><Check size={16}/> 99.9% Uptime</span></div></div><div className="wh-hero-art"><div className="wh-art-glow"/><Image src="/wordpress-hero.png" alt="WordPress Hosting in Nigeria" width={605} height={412} priority/></div></div></section>
  <div className="wh-trust"><div className="wrap"><span><Sparkles size={19}/> WordPress pre-installed</span><span><LockKeyhole size={19}/> Free SSL certificates</span><span><CloudUpload size={19}/> Daily backups</span><span><Headphones size={19}/> Expert support</span></div></div>
  <section className="section wrap" id="plans"><Heading eyebrow="SIMPLE, FLEXIBLE PRICING" title="WordPress Hosting Plans in Nigeria">Compare affordable WordPress hosting plans with free SSL for your website, business, or next big idea.</Heading><div className="wh-plans">{plans.map(plan => <article className={`wh-plan ${plan.featured ? "wh-plan-featured" : ""}`} key={plan.name}>{plan.featured && <span className="wh-plan-badge">POPULAR CHOICE</span>}<span className="wh-plan-name">{plan.name}</span><div className="wh-price"><strong>&#8358;{plan.price}</strong><span>/ month</span></div><div className="wh-annual">&#8358;{plan.annual} when billed annually</div><p>{plan.tagline}</p><a href={orderUrl} className="button button-green">Choose {plan.name} <ArrowUpRight size={15}/></a><div className="wh-includes">WHAT’S INCLUDED</div><ul>{plan.features.map(feature => <li key={feature}><Check size={16}/>{feature}</li>)}</ul></article>)}</div></section>
  <section className="section section-tint"><div className="wrap"><Heading eyebrow="BUILT FOR WORDPRESS" title="Everything You Need to Get Started">Launch and manage your WordPress website with the tools and support you need.</Heading><div className="wh-included">{included.map(({icon: Icon, title, text}) => <article key={title}><span><Icon size={21}/></span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>
  <section className="section wrap" id="compare"><Heading eyebrow="PLAN COMPARISON" title="Compare WordPress Hosting Plans">Find the right combination of features and resources for your WordPress website.</Heading><div className="wh-table-wrap"><table className="wh-table"><thead><tr><th scope="col">Feature</th><th scope="col">WP Starter</th><th scope="col">WP Business</th><th scope="col">WP Unlimited</th></tr></thead><tbody>{comparison.map(row => <tr key={row[0]}><th scope="row">{row[0]}</th>{row.slice(1).map((value, index) => <td key={index}>{value}</td>)}</tr>)}</tbody><tfoot><tr><th scope="row">Get started</th>{plans.map(plan => <td key={plan.name}><a href={orderUrl}>Choose {plan.name}</a></td>)}</tr></tfoot></table></div><p className="wh-table-hint">Scroll horizontally to compare plans on smaller screens.</p></section>
  <section className="section section-tint"><div className="wrap"><Heading eyebrow="WHY HOSTING NIGERIA" title="A Better Home for Your WordPress Website">From your first post to a growing business, get a reliable foundation for your website.</Heading><div className="wh-benefits">{benefits.map(({icon: Icon, title, text}) => <article key={title}><span><Icon size={21}/></span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
  <section className="section wrap"><Heading eyebrow="MADE FOR YOUR IDEAS" title="Hosting for Every Kind of WordPress Site">Build a website that fits your goals with flexible WordPress hosting in Nigeria.</Heading><div className="wh-audiences">{audiences.map(({icon: Icon, title, text}) => <article key={title}><Icon size={24}/><h3>{title}</h3><p>{text}</p></article>)}</div></section>
  <section className="section section-tint"><div className="wrap wh-faq"><Heading eyebrow="QUESTIONS & ANSWERS" title="WordPress Hosting Questions Answered">Find answers to common questions about WordPress hosting in Nigeria.</Heading><div className="faq-list">{faqs.map(({q,a}) => <details className="faq-item" key={q}><summary>{q}<span aria-hidden="true"/></summary><p>{a}</p></details>)}</div></div></section>
  <section className="wh-cta"><div className="wrap"><h2>Ready to build with WordPress?</h2><p>Find the right hosting plan and bring your website to life.</p><a className="button button-dark" href={orderUrl}>Order Now <ArrowUpRight size={16}/></a></div></section>
</main><SiteFooter/></>; }
