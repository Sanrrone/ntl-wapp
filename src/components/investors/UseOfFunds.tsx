"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function UseOfFunds() {
  const fundsFocus = [
    { title: "Formulation development", desc: "Prototype refinement, ingredient selection, and manufacturability planning." },
    { title: "Scientific foundation", desc: "Evidence mapping, validation planning, and expert support for product rationale." },
    { title: "Regulatory preparation", desc: "Assessment of ingredient pathway, claims boundaries, and EU market readiness." },
    { title: "Early market validation", desc: "Customer discovery, brand validation, and initial commercialization planning." }
  ];

  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.2 }} 
          className="max-w-3xl flex flex-col gap-4"
        >
          <div className="text-[0.7rem] font-bold tracking-widest uppercase text-[#B98A45]">Round</div>
          <h2 className="text-4xl md:text-[3rem] font-bold text-[#111C18] leading-tight tracking-tight">
            Capital would be used to de-risk the first development phase
          </h2>
          <p className="text-[#5A5A5A] text-lg">
            We are preparing for early-stage fundraising to move from concept refinement into proof-of-concept execution and market validation.
          </p>
        </motion.div>

        {/* Financial Highlights */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.2 }}
          className="bg-[#111C18] text-white rounded-[2rem] p-10 md:p-12 flex flex-col md:flex-row gap-8 md:gap-24 shadow-lg"
        >
          <div className="flex flex-col gap-2">
            <span className="text-[#B98A45] font-semibold text-sm uppercase tracking-wider">Target Round</span>
            <span className="text-4xl md:text-5xl font-bold">€125k–€250k</span>
          </div>
          <div className="flex flex-col gap-2 border-t md:border-t-0 md:border-l border-gray-700 pt-6 md:pt-0 md:pl-24">
            <span className="text-[#B98A45] font-semibold text-sm uppercase tracking-wider">Use of Funds Horizon</span>
            <span className="text-4xl md:text-5xl font-bold">12–18 months</span>
          </div>
        </motion.div>

        {/* Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {fundsFocus.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, amount: 0.1 }} 
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col gap-3"
            >
              <div className="h-1 w-12 bg-[#8B0000] mb-2 rounded-full"></div>
              <h3 className="text-xl font-bold text-[#111C18]">{item.title}</h3>
              <p className="text-[#5A5A5A] text-[0.95rem] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
