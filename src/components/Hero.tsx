
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Real African community photo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.7), rgba(67, 56, 202, 0.7)), url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            Toa<span className="text-blue-300">Pamoja</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-4 font-medium">
            Give Together • Build Tomorrow
          </p>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Connect directly with verified African community projects. Track real impact, 
            see authentic updates, and know exactly how your donations create lasting change.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link to="/campaigns">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
              Browse Active Campaigns
            </Button>
          </Link>
          <Link to="/create">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold">
              Submit Your Project
            </Button>
          </Link>
        </div>
        
        <div className="flex justify-center">
          <ArrowDown className="text-white/70 w-8 h-8 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
