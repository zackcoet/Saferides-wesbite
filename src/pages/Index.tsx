import { Link } from "react-router-dom";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import TrendingSpots from "@/components/TrendingSpots";
import ForDrivers from "@/components/ForDrivers";
import FAQ from "@/components/FAQ";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Manifesto />

        {/* Story teaser — subtle link inserted directly below Manifesto (Index.tsx line 20) */}
        <div className="bg-white flex justify-center border-b border-[#E4EAF8] py-5">
          <Link
            to="/story"
            className="text-sm font-medium text-[#1740A6] hover:text-[#0F2F8C] transition-colors underline underline-offset-4 decoration-[#1740A6]/30"
          >
            Want to know how SafeRides started?
          </Link>
        </div>

        <HowItWorks />
        <Features />

        {/* TrendingSpots inserted after Features (Index.tsx line 30) */}
        <TrendingSpots />

        <ForDrivers />

        {/* FAQ inserted just above DownloadCTA (Index.tsx line 35) */}
        <FAQ />

        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
