"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function OurStory() {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        
        {/* Left Side: Image / Visual Placeholder */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true, amount: 0.2 }}
          className="relative h-[500px] w-full bg-[#EAE8E2] rounded-[2rem] overflow-hidden"
        >
          {/* You can drop an image of the founders working, a lab environment, or coffee bioactives here */}
          <div className="absolute inset-0 bg-[#111C18]/5 flex items-center justify-center">
             <img 
              src="/union.png" 
              alt="The concept"
              
            />
          </div>
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-6"
        >
          <div className="text-[0.7rem] font-bold tracking-widest uppercase text-[#B98A45]">Our Origin</div>
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#111C18] leading-tight tracking-tight">
            Bridging the gap between longevity and dermatology.
          </h2>
          <div className="flex flex-col gap-4 text-[#5A5A5A] text-lg leading-relaxed">
            <p>
              While conventional skincare focuses entirely on topical applications, emerging clinical data shows that the foundation of healthy aging lies in the microbiome. 
            </p>
            <p>
              By isolating specific bioactives derived from sustainably upcycled coffee, we developed a proprietary, dual-capsule formulation that nourishes the gut ecosystem while delivering targeted support to the skin barrier. 
            </p>
            <p className="font-semibold text-[#111C18]">
              It's not just wellness. It is evidence-oriented consumer health.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
