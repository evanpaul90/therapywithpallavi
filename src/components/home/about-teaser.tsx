import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/fade-in";
import { TreeGrove } from "@/components/illustrations";

/**
 * AboutTeaser — a short introduction with a small portrait + illustration.
 *
 * Not a full about page. A glimpse that says "I'm a real person.
 * Here's a sentence or two. The full story is one click away."
 */
export function AboutTeaser() {
  return (
    <section
      className="relative"
      style={{ background: "var(--color-clay-pale)" }}
    >
      <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-28 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Portrait + small illustration */}
          <div className="md:col-span-5">
            <FadeIn>
              <div className="relative max-w-[320px] mx-auto md:mx-0">
                <div
                  className="relative overflow-hidden rounded-sm"
                  style={{ aspectRatio: "4/5" }}
                >
                  <Image
                    src="/assets/pallavi-portrait.png"
                    alt="Pallavi Bhaskar, Counsellor and Psychotherapist"
                    fill
                    sizes="320px"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-10 -right-6 opacity-70 pointer-events-none hidden md:block">
                  <TreeGrove size={160} />
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Copy */}
          <div className="md:col-span-7">
            <FadeIn delay={0.1}>
              <p className="cap-label">About Pallavi</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="display-l mt-6">
                The patterns you struggle with are not random.
              </h2>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="mt-8 text-[19px] leading-[1.8] text-ink max-w-[560px]">
                I&rsquo;m a trauma-informed Counsellor and Psychotherapist
                working with clients across India and globally. Eight years
                of professional experience, including four in therapeutic
                practice.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="mt-6 text-[19px] leading-[1.8] text-ink max-w-[560px]">
                My approach is both reflective and practical. We begin with
                understanding, and gradually move toward meaningful change.
              </p>
            </FadeIn>
            <FadeIn delay={0.5}>
              <div className="mt-10">
                <Link href="/about" className="btn-link">
                  Read the full story <span aria-hidden="true">&rarr;</span>
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
