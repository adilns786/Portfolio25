'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

export default function FAQPage() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      '.faq-header',
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );

    gsap.fromTo(
      '.faq-left-panel',
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' }
    );

    gsap.fromTo(
      '.faq-right-panel',
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.8, delay: 0.3, ease: 'power3.out' }
    );
  }, []);

  const faqItems = [
    {
      question: "Difference between a hour and a branding?",
      answer: "The Branding is ongoing and flexible — ideal for Startups design needs. Hour Rates are one-time, fixed-scope engagements for quicker goals like a rebrand or landing Page."
    },
    {
      question: "What types of design do you handle?",
      answer: "We handle a wide range of design services including brand identity, UI/UX design, web design, graphic design, and marketing materials."
    },
    {
      question: "How many requests can I make?",
      answer: "With our subscription model, you can make unlimited design requests. We'll work through them one at a time, ensuring quality and attention to detail."
    },
    {
      question: "Do you offer development too?",
      answer: "Yes, we offer both design and development services. Our team can handle full-stack development for web applications and websites."
    }
  ];

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-[#F0F0F0] font-['Inter',sans-serif]">
      {/* Header */}
      <div className="faq-header relative">
        {/* Logo */}
        

        {/* FAQ Label */}
        <div className="absolute top-[30px] left-1/2 -translate-x-1/2">
          <span className="text-[#AAAAAA] text-sm tracking-[2px] font-normal italic">FAQ</span>
        </div>

        

        {/* Main Title */}
        <h1 className="text-center text-[48px] font-bold text-[#333333] mt-[80px] pt-[30px]">
          Your Questions, Answered
        </h1>
      </div>

      {/* Content Area */}
      <div className="flex justify-center gap-[80px] mt-[80px] px-8 pb-20 flex-wrap lg:flex-nowrap">
        {/* Left Panel */}
        <div className="faq-left-panel w-full max-w-[380px] bg-white rounded-[20px] p-10 shadow-[0_10px_30px_rgba(0,0,0,0.05)] h-fit">
          {/* Profile Picture */}
          <div className="mb-5">
            {!imageError ? (
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
                alt="Profile"
                className="w-[70px] h-[70px] rounded-full object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-[70px] h-[70px] rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white text-2xl font-bold">
                D
              </div>
            )}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-semibold text-[#333333] mb-2">
            Have more questions?
          </h3>

          {/* Subtitle */}
          <p className="text-lg text-[#666666] mb-10">
            Book a free discovery call
          </p>

          {/* Book a Meeting Button */}
          <button className="w-full bg-black text-white font-semibold text-base py-[18px] px-[30px] rounded-xl flex items-center justify-center gap-3 hover:bg-[#333333] transition-colors mb-5 group">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 12h8M12 8l4 4-4 4"/>
              </svg>
            </div>
            <span>Book a Meeting</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>

          {/* Email Text */}
          <p className="text-sm text-[#666666] text-center">
            Or, email me at{' '}
            <a 
              href="mailto:hello@denqid.com" 
              className="text-black font-semibold underline hover:text-[#666666] transition-colors"
            >
              hello@denqid.com
            </a>
          </p>
        </div>

        {/* Right Panel - FAQ Items */}
        <div className="faq-right-panel w-full max-w-[600px]">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-[#DDDDDD] mb-[30px] pb-[30px] last:border-b-0">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-start justify-between text-left group"
              >
                <h3 className="text-xl font-semibold text-[#333333] pr-8 group-hover:text-[#666666] transition-colors">
                  {item.question}
                </h3>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#FF6666" 
                    strokeWidth="2.5"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-base text-[#666666] leading-[1.6] mt-4">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}