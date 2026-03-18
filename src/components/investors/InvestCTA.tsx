"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function InvestCTA() {
  return (
    <section className="w-full bg-white py-24 px-6 border-t border-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="bg-[#F8F7F5] rounded-[3rem] p-12 md:p-20 flex flex-col items-center gap-8"
        >
          <div className="text-[0.7rem] font-bold tracking-widest uppercase text-[#B98A45]">
            Next Step
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111C18] tracking-tight max-w-2xl">
            Interested in the deck or a founder conversation?
          </h2>
          <p className="text-[#5A5A5A] text-lg max-w-xl mx-auto">
            We are open to conversations with early-stage investors and strategic partners interested in microbiome-based skin health and sustainable ingredient innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4 w-full">
            <Link
              href="/contact"
              className="bg-[#8B0000] text-white px-8 py-4 rounded-full font-semibold text-sm tracking-wide shadow-md hover:bg-[#700000] hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto inline-flex items-center justify-center"
            >
              Request Investor Deck
            </Link>
            <Link
              href="/contact"
              className="bg-white border border-gray-300 text-[#111C18] px-8 py-4 rounded-full font-semibold text-sm tracking-wide hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 w-full sm:w-auto inline-flex items-center justify-center"
            >
              Talk to the Founders
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
