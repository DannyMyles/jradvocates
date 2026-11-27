import type { Metadata } from "next";
import { site } from "@/lib/site";
import { ButtonLink } from "@/components/ui";
import { PhotoHeader } from "@/components/photo-header";

export const metadata: Metadata = {
  title: "Join Us",
  description: "Careers and the six-month pupillage programme at JR Advocates, Nairobi.",
};

const applicationItems = [
  "A cover letter indicating the position you’re applying for",
  "Current CV highlighting any relevant work experience and extracurricular activities",
  "Certified copies of all academic certificates and transcripts",
  "Your personal statement demonstrating why you believe you are the best candidate for the opportunity at JR Advocates",
];

const pupillageRequirements = [
  "LL.B, 2nd class honours, upper division",
  "B+ or its equivalent in KCSE",
  "Fluent spoken English and Swahili",
  "Letter of admission to the Kenya School of Law",
];

/** Add open roles here. When the list is empty the page shows a general-application message. */
const openRoles: { title: string; summary: string }[] = [];

export default function JoinPage() {
  const row = "grid gap-5 border-t border-ink py-10 md:grid-cols-[1fr_2fr] md:gap-16 md:py-12";
  return (
    <>
      <PhotoHeader
        crumbs={[{ href: "/", label: "Home" }, { label: "Join Us" }]}
        kicker="Careers and pupillage"
        title="Join us"
        intro="Our success depends on the success of our team. We are committed to attracting, developing and retaining talented people whose skill, experience and perspective help us serve our clients well."
        image="/images/photos/careers-hero.jpg"
        alt=""
        position="35% center"
      >
        <ButtonLink href={`mailto:${site.email}?subject=Application`} variant="light">
          Email your application
        </ButtonLink>
        <a href="#pupillage" className="ml-3 text-[0.9375rem] underline decoration-white/40 underline-offset-4 hover:decoration-white">
          About pupillage
        </a>
      </PhotoHeader>

      <section className="container-page py-14 md:py-[72px]">
        <div className={row}>
          <h2 className="h3">Our culture</h2>
          <div className="max-w-2xl space-y-4 text-[1.0625rem] text-body">
            <p>
              Our team comprises well-rounded, innovative people with bright legal minds who uphold the virtues of love and
              respect in all they do.
            </p>
            <p>
              Our Managing Partner has a keen interest in mentoring and developing her team members, with the aim of empowering
              them to reach their full potential. The firm’s culture is one where every individual can grow and reach their
              potential in their field of expertise.
            </p>
          </div>
        </div>

        <div className={row}>
          <h2 className="h3">Open positions</h2>
          <div className="max-w-2xl text-[1.0625rem] text-body">
            {openRoles.length === 0 ? (
              <p>
                There are no open roles at the moment. You are welcome to send a general application; we keep applications on
                file and will contact you should a suitable opportunity arise.
              </p>
            ) : (
              <ul className="space-y-4">
                {openRoles.map((r) => (
                  <li key={r.title}>
                    <p className="h4 text-ink">{r.title}</p>
                    <p>{r.summary}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div id="pupillage" className={`${row} scroll-mt-28`}>
          <h2 className="h3">Pupillage</h2>
          <div className="max-w-2xl text-[1.0625rem] text-body">
            <p>
              We offer a six-month pupillage programme that gives you exposure to all our practice areas and to the essential
              non-legal work of running a law firm.
            </p>
            <p className="mt-5 font-medium text-ink">Minimum requirements</p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-bordeaux">
              {pupillageRequirements.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <p className="mt-5">
              To apply for pupillage in the following year, send your application by <strong className="text-ink">30 September</strong>.
            </p>
          </div>
        </div>

        <div className={row}>
          <h2 className="h3">How to apply</h2>
          <div className="max-w-2xl text-[1.0625rem] text-body">
            <p>Your application should include at the minimum:</p>
            <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-bordeaux">
              {applicationItems.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ol>
            <p className="mt-5">
              Email it to{" "}
              <a href={`mailto:${site.email}`} className="link">
                {site.email}
              </a>
              , or post it to {site.name}, {site.address.building}, {site.address.street},{" "}
              {site.address.postal}. Only shortlisted applicants will be contacted.
            </p>
            <ButtonLink href={`mailto:${site.email}?subject=Application`} variant="primary" className="mt-7">
              Email your application
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
