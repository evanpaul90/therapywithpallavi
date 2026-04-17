"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/**
 * FinalInvitation — the room's door, held open.
 *
 * Her final line. A sage underline draws under the word 'begin' when the
 * sentence enters the viewport. One moment. Photographable.
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
      className="relative"
      style={{ background: "var(--color-cream-warm)" }}
    >
      <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-32 md:py-48 text-center">
        <p className="cap-label">A quiet invitation</p>

        <h2
          className="display-l mt-10 max-w-[820px] mx-auto italic"
          style={{ fontStyle: "italic" }}
        >
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

        <div className="mt-14 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-5">
          <Link href="/book" className="btn-primary">
            Start with a free 15-minute consultation
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <p className="mt-6 text-[14px] text-muted">
          No pressure &mdash; just a conversation.
        </p>
      </div>
    </section>
  );
}
