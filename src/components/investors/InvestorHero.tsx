"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function InvestorHero() {
  const startupStats = [
    { label: "Stage", value: "Pre-seed" },
    { label: "Focus", value: "Gut–skin axis" },
    { label: "Base", value: "Finland" },
    { label: "Model", value: "Dual-capsule concept" }
  ];

  return (
    <section className="w-full bg-[#111C18] text-white py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Subtle background glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-[#8B0000] opacity-10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-10 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 items-center"
        >
          <div className="text-[0.75rem] font-bold tracking-widest uppercase text-[#B98A45]">
            Investors
          </div>
          <h1 className="text-4xl md:text-[4rem] font-bold leading-tight tracking-tight">
            Building a science-led <br className="hidden md:block" />
            skin health platform
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Nordic Tiempo Lento is an early-stage Finnish startup developing microbiome-based nutrition solutions for healthy skin aging, combining gut-focused product innovation with sustainable coffee-derived bioactives.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <button className="bg-[#8B0000] text-white px-8 py-4 rounded-full font-semibold text-sm tracking-wide shadow-lg hover:bg-[#700000] hover:-translate-y-0.5 transition-all duration-300">
              Request Investor Deck
            </button>
            <button className="bg-transparent border border-gray-500 text-white px-8 py-4 rounded-full font-semibold text-sm tracking-wide hover:border-white hover:bg-white/5 transition-all duration-300">
              Talk to the Founders
            </button>
          </div>
        </motion.div>

        {/* Startup Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 pt-12 border-t border-gray-800"
        >
          {startupStats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
              <span className="text-gray-400 text-sm font-medium">{stat.label}</span>
              <span className="text-white font-semibold text-lg">{stat.value}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
