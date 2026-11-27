import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 90 is used for the hero photos, which are small originals and lose detail at lower quality.
    qualities: [75, 90],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Caroline M. Kinyua has left the firm (client revision 25/11/2026); send old links to the team page.
      { source: "/team/caroline-m-kinyua", destination: "/our-team", permanent: true },
    ];
  },
};

export default nextConfig;
