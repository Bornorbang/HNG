import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Check, Cloud, Cpu, Database, Gauge, Globe2, HardDrive, Headphones, Layers, Server, ShieldCheck, Terminal, UsersRound, Zap } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const title = "Cloud VPS Hosting in Nigeria - Hosting Nigeria";
const description = "Get cloud VPS hosting in Nigeria with dedicated resources, NVMe SSD storage, KVM virtualization and full root access. Plans start at ₦15,500 per month.";
const url = "https://hostingnigeria.com/vps-hosting/";
export const metadata: Metadata = { title: { absolute: title }, description, alternates: { canonical: url }, openGraph: { type: "website", locale: "en_US", url, siteName: "Hosting Nigeria", title, description, images: [{ url: "/infrastructure-green.png", alt: "Cloud VPS Hosting in Nigeria" }] }, twitter: { card: "summary_large_image", site: "@hostingnigeria", title, description, images: ["/infrastructure-green.png"] }, robots: { index: true, follow: true } };
const orderUrl = "https://portal.hostingnigeria.com/index.php?rp=/store/vps-hosting";
const plans = [
  { name: "Cloud VPS 1", price: "15,500", tagline: "A strong start for smaller projects.", features: ["1 vCPU Core", "2GB Dedicated RAM", "25GB NVMe SSD Storage", "10TB Bandwidth", "Choice of OS", "1 IPv4 Address", "Full Root Access", "KVM Virtualization", "Virtualizor Panel", "99.9% Uptime", "Ticket Support"] },
  { name: "Cloud VPS 2", price: "22,500", tagline: "More resources for growing workloads.", featured: true, features: ["1 vCPU Core", "4GB Dedicated RAM", "50GB NVMe SSD Storage", "25TB Bandwidth", "Choice of OS", "1 IPv4 Address", "Full Root Access", "KVM Virtualization", "Virtualizor Panel", "99.9% Uptime", "Ticket Support"] },
  { name: "Cloud VPS 3", price: "34,500", tagline: "More capacity for demanding projects.", features: ["2 vCPU Cores", "8GB Dedicated RAM", "80GB NVMe SSD Storage", "30TB Bandwidth", "Choice of OS", "1 IPv4 Address", "Full Root Access", "KVM Virtualization", "Virtualizor Panel", "99.9% Uptime", "Ticket Support"] },
];
const included = [
  { icon: Cpu, title: "Dedicated Resources", text: "CPU and RAM allocated to your virtual server." },
  { icon: HardDrive, title: "NVMe SSD Storage", text: "Fast storage for your websites and applications." },
  { icon: Terminal, title: "Full Root Access", text: "Install software and configure your server." },
  { icon: Layers, title: "KVM Virtualization", text: "An isolated virtual server environment." },
  { icon: Globe2, title: "IPv4 Address", text: "A public IPv4 address with every plan." },
  { icon: Server, title: "Virtualizor Panel", text: "Manage your virtual server from one place." },
];
const comparison = [
  ["vCPU cores", "1", "1", "2"], ["Dedicated RAM", "2GB", "4GB", "8GB"], ["NVMe SSD storage", "25GB", "50GB", "80GB"], ["Bandwidth", "10TB", "25TB", "30TB"], ["IPv4 address", "1", "1", "1"], ["Full root access", "Included", "Included", "Included"], ["KVM virtualization", "Included", "Included", "Included"], ["Virtualizor panel", "Included", "Included", "Included"], ["Choice of OS", "Included", "Included", "Included"], ["Uptime guarantee", "99.9%", "99.9%", "99.9%"], ["Ticket support", "Included", "Included", "Included"],
];
const benefits = [
  { icon: Gauge, title: "Built for performance", text: "Dedicated resources and NVMe SSD storage support demanding workloads." },
  { icon: Terminal, title: "Full server control", text: "Use root access to install software and configure your environment." },
  { icon: Layers, title: "Isolated environment", text: "KVM virtualization provides your own virtual server environment." },
  { icon: Globe2, title: "Your choice of OS", text: "Select a Linux distribution that suits your project." },
  { icon: Zap, title: "Room to scale", text: "Upgrade your resources as your requirements grow." },
  { icon: Headphones, title: "Ticket support", text: "Contact the support team when you need help with your server." },
];
const audiences = [
  { icon: Globe2, title: "Websites", text: "Run growing websites with dedicated server resources." },
  { icon: Cloud, title: "Web applications", text: "Deploy applications in an environment you control." },
  { icon: Database, title: "Business workloads", text: "Host tools and services for your business operations." },
  { icon: UsersRound, title: "Development projects", text: "Build and test projects with root access and your choice of OS." },
];
const faqs = [
  { q: "What is VPS hosting?", a: "A virtual private server uses virtualization to provide an isolated environment with dedicated resources. It offers more control than shared hosting, including root access." },
  { q: "Which operating systems can I choose?", a: "You can choose from Linux distributions including Ubuntu, Debian and AlmaLinux. Available versions are shown when you order." },
  { q: "Do I get full root access?", a: "Yes. Every Cloud VPS plan includes full root access so you can install software and configure your server." },
  { q: "Do I need technical knowledge to manage a VPS?", a: "Managing a VPS typically requires familiarity with Linux, SSH, and server configuration. Contact our support team if you need help with server setup or management options." },
  { q: "Can I upgrade my VPS plan?", a: "Yes. You can request an upgrade as your resource requirements grow. Contact support for details and any necessary maintenance window." },
  { q: "How quickly is my VPS activated?", a: "Most Cloud VPS orders are provisioned automatically within minutes after payment is confirmed." },
];
function Heading({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) { return <div className="wh-heading"><span>{eyebrow}</span><h2>{title}</h2><p>{children}</p></div>; }
export default function VPSHostingPage() { return <><SiteHeader/><main className="web-hosting-page">
  <section className="wh-hero"><div className="wrap wh-hero-grid"><div><span className="wh-eyebrow"><span/> CLOUD VPS HOSTING</span><h1>Cloud VPS Hosting <span className="wh-title-break"><br/></span><em>built for control.</em></h1><p>Deploy cloud VPS hosting with dedicated resources, fast NVMe SSD storage, KVM virtualization, and full root access for your websites and applications.</p><div className="wh-actions"><a className="button button-green" href="#plans">View VPS Plans <ArrowUpRight size={16}/></a><a className="button button-outline" href="#compare">Compare Features</a></div><div className="wh-hero-perks"><span><Check size={16}/> Full Root Access</span><span><Check size={16}/> NVMe SSD Storage</span><span><Check size={16}/> KVM Virtualization</span><span><Check size={16}/> 99.9% Uptime</span></div></div><div className="wh-hero-art"><div className="wh-art-glow"/><Image src="/vps-hero-illustration.png" alt="Cloud VPS Hosting in Nigeria" width={1581} height={995} priority/></div></div></section>
  <div className="wh-trust"><div className="wrap"><span><Cpu size={19}/> Dedicated resources</span><span><HardDrive size={19}/> NVMe SSD storage</span><span><Terminal size={19}/> Full root access</span><span><ShieldCheck size={19}/> KVM virtualization</span></div></div>
  <section className="section wrap" id="plans"><Heading eyebrow="CLOUD VPS PLANS" title="Choose Your Cloud VPS Plan">Find dedicated resources and the flexibility to run your next project, starting at &#8358;15,500 per month.</Heading><div className="wh-plans">{plans.map(plan => <article className={`wh-plan ${plan.featured ? "wh-plan-featured" : ""}`} key={plan.name}>{plan.featured && <span className="wh-plan-badge">POPULAR CHOICE</span>}<span className="wh-plan-name">{plan.name}</span><div className="wh-price"><strong>&#8358;{plan.price}</strong><span>/ month</span></div><p>{plan.tagline}</p><a href={orderUrl} className="button button-green">Choose {plan.name} <ArrowUpRight size={15}/></a><div className="wh-includes">WHAT’S INCLUDED</div><ul>{plan.features.map(feature => <li key={feature}><Check size={16}/>{feature}</li>)}</ul></article>)}</div></section>
  <section className="section section-tint"><div className="wrap"><Heading eyebrow="VPS FEATURES" title="What You Get with Every VPS">Everything you need to configure and manage your own virtual server.</Heading><div className="wh-included">{included.map(({icon: Icon, title, text}) => <article key={title}><span><Icon size={21}/></span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>
  <section className="section wrap" id="compare"><Heading eyebrow="PLAN COMPARISON" title="Compare Cloud VPS Plans">Compare resources and features to find the right VPS for your workload.</Heading><div className="wh-table-wrap"><table className="wh-table"><thead><tr><th scope="col">Feature</th><th scope="col">Cloud VPS 1</th><th scope="col">Cloud VPS 2</th><th scope="col">Cloud VPS 3</th></tr></thead><tbody>{comparison.map(row => <tr key={row[0]}><th scope="row">{row[0]}</th>{row.slice(1).map((value, index) => <td key={index}>{value}</td>)}</tr>)}</tbody><tfoot><tr><th scope="row">Get started</th>{plans.map(plan => <td key={plan.name}><a href={orderUrl}>Choose {plan.name}</a></td>)}</tr></tfoot></table></div><p className="wh-table-hint">Scroll horizontally to compare plans on smaller screens.</p></section>
  <section className="section section-tint"><div className="wrap"><Heading eyebrow="YOUR SERVER, YOUR CHOICE" title="Choose Your Linux Distribution">Select an operating system that fits your experience and workload. Available versions are shown during checkout.</Heading><div className="wh-audiences vps-os"><article><Terminal size={24}/><h3>Ubuntu</h3><p>A popular Linux distribution for servers and applications.</p></article><article><Terminal size={24}/><h3>Debian</h3><p>A flexible foundation for your server environment.</p></article><article><Terminal size={24}/><h3>AlmaLinux</h3><p>A Linux distribution for production workloads.</p></article></div></div></section>
  <section className="section wrap"><Heading eyebrow="WHY CLOUD VPS" title="More Power and Control for Your Projects">Get the resources and flexibility to build on your own terms.</Heading><div className="wh-benefits">{benefits.map(({icon: Icon, title, text}) => <article key={title}><span><Icon size={21}/></span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
  <section className="section section-tint"><div className="wrap"><Heading eyebrow="BUILT FOR YOUR WORKLOAD" title="What Can You Run on a VPS?">Cloud VPS hosting gives you a flexible foundation for a wide range of projects.</Heading><div className="wh-audiences">{audiences.map(({icon: Icon, title, text}) => <article key={title}><Icon size={24}/><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
  <section className="section"><div className="wrap wh-faq"><Heading eyebrow="QUESTIONS & ANSWERS" title="Cloud VPS Questions Answered">Find answers to common questions about VPS hosting.</Heading><div className="faq-list">{faqs.map(({q,a}) => <details className="faq-item" key={q}><summary>{q}<span aria-hidden="true"/></summary><p>{a}</p></details>)}</div></div></section>
  <section className="wh-cta"><div className="wrap"><h2>Ready to launch your VPS?</h2><p>Choose the resources you need and get started today.</p><a className="button button-dark" href={orderUrl}>Order Now <ArrowUpRight size={16}/></a></div></section>
</main><SiteFooter/></>; }
