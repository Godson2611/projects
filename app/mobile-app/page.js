import HowWeDoMobile from "@/components/mobileApp/HowWeDoMobile";
import MobileAppDev from "@/components/mobileApp/MobileAppDev";
import WhatWeDoMobile from "@/components/mobileApp/WhatWeDoMobile";

export default function page() {
  return (
    <main>
      <MobileAppDev />
      <WhatWeDoMobile />
      <HowWeDoMobile />
    </main>
  );
}
