"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function SnapshotSection() {
  const metrics = [
    { label: "Based in", value: "Finland" },
    { label: "Founded", value: "2025" },
    { label: "Scientific focus", value: "Gut–skin axis" },
    { label: "Product architecture", value: "Dual-capsule" },
    { label: "Ingredient strategy", value: "Upcycled coffee" }
  ];

  return (
    <section className="w-full bg-[#F8F7F5] py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl md:text-[3rem] font-bold text-[#111C18] tracking-tight leading-tight">
            A science-led approach to skin health
          </h2>
          <p className="text-[#5A5A5A] text-lg leading-relaxed mt-4 max-w-2xl">
            Nordic Tiempo Lento is an early-stage Finnish startup developing science-based ingestible solutions for healthy skin aging. Our approach combines gut microbiome support, skin-focused bioactives, and sustainable ingredient innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {metrics.map((metric, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[2rem] p-6 shadow-sm flex flex-col justify-center gap-1 min-h-[120px]"
            >
              <div className="text-xl font-bold text-[#111C18]">{metric.value}</div>
              <div className="text-[0.7rem] font-semibold text-[#888888]">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
