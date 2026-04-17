"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SageBlob } from "@/components/illustrations";

/**
 * FinalInvitation — the door held open.
 *
 * Her final line. A sage underline draws under "begin" on viewport entry.
 * A sage blob breathes behind. Warm cream bookend.
 */
export function FinalInvitation() {
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
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "var(--color-cream-warm)" }}
    >
      {/* Sage blob breathing far behind */}
      <div
        aria-hidden="true"
        className="absolute -top-20 left-1/2 -translate-x-1/2 pointer-events-none blob-drift-2 opacity-70"
      >
        <SageBlob size={640} />
      </div>

      {/* Watercolor wash in the corner */}
      <div
        aria-hidden="true"
        className="watercolor-wash watercolor-wash--peach"
        style={{ bottom: "-30%", left: "-10%" }}
      />

      <div className="relative mx-auto max-w-[var(--content-max)] px-6 md:px-12 py-32 md:py-48 text-center">
        <p className="editorial-eyebrow">A quiet invitation</p>

        <h2 className="display-xl display-italic mt-10 max-w-[860px] mx-auto">
          You don&rsquo;t have to have everything figured out before you{" "}
          <span className={`begin-underline${triggered ? " is-visible" : ""}`}>
            begin
          </span>
          .
        </h2>

        <p className="mt-12 text-[19px] md:text-[20px] text-muted max-w-[620px] mx-auto leading-[1.7]">
          Start with a free 15-minute consultation &mdash; a space to understand
          what you&rsquo;re looking for and see if this feels right for you.
        </p>

        <div className="mt-14">
          <Link href="/book" className="btn-primary">
            Start with a free 15-minute consultation
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <p className="mt-6 text-[13px] text-muted">
          No pressure &mdash; just a conversation.
        </p>
      </div>
    </section>
  );
}
