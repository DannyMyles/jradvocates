import Image from "next/image";
import { Breadcrumbs, type Crumb } from "./ui";

/**
 * Inner-page header in the same language as the home hero: oxblood background with the photo
 * filling the right side and fading into it. On phones the photo sits on top and fades down.
 * The site header is transparent over it (see hasDarkHero in header.tsx).
 */
export function PhotoHeader({
  crumbs,
  kicker,
  title,
  intro,
  image,
  alt = "",
  position = "center",
  priority = true,
  children,
}: {
  crumbs: Crumb[];
  kicker?: React.ReactNode;
  title: React.ReactNode;
  intro?: React.ReactNode;
  image: string;
  alt?: string;
  position?: string;
  priority?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <section className="on-dark relative -mt-[68px] overflow-hidden bg-oxblood text-white md:-mt-[84px]">
      <div className="absolute inset-x-0 top-0 h-[300px] overflow-hidden sm:h-[360px] md:inset-y-0 md:left-auto md:h-auto md:w-[min(50%,780px)]">
        <Image
          src={image}
          alt={alt}
          fill
          priority={priority}
          quality={90}
          sizes="(max-width: 768px) 100vw, min(50vw, 780px)"
          style={{ objectPosition: position }}
          className="object-cover"
        />
        <div aria-hidden className="absolute inset-0 hidden bg-[linear-gradient(90deg,#2a0a0f_0%,rgba(42,10,15,0.85)_12%,rgba(42,10,15,0.4)_30%,rgba(42,10,15,0)_52%)] md:block" />
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(0deg,#2a0a0f_0%,rgba(42,10,15,0.6)_30%,rgba(42,10,15,0)_65%)] md:bg-[linear-gradient(0deg,#2a0a0f_0%,rgba(42,10,15,0.25)_18%,rgba(42,10,15,0)_38%)]" />
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(42,10,15,0.55)_0%,rgba(42,10,15,0)_28%)]" />
      </div>

      <div className="container-page relative z-10 flex flex-col justify-end pt-[230px] pb-12 sm:pt-[290px] md:min-h-[clamp(500px,62svh,620px)] md:justify-center md:pt-[124px] md:pb-16">
        <div className="max-w-[40rem]">
          <Breadcrumbs dark items={crumbs} />
          {kicker && <p className="label text-[1.0625rem]">{kicker}</p>}
          <h1 className="h1">{title}</h1>
          {intro && <div className="mt-5 max-w-[34rem] text-[1.0625rem] leading-relaxed text-[#e8dcdd]">{intro}</div>}
          {children && <div className="mt-8 flex flex-wrap items-center gap-3">{children}</div>}
        </div>
      </div>
    </section>
  );
}
