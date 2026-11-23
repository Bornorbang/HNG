import { permanentRedirect } from "next/navigation";
import { blogCategories } from "@/lib/blog";

type Context = { params: Promise<{ slug: string }> };
export async function GET(_request: Request, { params }: Context) {
 const { slug } = await params;
 const category = blogCategories.find(item => item.slug === slug);
 if (!category) return new Response("Not found", { status: 404 });
 permanentRedirect(`/blog/?category=${encodeURIComponent(category.slug)}`);
}
