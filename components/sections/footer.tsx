"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Mail, Linkedin, Instagram } from "lucide-react";

export default function ContactPage() {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Animate elements on load
    gsap.fromTo(
      ".subtitle",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power3.out" }
    );

    gsap.fromTo(
      ".main-title",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.4, ease: "power3.out" }
    );

    gsap.fromTo(
      ".description",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: "power3.out" }
    );

    gsap.fromTo(
      ".cta-button",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.6, delay: 0.8, ease: "back.out(1.2)" }
    );
  }, []);

  return (
    <div className="min-h-screen  text-white font-sans relative overflow-hidden">
      {/* Subtle texture overlay */}
      {/* <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      /> */}

      {/* Light glow from top-left */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-white/5 to-transparent blur-3xl pointer-events-none" />

      {/* Main container with rounded corners and padding */}
      <div className="min-h-screen p-2.5 flex flex-col">
        <div
          className="flex-1 bg-gradient-to-br from-[#120D0A]/90 to-[#000000]/95 rounded-[25px] backdrop-blur-sm border border-white/5 flex flex-col relative overflow-hidden pt-20"
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.12]"
            style={{
              backgroundImage: "url('/bgnoise.png')", // your noise texture file
              backgroundRepeat: "repeat",
              backgroundSize: "100px 100px", // adjust for density; try 200px for softer texture
              mixBlendMode: "normal",
            }}
          />
          {/* Diagonal light streaks */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[60%] bg-gradient-to-br from-white/[0.02] to-transparent rotate-[-15deg] blur-2xl" />
          </div>

          {/* Main Content */}
          <main className="flex-1 flex flex-col items-center justify-center px-8 pb-20 ">
            {/* Subtitle with decorative lines */}
            <div className="subtitle flex items-center gap-4 mb-8">
              <div className="w-16 h-px bg-[#555555]" />
              <p className="text-[#BBBBBB] text-xl font-serif italic">
                Available to work
              </p>
              <div className="w-16 h-px bg-[#555555]" />
            </div>

            {/* Main Title */}
            <h1 className="main-title text-7xl  mb-6 text-center tracking-tight">
              Let's{" "}
              <span className="bg-gradient-to-b from-[#CCCCCC] to-[#888888] bg-clip-text text-transparent">
                Connect
              </span>
            </h1>

            {/* Description */}
            <p className="description text-[#BBBBBB] text-lg text-center max-w-md mb-12 leading-relaxed font-light">
              Feel free to contact me if having any questions.
              <br />
              I'm available for new projects or just for chatting.
            </p>

            {/* CTA Button */}
            <motion.button
              className="cta-button group relative flex items-center gap-4 px-8 py-4 bg-[#2A2A2A] border border-[#555555] rounded-full shadow-lg hover:bg-[#3A3A3A] hover:border-[#777777] hover:shadow-2xl transition-all duration-300"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-white text-lg font-medium">
                Book a Meeting
              </span>
              <div className="w-8 h-8 bg-[#555555] group-hover:bg-[#777777] rounded-full flex items-center justify-center transition-colors duration-300">
                <motion.svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  animate={{ x: isHovered ? 2 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </motion.svg>
              </div>
            </motion.button>
          </main>

          {/* Footer */}
          <footer className="relative z-10 h-20 flex items-center justify-between px-12 border-t border-white/5">
            {/* Copyright and Legal */}
            <div className="flex items-center gap-6 text-[#777777] text-sm font-light">
              <span>© Aadil, 2025</span>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Legal Notice
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <motion.a
                href="#"
                className="w-10 h-10 border border-[#444444] rounded-full flex items-center justify-center text-[#777777] hover:text-white hover:border-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={18} />
              </motion.a>

              <motion.a
                href="#"
                className="w-10 h-10 border border-[#444444] rounded-full flex items-center justify-center text-[#777777] hover:text-white hover:border-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                </svg>
              </motion.a>

              <motion.a
                href="#"
                className="w-10 h-10 border border-[#444444] rounded-full flex items-center justify-center text-[#777777] hover:text-white hover:border-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={18} />
              </motion.a>

              <motion.a
                href="#"
                className="w-10 h-10 border border-[#444444] rounded-full flex items-center justify-center text-[#777777] hover:text-white hover:border-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram size={18} />
              </motion.a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
