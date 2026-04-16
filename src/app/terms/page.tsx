import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Terms & Privacy",
  description:
    "Terms of engagement, fees, cancellation policy, and confidentiality for therapy with Pallavi Bhaskar.",
};

export default function TermsPage() {
  return (
    <article className="bg-cream">
      <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-20 md:py-28">
        <FadeIn>
          <p className="cap-label">Terms &amp; Privacy</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="display-l mt-6">The agreement we work under.</h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-[14px] text-muted mt-6">
            Last updated 17 April 2026. Adapted from my standing therapy
            consent document. The full signed copy is shared before your first
            session.
          </p>
        </FadeIn>
      </div>
      <hr className="hairline" />

      <div className="mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="prose-section text-[18px] text-ink leading-[1.75] space-y-10">
          <Section title="Sessions">
            <p>
              Sessions are 60 minutes, conducted online via a secure video
              link. Frequency is decided collaboratively based on what your
              situation calls for &mdash; most clients begin weekly, then
              settle into the right rhythm together.
            </p>
            <p>
              I may convert an individual slot to a couples session with at
              least 24 hours&rsquo; notice and an adjusted fee, provided both
              partners are genuinely choosing to attend.
            </p>
          </Section>

          <Section title="Fees & payments">
            <p>
              My professional fee is set in our first conversation, based on
              the work you&rsquo;re bringing and what is sustainable for you.
              Any revision in fees is communicated before the next session.
            </p>
            <p>
              Payment is required at least 24 hours before each session, via
              UPI or online bank transfer. If payment isn&rsquo;t received by
              the deadline, the reserved slot is released.
            </p>
          </Section>

          <Section title="Cancellation">
            <ul className="list-none pl-0 space-y-2">
              <li>
                <strong>24+ hours&rsquo; notice:</strong> reschedule at no
                charge. Paid fees adjust toward future sessions; refunds are
                not issued.
              </li>
              <li>
                <strong>12&ndash;24 hours&rsquo; notice:</strong> 50% of the
                session fee applies.
              </li>
              <li>
                <strong>Less than 12 hours, or no-show:</strong> the full fee
                applies.
              </li>
            </ul>
            <p>
              These are not punitive. They are what makes the container hold
              for both of us.
            </p>
          </Section>

          <Section title="Confidentiality">
            <p>
              What you share in session is confidential. The standard ethical
              exceptions apply: a credible risk of imminent harm to yourself
              or another person, the safety of a minor, or a court order. I
              walk through these in the first session.
            </p>
          </Section>

          <Section title="Limits of care">
            <p>
              I am a counsellor and psychotherapist, not a psychiatrist or
              crisis service. I am not equipped to provide medication. If
              your situation requires psychiatric care or immediate crisis
              support, I will refer you to a colleague or service that can
              meet that need.
            </p>
          </Section>

          <Section title="Privacy">
            <p>
              Information you submit through the intake form is used only to
              prepare for our first conversation. I do not sell, trade, or
              share your information with third parties. Email correspondence
              is retained for the duration of our work together and a
              reasonable period after, then deleted.
            </p>
            <p>
              This site uses minimal analytics, no cross-site trackers, and
              no advertising cookies.
            </p>
          </Section>
        </div>
      </div>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <FadeIn>
      <section>
        <h2 className="font-[var(--font-display)] text-[28px] text-navy leading-tight mb-6">
          {title}
        </h2>
        <div className="space-y-4">{children}</div>
      </section>
    </FadeIn>
  );
}
