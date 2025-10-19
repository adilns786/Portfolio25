"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const blobRefs = useRef([]);
  const cursorRef = useRef(null);

  useEffect(() => {
    // Animate background blobs
    blobRefs.current.forEach((blob, i) => {
      gsap.to(blob, {
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 2,
      });
    });

    // Custom cursor follow effect with proper positioning
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          left: e.clientX,
          top: e.clientY,
          duration: 0.8,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              ref={(el) => (blobRefs.current[i] = el)}
              className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
              style={{
                backgroundColor:
                  i === 0 ? "#E5E7EB" : i === 1 ? "#DBEAFE" : "#FCE7F3",
                top: i === 0 ? "20%" : i === 1 ? "60%" : "20%",
                left: i === 0 ? "10%" : i === 1 ? "auto" : "50%",
                right: i === 1 ? "10%" : "auto",
              }}
            />
          ))}
        </div>

        {/* Custom cursor follower - Fixed positioning */}
        <div
          ref={cursorRef}
          className="hidden lg:block fixed w-4 h-4 bg-black/20 rounded-full pointer-events-none z-50"
          style={{
            transform: "translate(-50%, -50%)",
            left: 0,
            top: 0,
          }}
        />

        {/* Available to work badge */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            className="bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-800">
              Open to opportunities
            </span>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <motion.h1
            className="font-bold text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.span
              className="inline-block text-black"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Building
            </motion.span>{" "}
            <motion.span
              className="inline-block relative"
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="inline-flex items-center justify-center bg-white border-4 border-black rounded-2xl px-4 py-2 shadow-lg">
                <span className="text-3xl">💻</span>
              </span>
            </motion.span>{" "}
            <motion.span
              className="inline-block text-gray-400"
              whileHover={{ scale: 1.05, color: "#1f2937" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Digital
            </motion.span>
            <br />
            <motion.span
              className="inline-block relative mt-2"
              whileHover={{ scale: 1.05, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="inline-flex items-center justify-center bg-gradient-to-br from-gray-800 to-black rounded-3xl px-6 py-3 shadow-2xl">
                <span className="text-4xl">✨</span>
              </span>
            </motion.span>{" "}
            <motion.span
              className="inline-block text-black"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Experiences
            </motion.span>
          </motion.h1>

          <motion.p
            className="mt-8 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Full-stack developer crafting elegant solutions
            <br />
            that merge creativity with functionality.
          </motion.p>

          {/* Tech Stack Pills */}
          {/* <motion.div
            className="flex flex-wrap justify-center gap-3 mt-8 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind'].map((tech, i) => (
              <motion.span
                key={tech}
                className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-md border border-gray-200"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div> */}

          {/* CTA Buttons */}
          <motion.div
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <motion.button
              className="group relative bg-black text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                View My Work
                <motion.span
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  →
                </motion.span>
              </span>
              {isHovered && (
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              )}
            </motion.button>

            {/* <motion.button
              className="bg-white text-gray-800 px-8 py-4 rounded-full text-lg font-semibold shadow-lg border-2 border-gray-200"
              whileHover={{ scale: 1.05, borderColor: "#000" }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button> */}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute -bottom- -right-60 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Animated group (mouse + text move together) */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center"
            >
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2" />
              </div>
              <span className="text-gray-500 text-sm mt-1 tracking-wide">
                Scroll
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </>
  );
};

export default Hero;