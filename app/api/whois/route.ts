import { NextResponse } from "next/server";
import { domainToASCII } from "node:url";

type Event = { eventAction?: string; eventDate?: string };
type Entity = { roles?: string[]; vcardArray?: [string, unknown[][]] };
type RDAPRecord = { ldhName?: string; status?: string[]; nameservers?: { ldhName?: string }[]; events?: Event[]; entities?: Entity[] };
export const runtime = "nodejs";
export async function GET(request: Request) {
  const input = new URL(request.url).searchParams.get("domain")?.trim().toLowerCase().replace(/\.$/, "") ?? "";
  const domain = domainToASCII(input);
  if (!domain || domain.length > 253 || !/^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(domain)) return NextResponse.json({ error: "Enter a valid domain name, such as example.com." }, { status: 400 });
  try {
    const bootstrapResponse = await fetch("https://data.iana.org/rdap/dns.json", { next: { revalidate: 86400 }, signal: AbortSignal.timeout(12000) });
    if (!bootstrapResponse.ok) throw new Error("Registry directory unavailable");
    const bootstrap: { services: [string[], string[]][] } = await bootstrapResponse.json();
    const tld = domain.split(".").pop();
    const service = bootstrap.services.find(([extensions]) => extensions.includes(tld ?? ""));
    const base = service?.[1].find(address => address.startsWith("https://"));
    if (!base) return NextResponse.json({ error: "Registration lookup is not available for this domain extension." }, { status: 422 });
    const endpoint = new URL(`domain/${encodeURIComponent(domain)}`, base.endsWith("/") ? base : `${base}/`);
    const response = await fetch(endpoint, { headers: { Accept: "application/rdap+json, application/json" }, cache: "no-store", signal: AbortSignal.timeout(15000) });
    if (response.status === 404) return NextResponse.json({ error: "No registration record was found." }, { status: 404 });
    if (!response.ok) throw new Error("Registry lookup failed");
    const record: RDAPRecord = await response.json();
    const event = (action: string) => record.events?.find(item => item.eventAction?.toLowerCase() === action)?.eventDate ?? null;
    const registrar = record.entities?.find(entity => entity.roles?.includes("registrar"))?.vcardArray?.[1]?.find(field => field[0] === "fn")?.[3];
    return NextResponse.json({ domain: record.ldhName || domain, registrar: typeof registrar === "string" ? registrar : null, created: event("registration"), expires: event("expiration"), updated: event("last changed"), status: Array.isArray(record.status) ? record.status.filter((value): value is string => typeof value === "string") : [], nameservers: Array.isArray(record.nameservers) ? record.nameservers.map(item => item.ldhName).filter((value): value is string => typeof value === "string") : [] }, { headers: { "Cache-Control": "no-store" } });
  } catch { return NextResponse.json({ error: "We couldn’t retrieve registration details right now. Please try again." }, { status: 502 }); }
}
