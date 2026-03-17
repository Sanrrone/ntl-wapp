import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import OurStory from '@/components/about/OurStory';
import CoreValues from '@/components/about/CoreValues';
import TeamSection from '@/components/home/TeamSection'; // The component you built earlier!

export const metadata = {
  title: 'About Us | Nordic Tiempo Lento',
  description: 'Learn about our science-led approach to skin health and the microbiome.',
};

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <AboutHero />
      <OurStory />
      <CoreValues />
      <TeamSection /> {/* Drops your beautifully cropped team cards right in! */}
    </main>
  );
}
