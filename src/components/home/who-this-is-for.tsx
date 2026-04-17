import { FadeIn } from "@/components/fade-in";
import {
  WoodenChair,
  WindowWithLight,
  Teacup,
} from "@/components/illustrations";

/**
 * WhoThisIsFor — three vignettes of the visitor.
 *
 * Each vignette is a character + small line-drawn illustration.
 * The reader recognizes themselves in one and exhales.
 */
const VIGNETTES = [
  {
    illustration: "chair",
    title: "The senior professional who looks fine",
    body: "You\u2019re delivering, holding the team together, meeting every deadline. And somewhere underneath, you\u2019re exhausted in a way that sleep isn\u2019t touching.",
  },
  {
    illustration: "window",
    title: "The one between time zones",
    body: "Living abroad, back for a wedding, parenting from a distance. The people who used to understand you without explanation are no longer in the room.",
  },
  {
    illustration: "teacup",
    title: "The one quietly carrying something",
    body: "A grief you didn\u2019t get to name. A pattern in relationships you keep circling. A part of yourself you can\u2019t quite bring into daylight yet.",
  },
];

export function WhoThisIsFor() {
  return (
    <section className="relative bg-cream">
      <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-24 md:py-36">
        <div className="max-w-[720px]">
          <FadeIn>
            <p className="cap-label">Who this is for</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="display-l mt-6">
              Clients often arrive with different stories &mdash; and the same
              quiet tiredness underneath.
            </h2>
          </FadeIn>
        </div>

        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-10">
          {VIGNETTES.map((v, i) => (
            <FadeIn key={v.title} delay={0.2 + i * 0.1}>
              <article className="max-w-[320px] mx-auto md:mx-0">
                <div className="mb-6 h-[160px] flex items-end">
                  {v.illustration === "chair" && <WoodenChair size={140} />}
                  {v.illustration === "window" && (
                    <WindowWithLight size={140} />
                  )}
                  {v.illustration === "teacup" && <Teacup size={140} />}
                </div>
                <h3 className="font-[var(--font-display)] italic text-[24px] md:text-[26px] text-navy leading-snug">
                  {v.title}
                </h3>
                <p className="mt-4 text-[17px] leading-[1.7]">{v.body}</p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6}>
          <p className="mt-16 md:mt-20 text-[17px] italic text-muted max-w-[560px]">
            If you recognize yourself in one of these &mdash; or in the space
            between them &mdash; you&rsquo;re welcome here.
          </p>
        </FadeIn>
      </div>
      <hr className="hairline" />
    </section>
  );
}
