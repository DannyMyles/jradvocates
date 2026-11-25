import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { site } from "@/lib/site";
import { clientIp, rateLimited } from "@/lib/rate-limit";

export const runtime = "nodejs";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(v: unknown, max: number) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function fail(message: string, status = 400) {
  return NextResponse.json({ message }, { status });
}

export async function POST(req: Request) {
  if (rateLimited(`contact:${clientIp(req)}`)) {
    return fail("Too many messages. Please try again later or call us.", 429);
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return fail("Invalid request.");
  }

  // Honeypot: pretend success so bots learn nothing.
  if (clean(body.company, 200)) return NextResponse.json({ ok: true });

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 40);
  const area = clean(body.area, 120);
  const subject = clean(body.subject, 200);
  const message = clean(body.message, 5000);

  if (!name) return fail("Please enter your name.");
  if (!EMAIL.test(email)) return fail("Please enter a valid email address.");
  if (message.length < 10) return fail("Please tell us a little about your matter.");
  if (!body.consent) return fail("Please confirm so we can reply to you.");

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO, CONTACT_FROM } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("[contact] SMTP is not configured; message not sent.");
    return fail(`Our form is temporarily unavailable. Please email ${site.email} or call ${site.phone}.`, 503);
  }

  const port = Number(SMTP_PORT ?? 465);
  const transport = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const details = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone && `Phone: ${phone}`,
    area && `Area of need: ${area}`,
    subject && `Subject: ${subject}`,
  ].filter(Boolean);
  const lines = [...details, "", message];

  try {
    await transport.sendMail({
      from: CONTACT_FROM || `"${site.shortName} website" <${SMTP_USER}>`,
      to: CONTACT_TO || site.email,
      replyTo: { name, address: email },
      subject: `Website enquiry${area ? ` (${area})` : ""}: ${subject || name}`,
      text: lines.join("\n"),
    });
  } catch (err) {
    console.error("[contact] send failed", err);
    return fail(`Your message could not be sent. Please email ${site.email} or call ${site.phone}.`, 502);
  }

  return NextResponse.json({ ok: true });
}
