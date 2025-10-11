'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FounderProfilePage() {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      '.header-section',
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );

    gsap.fromTo(
      '.profile-card',
      { opacity: 0, x: -100, scale: 0.9 },
      { opacity: 1, x: 0, scale: 1, duration: 1, delay: 0.3, ease: 'back.out(1.2)' }
    );

    gsap.fromTo(
      '.description-section',
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.8, delay: 0.5, ease: 'power3.out' }
    );

    gsap.fromTo(
      '.experience-row',
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.5, 
        stagger: 0.1,
        delay: 0.8,
        ease: 'power2.out'
      }
    );
  }, []);

  const experiences = [
    { role: 'Founder', company: 'Denqid', years: '2024 → Now' },
    { role: 'Framer Partner', company: 'Framer', years: '2024 → Now' },
    { role: 'Contra Partner', company: 'Contra', years: '2024 → Now' },
    { role: 'Google Partner', company: 'Google', years: '2023 → Now' }
  ];

  return (
    <div className="min-h-screen bg-[#EAEAEA] font-sans">
      {/* Header */}
      

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-12 pt-32 pb-20">
        {/* Title Section */}
        <div className="header-section text-center mb-16">
          <p className="text-[#808080] text-lg font-serif italic mb-4">The founder</p>
          <h1 className="text-6xl md:text-7xl font-bold">
            <span className="text-[#333333]">Pushing Brands </span>
            <span className="text-[#808080]">since 2023</span>
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Profile Card */}
          <div className="profile-card">
            <div className="bg-white rounded-[20px] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.08)] inline-block">
              {!imageError ? (
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop"
                  alt="Deniz Ulmer"
                  className="w-[380px] h-[480px] object-cover rounded-[15px]"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-[380px] h-[480px] bg-gradient-to-br from-gray-700 to-gray-900 rounded-[15px] flex items-center justify-center text-white text-6xl font-bold">
                  DU
                </div>
              )}
            </div>

            {/* Profile Info */}
            <div className="mt-8 ml-2">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-[#333333] font-bold text-2xl mb-1">Deniz Ulmer</h2>
                  <p className="text-[#808080] text-sm">Denqid, Founder</p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 mt-6">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg border border-[#333333] flex items-center justify-center hover:bg-[#333333] hover:text-white transition-colors group"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-[#333333] group-hover:stroke-white">
                    <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="4" strokeWidth="2"/>
                    <circle cx="18" cy="6" r="1" fill="currentColor"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg border border-[#333333] flex items-center justify-center hover:bg-[#333333] hover:text-white transition-colors group"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-[#333333] group-hover:stroke-white">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" strokeWidth="2"/>
                    <rect x="2" y="9" width="4" height="12" strokeWidth="2"/>
                    <circle cx="4" cy="4" r="2" strokeWidth="2"/>
                  </svg>
                </motion.a>
              </div>
            </div>
          </div>

          {/* Right Side - Description & Experience */}
          <div className="description-section pt-4">
            {/* Description */}
            <div className="relative mb-12">
              <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <p className="text-[#555555] text-lg leading-relaxed max-w-[600px]">
                Deniz is a UI/UX designer from Germany — Stuttgart who blends function with emotion. As a Framer, Contra, and Shopify Partner, he helps startups and companies create clear interfaces, strong brands, and inspiring digital experiences.
              </p>
            </div>

            {/* Experience Table */}
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="experience-row flex justify-between items-center py-5 border-b border-gray-300/50 hover:bg-white/40 hover:px-4 transition-all duration-300 rounded-lg cursor-pointer"
                  whileHover={{ x: 4 }}
                >
                  <div className="flex-1">
                    <p className="text-[#555555] font-medium">{exp.role}</p>
                  </div>
                  <div className="flex-1 text-center">
                    <p className="text-[#999999]">{exp.company}</p>
                  </div>
                  <div className="flex-1 text-right">
                    <p className="text-[#555555] font-medium">{exp.years}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}