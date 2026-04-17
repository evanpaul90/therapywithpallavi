import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { SageBlob } from "@/components/illustrations";

/**
 * HeroGentle — the room opens.
 *
 * Her exact copy. No word-by-word reveals, no billboard photo.
 * The visitor walks in. The cream is warm. A dappled-light overlay drifts.
 * Two sage blobs breathe slowly far behind.
 */
export function HeroGentle() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--color-cream-warm)" }}
    >
      {/* Ambient depth — sage blobs drifting slowly behind everything */}
      <div
        aria-hidden="true"
        className="absolute -top-20 -left-40 pointer-events-none blob-drift-1"
      >
        <SageBlob size={560} />
      </div>
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-40 pointer-events-none blob-drift-2"
      >
        <SageBlob size={480} />
      </div>
      {/* Dappled light — radial-gradient overlay */}
      <div className="dapple-light" aria-hidden="true" />

      <div className="relative mx-auto max-w-[var(--content-max)] px-6 md:px-10 pt-24 pb-24 md:pt-36 md:pb-36">
        <div className="max-w-[860px]">
          <FadeIn>
            <p className="cap-label">Therapy with Pallavi Bhaskar</p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h1 className="display-xl mt-8">
              You deserve a space where you can feel safe &mdash; and begin to
              move forward.
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="lead mt-8 max-w-[680px]">
              Trauma-informed, evidence-based therapy to help you understand
              yourself more deeply, feel more grounded, and create meaningful
              change.
            </p>
          </FadeIn>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-7 space-y-6 text-ink">
            <FadeIn delay={0.4}>
              <p>
                Life doesn&rsquo;t always fall apart in obvious ways. Sometimes,
                it shows up as overthinking, emotional overwhelm, or a quiet
                sense that something isn&rsquo;t working &mdash; even when
                things look &ldquo;fine&rdquo; on the outside.
              </p>
            </FadeIn>
            <FadeIn delay={0.5}>
              <p className="font-[var(--font-display)] italic text-[22px] text-navy leading-snug">
                You don&rsquo;t need to be in crisis to reach out.
              </p>
            </FadeIn>
            <FadeIn delay={0.6}>
              <p>
                Therapy offers a space to pause, make sense of what you&rsquo;re
                experiencing, and begin to move forward with greater clarity
                and steadiness &mdash; at a pace that feels right for you.
              </p>
            </FadeIn>
            <FadeIn delay={0.7}>
              <p className="text-muted">
                I&rsquo;m Pallavi Bhaskar, a Counsellor and Psychotherapist
                with 8+ years of professional experience, including 4+ years in
                therapeutic practice.
              </p>
            </FadeIn>
          </div>

          <div className="md:col-span-5 md:pl-8">
            <FadeIn delay={0.55}>
              <div className="md:sticky md:top-28">
                <Link href="/book" className="btn-primary">
                  Start with a free 15-minute consultation
                  <span aria-hidden="true">&rarr;</span>
                </Link>
                <p className="mt-4 text-[14px] text-muted max-w-[320px]">
                  No pressure &mdash; just a conversation to see if this feels
                  right.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
      <hr className="hairline" />
    </section>
  );
}
