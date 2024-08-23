import Blog from "@/components/home/Blog";
import EntrepreneursIdeas from "@/components/home/EntrepreneursIdeas";
import IndustriesServe from "@/components/home/IndustriesServe";
import OurExpertise from "@/components/home/OurExpertise";

export default function Home() {
  return (
    <main>
      <EntrepreneursIdeas />
      <OurExpertise />
      <IndustriesServe />
      <Blog />
    </main>
  );
}
