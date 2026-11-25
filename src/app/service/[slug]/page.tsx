import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPracticeArea, practiceAreas, practiceGroups } from "@/content/practice-areas";
import { insights } from "@/content/insights";
import { team } from "@/content/team";
import { Blocks } from "@/components/blocks";
import { InsightRow } from "@/components/insight-card";
import { Accordion } from "@/components/accordion";
import { ButtonLink, ContactStrip, TextLink } from "@/components/ui";
import { PhotoHeader } from "@/components/photo-header";
import { JsonLd, firmId } from "@/lib/structured-data";
import { cx } from "@/lib/format";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return practiceAreas.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = getPracticeArea((await params).slug);
  if (!area) return {};
  return { title: area.title, description: area.summary };
}

export default async function ServicePage({ params }: Props) {
  const area = getPracticeArea((await params).slug);
  if (!area) notFound();

  const group = practiceGroups.find((g) => g.id === area.group)!;
  const related = practiceAreas.filter((p) => p.group === area.group && p.slug !== area.slug).slice(0, 3);
  const articles = insights.filter((i) => i.practiceArea === area.slug).slice(0, 2);
  const lead = team[0];

  // "How we help" list: explicit list, else the first list in the page text (which is then not repeated).
  const firstList = area.body.findIndex((b) => b.type === "ul" || b.type === "ol");
  const fromBody = !area.helps && firstList >= 0;
  const listBlock = fromBody ? area.body[firstList] : undefined;
  const helps: { title: string; text?: string }[] =
    area.helps ?? (listBlock && "items" in listBlock ? listBlock.items.map((t) => ({ title: t.replace(/[;.,]\s*$/, "") })) : []);
  const body = fromBody ? area.body.filter((_, i) => i !== firstList) : area.body;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: area.title,
          serviceType: area.title,
          description: area.summary,
          url: `${site.url}/service/${area.slug}`,
          provider: { "@id": firmId },
          areaServed: { "@type": "Country", name: "Kenya" },
        }}
      />
      <PhotoHeader
        crumbs={[
          { href: "/practice-areas", label: "Practice Areas" },
          { href: `/practice-areas#${group.id}`, label: group.label },
        ]}
        title={area.title}
        intro={area.summary}
        image={area.image}
      >
        <ButtonLink href={`/contacts?area=${area.slug}`} variant="light">
          Discuss your matter
        </ButtonLink>
        <a
          href={site.phoneHref}
          className="ml-3 text-[0.9375rem] underline decoration-white/40 underline-offset-4 hover:decoration-white"
        >
          {site.phone}
        </a>
      </PhotoHeader>

      <section className="section">
        <div className="container-page grid items-start gap-12 md:grid-cols-[1.6fr_1fr] md:gap-20">
          <div>
            <Blocks blocks={body} className="text-[1.125rem] leading-[1.75]" />

            {helps.length > 0 && (
              <div className="mt-12">
                <h2 className="h3">How we help</h2>
                <ul className={cx("mt-5 grid gap-x-10 border-t border-ink", helps.some((h) => h.text) ? "" : "sm:grid-cols-2")}>
                  {helps.map((h) => (
                    <li key={h.title} className="border-b border-line py-4">
                      <p className={h.text ? "h4" : "font-serif text-[1.0625rem]"}>{h.title}</p>
                      {h.text && <p className="mt-2 text-[0.9375rem] text-body">{h.text}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {area.faqs && area.faqs.length > 0 && (
              <div className="mt-12">
                <h2 className="h3">Frequently asked questions</h2>
                <div className="mt-4">
                  <Accordion items={area.faqs.map((f) => ({ title: f.q, content: <p>{f.a}</p> }))} defaultOpen={null} />
                </div>
              </div>
            )}

            {articles.length > 0 && (
              <div className="mt-14">
                <h2 className="h3">Related insights</h2>
                <ul className="mt-4 border-b border-line">
                  {articles.map((a) => (
                    <li key={a.slug}>
                      <InsightRow item={a} compact />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="space-y-10 md:sticky md:top-28">
            <div className="border-t border-ink pt-5">
              <div className="flex items-center gap-4">
                <span className="relative h-16 w-16 flex-none overflow-hidden rounded-full">
                  <Image src={lead.image} alt="" fill sizes="64px" className="object-cover object-top" />
                </span>
                <div>
                  <p className="h4">{lead.name}</p>
                  <p className="text-sm text-stone">{lead.role}</p>
                </div>
              </div>
              <p className="mt-5 text-body">Talk to us about your matter. We reply within one business day.</p>
              <ButtonLink href={`/contacts?area=${area.slug}`} variant="primary" className="mt-5 w-full">
                Book a consultation
              </ButtonLink>
              <p className="mt-3 text-sm text-stone">
                Or call{" "}
                <a href={site.phoneHref} className="text-ink underline underline-offset-3">
                  {site.phone}
                </a>
              </p>
            </div>

            {related.length > 0 && (
              <div className="border-t border-ink pt-5">
                <h2 className="text-sm font-medium text-stone">Related practice areas</h2>
                <ul className="mt-3 space-y-2.5">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/service/${r.slug}`}
                        className="font-serif text-[1.0625rem] decoration-bordeaux/40 underline-offset-4 hover:text-bordeaux hover:underline"
                      >
                        {r.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <TextLink href="/practice-areas" className="mt-5 inline-block text-sm">
                  All practice areas
                </TextLink>
              </div>
            )}
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
