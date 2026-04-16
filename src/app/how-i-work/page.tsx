import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "How I Work — Modalities & Approach · Pallavi Bhaskar",
  description:
    "Internal Family Systems (IFS), CBT, NLP, QPR. Pallavi Bhaskar's clinical approach in plain English.",
};

const MODALITIES = [
  {
    title: "Internal Family Systems (IFS)",
    body: "The modality I lean on most for trauma work. Instead of treating difficult parts of you as problems to fix, IFS meets them as protectors — and asks what they've been holding for you. It's slower than technique-first therapy. It's also, for many people, what finally works after other approaches haven't.",
  },
  {
    title: "Cognitive Behaviour Therapy (CBT)",
    body: "Useful when you need to intervene on the loop — thought spirals, avoidance patterns, the catastrophising at 2 a.m. CBT gives you something to actually do between sessions.",
  },
  {
    title: "NLP & coaching frames",
    body: "Where the work is about building new responses — in conflict, in performance, in how you talk to yourself about what you've done. Lighter than IFS, more pattern-oriented than CBT.",
  },
  {
    title: "Crisis support",
    body: "QPR-trained for moments that need immediate steadying. I am not a crisis hotline — but I know how to hold the conversation when it matters, and I know when to refer further.",
  },
];

const FAQS = [
  {
    q: "How do I know if therapy is right for me?",
    a: "The honest answer — you often don't, until you start. The 15-minute consult is meant to lower the stakes. You can test what it feels like to say any of this out loud before committing.",
  },
  {
    q: "How many sessions will I need?",
    a: "Some clients find what they needed in six to eight sessions. Others stay for months because the work keeps opening. I won't inflate sessions you don't need, and I won't rush the work you do.",
  },
  {
    q: "Is this confidential?",
    a: "Yes. What you bring into the session stays in the session, with the standard ethical exceptions I'll walk you through at the start — imminent safety to self or others, and court orders.",
  },
  {
    q: "Do you work with couples?",
    a: "My primary work is individual therapy. A couples session is possible with 24 hours' notice and an adjusted fee, provided both partners are genuinely choosing to be there.",
  },
  {
    q: "How is this different from life coaching?",
    a: "Coaching tends to stay on the surface of goals and actions. Therapy goes to the layer below — the beliefs, patterns, and wounds that are driving the surface. Both have their place. Most of my clients need the deeper work.",
  },
  {
    q: "What if your fee isn't sustainable for me?",
    a: "Tell me in the first conversation. I keep a small number of reduced-fee slots. If we're not the right fit financially, I'll help you find someone who is — this work shouldn't wait.",
  },
];

export default function HowIWorkPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-20 md:py-32">
          <FadeIn>
            <p className="cap-label">How I work</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="display-l mt-6 max-w-[820px]">
              Trained in several modalities. I pull from them as your
              situation calls.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="lead mt-8 max-w-[680px]">
              I don&rsquo;t pick one on day one. I listen for which one your
              situation is asking for, and I&rsquo;ll tell you what I&rsquo;m
              doing and why.
            </p>
          </FadeIn>
        </div>
        <hr className="hairline" />
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-[960px]">
            {MODALITIES.map((m, i) => (
              <FadeIn key={m.title} delay={i * 0.05}>
                <div>
                  <h2 className="font-[var(--font-display)] text-[28px] text-navy leading-tight">
                    {m.title}
                  </h2>
                  <p className="mt-5 text-ink leading-relaxed">{m.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <hr className="hairline" />
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-20 md:py-32">
          <FadeIn>
            <p className="cap-label">Questions people ask before booking</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="display-m mt-6">
              The honest answers to what most people want to know.
            </h2>
          </FadeIn>
          <div className="mt-16 max-w-[760px] divide-y divide-divider border-t border-divider">
            {FAQS.map((faq, i) => (
              <FadeIn key={faq.q} delay={i * 0.04}>
                <div className="py-8">
                  <h3 className="font-[var(--font-display)] text-[22px] text-navy leading-snug">
                    {faq.q}
                  </h3>
                  <p className="mt-4 text-ink leading-relaxed">{faq.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.4}>
            <div className="mt-16">
              <Link
                href="https://wa.me/message/EIF2EASB2GEXI1"
                target="_blank"
                rel="noopener"
                className="btn-primary"
              >
                Book a free 15-minute consultation
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
