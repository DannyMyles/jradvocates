"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { setConsent, useConsent } from "@/lib/consent";

/**
 * Cookie notice. Bottom-left card on desktop (clear of the WhatsApp button), bottom sheet on phones.
 * Publishes its height as --cookiebar-h so the WhatsApp button can sit above it on phones.
 */
export function CookieBanner() {
  const consent = useConsent();
  const ref = useRef<HTMLDivElement>(null);
  const visible = consent === null;

  useEffect(() => {
    const root = document.documentElement;
    const el = ref.current;
    if (!visible || !el) {
      root.style.setProperty("--cookiebar-h", "0px");
      return;
    }
    const update = () =>
      root.style.setProperty("--cookiebar-h", window.innerWidth < 768 ? `${el.offsetHeight + 12}px` : "0px");
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
      root.style.setProperty("--cookiebar-h", "0px");
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      ref={ref}
      role="region"
      aria-label="Cookie notice"
      className="fixed inset-x-3 bottom-3 z-[55] animate-fade-up rounded-xl border border-line bg-white p-5 text-ink shadow-[0_2px_6px_rgba(28,26,25,0.06),0_24px_60px_-24px_rgba(52,16,13,0.45)] sm:p-6 md:right-auto md:bottom-6 md:left-6 md:max-w-[440px]"
    >
      <p className="font-serif text-[1.25rem] leading-tight">Cookies on this site</p>
      <p className="mt-2 text-[0.9375rem] leading-relaxed text-body">
        We only use cookies the site needs to work. With your permission we also show Google Maps, which sets its own
        cookies. You can change this at any time from “Cookie settings” at the bottom of every page.{" "}
        <Link href="/privacy-policy" className="link text-[0.9375rem]">
          Privacy policy
        </Link>
      </p>
      <div className="mt-5 flex flex-wrap gap-2.5">
        <button type="button" className="btn btn-primary min-h-11 flex-1 px-5" onClick={() => setConsent("all")}>
          Accept all
        </button>
        <button type="button" className="btn min-h-11 flex-1 px-5" onClick={() => setConsent("essential")}>
          Essential only
        </button>
      </div>
    </div>
  );
}

/** Footer link that clears the choice so the notice shows again. */
export function CookieSettingsLink({ className }: { className?: string }) {
  return (
    <button type="button" className={className} onClick={() => setConsent(null)}>
      Cookie settings
    </button>
  );
}
