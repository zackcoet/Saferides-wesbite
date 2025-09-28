import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-royal-blue/80 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          Student Rides.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-royal-blue-light">
            Safer. Smarter.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto font-medium leading-relaxed">
          Your trusted community for secure and reliable student transportation. 
          Built by students, for students.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => scrollToSection('join')}
            className="px-8 py-4 text-xl"
          >
            Join the Waitlist
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="royal-outline" 
            size="lg"
            onClick={() => scrollToSection('features')}
            className="px-8 py-4 text-xl bg-white/10 backdrop-blur-sm border-white/50 text-white hover:bg-white hover:text-royal-blue"
          >
            Learn More
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-col items-center">
          <p className="text-white/70 text-sm mb-4">Trusted by students at</p>
          <div className="flex flex-wrap gap-8 items-center justify-center text-white/60 text-sm font-medium">
            <span>University of South Carolina</span>
            <span>•</span>
            <span>And more universities coming soon</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;