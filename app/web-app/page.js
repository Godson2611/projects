import HowWeDoWeb from "@/components/webApp/HowWeDoWeb";
import WebAppDev from "@/components/webApp/WebAppDev";
import WhatWeDoWeb from "@/components/webApp/WhatWeDoWeb";

export default function page() {
  return (
    <main>
      <WebAppDev />
      <WhatWeDoWeb />
      <HowWeDoWeb />
    </main>
  );
}
