import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title:
    "Pathways \u2014 what therapy with Pallavi can help with",
  description:
    "Trauma, anxiety, repeating relationship patterns, burnout, life transitions, grief, self-understanding. How therapy with Pallavi Bhaskar works with each \u2014 in plain English.",
};

type Pathway = {
  slug: string;
  ifLine: string;
  seoTag: string;
  lead: string;
  looksLike: string;
  howWeWorkWith: string;
  photo: string;
  photoAlt: string;
  photoCaption: string;
};

const PATHWAYS: Pathway[] = [
  {
    slug: "overwhelm",
    ifLine: "If you\u2019re feeling overwhelmed",
    seoTag: "Anxiety \u00B7 burnout \u00B7 emotional regulation",
    lead: "Overwhelm doesn\u2019t always arrive with sirens. Sometimes it\u2019s the third Sunday in a row you can\u2019t name what\u2019s wrong. Sometimes it\u2019s a quiet dread before Mondays.",
    looksLike:
      "Difficulty sleeping or switching off. A racing inner narrator. Flattened interest in things that used to matter. An irritability that doesn\u2019t match what\u2019s happening in the room. A body that feels wired and tired at the same time.",
    howWeWorkWith:
      "We start by naming what\u2019s actually loud. Together we look at what\u2019s driving the overwhelm \u2014 and build grounded ways to feel steadier without suppressing the signal. Evidence-based, practical, paced.",
    photo: "/assets/photography/pathway-overwhelm.jpg",
    photoAlt:
      "A glass of water, a closed notebook, and a single fallen leaf on a light-wood table in still morning light",
    photoCaption: "Stillness on a wooden table",
  },
  {
    slug: "repeating-patterns",
    ifLine: "If you notice repeating patterns",
    seoTag: "Relationship patterns \u00B7 attachment \u00B7 communication",
    lead: "The same argument in a different room. The same pull toward the unavailable person. The same collapse at the same point in every job.",
    looksLike:
      "People-pleasing that empties you. Anger that appears from nowhere and leaves shame behind. Closeness followed by distancing. Conflict avoidance that\u2019s costing you the thing it was supposed to protect.",
    howWeWorkWith:
      "Patterns make sense when we understand where they came from. We trace the origin with curiosity, not blame, and begin to shift what you do with what you now see.",
    photo: "/assets/photography/pathway-patterns.jpg",
    photoAlt:
      "An open leather journal with handwritten pages, a wooden fountain pen, and a sprig of dried sage in morning light",
    photoCaption: "The page that listens back",
  },
  {
    slug: "trauma",
    ifLine: "If past experiences still affect you",
    seoTag: "Trauma \u00B7 PTSD \u00B7 unprocessed experience",
    lead: "Trauma isn\u2019t always a single event. Sometimes it\u2019s a slow accumulation \u2014 a childhood that couldn\u2019t meet you, a relationship that took more than it gave, a loss nobody made space for.",
    looksLike:
      "Bodily reactions that don\u2019t match the current moment. Disconnection or numbness. Hyper-vigilance. Intrusive memories. A feeling of fundamental unsafety even in safe rooms.",
    howWeWorkWith:
      "Trauma work is paced to your nervous system, not a protocol. Safety, pacing, and integration \u2014 in that order. We use IFS, somatic awareness, and what\u2019s right for you. We do not rush this.",
    photo: "/assets/photography/pathway-trauma.jpg",
    photoAlt:
      "Soft afternoon sunlight through a sheer linen curtain, the silhouette of a fern barely visible on the other side",
    photoCaption: "Light finding a way through",
  },
  {
    slug: "transitions",
    ifLine: "If you\u2019re navigating a difficult phase",
    seoTag: "Life transitions \u00B7 grief \u00B7 loss \u00B7 change",
    lead: "A marriage ending. A parent\u2019s slow decline. A country left behind. A miscarriage. The end of a career chapter. The moment a child becomes an adult.",
    looksLike:
      "Grief that doesn\u2019t look like grief. Anger at the people you love most. Numbness followed by sudden waves. A sense that life is continuing in the wrong key.",
    howWeWorkWith:
      "We give the thing its correct name. We make room for the kind of grief you weren\u2019t allowed to have out loud. And we find the steady ground underneath \u2014 slowly.",
    photo: "/assets/photography/pathway-transitions.jpg",
    photoAlt:
      "Bare tree branches silhouetted against a soft dusk sky in muted peach and sage tones",
    photoCaption: "The season between seasons",
  },
  {
    slug: "self-understanding",
    ifLine: "If you want to understand yourself",
    seoTag: "Identity \u00B7 meaning \u00B7 self-exploration",
    lead: "Not everyone comes to therapy because something is breaking. Some of the most meaningful work begins when the person asking is quietly curious about their own life.",
    looksLike:
      "A successful life that doesn\u2019t feel like yours. A sense that you\u2019ve been performing an identity someone else wrote. A wish to know why you move through the world the way you do.",
    howWeWorkWith:
      "Insight-led, reflective work. We listen to the parts of you that haven\u2019t had a seat at the table. We integrate rather than edit. Over time, the self you know becomes larger.",
    photo: "/assets/photography/pathway-self-understanding.jpg",
    photoAlt:
      "A sash window with sheer linen curtains framing a small potted fern on the sill, soft afternoon light",
    photoCaption: "A window of one's own",
  },
];

