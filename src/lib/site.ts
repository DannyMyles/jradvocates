/** Firm-wide details used across pages. Edit here, not in components. */
export const site = {
  name: "Josephine Righa Advocates",
  shortName: "JR Advocates",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.jradvocates.com",
  tagline: "Corporate and commercial law firm in Nairobi",
  description:
    "JR Advocates is an established corporate and commercial law firm in Nairobi, Kenya, providing competent, consistent and outstanding legal services.",
  phone: "+254 (0) 758 957 997",
  phoneHref: "tel:+254758957997",
  /** WhatsApp number in international format, digits only. Confirm the firm uses this line on WhatsApp. */
  whatsapp: "254758957997",
  whatsappGreeting: "Hello JR Advocates, I would like to make an enquiry.",
  email: "enquiries@jradvocates.com",
  relationshipEmail: "relationshipmanager@jradvocates.com",
  address: {
    lines: ["Enwealth Business Center, 4th Floor", "Next to DoubleTree by Hilton, Ngong Lane, off Ngong Road", "Nairobi, Kenya"],
    short: "Enwealth Business Center, 4th Floor, Nairobi",
    /** Short form for tight spaces. */
    building: "Enwealth Business Center, 4th Floor",
    street: "Ngong Lane, off Ngong Road",
    postal: "P. O. Box 76123-00508, Nairobi",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Enwealth+Business+Center,+Ngong+Lane,+Nairobi",
  },
  hours: {
    label: "Monday – Friday · 8am – 5pm",
    /** Weekdays 1–5, 08:00–17:00 Africa/Nairobi. */
    days: [1, 2, 3, 4, 5],
    open: 8,
    close: 17,
    timeZone: "Africa/Nairobi",
  },
  // The live site's footer icons point to placeholder bit.ly links whose platforms are unknown.
  // Fill these in with the firm's real profiles; empty entries are hidden.
  social: [
    { label: "LinkedIn", short: "in", href: "" },
    { label: "Facebook", short: "f", href: "" },
    { label: "X", short: "x", href: "" },
  ],
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/our-team", label: "Our Team" },
  { href: "/insights", label: "Insights" },
  { href: "/join-us", label: "Join Us" },
] as const;

export const sectors = [
  "Small-Medium Enterprises",
  "Hospitality and Recreation",
  "Tours and Travel",
  "Fashion and Beauty",
  "Industrial and Manufacturing",
  "Private Equity",
  "Trade",
  "Fintech",
  "Telecommunications, Media and Technology",
  "Banks and Financial Institutions",
  "Real Estate",
  "Building and Construction",
  "Not-For-Profit Organizations",
  "Funds and Investment Management",
] as const;

export const values = [
  {
    letter: "R",
    icon: "/images/icons/relationships.png",
    title: "Building Relationships",
    text: "Lasting partnerships with clients across every industry we serve.",
  },
  {
    letter: "I",
    icon: "/images/icons/integrity.png",
    title: "Highest Standards of Integrity",
    text: "Integrity, justice and fairness guide how we advise and represent every client.",
  },
  {
    letter: "P",
    icon: "/images/icons/passion.png",
    title: "Passion at Work",
    text: "For others it is business, for us it is personal. We go the extra mile.",
  },
  {
    letter: "E",
    icon: "/images/icons/excellence.png",
    title: "Excellence in all we do",
    text: "Personalised legal services with a problem-solving approach.",
  },
] as const;

export const awards = [
  {
    label: "Nairobi Legal Awards 2023 · Nominee",
    title: "Commercial Practitioner of the Year",
    href: "/updates-announcements/nairobi-legal-award-2023-commercial-practitioner-of-the-year",
  },
  {
    label: "The Lawyer Africa 2023",
    title: "Top 100 Commercial Lawyers in Kenya",
    href: "/updates-announcements/the-lawyer-africa-top-100-commercial-lawyers-in-kenya-in-2023",
  },
] as const;
