import FFSolutionSupplyChain from "@/components/supply_chain/FFSolutionSupplyChain";
import FFSupplyChain from "@/components/supply_chain/FFSupplyChain";
import SupplyChainDev from "@/components/supply_chain/SupplyChainDev";
import WhoNeedsFF from "@/components/supply_chain/WhoNeedsFF";

export default function page() {
  return (
    <main>
      <SupplyChainDev />
      <WhoNeedsFF />
      <FFSupplyChain />
      <FFSolutionSupplyChain />
    </main>
  );
}
