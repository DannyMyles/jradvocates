import Image from "next/image";
import Link from "next/link";
import { cx, initials } from "@/lib/format";
import { site } from "@/lib/site";
import { IconBadge, MailIcon, MapPinIcon, PhoneIcon } from "./icons";

function isExternal(href: string) {
  return href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http");
}

/** Button-styled link. `variant` maps to the .btn-* classes in globals.css. */
/** The round arrow badge at the end of a pill button. */
export function BtnBadge({ arrow = "↗" }: { arrow?: string }) {
  return (
    <span className="btn-badge" aria-hidden>
      {arrow}
    </span>
  );
}

/** Pill-shaped button link. `variant` maps to the .btn-* classes in globals.css; `arrow={null}` drops the badge. */
export function ButtonLink({
  href,
  children,
  variant = "outline",
  arrow = "↗",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "light" | "ghost-light";
  arrow?: string | null;
  className?: string;
}) {
  const cls = cx(
    "btn",
    variant === "primary" && "btn-primary",
    variant === "light" && "btn-light",
    variant === "ghost-light" && "btn-ghost-light",
    className,
  );
  const inner = (
    <>
      {children}
      {arrow && <BtnBadge arrow={arrow} />}
    </>
  );
  if (isExternal(href)) {
    return (
      <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/** Underlined text link, the default way to point somewhere else on the site. */
export function TextLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  const cls = cx("link", className);
  if (isExternal(href)) {
    return (
      <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/**
 * A R.I.P.E. value title with its initial set bold in the brand red, so each letter visibly
 * maps to its value (e.g. "Relationship Building" reads as the R).
 */
export function ValueTitle({ title, className }: { title: string; className?: string }) {
  return (
    <span className={className}>
      <span className="mr-[0.04em] font-display text-[1.45em] leading-none font-bold text-bordeaux">{title[0]}</span>
      {title.slice(1)}
    </span>
  );
}

/** "R.I.P.E." with each initial bold in the brand red. */
export function RipeMark({ className }: { className?: string }) {
  return (
    <span className={cx("font-display whitespace-nowrap", className)}>
      <span className="sr-only">R.I.P.E.</span>
      {["R", "I", "P", "E"].map((l) => (
        <span key={l} aria-hidden>
          <span className="font-bold text-bordeaux">{l}</span>
          <span className="text-stone">.</span>
        </span>
      ))}
    </span>
  );
}

/** Small italic kicker above a heading. */
export function Label({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cx("label", className)}>{children}</p>;
}

/** Photo in a cropped frame. Give the wrapper an aspect ratio via className. */
export function Photo({
  src,
  alt,
  className,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority,
  position,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  position?: string;
}) {
  return (
    <div className={cx("media", className)}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} style={position ? { objectPosition: position } : undefined} />
    </div>
  );
}

/** A person's photo, or a monogram on sand when no photo has been supplied yet. */
export function Portrait({
  name,
  src,
  className,
  sizes,
  position = "center 20%",
  priority,
}: {
  name: string;
  src?: string;
  className?: string;
  sizes?: string;
  position?: string;
  priority?: boolean;
}) {
  if (src) return <Photo src={src} alt="" className={className} position={position} sizes={sizes} priority={priority} />;
  const letters = initials(name);
  return (
    <div className={cx("media grid place-items-center bg-sand [container-type:inline-size]", className)} aria-hidden>
      <span className="font-display text-[28cqw] leading-none tracking-[0.02em] text-bordeaux">
        {letters}
      </span>
    </div>
  );
}

export type Crumb = { href?: string; label: string };

export function Breadcrumbs({ items, dark }: { items: Crumb[]; dark?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className={cx("mb-6 text-sm", dark ? "text-muted-dark" : "text-stone")}>
      <ol className="flex flex-wrap gap-2">
        {items.map((c, i) => (
          <li key={i} className="flex gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {c.href ? (
              <Link href={c.href} className="hover:text-bordeaux">
                {c.label}
              </Link>
            ) : (
              <span aria-current="page">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Standard header for inner pages: breadcrumbs, title, optional intro on the right. */
export function PageHeader({
  crumbs,
  title,
  intro,
  children,
}: {
  crumbs: Crumb[];
  title: React.ReactNode;
  intro?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="container-page pt-10 pb-10 md:pt-16 md:pb-14">
      <Breadcrumbs items={crumbs} />
      <div className="grid items-end gap-5 md:grid-cols-[1.25fr_1fr] md:gap-14">
        <h1 className="h1">{title}</h1>
        {intro && <div className="text-[1.0625rem] leading-relaxed text-body">{intro}</div>}
      </div>
      {children}
    </section>
  );
}

/** Closing block on most pages: how to reach the firm, stated plainly. */
export function ContactStrip({ title = "Speak to Us About Your Matter" }: { title?: string }) {
  return (
    <section className="relative overflow-hidden bg-sand">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[url(/images/brand/pattern.png)] bg-[length:720px] opacity-[0.35]" />
      <div className="relative container-page grid gap-10 py-14 md:grid-cols-[1.1fr_2fr] md:py-[72px]">
        <div>
          <h2 className="h2">{title}</h2>
          <ButtonLink href="/contacts" variant="primary" className="mt-7">
            Book a consultation
          </ButtonLink>
        </div>
        <dl className="grid gap-8 sm:grid-cols-3 sm:gap-6">
          <div className="border-t border-[#d6ccc2] pt-4">
            <dt className="flex items-center gap-3 text-sm text-stone">
              <IconBadge>
                <PhoneIcon />
              </IconBadge>
              Call
            </dt>
            <dd className="mt-3 font-serif text-lg">
              <a href={site.phoneHref} className="hover:text-bordeaux">
                {site.phone}
              </a>
            </dd>
            <dd className="mt-1 text-sm text-stone">{site.hours.label}</dd>
          </div>
          <div className="border-t border-[#d6ccc2] pt-4">
            <dt className="flex items-center gap-3 text-sm text-stone">
              <IconBadge>
                <MailIcon />
              </IconBadge>
              Email
            </dt>
            <dd className="mt-3 font-serif text-lg [overflow-wrap:anywhere]">
              <a href={`mailto:${site.email}`} className="hover:text-bordeaux">
                {site.email}
              </a>
            </dd>
          </div>
          <div className="border-t border-[#d6ccc2] pt-4">
            <dt className="flex items-center gap-3 text-sm text-stone">
              <IconBadge>
                <MapPinIcon />
              </IconBadge>
              Visit
            </dt>
            <dd className="mt-3 font-serif text-lg">
              <a href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-bordeaux">
                {site.address.building}
              </a>
            </dd>
            <dd className="mt-1 text-sm text-stone">{site.address.street}, Nairobi</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
