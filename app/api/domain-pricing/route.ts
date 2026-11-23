import { NextResponse } from "next/server";
const tlds = ["com", "com.ng", "ng", "org", "net", "shop", "online", "dev"];
type Prices = { register?: Record<string, string | number>; transfer?: Record<string, string | number>; renew?: Record<string, string | number> };
export async function GET() {
  const identifier = process.env.WHMCS_API_IDENTIFIER;
  const secret = process.env.WHMCS_API_SECRET;
  const currencyId = process.env.WHMCS_NGN_CURRENCY_ID;
  if (!identifier || !secret || !currencyId || !/^\d+$/.test(currencyId)) return NextResponse.json({ error: "Live pricing is not configured." }, { status: 503 });
  try {
    const body = new URLSearchParams({ action: "GetTLDPricing", identifier, secret, currencyid: currencyId, responsetype: "json" });
    const response = await fetch("https://portal.hostingnigeria.com/includes/api.php", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body, cache: "no-store", signal: AbortSignal.timeout(15000) });
    if (!response.ok) throw new Error("Pricing unavailable");
    const data: { result?: string; currency?: { code?: string }; pricing?: Record<string, Prices> } = await response.json();
    if (data.result !== "success" || data.currency?.code !== "NGN" || !data.pricing) throw new Error("Invalid pricing response");
    const price = (value: string | number | undefined) => { const amount = Number(value); return value === undefined || !Number.isFinite(amount) || amount < 0 ? null : amount; };
    const rows = tlds.map(tld => ({ tld, years: 1, register: price(data.pricing?.[tld]?.register?.["1"]), transfer: price(data.pricing?.[tld]?.transfer?.["1"]), renew: price(data.pricing?.[tld]?.renew?.["1"]) })).filter(row => row.register !== null || row.transfer !== null || row.renew !== null);
    if (!rows.length) throw new Error("No configured prices");
    return NextResponse.json({ rows }, { headers: { "Cache-Control": "no-store" } });
  } catch { return NextResponse.json({ error: "Live pricing is temporarily unavailable." }, { status: 502 }); }
}
