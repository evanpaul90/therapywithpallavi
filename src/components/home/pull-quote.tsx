"use client";

import { useEffect, useRef, useState } from "react";

const QUOTE_LEAD = "These aren't separate things.";
const QUOTE_HIGHLIGHT = "They pressurise each other.";

export function PullQuote() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-cream">
      <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-32 md:py-48">
        <div className="max-w-[920px] mx-auto text-center">
          <p
            className="font-[var(--font-display)] italic text-navy leading-[1.15]"
            style={{
              fontSize: "clamp(36px, 6vw, 64px)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 900ms ease-out, transform 900ms ease-out",
              transitionDelay: "0ms",
            }}
          >
            {QUOTE_LEAD}{" "}
            {visible ? (
              <span className="ochre-underline">{QUOTE_HIGHLIGHT}</span>
            ) : (
              <span>{QUOTE_HIGHLIGHT}</span>
            )}
          </p>
          <p
            className="cap-label mt-12"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 900ms ease-out, transform 900ms ease-out",
              transitionDelay: "1400ms",
            }}
          >
            On working with the whole system, not symptoms in isolation.
          </p>
        </div>
      </div>
      <hr className="hairline" />
    </section>
  );
}
