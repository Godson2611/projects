import AiMlServicesDev from "@/components/ai_ml_services/AiMlServicesDev";
import HowWeDoAiMl from "@/components/ai_ml_services/HowWeDoAiMl";
import WhatWeDoAiMl from "@/components/ai_ml_services/WhatWeDoAiMl";

export default function page() {
  return (
    <main>
      <AiMlServicesDev />
      <WhatWeDoAiMl />
      <HowWeDoAiMl />
    </main>
  );
}
