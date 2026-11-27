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

/** One body style and one section-heading style for every profile, so typography never mismatches. */
const bodyText = "text-[1.0625rem] leading-[1.75] text-body";
const sectionHeading = "h3";

/** "18+ years of legal work experience" -> { figure: "18+", label: "years of legal work experience" } */
function splitExperience(experience?: string) {
  const m = experience?.match(/^(\S+)\s+(.*)$/);
  return m ? { figure: m[1], label: m[2] } : null;
}

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
  const exp = splitExperience(m.experience);

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
        intro={
          <>
            {exp && (
              <p className="flex items-baseline gap-3">
                <span className="font-display text-[2.6rem] leading-none text-gold-light">{exp.figure}</span>
                <span className="text-[1.0625rem] text-white">{exp.label}</span>
              </p>
            )}
            {m.credentials && <p className="mt-3 text-[#eddcd9]">{m.credentials}</p>}
          </>
        }
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
              <div className="border-t border-ink pt-5 md:sticky md:top-28">
                <h2 className={sectionHeading}>Credentials</h2>
                <ul className={`mt-4 space-y-2 ${bodyText}`}>
                  {m.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div>
            <h2 className={sectionHeading}>Profile</h2>
            <div className="mt-4 space-y-4">
              {m.summary && <p className={bodyText}>{m.summary}</p>}
              {m.bio.length > 0 ? (
                <Blocks blocks={m.bio} className={`${bodyText} max-w-none`} />
              ) : (
                <p className={bodyText}>
                  {m.name} is a {m.role} at {site.name}.
                </p>
              )}
            </div>

            {m.qualifications && m.qualifications.length > 0 && (
              <div className="mt-12">
                <h2 className={sectionHeading}>Academic qualifications</h2>
                <ul className="mt-4 border-t border-ink">
                  {m.qualifications.map((q) => (
                    <li key={q.title} className="grid gap-1 border-b border-line py-3.5 sm:grid-cols-[8rem_1fr] sm:gap-6">
                      <span className="font-semibold text-ink">{q.title}</span>
                      {q.detail && <span className={bodyText}>{q.detail}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {m.timeline.length > 0 && (
              <div className="mt-12">
                <h2 className={sectionHeading}>Career history</h2>
                <ol className="mt-4 border-t border-ink">
                  {m.timeline.map((t) => (
                    <li key={t.year + t.text} className="grid gap-1 border-b border-line py-3.5 sm:grid-cols-[8rem_1fr] sm:gap-6">
                      <span className="font-semibold whitespace-nowrap text-ink">{t.year}</span>
                      <span className={bodyText}>{t.text}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {m.awards && m.awards.length > 0 && (
              <div className="mt-12">
                <h2 className={sectionHeading}>Awards and recognition</h2>
                <ul className="mt-4 border-t border-ink">
                  {m.awards.map((a) => (
                    <li key={a.text} className="grid gap-1 border-b border-line py-3.5 sm:grid-cols-[8rem_1fr] sm:gap-6">
                      <span className="font-semibold text-ink">{a.year}</span>
                      <span className={bodyText}>{a.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {(m.phone || m.email) && (
              <div className="mt-12">
                <h2 className={sectionHeading}>Direct contact</h2>
                <dl className="mt-4 grid gap-6 border-t border-ink pt-5 sm:grid-cols-2">
                  {m.phone && (
                    <div>
                      <dt className="text-sm text-stone">Direct line</dt>
                      <dd className={`mt-1 ${bodyText} text-ink`}>
                        <a href={`tel:${m.phone.replace(/\s/g, "")}`} className="hover:text-bordeaux">
                          {m.phone}
                        </a>
                      </dd>
                    </div>
                  )}
                  {m.email && (
                    <div>
                      <dt className="text-sm text-stone">Email</dt>
                      <dd className={`mt-1 ${bodyText} text-ink [overflow-wrap:anywhere]`}>
                        <a href={`mailto:${m.email}`} className="hover:text-bordeaux">
                          {m.email}
                        </a>
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            )}

            {focus.length > 0 && (
              <div className="mt-12">
                <h2 className={sectionHeading}>Practice focus</h2>
                <ul className="mt-4 space-y-2">
                  {focus.map((p) => (
                    <li key={p.slug}>
                      <TextLink href={`/service/${p.slug}`}>{p.title}</TextLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <p className="mt-14">
              <TextLink href="/our-team">← Back to Our Team</TextLink>
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="container-page py-12 md:py-14">
          <h2 className="h3">Also on the team</h2>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
