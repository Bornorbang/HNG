import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeftRight, ArrowUpRight, Check, Headphones, LayoutDashboard, Search, Server, Settings2, ShieldCheck } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { DomainPricing } from "@/components/domain-pricing";

const title = "Domain Registration in Nigeria - Hosting Nigeria";
const description = "Register a domain name in Nigeria with Hosting Nigeria. Search for .com, .ng, .com.ng and more, and manage your domain in one place.";
const url = "https://hostingnigeria.com/register-domain/";
export const metadata: Metadata = { title: { absolute: title }, description, alternates: { canonical: url }, robots: { index: true, follow: true }, openGraph: { type: "website", locale: "en_US", url, siteName: "Hosting Nigeria", title, description, images: [{ url: "/infrastructure-green.png", alt: "Domain Registration in Nigeria" }] }, twitter: { card: "summary_large_image", site: "@hostingnigeria", title, description, images: ["/infrastructure-green.png"] } };
const registerUrl = "https://portal.hostingnigeria.com/cart.php?a=add&domain=register";
const transferUrl = "https://portal.hostingnigeria.com/cart.php?a=add&domain=transfer";
const pricingUrl = "https://portal.hostingnigeria.com/index.php?rp=/domain/pricing";
const extensions = [
  { name: ".com", price: "19,357", text: "A familiar choice for businesses and ideas with a global audience." },
  { name: ".com.ng", price: "7,208", text: "Give your business a distinctly Nigerian online identity." },
  { name: ".ng", price: "15,089", text: "Make a local connection with Nigeria’s country domain." },
  { name: ".org", price: "20,342", text: "A recognizable address for communities and organizations." },
];
const features = [
  { icon: LayoutDashboard, title: "One Client Portal", text: "Manage your domains, hosting and billing from one place." },
  { icon: Settings2, title: "Easy Domain Management", text: "Update DNS settings, renew domains and manage your account online." },
  { icon: ShieldCheck, title: "Domain Security", text: "Protect your account and domain with security tools such as two-factor authentication and domain lock." },
  { icon: ArrowLeftRight, title: "Domain Transfers", text: "Bring your existing domain to Hosting Nigeria and manage it alongside your services." },
  { icon: Server, title: "Hosting for Your Domain", text: "Connect your domain to a hosting plan when you are ready to build your website." },
  { icon: Headphones, title: "Help When You Need It", text: "Contact our support team for help with your domain and hosting." },
];
const faqs = [
  { q: "What is a domain name?", a: "A domain name is the address visitors type into their browser to find your website, such as example.com." },
  { q: "How do I register a domain name in Nigeria?", a: "Search for your preferred name, choose an available extension and complete registration through the Hosting Nigeria client portal." },
  { q: "Which domain extension should I choose?", a: "Choose an extension that fits your audience and purpose. For example, .com is widely recognized, while .ng and .com.ng can help identify a Nigerian presence." },
  { q: "Can I transfer an existing domain?", a: <>Yes. Use the <a href={transferUrl}>domain transfer page</a> to start transferring an eligible domain to Hosting Nigeria.</> },
  { q: "Do I need hosting as well as a domain?", a: <>A domain is your website’s address; hosting stores your website files. Explore our <Link href="/web-hosting/">web hosting plans</Link> when you are ready to build your site.</> },
  { q: "How much does a domain cost?", a: <>Prices vary by extension, registration period and renewal. Visit the <a href={pricingUrl}>domain pricing page</a> for current registration, transfer and renewal prices.</> },
];
function Heading({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) { return <div className="wh-heading"><span>{eyebrow}</span><h2>{title}</h2><p>{children}</p></div>; }
export default function RegisterDomainPage() { return <><SiteHeader/><main className="web-hosting-page">
  <section className="wh-hero"><div className="wrap wh-hero-grid"><div><span className="wh-eyebrow"><span/> DOMAIN REGISTRATION IN NIGERIA</span><h1>Find the right domain <em>for your next idea.</em></h1><p>Register a domain name in Nigeria and give your business, project or idea a place to call home. Explore .com, .ng, .com.ng and more.</p><form className="domain-form domain-hero-form" action="https://portal.hostingnigeria.com/cart.php" method="get"><input type="hidden" name="a" value="add"/><input type="hidden" name="domain" value="register"/><label className="sr-only" htmlFor="hero-domain-name">Domain name</label><input id="hero-domain-name" name="query" placeholder="Find your domain name" required/><button className="button button-green" type="submit"><Search size={17}/> Search Domain</button></form><div className="wh-hero-perks"><span><Check size={16}/> Domain management</span><span><Check size={16}/> Wide choice of extensions</span><span><Check size={16}/> Support when you need it</span></div></div><div className="wh-hero-art"><div className="wh-art-glow"/><Image src="/register-domain-hero.png" alt="Domain Registration in Nigeria" width={605} height={412} priority/></div></div></section>
  <section className="section wrap domain-page-search" id="domain-search"><Heading eyebrow="FIND YOUR DOMAIN" title="Register Your Domain Name">Start with a name that is easy to remember and right for your idea.</Heading><form className="domain-form" action="https://portal.hostingnigeria.com/cart.php" method="get"><input type="hidden" name="a" value="add"/><input type="hidden" name="domain" value="register"/><label className="sr-only" htmlFor="domain-name">Domain name</label><input id="domain-name" name="query" placeholder="Enter your domain name, e.g. example.com" required/><button className="button button-green" type="submit"><Search size={17}/> Search Domain</button></form><div className="domain-search-links"><a href={transferUrl}>Transfer an existing domain <ArrowUpRight size={15}/></a><a href={pricingUrl}>View all domain pricing <ArrowUpRight size={15}/></a></div></section>
  <section className="section section-tint"><div className="wrap"><Heading eyebrow="POPULAR EXTENSIONS" title="Choose a Domain That Fits">From a local business to a global project, find an extension that suits your goals.</Heading><div className="domain-extension-grid">{extensions.map(extension => <article key={extension.name}><span className="domain-extension">{extension.name}</span><div className="domain-card-price">&#8358;{extension.price}<small> / year</small></div><p>{extension.text}</p><a href={registerUrl}>Find a domain <ArrowUpRight size={15}/></a></article>)}</div><div className="center"><a className="button button-outline" href={pricingUrl}>View All Domain Pricing <ArrowUpRight size={16}/></a></div></div></section>
  <section className="section wrap"><Heading eyebrow="WHY HOSTING NIGERIA" title="Your Domain, Easy to Manage">Everything starts with a great name. We make it simple to register, manage and grow your online presence.</Heading><div className="wh-benefits">{features.map(({icon: Icon, title, text}) => <article key={title}><span><Icon size={21}/></span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
  <section className="section domain-pricing-section"><div className="wrap"><Heading eyebrow="DOMAIN PRICING" title="Find Out the Price for Your Domain">Compare registration, transfer and renewal prices for popular domain extensions.</Heading><DomainPricing/><div className="center"><a className="button button-dark" href={pricingUrl}>View All Domain Names <ArrowUpRight size={16}/></a></div></div></section>
  <section className="section"><div className="wrap wh-faq"><Heading eyebrow="QUESTIONS & ANSWERS" title="Domain Registration Questions Answered">Find answers to common questions about registering a domain name in Nigeria.</Heading><div className="faq-list">{faqs.map(({q,a}) => <details className="faq-item" key={q}><summary>{q}<span aria-hidden="true"/></summary><p>{a}</p></details>)}</div></div></section>
  <section className="wh-cta"><div className="wrap"><h2>Ready to find your domain?</h2><p>Take the first step towards bringing your idea online.</p><a className="button button-dark" href={registerUrl}>Register a Domain <ArrowUpRight size={16}/></a></div></section>
</main><SiteFooter/></>; }
