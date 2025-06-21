
import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Globe, Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ImpactStats />
      
      {/* Why Choose ToaPamoja Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose ToaPamoja?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building trust between donors and communities through transparency and real impact tracking.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">100% Verified</h3>
              <p className="text-gray-600">Every project is personally verified by our team in partnership with local organizations.</p>
            </div>
            
            <div className="text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Real Stories</h3>
              <p className="text-gray-600">Authentic updates from real people showing exactly how your donations create change.</p>
            </div>
            
            <div className="text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Direct Impact</h3>
              <p className="text-gray-600">Your money goes directly to communities, with full transparency on how every dollar is used.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/campaigns">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
                See Active Campaigns
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
