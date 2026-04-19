import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { TreeGrove } from "@/components/illustrations";

export const metadata: Metadata = {
  title: "About Me \u2014 Pallavi Bhaskar, Counsellor and Psychotherapist",
  description:
    "Pallavi Bhaskar \u2014 MA Psychology, PGDM. Trauma-trained, neurodiversity-affirmative, and trained in IFS, CBT, NLP, and the Gottman Method. Online therapy across India and internationally.",
};

const CREDENTIALS = [
  "Trauma Therapy \u2014 Trained in Internal Family Systems (IFS)",
  "CBT Practitioner",
  "NLP Practitioner & Level 1 Life Coach",
  "QPR Trained Crisis Counsellor",
];

export default function AboutPage() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--color-clay-pale)" }}
    >
      <div
        aria-hidden="true"
        className="watercolor-wash"
        style={{ top: "-15%", left: "-10%" }}
      />
      <div
        aria-hidden="true"
        className="watercolor-wash watercolor-wash--peach"
        style={{ bottom: "-20%", right: "-15%" }}
      />

      <div className="relative mx-auto max-w-[var(--content-max)] px-6 md:px-12 py-24 md:py-36">
        {/* Credentials card — photo + name + qualifications (per Aunty's img7) */}
        <FadeIn>
          <p className="editorial-eyebrow">About Me</p>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
          <div className="md:col-span-4">
            <FadeIn>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -top-8 -right-10 opacity-40 pointer-events-none hidden md:block"
                >
                  <TreeGrove size={220} />
                </div>
                <div
                  className="relative w-full max-w-[320px] overflow-hidden"
                  style={{ aspectRatio: "3/4" }}
                >
                  <Image
                    src="/assets/pallavi-portrait.png"
                    alt="Pallavi Bhaskar, Counsellor and Psychotherapist"
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="md:col-span-8">
            <FadeIn delay={0.1}>
              <h1 className="display-xl display-italic">Pallavi Bhaskar</h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-4 text-[18px] md:text-[20px] font-semibold tracking-wide text-navy">
                MA Psychology &middot; PGDM
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <ul className="mt-8 space-y-3 text-[17px] leading-[1.7] max-w-[560px]">
                {CREDENTIALS.map((c) => (
                  <li key={c} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[10px] inline-block w-1.5 h-1.5 shrink-0"
                      style={{ background: "var(--color-sage-deep)" }}
                    />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>

        {/* Long-form — her doc, gospel */}
        <div className="mt-24 md:mt-32 max-w-[680px] mx-auto">
          <FadeIn>
            <h2 className="display-m display-italic">My Background &amp; Training</h2>
            <p className="mt-6 text-[19px] leading-[1.85]">
              I hold a Master&rsquo;s degree in Clinical Psychology and am
              trained in multiple evidence-based approaches, including Internal
              Family Systems (IFS), Cognitive Behavioural Therapy (CBT),
              Neuro-Linguistic Programming (NLP), and the Gottman Method.
            </p>
            <p className="mt-5 text-[19px] leading-[1.85]">
              I am trauma-trained, neurodiversity-affirmative, and follow a
              strength-based approach, which means:
            </p>
            <ul className="mt-5 space-y-2 text-[18px] leading-[1.75] pl-6">
              <li>We move at a pace that feels safe and respectful</li>
              <li>Your experiences are understood in context, not judged</li>
              <li>
                We build on your existing strengths while working through
                challenges
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h2 className="display-m display-italic mt-16">Experience</h2>
            <p className="mt-6 text-[19px] leading-[1.85]">
              I bring over 8 years of professional experience, including 4+
              years in therapeutic practice, and have worked with 200+ clients.
              My work spans individuals across different life stages (20 to 50
              years of age) &mdash; from young adults navigating transitions to
              working professionals managing stress, relationships, and
              personal growth.
            </p>
            <p className="mt-5 text-[19px] leading-[1.85]">
              Before moving fully into therapy, I spent time in the corporate
              space &mdash; an experience that continues to inform my
              understanding of workplace stress, burnout, and the emotional
              demands of high-functioning environments.
            </p>
            <p className="mt-5 text-[19px] leading-[1.85]">
              I have also worked with organisations through workshops and
              consultations focused on mental health, emotional wellbeing, and
              workplace resilience.
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h2 className="display-m display-italic mt-16">How I Work</h2>
            <p className="mt-6 text-[19px] leading-[1.85]">
              I offer a confidential space that is warm, non-judgmental, and
              grounded &mdash; where you can slow down, feel understood, and
              begin to make sense of your experiences.
            </p>
            <p className="mt-5 text-[19px] leading-[1.85]">
              My work is both reflective and practical. We start by
              understanding your patterns and inner world, and gradually build
              ways of responding that support clarity, stability, and
              meaningful change.
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h2 className="display-m display-italic mt-16">What I Help With</h2>
            <p className="mt-6 text-[19px] leading-[1.85]">
              I work with adults navigating:
            </p>
            <ul className="mt-5 space-y-2 text-[18px] leading-[1.75] pl-6">
              <li>Trauma &mdash; childhood, adulthood</li>
              <li>Anxiety, overthinking, and emotional overwhelm</li>
              <li>Low self-esteem and self-doubt</li>
              <li>Relationship challenges and boundary-setting</li>
              <li>Burnout and workplace stress</li>
              <li>Grief, transitions, and difficult life phases</li>
              <li>Patterns shaped by past experiences</li>
            </ul>
            <p className="mt-6 text-[19px] leading-[1.85]">
              While these concerns may appear different, they are often
              connected through deeper emotional patterns.
            </p>
            <p className="mt-5 text-[19px] leading-[1.85]">
              My work is trauma-informed, which means we approach these
              patterns with care, and at a pace that feels manageable. Clients
              often begin to experience greater clarity, emotional steadiness,
              and a deeper understanding of themselves over time.
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h2 className="display-m display-italic mt-16">
              Working Across Contexts
            </h2>
            <p className="mt-6 text-[19px] leading-[1.85]">
              I work with clients across India and internationally, including
              NRIs and expats.
            </p>
            <p className="mt-5 text-[19px] leading-[1.85]">
              Many of the individuals I support are navigating the
              intersection of:
            </p>
            <ul className="mt-5 space-y-2 text-[18px] leading-[1.75] pl-6">
              <li>Personal needs and family expectations</li>
              <li>Cultural identity and independence</li>
              <li>Belonging across different environments</li>
            </ul>
            <p className="mt-6 text-[19px] leading-[1.85]">
              Therapy becomes a space to explore these layers with nuance,
              while staying grounded in your individual experience.
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h2 className="display-m display-italic mt-16">Therapy Approach</h2>
            <p className="mt-6 text-[19px] leading-[1.85]">
              My approach is integrative, trauma-trained, and person-centred.
              This means:
            </p>
            <ul className="mt-5 space-y-2 text-[18px] leading-[1.75] pl-6">
              <li>We move at a pace that feels right for you</li>
              <li>Each session is tailored to your needs</li>
              <li>
                We focus on understanding patterns before trying to change
                them
              </li>
              <li>We combine insight with practical tools over time</li>
              <li>The process is collaborative &mdash; not prescriptive</li>
            </ul>
            <p className="mt-6 text-[19px] leading-[1.85]">
              You won&rsquo;t be rushed, and you won&rsquo;t be pushed beyond
              what you&rsquo;re ready for. At the same time, I will gently
              guide you and support you in staying accountable to your own
              growth.
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div
              className="mt-20 p-8 md:p-10 text-[16px] leading-[1.75]"
              style={{
                background: "var(--color-surface)",
                borderLeft: "2px solid var(--color-sage-deep)",
                color: "var(--color-muted)",
              }}
            >
              <p>
                <span className="font-semibold text-navy">Note:</span> I offer
                counselling and psychotherapy services focused on emotional
                wellbeing and personal growth. I am not a psychiatrist and do
                not prescribe medication. For clinical diagnosis, medication,
                or severe mental health concerns, I may recommend consulting a
                clinical psychologist or psychiatrist, and I&rsquo;m happy to
                guide you toward appropriate support if needed.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* CTA */}
        <FadeIn delay={0.1}>
          <div
            className="mt-24 md:mt-32 py-20 md:py-24 px-6 md:px-10 text-center relative overflow-hidden"
            style={{ background: "var(--color-surface)" }}
          >
            <div
              aria-hidden="true"
              className="watercolor-wash watercolor-wash--sage"
              style={{ bottom: "-40%", right: "-10%" }}
            />
            <p className="editorial-eyebrow">If this feels right</p>
            <h2 className="display-m display-italic mt-5 max-w-[620px] mx-auto">
              Start with a conversation.
            </h2>
            <div className="mt-10 flex justify-center">
              <Link href="/book" className="btn-primary">
                Book a free 15-minute consultation
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <p className="mt-5 text-[13px] text-muted">
              No pressure &mdash; just a conversation to see if this feels
              right.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
