import Image from "next/image";
import Link from "next/link";
import { values } from "@/lib/site";
import { cx } from "@/lib/format";
import { heroSlides, partnerMessage, testimonials, welcome } from "@/content/home";
import { practiceAreas, practiceGroups } from "@/content/practice-areas";
import { insights } from "@/content/insights";
import { Testimonials } from "@/components/testimonials";
import { HeroSlides } from "@/components/hero-slides";
import { InsightRow } from "@/components/insight-card";
import { ContactStrip, Label, Photo, TextLink } from "@/components/ui";

const latest = [
  insights[0],
  insights.find((i) => i.slug === "setting-up-of-a-trust-in-kenya")!,
  insights.find((i) => i.slug === "disclosure-of-company-beneficial-ownership-information")!,
];

export default function Home() {
  return (
    <>
      <HeroSlides slides={heroSlides} />

      {/* Welcome + R.I.P.E values */}
      <section className="section">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-[1fr_1.2fr] md:gap-16">
            <div>
              <Label>{welcome.kicker}</Label>
              <h2 className="h2">{welcome.title}</h2>
            </div>
            <div className="md:pt-10">
              <p className="lead">{welcome.text}</p>
              <TextLink href="/about-us" className="mt-5 inline-block">
                More about the firm
              </TextLink>
            </div>
          </div>
          <ul className="mt-14 grid border-t border-ink sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <li
                key={v.letter}
                className={cx(
                  "border-b border-line py-7 sm:pr-6 lg:border-b-0 lg:px-8",
                  i % 2 === 1 ? "sm:border-l sm:pl-6" : "sm:pl-0",
                  i === 0 ? "lg:border-l-0 lg:pl-0" : "lg:border-l lg:pl-8",
                  i === values.length - 1 && "lg:pr-0",
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-[2.6rem] leading-none text-bordeaux">{v.letter}</span>
                  <Image src={v.icon} alt="" width={44} height={44} className="h-11 w-11" />
                </div>
                <h3 className="h4 mt-4">{v.title}</h3>
                <p className="mt-2 text-[0.9375rem] text-stone">{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Managing Partner */}
      <section className="section bg-sand">
        <div className="container-page grid items-center gap-10 md:grid-cols-[0.9fr_1.2fr] md:gap-16">
          <Photo
            src="/images/photos/josephine-at-desk.jpg"
            alt="Josephine Righa at work in the JR Advocates office"
            className="aspect-[4/3.4]"
            sizes="(max-width: 768px) 100vw, 42vw"
          />
          <div>
            <Label>A word from our Managing Partner</Label>
            <blockquote className="font-serif text-[clamp(1.4rem,2.3vw,1.9rem)] leading-[1.35]">
              “{partnerMessage.quote}”
            </blockquote>
            <p className="mt-6 text-body">{partnerMessage.paragraphs[1]}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#d6ccc2] pt-5">
              <div className="flex items-center gap-3.5">
                <span className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image src="/images/team/josephine-righa.jpg" alt="" fill sizes="48px" className="object-cover object-top" />
                </span>
                <span>
                  <span className="block font-medium">Josephine L. M. Righa</span>
                  <span className="block text-sm text-stone">Managing Partner · CPM (MTI), LL.B, Dip. KSL</span>
                </span>
              </div>
              <TextLink href="/team/josephine-l-m-righa" className="sm:ml-auto">
                Read her profile
              </TextLink>
            </div>
          </div>
        </div>
      </section>

      {/* Practice areas: a plain index of all 15 */}
      <section className="section">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-[1fr_1.2fr] md:gap-16">
            <h2 className="h2">Practice areas</h2>
            <p className="text-body md:pt-3">
              We bring to the table a combination of deep industry knowledge and expert perspectives from other industries.
            </p>
          </div>
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {practiceGroups.map((g) => (
              <div key={g.id} className="border-t border-ink pt-5">
                <h3 className="text-sm font-medium text-stone">{g.label}</h3>
                <ul className="mt-4 space-y-3">
                  {practiceAreas
                    .filter((p) => p.group === g.id)
                    .map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={`/service/${p.slug}`}
                          className="font-serif text-[1.125rem] leading-snug decoration-bordeaux/40 underline-offset-4 hover:text-bordeaux hover:underline"
                        >
                          {p.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section border-t border-line">
        <div className="container-page">
          <Testimonials items={testimonials} />
        </div>
      </section>

      {/* Insights */}
      <section className="section bg-ivory">
        <div className="container-page">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="h2">Insights</h2>
            <TextLink href="/insights">All articles</TextLink>
          </div>
          <ul className="mt-10 border-b border-line">
            {latest.map((item) => (
              <li key={item.slug}>
                <InsightRow item={item} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
