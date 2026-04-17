import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateLabel: string;
  readingMinutes: number;
  body: string;
};

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

function readPostFile(filename: string): Post {
  const slug = filename.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: String(data.title ?? ""),
    excerpt: String(data.excerpt ?? ""),
    date: String(data.date ?? ""),
    dateLabel: String(data.dateLabel ?? ""),
    readingMinutes: Number(data.readingMinutes ?? 3),
    body: content.trim(),
  };
}

export function getAllPosts(): Post[] {
  let files: string[];
  try {
    files = fs
      .readdirSync(POSTS_DIR)
      .filter((f) => f.endsWith(".md") && !f.startsWith("_") && !f.startsWith("."));
  } catch {
    return [];
  }
  const posts = files.map(readPostFile);
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}
