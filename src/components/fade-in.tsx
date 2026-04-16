import { clsx } from "clsx";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function FadeIn({ children, delay = 0, className }: Props) {
  return (
    <div
      className={clsx("fade-in", className)}
      style={delay > 0 ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
