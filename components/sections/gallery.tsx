"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function CaseStudiesPortfolio() {
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 40, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Animate header and cards on load
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

  const handleMouseEnter = (projectId: string) => {
    setHoveredCard(projectId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const offset = 2 + Math.random() * 6; // random 2–8px offset to right
    cursorX.set(e.clientX + offset);
    cursorY.set(e.clientY);
  };

  const handleImageError = (projectId: string) => {
    setImageErrors((prev) => ({ ...prev, [projectId]: true }));
  };

  const handleCardClick = (id: string) => {
    console.log("Clicked project:", id);
  };

  const projects = [
    {
      id: "puls",
      name: "Puls",
      tags: ["Wellness", "Fitness"],
      screenshot:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop",
      bgColor: "bg-white",
      fallbackColor: "from-red-900 to-red-700",
    },
    {
      id: "eyecatcher",
      name: "EyeCatcher",
      tags: ["Beauty", "Hairs"],
      screenshot:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=800&fit=crop",
      bgColor: "bg-gray-900",
      fallbackColor: "from-gray-800 to-gray-950",
    },
    {
      id: "project3",
      name: "Project Three",
      tags: ["Design", "Branding"],
      screenshot:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop",
      bgColor: "bg-blue-50",
      fallbackColor: "from-blue-900 to-blue-700",
    },
    {
      id: "project4",
      name: "Project Four",
      tags: ["Tech", "Innovation"],
      screenshot:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop",
      bgColor: "bg-purple-50",
      fallbackColor: "from-purple-900 to-purple-700",
    },
  ];

  return (
    <div
      className="min-h-screen bg-[#EAEAEA] font-sans overflow-x-hidden"
      onMouseMove={handleMouseMove}
    >

      
      {/* Main Content */}
      <div className="max-w-[1600px] mx-auto px-12 pt-32 pb-20">
        {/* Title Section */}
        <div className="header-section text-center mb-20">
          <p className="text-[#808080] text-lg font-serif italic mb-4">
            Our Projects
          </p>
          <h1 className="text-6xl md:text-7xl font-bold text-[#333333]">
            Recent Case Studies
          </h1>
        </div>

        {/* Project Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-12 relative">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative"
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                className="project-card bg-white rounded-[20px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden relative cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Monitor Mockup */}
                <div className="relative mb-6">
                  <div className="bg-[#333333] rounded-t-[10px] p-3 relative">
                    <div className="bg-gray-800 rounded-[5px] overflow-hidden aspect-[16/10]">
                      {!imageErrors[project.id] ? (
                        <img
                          src={project.screenshot}
                          alt={project.name}
                          className="w-full h-full object-cover"
                          onError={() => handleImageError(project.id)}
                        />
                      ) : (
                        <div
                          className={`w-full h-full bg-gradient-to-br ${project.fallbackColor} flex items-center justify-center text-white text-4xl font-bold`}
                        >
                          {project.name[0]}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Monitor Stand */}
                  <div className="flex justify-center">
                    <div className="w-24 h-2 bg-[#333333] rounded-b-lg"></div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-32 h-3 bg-[#333333] rounded-b-xl"></div>
                  </div>

                  {/* Bottom gradient overlay */}
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/90 via-white/60 to-transparent pointer-events-none rounded-b-[20px]" />
                </div>
              </motion.div>

              {/* Card Footer */}
              <div className="flex items-center justify-between mt-4">
                <h3 className="text-[#333333] font-bold text-2xl">
                  {project.name}
                </h3>
                <div className="flex gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#EAEAEA] text-[#808080] text-sm px-3 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Button (Circle) */}
              {hoveredCard === project.id && (
                <motion.button
                  onClick={() => handleCardClick(project.id)}
                  className="fixed w-16 h-16 rounded-full bg-black flex items-center justify-center shadow-lg z-50"
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
