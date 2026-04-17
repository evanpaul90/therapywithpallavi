"use client";

import { useEffect, useRef, useState } from "react";

/**
 * FitMirror — the emotional hinge.
 *
 * Five lines from her copy, each appearing one-at-a-time with 500ms stagger
 * when the section enters the viewport. As if she is reading them slowly.
 * Nothing else on the screen moves.
 */
const LINES = [
  "Feel overwhelmed, even when things seem fine on the outside",
  "Struggle with overthinking, self-doubt, or people-pleasing",
  "Notice repeating patterns in relationships",
  "Feel emotionally drained or stuck",
  "Want to understand what\u2019s underneath \u2014 not just cope",
];

export function FitMirror() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTriggered(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ background: "var(--color-sage-pale)" }}
    >
      <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-28 md:py-40">
        <div className="max-w-[720px]">
          <p className="cap-label">Is this you</p>
          <h2 className="display-l mt-6">
            This space may be a good fit if you&hellip;
          </h2>

          <ul className="mt-14 space-y-6 md:space-y-7">
            {LINES.map((line, i) => (
              <li
                key={line}
                className={`fit-line${triggered ? " is-visible" : ""}`}
                style={{ animationDelay: `${i * 500}ms` }}
              >
                <div className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-[14px] h-[2px] w-8 shrink-0"
                    style={{ background: "var(--color-sage-deep)" }}
                  />
                  <p className="font-[var(--font-display)] text-[26px] md:text-[30px] leading-[1.35] text-navy">
                    {line}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-14 text-[18px] text-muted italic max-w-[520px]">
            If any of these feel familiar, you&rsquo;re in the right place.
          </p>
        </div>
      </div>
      <hr className="hairline" />
    </section>
  );
}
