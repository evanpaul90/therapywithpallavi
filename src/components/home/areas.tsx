import { FadeIn } from "@/components/fade-in";

const AREAS = [
  {
    title: "The inner weather",
    body: "Anxiety. Depression. Anger that sits on top of something older. The low self-worth that never quite goes away.",
  },
  {
    title: "The relational work",
    body: "Marriage and partnership. Premarital clarity. Family systems you've outgrown. Trust — giving it, re-finding it, rebuilding it after it broke.",
  },
  {
    title: "What we carry quietly",
    body: "Trauma with a name and trauma without one. Grief that never got formalised — a miscarriage, a parent's slow decline, a friendship that ended without words.",
  },
  {
    title: "The hinges of a life",
    body: "Workplace patterns you keep repeating across jobs. Life transitions: a new role, a new city, a new parent, an empty house, the end of something.",
  },
];

export function Areas() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-24 md:py-36">
        <FadeIn>
          <p className="cap-label">Areas of work</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="display-m mt-6">What we can work on together.</h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="font-[var(--font-display)] italic text-[20px] text-muted mt-4">
            These aren&rsquo;t separate things. They pressurise each other.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mt-16 max-w-[920px]">
          {AREAS.map((area, i) => (
            <FadeIn key={area.title} delay={0.2 + i * 0.05}>
              <div>
                <h3 className="font-[var(--font-display)] italic text-[26px] text-navy leading-tight">
                  {area.title}
                </h3>
                <p className="mt-4 text-[17px] text-ink leading-relaxed">
                  {area.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
      <hr className="hairline" />
    </section>
  );
}
