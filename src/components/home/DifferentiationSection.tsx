"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function DifferentiationSection() {
  const items = [
    { title: "Science-led foundation", body: "Built around the emerging biology of the gut–skin axis and informed by microbiome research." },
    { title: "Sustainable ingredient strategy", body: "Exploring valuable bioactive fractions derived from upcycled coffee side streams." },
    { title: "Product architecture", body: "A dual-capsule system designed to support complementary mechanisms rather than a single generic blend." },
    { title: "Scalable category", body: "Positioned within the growing beauty-from-within and sustainable bioactives markets." }
  ];

  return (
    <section className="w-full bg-[#0D1310] py-32 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 lg:sticky lg:top-32"
        >
          <div className="text-[0.7rem] font-bold tracking-widest uppercase text-[#B98A45]">WHY WE ARE DIFFERENT</div>
          <h2 className="text-4xl md:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight">
            Where microbiome science meets healthy aging
          </h2>
          <p className="text-[#A3A3A3] text-[1.1rem] leading-relaxed max-w-md mt-2">
            We are building at the intersection of microbiome science, healthy aging, and sustainable ingredient innovation. Our differentiation comes from combining scientific rationale, upcycled raw materials, and a product concept designed for future validation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-[#151E19] rounded-[2rem] p-8 border border-[#1F2C24] flex flex-col gap-4"
            >
              <div className="w-8 h-8 rounded-lg bg-[#1F2C24] text-[#CBA360] flex items-center justify-center text-xs font-bold">
                {i + 1}
              </div>
              <h3 className="text-[1.35rem] font-bold text-white mt-2 tracking-tight">{item.title}</h3>
              <p className="text-[#A3A3A3] text-[0.95rem] leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
