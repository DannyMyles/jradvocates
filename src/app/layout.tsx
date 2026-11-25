import type { Metadata, Viewport } from "next";
import { Newsreader, Public_Sans } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { QuickActions } from "@/components/quick-actions";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import { CookieBanner } from "@/components/cookie-banner";
import { site } from "@/lib/site";
import { JsonLd, firmSchema } from "@/lib/structured-data";
import "./globals.css";

/** Variable serif with an optical-size axis: refined display forms at headline sizes, sturdy text forms at body sizes. */
const newsreader = Newsreader({
  variable: "--font-newsreader",
  style: "normal",
  axes: ["opsz"],
  subsets: ["latin"],
  display: "swap",
});

/** Italic is only used for the small kicker labels, so it is not preloaded (keeps bandwidth for the hero photo). */
const newsreaderItalic = Newsreader({
  variable: "--font-newsreader-italic",
  style: "italic",
  axes: ["opsz"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Corporate and Commercial Law Firm in Nairobi`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_KE",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#2a0a0f",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${newsreaderItalic.variable} ${publicSans.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1;translate:none}`}</style>
        </noscript>
        <a
          href="#main"
          className="fixed -top-16 left-4 z-[100] bg-bordeaux px-4 py-2.5 font-semibold text-white transition-[top] focus:top-3"
        >
          Skip to content
        </a>
        <JsonLd data={firmSchema()} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <QuickActions />
        <WhatsAppWidget />
        <CookieBanner />
      </body>
    </html>
  );
}
