/**
 * Small line icons for contact details. Inline SVG, so no icon library is needed;
 * they inherit the text colour and are hidden from screen readers (the label carries the meaning).
 */
type IconProps = { className?: string };

function Svg({ className, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? "h-5 w-5"}
    >
      {children}
    </svg>
  );
}

export const MapPinIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 21s-6.5-5.4-6.5-11a6.5 6.5 0 0 1 13 0c0 5.6-6.5 11-6.5 11Z" />
    <circle cx="12" cy="10" r="2.4" />
  </Svg>
);

export const PhoneIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 3.5h3l1.6 4-2.1 1.3a11 11 0 0 0 5.7 5.7l1.3-2.1 4 1.6v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3 5.7 2 2 0 0 1 5 3.5Z" />
  </Svg>
);

export const MailIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
  </Svg>
);

export const ClockIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </Svg>
);

export const MailboxIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M7 6h10a4 4 0 0 1 4 4v8H3v-8a4 4 0 0 1 4-4Z" />
    <path d="M7 6a4 4 0 0 1 4 4v8" />
    <path d="M14 10h4" />
  </Svg>
);

/** Icon in a small blush circle, as used beside contact details. */
export function IconBadge({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      aria-hidden
      className={
        dark
          ? "grid h-10 w-10 flex-none place-items-center rounded-full bg-white/10 text-gold-light"
          : "grid h-10 w-10 flex-none place-items-center rounded-full bg-blush text-bordeaux"
      }
    >
      {children}
    </span>
  );
}
