
import { Users, DollarSign, Check } from "lucide-react";

const ImpactStats = () => {
  const stats = [
    {
      icon: DollarSign,
      value: "$2.4M",
      label: "Total Raised",
      description: "Across 340+ campaigns"
    },
    {
      icon: Users,
      value: "15,000+",
      label: "Global Donors",
      description: "From 67 countries"
    },
    {
      icon: Check,
      value: "89%",
      label: "Success Rate",
      description: "Campaigns reaching goals"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real Impact, Real Transparency
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every donation is recorded on-chain, every outcome is verified, every impact is measurable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
                <stat.icon className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-xl font-semibold text-gray-800 mb-2">{stat.label}</div>
              <div className="text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
