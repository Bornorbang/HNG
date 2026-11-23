import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Check, CloudUpload, Gauge, Globe2, HardDrive, Headphones, LayoutDashboard, LockKeyhole, Mail, Server, ShieldCheck, Sparkles, UsersRound, Zap } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const title = "Affordable Web Hosting in Nigeria - Hosting Nigeria";
const description = "Get fast, secure and affordable web hosting in Nigeria with NVMe SSD storage, free SSL, cPanel and expert support. Choose a plan from ₦2,000/month.";
const url = "https://hostingnigeria.com/web-hosting/";
export const metadata: Metadata = { title: { absolute: title }, description, alternates: { canonical: url }, openGraph: { type: "website", locale: "en_US", url, siteName: "Hosting Nigeria", title, description, images: [{ url: "/hero-image.webp", width: 770, height: 526, alt: "Affordable Web Hosting in Nigeria" }] }, twitter: { card: "summary_large_image", site: "@hostingnigeria", title, description, images: ["/hero-image.webp"] }, robots: { index: true, follow: true } };
const orderUrl = "https://portal.hostingnigeria.com/index.php?rp=/store/web-hosting";
const plans = [
  { name: "Starter", price: "2,000", annual: "22,000", tagline: "A simple start for your website.", features: ["1 Website", "5GB NVMe SSD Storage", "2GB Dedicated RAM", "Unlimited Bandwidth", "Unlimited Email Accounts", "Unlimited Subdomains", "Free SSL Certificate", "99.9% Server Uptime", "24/7 Email & WhatsApp Support", "cPanel Included"] },
  { name: "Business", price: "6,000", annual: "60,000", tagline: "More room for a growing business.", featured: true, features: ["2 Websites", "10GB NVMe SSD Storage", "2GB Dedicated RAM", "Unlimited Bandwidth", "Unlimited Email Accounts", "Unlimited Subdomains", "Free SSL Certificate", "Free .com.ng Domain", "99.9% Server Uptime", "24/7 Email & WhatsApp Support", "cPanel Included"] },
  { name: "Enterprise", price: "9,000", annual: "90,000", tagline: "Built for bigger sites and ambitions.", features: ["Unlimited Websites", "20GB NVMe SSD Storage", "2GB Dedicated RAM", "Unlimited Bandwidth", "Unlimited Email Accounts", "Unlimited Subdomains", "Free SSL Certificate", "Free .com.ng Domain", "99.9% Server Uptime", "Priority Support", "Free Migration", "cPanel & SSH Access"] },
];
const included = [
  { icon: HardDrive, title: "NVMe SSD Storage", text: "Fast storage for a responsive website." },
  { icon: LockKeyhole, title: "Free SSL Certificate", text: "Help secure your site and visitor data." },
  { icon: LayoutDashboard, title: "cPanel Control Panel", text: "Manage your hosting from one place." },
  { icon: Sparkles, title: "One-Click WordPress", text: "Get your WordPress site up and running." },
  { icon: Mail, title: "Email Accounts", text: "Communicate using your own domain." },
  { icon: Headphones, title: "Expert Support", text: "Get help through email and WhatsApp." },
];
const comparison = [
  ["Websites", "1", "2", "Unlimited"], ["NVMe SSD storage", "5GB", "10GB", "20GB"], ["Dedicated RAM", "2GB", "2GB", "2GB"], ["Bandwidth", "Unlimited", "Unlimited", "Unlimited"], ["Email accounts", "Unlimited", "Unlimited", "Unlimited"], ["Subdomains", "Unlimited", "Unlimited", "Unlimited"], ["Free SSL", "Included", "Included", "Included"], ["Free .com.ng domain", "—", "Included", "Included"], ["cPanel", "Included", "Included", "Included"], ["Uptime guarantee", "99.9%", "99.9%", "99.9%"], ["Priority support", "—", "—", "Included"], ["Free migration", "—", "—", "Included"], ["SSH access", "—", "—", "Included"],
];
const benefits = [
  { icon: Zap, title: "Built for speed", text: "NVMe SSD storage gives your website a fast foundation." },
  { icon: ShieldCheck, title: "Security made simple", text: "Free SSL helps protect the connection to your website." },
  { icon: LayoutDashboard, title: "Easy to manage", text: "Use cPanel to manage your hosting, domains, and email." },
  { icon: Gauge, title: "Room to grow", text: "Choose from plans for a first website or a growing business." },
  { icon: CloudUpload, title: "Website backups", text: "Hosting plans include daily backups to help protect your data." },
  { icon: Headphones, title: "Support when you need it", text: "Reach our team through email, WhatsApp, or a support ticket." },
];
const audiences = [
  { icon: Globe2, title: "Personal websites", text: "Give your ideas, portfolio, or personal project a home online." },
  { icon: UsersRound, title: "Small businesses", text: "Build a professional online presence for your business." },
  { icon: Sparkles, title: "Blogs & creators", text: "Share your work and publish content with WordPress." },
  { icon: Server, title: "Growing websites", text: "Find more space and resources as your audience grows." },
];
const faqs = [
  { q: "Which web hosting plan should I choose?", a: "Starter is suited to one website and smaller projects. Business supports two websites and includes a .com.ng domain, while Enterprise offers unlimited websites and additional support features." },
  { q: "Can I upgrade my hosting plan later?", a: "Yes. You can upgrade your hosting plan as your website and business grow." },
  { q: "Does web hosting include a free SSL certificate?", a: "Yes. Our web hosting plans include a free SSL certificate to help secure your website." },
  { q: "Is a domain name included?", a: "The Business and Enterprise plans include a free .com.ng domain. Check the applicable registration and renewal terms during checkout." },
  { q: "Can I install WordPress?", a: "Yes. You can install WordPress using the one-click installation tools available with your hosting account." },
];
function Heading({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) { return <div className="wh-heading"><span>{eyebrow}</span><h2>{title}</h2><p>{children}</p></div>; }
export default function WebHostingPage() { return <><SiteHeader/><main className="web-hosting-page">
  <section className="wh-hero"><div className="wrap wh-hero-grid"><div><span className="wh-eyebrow"><span/> WEB HOSTING BUILT FOR YOU</span><h1>Affordable Web Hosting<span className="wh-title-break"><br/></span> <em>for all website.</em></h1><p>Get your website online with affordable web hosting in Nigeria. Enjoy fast NVMe storage, free SSL, easy management, and support when you need it.</p><div className="wh-actions"><a className="button button-green" href="#plans">View Hosting Plans <ArrowUpRight size={16}/></a><a className="button button-outline" href="#compare">Compare Features</a></div><div className="wh-hero-perks"><span><Check size={16}/> Free SSL</span><span><Check size={16}/> NVMe SSD Storage</span><span><Check size={16}/> 99.9% Uptime</span><span><Check size={16}/> cPanel Included</span></div></div><div className="wh-hero-art"><div className="wh-art-glow"/><Image src="/infrastructure-green.png" alt="Affordable Web Hosting in Nigeria" width={1200} height={1280} priority/></div></div></section>
  <div className="wh-trust"><div className="wrap"><span><Zap size={19}/> Fast NVMe storage</span><span><LockKeyhole size={19}/> Free SSL certificates</span><span><Headphones size={19}/> Expert support</span><span><ShieldCheck size={19}/> 99.9% uptime</span></div></div>
  <section className="section wrap" id="plans"><Heading eyebrow="SIMPLE, FLEXIBLE PRICING" title="Affordable Web Hosting Plans in Nigeria">From a first website to a growing business, find a plan that fits your needs and your budget.</Heading><div className="wh-plans">{plans.map(plan => <article className={`wh-plan ${plan.featured ? "wh-plan-featured" : ""}`} key={plan.name}>{plan.featured && <span className="wh-plan-badge">POPULAR CHOICE</span>}<span className="wh-plan-name">{plan.name}</span><div className="wh-price"><strong>₦{plan.price}</strong><span>/ month</span></div><div className="wh-annual">{`₦${plan.annual} when billed annually`}</div><p>{plan.tagline}</p><a href={orderUrl} className="button button-green">Choose {plan.name} <ArrowUpRight size={15}/></a><div className="wh-includes">WHAT’S INCLUDED</div><ul>{plan.features.map(feature => <li key={feature}><Check size={16}/>{feature}</li>)}</ul></article>)}</div></section>
  <section className="section section-tint"><div className="wrap"><Heading eyebrow="THE ESSENTIALS, INCLUDED" title="Everything You Need to Get Online">Get the tools to launch, manage, and protect your website with confidence.</Heading><div className="wh-included">{included.map(({icon: Icon, title, text}) => <article key={title}><span><Icon size={21}/></span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>
  <section className="section wrap" id="compare"><Heading eyebrow="PLAN COMPARISON" title="Compare Hosting Plans & Features">See what is included in each web hosting plan and choose the right fit for your website.</Heading><div className="wh-table-wrap"><table className="wh-table"><thead><tr><th scope="col">Feature</th><th scope="col">Starter</th><th scope="col">Business</th><th scope="col">Enterprise</th></tr></thead><tbody>{comparison.map(row => <tr key={row[0]}><th scope="row">{row[0]}</th>{row.slice(1).map((value, index) => <td key={index}>{value}</td>)}</tr>)}</tbody><tfoot><tr><th scope="row">Get started</th>{plans.map(plan => <td key={plan.name}><a href={orderUrl}>Choose {plan.name}</a></td>)}</tr></tfoot></table></div><p className="wh-table-hint">Scroll horizontally to compare plans on smaller screens.</p></section>
  <section className="section section-tint"><div className="wrap"><Heading eyebrow="WHY HOSTING NIGERIA" title="A Better Foundation for Your Website">Reliable hosting should make it easier to focus on what matters: growing your online presence.</Heading><div className="wh-benefits">{benefits.map(({icon: Icon, title, text}) => <article key={title}><span><Icon size={21}/></span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
  <section className="section wrap"><Heading eyebrow="MADE FOR YOUR IDEAS" title="Hosting for Websites of All Sizes">Whether you’re starting something new or building on an established idea, there’s a plan for you.</Heading><div className="wh-audiences">{audiences.map(({icon: Icon, title, text}) => <article key={title}><Icon size={24}/><h3>{title}</h3><p>{text}</p></article>)}</div></section>
  <section className="section section-tint"><div className="wrap wh-faq"><Heading eyebrow="QUESTIONS & ANSWERS" title="Web Hosting Questions Answered">Find answers to common questions about affordable web hosting in Nigeria.</Heading><div className="faq-list">{faqs.map(({q,a}) => <details className="faq-item" key={q}><summary>{q}<span aria-hidden="true"/></summary><p>{a}</p></details>)}</div></div></section>
  <section className="wh-cta"><div className="wrap"><h2>Ready to launch your website?</h2><p>Find the hosting plan that brings your next idea online.</p><a className="button button-dark" href={orderUrl}>Order Now <ArrowUpRight size={16}/></a></div></section>
</main><SiteFooter/></>; }
