"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { cx } from "@/lib/format";

/** Mobile-only Call / Email / Visit bar. Appears after the first screen; hides while scrolling down. */
export function QuickActions() {
  const path = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setShow(y > 600 && y < last + 4);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visible = show && path !== "/contacts";
  // Lets the floating WhatsApp button move above this bar on phones (see whatsapp-widget.tsx).
  useEffect(() => {
    document.documentElement.style.setProperty("--quickbar-h", visible ? "66px" : "0px");
  }, [visible]);

  if (path === "/contacts") return null;

  const item = "flex-1 py-3.5 text-center text-[0.9375rem] font-semibold";
  return (
    <nav
      aria-label="Quick contact"
      className={cx(
        "fixed inset-x-3 bottom-3 z-40 flex divide-x divide-white/20 rounded-sm bg-bordeaux text-white shadow-[0_14px_30px_-10px_rgba(62,15,22,0.6)] transition-transform duration-300 ease-brand md:hidden",
        show ? "translate-y-0" : "translate-y-[140%]",
      )}
    >
      <a href={site.phoneHref} className={item}>
        Call
      </a>
      <a href={`mailto:${site.email}`} className={item}>
        Email
      </a>
      <a href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer" className={item}>
        Visit
      </a>
    </nav>
  );
}
