"use client";

import { useEffect, useRef, useState } from "react";
import { Teacup, SageBlob } from "@/components/illustrations";

/**
 * FitMirror — the emotional hinge with illustrated accent.
 *
 * Five lines, each appearing one-at-a-time as the section enters view
 * (500ms stagger). A sage teacup illustration + watercolor halo sit to
 * the side — the visitor is being read TO, gently, with tea nearby.
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
      className="relative overflow-hidden"
      style={{ background: "var(--color-sage-pale)" }}
    >
      {/* Watercolor sage wash */}
      <div
        aria-hidden="true"
        className="watercolor-wash watercolor-wash--sage"
        style={{ top: "-15%", right: "-10%" }}
      />

      {/* Distant blob */}
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-20 pointer-events-none blob-drift-3"
      >
        <SageBlob size={520} />
      </div>

      <div className="relative mx-auto max-w-[var(--content-max)] px-6 md:px-12 py-28 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* Text column */}
          <div className="md:col-span-8">
            <p className="editorial-eyebrow">Is this you</p>
            <h2 className="display-l display-italic mt-6">
              This space may be a good fit if you&hellip;
            </h2>

            <ul className="mt-14 space-y-6 md:space-y-7 max-w-[640px]">
              {LINES.map((line, i) => (
                <li
                  key={line}
                  className={`fit-line${triggered ? " is-visible" : ""}`}
                  style={{ animationDelay: `${i * 500}ms` }}
                >
                  <div className="flex items-start gap-5">
                    <span
                      aria-hidden="true"
                      className="mt-[18px] h-[2px] w-10 shrink-0"
                      style={{ background: "var(--color-sage-deep)" }}
                    />
                    <p className="font-[var(--font-display)] text-[24px] md:text-[28px] leading-[1.4] text-navy">
                      {line}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-14 text-[17px] italic text-muted max-w-[520px]">
              If any of these feel familiar, you&rsquo;re in the right place.
            </p>
          </div>

          {/* Illustration column — floating teacup in warm halo */}
          <div className="md:col-span-4 relative">
            <div className="sticky top-28 flex justify-center md:justify-end">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-12 sage-tint"
                  style={{ borderRadius: "50%", filter: "blur(24px)" }}
                />
                <div className="relative">
                  <Teacup size={220} />
                </div>
                <p className="mt-4 text-center text-[12px] editorial-eyebrow">
                  Tea has no hurry
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
