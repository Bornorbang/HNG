"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollMotion() {
  const pathname = usePathname();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const selector = "main section:not(.wh-hero):not(.hero) .section-heading, main section:not(.wh-hero):not(.hero) .wh-heading, main section:not(.wh-hero):not(.hero) .faq-intro, main section:not(.wh-hero):not(.hero) .infrastructure-copy, main section:not(.wh-hero):not(.hero) .infrastructure-image-space, main section:not(.wh-hero):not(.hero) .plan, main section:not(.wh-hero):not(.hero) .wh-plan, main section:not(.wh-hero):not(.hero) .service-card, main section:not(.wh-hero):not(.hero) .wh-benefits article, main section:not(.wh-hero):not(.hero) .wh-included article, main section:not(.wh-hero):not(.hero) .wh-audiences article, main section:not(.wh-hero):not(.hero) .domain-extension-grid article, main section:not(.wh-hero):not(.hero) .contact-card, main section:not(.wh-hero):not(.hero) .wh-table-wrap, main section:not(.wh-hero):not(.hero) .faq-list, main section:not(.wh-hero):not(.hero) .domain-form";
    const observer = new IntersectionObserver(entries => { for (const entry of entries) if (entry.isIntersecting) { entry.target.classList.add("motion-visible"); observer.unobserve(entry.target); } }, { threshold: 0.08, rootMargin: "0px 0px -35px 0px" });
    const targets = Array.from(document.querySelectorAll<HTMLElement>(selector));
    targets.forEach((element) => { if (element.getBoundingClientRect().top > window.innerHeight) { element.classList.add("motion-pending"); observer.observe(element); } });
    return () => { observer.disconnect(); targets.forEach(element => element.classList.remove("motion-pending", "motion-visible")); };
  }, [pathname]);
  return null;
}
