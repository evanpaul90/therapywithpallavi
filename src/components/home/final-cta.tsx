import Link from "next/link";
import { FadeIn } from "@/components/fade-in";

export function FinalCta() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-28 md:py-40 text-center">
        <FadeIn>
          <h2 className="display-l max-w-[640px] mx-auto">
            A free 15 minutes. That&rsquo;s the first step.
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="lead mt-8 max-w-[560px] mx-auto">
            By the end of the conversation, you&rsquo;ll know whether this
            feels like a fit. So will I.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-12">
            <Link
              href="https://wa.me/message/EIF2EASB2GEXI1"
              target="_blank"
              rel="noopener"
              className="btn-primary"
            >
              Book a consultation on WhatsApp
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </FadeIn>
        <FadeIn delay={0.4}>
          <p className="text-[14px] text-muted mt-6">
            or{" "}
            <Link href="/contact" className="underline underline-offset-4">
              fill a short intake form
            </Link>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
