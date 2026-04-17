import { HeroGentle } from "@/components/home/hero-gentle";
import { FitMirror } from "@/components/home/fit-mirror";
import { PathwaysRead } from "@/components/home/pathways-read";
import { TherapyIsIsnt } from "@/components/home/therapy-is-isnt";
import { FinalInvitation } from "@/components/home/final-invitation";

export default function HomePage() {
  return (
    <>
      <HeroGentle />
      <FitMirror />
      <PathwaysRead />
      <TherapyIsIsnt />
      <FinalInvitation />
    </>
  );
}