export default function PathwaysPage() {
  return (
    <>
      {/* Opening */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--color-cream-warm)" }}
      >
        <div
          aria-hidden="true"
          className="watercolor-wash"
          style={{ top: "-20%", left: "-10%" }}
        />
        <div className="relative mx-auto max-w-[var(--content-max)] px-6 md:px-12 py-24 md:py-36">
          <FadeIn>
            <p className="editorial-eyebrow">Pathways</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="display-xl display-italic mt-6 max-w-[860px]">
              Depending on what you&rsquo;re carrying, we shape the work
              differently.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="lead mt-8 max-w-[620px]">
              Therapy isn&rsquo;t a single method. It&rsquo;s a relationship
              that adapts to what&rsquo;s underneath. Below are the five most
              common places clients arrive from.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Pathways */}
      <section className="relative bg-cream">
        <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-12 py-16 md:py-24">
          {PATHWAYS.map((pathway, i) => {
            const reversed = i % 2 === 1;
            return (
              <article
                key={pathway.slug}
                id={pathway.slug}
                className="py-20 md:py-28 border-t border-divider first:border-t-0"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
                  {/* Photo column */}
                  <div
                    className={`md:col-span-5 ${
                      reversed ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <FadeIn>
                      <figure className="relative max-w-[480px] mx-auto md:mx-0">
                        <div
                          aria-hidden="true"
                          className="absolute -inset-6 sage-tint pointer-events-none"
                          style={{ filter: "blur(24px)" }}
                        />
                        <div
                          className="relative overflow-hidden"
                          style={{ aspectRatio: "3/4" }}
                        >
                          <Image
                            src={pathway.photo}
                            alt={pathway.photoAlt}
                            fill
                            sizes="(max-width: 768px) 100vw, 480px"
                            className="object-cover"
                            priority={i === 0}
                          />
                        </div>
                        <figcaption className="mt-4 text-[11px] editorial-eyebrow text-center md:text-left">
                          {pathway.photoCaption}
                        </figcaption>
                      </figure>
                    </FadeIn>
                  </div>

                  {/* Copy column */}
                  <div
                    className={`md:col-span-7 ${
                      reversed ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <FadeIn>
                      <p
                        className="editorial-eyebrow"
                        style={{ color: "var(--color-sage-deep)" }}
                      >
                        {pathway.seoTag}
                      </p>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                      <h2 className="display-l display-italic mt-5">
                        {pathway.ifLine}
                      </h2>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                      <p className="mt-6 text-[19px] leading-[1.8] max-w-[620px]">
                        {pathway.lead}
                      </p>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[640px]">
                        <div>
                          <p className="editorial-eyebrow">
                            What this often looks like
                          </p>
                          <p className="mt-3 text-[16px] leading-[1.7]">
                            {pathway.looksLike}
                          </p>
                        </div>
                        <div>
                          <p className="editorial-eyebrow">
                            How we work with it
                          </p>
                          <p className="mt-3 text-[16px] leading-[1.7]">
                            {pathway.howWeWorkWith}
                          </p>
                        </div>
                      </div>
                    </FadeIn>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Closing */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--color-sage-pale)" }}
      >
        <div
          aria-hidden="true"
          className="watercolor-wash watercolor-wash--sage"
          style={{ top: "-20%", right: "-10%" }}
        />
        <div className="relative mx-auto max-w-[var(--content-max)] px-6 md:px-12 py-24 md:py-36 text-center">
          <FadeIn>
            <h2 className="display-l display-italic max-w-[720px] mx-auto">
              If any of this feels familiar, you&rsquo;re in the right place.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-8 text-[18px] text-muted max-w-[540px] mx-auto">
              No pressure &mdash; just a conversation to see if this feels
              right for you.
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
