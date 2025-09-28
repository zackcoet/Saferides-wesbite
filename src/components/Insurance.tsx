import { Shield, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const Insurance = () => {
  const coveragePeriods = [
    {
      period: "Logged on / Available",
      description: "When the driver has the app on and can receive ride requests, but has not accepted any",
      coverage: [
        "$50,000 bodily injury per person",
        "$100,000 bodily injury per accident", 
        "$50,000 property damage"
      ]
    },
    {
      period: "Period of Prearranged Ride",
      description: "Once the driver accepts a ride, through picking up and transporting until the passenger exits",
      coverage: [
        "$1,000,000 for death, bodily injury, and property damage"
      ]
    },
    {
      period: "Off-duty / App off",
      description: "When the driver is not logged in / not providing TNC services", 
      coverage: [
        "Handled by driver's personal auto insurance under normal SC minimums"
      ]
    }
  ];

  return (
    <section id="insurance" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-royal-blue-light/10 rounded-2xl">
              <Shield className="w-12 h-12 text-royal-blue" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Insurance Coverage</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SafeRides complies with South Carolina TNC (Transportation Network Company) law, 
            providing comprehensive insurance coverage for all ride periods.
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {coveragePeriods.map((period, index) => (
            <Card key={index} className="p-8 border-royal-blue-light/20 shadow-soft hover:shadow-medium transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="lg:w-1/3">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {period.period}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {period.description}
                  </p>
                </div>
                
                <div className="lg:w-2/3">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">
                    Minimum Coverage Required:
                  </h4>
                  <div className="space-y-3">
                    {period.coverage.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-royal-blue-light/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Your Safety is Our Priority
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              All SafeRides drivers are required to maintain proper insurance coverage 
              and undergo thorough background checks. Our platform ensures compliance 
              with all South Carolina regulations for student transportation safety.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insurance;