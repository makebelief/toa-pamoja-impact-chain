
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            Toa<span className="text-orange-400">Pamoja</span>
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 mb-4 font-medium">
            Give Together • Build Tomorrow
          </p>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Empowering African communities through transparent, blockchain-powered donations. 
            Support real projects, track real impact, receive verified proof of your contribution.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold">
            Start a Campaign
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold">
            Browse Projects
          </Button>
        </div>
        
        <div className="flex justify-center">
          <ArrowDown className="text-white/70 w-8 h-8 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
