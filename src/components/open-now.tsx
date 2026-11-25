"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { cx } from "@/lib/format";

export function isOpenNow() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: site.hours.timeZone,
    weekday: "short",
    hour: "numeric",
    hour12: false,
  }).formatToParts(new Date());
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(parts.find((p) => p.type === "weekday")!.value);
  const hour = Number(parts.find((p) => p.type === "hour")!.value) % 24;
  return (site.hours.days as readonly number[]).includes(day) && hour >= site.hours.open && hour < site.hours.close;
}

/** Computed in Nairobi time on the client, so a cached page never shows a stale status. */
export function OpenNow() {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    setOpen(isOpenNow());
    const t = setInterval(() => setOpen(isOpenNow()), 60_000);
    return () => clearInterval(t);
  }, []);

  if (open === null) return null;
  return (
    <span className="mt-1 flex items-center gap-1.5 font-sans text-sm text-stone">
      <span aria-hidden className={cx("h-1.5 w-1.5 rounded-full", open ? "bg-[#7bd389]" : "bg-[#d9a0a5]")} />
      {open ? "Open now" : "Closed now"}
    </span>
  );
}
