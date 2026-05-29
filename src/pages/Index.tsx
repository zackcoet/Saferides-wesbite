import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import ForDrivers from "@/components/ForDrivers";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <HowItWorks />
        <Features />
        <ForDrivers />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
