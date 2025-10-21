'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

export default function Skills() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      '.skills-header',
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );

    gsap.fromTo(
      '.skills-left-panel',
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' }
    );

    gsap.fromTo(
      '.skills-right-panel',
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.8, delay: 0.3, ease: 'power3.out' }
    );
  }, []);

  const skillItems = [
    {
      question: "Frontend Development",
      answer:
        "Experienced with React, Next.js, and TypeScript. I focus on building fast, accessible, and responsive interfaces with modern tools like Tailwind CSS and Framer Motion for smooth UI animations.",
    },
    {
      question: "Backend Development",
      answer:
        "Comfortable with Node.js, Express, and Django. I build scalable REST APIs, handle authentication, and integrate with databases like MongoDB and PostgreSQL.",
    },
    {
      question: "AI & Machine Learning",
      answer:
        "Worked on projects involving NLP, LLM-based chatbots, and document intelligence systems. Skilled in Python, Scikit-learn, and OpenAI API integrations.",
    },
    {
      question: "DevOps & Deployment",
      answer:
        "Hands-on experience deploying full-stack apps using Render, Vercel, Firebase, and Docker. Familiar with CI/CD and cloud-based workflows.",
    },
  ];

  const toggleSkill = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-[#F0F0F0] font-['Inter',sans-serif] px-4 sm:px-6 md:px-30">
      {/* Header */}
      <div className="skills-header text-center pt-16 md:pt-20 mb-10 md:mb-16">
        <p className="text-[#AAAAAA] text-sm tracking-[2px] italic mb-2">
          SKILLS
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#333333]">
          Technical Expertise
        </h1>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-start justify-center gap-10 md:gap-16 lg:gap-20 pb-20 max-w-6xl mx-auto">
        {/* Left Panel */}
        <div className="skills-left-panel w-full lg:w-1/3 bg-white rounded-[20px] p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex-shrink-0">
          <div className="mb-5 flex flex-col items-center lg:items-start">
            {!imageError ? (
              <img
                src="/profile.jpeg"
                alt="Aadil"
                className="w-[70px] h-[70px] rounded-full object-cover mb-4"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-[70px] h-[70px] rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white text-2xl font-bold mb-4">
                A
              </div>
            )}
            <h3 className="text-2xl font-semibold text-[#333333] mb-2 text-center lg:text-left">
              Want to collaborate?
            </h3>
            <p className="text-base text-[#666666] mb-6 text-center lg:text-left">
              Let’s build something great together.
            </p>
          </div>

          <button className="w-full bg-black text-white font-semibold text-base py-[14px] px-[24px] rounded-xl flex items-center justify-center gap-3 hover:bg-[#333333] transition-colors mb-4 group">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="3"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8M12 8l4 4-4 4" />
              </svg>
            </div>
            <span>Contact Me</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            
          </button>
          
          {/* <p className="text-sm text-[#666666] text-center">
            Or email me at{' '}
            <a 
              href="mailto:adil.shah@example.com" 
              className="text-black font-semibold underline hover:text-[#666666] transition-colors"
            >
              adil.shah@example.com
            </a>
          </p> */}
        </div>

        {/* Right Panel */}
        <div className="skills-right-panel w-full lg:w-2/3">
          {skillItems.map((item, index) => (
            <div
              key={index}
              className="border-b border-[#DDDDDD] mb-6 md:mb-8 pb-6 md:pb-8 last:border-b-0"
            >
              <button
                onClick={() => toggleSkill(index)}
                className="w-full flex items-start justify-between text-left group"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-[#333333] pr-6 group-hover:text-[#666666] transition-colors">
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
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
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
                    <p className="text-sm sm:text-base text-[#666666] leading-relaxed mt-3 sm:mt-4">
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
