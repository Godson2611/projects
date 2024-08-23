import FFSuccessfullProjects from "@/components/fintech/FFSuccessfullProjects";
import FintechDev from "@/components/fintech/FintechDev";
import FIrstFloorSolution from "@/components/fintech/FIrstFloorSolution";
import HowWeDoFintech from "@/components/fintech/HowWeDoFintech";
import TechnologyFinTech from "@/components/fintech/TechnologyFinTech";

export default function page() {
  return (
    <main>
      <FintechDev />
      <TechnologyFinTech />
      <FIrstFloorSolution />
      <HowWeDoFintech />
      <FFSuccessfullProjects />
    </main>
  );
}
