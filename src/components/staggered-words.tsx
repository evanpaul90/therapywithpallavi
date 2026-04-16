import { clsx } from "clsx";

type Props = {
  text: string;
  className?: string;
  startDelay?: number;
  perWordDelay?: number;
  as?: "h1" | "h2" | "p" | "span";
};

export function StaggeredWords({
  text,
  className,
  startDelay = 0,
  perWordDelay = 0.08,
  as: Tag = "span",
}: Props) {
  const words = text.split(/(\s+)/);
  let wordIdx = 0;
  return (
    <Tag className={className}>
      {words.map((token, i) => {
        if (/^\s+$/.test(token)) return <span key={i}>{token}</span>;
        const delay = startDelay + wordIdx * perWordDelay;
        wordIdx += 1;
        return (
          <span
            key={i}
            className="word"
            style={{ animationDelay: `${delay}s` }}
          >
            {token}
          </span>
        );
      })}
    </Tag>
  );
}
