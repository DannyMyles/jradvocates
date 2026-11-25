"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { practiceAreas, practiceGroups } from "@/content/practice-areas";
import type { PracticeGroup } from "@/content/types";
import { cx } from "@/lib/format";

type Filter = "all" | PracticeGroup;

/** A typographic index of all practice areas, grouped, with a filter (mirrored in the URL hash) and search. */
export function PracticeBrowser() {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const read = () => {
      const h = window.location.hash.slice(1);
      setFilter(practiceGroups.some((g) => g.id === h) ? (h as PracticeGroup) : "all");
    };
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);

  function choose(f: Filter) {
    setFilter(f);
    history.replaceState(null, "", f === "all" ? window.location.pathname : `#${f}`);
  }

  const q = query.trim().toLowerCase();
  const groups = useMemo(
    () =>
      practiceGroups
        .filter((g) => filter === "all" || g.id === filter)
        .map((g) => ({
          ...g,
          items: practiceAreas.filter(
            (p) => p.group === g.id && (!q || p.title.toLowerCase().includes(q) || p.summary.toLowerCase().includes(q)),
          ),
        }))
        .filter((g) => g.items.length > 0),
    [filter, q],
  );

  const tab = (active: boolean) =>
    cx(
      "border-b-2 pb-3 text-[0.9375rem] whitespace-nowrap transition-colors",
      active ? "border-bordeaux font-medium text-bordeaux" : "border-transparent text-stone hover:text-ink",
    );

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4 border-b border-line">
        <div className="-mb-px flex flex-wrap gap-x-6 gap-y-1 sm:gap-x-7" role="group" aria-label="Filter by group">
          <button type="button" className={tab(filter === "all")} aria-pressed={filter === "all"} onClick={() => choose("all")}>
            All
          </button>
          {practiceGroups.map((g) => (
            <button key={g.id} type="button" className={tab(filter === g.id)} aria-pressed={filter === g.id} onClick={() => choose(g.id)}>
              <span className="sm:hidden">{g.short}</span>
              <span className="hidden sm:inline">{g.label}</span>
            </button>
          ))}
        </div>
        <div className="mb-3 w-full sm:w-64">
          <label htmlFor="practice-search" className="sr-only">
            Search practice areas
          </label>
          <input
            id="practice-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search practice areas"
            className="input"
          />
        </div>
      </div>

      <div aria-live="polite">
        {groups.length === 0 && (
          <p className="mt-10 text-stone">
            Nothing matches “{query}”.{" "}
            <Link href="/contacts" className="link">
              Ask us directly
            </Link>{" "}
            and we will point you to the right person.
          </p>
        )}
        {groups.map((g) => (
          <section
            key={g.id}
            id={g.id}
            aria-labelledby={`${g.id}-title`}
            className="grid scroll-mt-28 gap-6 border-b border-line py-10 md:grid-cols-[1fr_2.4fr] md:gap-12 md:py-12"
          >
            <h2 id={`${g.id}-title`} className="h3">
              {g.label}
            </h2>
            <ul className="grid gap-x-10 sm:grid-cols-2">
              {g.items.map((p) => (
                <li key={p.slug} className="border-t border-line first:border-t-0 sm:[&:nth-child(2)]:border-t-0">
                  <Link href={`/service/${p.slug}`} className="group block py-5">
                    <span className="h4 block decoration-bordeaux/40 underline-offset-4 group-hover:text-bordeaux group-hover:underline">
                      {p.title}
                    </span>
                    <span className="mt-1.5 block text-[0.9375rem] text-stone">{p.summary}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="mt-10 max-w-2xl text-body">
        Not sure which area your matter falls under?{" "}
        <Link href="/contacts" className="link">
          Tell us about it
        </Link>{" "}
        and we will point you to the right person.
      </p>
    </>
  );
}
