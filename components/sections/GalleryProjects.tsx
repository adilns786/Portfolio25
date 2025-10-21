"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";
import projects from "@/lib/projects";

gsap.registerPlugin(ScrollTrigger);

export default function GalleryProjects() {
  const router = useRouter();

  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 40, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    gsap.fromTo(
      ".header-section",
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.3,
        ease: "back.out(1.2)",
      }
    );
  }, []);

  const handleMouseEnter = (projectId: string) => setHoveredCard(projectId);
  const handleMouseLeave = () => setHoveredCard(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const offset = 2 + Math.random() * 6;
    cursorX.set(e.clientX + offset);
    cursorY.set(e.clientY);
  };

  const handleImageError = (projectId: string) => {
    setImageErrors((prev) => ({ ...prev, [projectId]: true }));
  };

  const handleCardClick = (id: string) => {
    router.push(`/projects`);
    console.log("Clicked project:", id);
  };

  const getFallbackColor = (index: number) => {
    const colors = [
      "from-red-100 to-red-200",
      "from-gray-100 to-gray-200",
      "from-blue-100 to-blue-200",
      "from-purple-100 to-purple-200",
    ];
    return colors[index % colors.length];
  };

  return (
    <div
      className="min-h-screen bg-[#EAEAEA] font-sans overflow-x-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Main Content */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 mt-10 pb-20">
        {/* Title Section */}
        <div className="header-section text-center mb-12 md:mb-20">
          <p className="text-[#808080] text-base md:text-lg font-serif italic mb-2">
            My Artillery
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-[#333333]">
            Recent Major Projects
          </h1>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 xl:gap-12 relative">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative flex flex-col items-center"
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                className="project-card bg-white rounded-[20px] p-5 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden relative cursor-pointer w-full max-w-[500px] md:max-w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Monitor Mockup */}
                <div className="relative mb-4 md:mb-6">
                  <div className="bg-[#333333] rounded-t-[10px] p-2 md:p-3 relative">
                    <div className="bg-gray-800 rounded-[5px] overflow-hidden aspect-[16/10]">
                      {!imageErrors[project.id] ? (
                        <img
                          src={project?.detailsPage?.heroImage}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          onError={() => handleImageError(project.id)}
                        />
                      ) : (
                        <div
                          className={`w-full h-full bg-gradient-to-br ${getFallbackColor(
                            index
                          )} flex items-center justify-center text-white text-xl md:text-4xl font-bold text-center px-4`}
                        >
                          {project.title}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Monitor Stand */}
                  <div className="flex justify-center">
                    <div className="w-16 md:w-24 h-2 bg-[#333333] rounded-b-lg"></div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-20 md:w-32 h-3 bg-[#333333] rounded-b-xl"></div>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/90 via-white/60 to-transparent pointer-events-none rounded-b-[20px]" />
                </div>
              </motion.div>

              {/* Card Footer */}
              <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-3 md:gap-0 mt-3 w-full max-w-[500px] md:max-w-full">
                <h3 className="text-[#333333] font-bold text-xl md:text-2xl">
                  {project.title}
                </h3>
                <div className="flex flex-wrap justify-center md:justify-end gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#EAEAEA] text-[#808080] text-xs md:text-sm px-2 md:px-3 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Button */}
              {hoveredCard === project.id && (
                <motion.button
                  onClick={() => handleCardClick(project.id)}
                  className="fixed w-12 h-12 md:w-16 md:h-16 rounded-full bg-black flex items-center justify-center shadow-lg z-50"
                  style={{
                    left: cursorXSpring,
                    top: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                    pointerEvents: "auto",
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke="#ffffff"
                    strokeWidth="2.5"
                    fill="none"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
