import Link from "next/link";
import { HeroVisual } from "@/components/hero-visual";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Check, Clock3, Zap, LockKeyhole, CloudUpload, CircleArrowUp, HardDrive, TerminalSquare, UsersRound, Globe2, LayoutGrid, Mail, Search, Server, } from "lucide-react";

const title = "Fast & Affordable Web Hosting in Nigeria - Hosting Nigeria";
const description = "Buy fast and affordable web hosting in Nigeria & register domain names. Enjoy 99.9% uptime, free SSL, free domain and 24/7 expert support.";
const siteUrl = "https://hostingnigeria.com/";
const socialImage = "/hero-image.webp";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "website", locale: "en_US", url: siteUrl, siteName: "Hosting Nigeria", title, description, images: [{ url: socialImage, width: 770, height: 526, alt: "Fast & Affordable Web Hosting in Nigeria" }] },
  twitter: { card: "summary_large_image", site: "@hostingnigeria", title, description, images: [socialImage] },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${siteUrl}#organization`, name: "Hosting Nigeria", url: siteUrl, logo: { "@type": "ImageObject", url: `${siteUrl}hostingnigeria-logo.png`, width: 438, height: 121 }, sameAs: ["https://x.com/hostingnigeria", "https://instagram.com/hostingnigeria", "https://tiktok.com/@hostingnigeria"] },
    { "@type": "WebSite", "@id": `${siteUrl}#website`, url: siteUrl, name: "Hosting Nigeria", publisher: { "@id": `${siteUrl}#organization` }, inLanguage: "en-US" },
    { "@type": "WebPage", "@id": siteUrl, url: siteUrl, name: title, description, isPartOf: { "@id": `${siteUrl}#website` }, about: { "@id": `${siteUrl}#organization` }, primaryImageOfPage: { "@id": `${siteUrl}#primaryimage` }, inLanguage: "en-US" },
    { "@type": "ImageObject", "@id": `${siteUrl}#primaryimage`, url: `${siteUrl}hero-image.webp`, width: 770, height: 526, caption: "Fast & Affordable Web Hosting in Nigeria" },
  ],
};

