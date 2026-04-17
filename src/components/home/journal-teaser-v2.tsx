import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { getAllPosts } from "@/lib/posts";
import { OpenBook } from "@/components/illustrations";

/**
 * JournalTeaserV2 — 3 latest posts as letter-style cards.
 *
 * Not clickbait previews. Letter openings. The reader should feel they're
 * peeking at a page of a quiet journal.
 */
export function JournalTeaserV2() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="relative bg-cream">
      <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-28 md:py-40">
        <div className="flex items-end justify-between gap-8 flex-wrap max-w-[1040px]">
          <div className="max-w-[680px]">
            <FadeIn>
              <p className="cap-label">From the journal</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="display-l mt-6">
                Letters from the practice.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-[18px] leading-[1.7] text-muted max-w-[520px]">
                Short pieces on the quieter shapes of emotional life.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.25}>
            <div className="opacity-60">
              <OpenBook size={140} />
            </div>
          </FadeIn>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {posts.map((post, i) => (
            <FadeIn key={post.slug} delay={0.3 + i * 0.1}>
              <article className="h-full">
                <Link
                  href={`/journal/${post.slug}`}
                  className="group block p-8 border border-divider rounded-sm h-full transition-colors"
                  style={{ background: "var(--color-surface)" }}
                >
                  <p
                    className="cap-label"
                    style={{ color: "var(--color-sage-deep)" }}
                  >
                    {post.dateLabel || post.date}
                    {post.readingMinutes ? (
                      <>
                        {" \u00B7 "}
                        {post.readingMinutes} min
                      </>
                    ) : null}
                  </p>
                  <h3 className="mt-4 font-[var(--font-display)] text-[22px] md:text-[24px] text-navy leading-tight group-hover:italic transition-all">
                    {post.title}
                  </h3>
                  <p className="mt-4 text-[16px] leading-[1.7] text-ink">
                    {post.excerpt}
                  </p>
                  <p
                    className="mt-6 text-[14px]"
                    style={{ color: "var(--color-sage-deep)" }}
                  >
                    Read &rarr;
                  </p>
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6}>
          <div className="mt-14">
            <Link href="/journal" className="btn-link">
              All letters <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </FadeIn>
      </div>
      <hr className="hairline" />
    </section>
  );
}
