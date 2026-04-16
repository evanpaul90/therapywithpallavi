import { FadeIn } from "@/components/fade-in";

const ROWS = [
  {
    label: "Format",
    body: "Online, secure video. 60 minutes per session.",
  },
  {
    label: "Cadence",
    body: "Most clients start weekly. We settle into the right rhythm together once the work is moving.",
  },
  {
    label: "Fees",
    body: "Set in our first conversation, based on the work you're bringing and what's sustainable for you. Paid 24 hours in advance via UPI or bank transfer.",
  },
  {
    label: "Cancellation",
    body: "24+ hours: no charge. 12–24 hours: 50%. Under 12 hours or no-show: full fee applies.",
  },
];

export function Practice() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-24 md:py-36">
        <FadeIn>
          <p className="cap-label">The practice</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="display-m mt-6">How sessions work.</h2>
        </FadeIn>
        <div className="mt-16 max-w-[820px]">
          {ROWS.map((row, i) => (
            <FadeIn key={row.label} delay={0.15 + i * 0.05}>
              <div
                className={`grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 md:py-7 ${
                  i !== 0 ? "border-t border-divider" : ""
                }`}
              >
                <p className="cap-label md:col-span-3 mt-1">{row.label}</p>
                <p className="md:col-span-9 text-[17px] text-ink leading-relaxed">
                  {row.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.5}>
          <p className="font-[var(--font-display)] italic text-[18px] text-muted mt-8 max-w-[680px]">
            These aren&rsquo;t punitive. They&rsquo;re what makes the container
            hold.
          </p>
        </FadeIn>
      </div>
      <hr className="hairline" />
    </section>
  );
}
