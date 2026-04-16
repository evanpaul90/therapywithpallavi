import Link from "next/link";
import { TreeEmblem } from "@/components/tree-emblem";
import { StaggeredWords } from "@/components/staggered-words";
import { HeroArcs } from "@/components/hero-arcs";
import { FadeIn } from "@/components/fade-in";

export function Hero() {
  return (
    <section className="relative bg-cream overflow-hidden">
      <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 pt-20 pb-28 md:pt-32 md:pb-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-8">
            <StaggeredWords
              as="h1"
              className="display-xl"
              text={"Therapy for the ambitious life you\u2019re quietly exhausted by."}
              startDelay={0.15}
              perWordDelay={0.09}
            />
            <FadeIn delay={1.2}>
              <p className="lead mt-8 max-w-[640px]">
                Evidence-based psychotherapy for high-performing professionals
                in unquiet seasons. IFS &middot; CBT &middot; Trauma-informed.
                Bangalore-based, online globally.
              </p>
            </FadeIn>
            <FadeIn delay={1.4}>
              <div className="mt-10">
                <Link
                  href="https://wa.me/message/EIF2EASB2GEXI1"
                  target="_blank"
                  rel="noopener"
                  className="btn-primary"
                >
                  Book a free 15-minute consultation
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </FadeIn>
          </div>
          <div className="md:col-span-4 flex justify-center md:justify-end">
            <FadeIn delay={0.4}>
              <div className="relative w-[320px] h-[320px] md:w-[360px] md:h-[360px]">
                <HeroArcs />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="emblem-alive">
                    <div className="emblem-reveal">
                      <TreeEmblem
                        size={260}
                        priority
                        className=""
                        alt="Tree-of-life emblem — Pallavi Bhaskar"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
      <hr className="hairline" />
    </section>
  );
}
