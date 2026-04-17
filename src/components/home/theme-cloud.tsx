/**
 * ThemeCloud — single-word themes drifting horizontally.
 *
 * A brief pause between the hero and the fit-mirror. Softly introduces the
 * emotional landscape before any self-identification. Not a headline.
 * Atmosphere.
 */
const THEMES = [
  "overwhelm",
  "repeating patterns",
  "grief",
  "self-doubt",
  "burnout",
  "trauma",
  "relationship",
  "transitions",
  "people-pleasing",
  "identity",
  "clarity",
  "boundaries",
];

export function ThemeCloud() {
  const loop = [...THEMES, ...THEMES];
  return (
    <section className="relative bg-cream py-14 md:py-20 overflow-hidden border-y border-divider">
      <p className="cap-label text-center mb-8">
        What therapy can hold
      </p>
      <div className="marquee-fade-mask">
        <div className="marquee-track">
          {loop.map((theme, i) => (
            <span
              key={`${theme}-${i}`}
              className="font-[var(--font-display)] italic text-[28px] md:text-[36px] leading-none text-navy shrink-0"
              style={{ letterSpacing: "0.01em" }}
            >
              {theme}
              <span
                aria-hidden="true"
                className="mx-12 inline-block align-middle"
                style={{ color: "var(--color-sage-deep)" }}
              >
                &middot;
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
