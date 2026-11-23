import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import content from "@/content/privacy.json";
export const metadata: Metadata = { title: "Privacy Policy", description: "Learn how Hosting Nigeria collects, uses and protects personal information.", alternates: { canonical: "https://hostingnigeria.com/privacy-policy/" } };
export default function Page() { return <LegalPage title="Privacy Policy" intro="How we collect, use and protect your information." html={content.html}/>; }
