import FFHealthTech from "@/components/health_care/FFHealthTech";
import HealthCareDev from "@/components/health_care/HealthCareDev";
import PastProjects from "@/components/health_care/PastProjects";
import WhyTechHealthCare from "@/components/health_care/WhyTechHealthCare";

export default function page() {
  return (
    <main>
      <HealthCareDev />
      <WhyTechHealthCare />
      <FFHealthTech />
      <PastProjects />
    </main>
  );
}
