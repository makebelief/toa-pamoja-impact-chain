
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, MapPin, Shield, Camera } from "lucide-react";
import { useState } from "react";
import DonationModal from "./DonationModal";

interface CampaignPageProps {
  campaignId: number;
  onBack: () => void;
}

const CampaignPage = ({ campaignId, onBack }: CampaignPageProps) => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  // Mock campaign data - in real app this would come from API
  const campaign = {
    id: campaignId,
    title: "Clean Water for Kibera",
    organization: "Water4All Kenya",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    raised: 78500,
    goal: 100000,
    donors: 234,
    description: "Installing 3 new water access points to serve 2,000 families in Kibera slum. This project will provide clean, safe drinking water to one of Nairobi's largest informal settlements.",
    location: "Nairobi, Kenya",
    daysLeft: 12,
    longDescription: `
      The Kibera slum, home to over 200,000 people, faces a severe water crisis. Many residents walk miles daily to access clean water, often paying premium prices to water vendors. This project will install three solar-powered water access points strategically located throughout the community.

      Each water point will serve approximately 650 families and will be maintained by a local water committee trained in basic maintenance and financial management. The project includes:
      • Three solar-powered water pumping systems
      • Storage tanks with 10,000-liter capacity each
      • Water quality testing equipment
      • Community training programs
      • 2-year maintenance support
    `,
    updates: [
      {
        id: 1,
        date: "2024-01-15",
        title: "Construction Begins",
        description: "Ground breaking ceremony completed with community leaders present.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 2,
        date: "2024-01-20",
        title: "First Well Drilled",
        description: "Successfully reached the water table at 45 meters depth.",
        image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      }
    ]
  };

  const progressPercentage = (campaign.raised / campaign.goal) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Button variant="outline" onClick={onBack} className="mb-6">
          ← Back to Campaigns
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <img 
                src={campaign.image} 
                alt={campaign.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{campaign.title}</h1>
              <div className="flex items-center space-x-4 text-gray-600 mb-4">
                <div className="flex items-center space-x-1">
                  <Shield className="w-4 h-4" />
                  <span>{campaign.organization}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{campaign.location}</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{campaign.description}</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none">
                  {campaign.longDescription.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-3 text-gray-700">{paragraph}</p>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Camera className="w-5 h-5" />
                  <span>Project Updates</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {campaign.updates.map((update) => (
                    <div key={update.id} className="border-l-4 border-orange-500 pl-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{update.title}</h4>
                        <span className="text-sm text-gray-500">{update.date}</span>
                      </div>
                      <p className="text-gray-700 mb-3">{update.description}</p>
                      <img 
                        src={update.image} 
                        alt={update.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4">
                  <Progress value={progressPercentage} className="h-3 mb-2" />
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-gray-900">
                      ${campaign.raised.toLocaleString()} raised
                    </span>
                    <span className="text-gray-500">
                      of ${campaign.goal.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{campaign.donors} donors</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{campaign.daysLeft} days left</span>
                  </div>
                </div>

                <Button 
                  onClick={() => setIsDonationModalOpen(true)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3"
                >
                  Donate Now
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Blockchain Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Smart Contract:</span>
                    <span className="font-mono text-xs">0x1A2B...3C4D</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Donations:</span>
                    <span>{campaign.donors} verified</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Impact Score:</span>
                    <span className="text-green-600 font-semibold">98%</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View on Blockchain
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <DonationModal 
        campaign={campaign}
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />
    </div>
  );
};

export default CampaignPage;
