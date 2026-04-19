"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SageBlob } from "@/components/illustrations";

/**
 * FitMirror — five-line self-recognition with real teacup photography.
 *
 * Each line reveals one-at-a-time as the section enters view (500ms stagger).
 * A steaming teacup photo sits in the right column, sage halo behind.
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
      <div
        aria-hidden="true"
        className="watercolor-wash watercolor-wash--sage"
        style={{ top: "-15%", right: "-10%" }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-20 pointer-events-none blob-drift-3"
      >
        <SageBlob size={520} />
      </div>

      <div className="relative mx-auto max-w-[var(--content-max)] px-6 md:px-12 py-24 md:py-36">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* Text column */}
          <div className="md:col-span-7">
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

          {/* Photography column */}
          <div className="md:col-span-5 relative">
            <div className="md:sticky md:top-28">
              <figure className="relative mx-auto md:mx-0 md:ml-auto max-w-[400px]">
                <div
                  aria-hidden="true"
                  className="absolute -inset-6 sage-tint pointer-events-none"
                  style={{ filter: "blur(28px)" }}
                />
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: "4/5" }}
                >
                  <Image
                    src="/assets/photography/teacup-steam.jpg"
                    alt="A ceramic teacup with steam rising, resting on a linen napkin on a wooden table, a single sage leaf beside it"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
