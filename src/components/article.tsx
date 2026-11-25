import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInsight, insightCategories, insights, type InsightCategory } from "@/content/insights";
import { getPracticeArea } from "@/content/practice-areas";
import { formatDate } from "@/lib/format";
import { Blocks } from "./blocks";
import { categoryLabel, InsightRow } from "./insight-card";
import { Breadcrumbs, Photo, TextLink } from "./ui";
import { JsonLd, firmId } from "@/lib/structured-data";
import { site } from "@/lib/site";

/** Shared by /updates-announcements/[slug] and /opinions-and-analysis/[slug] so the old URLs keep working. */
export function articleParams(category: InsightCategory) {
  return insights.filter((i) => i.category === category).map((i) => ({ slug: i.slug }));
}

export function articleMetadata(category: InsightCategory, slug: string): Metadata {
  const a = getInsight(category, slug);
  if (!a) return {};
  const first = a.body.find((b) => b.type === "p");
  return {
    title: a.title,
    description: first && "text" in first ? first.text.slice(0, 160) : undefined,
    openGraph: { type: "article", publishedTime: a.date },
  };
}

export function Article({ category, slug }: { category: InsightCategory; slug: string }) {
  const a = getInsight(category, slug);
  if (!a) notFound();
  const cat = insightCategories.find((c) => c.id === category)!;
  const area = a.practiceArea ? getPracticeArea(a.practiceArea) : undefined;
  const more = insights.filter((i) => i.slug !== a.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: a.title,
          datePublished: a.date,
          image: `${site.url}${a.image}`,
          url: `${site.url}/${a.category}/${a.slug}`,
          mainEntityOfPage: `${site.url}/${a.category}/${a.slug}`,
          author: { "@id": firmId },
          publisher: { "@id": firmId },
        }}
      />
      <article className="container-page pt-10 pb-16 md:pt-16">
        <div className="mx-auto max-w-[720px]">
          <Breadcrumbs items={[{ href: "/insights", label: "Insights" }, { label: cat.label }]} />
          <p className="text-sm text-stone">
            <time dateTime={a.date}>{formatDate(a.date)}</time> · {categoryLabel(a.category)} · {a.readingMinutes} min read
          </p>
          <h1 className="h1 mt-4 text-[clamp(2rem,4vw,3rem)]">{a.title}</h1>
          <p className="mt-4 text-stone">By JR Advocates</p>
        </div>
        {a.image.includes("/team/") && (
          <Photo src={a.image} alt="Josephine L. M. Righa" className="mx-auto mt-10 aspect-[16/9] max-w-[960px]" position="center 20%" sizes="(max-width: 960px) 100vw, 960px" priority />
        )}
        <div className="mx-auto mt-10 max-w-[720px] border-t border-ink pt-10">
          <Blocks blocks={a.body} className="text-[1.125rem] leading-[1.8]" />

          <p className="mt-12 border-t border-line pt-6 text-body">
            {area ? (
              <>
                For advice on this, speak to our <TextLink href={`/service/${area.slug}`}>{area.title}</TextLink> team or{" "}
              </>
            ) : (
              <>For advice on this, </>
            )}
            <TextLink href={area ? `/contacts?area=${area.slug}` : "/contacts"}>contact us</TextLink>.
          </p>
        </div>
      </article>

      <section className="border-t border-line bg-ivory py-14 md:py-16">
        <div className="container-page">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="h3">More from Insights</h2>
            <TextLink href="/insights">All articles</TextLink>
          </div>
          <ul className="mt-6 border-b border-line">
            {more.map((i) => (
              <li key={i.slug}>
                <InsightRow item={i} compact />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
