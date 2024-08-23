import CloudServicesDev from "@/components/cloud_services/CloudServicesDev";
import OurExpertiseCloud from "@/components/cloud_services/OurExpertiseCloud";
import WhatWeDoCloud from "@/components/cloud_services/WhatWeDoCloud";
import WhyUsCloud from "@/components/cloud_services/WhyUsCloud";

export default function page() {
  return (
    <main>
      <CloudServicesDev />
      <WhatWeDoCloud />
      <OurExpertiseCloud />
      <WhyUsCloud />
    </main>
  );
}
