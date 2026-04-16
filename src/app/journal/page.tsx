import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Journal — Writing on therapy, modalities, and the inner life",
  description:
    "Essays from Pallavi Bhaskar's practice — on IFS, CBT, the Sunday evening feeling, disenfranchised grief, and the work that high-performing professionals don't get to name.",
};

export default function JournalPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-20 md:py-32">
          <FadeIn>
            <p className="cap-label">Journal</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="display-l mt-6 max-w-[760px]">
              Writing from the practice.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="lead mt-8 max-w-[600px]">
              Long-form essays on what I see across hundreds of sessions, and
              what the modalities I work with actually feel like in the room.
            </p>
          </FadeIn>
        </div>
        <hr className="hairline" />
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-20 md:py-32">
          <ul className="max-w-[860px] divide-y divide-divider border-t border-divider">
            {posts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.05}>
                <li className="py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                  <div className="md:col-span-3">
                    <p className="cap-label">{post.dateLabel}</p>
                    <p className="text-[13px] text-muted mt-2">
                      {post.readingMinutes} min read
                    </p>
                  </div>
                  <div className="md:col-span-9">
                    <h2 className="font-[var(--font-display)] text-[28px] leading-tight text-navy">
                      <Link
                        href={`/journal/${post.slug}`}
                        className="hover:text-teal transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-4 text-muted leading-relaxed">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/journal/${post.slug}`}
                      className="btn-link mt-5 inline-block"
                    >
                      Read <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
