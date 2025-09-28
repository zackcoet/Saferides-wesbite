import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, Users, Bell } from "lucide-react";

const JoinWaitlist = () => {
  const benefits = [
    {
      icon: Bell,
      title: "Early Access",
      description: "Be first to know when SafeRides launches in your area"
    },
    {
      icon: Users,
      title: "Exclusive Updates",
      description: "Receive insider updates on our progress and new features"
    },
    {
      icon: Mail,
      title: "Launch Notifications",
      description: "Get notified immediately when we go live at your university"
    }
  ];

  return (
    <section id="join" className="py-20 gradient-hero text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the SafeRides Community
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Be among the first to experience safer student transportation. 
            Join our waitlist and help us bring SafeRides to your university.
          </p>

          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Users className="h-5 w-5 mr-3" />
            <span className="font-medium">Join 500+ students already waiting</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* CTA Section */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold mb-6">Ready to get started?</h3>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Click the link below to sign up for our waitlist. You'll receive exclusive 
              updates, launch announcements, and early access opportunities.
            </p>
            
            <Button 
              asChild
              variant="hero"
              size="lg"
              className="bg-white text-royal-blue hover:bg-white/90 shadow-strong px-8 py-4 text-xl font-bold"
            >
              <a 
                href="https://forms.gle/2Ln5GGeE6R65V7HH6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                Join Waitlist Now
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">
              What you'll get:
            </h3>
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-white/80">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-white/70 text-sm mb-4">
            Starting at University of South Carolina
          </p>
          <p className="text-white/60 text-sm">
            Coming to more universities soon • No spam, unsubscribe anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default JoinWaitlist;