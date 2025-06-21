
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-16">
          {/* Left Column - Text Content */}
          <div className="text-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
                Transparent • Verified • Impactful
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Building
              <span className="block text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text">
                Tomorrow
              </span>
              Together
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-6 leading-relaxed max-w-2xl">
              Connect directly with verified African community projects. Every donation tracked, 
              every impact verified, every story authentic.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/campaigns">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                  Explore Active Projects
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-2 border-slate-300 text-slate-300 hover:bg-slate-300 hover:text-slate-900 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300">
                <Play className="mr-2 w-5 h-5" />
                Watch Stories
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700/50">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">$2.4M+</div>
                <div className="text-sm text-slate-400">Directly Funded</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">340+</div>
                <div className="text-sm text-slate-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">67</div>
                <div className="text-sm text-slate-400">Countries</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Visual Element */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 rounded-2xl blur-3xl transform rotate-6"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Clean Water Project</div>
                      <div className="text-slate-300 text-sm">Kibera, Kenya</div>
                    </div>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" style={{width: '78%'}}></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300">$78,500 raised</span>
                    <span className="text-white">$100,000 goal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
