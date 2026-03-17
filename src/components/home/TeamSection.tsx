"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function TeamSection() {
  const teamMembers = [
    { name: "Sandro Valenzuela", role: "CO-FOUNDER, CEO", tag: "FOUNDER", image: "/founder-1.jpg", bio: "PhD researcher focused on microbiome science and translational health innovation." },
    { name: "Peter Mponzi", role: "CO-FOUNDER, CTO", tag: "FOUNDER", image: "/founder-2.jpg", bio: "Supports company building, strategy, and product development planning." },
    { name: "Tommi Vatanen", role: "SCIENTIFIC ADVISOR, MICROBIOME RESEARCH", tag: "ADVISOR", image: "/advisor.jpeg", bio: "Senior microbiome researcher supporting the scientific direction of the company." }
  ];

  return (
    <section className="w-full bg-[#F8F7F5] py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.2 }} 
          transition={{ duration: 0.6 }}
          className="max-w-2xl flex flex-col gap-4"
        >
          <div className="text-[0.7rem] font-bold tracking-widest uppercase text-[#B98A45]">MEET OUR TEAM</div>
          <h2 className="text-4xl md:text-[3rem] font-bold text-[#111C18] leading-tight tracking-tight">
            Built by science-driven founders and advisors
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: false, amount: 0.1 }} 
              transition={{ duration: 0.5, delay: i * 0.15 }}
              // Added a fixed height to the card (e.g., 480px) to ensure uniformity
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm flex flex-col h-[540px]"
            >
              {/* Image Container - Switched to percentage height (55%) */}
              <div className="relative h-[60%] bg-[#EAE8E2] w-full overflow-hidden shrink-0">
		<img 
		  src={member.image} 
		  alt={member.name} 
		  // Added padding (p-4 or p-6) to shrink the image inward, anchored bottom
		  className="w-full h-full object-cover object-top"
		/>
                <div className="absolute top-5 left-5 bg-[#4A504A]/95 backdrop-blur-sm text-white text-[0.65rem] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full z-10">
                  {member.tag}
                </div>
              </div>
              
              {/* Text Info - Takes up the remaining 45%, reduced padding to p-6 */}
              <div className="p-6 flex flex-col h-[40%] bg-white relative">
                <h3 className="text-[1.5rem] font-bold text-[#111C18] leading-tight">{member.name}</h3>
                <div className="text-[0.7rem] font-bold uppercase tracking-wider text-[#B98A45] mt-1 mb-2">
                  {member.role}
                </div>
                <p className="text-[#5A5A5A] text-[0.95rem] leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
