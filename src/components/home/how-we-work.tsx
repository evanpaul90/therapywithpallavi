"use client";

import { useEffect, useRef, useState } from "react";
import { PottedPlant } from "@/components/illustrations";

/**
 * HowWeWork — three-step process with a plant that grows as you scroll.
 *
 * Stages 1 → 2 → 3 cross-fade depending on which step is in view.
 * Plant stage = visible growth of the work.
 */
const STEPS = [
  {
    label: "01",
    title: "The free 15-minute consultation",
    body: "A short conversation to understand what you\u2019re looking for and see if we\u2019re a good fit. No pressure, no paperwork, no commitment.",
  },
  {
    label: "02",
    title: "The first session",
    body: "We slow down and look at your context together. What brought you here, what you\u2019re carrying, what you\u2019d like to feel differently. We don\u2019t rush this.",
  },
  {
    label: "03",
    title: "The ongoing work",
    body: "Sessions weekly or fortnightly. Reflective and practical. Paced to you. Change takes time, and you set the pace.",
  },
];

export function HowWeWork() {
  const refs = useRef<(HTMLLIElement | null)[]>([]);
  const [activeStage, setActiveStage] = useState<1 | 2 | 3>(1);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    refs.current.forEach((el, idx) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveStage((idx + 1) as 1 | 2 | 3);
            }
          });
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      className="relative"
      style={{ background: "var(--color-sage-pale)" }}
    >
      <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-28 md:py-40">
        <div className="max-w-[720px]">
          <p className="cap-label">How we begin</p>
          <h2 className="display-l mt-6">
            Small steps. No rush. Grown over time.
          </h2>
        </div>

        <div className="mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Plant column — sticky on desktop, grows as user scrolls */}
          <div className="md:col-span-4 md:order-2">
            <div className="md:sticky md:top-28 flex justify-center md:justify-end">
              <div className="relative w-[180px] h-[260px]">
                {[1, 2, 3].map((stage) => (
                  <div
                    key={stage}
                    className="plant-stage absolute inset-0 flex items-end justify-center"
                    data-visible={activeStage === stage ? "true" : "false"}
                  >
                    <PottedPlant
                      size={180}
                      stage={stage as 1 | 2 | 3}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Steps column */}
          <ol className="md:col-span-8 md:order-1 space-y-20 md:space-y-28">
            {STEPS.map((step, i) => (
              <li
                key={step.label}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                className="max-w-[580px]"
              >
                <div className="flex items-baseline gap-5">
                  <span
                    className="font-[var(--font-display)] italic text-[32px] shrink-0"
                    style={{ color: "var(--color-sage-deep)" }}
                  >
                    {step.label}
                  </span>
                  <div>
                    <h3 className="display-m">{step.title}</h3>
                    <p className="mt-5 text-[18px] leading-[1.75]">
                      {step.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <hr className="hairline" />
    </section>
  );
}
