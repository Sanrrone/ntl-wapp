"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function MarketSizeSection() {
  const markets = [
    {
      title: "Europe Dietary Supplements",
      cagr: "9.10%",
      year1: "2025",
      value1: "USD 23.5B",
      height1: "55%",
      year2: "2030",
      value2: "USD 36.4B",
      height2: "85%",
      color1: "#BBD8C8",
      color2: "#5D8AE5"
    },
    {
      title: "Europe Cosmeceuticals",
      cagr: "8.39%",
      year1: "2025",
      value1: "USD 58.9B",
      height1: "60%",
      year2: "2030",
      value2: "USD 88.2B",
      height2: "90%",
      color1: "#BBD8C8",
      color2: "#5D8AE5"
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl flex flex-col gap-4"
        >
          <div className="text-[0.7rem] font-bold tracking-widest uppercase text-[#B68A45]">
            MARKET OPPORTUNITY
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111C18] leading-tight tracking-tight">
            Positioned at the intersection of two massive markets
          </h2>
          <p className="text-[#5A5A5A] text-[1.1rem] leading-relaxed mt-2">
            Consumer health is shifting toward evidence-based solutions. We are targeting the rapidly expanding crossover between nutritional supplements and advanced skincare.
          </p>
        </motion.div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {markets.map((m, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-[#F9F8F6] rounded-[2rem] p-10 shadow-sm border border-gray-100 flex flex-col gap-10"
            >
              {/* Card Header */}
              <div>
                <h3 className="text-2xl font-bold text-[#111C18] tracking-tight mb-3">
                  {m.title}
                </h3>
                <span className="bg-[#F5F3ED] text-[#B68A45] px-3 py-1.5 rounded-md text-[0.8rem] font-bold tracking-wide">
                  CAGR {m.cagr}
                </span>
              </div>

              {/* Bar Chart */}
              <div className="h-48 flex items-end justify-around gap-4 px-4 border-b border-gray-100 pb-4">
                {/* 2025 Bar */}
                <div className="flex flex-col items-center justify-end w-full gap-3 h-full">
                  <motion.div 
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}
                    className="text-xs font-bold text-[#5A5A5A]"
                  >{m.value1}</motion.div>
                  <motion.div 
                    initial={{ height: 0 }} whileInView={{ height: m.height1 }} transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full max-w-[80px] rounded-t-lg" style={{ backgroundColor: m.color1 }} 
                  />
                </div>

                {/* 2030 Bar */}
                <div className="flex flex-col items-center justify-end w-full gap-3 h-full">
                  <motion.div 
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.7 }}
                    className="text-sm font-extrabold text-[#111C18]"
                  >{m.value2}</motion.div>
                  <motion.div 
                    initial={{ height: 0 }} whileInView={{ height: m.height2 }} transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="w-full max-w-[80px] rounded-t-lg" style={{ backgroundColor: m.color2 }} 
                  />
                </div>
              </div>

              {/* X-Axis */}
              <div className="flex justify-around text-sm font-bold text-[#5A5A5A]">
                <span>{m.year1}</span>
                <span>{m.year2}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8 }}
          className="text-right text-sm text-gray-400 mt-[-1rem]"
        >
          Source: Mordor Intelligence (2025–2030 Projections)
        </motion.div>

      </div>
    </section>
  );
}
