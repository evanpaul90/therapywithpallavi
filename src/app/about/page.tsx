import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { TreeGrove } from "@/components/illustrations";

export const metadata: Metadata = {
  title: "About \u2014 Pallavi Bhaskar, Trauma-informed Psychotherapist",
  description:
    "Pallavi Bhaskar is a trauma-informed Counsellor and Psychotherapist with 8+ years of professional experience, including 4+ years in therapeutic practice. Online sessions, India and globally.",
};

export default function AboutPage() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--color-clay-pale)" }}
    >
      {/* Watercolor washes */}
      <div
        aria-hidden="true"
        className="watercolor-wash"
        style={{ top: "-15%", left: "-10%" }}
      />
      <div
        aria-hidden="true"
        className="watercolor-wash watercolor-wash--peach"
        style={{ bottom: "-20%", right: "-15%" }}
      />

      <div className="relative mx-auto max-w-[var(--content-max)] px-6 md:px-12 py-24 md:py-36">
        {/* Hero: italic headline left + portrait with tree-grove behind right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-8">
            <FadeIn>
              <p className="editorial-eyebrow">About</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="display-xl display-italic mt-8 max-w-[820px]">
                The patterns you struggle with are not random. They make sense
                when understood with compassion and context.
              </h1>
            </FadeIn>
          </div>

          <div className="md:col-span-4 relative flex md:justify-end">
            <FadeIn>
              <div className="relative md:sticky md:top-28">
                {/* Tree grove behind portrait */}
                <div
                  aria-hidden="true"
                  className="absolute -top-6 -right-8 opacity-50 pointer-events-none hidden md:block"
                >
                  <TreeGrove size={220} />
                </div>
                <div
                  className="relative w-[240px] overflow-hidden"
                  style={{ aspectRatio: "3/4" }}
                >
                  <Image
                    src="/assets/pallavi-portrait.png"
                    alt="Pallavi Bhaskar, Counsellor and Psychotherapist"
                    fill
                    sizes="240px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Letter prose with drop cap + marginalia */}
        <div className="mt-24 md:mt-32 relative">
          <div className="mx-auto max-w-[620px] relative">
            <FadeIn>
              <div className="text-ink">
                <p className="drop-cap text-[20px] leading-[1.85]">
                  I&rsquo;m Pallavi Bhaskar, a trauma-informed Counsellor and
                  Psychotherapist working with clients across India and
                  globally.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="mt-6 text-[19px] leading-[1.8] text-ink">
                I believe the patterns you struggle with are not random &mdash;
                they make sense when understood with compassion and context.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="mt-6 text-[19px] leading-[1.8] text-ink">
                My approach is both reflective and practical &mdash; we begin
                with understanding, and gradually move toward meaningful
                change.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 text-[19px] leading-[1.8] text-ink">
                Clients often experience therapy with me as a space that is
                warm, open, and non-judgmental &mdash; while also offering
                direction and clarity.
              </p>
            </FadeIn>

            {/* Marginalia — sage italic on the right margin */}
            <div className="hidden xl:block">
              <p
                className="marginalia marginalia--right"
                style={{ top: "4rem" }}
              >
                Finally, someone who gets it.
              </p>
            </div>
          </div>
        </div>

        {/* Two-column context + training */}
        <div className="mt-28 md:mt-36 pt-12 border-t border-divider max-w-[960px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <FadeIn>
              <div>
                <p className="editorial-eyebrow">Corporate context</p>
                <p className="mt-6 text-[17px] leading-[1.75] text-ink">
                  Before moving fully into therapeutic practice, I spent time
                  in the corporate space. This helps me understand workplace
                  stress, burnout, and the emotional demands of high-functioning
                  environments. I have also facilitated corporate workshops on
                  mental health awareness, psychological first aid, and
                  burnout prevention.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div>
                <p className="editorial-eyebrow">Training</p>
                <ul
                  className="mt-6 space-y-3 font-[var(--font-display)] italic text-[19px] leading-[1.5]"
                  style={{ color: "var(--color-sage-deep)" }}
                >
                  <li>MA Clinical Psychology</li>
                  <li>Cognitive Behaviour Therapy (CBT)</li>
                  <li>Internal Family Systems (IFS) &mdash; trauma</li>
                  <li>Neuro-linguistic Programming (NLP)</li>
                  <li>QPR Crisis Counsellor</li>
                  <li>8+ years professional &middot; 4+ years therapeutic</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* CTA */}
        <FadeIn delay={0.2}>
          <div
            className="mt-24 md:mt-32 py-20 md:py-24 px-6 md:px-10 text-center relative overflow-hidden"
            style={{ background: "var(--color-surface)" }}
          >
            <div
              aria-hidden="true"
              className="watercolor-wash watercolor-wash--sage"
              style={{ bottom: "-40%", right: "-10%" }}
            />
            <p className="editorial-eyebrow">If this feels right</p>
            <h2 className="display-m display-italic mt-5 max-w-[620px] mx-auto">
              Start with a conversation.
            </h2>
            <div className="mt-10 flex justify-center">
              <Link href="/book" className="btn-primary">
                Book a free 15-minute consultation
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <p className="mt-5 text-[13px] text-muted">
              No pressure &mdash; just a conversation to see if this feels
              right.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
