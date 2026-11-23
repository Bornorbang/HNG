import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
export default function sitemap(): MetadataRoute.Sitemap {
 const paths = ["/", "/blog/", "/web-hosting/", "/wordpress-hosting/", "/vps-hosting/", "/professional-email/", "/website-backup/", "/email-spam-filtering/", "/ssl-certificates/", "/register-domain/", "/domain-generator/", "/whois-lookup/", "/contact/", "/about/", "/web-development-services/", "/seo-services-in-nigeria/", "/website-maintenance/", "/temporary-hosting-plan/", "/terms-of-service/", "/privacy-policy/", "/refund_returns/"];
 return [...paths.map(path => ({ url: `https://hostingnigeria.com${path}` })), ...blogPosts.map(post => ({ url: `https://hostingnigeria.com${post.url}` }))];
}
