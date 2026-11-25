"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { useConsent } from "@/lib/consent";

const EMBED = "https://www.google.com/maps?q=Enwealth+Business+Centre,+Ngong+Lane,+Nairobi&output=embed";

/**
 * Google map. Google sets cookies, so it loads only after "Accept all" in the cookie notice,
 * or when the visitor clicks "Show map" here (this page view only).
 */
export function MapEmbed() {
  const consent = useConsent();
  const [showOnce, setShowOnce] = useState(false);
  const load = consent === "all" || showOnce;

  return (
    <figure>
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-line bg-sand sm:aspect-[21/8]">
        {load ? (
          <iframe
            src={EMBED}
            title={`Map showing ${site.address.short}`}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center p-6 text-center">
            <div className="max-w-md">
              <p className="h4">{site.address.lines[0]}</p>
              <p className="mt-1 text-stone">{site.address.lines.slice(1).join(", ")}</p>
              <p className="mt-4 text-sm text-stone">The map is provided by Google, which sets its own cookies.</p>
              <button type="button" className="btn mt-4 min-h-11" onClick={() => setShowOnce(true)}>
                Show map
              </button>
            </div>
          </div>
        )}
      </div>
      <figcaption className="mt-3 text-sm text-stone">
        {site.address.building}, next to DoubleTree by Hilton, {site.address.street}.{" "}
        <a href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="link text-sm">
          Get directions
        </a>
      </figcaption>
    </figure>
  );
}
