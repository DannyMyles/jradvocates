import Link from "next/link";
import { insightCategories, type Insight } from "@/content/insights";
import { formatDate } from "@/lib/format";

export function insightHref(i: Insight) {
  return `/${i.category}/${i.slug}`;
}

export function categoryLabel(category: Insight["category"]) {
  return insightCategories.find((x) => x.id === category)?.short ?? "";
}

/** First substantial paragraph of an article, used as its summary. */
export function insightExcerpt(i: Insight) {
  const p = i.body.find((b) => b.type === "p" && "text" in b && b.text.length > 60);
  return p && "text" in p ? p.text : "";
}

/** Text-led list row: date and category on the left, title and opening line on the right. */
export function InsightRow({ item, compact }: { item: Insight; compact?: boolean }) {
  return (
    <Link
      href={insightHref(item)}
      className="group grid gap-2 border-t border-line py-6 sm:grid-cols-[180px_1fr] sm:gap-8 md:py-7"
    >
      <p className="text-sm text-stone">
        <time dateTime={item.date}>{formatDate(item.date)}</time>
        <span className="block">{categoryLabel(item.category)}</span>
      </p>
      <div>
        <h3 className="h4 text-[1.2rem] decoration-bordeaux/40 underline-offset-4 group-hover:text-bordeaux group-hover:underline">
          {item.title}
        </h3>
        {!compact && <p className="mt-2 line-clamp-2 max-w-3xl text-[0.9375rem] text-stone">{insightExcerpt(item)}</p>}
      </div>
    </Link>
  );
}
