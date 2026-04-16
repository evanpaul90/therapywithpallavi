import { FadeIn } from "@/components/fade-in";

export function Who() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-24 md:py-36">
        <FadeIn>
          <p className="cap-label">Who I work with</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="display-m display-italic mt-6 max-w-[820px]">
            The clients who find me tend to arrive at a similar crossroads.
          </h2>
        </FadeIn>
        <div className="prose-section mt-12 space-y-6 text-ink">
          <FadeIn delay={0.2}>
            <p>
              You&rsquo;re competent at work. Senior, often. Trusted with
              problems, paid well. Underneath that, something quieter has been
              unravelling.
            </p>
          </FadeIn>
          <FadeIn delay={0.25}>
            <p>
              Sunday evenings feel longer than they used to. You&rsquo;re
              sharper with your partner than you mean to be. Your parents&rsquo;
              expectations still land in your body even though you&rsquo;ve
              learned to laugh at them. There&rsquo;s a grief you never named.
              A version of yourself you&rsquo;re mourning in private.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p>
              You&rsquo;ve tried journaling. Meditation apps. Maybe one
              therapist you ghosted after three sessions.
            </p>
          </FadeIn>
          <FadeIn delay={0.35}>
            <p>
              You don&rsquo;t need inspiration. You need someone who can hold
              the complexity of the life you&rsquo;ve actually built &mdash;
              and help you see what the surface has been covering.
            </p>
          </FadeIn>
        </div>
      </div>
      <hr className="hairline" />
    </section>
  );
}
