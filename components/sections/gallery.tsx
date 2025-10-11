"use client";
import React, { useEffect, useState ,useRef} from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function CaseStudiesPortfolio() {
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
const lastMousePos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

// Track global mouse position
useEffect(() => {
  const updateMousePos = (e: MouseEvent) => {
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };
  window.addEventListener("mousemove", updateMousePos);
  return () => window.removeEventListener("mousemove", updateMousePos);
}, []);

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

  // Handle entry direction detection
  const handleMouseEnter = (e: React.MouseEvent, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Detect entry side (left/right/top/bottom)
    const fromLeft = x < rect.width / 4;
    const fromRight = x > (3 * rect.width) / 4;
    const fromTop = y < rect.height / 4;
    const fromBottom = y > (3 * rect.height) / 4;

    let startX = x;
    let startY = y;

    if (fromLeft) startX = -50;
    else if (fromRight) startX = rect.width + 50;
    if (fromTop) startY = -50;
    else if (fromBottom) startY = rect.height + 50;

    cursorX.set(startX);
    cursorY.set(startY);

    setHoveredCard(index);
  };

  // Track movement and apply slight offset
  const handleMouseMove = (e: React.MouseEvent, cardIndex: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offset = 2 + Math.random() * 6; // random 2–8px offset to right
    cursorX.set(e.clientX - rect.left + offset);
    cursorY.set(e.clientY - rect.top);
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
    <div className="min-h-screen bg-[#EAEAEA] font-sans overflow-x-hidden">
      {/* Header */}
      <div className="relative">
        {/* Logo */}
        <div className="absolute top-8 left-12 flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-sm z-20">
          <div className="w-6 h-6 bg-[#333333] rounded flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
              <path
                d="M7 2v10M2 7h10"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="text-[#333333] font-bold text-lg">Denqid</span>
        </div>

        {/* Menu Icon */}
        <button className="absolute top-8 right-12 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow z-20">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#333333"
            strokeWidth="2"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

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
          {projects.map((project, index) => (
            <div key={project.id} className="relative">
              <motion.div
                className="project-card bg-white rounded-[20px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden relative cursor-pointer"
                onMouseEnter={(e) => handleMouseEnter(e, index)}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Hover Circle */}
                {hoveredCard === index && (
                  <motion.button
                    onClick={() => handleCardClick(project.id)}
                    className="absolute w-16 h-16 rounded-full bg-black flex items-center justify-center shadow-lg z-10"
                    style={{
                      left: cursorXSpring,
                      top: cursorYSpring,
                      translateX: "-50%",
                      translateY: "-50%",
                      pointerEvents: "auto",
                    }}
                    whileHover={{ scale: 1.05 }}
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
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-[#EAEAEA] text-[#808080] text-sm px-3 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
