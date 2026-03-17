"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Milestones() {
  const milestones = [
    { phase: "Phase 1", time: "0–3 months", desc: "Refine product concept, confirm formulation direction, and prioritize regulatory questions." },
    { phase: "Phase 2", time: "3–6 months", desc: "Advance prototype planning, supplier conversations, and development work for the first product concept." },
    { phase: "Phase 3", time: "6–12 months", desc: "Run initial validation activities, brand testing, and market readiness work." },
    { phase: "Phase 4", time: "12+ months", desc: "Prepare for a stronger proof-of-concept narrative and next-stage fundraising." }
  ];

  return (
    <section className="w-full bg-[#F8F7F5] py-24 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        
        {/* Left Column: Heading */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true, amount: 0.2 }} 
          className="md:w-1/3 flex flex-col gap-4 sticky top-32 h-fit"
        >
          <div className="text-[0.7rem] font-bold tracking-widest uppercase text-[#B98A45]">Milestones</div>
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#111C18] leading-tight tracking-tight">
            A staged path from concept to early validation
          </h2>
          <p className="text-[#5A5A5A] text-lg">
            This section is designed for near-term milestones rather than long-range projections.
          </p>
        </motion.div>

        {/* Right Column: Timeline Cards */}
        <div className="md:w-2/3 flex flex-col gap-6">
          {milestones.map((step, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, amount: 0.2 }} 
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-[1.5rem] p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center gap-6"
            >
              {/* Number Circle */}
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#EAE8E2] text-[#8B0000] text-2xl font-bold flex items-center justify-center">
                {i + 1}
              </div>
              
              {/* Content */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-[#111C18]">{step.phase}</h3>
                  <span className="bg-[#111C18] text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                    {step.time}
                  </span>
                </div>
                <p className="text-[#5A5A5A] text-[1rem] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
