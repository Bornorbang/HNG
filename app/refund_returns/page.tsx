import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import content from "@/content/refund.json";
export const metadata: Metadata = { title: "Refund and Returns Policy", description: "Read Hosting Nigeria’s refund and returns policy.", alternates: { canonical: "https://hostingnigeria.com/refund_returns/" } };
export default function Page() { return <LegalPage title="Refund and Returns Policy" intro="Our policy on cancellations, refunds and billing matters." html={content.html}/>; }
