import type { Metadata } from "next";
import { practiceAreas, practiceGroups } from "@/content/practice-areas";
import { PracticeBrowser } from "@/components/practice-browser";
import { ButtonLink, ContactStrip } from "@/components/ui";
import { PhotoHeader } from "@/components/photo-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    `${practiceAreas.length} areas of corporate, commercial and personal legal practice, from business formation and governance to mediation and estate planning.`,
};

export default function PracticeAreasPage() {
  return (
    <>
      <PhotoHeader
        crumbs={[{ href: "/", label: "Home" }, { label: "Practice Areas" }]}
        kicker={`${practiceAreas.length} areas of practice across ${practiceGroups.length} groups`}
        title="Practice areas"
        intro="We bring to the table a combination of deep industry knowledge and expert perspectives from other industries."
        image="/images/photos/practice-hero.jpg"
        alt="Advisers in a client meeting"
        position="60% center"
      >
        <ButtonLink href="/contacts" variant="light">
          Book a consultation
        </ButtonLink>
        <a href={site.phoneHref} className="ml-3 text-[0.9375rem] underline decoration-white/40 underline-offset-4 hover:decoration-white">
          {site.phone}
        </a>
      </PhotoHeader>
      <section className="container-page py-14 md:py-[72px]">
        <PracticeBrowser />
      </section>
      <ContactStrip />
    </>
  );
}
