import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Safety from "@/components/Safety";
import HowItWorks from "@/components/HowItWorks";
import ForDrivers from "@/components/ForDrivers";
import JoinTheTeam from "@/components/JoinTheTeam";
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
        <Safety />
        <HowItWorks />
        <ForDrivers />
        <JoinTheTeam />
        <FAQ />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
