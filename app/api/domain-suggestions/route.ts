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
  const apiKey = process.env.CONNECTRESELLER_API_KEY?.trim();
  if (!apiKey) {
    console.error("Domain suggestion service is not configured.");
    return NextResponse.json({ error: "Domain suggestions are temporarily unavailable. Please try again later." }, { status: 503, headers: { "Cache-Control": "no-store" } });
  }
  const endpoint = new URL("https://api.connectreseller.com/ConnectReseller/ESHOP/domainSuggestion");
  endpoint.searchParams.set("APIKey", apiKey);
  endpoint.searchParams.set("keyword", keyword);
  endpoint.searchParams.set("maxResult", "40");
  try {
    const response = await fetch(endpoint, { cache: "no-store", signal: AbortSignal.timeout(30000) });
    if (!response.ok) {
      console.error("Domain suggestion provider returned status", response.status);
      throw new Error("Provider request failed");
    }
    const data: { registryDomainSuggestionList?: unknown } = await response.json();
    if (!Array.isArray(data.registryDomainSuggestionList)) throw new Error("Unexpected provider response");
    const domains = [...new Set<string>(data.registryDomainSuggestionList.slice(0, 40).map((item: Suggestion) => typeof item?.domainName === "string" ? domainToASCII(item.domainName.trim().toLowerCase()) : "").filter((name: string) => validDomain.test(name)))];
    return NextResponse.json({ domains }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ error: "Unable to retrieve domain suggestions right now. Please try again later." }, { status: 502, headers: { "Cache-Control": "no-store" } });
  }
}
