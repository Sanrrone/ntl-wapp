import React from 'react';
import InvestorHero from '@/components/investors/InvestorHero';
import InvestmentThesis from '@/components/investors/InvestmentThesis';
import UseOfFunds from '@/components/investors/UseOfFunds'; // Added
import Milestones from '@/components/investors/Milestones'; // Added
import InvestCTA from '@/components/investors/InvestCTA';

export const metadata = {
  title: 'Investors | Nordic Tiempo Lento',
  description: 'Building a science-led skin health platform.',
};

export default function InvestorsPage() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <InvestorHero />
      <InvestmentThesis />
      <UseOfFunds />
      <Milestones />
      <InvestCTA />
    </main>
  );
}
