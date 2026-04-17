"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { OpenBook } from "@/components/illustrations";

/**
 * PathwaysRead — five IF-statements as a short, scroll-highlighted teaser.
 *
 * Home-page version. Full expansion lives at /pathways.
 * The pathway whose title crosses viewport center is emphasized.
 */
const PATHWAYS = [
  {
    id: "overwhelm",
    heading: "If you\u2019re feeling overwhelmed",
  },
  {
    id: "repeating-patterns",
    heading: "If you notice repeating patterns",
  },
  {
    id: "trauma",
    heading: "If past experiences still affect you",
  },
  {
    id: "transitions",
    heading: "If you\u2019re navigating a difficult phase",
  },
  {
    id: "self-understanding",
    heading: "If you want to understand yourself",
  },
];

export function PathwaysRead() {
  const refs = useRef<(HTMLLIElement | null)[]>([]);
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
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="relative overflow-hidden bg-cream">
      <div
        aria-hidden="true"
        className="watercolor-wash"
        style={{ top: "10%", left: "-15%" }}
      />

      <div className="relative mx-auto max-w-[var(--content-max)] px-6 md:px-12 py-28 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Left: intro + illustration */}
          <div className="md:col-span-5">
            <div className="md:sticky md:top-28">
              <p className="editorial-eyebrow">Pathways</p>
              <h2 className="display-l display-italic mt-6 max-w-[440px]">
                Depending on what you&rsquo;re carrying, the work takes shape
                differently.
              </h2>
              <p className="mt-6 text-[17px] leading-[1.7] text-muted max-w-[420px]">
                Five most-common places clients arrive from. The full
                descriptions &mdash; with how we work with each &mdash; live on
                the Pathways page.
              </p>

              <div className="mt-10 opacity-70">
                <OpenBook size={140} />
              </div>

              <div className="mt-8">
                <Link href="/pathways" className="btn-link">
                  Read the pathways in depth{" "}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right: highlighted list */}
          <ol className="md:col-span-7">
            {PATHWAYS.map((pathway, i) => (
              <li
                key={pathway.id}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                className={`py-8 md:py-10 border-t border-divider pathway-line${
                  i === active ? " is-active" : ""
                }`}
              >
                <Link
                  href={`/pathways#${pathway.id}`}
                  className="flex items-baseline gap-5 group"
                >
                  <span
                    aria-hidden="true"
                    className="font-[var(--font-display)] italic text-[18px] shrink-0"
                    style={{ color: "var(--color-sage-deep)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-[var(--font-display)] italic text-[26px] md:text-[30px] leading-[1.25] text-navy group-hover:translate-x-1 transition-transform">
                    {pathway.heading}
                  </h3>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
