import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import FeaturedSubsidiaries from "@/components/FeaturedSubsidiaries";
import SolveSection from "@/components/SolveSection";
import PillarsSection from "@/components/PillarsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import MobileTabBar from "@/components/MobileTabBar";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <FeaturedSubsidiaries />
        <SolveSection />
        <PillarsSection />
        <CtaSection />
      </main>
      <Footer />
      <MobileTabBar />
    </>
  );
}
