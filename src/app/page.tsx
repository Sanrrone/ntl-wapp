"use client";

import HeroSection from "../components/home/HeroSection";
import SnapshotSection from "../components/home/SnapshotSection";
import ProblemSolutionSection from "../components/home/ProblemSolutionSection";
import DifferentiationSection from "../components/home/DifferentiationSection";
import SustainabilitySection from "../components/home/SustainabilitySection";
import MarketSizeSection from "../components/home/MarketSizeSection";
import TeamSection from "../components/home/TeamSection";
import InvestorCTASection from "../components/home/InvestorCTASection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8F7F5] overflow-x-hidden font-sans text-[#111C18]">
      <HeroSection />
      
      <SnapshotSection />

      <ProblemSolutionSection />

      <DifferentiationSection />

      <SustainabilitySection />

      <MarketSizeSection />

      <TeamSection />

      <InvestorCTASection />
    </main>
  );
}
