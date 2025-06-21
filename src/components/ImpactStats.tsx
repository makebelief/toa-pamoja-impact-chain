
import { Users, DollarSign, Check, Globe, Shield, Target } from "lucide-react";

const ImpactStats = () => {
  const stats = [
    {
      icon: DollarSign,
      value: "$2.4M",
      label: "Total Raised",
      description: "Directly to communities",
      color: "from-green-600 to-green-700"
    },
    {
      icon: Users,
      value: "15,000+",
      label: "Global Donors",
      description: "From 67 countries",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Check,
      value: "340+",
      label: "Projects Completed",
      description: "With verified outcomes",
      color: "from-orange-600 to-orange-700"
    },
    {
      icon: Globe,
      value: "25",
      label: "African Countries",
      description: "Currently supported",
      color: "from-purple-600 to-purple-700"
    },
    {
      icon: Shield,
      value: "100%",
      label: "Transparency",
      description: "Blockchain verified",
      color: "from-cyan-600 to-cyan-700"
    },
    {
      icon: Target,
      value: "94%",
      label: "Success Rate",
      description: "Projects completed",
      color: "from-rose-600 to-rose-700"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Impact by the Numbers
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Every donation is tracked, every outcome is verified, every story is authentic. 
            Here's the measurable impact we've achieved together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold text-slate-300 mb-2">
                  {stat.label}
                </div>
                <div className="text-slate-400 text-sm">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-blue-600/20 to-cyan-400/20 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Be Part of Something Bigger
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl">
              Every number represents real lives changed, communities empowered, and futures transformed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