const portal = "https://portal.hostingnigeria.com/";
const webPlans = [
  { name: "Starter", description: "Perfect for individuals or small projects building a simple online presence.", price: "2,000", features: ["Single Website", "5GB NVMe SSD Disk Space", "Unlimited Bandwidth", "Unlimited Subdomains", "SSL Certificate"] },
  { name: "Business", description: "Designed for growing businesses that need more flexibility.", price: "6,000", features: ["2 Websites", "10GB NVMe SSD Disk Space", "Free .com.ng Domain", "Unlimited Email Accounts", "Everything in Starter Plan"] },
  { name: "Enterprise", description: "For large enterprises or websites with high traffic and data requirements.", price: "9,000", features: ["Unlimited Websites", "20GB NVMe SSD Disk Space", "2 Cores CPU", "2GB Dedicated RAM", "Everything in Business Plan"] },
];
const vpsPlans = [
  { name: "Cloud VPS 1", description: "Entry-level plan with dedicated resources for small websites, apps, and development projects.", price: "15,500", features: ["1 vCPU Core", "2 GB Dedicated RAM", "25 GB NVMe SSD", "10 TB Bandwidth", "1 IPv4 Address", "Full Root Access"] },
  { name: "Cloud VPS 2", description: "High-performance VPS, ideal for growing websites and business applications.", price: "22,500", features: ["1 vCPU Core", "4 GB Dedicated RAM", "50 GB NVMe SSD", "25 TB Bandwidth", "1 IPv4 Address", "Full Root Access"] },
  { name: "Cloud VPS 3", description: "Powerful Cloud VPS hosting with enhanced CPU and memory for high-traffic websites.", price: "34,500", features: ["2 vCPU Core", "8 GB Dedicated RAM", "80 GB NVMe SSD", "30 TB Bandwidth", "1 IPv4 Address", "Full Root Access"] },
];
const wordpressPlans = [
  { name: "WP Starter", description: "Affordable WordPress hosting in Nigeria for small websites.", price: "2,500", features: ["2 websites", "5 GB NVMe SSD", "2 GB Dedicated RAM", "Unlimited Bandwidth", "Unlimited Emails", "WordPress Auto-Installed"] },
  { name: "WP Business", description: "Reliable WordPress hosting for growing businesses.", price: "7,000", features: ["5 websites", "10 GB NVMe SSD", "2 GB Dedicated RAM", "Unlimited Bandwidth", "Unlimited Emails", "WordPress Auto-Installed"] },
  { name: "WP Unlimited", description: "High-performance WordPress hosting for high-traffic websites.", price: "10,000", features: ["Unlimited websites", "20 GB NVMe SSD", "2 GB Dedicated RAM", "Unlimited Bandwidth", "Unlimited Emails", "WordPress Auto-Installed"] },
];
const services = [
  { icon: HardDrive, name: "Web Hosting", text: "Get fast and reliable web hosting for your website with secure servers, excellent performance, and dependable uptime.", href: "https://hostingnigeria.com/web-hosting/" },
  { icon: Globe2, name: "WordPress Hosting", text: "Enjoy optimized WordPress hosting with improved speed, security, and easy management tools.", href: "https://hostingnigeria.com/wordpress-hosting/" },
  { icon: TerminalSquare, name: "Cloud VPS Hosting", text: "Powerful cloud VPS hosting with dedicated resources, scalability, and reliable performance.", href: "https://hostingnigeria.com/vps-hosting/" },
  { icon: Clock3, name: "Temporary Hosting", text: "Flexible hosting for testing, website migration, development projects, and short-term needs.", href: "/temporary-hosting-plan/" },
  { icon: Mail, name: "Professional Email", text: "Create a professional business identity with secure email hosting using your own domain name.", href: portal },
  { icon: UsersRound, name: "Reseller Hosting", text: "Start your hosting business with tools and resources to manage your customers easily.", href: null },
];
const addons = [
  { name: "Temporary Number", text: "Get a temporary foreign number for your online verification needs.", href: "https://tempnumber.ng/" },
  { name: "SMM Panel", text: "Explore social media marketing services to support your online presence.", href: "https://www.smmpanel.ng/", external: true },
  { name: "SSL Certificates", text: "Secure your website with encryption that helps protect visitor data.", href: "/ssl-certificates/" },
  { name: "Professional Email", text: "Build a professional identity with email using your own domain name.", href: "/professional-email/" },
  { name: "Website Backup", text: "Keep a backup of your website so you can be prepared when you need it.", href: "/website-backup/" },
  { name: "Email Spam Filtering", text: "Help keep unwanted messages out of your inbox with spam filtering.", href: "/email-spam-filtering/" },
];
const faqs = [
  { question: "What is web hosting?", answer: <><Link href="/web-hosting/">Web hosting</Link> gives your website a place to live online. It stores your website files on a server so visitors can access your site through your domain name.</> },
  { question: "Which hosting plan should I choose?", answer: <>Our <Link href="/web-hosting/">web hosting plans</Link> include Starter for a single website or small project, Business for growing businesses, and Enterprise for larger sites with greater resource needs.</> },
  { question: "Do I need a domain name and hosting?", answer: <>Yes. A domain is your website?s address, while hosting stores the files that make up your website. You can <Link href="/register-domain/">register a domain</Link> and choose a <Link href="/web-hosting/">hosting plan</Link> with Hosting Nigeria.</> },
  { question: "Is an SSL certificate included?", answer: <>Our web hosting plans include an <Link href="/ssl-certificates/">SSL certificate</Link> to help secure the connection between your website and its visitors.</> },
  { question: "What is the difference between web hosting and VPS hosting?", answer: <><Link href="/web-hosting/">Web hosting</Link> is a straightforward option for websites that share server resources. <Link href="/vps-hosting/">VPS hosting</Link> provides dedicated resources and root access, making it suitable for projects that need more control.</> },
  { question: "Can I host a WordPress website?", answer: <>Yes. Our <Link href="/wordpress-hosting/">WordPress hosting plans</Link> are designed for WordPress websites and include WordPress auto-installation.</> },
  { question: "What if I need help with my hosting?", answer: <>Our support team is available 24/7 to help with questions about your hosting. You can reach us through the <a href="https://portal.hostingnigeria.com/">client area</a> or <Link href="/contact/">contact us</Link> by email or WhatsApp.</> },
];
type Plan = { name: string; description: string; price: string; features: string[] };
function Plans({ plans }: { plans: Plan[] }) { return <div className="plans-grid">{plans.map((plan, i) => <article className="plan" key={plan.name}><div className="plan-title">{i === 2 ? <Server size={23}/> : <LayoutGrid size={23}/>}<h3>{plan.name}</h3></div><p>{plan.description}</p><ul>{plan.features.map(feature => <li key={feature}><Check size={16}/><span>{feature}</span></li>)}</ul><div className="price"><span>Starting at:</span><strong>₦{plan.price}</strong><small>/month</small></div><a className="button button-outline" href={portal}>Order Now <ArrowUpRight size={16}/></a></article>)}</div>; }
function SectionHeading({ title, children }: { title: string; children: React.ReactNode }) { return <div className="section-heading"><h2>{title}</h2><p>{children}</p></div>; }
export default function Home() { return <>
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
  <SiteHeader/>
  <main><section className="wh-hero homepage-hero"><div className="wrap wh-hero-grid"><div><h1>Fast & Affordable Web<span className="hero-break"><br/></span> <em className="hero-thrust"><span className="hero-rocket hero-rocket-top" aria-hidden="true"/><span className="hero-rocket hero-rocket-bottom" aria-hidden="true"/>Hosting in Nigeria</em></h1><p>Buy affordable domain names and fast web hosting in Nigeria. Enjoy fast loading speed, 99.9% uptime, free SSL, free domain and 24/7 expert support.</p><div className="wh-actions"><a className="button button-green" href="https://portal.hostingnigeria.com/cart.php?a=add&domain=register"><Globe2 size={16}/> Register Domain</a><a className="button button-green" href="https://portal.hostingnigeria.com/index.php?rp=/store/web-hosting"><Server size={16}/> Buy Hosting</a></div></div><div className="wh-hero-art homepage-hero-art"><HeroVisual/></div></div></section>
  <section className="domain-section section wrap" id="domains"><SectionHeading title="Register Your Domain">With Hosting Nigeria, you can register, transfer, and manage your domains easily — all in one place. Find the perfect name for your next big idea.</SectionHeading><form className="domain-form" action="https://portal.hostingnigeria.com/cart.php" method="get"><input type="hidden" name="a" value="add"/><input type="hidden" name="domain" value="register"/><label className="sr-only" htmlFor="domain">Search for a domain</label><input id="domain" name="query" placeholder="e.g. example.com" required/><button className="button button-dark" type="submit"><Search size={16}/> Search</button><a className="button button-outline transfer" href="https://portal.hostingnigeria.com/cart.php?a=add&domain=transfer">Transfer</a></form><div className="domain-prices"><span><b>.com</b> &#8358;19,357</span><span><b>.com.ng</b> &#8358;7,208</span><span><b>.net</b> &#8358;21,492</span><span><b>.org</b> &#8358;20,342</span><span><b>.ng</b> &#8358;15,089</span><a href="https://portal.hostingnigeria.com/index.php?rp=/domain/pricing">View All Pricing <ArrowUpRight size={14}/></a></div></section>
  <section className="section section-tint" id="hosting"><div className="wrap"><SectionHeading title="Choose a Web Hosting Plan for your Needs">Affordable web hosting in Nigeria with strong security, fast servers, and reliable customer support. Our hosting plans are designed to deliver speed, stability, and protection for websites of all sizes.</SectionHeading><Plans plans={webPlans}/><div className="center"><a className="button button-outline" href="https://hostingnigeria.com/web-hosting/">View All Features <ArrowUpRight size={16}/></a></div></div></section>
  <section className="section wrap" id="services"><SectionHeading title="Hosting for Every Ambition">From Web hosting and WordPress hosting to cloud VPS hosting and professional email, we provide scalable services that help businesses grow online.</SectionHeading><div className="services-grid">{services.map(({name, text, href}, index) => <article className="service-card" key={name}><span className={`service-illustration service-illustration-${index}`} aria-hidden="true"/><h3>{name}</h3><p>{text}</p>{href ? <a href={href}>Explore Plans <ArrowUpRight size={14}/></a> : <span>Coming soon</span>}</article>)}</div></section>
  <section className="section section-tint" id="wordpress"><div className="wrap"><SectionHeading title="WordPress Hosting for Every Website">Build and grow your WordPress website with hosting designed for speed, security, and simple management.</SectionHeading><Plans plans={wordpressPlans}/><div className="center"><a className="button button-outline" href="https://hostingnigeria.com/wordpress-hosting/">View All Features <ArrowUpRight size={16}/></a></div></div></section>
  <section className="section wrap" id="addons"><SectionHeading title="More Tools for Your Business">Explore additional services to help you connect, protect your website, and grow your online presence.</SectionHeading><div className="services-grid">{addons.map((addon, index) => <article className="service-card" key={addon.name}><span className={`service-illustration addon-illustration service-illustration-${index}`} aria-hidden="true"/><h3>{addon.name}</h3><p>{addon.text}</p><a href={addon.href} {...(addon.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>Order Now <ArrowUpRight size={14}/></a></article>)}</div></section>
  <section className="section section-tint" id="vps"><div className="wrap"><SectionHeading title="High-Performance Cloud VPS Hosting">Scale your online projects with powerful Cloud VPS hosting. Enjoy dedicated resources, full root access, and high-performance NVMe storage designed for developers, businesses, and high-traffic websites.</SectionHeading><Plans plans={vpsPlans}/><div className="center"><a className="button button-outline" href="https://hostingnigeria.com/vps-hosting/">View All Features <ArrowUpRight size={16}/></a></div></div></section>
  <section className="section infrastructure-section"><div className="wrap infrastructure-layout"><div className="infrastructure-copy"><span className="faq-eyebrow">HOSTING YOU CAN COUNT ON</span><h2>Hosting That Performs When It Matters</h2><p>Give your website a reliable foundation with hosting built for speed, security, and room to grow.</p><div className="infrastructure-features"><div><span><Zap size={22}/></span><div><h3>High-Speed Servers</h3><p>NVMe SSD storage helps your website load quickly and stay responsive for visitors.</p></div></div><div><span><LockKeyhole size={22}/></span><div><h3>SSL Included</h3><p>Protect your website and give visitors confidence with an SSL certificate.</p></div></div><div><span><CloudUpload size={22}/></span><div><h3>Website Backups</h3><p>Keep your website data protected with backup options for added peace of mind.</p></div></div><div><span><CircleArrowUp size={22}/></span><div><h3>Room to Grow</h3><p>Choose the resources that fit your needs as your website and business grow.</p></div></div></div><Link className="button button-green infrastructure-button" href="/web-hosting/">View Hosting Plans</Link></div><div className="infrastructure-image-space"><Image src="/infrastructure-green.png" width={1200} height={1280} alt="Fast & Affordable Web Hosting in Nigeria" className="infrastructure-image"/></div></div></section>
  <section className="section faq-section" id="faq"><div className="wrap faq-layout"><div className="faq-intro"><span className="faq-eyebrow">HERE TO HELP</span><h2>Frequently Asked Questions</h2><p>Everything you need to know about getting your website online. Need more help? Our team is here for you.</p></div><div className="faq-list">{faqs.map(({question, answer}) => <details className="faq-item" key={question}><summary>{question}<span aria-hidden="true"/></summary><p>{answer}</p></details>)}</div></div></section>
  <section className="cta"><div className="wrap cta-inner"><div><h2>Build Your Website with Hosting Nigeria.</h2><p>Everything you need to bring your ideas online.</p></div><a className="button button-dark" href="https://portal.hostingnigeria.com/index.php?rp=/store/web-hosting">Order Now <ArrowUpRight size={16}/></a></div></section></main>
  <SiteFooter/>
</>; }


