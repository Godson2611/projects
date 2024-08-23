import FFRetail from "@/components/retail_tech_industry/FFRetail";
import RetailDve from "@/components/retail_tech_industry/RetailDve";
import RetailIndustry from "@/components/retail_tech_industry/RetailIndustry";
import RetailMix from "@/components/retail_tech_industry/RetailMix";
import WhatYouGetRetail from "@/components/retail_tech_industry/WhatYouGetRetail";

export default function page() {
  return (
    <main>
      <RetailDve />
      <RetailMix />
      <RetailIndustry />
      <FFRetail />
      <WhatYouGetRetail />
    </main>
  );
}
