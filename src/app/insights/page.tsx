import type { Metadata } from "next";
import { InsightsBrowser } from "@/components/insights-browser";
import { PhotoHeader } from "@/components/photo-header";
import { ContactStrip } from "@/components/ui";

export const metadata: Metadata = {
  title: "Insights",
  description: "Updates, announcements and legal analysis from JR Advocates.",
};

export default function InsightsPage() {
  return (
    <>
      <PhotoHeader
        crumbs={[{ href: "/", label: "Home" }, { label: "Insights" }]}
        kicker="Updates, announcements and analysis"
        title="Insights"
        intro="Legal updates and practical guidance from our team, from new regulations to how-to guides for trusts, trademarks and company compliance."
        image="/images/photos/insights-hero.jpg"
        alt=""
        position="center"
      />
      <section className="container-page pt-4 pb-14 md:pb-[72px]">
        <InsightsBrowser />
      </section>
      <ContactStrip title="Need advice on any of these topics?" />
    </>
  );
}
