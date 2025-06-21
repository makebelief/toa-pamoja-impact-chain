
import Hero from "@/components/Hero";
import FeaturedCampaigns from "@/components/FeaturedCampaigns";
import ImpactStats from "@/components/ImpactStats";
import HowItWorks from "@/components/HowItWorks";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ImpactStats />
      <FeaturedCampaigns />
      <HowItWorks />
    </div>
  );
};

export default Index;
