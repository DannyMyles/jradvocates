"use client";

import { useMemo, useState } from "react";
import { insightCategories, insights, type InsightCategory } from "@/content/insights";
import { cx } from "@/lib/format";
import { InsightRow } from "./insight-card";

/** Articles as a text list grouped by year, with category tabs and search. */
export function InsightsBrowser() {
  const [tab, setTab] = useState<"all" | InsightCategory>("all");
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const years = useMemo(() => {
    const list = insights.filter(
      (i) =>
        (tab === "all" || i.category === tab) &&
        (!q ||
          i.title.toLowerCase().includes(q) ||
          i.body.some((b) => ("text" in b ? b.text : "items" in b ? b.items.join(" ") : "").toLowerCase().includes(q))),
    );
    const byYear = new Map<string, typeof list>();
    for (const i of list) {
      const y = i.date.slice(0, 4);
      byYear.set(y, [...(byYear.get(y) ?? []), i]);
    }
    return [...byYear.entries()];
  }, [tab, q]);

  const tabs = [{ id: "all" as const, label: "All" }, ...insightCategories];

  return (
    <>
      <div className="mt-10 flex flex-wrap items-end justify-between gap-4 border-b border-line">
        <div role="tablist" aria-label="Categories" className="-mb-px flex flex-wrap gap-x-6 gap-y-1 sm:gap-x-7">
          {tabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              type="button"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id)}
              className={cx(
                "border-b-2 pb-3 text-[0.9375rem] whitespace-nowrap transition-colors",
                tab === t.id ? "border-bordeaux font-medium text-bordeaux" : "border-transparent text-stone hover:text-ink",
              )}
            >
              <span className="sm:hidden">{"tab" in t ? t.tab : t.label}</span>
              <span className="hidden sm:inline">{t.label}</span>
            </button>
          ))}
        </div>
        <div className="mb-3 w-full sm:w-64">
          <label htmlFor="insight-search" className="sr-only">
            Search insights
          </label>
          <input
            id="insight-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles"
            className="input"
          />
        </div>
      </div>

      <div aria-live="polite">
        {years.length === 0 && <p className="mt-10 text-stone">No articles match your search.</p>}
        {years.map(([year, items]) => (
          <section key={year} aria-labelledby={`y${year}`} className="grid gap-2 pt-10 md:grid-cols-[140px_1fr] md:gap-8">
            <h2 id={`y${year}`} className="font-display text-[2rem] leading-none text-bordeaux md:pt-6">
              {year}
            </h2>
            <ul className="border-b border-line">
              {items.map((i) => (
                <li key={i.slug}>
                  <InsightRow item={i} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
