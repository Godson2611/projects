import AboutDev from "@/components/about/AboutDev";
import ChampionsAbout from "@/components/about/ChampionsAbout";
import FFPartnership from "@/components/about/FFPartnership";
import HowWeHelpAbout from "@/components/about/HowWeHelpAbout";
import TechStack from "@/components/about/TechStack";
import WhoWeServe from "@/components/about/WhoWeServe";

export default function page() {
  return (
    <main>
      <AboutDev />
      <FFPartnership />
      <HowWeHelpAbout />
      <WhoWeServe />
      <TechStack />
      <ChampionsAbout />
    </main>
  );
}
