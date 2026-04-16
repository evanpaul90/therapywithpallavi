import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "About — Pallavi Bhaskar, Counsellor & Psychotherapist",
  description:
    "Pallavi Bhaskar is a Bangalore-based psychotherapist with eight years of practice. MA Clinical Psychology + PGDM. Trauma-informed, IFS-trained, evidence-based, inclusive.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-20 md:py-32">
          <FadeIn>
            <p className="cap-label">About</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="display-l mt-6 max-w-[860px]">
              I work at the intersection of inner life and the world you
              perform in.
            </h1>
          </FadeIn>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5">
              <FadeIn>
                <div
                  className="relative w-full overflow-hidden bg-divider"
                  style={{ aspectRatio: "4/5" }}
                >
                  <Image
                    src="/assets/pallavi-portrait.png"
                    alt="Pallavi Bhaskar"
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-cover"
                    priority
                  />
                </div>
              </FadeIn>
            </div>
            <div className="md:col-span-7 prose-section md:max-w-[600px] md:m-0 space-y-6 text-ink">
              <FadeIn>
                <p>
                  I&rsquo;m a counsellor and psychotherapist based in
                  Bangalore. I&rsquo;ve been in practice for over eight years,
                  and have worked with more than 200 clients across phases of
                  their lives.
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p>
                  My clinical training includes a Master&rsquo;s in Clinical
                  Psychology, a PGDM, and certifications in Cognitive Behaviour
                  Therapy, Internal Family Systems (IFS) for trauma,
                  NeuroLinguistic Programming, and QPR crisis counselling.
                </p>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p>
                  The PGDM is the part most people don&rsquo;t expect from a
                  therapist. It matters less for what it taught me about
                  business and more for the fluency it gave me with the world
                  my clients live in. Performance reviews. Political org
                  dynamics. The family dinners where achievement becomes
                  currency. The way ambition can be both oxygen and an
                  inherited wound.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p>
                  I trained in clinical psychology to work at the exact
                  intersection where inner life and outer life pressurise each
                  other.
                </p>
              </FadeIn>
              <FadeIn delay={0.25}>
                <p>
                  My practice is trauma-informed, evidence-based, and
                  inclusive. That last word matters to me: I work with clients
                  across gender identities, sexual orientations, and family
                  structures &mdash; the ones who&rsquo;ve felt they had to
                  translate themselves in other therapy rooms.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="pt-6">
                  <Link href="/how-i-work" className="btn-link">
                    How I work, in practice <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
        <hr className="hairline" />
      </section>
    </>
  );
}
