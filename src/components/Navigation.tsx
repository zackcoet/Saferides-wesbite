import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-medium z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold text-royal-blue hover:text-royal-blue-dark transition-colors"
            >
              SafeRides
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-gray-700 hover:text-royal-blue font-medium transition-colors px-3 py-2 rounded-lg hover:bg-royal-blue-light/20"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-royal-blue font-medium transition-colors px-3 py-2 rounded-lg hover:bg-royal-blue-light/20"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('founder')}
                className="text-gray-700 hover:text-royal-blue font-medium transition-colors px-3 py-2 rounded-lg hover:bg-royal-blue-light/20"
              >
                Our Founder
              </button>
              <Button 
                variant="cta" 
                size="sm"
                onClick={() => scrollToSection('join')}
              >
                Join Waitlist
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <button 
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-royal-blue font-medium"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-royal-blue font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('founder')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-royal-blue font-medium"
              >
                Our Founder
              </button>
              <div className="px-3 py-2">
                <Button 
                  variant="cta" 
                  size="sm" 
                  className="w-full"
                  onClick={() => scrollToSection('join')}
                >
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;