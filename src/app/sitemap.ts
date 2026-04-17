import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const SITE = "https://therapywithpallavi.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const posts = getAllPosts().map((p) => ({
    url: `${SITE}/journal/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));
  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/how-it-works`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/pathways`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE}/journal`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE}/book`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${SITE}/crisis-support`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    ...posts,
  ];
}
