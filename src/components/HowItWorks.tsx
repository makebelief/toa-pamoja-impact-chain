
import { Shield, Coins, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

console.log("Button import:", Button);

const HowItWorks = () => {
  const steps = [
    {
      icon: Shield,
      title: "Verified Campaigns",
      description: "All projects are vetted by our team and partner organizations to ensure legitimacy and impact potential."
    },
    {
      icon: Coins,
      title: "Multi-Currency Donations",
      description: "Donate using XLM, Bitcoin, M-Pesa, or traditional fiat currencies. All transactions recorded on blockchain."
    },
    {
      icon: Check,
      title: "Impact Verification",
      description: "Receive NFT-style impact receipts and track real outcomes through photo updates and verified milestones."
    }
  ];

  console.log("HowItWorks component rendering");

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How ToaPamoja Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparency, accountability, and real impact through blockchain technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-6">
                <step.icon className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Make an Impact?</h3>
            <p className="text-gray-600 mb-6">
              Join thousands of donors building a better future for African communities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {Button && (
                <>
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                    Browse Campaigns
                  </Button>
                  <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3">
                    Start Your Campaign
                  </Button>
                </>
              )}
              {!Button && (
                <div className="text-red-500">Button component not available</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
