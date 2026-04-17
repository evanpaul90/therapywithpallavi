"use client";

import { useEffect, useRef, useState } from "react";

const FROND_COUNT = 7;

export function GrowingFern() {
  const [progress, setProgress] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (frameRef.current !== null) return;
      frameRef.current = requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        const height = Math.max(
          document.documentElement.scrollHeight - window.innerHeight,
          1,
        );
        setProgress(Math.min(1, Math.max(0, scrolled / height)));
        frameRef.current = null;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const revealedCount = Math.ceil(progress * FROND_COUNT);

  return (
    <div
      aria-hidden="true"
      className="hidden lg:block pointer-events-none fixed right-6 top-1/2 -translate-y-1/2 z-10"
      style={{ width: 88, height: "70vh", maxHeight: 560 }}
    >
      <svg
        viewBox="0 0 88 560"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full text-sage-deep"
        style={{ color: "var(--color-sage-deep)" }}
      >
        {/* Stem — always present, softly drawn */}
        <path
          d="M 44 540 C 42 480 46 420 44 360 C 42 300 46 240 44 180 C 42 120 46 60 44 12"
          opacity="0.35"
        />

        {/* Fronds — 7 total, alternating sides, unfurl progressively */}
        {FRONDS.map((frond, i) => (
          <g
            key={i}
            className={`fern-frond${i < revealedCount ? " is-revealed" : ""}`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {frond.paths.map((d, j) => (
              <path key={j} d={d} />
            ))}
          </g>
        ))}
      </svg>
    </div>
  );
}

type Frond = { paths: string[] };

/**
 * Each frond is a small pinnate leaf sweeping out from the stem.
 * Alternating left (even index) and right (odd index) as we rise.
 * Hand-drawn asymmetry — real ferns are never symmetric.
 */
const FRONDS: Frond[] = [
  // 0 — bottom frond, sweeping right
  {
    paths: [
      "M 44 500 Q 62 496 80 488",
      "M 52 498 L 56 492",
      "M 60 496 L 64 488",
      "M 68 493 L 72 485",
      "M 75 490 L 78 483",
    ],
  },
  // 1 — sweeping left
  {
    paths: [
      "M 44 440 Q 26 434 8 422",
      "M 36 438 L 32 431",
      "M 28 434 L 24 426",
      "M 20 429 L 17 421",
      "M 13 424 L 11 417",
    ],
  },
  // 2 — sweeping right, slightly larger
  {
    paths: [
      "M 44 376 Q 64 370 84 358",
      "M 52 374 L 56 365",
      "M 60 371 L 64 361",
      "M 68 367 L 72 357",
      "M 76 362 L 80 354",
    ],
  },
  // 3 — sweeping left
  {
    paths: [
      "M 44 312 Q 24 306 4 292",
      "M 36 310 L 32 302",
      "M 28 306 L 24 297",
      "M 20 301 L 16 293",
      "M 12 296 L 8 289",
    ],
  },
  // 4 — sweeping right
  {
    paths: [
      "M 44 244 Q 62 238 78 226",
      "M 52 242 L 55 234",
      "M 60 238 L 63 230",
      "M 67 233 L 70 225",
      "M 73 228 L 76 222",
    ],
  },
  // 5 — sweeping left, smaller
  {
    paths: [
      "M 44 174 Q 28 168 14 156",
      "M 37 172 L 34 165",
      "M 30 168 L 27 161",
      "M 23 163 L 20 157",
      "M 17 158 L 15 153",
    ],
  },
  // 6 — top frond, small, sweeping right — the final arrival
  {
    paths: [
      "M 44 100 Q 58 94 70 82",
      "M 50 98 L 52 92",
      "M 56 94 L 58 88",
      "M 62 89 L 64 83",
    ],
  },
];
