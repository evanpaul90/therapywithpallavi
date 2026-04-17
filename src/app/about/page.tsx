import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "About \u2014 Pallavi Bhaskar, Trauma-informed Psychotherapist",
  description:
    "Pallavi Bhaskar is a trauma-informed Counsellor and Psychotherapist with 8+ years of professional experience, including 4+ years in therapeutic practice. Online sessions, India and globally.",
};

export default function AboutPage() {
  return (
    <section
      className="relative"
      style={{ background: "var(--color-clay-pale)" }}
    >
      <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-24 md:py-36">
        <FadeIn>
          <p className="cap-label">About</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="display-l mt-6 max-w-[820px]">
            The patterns you struggle with are not random. They make sense when
            understood with compassion and context.
          </h1>
        </FadeIn>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4 md:order-2">
            <FadeIn>
              <div className="relative md:sticky md:top-28">
                <div
                  className="relative w-[240px] md:w-[260px] overflow-hidden rounded-sm"
                  style={{ aspectRatio: "4/5" }}
                >
                  <Image
                    src="/assets/pallavi-portrait.png"
                    alt="Pallavi Bhaskar, Counsellor and Psychotherapist"
                    fill
                    sizes="260px"
                    className="object-cover"
                    priority
                  />
                </div>
                <p className="mt-4 text-[14px] text-muted max-w-[240px] leading-[1.55]">
                  Pallavi Bhaskar &middot; Counsellor &amp; Psychotherapist
                  <br />
                  Bangalore &middot; online globally
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="md:col-span-8 md:order-1 space-y-6 text-ink">
            <FadeIn>
              <p className="text-[20px] leading-[1.75]">
                I&rsquo;m Pallavi Bhaskar, a trauma-informed Counsellor and
                Psychotherapist working with clients across India and globally.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-[19px] leading-[1.8]">
                I believe the patterns you struggle with are not random &mdash;
                they make sense when understood with compassion and context.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-[19px] leading-[1.8]">
                My approach is both reflective and practical &mdash; we begin
                with understanding, and gradually move toward meaningful change.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-[19px] leading-[1.8]">
                Clients often experience therapy with me as a space that is
                warm, open, and non-judgmental &mdash; while also offering
                direction and clarity.
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="pt-10 border-t border-divider">
                <p className="cap-label">Corporate context</p>
                <p className="mt-5 text-[18px] leading-[1.75]">
                  Before moving fully into therapeutic practice, I spent time in
                  the corporate space. This helps me understand workplace
                  stress, burnout, and the emotional demands of high-functioning
                  environments. I have also facilitated corporate workshops on
                  mental health awareness, psychological first aid, and burnout
                  prevention.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="pt-10 border-t border-divider">
                <p className="cap-label">Training</p>
                <p className="mt-5 text-[17px] leading-[1.7] text-muted">
                  MA Clinical Psychology &middot; CBT &middot; Internal Family
                  Systems (IFS) for trauma &middot; NLP &middot; QPR crisis
                  counselling &middot; 8+ years of professional experience,
                  including 4+ years in therapeutic practice.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div className="pt-12">
                <Link href="/book" className="btn-primary">
                  Start with a free 15-minute consultation
                  <span aria-hidden="true">&rarr;</span>
                </Link>
                <p className="mt-4 text-[14px] text-muted">
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
