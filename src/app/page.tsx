import { Hero } from "@/components/home/hero";
import { StatsStripe } from "@/components/home/stats-stripe";
import { Who } from "@/components/home/who";
import { PullQuote } from "@/components/home/pull-quote";
import { About } from "@/components/home/about";
import { Areas } from "@/components/home/areas";
import { Practice } from "@/components/home/practice";
import { JournalPreview } from "@/components/home/journal-preview";
import { FinalCta } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStripe />
      <Who />
      <PullQuote />
      <About />
      <Areas />
      <Practice />
      <JournalPreview />
      <FinalCta />
    </>
  );
}
