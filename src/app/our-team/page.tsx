import type { Metadata } from "next";
import Link from "next/link";
import { team } from "@/content/team";
import { ButtonLink, ContactStrip, Photo, TextLink } from "@/components/ui";
import { PhotoHeader } from "@/components/photo-header";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the JR Advocates team: our Managing Partner, financial and tax consultant, and client-relations staff.",
};

export default function TeamPage() {
  const [lead, ...rest] = team;
  return (
    <>
      <PhotoHeader
        crumbs={[{ href: "/", label: "Home" }, { label: "Our Team" }]}
        kicker="The people behind the firm"
        title="Our team"
        intro="A close-knit team of legal, financial and client-relations professionals, mentored by our Managing Partner."
        image="/images/photos/team-hero.jpg"
        alt=""
        position="center 40%"
      />

      <section className="container-page pt-14 md:pt-[72px]">
        <div className="grid items-center gap-8 border-t border-ink pt-10 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
          <Photo
            src={lead.image}
            alt={lead.name}
            className="aspect-[4/4.4]"
            position="center 18%"
            sizes="(max-width: 768px) 100vw, 40vw"
            priority
          />
          <div>
            <p className="text-sm text-stone">Managing Partner</p>
            <h2 className="h2 mt-2">{lead.name}</h2>
            <p className="mt-1 text-stone">{lead.credentials}</p>
            {lead.summary && <p className="lead mt-6 max-w-xl">{lead.summary}</p>}
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <ButtonLink href={`/team/${lead.slug}`}>Read her profile</ButtonLink>
              {lead.linkedin && <TextLink href={lead.linkedin}>LinkedIn</TextLink>}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page pt-14 pb-14 md:pt-[72px] md:pb-[72px]">
        <ul className="grid gap-x-6 gap-y-10 border-t border-line pt-10 sm:grid-cols-3">
          {rest.map((m) => (
            <li key={m.slug}>
              <Link href={`/team/${m.slug}`} className="group block">
                <Photo src={m.image} alt="" className="aspect-[4/5]" position="center 20%" sizes="(max-width: 640px) 100vw, 33vw" />
                <h2 className="h4 mt-4 decoration-bordeaux/40 underline-offset-4 group-hover:text-bordeaux group-hover:underline">
                  {m.name}
                </h2>
              </Link>
              <p className="text-sm text-stone">{m.role}</p>
              {m.linkedin && <TextLink href={m.linkedin} className="mt-2 inline-block text-sm">LinkedIn</TextLink>}
            </li>
          ))}
        </ul>
      </section>

      <ContactStrip />
    </>
  );
}
