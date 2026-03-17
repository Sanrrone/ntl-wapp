import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        {/* Make sure the name below exactly matches your file in the public folder! */}
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay - Ensures the white text is always readable over the video */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col items-start gap-6">
        <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight max-w-3xl leading-[1.1]">
          Science-led skin health from the gut up
        </h1>
        
        <p className="text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed">
          Nordic Tiempo Lento is developing a microbiome-based nutrition platform for healthy skin aging using sustainable coffee-derived bioactives.
        </p>
        
        <div className="flex flex-wrap gap-4 mt-4">
          <a 
            href="/investors" 
            className="bg-[#D9B575] hover:bg-[#C4A060] text-black font-semibold py-3 px-6 rounded-full transition-colors duration-200"
          >
            Request Investor Deck
          </a>
          <a 
            href="mailto:svalenzuela@nordictiempolento.com" 
            className="bg-transparent border border-white/30 text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-full transition-colors duration-200"
          >
            Talk to the Founders
          </a>
        </div>
      </div>
    </section>
  );
}
