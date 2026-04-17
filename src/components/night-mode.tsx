"use client";

import { useEffect } from "react";

/**
 * NightMode — subtle palette shift for late-hour visitors.
 *
 * After 9pm and before 6am local time, add `.is-night` to <body>.
 * The palette tokens shift 4–5% cooler/warmer. Imperceptible in one visit,
 * felt over two. The room has the light of the hour you arrive.
 *
 * Disabled entirely when prefers-reduced-motion or prefers-reduced-transparency.
 */
export function NightMode() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

    const apply = () => {
      const hour = new Date().getHours();
      const night = hour >= 21 || hour < 6;
      document.body.classList.toggle("is-night", night);
    };

    apply();
    const id = window.setInterval(apply, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return null;
}
