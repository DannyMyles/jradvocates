import type { Block } from "@/content/types";
import { cx } from "@/lib/format";

const EMAIL = /([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g;

/** Turns email addresses inside plain text into mailto links. */
function Text({ children }: { children: string }) {
  const parts = children.split(EMAIL);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <a key={i} href={`mailto:${part}`} className="text-bordeaux underline underline-offset-3">
            {part}
          </a>
        ) : (
          part
        ),
      )}
    </>
  );
}

/** Renders stored content blocks. No raw HTML is ever injected. */
/**
 * Some source articles split one numbered sequence into several one-item lists with text between
 * them (and then refer to "step (c)"). Number such runs continuously, lettered a, b, c.
 */
function steppedLists(blocks: Block[]) {
  const starts = new Map<number, number>();
  const single = (b: Block) => b.type === "ol" && b.items.length === 1;
  let run: number[] = [];
  const flush = () => {
    if (run.length > 1) run.forEach((idx, n) => starts.set(idx, n + 1));
    run = [];
  };
  blocks.forEach((b, i) => {
    if (single(b)) run.push(i);
    else if (b.type === "ol" || b.type === "h2" || b.type === "h3") flush();
  });
  flush();
  return starts;
}

export function Blocks({ blocks, className }: { blocks: Block[]; className?: string }) {
  const stepped = steppedLists(blocks);
  return (
    <div className={cx("prose-jr", className)}>
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return (
              <h2 key={i}>
                <Text>{b.text}</Text>
              </h2>
            );
          case "h3":
            return (
              <h3 key={i}>
                <Text>{b.text}</Text>
              </h3>
            );
          case "ul":
          case "ol": {
            const List = b.type;
            const start = stepped.get(i);
            return (
              <List key={i} {...(start ? { start, type: "a" as const, className: "list-[lower-alpha]" } : {})}>
                {b.items.map((it, j) => (
                  <li key={j}>
                    <Text>{it}</Text>
                  </li>
                ))}
              </List>
            );
          }
          case "link":
            return (
              <p key={i}>
                <a href={b.href} target="_blank" rel="noopener noreferrer" className="link">
                  {b.text}
                </a>
              </p>
            );
          default:
            return (
              <p key={i}>
                <Text>{b.text}</Text>
              </p>
            );
        }
      })}
    </div>
  );
}
