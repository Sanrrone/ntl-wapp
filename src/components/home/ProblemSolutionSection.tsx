"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function ProblemSolutionSection() {
  const tags = ["Gut support", "Skin-focused bioactives", "Science-led formulation", "Sustainable sourcing"];

  return (
    <section className="w-full bg-[#FFFFFF] pb-24 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#111C18] tracking-tight leading-tight max-w-3xl"
        >
          Skincare alone does not address the biology behind skin aging
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Problem Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.6 }}
            className="bg-[#F3F1EB] rounded-[2rem] p-10 flex flex-col gap-4"
          >
            <div className="text-[0.7rem] font-bold tracking-widest uppercase text-[#B98A45]">PROBLEM</div>
            <h3 className="text-2xl md:text-[1.75rem] font-bold text-[#111C18] leading-tight tracking-tight">
              The market has products, but limited biological depth
            </h3>
            <p className="text-[#5A5A5A] text-[1.05rem] leading-relaxed mt-2">
              Most skin health products focus only on topical care, even though skin aging is also shaped by systemic factors such as inflammation, oxidative stress, metabolism, and gut microbial activity. We see a growing need for evidence-based beauty-from-within products grounded in biology rather than marketing alone.
            </p>
          </motion.div>

          {/* Solution Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#F3F1EB] rounded-[2rem] p-10 flex flex-col justify-between gap-6"
          >
            <div className="flex flex-col gap-4">
              <div className="text-[0.7rem] font-bold tracking-widest uppercase text-[#B98A45]">SOLUTION</div>
              <h3 className="text-2xl md:text-[1.75rem] font-bold text-[#111C18] leading-tight tracking-tight">
                A dual-capsule strategy for the gut–skin axis
              </h3>
              <p className="text-[#5A5A5A] text-[1.05rem] leading-relaxed mt-2">
                Our dual-capsule concept is designed to support skin health through complementary pathways. One capsule focuses on the gut environment and microbiome-related functions, while the second delivers selected bioactives relevant to skin health and healthy aging.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag, i) => (
                <span key={i} className="bg-[#E7E2D8] text-[#111C18] text-[0.75rem] font-bold px-3 py-1.5 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
