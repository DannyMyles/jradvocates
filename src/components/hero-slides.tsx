"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { HeroSlide } from "@/content/home";
import { cx } from "@/lib/format";
import { awards } from "@/lib/site";
import { ButtonLink } from "./ui";

const INTERVAL = 7000;
const EASE = "cubic-bezier(0.65, 0, 0.35, 1)";
const PHOTO_MS = 950;
const TEXT_MS = 700;

type Nav = { index: number; prev: number | null; dir: 1 | -1 };

/**
 * Home hero slideshow. Each change slides the photo across its panel and the text alongside it,
 * in the direction of travel. Autoplay stops only for the pause button, keyboard focus inside the
 * hero, or a hidden tab; it does not stop on mouse hover (the hero fills the screen, so it would never play).
 */
export function HeroSlides({ slides }: { slides: HeroSlide[] }) {
  const [nav, setNav] = useState<Nav>({ index: 0, prev: null, dir: 1 });
  const [userPaused, setUserPaused] = useState(false);
  const [keyboardFocus, setKeyboardFocus] = useState(false);
  const [hidden, setHidden] = useState(false);
  const touchX = useRef<number | null>(null);
  const { index, prev, dir } = nav;
  // Only the first photo loads with the page; the others start after it, so they don't compete on slow phones.
  const [warm, setWarm] = useState(false);
  useEffect(() => {
    const start = () => window.setTimeout(() => setWarm(true), 1200);
    if (document.readyState === "complete") {
      const t = start();
      return () => window.clearTimeout(t);
    }
    let t = 0;
    const onLoad = () => (t = start());
    window.addEventListener("load", onLoad, { once: true });
    return () => {
      window.removeEventListener("load", onLoad);
      window.clearTimeout(t);
    };
  }, []);

  const go = useCallback(
    (target: number, direction?: 1 | -1) =>
      setNav((n) => {
        const to = (target + slides.length) % slides.length;
        if (to === n.index) return n;
        return { index: to, prev: n.index, dir: direction ?? (target > n.index ? 1 : -1) };
      }),
    [slides.length],
  );
  const next = useCallback(() => go(index + 1, 1), [go, index]);
  const back = useCallback(() => go(index - 1, -1), [go, index]);

  useEffect(() => {
    const onVis = () => setHidden(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const playing = !userPaused && !keyboardFocus && !hidden;

  useEffect(() => {
    if (!playing) return;
    const t = window.setTimeout(next, INTERVAL);
    return () => window.clearTimeout(t);
  }, [index, playing, next]);

  function photoAnim(i: number) {
    if (prev === null) return undefined;
    if (i === index) return `${dir === 1 ? "slide-in-from-right" : "slide-in-from-left"} ${PHOTO_MS}ms ${EASE} both`;
    if (i === prev) return `${dir === 1 ? "slide-out-to-left" : "slide-out-to-right"} ${PHOTO_MS}ms ${EASE} both`;
    return undefined;
  }
  function textAnim(i: number) {
    if (prev === null) return undefined;
    if (i === index) return `${dir === 1 ? "text-in-from-right" : "text-in-from-left"} ${TEXT_MS}ms ${EASE} 180ms both`;
    if (i === prev) return `${dir === 1 ? "text-out-to-left" : "text-out-to-right"} ${Math.round(TEXT_MS * 0.6)}ms ${EASE} both`;
    return undefined;
  }
  const shown = (i: number) => i === index || i === prev;

  const roundBtn =
    "grid h-12 w-12 flex-none place-items-center rounded-full border border-white/45 text-lg text-white transition-colors hover:border-white hover:bg-white hover:text-bordeaux";

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Introduction"
      className="on-dark relative -mt-[68px] overflow-hidden bg-oxblood text-white md:-mt-[84px]"
      onFocus={(e) => setKeyboardFocus((e.target as HTMLElement).matches(":focus-visible"))}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget as Node) && setKeyboardFocus(false)}
      onPointerDown={(e) => {
        setKeyboardFocus(false);
        if (e.pointerType !== "mouse") touchX.current = e.clientX;
      }}
      onPointerUp={(e) => {
        if (touchX.current === null) return;
        const dx = e.clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) > 50) (dx < 0 ? next : back)();
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft") back();
      }}
    >
      {/* Photo panel, kept to a width the source photos can fill without heavy upscaling */}
      <div className="absolute inset-x-0 top-0 h-[60svh] overflow-hidden md:inset-y-0 md:left-auto md:h-auto md:w-[min(56%,860px)]">
        {slides.map((s, i) => (
          <div
            key={s.image}
            aria-hidden={i !== index}
            className={cx("absolute inset-0", !shown(i) && "invisible")}
            style={{ animation: photoAnim(i), zIndex: i === index ? 2 : 1 }}
          >
            {(i === 0 || warm || shown(i)) && (
              <Image
                src={s.image}
                alt={s.alt}
                fill
                quality={90}
                priority={i === 0}
                sizes="(max-width: 768px) 100vw, min(56vw, 860px)"
                style={{ objectPosition: s.position }}
                className="object-cover"
              />
            )}
          </div>
        ))}
        {/* Blend into the background: left edge (desktop), bottom edge, light top shade for the header */}
        <div
          aria-hidden
          className="absolute inset-0 z-[3] hidden bg-[linear-gradient(90deg,#34100d_0%,rgba(52,16,13,0.85)_10%,rgba(52,16,13,0.4)_26%,rgba(52,16,13,0)_46%)] md:block"
        />
        <div
          aria-hidden
          className="absolute inset-0 z-[3] bg-[linear-gradient(0deg,#34100d_0%,rgba(52,16,13,0.7)_20%,rgba(52,16,13,0)_50%)] md:bg-[linear-gradient(0deg,#34100d_0%,rgba(52,16,13,0.3)_14%,rgba(52,16,13,0)_32%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 z-[3] bg-[linear-gradient(180deg,rgba(52,16,13,0.5)_0%,rgba(52,16,13,0)_20%)]"
        />
      </div>

      <div className="container-page relative z-10 flex min-h-[100svh] flex-col justify-end pt-[40svh] pb-10 md:min-h-[min(860px,100svh)] md:justify-center md:pt-[120px] md:pb-14">
        <div className="max-w-[42rem]">
          {/* Every slide shares one grid cell, so the block keeps a stable height */}
          <div className="grid overflow-hidden" aria-live={playing ? "off" : "polite"}>
            {slides.map((s, i) => {
              const Heading = i === 0 ? "h1" : "h2";
              return (
                <div
                  key={s.title}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${slides.length}`}
                  inert={i !== index}
                  className={cx("col-start-1 row-start-1", !shown(i) && "invisible", i !== index && "pointer-events-none")}
                  style={{ animation: textAnim(i) }}
                >
                  <p className="label text-[1.125rem]">{s.kicker}</p>
                  <Heading className="display">{s.title}</Heading>
                  <p className="mt-6 max-w-[34rem] text-[1.0625rem] leading-relaxed text-[#eddcd9]">{s.text}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink href="/contacts" variant="primary" className="border-[#b0463f]">
              Book a consultation
            </ButtonLink>
            <ButtonLink href="/practice-areas" variant="ghost-light" arrow="→">
              Explore practice areas
            </ButtonLink>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <button type="button" className={roundBtn} onClick={back} aria-label="Previous slide">
              <span aria-hidden>←</span>
            </button>
            <button type="button" className={roundBtn} onClick={next} aria-label="Next slide">
              <span aria-hidden>→</span>
            </button>
            <div className="ml-1 flex items-center gap-1.5 sm:ml-3 sm:gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.title}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index}
                  className="group grid h-11 place-items-center"
                >
                  <span className="relative block h-[2px] w-7 overflow-hidden rounded-full bg-white/25 group-hover:bg-white/45 sm:w-14">
                    {i === index && (
                      <span
                        key={`${index}-${playing}`}
                        className="absolute inset-0 origin-left bg-gold-light"
                        style={
                          playing ? { animation: `hero-progress ${INTERVAL}ms linear forwards` } : { transform: "scaleX(1)" }
                        }
                      />
                    )}
                  </span>
                </button>
              ))}
            </div>
            <span className="ml-1 text-sm whitespace-nowrap text-muted-dark tabular-nums">
              {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={() => setUserPaused(!userPaused)}
              aria-label={userPaused ? "Play slideshow" : "Pause slideshow"}
              className="grid h-11 w-11 flex-none place-items-center rounded-full text-sm text-muted-dark transition-colors hover:text-white"
            >
              <span aria-hidden>{userPaused ? "▶" : "❚❚"}</span>
            </button>
          </div>

          <ul className="mt-8 space-y-2 border-t border-white/15 pt-6 text-[0.9375rem] text-[#ead8d5]">
            {awards.map((a) => (
              <li key={a.title}>
                <Link href={a.href} className="hover:text-white">
                  <span className="font-serif text-[1.0625rem] text-white">{a.title}</span>
                  <span className="text-muted-dark"> · {a.label.replace(" · Nominee", ", nominee")}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="absolute right-5 bottom-6 z-10 hidden text-sm text-white/75 md:block md:right-8 xl:right-11">
        {slides[index].caption}
      </p>
    </section>
  );
}
