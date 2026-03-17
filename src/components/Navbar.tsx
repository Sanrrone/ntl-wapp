"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Main Desktop & Mobile Header */}
      <div className="px-6 md:px-12 py-4 flex items-center justify-between">
        
        {/* Left: Investors Button (Hidden on very small screens) */}
        <div className="flex-1 hidden md:flex justify-start">
          <Link 
            href="/investors"
            className="bg-[#8B0000] text-white px-8 py-3 rounded-full font-semibold text-sm tracking-wide shadow-md shadow-[#8B0000]/20 hover:bg-[#700000] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Investors
          </Link>
        </div>

        {/* Center: Logo */}
        <div className="flex-1 flex justify-start md:justify-center">
          <Link href="/" className="group">
            <img 
              src="/logo.png" 
              alt="Nordic Tiempo Lento Logo" 
              className="h-12 md:h-14 object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>
        </div>

        {/* Right: Desktop Navigation Links */}
        <div className="flex-1 hidden md:flex justify-end gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path} 
              className="relative text-gray-700 font-medium text-lg hover:text-[#1D4ED8] transition-colors duration-300 group py-2"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#1D4ED8] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center justify-end flex-1">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-black focus:outline-none p-2"
          >
            {isMenuOpen ? (
              // Close (X) Icon
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-lg absolute w-full">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path} 
              onClick={() => setIsMenuOpen(false)} // Close menu when clicked
              className="text-gray-700 font-medium text-lg hover:text-[#1D4ED8] transition-colors py-2 border-b border-gray-50"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/investors"
            onClick={() => setIsMenuOpen(false)}
            className="bg-[#8B0000] text-white px-8 py-3 rounded-full font-semibold text-sm tracking-wide mt-4 w-full text-center"
          >
            Investors
          </Link> {/* <-- This closing tag was the missing piece! */}
        </div>
      )}
    </nav>
  );
}
