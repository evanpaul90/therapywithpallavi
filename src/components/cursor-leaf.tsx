"use client";

import { useEffect, useRef } from "react";

/**
 * CursorLeaf — a sage leaf that follows the cursor at 1/4 speed.
 *
 * Signature moment. Appears on desktop with fine pointer only.
 * Trails softly behind the cursor, with a slow rotation driven by motion.
 * Honors prefers-reduced-motion by hiding entirely via CSS.
 */
export function CursorLeaf() {
  const ref = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0, tx: 0, ty: 0, angle: 0 });
  const active = useRef(false);

  useEffect(() => {
    // Only enable on hover-capable pointers
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mql.matches) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

    const el = ref.current;
    if (!el) return;

    let raf = 0;

    const onMove = (e: MouseEvent) => {
      pos.current.tx = e.clientX;
      pos.current.ty = e.clientY;
      if (!active.current) {
        active.current = true;
        el.classList.add("is-on");
      }
    };

    const onLeave = () => {
      active.current = false;
      el.classList.remove("is-on");
    };

    const tick = () => {
      const p = pos.current;
      p.x += (p.tx - p.x) * 0.15; // ~1/6 speed — trails softly
      p.y += (p.ty - p.y) * 0.15;
      const dx = p.tx - p.x;
      const dy = p.ty - p.y;
      const targetAngle = Math.atan2(dy, dx) * (180 / Math.PI);
      p.angle += (targetAngle - p.angle) * 0.08;
      el.style.transform = `translate(${p.x}px, ${p.y}px) translate(-50%, -50%) rotate(${p.angle + 90}deg)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className="cursor-leaf">
      <svg viewBox="0 0 28 28" fill="none" className="w-full h-full">
        <path
          d="M 14 2 C 7 7 4 14 4 20 C 4 24 8 26 14 26 C 20 26 24 24 24 20 C 24 14 21 7 14 2 Z"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinejoin="round"
        />
        <path
          d="M 14 3 L 14 25"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.7"
        />
      </svg>
    </div>
  );
}
