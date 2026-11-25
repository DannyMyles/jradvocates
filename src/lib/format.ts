const dateFmt = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "Africa/Nairobi",
});

/** "2023-08-30" -> "30 Aug 2023" */
export function formatDate(iso: string) {
  return dateFmt.format(new Date(`${iso}T12:00:00Z`));
}

export function initials(name: string) {
  return name
    .replace(/^(CPA|Ms\.|Mr\.|Dr\.)\s+/i, "")
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w) && !w.endsWith("."))
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function cx(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
