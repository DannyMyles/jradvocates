import type { Metadata } from "next";
import { site } from "@/lib/site";
import { ContactForm } from "@/components/contact-form";
import { OpenNow } from "@/components/open-now";
import { MapEmbed } from "@/components/map-embed";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contacts",
  description: `Contact JR Advocates at ${site.address.short}. Call ${site.phone} or email ${site.email}.`,
};

export default function ContactsPage() {
  const details: { label: string; body: React.ReactNode }[] = [
    {
      label: "Office",
      body: (
        <>
          {site.address.lines.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </>
      ),
    },
    { label: "Telephone", body: <a href={site.phoneHref}>{site.phone}</a> },
    {
      label: "Email",
      body: (
        <a href={`mailto:${site.email}`} className="block">
          {site.email}
        </a>
      ),
    },
    {
      label: "Office hours",
      body: (
        <>
          {site.hours.label.replace(" · ", ", ")}
          <OpenNow />
        </>
      ),
    },
    { label: "Postal address", body: site.address.postal },
  ];

  return (
    <>
      <PageHeader
        crumbs={[{ href: "/", label: "Home" }, { label: "Contacts" }]}
        title="We would like to work with you."
        intro="Tell us about your matter and the right person will get back to you within one business day."
      />
      <section className="container-page pb-14 md:pb-[72px]">
        <div className="grid gap-12 border-t border-ink pt-10 md:grid-cols-[1fr_1.5fr] md:gap-20 md:pt-12">
          <dl className="space-y-6">
            {details.map((d) => (
              <div key={d.label}>
                <dt className="text-sm text-stone">{d.label}</dt>
                <dd className="mt-1 font-serif text-[1.125rem] leading-snug [overflow-wrap:anywhere] [&_a]:decoration-bordeaux/40 [&_a]:underline-offset-4 [&_a:hover]:text-bordeaux [&_a:hover]:underline">
                  {d.body}
                </dd>
              </div>
            ))}
          </dl>
          <div className="rounded-xl border border-line bg-white p-6 shadow-[0_1px_2px_rgba(28,26,25,0.04),0_18px_40px_-28px_rgba(116,36,31,0.28)] sm:p-9">
            <h2 className="h3">Send us a message</h2>
            <p className="mt-1.5 mb-8 text-[0.9375rem] text-stone">
              We reply within one business day. Fields marked <span className="text-bordeaux">*</span> are required.
            </p>
            <ContactForm />
          </div>
        </div>

        <div className="mt-14">
          <MapEmbed />
        </div>
      </section>
    </>
  );
}
