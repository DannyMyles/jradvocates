import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site";
import { NewsletterForm } from "./newsletter-form";
import { CookieSettingsLink } from "./cookie-banner";

export function Footer() {
  const year = new Date().getFullYear();
  const social = site.social.filter((s) => s.href);

  return (
    <footer className="on-dark bg-oxblood pt-18 pb-7 text-white">
      <div className="container-page">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.9fr_1.3fr_1.6fr]">
          <div>
            <Image src="/images/brand/logo-white.png" alt={site.name} width={273} height={150} className="h-16 w-auto" />
            <p className="mt-4 max-w-xs text-[0.9375rem] text-muted-dark">{site.tagline}.</p>
            {social.length > 0 && (
              <ul className="mt-5 flex gap-2.5">
                {social.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="grid h-10 w-10 place-items-center rounded-xs border border-white/15 text-[0.8125rem] font-semibold transition-colors hover:bg-white hover:text-bordeaux"
                    >
                      {s.short}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <nav aria-label="Footer">
            <h2 className="mb-4 text-[0.9375rem] font-semibold">Firm</h2>
            <ul className="grid gap-2 text-[0.9375rem] text-muted-dark">
              {nav.slice(1).map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="hover:text-white">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contacts" className="hover:text-white">
                  Contacts
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 text-[0.9375rem] font-semibold">Contact</h2>
            <address className="text-[0.9375rem] leading-[1.8] text-muted-dark not-italic">
              {site.address.lines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
              <a href={site.phoneHref} className="mt-2 block hover:text-white">
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="block hover:text-white">
                {site.email}
              </a>
            </address>
          </div>

          <div>
            <h2 className="text-[0.9375rem] font-semibold">Newsletter</h2>
            <p className="mt-1.5 text-sm text-muted-dark">Legal updates and analysis from our team.</p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-14 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-5 text-[0.8125rem] text-[#b0928d]">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <Link href="/privacy-policy" className="hover:text-white">
            Privacy policy
          </Link>
          <CookieSettingsLink className="hover:text-white" />
          <a href="#main" className="hover:text-white sm:ml-auto">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
