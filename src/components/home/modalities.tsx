import { FadeIn } from "@/components/fade-in";

/**
 * ModalitiesSoftly — the four things Pallavi is trained in, in plain English.
 *
 * The jargon (IFS, CBT, NLP, trauma-informed) is kept as the sub-label,
 * but the HEADING is the felt-experience translation.
 */
const MODALITIES = [
  {
    tag: "Trauma-informed",
    title: "Meeting what you carry with safety and pacing.",
    body: "Nothing is forced. We move at your nervous system\u2019s speed, not a protocol\u2019s. Integration happens when you feel safe enough for it to.",
  },
  {
    tag: "Internal Family Systems (IFS)",
    title: "Understanding the parts of you that don\u2019t feel aligned.",
    body: "The anxious part, the striver, the protector, the tired one. They\u2019re not the whole of you \u2014 and they\u2019re not against you. We get to know each of them.",
  },
  {
    tag: "Cognitive Behaviour Therapy (CBT)",
    title: "Noticing the thought patterns that keep you stuck.",
    body: "Not about \u201cthinking positive.\u201d About seeing the loops you didn\u2019t know you were in \u2014 and having real tools to step out of them.",
  },
  {
    tag: "Neuro-linguistic Programming (NLP)",
    title: "Shifting language and meaning for change.",
    body: "The stories we tell ourselves shape what\u2019s possible. We look at the language underneath your patterns and gently rework it.",
  },
];

export function ModalitiesSoftly() {
  return (
    <section className="relative bg-cream">
      <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-28 md:py-40">
        <div className="max-w-[720px]">
          <FadeIn>
            <p className="cap-label">How I work, in plain English</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="display-l mt-6">
              You don&rsquo;t need the jargon to begin.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-[19px] leading-[1.75] text-muted max-w-[620px]">
              My training pulls from several evidence-based approaches. Here
              they are, without the acronyms.
            </p>
          </FadeIn>
        </div>

        <div className="mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 max-w-[1040px]">
          {MODALITIES.map((m, i) => (
            <FadeIn key={m.tag} delay={0.25 + i * 0.08}>
              <article
                className="p-8 md:p-10 border border-divider rounded-sm h-full"
                style={{ background: "var(--color-surface)" }}
              >
                <p
                  className="cap-label"
                  style={{ color: "var(--color-sage-deep)" }}
                >
                  {m.tag}
                </p>
                <h3 className="mt-4 font-[var(--font-display)] italic text-[24px] md:text-[26px] text-navy leading-snug">
                  {m.title}
                </h3>
                <p className="mt-5 text-[17px] leading-[1.7]">{m.body}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
      <hr className="hairline" />
    </section>
  );
}
