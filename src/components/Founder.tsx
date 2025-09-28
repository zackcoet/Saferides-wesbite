import founderPhoto from "@/assets/founder-photo.jpg";

const Founder = () => {
  return (
    <section id="founder" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-royal-blue-dark mb-4">
            Meet Our Founder
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Founder Photo */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={founderPhoto} 
                alt="Zack Coetzee, Founder of SafeRides" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-strong object-cover"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/10 to-royal-blue-light/30 rounded-2xl transform -rotate-6 scale-110"></div>
          </div>

          {/* Founder Story */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-royal-blue-dark mb-2">
                Zack Coetzee
              </h3>
              <p className="text-xl text-royal-blue mb-6">
                Founder & CEO
              </p>
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Zack founded SafeRides after hearing one too many stories of students 
                being put in danger by traditional ride-sharing apps. As a college student 
                himself, he saw a critical gap in the market.
              </p>
              
              <p>
                Students needed a safer, more trusted way to get around—especially at night. 
                With a background in entrepreneurship and a passion for building real solutions, 
                he created SafeRides: a platform built by students, for students.
              </p>
              
              <div className="bg-royal-blue-light/30 p-6 rounded-xl">
                <p className="text-royal-blue-dark font-semibold text-xl italic">
                  "My mission is simple—make getting home feel safe again."
                </p>
              </div>

              <p>
                Today, Zack continues to lead SafeRides with a commitment to innovation, 
                safety, and building technology that truly serves the student community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;