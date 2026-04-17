import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import {
  PottedPlant,
  WindowWithLight,
  Teacup,
  WoodenChair,
} from "@/components/illustrations";

export const metadata: Metadata = {
  title: "How therapy with Pallavi works \u2014 consultation, first session, ongoing",
  description:
    "What to expect when you begin therapy with Pallavi Bhaskar. A free 15-minute consultation, a first session to understand context, and ongoing sessions paced to you. 60 minutes, online, weekly or fortnightly.",
};

export default function HowItWorksPage() {
  return (
    <>
      {/* Opening */}
      <section
        className="relative"
        style={{ background: "var(--color-cream-warm)" }}
      >
        <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-24 md:py-36">
          <FadeIn>
            <p className="cap-label">How it works</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="display-xl mt-6 max-w-[860px]">
              Slow, steady, and shaped around you.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="lead mt-8 max-w-[620px]">
              Therapy is not a transaction. It&rsquo;s a careful relationship
              built in steps. Here&rsquo;s what to expect from the first click
              to the work we do over time.
            </p>
          </FadeIn>
        </div>
        <hr className="hairline" />
      </section>

      {/* Three steps, each with its own illustration */}
      <section className="relative bg-cream">
        <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-24 md:py-32">
          <div className="space-y-32 md:space-y-40 max-w-[1040px]">
            {/* Step 1 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
              <div className="md:col-span-5 order-2 md:order-1">
                <FadeIn>
                  <p
                    className="cap-label"
                    style={{ color: "var(--color-sage-deep)" }}
                  >
                    Step 01 &middot; before we meet
                  </p>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <h2 className="display-m mt-5">
                    The free 15-minute consultation.
                  </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="mt-6 text-[18px] leading-[1.75]">
                    A short video call to understand what you&rsquo;re looking
                    for and see if working together feels right. No paperwork,
                    no pressure, no commitment.
                  </p>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="mt-4 text-[17px] leading-[1.7] text-muted">
                    You&rsquo;ll leave the consultation with clarity on what
                    therapy with me would look like &mdash; and whether to take
                    the next step.
                  </p>
                </FadeIn>
              </div>
              <div className="md:col-span-7 order-1 md:order-2 flex justify-center">
                <FadeIn>
                  <PottedPlant size={200} stage={1} />
                </FadeIn>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
              <div className="md:col-span-7 flex justify-center md:justify-start">
                <FadeIn>
                  <WindowWithLight size={200} />
                </FadeIn>
              </div>
              <div className="md:col-span-5">
                <FadeIn>
                  <p
                    className="cap-label"
                    style={{ color: "var(--color-sage-deep)" }}
                  >
                    Step 02 &middot; our first session
                  </p>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <h2 className="display-m mt-5">
                    Understanding your context.
                  </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="mt-6 text-[18px] leading-[1.75]">
                    We slow down together. What brought you here, what
                    you&rsquo;re carrying, what you&rsquo;d like to feel
                    differently. I ask questions. You answer as you&rsquo;re
                    ready.
                  </p>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="mt-4 text-[17px] leading-[1.7] text-muted">
                    By the end we&rsquo;ll have a sense of the shape of the
                    work &mdash; without pretending to have all the answers
                    yet.
                  </p>
                </FadeIn>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
              <div className="md:col-span-5 order-2 md:order-1">
                <FadeIn>
                  <p
                    className="cap-label"
                    style={{ color: "var(--color-sage-deep)" }}
                  >
                    Step 03 &middot; ongoing
                  </p>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <h2 className="display-m mt-5">
                    The work, over time.
                  </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="mt-6 text-[18px] leading-[1.75]">
                    Weekly or fortnightly sessions. Reflective and practical.
                    Insight and integration. Paced to you &mdash; and revisited
                    as you change.
                  </p>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="mt-4 text-[17px] leading-[1.7] text-muted">
                    You can take it one session at a time. There is no
                    long-term commitment required, ever.
                  </p>
                </FadeIn>
              </div>
              <div className="md:col-span-7 order-1 md:order-2 flex justify-center">
                <FadeIn>
                  <PottedPlant size={200} stage={3} />
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
        <hr className="hairline" />
      </section>

      {/* Logistics */}
      <section
        className="relative"
        style={{ background: "var(--color-sage-pale)" }}
      >
        <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-24 md:py-32">
          <div className="max-w-[720px]">
            <FadeIn>
              <p className="cap-label">Practical details</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="display-l mt-6">
                The everyday shape of sessions.
              </h2>
            </FadeIn>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 max-w-[900px]">
            {[
              {
                tag: "Duration",
                value: "60 minutes",
                note: "each session, online",
              },
              {
                tag: "Cadence",
                value: "Weekly or fortnightly",
                note: "decided together",
              },
              {
                tag: "Fees",
                value: "On request",
                note: "shared after the intake conversation",
              },
            ].map((item, i) => (
              <FadeIn key={item.tag} delay={0.2 + i * 0.08}>
                <div>
                  <p className="cap-label">{item.tag}</p>
                  <p
                    className="mt-4 font-[var(--font-display)] italic text-[28px] leading-tight"
                    style={{ color: "var(--color-sage-deep)" }}
                  >
                    {item.value}
                  </p>
                  <p className="mt-2 text-[15px] text-muted">{item.note}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <p className="mt-16 text-[17px] leading-[1.7] text-muted max-w-[640px]">
              Cancellation: 24+ hours, free; 12&ndash;24 hours, 50% fee; under
              12 hours, full session fee. These details are covered in detail
              in the{" "}
              <Link href="/terms" className="btn-link inline">
                terms of practice
              </Link>
              .
            </p>
          </FadeIn>
        </div>
        <hr className="hairline" />
      </section>

      {/* What to bring */}
      <section className="relative bg-cream">
        <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5">
              <FadeIn>
                <WoodenChair size={180} />
              </FadeIn>
            </div>
            <div className="md:col-span-7">
              <FadeIn>
                <p className="cap-label">Before the first session</p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="display-m mt-5">
                  There&rsquo;s nothing to prepare.
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mt-6 text-[18px] leading-[1.75]">
                  You don&rsquo;t need to rehearse your story, have a list of
                  symptoms, or know what you want to fix. Come as you are.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="mt-4 text-[18px] leading-[1.75] text-muted">
                  A quiet room, a pair of headphones, and a glass of water.
                  That&rsquo;s enough.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
        <hr className="hairline" />
      </section>

      {/* CTA */}
      <section
        className="relative"
        style={{ background: "var(--color-cream-warm)" }}
      >
        <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-24 md:py-32 text-center">
          <FadeIn>
            <div className="flex justify-center mb-8">
              <Teacup size={120} />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="display-l max-w-[640px] mx-auto italic">
              Ready to begin?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-[18px] text-muted max-w-[520px] mx-auto">
              Start with a conversation. No pressure, no commitment.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-10">
              <Link href="/book" className="btn-primary">
                Start with a free 15-minute consultation
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
