import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "FAQ \u2014 Starting therapy with Pallavi",
  description:
    "Questions people ask before starting therapy with Pallavi Bhaskar \u2014 about sessions, commitment, confidentiality, and how to begin.",
};

const FAQS = [
  {
    q: "What if I\u2019m not sure what to talk about?",
    a: "You don\u2019t need to have clarity. We can start wherever you are.",
  },
  {
    q: "How do I know if therapy will help?",
    a: "Therapy builds understanding and change over time. Many clients begin to feel clearer and more supported within the first few sessions.",
  },
  {
    q: "What are sessions like?",
    a: "Warm, reflective, and gently guided \u2014 with both insight and practical tools.",
  },
  {
    q: "Do I need to commit long-term?",
    a: "No. You can take it one session at a time.",
  },
  {
    q: "Is therapy confidential?",
    a: "Yes, with a few legal exceptions which will be explained clearly.",
  },
  {
    q: "Do you offer crisis support?",
    a: "If you are in immediate distress, please contact emergency services or a crisis helpline.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section
        className="relative"
        style={{ background: "var(--color-sage-pale)" }}
      >
        <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-24 md:py-36">
          <FadeIn>
            <p className="cap-label">Before you begin</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="display-l mt-6 max-w-[680px]">
              Questions people ask before starting.
            </h1>
          </FadeIn>

          <div className="mt-16 md:mt-24 max-w-[720px]">
            {FAQS.map((faq, i) => (
              <FadeIn key={faq.q} delay={0.15 + i * 0.06}>
                <div className="py-10 md:py-12 border-t border-divider">
                  <h2 className="font-[var(--font-display)] italic text-[26px] md:text-[30px] text-navy leading-snug">
                    {faq.q}
                  </h2>
                  <p className="mt-5 text-[18px] leading-[1.75]">{faq.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-16 md:mt-20 max-w-[640px]">
            <p className="text-[18px] leading-[1.75] text-ink">
              Still wondering if this is right for you?
            </p>
            <div className="mt-6">
              <Link href="/book" className="btn-primary">
                Start with a free 15-minute consultation
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <p className="mt-4 text-[14px] text-muted">
                No pressure &mdash; just a conversation.
              </p>
            </div>
          </div>
        </div>
        <hr className="hairline" />
      </section>
    </>
  );
}
