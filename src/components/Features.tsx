import { Shield, Users, MapPin, Clock } from "lucide-react";
import appMockup from "@/assets/app-mockup.jpg";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Student-Only Verified Community",
      description: "Only verified students can sign up, creating a trusted and secure network for all rides."
    },
    {
      icon: Users,
      title: "Trusted Contact Sharing",
      description: "Share your ride details with trusted contacts who can track your journey in real-time."
    },
    {
      icon: MapPin,
      title: "Female Driver Option",
      description: "Female riders can request female drivers for added comfort and security."
    },
    {
      icon: Clock,
      title: "24/7 Safety Support",
      description: "Round-the-clock safety features and support to ensure peace of mind at all times."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-white to-royal-blue-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-royal-blue-dark mb-4">
            What is SafeRides?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A secure ride-sharing platform designed exclusively for university and college students, 
            creating a verified community you can trust.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Features List */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 rounded-2xl bg-white shadow-soft hover:shadow-medium transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-royal-blue rounded-xl flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-royal-blue-dark mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* App Mockup */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={appMockup} 
                alt="SafeRides Mobile App Interface" 
                className="w-full max-w-md mx-auto rounded-3xl shadow-strong"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/10 to-royal-blue-light/20 rounded-3xl transform rotate-6 scale-110"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;