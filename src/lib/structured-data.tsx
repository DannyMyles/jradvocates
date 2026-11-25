import { site } from "./site";

/** Renders schema.org JSON-LD. `<` is escaped so content can never close the script tag. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />
  );
}

export const firmId = `${site.url}/#firm`;

/** The firm as a local legal business: powers Google's knowledge panel and local results. */
export function firmSchema() {
  const sameAs = site.social.map((s) => s.href).filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": firmId,
    name: site.name,
    alternateName: site.shortName,
    description: site.description,
    url: site.url,
    logo: `${site.url}/images/brand/logo.png`,
    image: `${site.url}/images/hero/office-reception.jpg`,
    telephone: site.phoneHref.replace("tel:", ""),
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hurlingham Park, 3rd Floor, Office Suite B6, Argwings Kodhek Road",
      addressLocality: "Nairobi",
      addressRegion: "Nairobi",
      addressCountry: "KE",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    areaServed: { "@type": "Country", name: "Kenya" },
    ...(sameAs.length ? { sameAs } : {}),
  };
}
