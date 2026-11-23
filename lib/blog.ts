import posts from "@/content/blog/posts.json";

export const blogPosts = posts;
export function getPost(slug: string) { return blogPosts.find((post) => post.slug === slug); }
export function categorySlug(name: string) { return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
export const blogCategories = Array.from(new Set(blogPosts.flatMap((post) => post.categories))).sort((a, b) => a.localeCompare(b)).map(name => ({ name, slug: categorySlug(name), count: blogPosts.filter(post => post.categories.includes(name)).length }));
export function formatPostDate(value: string) {
  const date = new Date(`${value.replace(" ", "T")}Z`);
  return Number.isNaN(date.getTime()) ? "" : new Intl.DateTimeFormat("en-NG", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(date);
}
