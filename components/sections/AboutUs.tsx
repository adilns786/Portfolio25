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
    <div className="h-screen bg-[#EAEAEA] font-sans mt-32 mb-20">
      {/* Header */}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-12  ">
        {/* Title Section */}
        <div className="header-section text-center mb-4">
          <p className="text-[#808080] text-lg font-serif italic mb-2">
            The developer
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-[#333333]">Building Ideas  </span>
            <span className="text-[#808080]">into code</span>
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-5 gap-6 items-start">
          {/* Left Side - Profile Card */}
          <div className="lg:col-span-2 profile-card flex flex-col items-center">
            <div className="bg-white rounded-[20px] p-2 shadow-[0_10px_40px_rgba(0,0,0,0.4)] inline-block">
              {!imageError ? (
                <Image
                  src="/profile.jpeg"
                  alt="Deniz Ulmer"
                  width={300}
                  height={380}
                  className="object-cover rounded-[15px]"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-[300px] h-[380px] bg-gradient-to-br from-gray-700 to-gray-900 rounded-[15px] flex items-center justify-center text-white text-6xl font-bold">
                  A S
                </div>
              )}
            </div>

            {/* Profile Info */}
            <div className="mt-8 ml-2">
              <div className="flex items-start justify-between gap-30">
                <h2 className="text-[#333333] font-bold text-2xl mb-1">
                  Aadil Shah
                </h2>
                {/* Social Icons */}
                <div className="flex gap-3 ">
                  <motion.a
                    href="https://www.instagram.com/adilns786/"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-lg border border-[#333333] flex items-center justify-center hover:bg-[#333333] hover:text-white transition-colors group"
                  >
                    <svg
                      width="18"
                      height="18"
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
                  <motion.a
                    href="https://www.linkedin.com/in/adilns786"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-lg border border-[#333333] flex items-center justify-center hover:bg-[#333333] hover:text-white transition-colors group"
                  >
                    <svg
                      width="18"
                      height="18"
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
                {/* <p className="text-[#808080] text-sm">  </p> */}
              </div>
            </div>
          </div>

          {/* Right Side - Description & Experience */}
          <div className="lg:col-span-3 description-section h-full flex flex-col justify-between ">
            {/* Description */}
            <div className="relative mb-6 mt-4">
              <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <p className="text-[#555555] text-lg leading-relaxed max-w-[525px]">
                Full-stack developer and Computer Engineering student with a
                strong foundation in web and app technologies. Winner of Smart
                India Hackathon 2024 for building a collaborative governance
                platform. Proven track record in leading projects, securing 3x
                hackathon wins, experience on live projects, and publishing at
                IEEE.
              </p>
            </div>

            {/* Experience Table */}
            <div className="space-y-3 mb-16 pl-4 border-l border-gray-600">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="experience-row flex justify-between items-center py-2 border-b border-gray-300/50 hover:bg-white/40 hover:px-4 transition-all duration-300 rounded-lg cursor-pointer text-sm"
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
