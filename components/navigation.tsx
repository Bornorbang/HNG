"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowLeftRight, BadgeDollarSign, ChevronDown, Clock3, Cloud, Code2, DatabaseBackup, Globe2, HardDrive, Mail, Menu, UserRound, Search, ShieldCheck, Smartphone, TrendingUp, Wrench, type LucideIcon } from "lucide-react";

type Item = { label: string; description: string; href: string; icon: LucideIcon };
const groups: { label: string; items: Item[] }[] = [
  { label: "Hosting", items: [
    { label: "Web Hosting", description: "A reliable home for your website", href: "/web-hosting/", icon: HardDrive },
    { label: "WordPress Hosting", description: "Hosting made for WordPress", href: "/wordpress-hosting/", icon: Globe2 },
    { label: "VPS Hosting", description: "Dedicated resources and control", href: "/vps-hosting/", icon: Cloud },
    { label: "Temporary Hosting", description: "Flexible short-term hosting", href: "/temporary-hosting-plan/", icon: Clock3 },
  ] },
  { label: "Domains", items: [
    { label: "Register Domain", description: "Find your place online", href: "/register-domain/", icon: Globe2 },
    { label: "Transfer Domain to us", description: "Bring your domain to us", href: "https://portal.hostingnigeria.com/cart.php?a=add&domain=transfer", icon: ArrowLeftRight },
    { label: "Domain Pricing", description: "Explore domain extensions", href: "https://portal.hostingnigeria.com/index.php?rp=/domain/pricing", icon: BadgeDollarSign },
    { label: "Domain Generator", description: "Discover domain name ideas", href: "/domain-generator/", icon: Search },
  ] },
  { label: "Add-ons & Security", items: [
    { label: "Non-VoIP USA Number", description: "A number for online verification", href: "https://tempnumber.ng/", icon: Smartphone },
    { label: "Professional Email", description: "Email with your own domain", href: "/professional-email/", icon: Mail },
    { label: "Website Backup", description: "Keep your website data backed up", href: "/website-backup/", icon: DatabaseBackup },
    { label: "Email Spam Filtering", description: "Keep unwanted email at bay", href: "/email-spam-filtering/", icon: ShieldCheck },
  ] },
  { label: "Services", items: [
    { label: "Web Development", description: "Bring your website idea to life", href: "/web-development-services/", icon: Code2 },
    { label: "SEO Services", description: "Help customers find you online", href: "/seo-services-in-nigeria/", icon: TrendingUp },
    { label: "Website Maintenance", description: "Keep your website running smoothly", href: "/website-maintenance/", icon: Wrench },
  ] },
];
function MenuItems({ items, close }: { items: Item[]; close: () => void }) { return <div className={`dropdown-panel ${items.length > 3 ? "dropdown-panel-wide" : ""}`}>{items.map(({ label, description, href, icon: Icon }) => <a href={href} className="dropdown-item" key={label} onClick={close}><span className="dropdown-icon">{label === "WordPress Hosting" ? <svg viewBox="0 0 24 24" width="21" height="21" fill="currentColor" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0ZM1.2 12a10.76 10.76 0 0 1 .934-4.4l5.151 14.112A10.8 10.8 0 0 1 1.2 12ZM12 22.8c-1.06 0-2.083-.154-3.05-.438l3.24-9.42 3.32 9.095c.022.054.048.103.076.149A10.78 10.78 0 0 1 12 22.8Zm1.488-15.863c.65-.034 1.235-.102 1.235-.102.58-.068.512-.922-.07-.888 0 0-1.744.137-2.87.137-1.06 0-2.838-.137-2.838-.137-.58-.034-.648.854-.068.888 0 0 .549.068 1.129.102l1.676 4.592-2.355 7.06-3.918-11.652c.65-.034 1.235-.102 1.235-.102.58-.068.512-.922-.068-.888 0 0-1.745.137-2.871.137-.202 0-.44-.005-.692-.013A10.79 10.79 0 0 1 12 1.2c2.794 0 5.341 1.06 7.258 2.8-.046-.003-.09-.009-.137-.009-1.06 0-1.812.922-1.812 1.912 0 .888.513 1.64 1.06 2.528.41.717.89 1.64.89 2.97 0 .922-.355 1.992-.82 3.482l-1.075 3.592-3.876-11.538Zm3.943 14.397 3.299-9.538c.616-1.538.82-2.767.82-3.86 0-.397-.026-.767-.072-1.112A10.8 10.8 0 0 1 17.431 21.334Z"/></svg> : <Icon size={19}/>}</span><span><strong>{label}</strong><small>{description}</small></span></a>)}</div>; }
export function Navigation() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => { const onClick = (event: PointerEvent) => { if (!root.current?.contains(event.target as Node)) { setOpen(null); setMobile(false); } }; const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(null); setMobile(false); } }; document.addEventListener("pointerdown", onClick); document.addEventListener("keydown", onKey); return () => { document.removeEventListener("pointerdown", onClick); document.removeEventListener("keydown", onKey); }; }, []);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 901px)");
    const onChange = () => { setOpen(null); setMobile(false); };
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);
  const close = () => { setOpen(null); setMobile(false); };
  const group = (g: typeof groups[number]) => { const GroupIcon = g.label === "Hosting" ? HardDrive : g.label === "Domains" ? Globe2 : g.label === "Add-ons & Security" ? ShieldCheck : Wrench; return <div className="nav-group" key={g.label}><button type="button" className="nav-trigger" aria-expanded={open === g.label} onClick={() => setOpen(open === g.label ? null : g.label)}><span className="nav-trigger-label"><GroupIcon className="mobile-group-icon" size={18}/>{g.label}</span><ChevronDown size={14}/></button>{open === g.label && <MenuItems items={g.items} close={close}/>}</div>; };
  return <div className="navigation" ref={root}><nav className="desktop-nav" aria-label="Main navigation">{group(groups[0])}{group(groups[1])}<Link className="nav-direct" href="/ssl-certificates/">SSL Certificates</Link>{group(groups[2])}{group(groups[3])}</nav><button className="mobile-nav-toggle" type="button" aria-label={mobile ? "Close navigation" : "Open navigation"} aria-expanded={mobile} onClick={() => { setMobile(!mobile); setOpen(null); }}><Menu size={23}/></button>{mobile && <nav className="mobile-nav" aria-label="Mobile navigation">{group(groups[0])}{group(groups[1])}<Link className="nav-direct" href="/ssl-certificates/" onClick={close}><ShieldCheck size={18}/> SSL Certificates</Link>{group(groups[2])}{group(groups[3])}<a className="mobile-client" href="https://portal.hostingnigeria.com/" onClick={close}><UserRound size={18}/> Client Area</a></nav>}</div>;
}
