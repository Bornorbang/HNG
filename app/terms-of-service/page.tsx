import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import content from "@/content/terms.json";
export const metadata: Metadata = { title: "Terms of Service", description: "Read the terms governing Hosting Nigeria services.", alternates: { canonical: "https://hostingnigeria.com/terms-of-service/" } };
export default function Page() { return <LegalPage title="Terms of Service" intro="The terms governing Hosting Nigeria services." html={content.html}/>; }
