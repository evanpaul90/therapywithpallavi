import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const SITE = "https://therapywithpallavi.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const posts = getAllPosts().map((p) => ({
    url: `${SITE}/journal/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));
  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/how-i-work`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/journal`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    ...posts,
  ];
}
