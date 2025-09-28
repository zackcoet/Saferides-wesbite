import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-royal-blue-dark text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">SafeRides</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Student rides. Safer. Smarter. Building a trusted community 
              for secure student transportation.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-royal-blue-light" />
                <a 
                  href="mailto:saferideshelp@gmail.com" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  saferideshelp@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-3 text-royal-blue-light" />
                <span className="text-white/80">
                  Columbia, SC 29201, USA
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('founder')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Our Founder
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('join')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Join Waitlist
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-white/80">
                  Operated by Coetzee Tech LLC
                </span>
              </li>
              <li>
                <a 
                  href="https://forms.gle/2Ln5GGeE6R65V7HH6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Join Waitlist
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2024 SafeRides. All rights reserved.
            </p>
            <p className="text-white/60 text-sm mt-4 md:mt-0">
              Built for students, by students.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;