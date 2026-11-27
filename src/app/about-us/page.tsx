import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { sectors, values } from "@/lib/site";
import { team } from "@/content/team";
import { ContactStrip, Label, Portrait, TextLink, RipeMark, ValueTitle } from "@/components/ui";
import { PhotoHeader } from "@/components/photo-header";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "JR Advocates is an established corporate and commercial law firm in Nairobi. Our vision, mission, philosophy and R.I.P.E values.",
};

const vmp = [
  {
    label: "Our vision",
    icon: "/images/icons/vision.png",
    text: "To be the renowned corporate and commercial law firm in the region providing personalized, quality and unmatched excellent legal services to all our clients.",
  },
  {
    label: "Our mission",
    icon: "/images/icons/mission.png",
    text: "We are committed to delivering excellence and peace of mind to all our clients whilst helping their businesses succeed.",
  },
  {
    label: "Our philosophy",
    icon: "/images/icons/philosophy.png",
    text: "For others it is business, for us, it is personal – we shall go the extra mile for you.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PhotoHeader
        crumbs={[{ href: "/", label: "Home" }, { label: "About Us" }]}
        kicker="About the firm"
        title="For others it is business. For us, it is personal."
        intro="JR Advocates is an established corporate and commercial law firm operating in Nairobi, Kenya. Our team comprises highly skilled attorneys guaranteed to handle our clients’ legal needs in an experienced and reassuring manner."
        image="/images/hero/office-reception.jpg"
        alt="The JR Advocates sign at the firm’s reception"
        position="62% center"
      />

      <section className="container-page py-14 md:py-[72px]">
        <div className="grid gap-x-12 gap-y-8 md:grid-cols-3">
          {vmp.map((v) => (
            <div key={v.label} className="border-t border-ink pt-5">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 flex-none place-items-center rounded-full bg-oxblood">
                  <Image src={v.icon} alt="" width={40} height={40} className="h-7 w-7" />
                </span>
                <h2 className="text-sm font-medium text-stone">{v.label}</h2>
              </div>
              <p className="mt-3 font-serif text-[1.2rem] leading-[1.5]">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container-page grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div>
            <Label>Our values</Label>
            <h2 className="h2">Founded on love and respect.</h2>
            <p className="mt-5 text-body">
              At JR Advocates, our values are founded on the key pillars of love and respect, for God, ourselves, colleagues,
              clients and our work. Love and respect fuel everything we do, and we aim to be <RipeMark className="text-[1.1em]" />
            </p>
            <figure className="relative mt-8 aspect-[16/9] overflow-hidden rounded-sm">
              <Image
                src="/images/photos/love-respect.jpg"
                alt="Two hands forming a heart"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div aria-hidden className="absolute inset-0 bg-bordeaux mix-blend-multiply opacity-25" />
            </figure>
          </div>
          <ol className="border-b border-[#d6ccc2]" aria-label="Our values, R.I.P.E.">
            {values.map((v) => (
              <li key={v.letter} className="grid grid-cols-[48px_1fr] items-start gap-x-5 border-t border-[#d6ccc2] py-6">
                <Image src={v.icon} alt="" width={48} height={48} className="mt-1 h-12 w-12" />
                <div>
                  <h3 className="h3">
                    <ValueTitle title={v.title} />
                  </h3>
                  <p className="mt-2 text-body">{v.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div>
            <h2 className="h2">Sectors we serve</h2>
            <p className="mt-4 text-body">
              We pride ourselves in building lasting partnerships by working with industry players across many sectors.
            </p>
          </div>
          <ul className="grid gap-x-10 border-t border-ink sm:grid-cols-2">
            {sectors.map((s) => (
              <li key={s} className="border-b border-line py-3.5 font-serif text-[1.0625rem]">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section border-t border-line">
        <div className="container-page">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="h2">The people behind the firm</h2>
            <TextLink href="/our-team">Meet the team</TextLink>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {team.map((m) => (
              <li key={m.slug}>
                <Link href={`/team/${m.slug}`} className="group block">
                  <Portrait name={m.name} src={m.image} className="aspect-[4/5]" sizes="(max-width: 1024px) 50vw, 20vw" />
                  <p className="h4 mt-3 decoration-bordeaux/40 underline-offset-4 group-hover:text-bordeaux group-hover:underline">
                    {m.name}
                  </p>
                  <p className="text-sm text-stone">{m.role}</p>
                  {m.experience && <p className="mt-0.5 text-sm font-semibold text-bordeaux">{m.experience}</p>}
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
