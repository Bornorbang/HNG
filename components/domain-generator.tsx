"use client";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Search } from "lucide-react";
export function DomainGenerator() {
  const [keyword, setKeyword] = useState("");
  const [domains, setDomains] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  async function search(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = keyword.trim();
    if (!value || value.length > 253 || !/^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.?$/.test(value)) { setMessage("Enter a valid domain name, such as mybusiness.com."); setStatus("error"); return; }
    setStatus("loading"); setDomains([]); setMessage("");
    try {
      const response = await fetch(`/api/domain-suggestions?keyword=${encodeURIComponent(value)}`, { cache: "no-store" });
      const result = await response.json();
      if (!response.ok || !Array.isArray(result.domains)) throw new Error(result.error || "Unable to retrieve suggestions right now.");
      setDomains(result.domains); setStatus("success");
    } catch (error) { setMessage(error instanceof Error ? error.message : "Unable to retrieve suggestions right now. Please try again."); setStatus("error"); }
  }
  return <div className="generator-tool"><form className="domain-form generator-form" onSubmit={search}><label className="sr-only" htmlFor="generator-keyword">Domain name</label><input id="generator-keyword" value={keyword} onChange={event => setKeyword(event.target.value)} placeholder="Enter a domain name, e.g mybusiness.com" maxLength={253} required/><button className="button button-green" type="submit" disabled={status === "loading"}><Search size={17}/>{status === "loading" ? "Searching…" : "Search Domains"}</button></form><div aria-live="polite" aria-atomic="true">{status === "loading" && <p className="generator-status">Searching domain suggestions…</p>}{status === "error" && <p className="generator-status generator-error" role="alert">{message}</p>}{status === "success" && domains.length === 0 && <p className="generator-status">No domain suggestions found. Try another domain name.</p>}{status === "success" && domains.length > 0 && <><div className="generator-results-heading"><h3>Domain suggestions</h3><span>{domains.length} results</span></div><ul className="generator-results">{domains.map(domain => <li key={domain}><span>{domain}</span><a href={`https://portal.hostingnigeria.com/cart.php?a=add&domain=register&query=${encodeURIComponent(domain)}`}>Register <ArrowUpRight size={15}/></a></li>)}</ul></>}</div></div>;
}
