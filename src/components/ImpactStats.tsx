
import { Users, DollarSign, Check } from "lucide-react";

const ImpactStats = () => {
  const stats = [
    {
      icon: DollarSign,
      value: "$2.4M",
      label: "Total Raised",
      description: "Directly to communities"
    },
    {
      icon: Users,
      value: "15,000+",
      label: "Global Donors",
      description: "From 67 countries"
    },
    {
      icon: Check,
      value: "340+",
      label: "Projects Completed",
      description: "With verified outcomes"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real Impact, Real Transparency
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Every donation is tracked, every outcome is verified, every story is authentic.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-xl font-semibold text-blue-100 mb-2">{stat.label}</div>
              <div className="text-blue-200">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
