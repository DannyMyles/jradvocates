"use client";

import { useId, useState } from "react";
import { cx } from "@/lib/format";

export type AccordionItem = { title: React.ReactNode; content: React.ReactNode; prefix?: React.ReactNode };

/** One panel open at a time. Height animates via grid-template-rows. */
export function Accordion({ items, defaultOpen = 0 }: { items: AccordionItem[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const id = useId();

  return (
    <div className="border-b border-line">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-t border-line">
            <h3>
              <button
                type="button"
                id={`${id}-b${i}`}
                aria-expanded={isOpen}
                aria-controls={`${id}-p${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-1 py-5 text-left"
              >
                <span className="flex items-center">
                  {it.prefix}
                  <span className="h4">{it.title}</span>
                </span>
                <span
                  aria-hidden
                  className={cx("flex-none text-2xl leading-none text-bordeaux transition-transform duration-300", isOpen && "rotate-45")}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={`${id}-p${i}`}
              role="region"
              aria-labelledby={`${id}-b${i}`}
              className={cx("grid transition-[grid-template-rows] duration-300 ease-brand", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
            >
              <div className="overflow-hidden">
                <div className="px-1 pb-6 text-body">{it.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
