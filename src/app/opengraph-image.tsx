import { renderOg, ogContentType, ogSize } from "@/lib/og";

export const alt = "Josephine Righa Advocates, corporate and commercial law firm in Nairobi";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ eyebrow: "Josephine Righa Advocates", title: "Committed to helping our clients succeed." });
}
