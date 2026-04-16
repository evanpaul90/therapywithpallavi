import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { getAllPosts } from "@/lib/posts";

export function JournalPreview() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-24 md:py-36">
        <FadeIn>
          <p className="cap-label">Journal</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="display-m mt-6">Recent writing.</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mt-16">
          {posts.map((post, i) => (
            <FadeIn key={post.slug} delay={0.15 + i * 0.08}>
              <article className="border-t border-divider pt-6">
                <p className="cap-label mb-4">{post.dateLabel}</p>
                <h3 className="font-[var(--font-display)] text-[24px] leading-tight text-navy">
                  <Link
                    href={`/journal/${post.slug}`}
                    className="hover:text-teal transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-4 text-[16px] text-muted leading-relaxed">
                  {post.excerpt}
                </p>
                <Link
                  href={`/journal/${post.slug}`}
                  className="btn-link mt-5 inline-block"
                >
                  Read <span aria-hidden="true">→</span>
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.5}>
          <div className="mt-16 text-center">
            <Link href="/journal" className="btn-link">
              Read all writing <span aria-hidden="true">→</span>
            </Link>
          </div>
        </FadeIn>
      </div>
      <hr className="hairline" />
    </section>
  );
}
