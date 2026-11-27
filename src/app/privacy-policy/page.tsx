import type { Metadata } from "next";
import { site } from "@/lib/site";
import { CookieSettingsLink } from "@/components/cookie-banner";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Josephine Righa Advocates collects, uses and protects personal data through this website.",
};

/**
 * DRAFT for the firm's review. It describes what this website actually does; the firm should confirm
 * retention periods, its ODPC registration details and any processing that happens outside the website.
 */
const UPDATED = "25 November 2026";

const sections: { id: string; title: string; body: React.ReactNode }[] = [
  {
    id: "who-we-are",
    title: "Who We Are",
    body: (
      <p>
        This website is operated by {site.name} (“JR Advocates”, “we”, “us”), {site.address.lines.join(", ")}. We are the data
        controller for personal data collected through this website. This policy explains what we collect, why, and the
        rights you have under the Data Protection Act, 2019 of Kenya.
      </p>
    ),
  },
  {
    id: "what-we-collect",
    title: "What We Collect and Why",
    body: (
      <>
        <p>We only collect personal data that you choose to give us, or that is needed to run the website:</p>
        <ul>
          <li>
            <strong>Contact form:</strong> your name, email address and message, and, if you provide them, your phone number,
            area of need and subject. We use these to respond to your enquiry. The form sends your message to us by email;
            it is not stored on the website itself.
          </li>
          <li>
            <strong>Newsletter:</strong> your email address, which we use to send legal updates and analysis. You must confirm
            your subscription from the email you receive, and you can unsubscribe at any time from any newsletter.
          </li>
          <li>
            <strong>WhatsApp:</strong> if you start a chat with us, your messages are handled by WhatsApp (Meta) under its own
            privacy policy and reach us through our WhatsApp account.
          </li>
          <li>
            <strong>Technical data:</strong> to protect our forms from abuse, our server briefly keeps your IP address in
            memory (for about ten minutes) to limit repeated submissions. We do not use it for any other purpose.
          </li>
        </ul>
        <p>
          We rely on your consent (for the newsletter and optional cookies), on the steps needed to respond to your enquiry,
          and on our legitimate interest in keeping the website secure.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and Similar Technologies",
    body: (
      <>
        <p>This website does not use advertising or analytics cookies. It stores two small items in your browser:</p>
        <ul>
          <li>your cookie choice, so we do not ask you again on every page; and</li>
          <li>a note that you have opened the WhatsApp chat, so its attention animation stops for the rest of your visit.</li>
        </ul>
        <p>
          If you choose “Accept all”, our Contacts page shows a map from Google Maps, and Google may set its own cookies. If
          you choose “Essential only”, the map is not loaded unless you click “Show map”.
        </p>
        <p>
          You can change your choice at any time: <CookieSettingsLink className="link" />.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Who We Share Data With",
    body: (
      <>
        <p>We do not sell your personal data. We share it only with service providers who help us run the website:</p>
        <ul>
          <li>our email provider, which delivers contact-form messages to us;</li>
          <li>Mailchimp (Intuit), which manages our newsletter list;</li>
          <li>Google, if you load the map; and WhatsApp (Meta), if you chat with us there; and</li>
          <li>our website hosting provider.</li>
        </ul>
        <p>
          Some of these providers process data outside Kenya. Where they do, we rely on the safeguards permitted under the
          Data Protection Act, 2019.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "How Long We Keep Data",
    body: (
      <p>
        We keep enquiries only as long as needed to respond and, where you become a client, for the periods required by law
        and professional rules. Newsletter data is kept until you unsubscribe.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your Rights",
    body: (
      <>
        <p>Under the Data Protection Act, 2019 you have the right to:</p>
        <ul>
          <li>be informed of how your personal data is used;</li>
          <li>access the personal data we hold about you;</li>
          <li>object to the processing of all or part of your personal data;</li>
          <li>have inaccurate or misleading data corrected; and</li>
          <li>have false or misleading data deleted.</li>
        </ul>
        <p>
          To exercise any of these rights, email us at{" "}
          <a className="link" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          . If you are not satisfied with our response, you may complain to the Office of the Data Protection Commissioner
          (ODPC).
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    body: <p>We may update this policy from time to time. The date at the top shows when it last changed.</p>,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ href: "/", label: "Home" }, { label: "Privacy Policy" }]}
        title="Privacy Policy"
        intro={`How we handle personal data collected through this website. Last updated ${UPDATED}.`}
      />
      <section className="container-page pb-14 md:pb-[72px]">
        <div className="grid gap-10 border-t border-ink pt-10 md:grid-cols-[1fr_2.4fr] md:gap-16">
          <nav aria-label="On this page" className="md:sticky md:top-28 md:self-start">
            <p className="text-sm text-stone">On this page</p>
            <ol className="mt-3 space-y-2 font-serif text-[1.0625rem]">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="decoration-bordeaux/40 underline-offset-4 hover:text-bordeaux hover:underline">
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="prose-jr max-w-[68ch] text-[1.0625rem] leading-[1.75] [&_section>*+*]:mt-[1.1em] [&>section:first-child>h2]:mt-0">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-28">
                <h2>{s.title}</h2>
                {s.body}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
