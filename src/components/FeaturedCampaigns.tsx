
import CampaignCard from "@/components/CampaignCard";

const FeaturedCampaigns = () => {
  const campaigns = [
    {
      id: 1,
      title: "Clean Water for Kibera",
      organization: "Water4All Kenya",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      raised: 78500,
      goal: 100000,
      donors: 234,
      description: "Installing 3 new water access points to serve 2,000 families in Kibera slum",
      location: "Nairobi, Kenya",
      daysLeft: 12
    },
    {
      id: 2,
      title: "Girls Education Initiative",
      organization: "Educate Her Foundation",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      raised: 45600,
      goal: 75000,
      donors: 189,
      description: "Scholarships and school supplies for 150 girls in rural Uganda",
      location: "Kampala, Uganda",
      daysLeft: 28
    },
    {
      id: 3,
      title: "Sustainable Farming Project",
      organization: "AgriTech Africa",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      raised: 92300,
      goal: 120000,
      donors: 156,
      description: "Training 500 farmers in climate-smart agriculture techniques",
      location: "Machakos, Kenya",
      daysLeft: 8
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Campaigns
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Support verified projects making real impact across African communities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCampaigns;
