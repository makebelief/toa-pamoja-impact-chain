
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Users, Calendar } from "lucide-react";

interface Campaign {
  id: number;
  title: string;
  organization: string;
  image: string;
  raised: number;
  goal: number;
  donors: number;
  description: string;
  location: string;
  daysLeft: number;
}

interface CampaignCardProps {
  campaign: Campaign;
}

const CampaignCard = ({ campaign }: CampaignCardProps) => {
  const progressPercentage = (campaign.raised / campaign.goal) * 100;
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img 
          src={campaign.image} 
          alt={campaign.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-800">
          {Math.round(progressPercentage)}% funded
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{campaign.title}</h3>
          <p className="text-sm text-orange-600 font-medium">{campaign.organization}</p>
          <p className="text-sm text-gray-500">{campaign.location}</p>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{campaign.description}</p>
        
        <div className="mb-4">
          <Progress value={progressPercentage} className="h-2 mb-2" />
          <div className="flex justify-between text-sm">
            <span className="font-semibold text-gray-900">
              {formatCurrency(campaign.raised)} raised
            </span>
            <span className="text-gray-500">
              of {formatCurrency(campaign.goal)}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{campaign.donors} donors</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{campaign.daysLeft} days left</span>
          </div>
        </div>
        
        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold">
          Donate Now
        </Button>
      </div>
    </div>
  );
};

export default CampaignCard;
