import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Book a free 15-minute consultation \u2014 Therapy with Pallavi",
  description:
    "Start with a free 15-minute consultation. A short conversation to understand what you\u2019re looking for and see if working together feels right.",
};

const INTAKE_FORM_URL = "https://forms.gle/bj5sWBzWsdEcrVjg9";
const WHATSAPP_URL = "https://wa.me/message/EIF2EASB2GEXI1";

export default function BookPage() {
  return (
    <section
      className="relative"
      style={{ background: "var(--color-cream-warm)" }}
    >
      <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-24 md:py-36">
        <FadeIn>
          <p className="cap-label">First step</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="display-l mt-6 max-w-[780px]">
            Start with a free 15-minute consultation.
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="lead mt-8 max-w-[620px]">
            A space to understand what you&rsquo;re looking for and see if this
            feels right for you. No pressure &mdash; just a conversation.
          </p>
        </FadeIn>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-[900px]">
          <FadeIn delay={0.3}>
            <div
              className="p-8 md:p-10 border border-divider rounded-sm h-full flex flex-col"
              style={{ background: "var(--color-surface)" }}
            >
              <p className="cap-label">Recommended</p>
              <h2 className="display-m mt-4">Fill a short intake form</h2>
              <p className="mt-5 text-[17px] leading-[1.7] text-ink flex-1">
                A few questions about what you&rsquo;re bringing to therapy and
                what time zones work for you. Takes about 3 minutes. Pallavi
                reads every response personally.
              </p>
              <div className="mt-8">
                <Link
                  href={INTAKE_FORM_URL}
                  target="_blank"
                  rel="noopener"
                  className="btn-primary"
                >
                  Open the intake form
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="p-8 md:p-10 border border-divider rounded-sm h-full flex flex-col">
              <p className="cap-label">Or directly</p>
              <h2 className="display-m mt-4">Message on WhatsApp</h2>
              <p className="mt-5 text-[17px] leading-[1.7] text-ink flex-1">
                If a form feels like too much, send a short note on WhatsApp
                instead. Pallavi will reply when she&rsquo;s out of session.
              </p>
              <div className="mt-8">
                <Link
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener"
                  className="btn-secondary"
                >
                  Message on WhatsApp
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Session details */}
        <FadeIn delay={0.5}>
          <div className="mt-24 pt-16 border-t border-divider max-w-[900px]">
            <p className="cap-label">Session details</p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-10">
              <div>
                <p
                  className="font-[var(--font-display)] italic text-[28px] leading-tight"
                  style={{ color: "var(--color-sage-deep)" }}
                >
                  60 minutes
                </p>
                <p className="mt-2 text-[15px] text-muted">
                  per session, online
                </p>
              </div>
              <div>
                <p
                  className="font-[var(--font-display)] italic text-[28px] leading-tight"
                  style={{ color: "var(--color-sage-deep)" }}
                >
                  Weekly or fortnightly
                </p>
                <p className="mt-2 text-[15px] text-muted">
                  pacing decided together
                </p>
              </div>
              <div>
                <p
                  className="font-[var(--font-display)] italic text-[28px] leading-tight"
                  style={{ color: "var(--color-sage-deep)" }}
                >
                  Fees on request
                </p>
                <p className="mt-2 text-[15px] text-muted">
                  shared after the intake conversation
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Process */}
        <FadeIn delay={0.55}>
          <div className="mt-20 max-w-[900px]">
            <p className="cap-label">How we begin</p>
            <ol className="mt-8 space-y-5 text-[18px]">
              <li className="flex items-start gap-5">
                <span
                  className="font-[var(--font-display)] italic text-[22px] shrink-0"
                  style={{ color: "var(--color-sage-deep)" }}
                >
                  01
                </span>
                <span>
                  <strong className="font-medium text-navy">
                    Free 15-minute consultation
                  </strong>{" "}
                  &mdash; to understand what you&rsquo;re looking for and see if
                  this is the right fit.
                </span>
              </li>
              <li className="flex items-start gap-5">
                <span
                  className="font-[var(--font-display)] italic text-[22px] shrink-0"
                  style={{ color: "var(--color-sage-deep)" }}
                >
                  02
                </span>
                <span>
                  <strong className="font-medium text-navy">
                    First session
                  </strong>{" "}
                  &mdash; understanding your context and what brought you here.
                </span>
              </li>
              <li className="flex items-start gap-5">
                <span
                  className="font-[var(--font-display)] italic text-[22px] shrink-0"
                  style={{ color: "var(--color-sage-deep)" }}
                >
                  03
                </span>
                <span>
                  <strong className="font-medium text-navy">
                    Ongoing sessions
                  </strong>{" "}
                  &mdash; insight and change, paced according to you.
                </span>
              </li>
            </ol>
          </div>
        </FadeIn>

        {/* Crisis note — small, honest, legal-safe */}
        <FadeIn delay={0.6}>
          <div className="mt-20 pt-10 border-t border-divider max-w-[720px]">
            <p className="cap-label">If you are in immediate distress</p>
            <p className="mt-4 text-[15px] leading-[1.7] text-muted">
              This practice is not a crisis service. If you are in immediate
              distress or at risk of harm, please contact emergency services or
              a 24/7 helpline: <strong>iCall</strong>{" "}
              9152 987 821 (Mon&ndash;Sat, 8am&ndash;10pm) &middot;{" "}
              <strong>Vandrevala Foundation</strong>{" "}
              1860 2662 345 (24/7) &middot; <strong>AASRA</strong>{" "}
              98204 66726 (24/7).
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
