"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/lib/site";
import { practiceGroups } from "@/content/practice-areas";
import { cx } from "@/lib/format";
import { BtnBadge } from "./ui";

/** Pages that open on a dark (oxblood) hero get a transparent dark header until scrolled. */
function hasDarkHero(path: string) {
  return (
    path === "/" ||
    ["/about-us", "/practice-areas", "/our-team", "/insights", "/join-us"].includes(path) ||
    ["/service/", "/team/"].some((p) => path.startsWith(p))
  );
}

function isActive(path: string, href: string) {
  if (href === "/") return path === "/";
  if (href === "/practice-areas") return path.startsWith("/practice-areas") || path.startsWith("/service/");
  if (href === "/our-team") return path.startsWith("/our-team") || path.startsWith("/team/");
  if (href === "/insights")
    return (
      path.startsWith("/insights") ||
      path.startsWith("/updates-announcements") ||
      path.startsWith("/opinions-and-analysis")
    );
  return path.startsWith(href);
}

export function Header() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu on navigation.
  useEffect(() => setOpen(false), [path]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // The panel is visibility:hidden until its fade starts, so focus the close button on the next frames.
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 60);
    const toggle = toggleRef.current;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      toggle?.focus();
    };
  }, [open]);

  const dark = hasDarkHero(path) && !scrolled;

  return (
    <>
      <header
        className={cx(
          "sticky top-0 z-50 border-b transition-[height,background-color,border-color,color] duration-300 ease-brand",
          scrolled ? "h-[68px] border-line bg-white/95 text-ink backdrop-blur-md" : "h-[68px] md:h-[84px]",
          dark ? "on-dark border-transparent bg-transparent text-white" : !scrolled && "border-line bg-white text-ink",
        )}
      >
        <div className="container-page flex h-full items-center justify-between gap-6">
          <Link href="/" className="flex-none" aria-label={`${site.name}, home`}>
            <Image
              src={dark ? "/images/brand/logo-white.png" : "/images/brand/logo.png"}
              alt=""
              width={273}
              height={150}
              priority
              className={cx("w-auto transition-[height] duration-300", scrolled ? "h-11" : "h-12 md:h-[60px]")}
            />
          </Link>

          <nav aria-label="Main" className="hidden gap-8 text-[0.9375rem] font-medium xl:flex">
            {nav.map((item) => {
              const active = isActive(path, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cx(
                    "relative py-1.5 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-200 hover:after:scale-x-100",
                    active && "after:scale-x-100",
                    active && (dark ? "text-gold-light" : "text-bordeaux"),
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-5">
            <a href={site.phoneHref} className="hidden text-sm whitespace-nowrap xl:inline">
              {site.phone.replace(" (0)", "")}
            </a>
            <Link
              href="/contacts"
              aria-current={path === "/contacts" ? "page" : undefined}
              className={cx("btn hidden xl:inline-flex", dark ? "btn-light" : "btn-primary")}
            >
              Contact us
              <BtnBadge />
            </Link>
            <button
              ref={toggleRef}
              type="button"
              className="-mr-2.5 grid h-11 w-11 place-items-center xl:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <span aria-hidden className="block w-6 space-y-1.5">
                <span className="block h-px bg-current" />
                <span className="block h-px bg-current" />
                <span className="block h-px bg-current" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={cx(
          "on-dark fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-oxblood px-5 pt-3 pb-7 text-white transition-[opacity,visibility] duration-300 xl:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="flex h-[52px] items-center justify-between">
          <Image src="/images/brand/logo-white.png" alt={site.name} width={273} height={150} className="h-11 w-auto" />
          <button
            ref={closeRef}
            type="button"
            onClick={() => setOpen(false)}
            className="-mr-2.5 grid h-11 w-11 place-items-center text-3xl leading-none"
          >
            <span aria-hidden>×</span>
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <nav aria-label="Mobile" className="mt-8">
          <ul>
            {nav.map((item, i) => {
              const active = isActive(path, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    style={{ transitionDelay: open ? `${60 + i * 40}ms` : "0ms" }}
                    className={cx(
                      "block border-b border-white/15 py-3 font-display text-[2rem] transition-[opacity,translate] duration-300 ease-brand",
                      open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                      active && "text-gold-light",
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.href === "/practice-areas" && (
                    <ul className="border-b border-white/15 py-1 pl-1 text-[0.9375rem] text-muted-dark">
                      {practiceGroups.map((g) => (
                        <li key={g.id}>
                          <Link
                            href={`/practice-areas#${g.id}`}
                            onClick={(e) => {
                              setOpen(false);
                              // Already on the page: set the hash natively so the filter's hashchange listener fires.
                              if (path === "/practice-areas") {
                                e.preventDefault();
                                window.location.hash = g.id;
                              }
                            }}
                            className="block py-2.5 hover:text-white"
                          >
                            {g.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="mt-auto grid gap-3 pt-10 text-center">
          <Link href="/contacts" onClick={() => setOpen(false)} className="btn btn-light w-full justify-between">
            Contact us
            <BtnBadge />
          </Link>
          <p className="text-sm text-muted-dark">
            <a href={site.phoneHref}>{site.phone}</a> · {site.hours.label}
          </p>
        </div>
      </div>
    </>
  );
}
