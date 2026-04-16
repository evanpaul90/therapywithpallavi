"use client";

import { useEffect, useState } from "react";

/**
 * Hairline scroll-progress bar pinned to the top of the viewport.
 * Quiet teal, 2px tall, scales horizontally as the user scrolls.
 */
export function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    function update() {
      const h = document.documentElement;
      const scrollable = h.scrollHeight - h.clientHeight;
      const ratio = scrollable > 0 ? h.scrollTop / scrollable : 0;
      setPct(Math.max(0, Math.min(1, ratio)));
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left pointer-events-none"
      style={{
        background: "var(--color-teal)",
        transform: `scaleX(${pct})`,
        transition: "transform 80ms linear",
      }}
    />
  );
}
