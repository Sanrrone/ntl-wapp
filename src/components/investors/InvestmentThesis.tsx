"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function InvestmentThesis() {
  const thesisPoints = [
    { num: "01", title: "Science-led category entry", desc: "The company targets healthy skin aging through the gut–skin axis, translating microbiome biology into an investable consumer health concept." },
    { num: "02", title: "Differentiated ingredient story", desc: "Upcycled coffee-derived bioactives create a clearer sustainability narrative than conventional supplement formulations." },
    { num: "03", title: "Scalable category", desc: "Beauty-from-within and healthy aging remain attractive areas for premium, evidence-oriented product development." },
    { num: "04", title: "Platform potential", desc: "The product concept can expand from a first formulation into a broader nutrition and skin-health platform over time." }
  ];

  return (
    <section className="w-full bg-[#F8F7F5] py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.2 }} 
          className="max-w-3xl flex flex-col gap-4"
        >
          <div className="text-[0.7rem] font-bold tracking-widest uppercase text-[#B98A45]">Investment Thesis</div>
          <h2 className="text-4xl md:text-[3rem] font-bold text-[#111C18] leading-tight tracking-tight">
            Why this company could matter now
          </h2>
          <p className="text-[#5A5A5A] text-lg">
            We are building around a focused thesis rather than a broad wellness story.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {thesisPoints.map((point, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, amount: 0.1 }} 
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-[2rem] p-10 shadow-sm flex flex-col gap-4 border border-gray-100"
            >
              <div className="text-[#B98A45] font-bold text-xl mb-2">{point.num}</div>
              <h3 className="text-2xl font-bold text-[#111C18] tracking-tight">
                {point.title}
              </h3>
              <p className="text-[#5A5A5A] text-[1rem] leading-relaxed">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
