import HowWeDoQuality from "@/components/quality_assurance/HowWeDoQuality";
import QualityAssuranceDev from "@/components/quality_assurance/QualityAssuranceDev";
import WhatWeDoQuality from "@/components/quality_assurance/WhatWeDoQuality";

export default function page() {
  return (
    <main>
      <QualityAssuranceDev />
      <WhatWeDoQuality />
      <HowWeDoQuality />
    </main>
  );
}
