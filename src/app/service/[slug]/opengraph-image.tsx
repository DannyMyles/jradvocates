import { getPracticeArea, practiceAreas } from "@/content/practice-areas";
import { renderOg, ogContentType, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "JR Advocates practice area";

export function generateStaticParams() {
  return practiceAreas.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const area = getPracticeArea((await params).slug);
  return renderOg({ eyebrow: "Practice area", title: area?.title ?? "Practice areas" });
}
