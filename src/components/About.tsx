import { Button } from "@/components/ui/button";

const About = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-royal-blue-light/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-royal-blue-dark mb-6">
            Our Mission
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              At SafeRides, we believe every student deserves to feel safe getting home. 
              Our mission is simple yet profound: to provide secure and reliable transportation 
              that empowers students to move freely and safely, especially during late hours.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white p-8 rounded-2xl shadow-soft">
                <h3 className="text-2xl font-semibold text-royal-blue-dark mb-4">
                  Built for Students
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We understand the unique challenges students face with transportation. 
                  SafeRides was founded on the principle of reducing risk by building a 
                  community where every member is a verified student.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-soft">
                <h3 className="text-2xl font-semibold text-royal-blue-dark mb-4">
                  Trust & Safety First
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our goal is to foster an environment of trust and mutual responsibility, 
                  ensuring peace of mind for students and their families through rigorous 
                  verification and safety features.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => scrollToSection('founder')}
                className="px-8 py-4"
              >
                Meet Our Founder
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;