import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/fade-in";

export function About() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-24 md:py-36">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
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
                  className="object-cover object-top"
                  priority
                />
              </div>
            </FadeIn>
          </div>
          <div className="md:col-span-7">
            <FadeIn>
              <p className="cap-label">About</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="display-m mt-6">
                I work at the intersection of inner life and the world you
                perform in.
              </h2>
            </FadeIn>
            <div className="mt-10 space-y-6 text-ink max-w-[600px]">
              <FadeIn delay={0.2}>
                <p>
                  I&rsquo;m a counsellor and psychotherapist based in
                  Bangalore, with eight years of practice and over 200 clients
                  behind me. My training includes a Master&rsquo;s in Clinical
                  Psychology, a PGDM, and certifications in CBT, IFS for
                  trauma, NLP, and QPR crisis counselling.
                </p>
              </FadeIn>
              <FadeIn delay={0.25}>
                <p>
                  The PGDM is the part most people don&rsquo;t expect. It
                  matters less for what it taught me about business, and more
                  for the fluency it gave me with the world my clients live in.
                  Performance reviews. Political org dynamics. The family
                  dinners where achievement becomes currency.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p>
                  My practice is trauma-informed, evidence-based, and
                  inclusive.
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.4}>
              <div className="mt-10">
                <Link href="/how-i-work" className="btn-link">
                  Read more about how I work <span aria-hidden="true">→</span>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
      <hr className="hairline" />
    </section>
  );
}
