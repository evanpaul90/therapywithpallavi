"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/**
 * PathwaysRead — her five IF-statements as a slow vertical reading teaser.
 *
 * Home-page version. The full expansion lives at /pathways.
 * The pathway whose title crosses viewport center is emphasized
 * (ink-dark, full opacity). Others sit muted.
 */
const PATHWAYS = [
  {
    id: "overwhelm",
    heading: "If you\u2019re feeling overwhelmed",
    body: "We explore what\u2019s driving your overwhelm and build ways to feel more steady.",
  },
  {
    id: "repeating-patterns",
    heading: "If you notice repeating patterns",
    body: "We understand where these patterns come from and begin to shift them.",
  },
  {
    id: "trauma",
    heading: "If past experiences still affect you",
    body: "Trauma-informed work focused on safety, pacing, and integration.",
  },
  {
    id: "transitions",
    heading: "If you\u2019re navigating a difficult phase",
    body: "Support and clarity through transitions like loss, burnout, or uncertainty.",
  },
  {
    id: "self-understanding",
    heading: "If you want to understand yourself",
    body: "Insight and integration for long-term emotional clarity.",
  },
];

export function PathwaysRead() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    refs.current.forEach((el, idx) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(idx);
          });
        },
        { rootMargin: "-35% 0px -45% 0px", threshold: 0 },
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="relative bg-cream">
      <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-28 md:py-40">
        <div className="max-w-[720px]">
          <p className="cap-label">Pathways</p>
          <h2 className="display-l mt-6">
            Depending on what you&rsquo;re carrying, we&rsquo;ll shape the work
            differently.
          </h2>
        </div>

        <div className="mt-20 md:mt-28 max-w-[780px]">
          {PATHWAYS.map((pathway, i) => (
            <div
              key={pathway.id}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className={`py-12 md:py-16 border-t border-divider pathway-line${
                i === active ? " is-active" : ""
              }`}
            >
              <div className="flex items-baseline gap-6">
                <span
                  aria-hidden="true"
                  className="font-[var(--font-display)] italic text-[20px] shrink-0"
                  style={{ color: "var(--color-sage-deep)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="display-m">{pathway.heading}</h3>
                  <p className="mt-4 text-[18px] leading-[1.7] max-w-[560px]">
                    {pathway.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20">
          <Link href="/pathways" className="btn-link">
            Read the pathways in depth <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
      <hr className="hairline" />
    </section>
  );
}
