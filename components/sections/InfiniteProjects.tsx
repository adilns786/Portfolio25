"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Folder } from "lucide-react";
import projects from "@/lib/projects";

const InfiniteProjects = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Handle mouse move for cursor follow effect
  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePosition({
        x: e.clientX - rect.left - rect.width / 2,
        y: e.clientY - rect.top - rect.height / 2,
      });
    }
  };

  // Infinite upward scroll with different speeds for each column
  useEffect(() => {
    if (!leftColumnRef.current || !rightColumnRef.current) return;

    const leftColumn = leftColumnRef.current;
    const rightColumn = rightColumnRef.current;

    let leftPos = 0;
    let rightPos = 0;
    const leftSpeed = 0.6; // Slower
    const rightSpeed = 0.9; // Faster

    let animationFrame;
    const animate = () => {
      leftPos -= leftSpeed;
      rightPos -= rightSpeed;

      const leftHeight = leftColumn.scrollHeight / 2;
      const rightHeight = rightColumn.scrollHeight / 2;

      if (leftPos <= -leftHeight) leftPos = 0;
      if (rightPos <= -rightHeight) rightPos = 0;

      leftColumn.style.transform = `translateY(${leftPos}px)`;
      rightColumn.style.transform = `translateY(${rightPos}px)`;

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  // Generate dynamic background colors
  const getBackgroundColor = (index) => {
    const colors = ["bg-white", "bg-white", "bg-white", "bg-white", "bg-white"];
    return colors[index % colors.length];
  };

  // Split projects into two columns
  const leftProjects = projects.filter((_, i) => i % 2 === 0);
  const rightProjects = projects.filter((_, i) => i % 2 !== 0);

  const ProjectCard = ({ project, index }) => (
    <div className="relative mb-6 w-full">
      <div
        className={`${getBackgroundColor(
          index
        )} text-black rounded-xl p-4 sm:p-6 md:p-8 h-[250px] sm:h-[320px] md:h-[380px] overflow-hidden relative`}
      >
        {/* Background Image */}
        {project.thumbnail && (
          <>
            <img
              src={project.thumbnail}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </>
        )}

        {/* Foreground Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-2 sm:p-4 md:p-6">
          {/* Window Control Circles */}
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <div className="flex gap-1">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight mb-2 sm:mb-3">
              {project.title}
            </h3>

            {project.duration && (
              <p className="text-[10px] sm:text-xs tracking-wide uppercase mb-2 sm:mb-3 opacity-90">
                {project.duration}
              </p>
            )}

            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {project.tags.slice(0, 3).map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] sm:text-xs px-2 py-0.5 bg-white/10 rounded-full backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {project.techStack && project.techStack.length > 0 && (
            <div className="mt-3 sm:mt-4 text-[10px] sm:text-xs italic opacity-70">
              <span>{project.techStack[0]}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-2 overflow-hidden bg-gray-100"
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto px-4 relative">
        {/* Modern Thick Border Frame */}
        <div className="max-w-7xl mx-auto h-[120vh] bg-white/40 rounded-[2rem] p-2 shadow-lg ">
          {/* Inner Content Area with Overflow Hidden */}
          <div
            ref={containerRef}
            className="bg-neutral-800 rounded-[1.8rem] px-3 md:px-8 overflow-hidden h-full relative"
          >
            {/* Light Colored Overlay with Top and Bottom Vignette */}
            <div className="absolute inset-0 z-20 pointer-events-none rounded-[2rem]">
              {/* Top vignette */}
              <div className="absolute top-0 left-0 right-0 h-3/5 bg-gradient-to-b from-black/65 via-black/40 to-transparent rounded-t-[2rem]" />
              {/* Bottom vignette */}
              {/* <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-amber-100/40 via-amber-100/20 to-transparent rounded-b-[2.5rem]" /> */}
              {/* Overall light overlay */}
              {/* <div className="absolute inset-0 bg-amber-50/10 rounded-[2.5rem]" /> */}
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-6 h-full">
              {/* Left Column - Slower - Duplicated for infinite scroll */}
              <div className="overflow-hidden">
                <div ref={leftColumnRef}>
                  {[...leftProjects, ...leftProjects].map((project, idx) => (
                    <ProjectCard
                      key={`${project.id}-${idx}`}
                      project={project}
                      index={(idx % leftProjects.length) * 2}
                    />
                  ))}
                </div>
              </div>

              {/* Right Column - Faster - Duplicated for infinite scroll */}
              <div className="overflow-hidden">
                <div ref={rightColumnRef}>
                  {[...rightProjects, ...rightProjects].map((project, idx) => (
                    <ProjectCard
                      key={`${project.id}-${idx}`}
                      project={project}
                      index={(idx % rightProjects.length) * 2 + 1}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Central Floating Button - ONLY INTERACTIVE ELEMENT */}
        <motion.div
          className="pointer-events-none absolute inset-0 flex items-center justify-center z-30"
          style={{
            y: useSpring(useTransform(scrollYProgress, [0, 1], [0, 200]), {
              stiffness: 40,
              damping: 20,
            }),
          }}
        >
          <motion.div
            className="relative flex flex-col items-center justify-center gap-4 pointer-events-auto"
            animate={{
              x: mousePosition.x * 0.1,
              y: mousePosition.y * 0.1,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
          >
            {/* Main Floating Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-24 h-24 bg-white rounded-full shadow-2xl flex items-center justify-center group cursor-pointer relative overflow-hidden border-2 border-gray-200"
            >
              <motion.div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Folder className="w-8 h-8 text-gray-900 relative z-10 group-hover:text-white transition-colors" />
            </motion.button>

            {/* Animated "See Recent Work" Chip */}
            <motion.div
              className="text-white font-semibold text-sm tracking-wide bg-black backdrop-blur-md px-4 py-4 rounded-full shadow-md"
              animate={{
                y: [0, -8, 0],
                rotate: [-3, 3, -3],
                opacity: [0.9, 1, 0.9],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ✨ See Recent Work ✨
            </motion.div>

            {/* Soft floating shadow below the island */}
            <motion.div
              className="absolute bottom-[-25px] left-1/2 -translate-x-1/2 w-32 h-6 bg-black/10 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      {/* <motion.div
        className="absolute top-1/4 left-10 w-64 h-64 bg-purple-600 rounded-full blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-10"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.1, 0.15],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      /> */}
    </section>
  );
};

export default InfiniteProjects;
