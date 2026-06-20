import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Safety from "@/components/Safety";
import Trending from "@/components/Trending";
import HowItWorks from "@/components/HowItWorks";
import ForBusinesses from "@/components/ForBusinesses";
import Drivers from "@/components/Drivers";
import JoinTheTeam from "@/components/JoinTheTeam";
import RequestSchool from "@/components/RequestSchool";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Safety />
        <Trending />
        <HowItWorks />
        <ForBusinesses />
        <Drivers />
        <JoinTheTeam />
        <RequestSchool />
      </main>
      <Footer />
    </>
  );
}
