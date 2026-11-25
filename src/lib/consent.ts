"use client";

import { useSyncExternalStore } from "react";

/**
 * Cookie consent, stored in the visitor's browser.
 * "all": optional third-party content may load (currently only the Google Maps embed, which sets Google cookies).
 * "essential": nothing optional loads. The site itself sets no tracking or analytics cookies.
 */
export type Consent = "all" | "essential";

const KEY = "jr-cookie-consent";
const EVENT = "jr-consent-change";
const VERSION = 1;

function read(): Consent | null {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const v = JSON.parse(raw) as { v: number; choice: Consent };
    return v.v === VERSION && (v.choice === "all" || v.choice === "essential") ? v.choice : null;
  } catch {
    return null;
  }
}

export function setConsent(choice: Consent | null) {
  try {
    if (choice) window.localStorage.setItem(KEY, JSON.stringify({ v: VERSION, choice, at: new Date().toISOString() }));
    else window.localStorage.removeItem(KEY);
  } catch {
    /* storage blocked: the choice lasts for this page view only */
  }
  memory = choice;
  window.dispatchEvent(new Event(EVENT));
}

let memory: Consent | null | undefined;

function subscribe(cb: () => void) {
  const onStorage = (e: StorageEvent) => e.key === KEY && ((memory = undefined), cb());
  window.addEventListener(EVENT, cb);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener("storage", onStorage);
  };
}

function snapshot(): Consent | null {
  if (memory === undefined) memory = read();
  return memory;
}

/** `undefined` while rendering on the server (unknown), then the stored choice or `null` if none yet. */
export function useConsent(): Consent | null | undefined {
  return useSyncExternalStore(subscribe, snapshot, () => undefined);
}
