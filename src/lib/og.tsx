import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/** Branded share image (link previews on WhatsApp, LinkedIn, X, etc.) in the site's colours and type. */
export async function renderOg({ eyebrow, title }: { eyebrow: string; title: string }) {
  const [font, logo] = await Promise.all([
    readFile(join(process.cwd(), "src/assets/fonts/Newsreader-Display.ttf")),
    readFile(join(process.cwd(), "public/images/brand/logo-white.png")),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  const size = title.length > 70 ? 58 : title.length > 40 ? 68 : 80;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#34100d",
          color: "#ffffff",
          padding: "64px 80px",
          fontFamily: "Newsreader",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={182} height={100} alt="" />
          <div style={{ display: "flex", fontSize: 26, color: "#d8bdb8" }}>jradvocates.com</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 32, color: "#e9d29a", marginBottom: 20 }}>{eyebrow}</div>
          <div style={{ display: "flex", fontSize: size, lineHeight: 1.06, letterSpacing: "-0.02em", maxWidth: 1000 }}>{title}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 26, color: "#d8bdb8" }}>
          <div style={{ display: "flex", width: 56, height: 2, background: "#b8892f" }} />
          Corporate and commercial law firm · Ngong Road, Nairobi
        </div>
      </div>
    ),
    { ...ogSize, fonts: [{ name: "Newsreader", data: font, style: "normal", weight: 400 }] },
  );
}
