"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function InvestorCTASection() {
  return (
    <section className="w-full bg-[#0D1310] py-24 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-6xl mx-auto bg-[#151E19] rounded-[2.5rem] p-10 md:p-20 border border-[#1F2C24]"
      >
        <div className="flex flex-col items-start gap-6 max-w-3xl">
          <h2 className="text-4xl md:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight">
            Open to investor and strategic partner conversations
          </h2>
          <p className="text-[#A3A3A3] text-[1.1rem] leading-relaxed mb-4">
            We are open to conversations with early-stage investors, strategic partners, and advisors interested in microbiome-based skin health and sustainable bioactive innovation.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-2">
            <a href="/investors" className="bg-[#CBA360] hover:bg-[#B98A45] text-[#111C18] font-bold text-[0.95rem] py-3.5 px-6 rounded-full transition-colors duration-200">
              Request Investor Deck
            </a>
            <a href="mailto:svalenzuela@nordictiempolento.com" className="bg-transparent border border-[#2C3B32] text-white hover:bg-white/5 font-bold text-[0.95rem] py-3.5 px-6 rounded-full transition-colors duration-200">
              Talk to the Founders
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
