import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { SageBlob } from "@/components/illustrations";

/**
 * HeroGentle — editorial opening with photographic anchor.
 *
 * A real room instead of a rendered illustration. Empty wooden chair by
 * a window, afternoon light on linen — the room the visitor has arrived in.
 * Her copy opens beside it. Watercolor washes + sage blob drift behind.
 */
export function HeroGentle() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--color-cream-warm)" }}
    >
      {/* Watercolor washes */}
      <div
        aria-hidden="true"
        className="watercolor-wash"
        style={{ top: "-20%", left: "-10%" }}
      />
      <div
        aria-hidden="true"
        className="watercolor-wash watercolor-wash--peach"
        style={{ bottom: "-25%", right: "-15%" }}
      />

      {/* Ambient sage blob breathing behind */}
      <div
        aria-hidden="true"
        className="absolute -top-20 -left-40 pointer-events-none blob-drift-1"
      >
        <SageBlob size={560} />
      </div>

      <div className="relative mx-auto max-w-[var(--content-max)] px-6 md:px-12 pt-20 pb-20 md:pt-28 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Copy column */}
          <div className="md:col-span-6 lg:col-span-6">
            <FadeIn>
              <p className="editorial-eyebrow">Therapy with Pallavi Bhaskar</p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h1 className="display-xl display-italic mt-8">
                You deserve a space where you can feel safe &mdash; and begin to
                move forward.
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="lead mt-8 max-w-[560px]">
                Trauma-informed, evidence-based therapy to help you understand
                yourself more deeply, feel more grounded, and create meaningful
                change.
              </p>
            </FadeIn>

            <FadeIn delay={0.45}>
              <p
                className="mt-10 font-[var(--font-display)] italic text-[22px] md:text-[24px] text-navy leading-snug"
              >
                &ldquo;You don&rsquo;t need to be in crisis to reach out.&rdquo;
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <Link href="/book" className="btn-primary">
                  Start with a free 15-minute consultation
                  <span aria-hidden="true">&rarr;</span>
                </Link>
                <p className="text-[13px] text-muted max-w-[260px]">
                  No pressure &mdash; just a conversation to see if this feels
                  right.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Photography column — chair by window */}
          <div className="md:col-span-6 lg:col-span-6 relative">
            <FadeIn delay={0.3}>
              <figure className="relative mx-auto md:mx-0 md:ml-auto max-w-[560px]">
                {/* Sage wash halo */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-6 sage-tint pointer-events-none"
                  style={{ filter: "blur(24px)" }}
                />
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: "3/2" }}
                >
                  <Image
                    src="/assets/photography/chair-by-window.jpg"
                    alt="An empty wooden chair beside a window with afternoon light on a wooden floor, a small vase with a single fern frond"
                    fill
                    sizes="(max-width: 768px) 100vw, 560px"
                    className="object-cover"
                    priority
                  />
                </div>
                <figcaption className="mt-4 text-center text-[11px] editorial-eyebrow">
                  A chair by the window &middot; afternoon light
                </figcaption>
              </figure>
            </FadeIn>
          </div>
        </div>

        {/* Letter prose below */}
        <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-8 md:col-start-2 relative">
            <FadeIn>
              <div className="prose-section text-ink max-w-[620px]">
                <p
                  className="drop-cap text-[19px] md:text-[20px] leading-[1.85]"
                >
                  Life doesn&rsquo;t always fall apart in obvious ways. Sometimes,
                  it shows up as overthinking, emotional overwhelm, or a quiet
                  sense that something isn&rsquo;t working &mdash; even when
                  things look &ldquo;fine&rdquo; on the outside.
                </p>
                <p className="mt-5 text-[19px] leading-[1.8]">
                  Therapy offers a space to pause, make sense of what
                  you&rsquo;re experiencing, and begin to move forward with
                  greater clarity and steadiness &mdash; at a pace that feels
                  right for you.
                </p>
                <p className="mt-5 text-[17px] leading-[1.7] text-muted">
                  I&rsquo;m Pallavi Bhaskar, a Counsellor and Psychotherapist
                  with 8+ years of professional experience, including 4+ years
                  in therapeutic practice.
                </p>
              </div>

              <div className="hidden xl:block">
                <p
                  className="marginalia marginalia--right"
                  style={{ top: "1rem" }}
                >
                  Finally, someone who gets it.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
