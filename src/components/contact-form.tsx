"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getPracticeArea, practiceAreas } from "@/content/practice-areas";
import { BtnBadge } from "./ui";

type Errors = Partial<Record<"name" | "email" | "message" | "consent", string>>;
type Status = { state: "idle" | "sending" | "ok" | "error"; message?: string };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(d: Record<string, FormDataEntryValue>): Errors {
  const e: Errors = {};
  if (!String(d.name ?? "").trim()) e.name = "Please enter your name.";
  if (!EMAIL.test(String(d.email ?? "").trim())) e.email = "Please enter a valid email address.";
  if (String(d.message ?? "").trim().length < 10) e.message = "Please tell us a little about your matter.";
  if (!d.consent) e.consent = "Please confirm so we can reply to you.";
  return e;
}

/**
 * Pre-selects "Area of need" from ?area=<practice-slug> (links from practice-area pages).
 * Kept in its own Suspense boundary so the rest of the form is still pre-rendered.
 */
function AreaFromUrl() {
  const slug = useSearchParams().get("area");
  useEffect(() => {
    const title = slug ? getPracticeArea(slug)?.title : undefined;
    const select = document.getElementById("cf-area") as HTMLSelectElement | null;
    if (title && select) select.value = title;
  }, [slug]);
  return null;
}

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(errs)[0]}"]`)?.focus();
      return;
    }
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { message?: string };
      if (!res.ok) throw new Error(json.message);
      setStatus({ state: "ok" });
      form.reset();
    } catch (err) {
      setStatus({
        state: "error",
        message: err instanceof Error && err.message ? err.message : "Your message could not be sent.",
      });
    }
  }

  if (status.state === "ok") {
    return (
      <div role="status" className="rounded-[10px] border border-[#c9dcc7] bg-[#f2f8f1] p-6">
        <p className="h4">Thank you. Your message has been sent.</p>
        <p className="mt-2 text-body">We’ll get back to you within one business day.</p>
        <button type="button" className="link mt-4" onClick={() => setStatus({ state: "idle" })}>
          Send another message
        </button>
      </div>
    );
  }

  const field = (name: keyof Errors) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });
  const err = (name: keyof Errors) =>
    errors[name] && (
      <p id={`${name}-error`} className="field-error">
        <svg aria-hidden viewBox="0 0 16 16" className="h-3.5 w-3.5 flex-none" fill="currentColor">
          <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm-.75 3.5h1.5v4.75h-1.5V4.5Zm.75 7.25a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Z" />
        </svg>
        {errors[name]}
      </p>
    );
  const label = (id: string, text: string, required?: boolean) => (
    <label htmlFor={id} className="field-label">
      {text}
      {required ? (
        <span aria-hidden className="text-bordeaux">
          {" "}*
        </span>
      ) : (
        <span className="field-hint"> (optional)</span>
      )}
    </label>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <Suspense fallback={null}>
        <AreaFromUrl />
      </Suspense>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid content-start gap-2">
          {label("cf-name", "Your name", true)}
          <input id="cf-name" name="name" autoComplete="name" aria-required placeholder="Full name" className="input" {...field("name")} />
          {err("name")}
        </div>
        <div className="grid content-start gap-2">
          {label("cf-email", "Email address", true)}
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            aria-required
            placeholder="name@company.co.ke"
            className="input"
            {...field("email")}
          />
          {err("email")}
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid content-start gap-2">
          {label("cf-phone", "Phone")}
          <input id="cf-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+254 7XX XXX XXX" className="input" />
        </div>
        <div className="grid content-start gap-2">
          {label("cf-area", "Area of need")}
          <select id="cf-area" name="area" defaultValue="" className="input">
            <option value="">Select a practice area</option>
            {practiceAreas.map((p) => (
              <option key={p.slug} value={p.title}>
                {p.title}
              </option>
            ))}
            <option value="Other">Other / not sure</option>
          </select>
        </div>
      </div>
      <div className="grid gap-2">
        {label("cf-subject", "Subject")}
        <input id="cf-subject" name="subject" placeholder="A short summary" className="input" />
      </div>
      <div className="grid gap-2">
        {label("cf-message", "Your message", true)}
        <textarea
          id="cf-message"
          name="message"
          rows={6}
          aria-required
          placeholder="Tell us briefly about your matter and how we can help."
          className="input"
          {...field("message")}
        />
        {err("message")}
      </div>
      {/* honeypot */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="absolute -left-[10000px] h-px w-px" aria-hidden />
      <div className="grid gap-2">
        <label className="flex items-start gap-3 text-[0.9375rem] leading-snug text-body">
          <input type="checkbox" name="consent" value="yes" className="check" {...field("consent")} />
          <span>
            I agree that JR Advocates may use these details to reply to my enquiry, as described in our{" "}
            <Link href="/privacy-policy" className="link text-[0.9375rem]" target="_blank">
              privacy policy
            </Link>
            .
          </span>
        </label>
        {err("consent")}
      </div>
      {status.state === "error" && (
        <p role="alert" className="rounded-[10px] border border-[#e9c3c6] bg-[#fbf0f1] px-5 py-4 text-sm text-[#7a1d26]">
          {status.message}
        </p>
      )}
      <button type="submit" disabled={status.state === "sending"} className="btn btn-primary mt-1 w-full justify-between">
        {status.state === "sending" ? "Sending…" : "Send message"}
        <BtnBadge />
      </button>
    </form>
  );
}
