import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Instagram, Mail, Ticket } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const title = "Contact Hosting Nigeria - Hosting & Domain Support";
const description = "Contact Hosting Nigeria for help with web hosting, domains and website services. Reach our team by WhatsApp, email or support ticket.";
const url = "https://hostingnigeria.com/contact/";
export const metadata: Metadata = { title: { absolute: title }, description, alternates: { canonical: url }, robots: { index: true, follow: true }, openGraph: { type: "website", locale: "en_US", url, siteName: "Hosting Nigeria", title, description }, twitter: { card: "summary_large_image", site: "@hostingnigeria", title, description } };
function WhatsAppIcon({ size = 24 }: { size?: number }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.1a8.1 8.1 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3a8.1 8.1 0 1 1 6.8 3.7Zm4.5-6.1c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1l-.7.8c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.2-2.8c-.2-.2 0-.4.1-.5l.4-.5.2-.4c.1-.2 0-.3 0-.5l-.8-1.8c-.2-.4-.4-.3-.6-.3h-.5c-.2 0-.5.1-.7.4-.3.3-.9.9-.9 2.1s.9 2.3 1 2.5a9.7 9.7 0 0 0 3.7 3.3c1.4.6 2 .7 2.7.6.4-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2l-.7-.4Z"/></svg>; }
function XIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.5 5.5 22H2.4l7.2-8.4L1.8 2h6.5l4.5 6.9L18.9 2Zm-1.1 18h1.7L7.4 3.9H5.6L17.8 20Z"/></svg>; }
function TikTokIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.7 2c.2 1.7 1.2 2.7 2.9 2.8v3.1a7 7 0 0 1-2.9-.7v6.3c0 4-2.2 6.5-5.8 6.5a5.7 5.7 0 0 1-.8-11.3v3.2a2.5 2.5 0 1 0 3.4 2.4V2h3.2Z"/></svg>; }
const channels = [
  { icon: WhatsAppIcon, label: "WhatsApp", text: "Chat with our team about hosting, domains or your website.", href: "https://wa.me/+2349160421899", action: "Message us" },
  { icon: Mail, label: "Email", text: "Send us your questions and tell us how we can help.", href: "mailto:support@hostingnigeria.com", action: "Send an email" },
  { icon: Ticket, label: "Support ticket", text: "Need help with an existing service? Send our support team a ticket.", href: "https://portal.hostingnigeria.com/submitticket.php?step=2&deptid=1", action: "Open a ticket" },
];
export default function ContactPage() { return <><SiteHeader/><main>
  <section className="wh-hero"><div className="wrap wh-hero-grid"><div><span className="wh-eyebrow"><span/> WE?RE HERE TO HELP</span><h1>Contact Hosting Nigeria</h1><p>Have a question about hosting, domains or your website? Our team is ready to help you find the right way forward.</p></div><div className="wh-hero-art"><div className="wh-art-glow"/><Image src="/hero-image.webp" alt="Hosting Nigeria" width={770} height={526} priority/></div></div></section>
  <section className="section wrap contact-section"><div className="wh-heading"><span>GET IN TOUCH</span><h2>How can we help?</h2><p>Choose the most convenient way to reach our team.</p></div><div className="contact-grid">{channels.map(({icon: Icon, label, text, href, action}) => <article className="contact-card" key={label}><span className="contact-icon"><Icon size={24}/></span><h3>{label}</h3><p>{text}</p><a href={href}>{action} <ArrowUpRight size={16}/></a></article>)}</div></section>
  <section className="section section-tint"><div className="wrap contact-social-redesign"><div className="wh-heading"><span>STAY CONNECTED</span><h2>Find us on social media.</h2><p>Follow Hosting Nigeria and stay connected wherever you are.</p></div><div className="contact-social-grid"><a href="https://www.instagram.com/hostingnigeria/" aria-label="Hosting Nigeria on Instagram"><Instagram size={24}/><strong>Instagram</strong><ArrowUpRight size={16}/></a><a href="https://x.com/hostingnigeria" aria-label="Hosting Nigeria on X"><XIcon/><strong>X</strong><ArrowUpRight size={16}/></a><a href="https://www.tiktok.com/@hostingnigeria" aria-label="Hosting Nigeria on TikTok"><TikTokIcon/><strong>TikTok</strong><ArrowUpRight size={16}/></a><a href="https://wa.me/+2349160421899" aria-label="Hosting Nigeria on WhatsApp"><WhatsAppIcon size={24}/><strong>WhatsApp</strong><ArrowUpRight size={16}/></a></div></div></section>
  <section className="wh-cta"><div className="wrap"><h2>Ready to get started?</h2><p>Explore hosting built for your next idea.</p><Link className="button button-dark" href="/web-hosting/">Explore Hosting <ArrowUpRight size={16}/></Link></div></section>
</main><SiteFooter/></>; }
