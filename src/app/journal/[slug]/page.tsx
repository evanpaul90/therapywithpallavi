import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPost } from "@/lib/posts";
import { FadeIn } from "@/components/fade-in";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

function renderParagraphs(body: string) {
  return body.split(/\n\n+/).map((para, i) => {
    // Render bold markers **text** as <strong>
    const parts = para.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
    return (
      <p key={i}>
        {parts.map((part, j) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={j}>{part.slice(2, -2)}</strong>;
          }
          if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
            return <em key={j}>{part.slice(1, -1)}</em>;
          }
          return <span key={j}>{part}</span>;
        })}
      </p>
    );
  });
}

const SITE_URL = "https://therapywithpallavi.com";

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Pallavi Bhaskar",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: "Pallavi Bhaskar",
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/journal/${post.slug}` },
    image: `${SITE_URL}/assets/og-image.jpg`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="bg-cream">
        <div className="mx-auto max-w-[var(--content-max)] px-6 md:px-10 py-20 md:py-28">
          <FadeIn>
            <Link
              href="/journal"
              className="cap-label hover:text-teal transition-colors"
            >
              <span aria-hidden="true">←</span> Journal
            </Link>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="display-l mt-10 max-w-[760px]">{post.title}</h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="cap-label mt-8">
              {post.dateLabel} · {post.readingMinutes} min read
            </p>
          </FadeIn>
        </div>
        <hr className="hairline" />
      </article>

      <section className="bg-cream">
        <div className="mx-auto px-6 md:px-10 py-16 md:py-24">
          <div
            className="prose-section journal-prose text-[19px] text-ink leading-[1.75]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {renderParagraphs(post.body)}
          </div>

          <FadeIn>
            <div className="prose-section mt-20 pt-10 border-t border-divider">
              <p className="cap-label">If this resonated</p>
              <p className="font-[var(--font-display)] text-[26px] text-navy mt-4 leading-snug">
                A free 15 minutes is the easiest way to find out whether the
                work would help.
              </p>
              <div className="mt-6">
                <Link
                  href="https://wa.me/message/EIF2EASB2GEXI1"
                  target="_blank"
                  rel="noopener"
                  className="btn-primary"
                >
                  Book a consultation <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
