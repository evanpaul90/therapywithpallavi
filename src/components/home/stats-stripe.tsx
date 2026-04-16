import { FadeIn } from "@/components/fade-in";

const STATS = [
  { value: "Eight years.", body: "of full-time clinical practice." },
  { value: "Two hundred clients.", body: "across phases of working life." },
  { value: "One steady practice.", body: "trauma-informed, evidence-based." },
];

export function StatsStripe() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {STATS.map((stat, i) => (
            <FadeIn key={stat.value} delay={i * 0.1}>
              <div className="md:border-l md:border-divider md:pl-8 first:md:border-l-0 first:md:pl-0">
                <p className="font-[var(--font-display)] text-[36px] md:text-[44px] leading-[1.1] text-navy">
                  {stat.value}
                </p>
                <p className="mt-3 text-[15px] text-muted leading-relaxed">
                  {stat.body}
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
