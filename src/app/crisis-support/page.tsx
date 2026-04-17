import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Crisis support \u2014 helplines and immediate help",
  description:
    "If you are in immediate distress or at risk of harm, this practice is not the right door. Here are crisis helplines in India and internationally.",
  robots: { index: true, follow: true },
};

const INDIA_HELPLINES = [
  {
    name: "iCall (TISS)",
    detail: "Mon\u2013Sat, 8am\u201310pm \u00B7 multiple languages",
    number: "9152987821",
    href: "tel:+919152987821",
  },
  {
    name: "Vandrevala Foundation",
    detail: "24/7 \u00B7 free",
    number: "1860 2662 345",
    href: "tel:+911860 2662 345",
  },
  {
    name: "AASRA",
    detail: "24/7 \u00B7 suicide prevention",
    number: "98204 66726",
    href: "tel:+919820466726",
  },
  {
    name: "NIMHANS Helpline",
    detail: "24/7 \u00B7 Bangalore-based, national reach",
    number: "080 4611 0007",
    href: "tel:+918046110007",
  },
  {
    name: "Sneha India",
    detail: "24/7 \u00B7 Chennai-based, national reach",
    number: "044 2464 0050",
    href: "tel:+914424640050",
  },
];

export default function CrisisSupportPage() {
  return (
    <>
      {/* Opening — direct and calm */}
      <section
        className="relative"
        style={{ background: "var(--color-sage-pale)" }}
      >
        <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-24 md:py-36">
          <FadeIn>
            <p className="cap-label">If this is urgent</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="display-xl mt-6 max-w-[820px]">
              If you are in immediate distress, this is not the right door.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="lead mt-8 max-w-[640px]">
              This practice is not a crisis service. If you or someone you
              love is at risk of harm, please reach the helplines below or
              emergency services. Real people will answer.
            </p>
          </FadeIn>
        </div>
        <hr className="hairline" />
      </section>

      {/* India helplines */}
      <section className="relative bg-cream">
        <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-[800px]">
            <FadeIn>
              <p className="cap-label">India helplines</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="display-m mt-5">Free, confidential, staffed by trained counsellors.</h2>
            </FadeIn>

            <ul className="mt-12 divide-y divide-divider">
              {INDIA_HELPLINES.map((line, i) => (
                <FadeIn key={line.number} delay={0.15 + i * 0.05}>
                  <li className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                    <div className="md:col-span-5">
                      <p className="font-[var(--font-display)] text-[22px] text-navy leading-tight">
                        {line.name}
                      </p>
                      <p className="mt-1 text-[14px] text-muted">
                        {line.detail}
                      </p>
                    </div>
                    <div className="md:col-span-7">
                      <a
                        href={line.href}
                        className="font-[var(--font-display)] italic text-[24px] md:text-[26px]"
                        style={{ color: "var(--color-sage-deep)" }}
                      >
                        {line.number}
                      </a>
                    </div>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>
        </div>
        <hr className="hairline" />
      </section>

      {/* International note */}
      <section
        className="relative"
        style={{ background: "var(--color-peach-pale)" }}
      >
        <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-[720px]">
            <FadeIn>
              <p className="cap-label">Outside India</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="display-m mt-5">
                If you&rsquo;re not in India right now.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-[18px] leading-[1.75]">
                Every country has local helplines. Two good starting points:
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <ul className="mt-6 space-y-4 text-[17px] leading-[1.7]">
                <li>
                  <a
                    href="https://findahelpline.com"
                    target="_blank"
                    rel="noopener"
                    className="btn-link"
                  >
                    findahelpline.com
                  </a>{" "}
                  &mdash; a directory of verified helplines in 130+ countries.
                </li>
                <li>
                  <a
                    href="https://www.iasp.info/suicidalthoughts/"
                    target="_blank"
                    rel="noopener"
                    className="btn-link"
                  >
                    iasp.info/suicidalthoughts
                  </a>{" "}
                  &mdash; International Association for Suicide Prevention.
                </li>
                <li>
                  In most countries, dialling your emergency number
                  (<strong>112</strong> in India &middot; <strong>911</strong>
                  {" "}in the US &middot; <strong>999</strong> in the UK)
                  reaches trained responders.
                </li>
              </ul>
            </FadeIn>
          </div>
        </div>
        <hr className="hairline" />
      </section>

      {/* Not in crisis? */}
      <section
        className="relative"
        style={{ background: "var(--color-cream-warm)" }}
      >
        <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-[720px]">
            <FadeIn>
              <p className="cap-label">Not a crisis, but still heavy?</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="display-l mt-6">
                You don&rsquo;t need to be in crisis to reach out.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-[18px] leading-[1.75] max-w-[600px]">
                Therapy is for the quieter kinds of difficulty too &mdash; the
                kind that doesn&rsquo;t show up in an emergency room but is
                still real. If that&rsquo;s where you are, start with a free
                15-minute conversation.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-10">
                <Link href="/book" className="btn-primary">
                  Start with a free 15-minute consultation
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
