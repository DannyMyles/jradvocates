"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { site } from "@/lib/site";
import { cx } from "@/lib/format";
import { isOpenNow } from "./open-now";
import { BtnBadge } from "./ui";

const TOPICS = [
  { label: "Book a consultation", text: "Hello JR Advocates, I would like to book a consultation." },
  { label: "Ask about a legal matter", text: "Hello JR Advocates, I have a question about a legal matter." },
  { label: "Follow up on my matter", text: "Hello JR Advocates, I would like to follow up on an existing matter." },
];

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 32 32" className={className} fill="currentColor">
      <path d="M16.04 3C8.86 3 3.03 8.82 3.03 16c0 2.3.6 4.53 1.74 6.5L3 29l6.68-1.75A12.96 12.96 0 0 0 16.04 29C23.2 29 29 23.18 29 16S23.2 3 16.04 3Zm0 23.62c-1.98 0-3.92-.53-5.62-1.54l-.4-.24-3.96 1.04 1.06-3.86-.26-.4A10.57 10.57 0 0 1 5.4 16c0-5.86 4.77-10.63 10.64-10.63 5.86 0 10.6 4.77 10.6 10.63 0 5.87-4.75 10.62-10.6 10.62Zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.3-.1-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.49.14-.65.15-.14.32-.37.48-.56.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.14 3.08 1.3 3.3.16.2 2.25 3.43 5.44 4.81.76.33 1.35.52 1.81.67.76.24 1.46.2 2 .12.61-.09 1.89-.77 2.15-1.52.27-.75.27-1.39.19-1.52-.08-.14-.29-.22-.61-.38Z" />
    </svg>
  );
}

/**
 * Floating WhatsApp button with a small panel: firm, office-hours status, a topic picker that
 * pre-fills the message, and a "Start chat" button that opens WhatsApp (app on phones, web on desktop).
 * On phones it lifts above the Call / Email / Visit bar while that bar is showing.
 */
export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState(0);
  const [openNow, setOpenNow] = useState<boolean | null>(null);
  // Pulse to draw attention until the visitor has opened the panel once in this browser session.
  const [engaged, setEngaged] = useState(true);
  useEffect(() => {
    try {
      setEngaged(sessionStorage.getItem("jr-wa-seen") === "1");
    } catch {
      setEngaged(false);
    }
  }, []);
  useEffect(() => {
    if (!open || engaged) return;
    setEngaged(true);
    try {
      sessionStorage.setItem("jr-wa-seen", "1");
    } catch {
      /* ignore */
    }
  }, [open, engaged]);
  const wrap = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    setOpenNow(isOpenNow());
    wrap.current?.querySelector<HTMLElement>("[data-autofocus]")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const onDown = (e: PointerEvent) => {
      if (wrap.current && !wrap.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(TOPICS[topic].text)}`;

  return (
    <div
      ref={wrap}
      className="wa-dock pointer-events-none fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 sm:right-6 md:bottom-6"
    >
      <div
        id={panelId}
        role="dialog"
        aria-label="Chat with us on WhatsApp"
        className={cx(
          "w-[min(340px,calc(100vw-2rem))] origin-bottom-right overflow-hidden rounded-xl border border-line bg-white text-ink shadow-[0_2px_6px_rgba(28,26,25,0.06),0_24px_60px_-24px_rgba(52,16,13,0.45)] transition-[opacity,scale,visibility] duration-200 ease-brand",
          open ? "pointer-events-auto visible scale-100 opacity-100" : "invisible scale-95 opacity-0",
        )}
      >
        <div className="on-dark flex items-center gap-3.5 bg-oxblood px-5 py-4 text-white">
          <span className="relative h-11 w-11 flex-none overflow-hidden rounded-full ring-2 ring-white/15">
            <Image src="/images/team/josephine-righa.jpg" alt="" fill sizes="44px" className="object-cover object-top" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-serif text-[1.125rem] leading-tight">JR Advocates</p>
            <p className="mt-0.5 flex items-center gap-1.5 text-[0.8125rem] text-muted-dark">
              <span aria-hidden className={cx("h-1.5 w-1.5 rounded-full", openNow ? "bg-[#7bd389]" : "bg-[#d9a0a5]")} />
              {openNow === null ? site.hours.label : openNow ? "Office open now · Mon–Fri, 8am–5pm" : "Office closed · we reply next business day"}
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              toggle.current?.focus();
            }}
            aria-label="Close chat"
            className="-mr-2 grid h-10 w-10 flex-none place-items-center rounded-full text-xl leading-none text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            <span aria-hidden>×</span>
          </button>
        </div>

        <div className="px-5 pt-5 pb-5">
          <p className="text-[0.9375rem] leading-relaxed text-body">
            Message us on WhatsApp and the right person will get back to you. What is it about?
          </p>
          <fieldset className="mt-4 grid gap-2">
            <legend className="sr-only">Topic</legend>
            {TOPICS.map((t, i) => (
              <label
                key={t.label}
                className={cx(
                  "flex cursor-pointer items-center gap-3 rounded-[10px] border px-3.5 py-2.5 text-[0.9375rem] transition-colors",
                  topic === i ? "border-bordeaux bg-blush/60 text-ink" : "border-line hover:border-[#b3a89e]",
                )}
              >
                <input
                  type="radio"
                  name="wa-topic"
                  checked={topic === i}
                  onChange={() => setTopic(i)}
                  data-autofocus={i === topic ? "" : undefined}
                  className="h-4 w-4 flex-none accent-bordeaux"
                />
                {t.label}
              </label>
            ))}
          </fieldset>
          <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-5 w-full justify-between" onClick={() => setOpen(false)}>
            Start chat on WhatsApp
            <BtnBadge />
          </a>
          <p className="mt-3 text-center text-[0.8125rem] text-stone">
            Prefer to call?{" "}
            <a href={site.phoneHref} className="text-ink underline decoration-ink/30 underline-offset-3 hover:decoration-ink">
              {site.phone}
            </a>
          </p>
        </div>
      </div>

      <button
        ref={toggle}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close WhatsApp chat" : "Chat with us on WhatsApp"}
        className={cx(
          "group pointer-events-auto relative grid h-14 w-14 place-items-center rounded-full bg-[#1da851] text-white shadow-[0_10px_28px_-8px_rgba(17,94,46,0.55)] transition-[background-color,translate] duration-200 hover:-translate-y-0.5 hover:bg-[#178f45] focus-visible:outline-offset-4",
          !open && !engaged && "wa-attention",
        )}
      >
        <WhatsAppGlyph className={cx("h-7 w-7 transition-[opacity,scale] duration-200", open && "scale-75 opacity-0")} />
        <span aria-hidden className={cx("absolute text-2xl leading-none transition-[opacity,scale] duration-200", open ? "scale-100 opacity-100" : "scale-75 opacity-0")}>
          ×
        </span>
        <span className={cx("pointer-events-none absolute right-[calc(100%+12px)] hidden rounded-full bg-ink px-3.5 py-1.5 text-sm font-medium whitespace-nowrap text-white opacity-0 transition-opacity duration-200 md:block", !open && "group-hover:opacity-100")}>
          Chat with us
        </span>
      </button>
    </div>
  );
}
