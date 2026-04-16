export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateLabel: string;
  readingMinutes: number;
  body: string;
};

export const POSTS: Post[] = [
  {
    slug: "the-sunday-evening-feeling",
    title: "The Sunday evening feeling — what it is, and what it isn't",
    excerpt:
      "Most people call it 'the Sunday scaries' and move on. I'd like you to take it seriously for a minute.",
    date: "2026-04-17",
    dateLabel: "April 2026",
    readingMinutes: 3,
    body: `Most of my clients describe a version of the same thing.

It's 5 p.m. on Sunday. The weekend wasn't bad. You had the brunch, the walk, maybe the movie. And yet something turns on around now — a low-grade dread that isn't quite anxiety, isn't quite sadness, but sits in the chest and makes the next twelve hours feel like a tunnel.

Most people call it "the Sunday scaries" and move on.

I'd like you to take it seriously for a minute.

**What it usually isn't.** It isn't that you hate your job. If you did, the feeling would be cleaner — hatred is clarifying. This isn't that.

**What it often is.** It's the return of a self you've been performing away from all weekend. The quiet one. The one who notices things the professional version of you doesn't have time for. She's been waiting. Sunday evening is when she gets thirty minutes.

The feeling isn't dread *of* Monday. It's grief *for* the self that's about to go back into its costume.

Most high-performing professionals I work with don't let themselves see this at first. They treat it as a scheduling problem, a sleep problem, a caffeine problem. They try to solve it with cold plunges and earlier bedtimes.

What actually helps is asking the question underneath. *Who is the version of you that surfaces on Sunday evenings, and what does she need you to know?*

In therapy, we make room for her. Not to hand her the steering wheel — the professional self is load-bearing, she has bills to pay and a team to manage — but to stop treating her appearance as a malfunction.

When the two selves stop being at war on Sundays, the rest of the week changes shape.`,
  },
  {
    slug: "what-ifs-actually-feels-like",
    title: "What IFS actually feels like, in the room",
    excerpt:
      "Most people encounter IFS through memes and reels. Here's what it's actually like when it's being done well.",
    date: "2026-04-10",
    dateLabel: "April 2026",
    readingMinutes: 4,
    body: `Coming soon — a practitioner's view of Internal Family Systems work, beyond the social-media caricatures.`,
  },
  {
    slug: "the-grief-you-didnt-get-to-name",
    title: "The grief you didn't get to name",
    excerpt:
      "India has strong grief rituals for deaths. It has almost no rituals for the other losses.",
    date: "2026-04-03",
    dateLabel: "April 2026",
    readingMinutes: 5,
    body: `Coming soon — on disenfranchised grief, the losses that have no ceremony, and what naming them looks like in practice.`,
  },
];

export function getAllPosts(): Post[] {
  return POSTS.slice().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
