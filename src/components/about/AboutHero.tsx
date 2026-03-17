"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="w-full bg-[#F8F7F5] py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <div className="text-[0.75rem] font-bold tracking-widest uppercase text-[#B98A45] mb-4">
            Our Mission
          </div>
          <h1 className="text-4xl md:text-[4rem] font-bold text-[#111C18] leading-tight tracking-tight mb-6">
            Redefining skin health <br className="hidden md:block" />
            from the inside out.
          </h1>
          <p className="text-[#5A5A5A] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Nordic Tiempo Lento was founded on a simple but powerful premise: true skin health begins in the gut. We are translating breakthrough microbiome science into daily, sustainable nutrition.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
