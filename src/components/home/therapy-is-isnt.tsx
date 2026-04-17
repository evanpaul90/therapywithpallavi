import { FadeIn } from "@/components/fade-in";

/**
 * TherapyIsIsnt — the quiet that comes before the invitation.
 *
 * Two parallel columns. Equal leading. Sets expectations honestly.
 * Pale-peach backdrop — the one peach accent on the whole site.
 */
const IS = [
  "A space to understand yourself more deeply",
  "A process of exploring patterns and emotions",
  "Collaborative and paced according to you",
  "Both reflective and practical over time",
];

const ISNT = [
  "A quick fix or instant solution",
  "Advice-giving or telling you what to do",
  "About \u201cfixing\u201d you \u2014 you\u2019re not broken",
  "Always comfortable \u2014 growth can feel challenging",
];

export function TherapyIsIsnt() {
  return (
    <section
      className="relative"
      style={{ background: "var(--color-peach-pale)" }}
    >
      <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-28 md:py-40">
        <div className="max-w-[720px]">
          <FadeIn>
            <p className="cap-label">Setting expectations</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="display-l mt-6">
              What therapy is, and what it isn&rsquo;t.
            </h2>
          </FadeIn>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <FadeIn>
            <div>
              <p
                className="font-[var(--font-display)] italic text-[26px] leading-tight"
                style={{ color: "var(--color-sage-deep)" }}
              >
                Therapy is&hellip;
              </p>
              <ul className="mt-8 space-y-5">
                {IS.map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[12px] h-[1px] w-6 shrink-0"
                      style={{ background: "var(--color-sage-deep)" }}
                    />
                    <p className="text-[18px] leading-[1.65]">{line}</p>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div>
              <p
                className="font-[var(--font-display)] italic text-[26px] leading-tight text-muted"
              >
                Therapy is not&hellip;
              </p>
              <ul className="mt-8 space-y-5">
                {ISNT.map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[12px] h-[1px] w-6 shrink-0 bg-divider"
                    />
                    <p className="text-[18px] leading-[1.65] text-ink">
                      {line}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
      <hr className="hairline" />
    </section>
  );
}
