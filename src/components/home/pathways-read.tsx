"use client";

import { useEffect, useRef, useState } from "react";

/**
 * PathwaysRead — her five IF-statements as a slow vertical reading.
 *
 * Not a card grid. Each pathway takes generous vertical space.
 * The pathway whose title is nearest the viewport center gets emphasis
 * (ink-dark, full opacity). The others sit muted.
 *
 * SEO note: the display copy is her human IF-phrasing, but the
 * anchor slugs underneath carry clinical keywords for search intent.
 */
const PATHWAYS = [
  {
    id: "overwhelm",
    heading: "If you\u2019re feeling overwhelmed",
    body: "We explore what\u2019s driving your overwhelm and build ways to feel more steady.",
  },
  {
    id: "patterns",
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
              id={`pathway-${pathway.id}`}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className={`py-16 md:py-24 border-t border-divider pathway-line${
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
                  <p className="mt-5 text-[19px] leading-[1.75] max-w-[580px]">
                    {pathway.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Session + process — subtle closer beneath the pathways */}
        <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-[920px]">
          <div>
            <p className="cap-label">Session details</p>
            <p className="mt-5 font-[var(--font-display)] text-[22px] text-navy leading-[1.4]">
              60-minute sessions &middot; online &middot; weekly or fortnightly.
            </p>
          </div>
          <div>
            <p className="cap-label">How we begin</p>
            <ol className="mt-5 space-y-3 text-[17px]">
              <li>
                <span
                  className="font-[var(--font-display)] italic mr-2"
                  style={{ color: "var(--color-sage-deep)" }}
                >
                  01
                </span>
                Free 15-minute consultation
              </li>
              <li>
                <span
                  className="font-[var(--font-display)] italic mr-2"
                  style={{ color: "var(--color-sage-deep)" }}
                >
                  02
                </span>
                First session &mdash; understanding your context
              </li>
              <li>
                <span
                  className="font-[var(--font-display)] italic mr-2"
                  style={{ color: "var(--color-sage-deep)" }}
                >
                  03
                </span>
                Ongoing sessions &mdash; insight and change
              </li>
            </ol>
          </div>
        </div>
      </div>
      <hr className="hairline" />
    </section>
  );
}
