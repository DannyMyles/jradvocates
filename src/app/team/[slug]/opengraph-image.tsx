import { getTeamMember, team } from "@/content/team";
import { renderOg, ogContentType, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "JR Advocates team member";

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const m = getTeamMember((await params).slug);
  return renderOg({ eyebrow: m?.role ?? "Our Team", title: m?.name ?? "Our Team" });
}
