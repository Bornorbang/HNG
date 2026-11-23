import { NextResponse } from "next/server";
import { domainToASCII } from "node:url";

type Suggestion = { domainName?: unknown };
const validDomain = /^(?=.{1,253}$)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/;
export const runtime = "nodejs";

export async function GET(request: Request) {
  const input = new URL(request.url).searchParams.get("keyword")?.trim().toLowerCase().replace(/\.$/, "") ?? "";
  const keyword = domainToASCII(input);
  if (!keyword || !validDomain.test(keyword)) {
    return NextResponse.json({ error: "Enter a valid domain name, such as mybusiness.com." }, { status: 400, headers: { "Cache-Control": "no-store" } });
  }
  const relayUrl = process.env.CONNECTRESELLER_RELAY_URL?.trim();
  const relaySecret = process.env.CONNECTRESELLER_RELAY_SECRET?.trim();
  const apiKey = process.env.CONNECTRESELLER_API_KEY?.trim();
  if ((relayUrl && (!relaySecret || relaySecret.length < 32)) || (!relayUrl && !apiKey)) {
    console.error("Domain suggestion service is not configured.");
    return NextResponse.json({ error: "Domain suggestions are temporarily unavailable. Please try again later." }, { status: 503, headers: { "Cache-Control": "no-store" } });
  }
  try {
    let response: Response;
    if (relayUrl) {
      const endpoint = new URL(relayUrl);
      if (endpoint.protocol !== "https:" || endpoint.hostname !== "portal.hostingnigeria.com" || endpoint.username || endpoint.password || endpoint.port || endpoint.search || endpoint.hash) throw new Error("Invalid relay configuration");
      response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json", "X-Relay-Token": relaySecret! }, body: JSON.stringify({ keyword }), cache: "no-store", redirect: "error", signal: AbortSignal.timeout(27000) });
    } else {
      const endpoint = new URL("https://api.connectreseller.com/ConnectReseller/ESHOP/domainSuggestion");
      endpoint.searchParams.set("APIKey", apiKey!);
      endpoint.searchParams.set("keyword", keyword);
      endpoint.searchParams.set("maxResult", "40");
      response = await fetch(endpoint, { cache: "no-store", redirect: "error", signal: AbortSignal.timeout(27000) });
    }
    if (!response.ok) {
      console.error(relayUrl ? "Domain suggestion relay returned status" : "Domain suggestion provider returned status", response.status);
      throw new Error("Provider request failed");
    }
    const data: { registryDomainSuggestionList?: unknown; domains?: unknown } = await response.json();
    const entries = relayUrl ? data.domains : data.registryDomainSuggestionList;
    if (!Array.isArray(entries)) {
      console.error("Domain suggestion service returned an unexpected response.");
      throw new Error("Unexpected provider response");
    }
    const domains = [...new Set<string>(entries.slice(0, 40).map((item: string | Suggestion) => {
      const name = relayUrl ? item : (item as Suggestion)?.domainName;
      return typeof name === "string" ? domainToASCII(name.trim().toLowerCase()) : "";
    }).filter((name: string) => validDomain.test(name)))];
    return NextResponse.json({ domains }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    console.error("Domain suggestion request failed or timed out. Check the service status above if present.");
    return NextResponse.json({ error: "Unable to retrieve domain suggestions right now. Please try again later." }, { status: 502, headers: { "Cache-Control": "no-store" } });
  }
}
