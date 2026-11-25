import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { practiceAreas } from "@/content/practice-areas";
import { team } from "@/content/team";
import { insights } from "@/content/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const u = (p: string) => `${site.url}${p}`;
  return [
    ...["/", "/about-us", "/practice-areas", "/our-team", "/insights", "/join-us", "/contacts", "/privacy-policy"].map((p) => ({ url: u(p) })),
    ...practiceAreas.map((p) => ({ url: u(`/service/${p.slug}`) })),
    ...team.map((m) => ({ url: u(`/team/${m.slug}`) })),
    ...insights.map((i) => ({ url: u(`/${i.category}/${i.slug}`), lastModified: i.date })),
  ];
}
