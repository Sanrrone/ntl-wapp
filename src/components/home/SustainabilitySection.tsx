"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function SustainabilitySection() {
  const items = [
    { title: "Circular ingredient sourcing", body: "Turning underused biomass into functional ingredient opportunities with a strong circular economy narrative." },
    { title: "Bioactive value creation", body: "Exploring the health and formulation potential of coffee-derived compounds rather than treating the material as waste." },
    { title: "Commercial relevance", body: "Linking sustainability with premium consumer health positioning, not as a side story but as part of the core model." }
  ];

  return (
    <section className="w-full bg-[#F8F7F5] py-32 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 lg:sticky lg:top-32"
        >
          <h2 className="text-4xl md:text-[3.5rem] font-bold text-[#111C18] leading-[1.1] tracking-tight">
            From side streams to high-value health innovation
          </h2>
          <p className="text-[#5A5A5A] text-[1.1rem] leading-relaxed">
            Sustainability is built into our model from the start. We are exploring coffee-derived side streams as a source of valuable compounds for nutrition and skin-health applications, aligning scientific innovation with circular economy principles.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {items.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-[#F3F1EB] rounded-[2rem] p-8 flex flex-row items-start gap-6 border border-white/50 shadow-sm"
            >
              <div className="w-10 h-10 flex-shrink-0 rounded-full bg-[#E7E2D8] text-[#B98A45] flex items-center justify-center text-sm font-bold">
                {i + 1}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[1.35rem] font-bold text-[#111C18] tracking-tight">{item.title}</h3>
                <p className="text-[#5A5A5A] leading-relaxed text-[0.95rem]">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
