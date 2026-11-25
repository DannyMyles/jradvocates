import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTeamMember, team } from "@/content/team";
import { getPracticeArea } from "@/content/practice-areas";
import { Blocks } from "@/components/blocks";
import { ButtonLink, ContactStrip, Portrait, TextLink } from "@/components/ui";
import { PhotoHeader } from "@/components/photo-header";
import { JsonLd, firmId } from "@/lib/structured-data";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const m = getTeamMember((await params).slug);
  if (!m) return {};
  return {
    title: `${m.name}, ${m.role}`,
    description: `${m.name} is ${m.role} at JR Advocates.`,
  };
}

export default async function ProfilePage({ params }: Props) {
  const m = getTeamMember((await params).slug);
  if (!m) notFound();
  const focus = m.focus.map((s) => getPracticeArea(s)).filter((p) => p !== undefined);
  const others = team.filter((t) => t.slug !== m.slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: m.name,
          jobTitle: m.role,
          url: `${site.url}/team/${m.slug}`,
          ...(m.image ? { image: `${site.url}${m.image}` } : {}),
          ...(m.phone ? { telephone: m.phone.replace(/\s/g, "") } : {}),
          worksFor: { "@id": firmId },
          ...(m.linkedin ? { sameAs: [m.linkedin] } : {}),
        }}
      />
      <PhotoHeader
        crumbs={[{ href: "/", label: "Home" }, { href: "/our-team", label: "Our Team" }, { label: m.name }]}
        kicker={m.role}
        title={m.name}
        intro={m.credentials || undefined}
        image={m.profileImage ?? "/images/photos/team-hero.jpg"}
        alt={m.profileImage ? m.name : ""}
        position={m.profileImage ? "center 22%" : "center 40%"}
      >
        <ButtonLink href="/contacts" variant="light">
          Book a consultation
        </ButtonLink>
        {m.linkedin && (
          <a
            href={m.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 text-[0.9375rem] underline decoration-white/40 underline-offset-4 hover:decoration-white"
          >
            View on LinkedIn
          </a>
        )}
      </PhotoHeader>

      <section className="container-page pt-14 pb-14 md:pt-[72px] md:pb-[72px]">
        <div className={m.highlights.length > 0 ? "grid gap-10 md:grid-cols-[0.75fr_1.5fr] md:gap-16" : "max-w-3xl"}>
          {m.highlights.length > 0 && (
            <div>
              <div className="md:sticky md:top-28">
                {m.highlights.length > 0 && (
                  <div className="border-t border-ink pt-5">
                    <h2 className="text-sm font-medium text-stone">Credentials</h2>
                    <ul className="mt-3 space-y-2 font-serif text-[1.0625rem]">
                      {m.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          <div>
            {m.summary && <p className="lead mb-8 text-ink">{m.summary}</p>}
            {m.bio.length > 0 ? (
              <Blocks blocks={m.bio} className="text-[1.0625rem]" />
            ) : (
              <p className="lead text-ink">
                {m.name} is a {m.role} at {site.name}.
              </p>
            )}

            {(m.phone || m.email) && (
              <dl className="mt-10 grid gap-6 border-t border-ink pt-6 sm:grid-cols-2">
                {m.phone && (
                  <div>
                    <dt className="text-sm text-stone">Direct line</dt>
                    <dd className="mt-1 font-serif text-[1.125rem]">
                      <a href={`tel:${m.phone.replace(/\s/g, "")}`} className="hover:text-bordeaux">
                        {m.phone}
                      </a>
                    </dd>
                  </div>
                )}
                {m.email && (
                  <div>
                    <dt className="text-sm text-stone">Email</dt>
                    <dd className="mt-1 font-serif text-[1.125rem] [overflow-wrap:anywhere]">
                      <a href={`mailto:${m.email}`} className="hover:text-bordeaux">
                        {m.email}
                      </a>
                    </dd>
                  </div>
                )}
              </dl>
            )}

            {m.timeline.length > 0 && (
              <div className="mt-14">
                <h2 className="h3">Career</h2>
                <table className="mt-5 w-full border-t border-ink text-left text-[0.9375rem]">
                  <tbody>
                    {m.timeline.map((t) => (
                      <tr key={t.year} className="border-b border-line align-top">
                        <th scope="row" className="w-32 py-3.5 pr-6 font-medium whitespace-nowrap">
                          {t.year}
                        </th>
                        <td className="py-3.5 text-body">{t.text}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {focus.length > 0 && (
              <div className="mt-12">
                <h2 className="h3">Practice focus</h2>
                <ul className="mt-4 space-y-2">
                  {focus.map((p) => (
                    <li key={p.slug}>
                      <TextLink href={`/service/${p.slug}`} className="font-serif text-[1.0625rem]">
                        {p.title}
                      </TextLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="container-page py-12 md:py-14">
          <h2 className="h3">Also on the team</h2>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/team/${o.slug}`} className="group flex items-center gap-4">
                  <Portrait name={o.name} src={o.image} className="aspect-square w-16 flex-none rounded-full" sizes="64px" />
                  <span>
                    <span className="h4 block decoration-bordeaux/40 underline-offset-4 group-hover:text-bordeaux group-hover:underline">
                      {o.name}
                    </span>
                    <span className="block text-sm text-stone">{o.role}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
