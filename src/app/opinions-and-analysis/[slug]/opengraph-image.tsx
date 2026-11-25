import { getInsight, insights } from "@/content/insights";
import { renderOg, ogContentType, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "JR Advocates insight";

export function generateStaticParams() {
  return insights.filter((i) => i.category === "opinions-and-analysis").map((i) => ({ slug: i.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const a = getInsight("opinions-and-analysis", (await params).slug);
  return renderOg({ eyebrow: "Insights", title: a?.title ?? "Insights" });
}
