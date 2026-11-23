"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";

const storageKey = "hostingnigeria-promo-dismissed-date";
function localDate() {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
}
export function PromoPopup() {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    let dismissed = false;
    try { dismissed = localStorage.getItem(storageKey) === localDate(); } catch { /* Show the offer if storage is unavailable. */ }
    if (dismissed) return;
    const timer = window.setTimeout(() => { if (dialog.current && !dialog.current.open) dialog.current.showModal(); }, 3000);
    return () => window.clearTimeout(timer);
  }, []);
  const dismiss = () => {
    try { localStorage.setItem(storageKey, localDate()); } catch { /* Closing still works without storage. */ }
    dialog.current?.close();
  };
  return <dialog ref={dialog} className="promo-popup" aria-label="Black Friday domain sale" onClick={event => { if (event.target === event.currentTarget) dismiss(); }} onCancel={event => { event.preventDefault(); dismiss(); }}>
    <button type="button" className="promo-popup-close" onClick={dismiss} aria-label="Close promotion"><X size={22}/></button>
    <a href="https://portal.hostingnigeria.com/cart.php?a=add&domain=register" onClick={dismiss} aria-label="Register a domain and view the Black Friday sale"><Image src="/black-friday-domain-sale.png" alt="Black Friday domain sale: .xyz ₦2,118, .com ₦18,372, .buzz ₦2,900 and .biz ₦3,268. Register now." width={1080} height={1350} sizes="(max-width: 500px) 92vw, 460px"/></a>
  </dialog>;
}
