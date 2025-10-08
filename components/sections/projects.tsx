"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Folder } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PortfolioSection = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms for background elements
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y4 = useTransform(scrollYProgress, [0, 1], [120, -120]);

  // Smooth spring animation for parallax
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothY1 = useSpring(y1, springConfig);
  const smoothY2 = useSpring(y2, springConfig);
  const smoothY3 = useSpring(y3, springConfig);
  const smoothY4 = useSpring(y4, springConfig);

  // Handle mouse move for cursor follow effect
  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePosition({
        x: e.clientX - rect.left - rect.width / 2,
        y: e.clientY - rect.top - rect.height / 2
      });
    }
  };

  // Rotating chip animation
  useEffect(() => {
    let animationFrame;
    const animate = () => {
      setRotation(prev => (prev + 0.5) % 360);
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // GSAP infinite upward scroll for content inside the box
  useEffect(() => {
    if (contentRef.current && containerRef.current) {
      const content = contentRef.current;
      const container = containerRef.current;
      const contentHeight = content.scrollHeight;
      const containerHeight = container.clientHeight;

      // Clone content for seamless looping
      content.innerHTML += content.innerHTML;

      let pos = 0;
      const speed = 0.5;

      const animate = () => {
        pos -= speed;
        if (pos <= -contentHeight) pos = 0;
        content.style.transform = `translateY(${pos}px)`;
        requestAnimationFrame(animate);
      };

      animate();
    }
  }, []);

  // Projects data (duplicated for seamless loop)
  const projects = [
    {
      title: "Werde Fit im\nWellnessclub\npuls Stuttgart",
      rating: "5.0",
      brand: "PULS",
      bg: "bg-gradient-to-br from-rose-100 to-rose-50",
      image: "/dummy.png",
      description: "90-tägiger Testlauf\nKeine Kündigungsfrist\nUpgrade auch monatlich"
    },
    {
      title: "FEUERSTEINCARS",
      subtitle: "PREMIUM LUXURY CARS\nUNSER SORTIMENT IST IHR VERTRAUEN",
      brand: "Feuerstein",
      bg: "bg-gradient-to-br from-gray-900 to-gray-800",
      textColor: "text-white"
    },
    {
      title: "Design Project",
      brand: "Brand 3",
      bg: "bg-gradient-to-br from-gray-800 to-gray-700",
      textColor: "text-white"
    },
    {
      title: "ALEKSANDROV AGENCY",
      subtitle: "IMAGES IDEA AND INFLUENCING\nNARRATIVE CONTACT",
      brand: "Aleksandrov",
      bg: "bg-gradient-to-br from-amber-50 to-white"
    },
    {
      title: "Digital Transformation",
      brand: "TechCorp",
      bg: "bg-gradient-to-br from-blue-50 to-blue-100"
    },
    {
      title: "E-Commerce Redesign",
      brand: "ShopNow",
      bg: "bg-gradient-to-br from-green-50 to-green-100"
    },
    {
      title: "Mobile App UI/UX",
      brand: "AppLabs",
      bg: "bg-gradient-to-br from-purple-50 to-purple-100"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[180vh] py-20 overflow-hidden bg-gray-50"
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto px-4 relative">
        {/* Modern Thick Border Frame */}
        <div className="max-w-7xl mx-auto bg-gray-50 rounded-[3rem] p-1 shadow-lg border-2 border-gray-200">
          {/* Inner Content Area with Overflow Hidden */}
          <div
            ref={containerRef}
            className="bg-white rounded-[2.5rem] p-8 overflow-hidden h-[70vh]"
          >
            {/* Infinite Scrolling Content */}
            <div
              ref={contentRef}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={`${index}-${project.title}`}
                  style={{ y: index % 2 === 0 ? smoothY1 : index % 3 === 0 ? smoothY2 : smoothY3 }}
                  className="relative min-h-[300px]"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`${project.bg} ${project.textColor} rounded-3xl p-6 shadow-lg h-full overflow-hidden relative group cursor-pointer`}
                  >
                    {project.image && (
                      <>
                        <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-20 transition-opacity"></div>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </>
                    )}
                    <div className="relative z-10 p-4">
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <div className="flex gap-1">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="mt-12">
                        {project.rating && (
                          <div className="flex items-center gap-1 mb-4">
                            <span className="text-xl font-bold">{project.rating}</span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-yellow-300 text-sm">★</span>
                              ))}
                            </div>
                          </div>
                        )}
                        <h3 className="text-2xl font-bold leading-tight whitespace-pre-line mb-4">
                          {project.title}
                        </h3>
                        {project.subtitle && (
                          <p className="text-xs tracking-[0.2em] uppercase mb-2">
                            {project.subtitle}
                          </p>
                        )}
                        {project.description && (
                          <p className="text-sm mb-4">{project.description}</p>
                        )}
                        <motion.div
                          className="w-10 h-10 bg-rose-800 rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.1, rotate: 90 }}
                        >
                          <span className="text-white text-lg">→</span>
                        </motion.div>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <span className="text-xs font-semibold italic">{project.brand}</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Central Button with Rotating Chip */}
        <motion.div className="relative flex items-center justify-center -mt-20">
          <motion.div
            className="relative z-20"
            animate={{
              x: mousePosition.x * 0.1,
              y: mousePosition.y * 0.1
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-24 h-24 bg-white rounded-full shadow-2xl flex items-center justify-center group cursor-pointer relative overflow-hidden border-2 border-gray-200"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <Folder className="w-8 h-8 text-gray-900 relative z-10 group-hover:text-white transition-colors" />
            </motion.button>

            {/* Rotating "See Recent Work" Chip */}
            <motion.div
              className="absolute top-1/2 left-1/2"
              style={{
                x: Math.cos(rotation * Math.PI / 180) * 120 - 80,
                y: Math.sin(rotation * Math.PI / 180) * 120 - 20,
              }}
            >
              <motion.div
                className="bg-black text-white px-5 py-2 rounded-full shadow-xl whitespace-nowrap font-semibold text-sm"
                animate={{ rotate: rotation }}
                style={{ originX: 0.5, originY: 0.5 }}
              >
                See Recent Work
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-64 h-64 bg-purple-600 rounded-full blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-10"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.1, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </section>
  );
};

export default PortfolioSection;
