"use client";

import { useState } from "react";

type Status = { state: "idle" | "sending" | "ok" | "error"; message?: string };

export function NewsletterForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { message?: string };
      if (!res.ok) throw new Error(json.message);
      setStatus({ state: "ok", message: json.message });
      form.reset();
    } catch (err) {
      setStatus({ state: "error", message: err instanceof Error && err.message ? err.message : "Something went wrong." });
    }
  }

  if (status.state === "ok") {
    return (
      <p role="status" className="mt-3.5 rounded-xs border border-white/20 px-4 py-3 text-sm">
        ✓ {status.message ?? "Thank you for subscribing."}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="mt-3.5">
      <div className="flex rounded-full border border-white/25 bg-white/5 p-1 pl-2 focus-within:border-gold-light">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Your email address"
          className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-[0.9375rem] text-white placeholder:text-[#c4aaa5] focus:outline-none"
        />
        {/* honeypot: bots fill this, people never see it */}
        <input type="text" name="company" tabIndex={-1} autoComplete="off" className="absolute -left-[10000px] h-px w-px" aria-hidden />
        <button type="submit" disabled={status.state === "sending"} className="btn btn-light min-h-[42px] px-5 py-1.5">
          {status.state === "sending" ? "…" : "Subscribe"}
        </button>
      </div>
      {status.state === "error" && (
        <p role="alert" className="mt-2 text-sm text-[#f3c6ca]">
          {status.message}
        </p>
      )}
    </form>
  );
}
