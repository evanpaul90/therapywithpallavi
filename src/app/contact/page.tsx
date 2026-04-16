import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import { IntakeForm } from "@/components/intake-form";

export const metadata: Metadata = {
  title: "Contact — Book a free 15-minute consultation",
  description:
    "Reach Pallavi Bhaskar via WhatsApp, email, or a short intake form. The first 15-minute conversation is free.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-20 md:py-32">
          <FadeIn>
            <p className="cap-label">Contact</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="display-l mt-6 max-w-[760px]">
              The easiest first step is a free 15-minute conversation.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="lead mt-8 max-w-[640px]">
              By the end of it, you&rsquo;ll know whether this feels like a
              fit. So will I. Reach me whichever way feels easiest.
            </p>
          </FadeIn>
        </div>
        <hr className="hairline" />
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
            <div className="md:col-span-5">
              <FadeIn>
                <p className="cap-label">Direct</p>
                <p className="font-[var(--font-display)] text-[28px] text-navy mt-4 leading-snug">
                  Most clients message first.
                </p>
                <ul className="mt-10 space-y-6">
                  <li>
                    <p className="cap-label">WhatsApp</p>
                    <a
                      href="https://wa.me/message/EIF2EASB2GEXI1"
                      target="_blank"
                      rel="noopener"
                      className="block mt-2 font-[var(--font-display)] text-[24px] text-teal hover:text-navy transition-colors"
                    >
                      +91 91086 94332
                    </a>
                  </li>
                  <li>
                    <p className="cap-label">Email</p>
                    <a
                      href="mailto:therapy.icp@gmail.com"
                      className="block mt-2 font-[var(--font-display)] text-[24px] text-teal hover:text-navy transition-colors break-all"
                    >
                      therapy.icp@gmail.com
                    </a>
                  </li>
                </ul>
                <p className="text-[14px] text-muted mt-12 max-w-[400px] leading-relaxed">
                  I respond within 24 hours, Monday through Friday. Messages
                  over the weekend get a Monday reply.
                </p>
              </FadeIn>
            </div>

            <div className="md:col-span-7">
              <FadeIn delay={0.15}>
                <p className="cap-label">Or send a short note</p>
                <p className="font-[var(--font-display)] text-[28px] text-navy mt-4 leading-snug">
                  Tell me a little about what brings you here.
                </p>
                <p className="text-[15px] text-muted mt-3 max-w-[480px]">
                  No pressure to write at length. A sentence is enough.
                </p>
                <div className="mt-10">
                  <IntakeForm />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
