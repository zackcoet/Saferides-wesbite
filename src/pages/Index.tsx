import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Founder from "@/components/Founder";
import JoinWaitlist from "@/components/JoinWaitlist";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update page title and meta description
    document.title = "SafeRides - Student Rides. Safer. Smarter.";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'SafeRides is a secure ride-sharing platform designed exclusively for university students. Join our trusted community for safer student transportation.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <About />
        <Founder />
        <JoinWaitlist />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
