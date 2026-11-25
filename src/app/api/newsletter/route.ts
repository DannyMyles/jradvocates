import { createHash } from "node:crypto";
import { NextResponse } from "next/server";
import { clientIp, rateLimited } from "@/lib/rate-limit";

export const runtime = "nodejs";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Subscribes an address to the firm's Mailchimp audience (the live site uses Mailchimp for WordPress).
 * Needs MAILCHIMP_API_KEY (ends in "-usX") and MAILCHIMP_AUDIENCE_ID.
 * Members are added as "pending" so Mailchimp sends its double opt-in email.
 */
export async function POST(req: Request) {
  if (rateLimited(`newsletter:${clientIp(req)}`, 5)) {
    return NextResponse.json({ message: "Too many attempts. Please try again later." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }
  if (typeof body.company === "string" && body.company) return NextResponse.json({ message: "Thank you for subscribing." });

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase().slice(0, 200) : "";
  if (!EMAIL.test(email)) return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });

  const key = process.env.MAILCHIMP_API_KEY;
  const list = process.env.MAILCHIMP_AUDIENCE_ID;
  const dc = key?.split("-")[1];
  if (!key || !list || !dc) {
    console.error("[newsletter] Mailchimp is not configured.");
    return NextResponse.json({ message: "Sign-up is temporarily unavailable. Please try again later." }, { status: 503 });
  }

  const hash = createHash("md5").update(email).digest("hex");
  const res = await fetch(`https://${dc}.api.mailchimp.com/3.0/lists/${list}/members/${hash}`, {
    method: "PUT",
    headers: {
      Authorization: `Basic ${Buffer.from(`any:${key}`).toString("base64")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email_address: email, status_if_new: "pending" }),
  });

  if (!res.ok) {
    console.error("[newsletter] Mailchimp error", res.status, await res.text().catch(() => ""));
    return NextResponse.json({ message: "We couldn’t subscribe that address. Please try again." }, { status: 502 });
  }

  const member = (await res.json()) as { status?: string };
  return NextResponse.json({
    message:
      member.status === "subscribed"
        ? "You’re already subscribed. Thank you."
        : "Almost done: please check your inbox to confirm your subscription.",
  });
}
