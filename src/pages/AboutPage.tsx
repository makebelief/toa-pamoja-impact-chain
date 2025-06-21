
import { Button } from "@/components/ui/button";
import { Shield, Users, CheckCircle, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const stats = [
    { value: "2.4M+", label: "Total Donated", description: "Directly to communities" },
    { value: "15,000+", label: "Active Donors", description: "From 67 countries" },
    { value: "340+", label: "Completed Projects", description: "With verified impact" },
    { value: "89%", label: "Success Rate", description: "Projects reaching goals" }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Community Partners Submit Projects",
      description: "Local organizations and community leaders submit detailed project proposals with clear goals, budgets, and timelines."
    },
    {
      step: "2", 
      title: "Rigorous Verification Process",
      description: "Our team visits each location, meets with community leaders, and verifies the legitimacy and impact potential of every project."
    },
    {
      step: "3",
      title: "Transparent Fundraising",
      description: "Approved projects are featured on our platform with real photos, detailed budgets, and regular updates from the field."
    },
    {
      step: "4",
      title: "Direct Fund Transfer",
      description: "100% of donations go directly to verified local partners who implement the projects with community involvement."
    },
    {
      step: "5",
      title: "Real-Time Impact Updates",
      description: "Donors receive photos, videos, and written updates showing exactly how their contributions are creating change."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Building Trust Through Transparency
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              ToaPamoja connects global donors with verified African community projects. 
              We believe in radical transparency, direct impact, and authentic storytelling 
              to create lasting change across the continent.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How ToaPamoja Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our process ensures every donation creates real, measurable impact in African communities
            </p>
          </div>
          
          <div className="space-y-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start gap-6 bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Make Real Impact?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of donors who are building a better future for African communities through verified, transparent giving.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/campaigns">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
                Browse Active Campaigns
              </Button>
            </Link>
            <Link to="/create">
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                Submit a Project
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
