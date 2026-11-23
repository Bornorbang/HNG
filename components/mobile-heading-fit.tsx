"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Fit mobile service-page headings without truncating their text.
export function MobileHeadingFit() {
 const pathname = usePathname();
 useEffect(() => {
  let cancelled = false;
  let frame = 0;
  const fit = () => {
   if (cancelled) return;
   const heading = document.querySelector<HTMLElement>("main h1");
   if (!heading || heading.closest(".blog-page")) return;
   heading.style.removeProperty("font-size");
   if (!window.matchMedia("(max-width: 650px)").matches) return;
   const initialSize = parseFloat(getComputedStyle(heading).fontSize);
   const fits = (size: number) => {
    heading.style.fontSize = `${size}px`;
    const style = getComputedStyle(heading);
    const lineHeight = parseFloat(style.lineHeight) || size * 1.2;
    return heading.getBoundingClientRect().height <= lineHeight * 2 + 2 && heading.scrollWidth <= heading.clientWidth + 1;
   };
   if (fits(initialSize)) return;
   let low = 8, high = initialSize;
   for (let i = 0; i < 12; i++) {
    const mid = (low + high) / 2;
    if (fits(mid)) low = mid; else high = mid;
   }
   heading.style.fontSize = `${Math.floor(low * 10) / 10}px`;
  };
  const schedule = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(fit); };
  schedule();
  document.fonts.ready.then(schedule);
  window.addEventListener("resize", schedule);
  return () => { cancelled = true; cancelAnimationFrame(frame); window.removeEventListener("resize", schedule); document.querySelector<HTMLElement>("main h1")?.style.removeProperty("font-size"); };
 }, [pathname]);
 return null;
}
