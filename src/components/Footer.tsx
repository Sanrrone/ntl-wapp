"use client";
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-16 px-8 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex flex-col gap-4 max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Nordic Tiempo Lento
          </h2>
          <p className="text-lg md:text-xl text-gray-200">
            Science-led skin health from the gut up
          </p>
        </div>

        <div className="flex gap-16 md:gap-24 pt-2 md:pt-0">
          <div className="flex flex-col gap-5">
            <Link href="/about" className="text-lg font-medium hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-lg font-medium hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex flex-col gap-5">
            <Link
              href="/terms-and-conditions"
              className="text-lg font-medium hover:text-gray-300 transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy-policy"
              className="text-lg font-medium hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
