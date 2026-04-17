import { HeroGentle } from "@/components/home/hero-gentle";
import { ThemeCloud } from "@/components/home/theme-cloud";
import { FitMirror } from "@/components/home/fit-mirror";
import { WhoThisIsFor } from "@/components/home/who-this-is-for";
import { PathwaysRead } from "@/components/home/pathways-read";
import { HowWeWork } from "@/components/home/how-we-work";
import { ModalitiesSoftly } from "@/components/home/modalities";
import { TherapyIsIsnt } from "@/components/home/therapy-is-isnt";
import { AboutTeaser } from "@/components/home/about-teaser";
import { JournalTeaserV2 } from "@/components/home/journal-teaser-v2";
import { FinalInvitation } from "@/components/home/final-invitation";

export default function HomePage() {
  return (
    <>
      <HeroGentle />
      <ThemeCloud />
      <FitMirror />
      <WhoThisIsFor />
      <PathwaysRead />
      <HowWeWork />
      <ModalitiesSoftly />
      <TherapyIsIsnt />
      <AboutTeaser />
      <JournalTeaserV2 />
      <FinalInvitation />
    </>
  );
}
