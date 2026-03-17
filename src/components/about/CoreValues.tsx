"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function CoreValues() {
  const values = [
    { title: "Science-Led", desc: "Every formulation is grounded in peer-reviewed clinical data and microbiome research." },
    { title: "Circular Economy", desc: "We utilize upcycled coffee-derived bioactives to dramatically reduce our environmental footprint." },
    { title: "Radical Transparency", desc: "Clear ingredient sourcing, honest clinical timelines, and realistic health claims." }
  ];

  return (
    <section className="w-full bg-[#111C18] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-[2.5rem] font-bold tracking-tight">What drives us forward</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col gap-4 border-l-2 border-[#8B0000] pl-6"
            >
              <h3 className="text-xl font-bold">{value.title}</h3>
              <p className="text-gray-400 leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
