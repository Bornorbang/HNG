import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollMotion } from "@/components/scroll-motion";
import { MobileHeadingFit } from "@/components/mobile-heading-fit";
import { PromoPopup } from "@/components/promo-popup";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://hostingnigeria.com"),
  title: { default: "Hosting Nigeria", template: "%s | Hosting Nigeria" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-US" suppressHydrationWarning><body className={`${inter.variable} ${playfair.variable}`}><ThemeProvider>{children}<ScrollMotion/><MobileHeadingFit/><PromoPopup/></ThemeProvider><Script id="tawk-to" strategy="afterInteractive">{`var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function() {
  var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = "https://embed.tawk.to/691216420b9788195b39ff66/1j9nadt9d";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  s0.parentNode.insertBefore(s1, s0);
})();`}</Script></body></html>;
}
