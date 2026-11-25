"use client";

import { useState } from "react";
import type { Testimonial } from "@/content/home";

/** One testimonial at a time, in full. Manual controls only, no autoplay. */
export function Testimonials({ items }: { items: Testimonial[] }) {
  const [i, setI] = useState(0);
  const t = items[i];
  return (
    <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
      <div className="flex flex-col">
        <h2 className="h2">What our clients say</h2>
        <div className="mt-6 flex items-center gap-2.5 md:mt-auto">
          <button type="button" className="btn-round" onClick={() => setI(i - 1)} disabled={i === 0} aria-label="Previous">
            <span aria-hidden>←</span>
          </button>
          <button
            type="button"
            className="btn-round enabled:border-bordeaux enabled:bg-bordeaux enabled:text-white enabled:hover:border-bordeaux-deep enabled:hover:bg-bordeaux-deep"
            onClick={() => setI(i + 1)}
            disabled={i === items.length - 1}
            aria-label="Next"
          >
            <span aria-hidden>→</span>
          </button>
          <span className="ml-3 text-sm text-stone tabular-nums" aria-live="polite">
            {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </span>
        </div>
      </div>
      <figure key={t.name} className="animate-fade-up">
        <blockquote className="font-serif text-[clamp(1.25rem,2vw,1.6rem)] leading-[1.45]">
          “{t.quote.replace(/^[“"]|[”"]$/g, "")}”
        </blockquote>
        <figcaption className="mt-7 border-t border-line pt-4">
          <span className="font-medium">{t.name}</span>
          <span className="text-stone">, {t.role}</span>
        </figcaption>
      </figure>
    </div>
  );
}
