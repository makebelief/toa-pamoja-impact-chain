
import CampaignCard from "@/components/CampaignCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { useState } from "react";

const CampaignsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const campaigns = [
    {
      id: 1,
      title: "Clean Water Access in Rural Uganda",
      organization: "Water Hope Foundation",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      raised: 78500,
      goal: 100000,
      donors: 234,
      description: "Building sustainable water wells to serve 5 rural communities, providing clean water access to over 3,000 people.",
      location: "Kampala Region, Uganda",
      daysLeft: 12,
      category: "water"
    },
    {
      id: 2,
      title: "Girls' Secondary Education Program",
      organization: "Educate Africa Initiative",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      raised: 45600,
      goal: 75000,
      donors: 189,
      description: "Providing scholarships, school supplies, and mentorship for 200 girls to complete their secondary education.",
      location: "Nairobi, Kenya",
      daysLeft: 28,
      category: "education"
    },
    {
      id: 3,
      title: "Community Health Clinic Equipment",
      organization: "Healthcare for All Ghana",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      raised: 92300,
      goal: 120000,
      donors: 156,
      description: "Equipping rural health clinics with essential medical equipment to serve 10,000 community members.",
      location: "Ashanti Region, Ghana",
      daysLeft: 8,
      category: "health"
    },
    {
      id: 4,
      title: "Sustainable Farming Training Initiative",
      organization: "Green Agriculture Network",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      raised: 34200,
      goal: 60000,
      donors: 98,
      description: "Training 300 smallholder farmers in climate-smart agriculture and providing them with improved seeds and tools.",
      location: "Kigali Province, Rwanda",
      daysLeft: 35,
      category: "agriculture"
    }
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "water", label: "Clean Water" },
    { value: "education", label: "Education" },
    { value: "health", label: "Healthcare" },
    { value: "agriculture", label: "Agriculture" }
  ];

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         campaign.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         campaign.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || campaign.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Active Campaigns
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse verified projects making real impact across African communities. Every campaign is vetted and tracked for transparency.
          </p>
        </div>
        
        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search campaigns, organizations, or locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map(category => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
        
        {/* Campaign Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredCampaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
        
        {filteredCampaigns.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No campaigns found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CampaignsPage;
