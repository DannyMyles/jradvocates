/** Long-form content is stored as plain blocks (no raw HTML) and rendered by <Blocks />. */
export type Block =
  | { type: "p" | "h2" | "h3"; text: string }
  | { type: "ul" | "ol"; items: string[] }
  | { type: "link"; text: string; href: string };

export type PracticeGroup = "corporate" | "governance" | "finance" | "people" | "advisory" | "other";
