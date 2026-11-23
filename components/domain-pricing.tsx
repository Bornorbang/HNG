"use client";
import { useEffect, useState } from "react";
type Row = { tld: string; years: number; register: number | null; transfer: number | null; renew: number | null };
const snapshot: Row[] = [
  { tld: "com", years: 1, register: 19357, transfer: 19357, renew: 19850 },
  { tld: "com.ng", years: 1, register: 7208, transfer: 7208, renew: 7536 },
  { tld: "ng", years: 1, register: 15089, transfer: 15089, renew: 15745 },
  { tld: "org", years: 1, register: 20342, transfer: 20342, renew: 21163 },
  { tld: "net", years: 1, register: 21492, transfer: 21492, renew: 22477 },
  { tld: "shop", years: 1, register: 3760, transfer: 54656, renew: 57118 },
  { tld: "online", years: 1, register: 11477, transfer: 50059, renew: 52357 },
  { tld: "dev", years: 1, register: 17387, transfer: 22148, renew: 22148 },
];
const format = (amount: number | null) => amount === null ? "—" : `₦${new Intl.NumberFormat("en-NG", { maximumFractionDigits: 2 }).format(amount)}`;
export function DomainPricing() {
 const [rows, setRows] = useState(snapshot); const [live, setLive] = useState(false);
 useEffect(() => { const controller = new AbortController(); fetch("/api/domain-pricing", { signal: controller.signal }).then(async response => { if (!response.ok) return; const result = await response.json(); if (Array.isArray(result.rows) && result.rows.length) { setRows(result.rows); setLive(true); } }).catch(() => {}); return () => controller.abort(); }, []);
 return <div className="domain-pricing-wrap"><div className="wh-table-wrap"><table className="domain-pricing-table"><thead><tr><th scope="col">TLD</th><th scope="col">Years</th><th scope="col">Register</th><th scope="col">Transfer</th><th scope="col">Renew</th></tr></thead><tbody>{rows.map(row => <tr key={row.tld}><th scope="row">.{row.tld}</th><td>{row.years} year</td><td>{format(row.register)}</td><td>{format(row.transfer)}</td><td>{format(row.renew)}</td></tr>)}</tbody></table></div><p className="domain-pricing-caption">{live ? "Prices shown are current WHMCS prices." : "Prices may change. See the domain pricing page for current rates."}</p></div>;
}
