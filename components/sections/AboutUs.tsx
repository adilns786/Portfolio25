"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".header-section",
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    gsap.fromTo(
      ".profile-card",
      { opacity: 0, x: -100, scale: 0.9 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1,
        delay: 0.3,
        ease: "back.out(1.2)",
      }
    );

    gsap.fromTo(
      ".description-section",
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.8, delay: 0.5, ease: "power3.out" }
    );

    gsap.fromTo(
      ".experience-row",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.8,
        ease: "power2.out",
      }
    );
  }, []);

  const experiences = [
    { role: "Upcoming SWE", company: "ISS", years: "2026 onwards" },
    { role: "Technical Officer", company: "CSI VESIT", years: "2023 → 2025 " },
    { role: "Industry Projects", company: "Freelance", years: "2024 → 2025" },
    { role: "Tech head", company: "TheDzire", years: "2024 → Now" },
  ];

  return (
    <div className="min-h-screen bg-[#EAEAEA] font-sans mt-32 mb-20 px-4 md:px-12">
      {/* Header Section */}
      <div className="header-section text-center mb-6">
        <p className="text-[#808080] text-base md:text-lg font-serif italic mb-2">
          The developer
        </p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          <span className="text-[#333333]">Building Ideas </span>
          <span className="text-[#808080]">into code</span>
        </h1>
      </div>

      {/* Grid Layout */}
      <div className="grid lg:grid-cols-5 gap-6 items-start">
        {/* Left Side - Profile */}
        <div className="lg:col-span-2 profile-card flex flex-col items-center">
          <div className="bg-white rounded-[20px] p-2 shadow-[0_10px_40px_rgba(0,0,0,0.4)] inline-block">
            {!imageError ? (
              <Image
                src="/profile.jpeg"
                alt="Aadil Shah"
                width={300}
                height={380}
                className="object-cover rounded-[15px] w-[250px] h-[320px] md:w-[300px] md:h-[380px]"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-[250px] h-[320px] md:w-[300px] md:h-[380px] bg-gradient-to-br from-gray-700 to-gray-900 rounded-[15px] flex items-center justify-center text-white text-6xl font-bold">
                A S
              </div>
            )}
          </div>

          {/* Info */}
          <div className="mt-6 text-center md:text-left flex flex-row gap-6">
            <h2 className="text-[#333333] font-bold text-xl md:text-2xl mb-2">
              Aadil Shah
            </h2>
            <div className="flex justify-center md:justify-start gap-2">
              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/adilns786/"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 md:w-9 md:h-9 rounded-lg border border-[#333333] flex items-center justify-center hover:bg-[#333333] hover:text-white transition-colors group"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="stroke-[#333333] group-hover:stroke-white"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    strokeWidth="2"
                  />
                  <circle cx="12" cy="12" r="4" strokeWidth="2" />
                  <circle cx="18" cy="6" r="1" fill="currentColor" />
                </svg>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/adilns786"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 md:w-9 md:h-9 rounded-lg border border-[#333333] flex items-center justify-center hover:bg-[#333333] hover:text-white transition-colors group"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="stroke-[#333333] group-hover:stroke-white"
                >
                  <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                    strokeWidth="2"
                  />
                  <rect x="2" y="9" width="4" height="12" strokeWidth="2" />
                  <circle cx="4" cy="4" r="2" strokeWidth="2" />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Right Side - Description + Table */}
        <div className="lg:col-span-3 description-section flex flex-col justify-between">
          {/* Description */}
          <div className="relative mb-6 mt-6 md:mt-4 text-center md:text-left">
            <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse hidden md:block"></div>
            <p className="text-[#555555] text-base md:text-lg leading-relaxed md:max-w-[525px] mx-auto md:mx-0">
              Full-stack developer and Computer Engineering student with a
              strong foundation in web and app technologies. Winner of Smart
              India Hackathon 2024 for building a collaborative governance
              platform. Proven track record in leading projects, securing 3x
              hackathon wins, experience on live projects, and publishing at
              IEEE.
            </p>
          </div>

          {/* Experience Table */}
          <div className="space-y-3 mb-16 md:pl-4 border-l border-gray-600 md:text-left text-center">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="experience-row flex flex-col md:flex-row md:justify-between md:items-center py-3 border-b border-gray-300/50 hover:bg-white/40 md:hover:px-4 transition-all duration-300 rounded-lg cursor-pointer text-sm md:text-base"
                whileHover={{ x: 4 }}
              >
                <p className="text-[#555555] font-medium">{exp.role}</p>
                <p className="text-[#999999]">{exp.company}</p>
                <p className="text-[#555555] font-medium">{exp.years}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
