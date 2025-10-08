"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Mail, Instagram, Linkedin, Dribbble, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

// NavBox Component
const NavBox = ({ isOpen, toggleNav }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const menuItems = ['Process', 'Portfolio', 'About', 'Price', 'FAQ', 'Contact'];
  const socialIcons = [
    { Icon: Mail, href: '#' },
    { Icon: Instagram, href: '#' },
    { Icon: Linkedin, href: '#' },
    { Icon: Dribbble, href: '#' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="fixed top-8 right-8 z-50 rounded-3xl shadow-2xl p-8 w-64 bg-white transition-all duration-300 hover:shadow-3xl"
        >
          <button
            onClick={toggleNav}
            className="absolute -top-3 -right-3 bg-gray-800 text-white p-2 rounded-full hover:scale-110 transition-all"
          >
            <X size={16} />
          </button>
          <nav className="space-y-1">
            {menuItems.map((item, index) => (
              <motion.div
                key={item}
                className="relative overflow-hidden rounded-lg"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                whileHover={{ x: 2 }}
              >
                {hoveredItem === index && (
                  <motion.div
                    layoutId="hoverBackground"
                    className="absolute inset-0 bg-gray-100 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative block px-4 py-3 text-gray-800 font-medium text-lg transition-all duration-200"
                >
                  {item}
                </a>
              </motion.div>
            ))}
          </nav>
          <div className="mt-8 flex items-center justify-around gap-2">
            {socialIcons.map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                className="relative w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-300 text-gray-600 transition-all duration-300 hover:border-gray-900 hover:text-gray-900"
                onMouseEnter={() => setHoveredIcon(index)}
                onMouseLeave={() => setHoveredIcon(null)}
                animate={{
                  scale: hoveredIcon === index ? 1.1 : 1,
                  rotate: hoveredIcon === index ? 6 : 0,
                }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Hero Component
const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const blobRefs = useRef([]);

  useEffect(() => {
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
  }, []);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

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
                backgroundColor: i === 0 ? '#E5E7EB' : i === 1 ? '#DBEAFE' : '#FCE7F3',
                top: i === 0 ? '20%' : i === 1 ? '60%' : '20%',
                left: i === 0 ? '10%' : i === 1 ? 'auto' : '50%',
                right: i === 1 ? '10%' : 'auto',
              }}
            />
          ))}
        </div>

        {/* Logo */}
        <div className="absolute top-8 left-8">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">D</span>
            </div>
            <span className="text-black">Denqid</span>
          </div>
        </div>

        {/* Available to work badge */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            className="bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 hover:shadow-xl transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-800">Available to work</span>
          </motion.div>
        </div>

        {/* NavBox Toggle Button */}
        <button
          onClick={toggleNav}
          className="fixed top-8 right-8 z-50 bg-gray-800 text-white p-3 rounded-full hover:scale transition-all"
        >
          {isNavOpen ? <X size={16} /> : <Menu size={16} />}
        </button>

        {/* Main Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <motion.h1
            className="font-bold text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              className="inline-block text-black transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              Brands
            </motion.span>{' '}
            <motion.span
              className="inline-block relative"
              whileHover={{ rotate: 2, scale: 1.05 }}
            >
              <span className="inline-flex items-center justify-center bg-white border-4 border-black rounded-2xl px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300">
                <span className="text-3xl">📊</span>
              </span>
            </motion.span>{' '}
            <motion.span
              className="inline-block text-gray-400 transition-all duration-300 hover:text-gray-600"
              whileHover={{ scale: 1.05 }}
            >
              Grow Fast
            </motion.span>
            <br />
            <motion.span
              className="inline-block relative mt-2"
              whileHover={{ scale: 1.05 }}
            >
              <span className="inline-flex items-center justify-center bg-gradient-to-br from-gray-800 to-black rounded-3xl px-6 py-3 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <span className="text-4xl">🚀</span>
              </span>
            </motion.span>{' '}
            <motion.span
              className="inline-block text-black transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              With us
            </motion.span>
          </motion.h1>

          <motion.p
            className="mt-8 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            We don't just make Brands pretty — we craft<br />
            smart design that fuels real business growth.
          </motion.p>

          {/* CTA Button */}
          <motion.div className="mt-12" whileHover={{ scale: 1.05 }}>
            <button
              className="group relative bg-black text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="relative z-10 flex items-center gap-3">
                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">D</span>
                </span>
                Book a Meeting
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
              {isHovered && (
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 animate-shimmer" />
              )}
            </button>
          </motion.div>
        </div>

        {/* Bottom testimonial section */}
        <motion.div
          className="absolute bottom-8 left-8 bg-gray-800 text-white px-6 py-4 rounded-2xl shadow-2xl max-w-xs hover:scale-105 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <p className="text-sm font-semibold mb-1">Wande Film</p>
          <p className="text-xs text-gray-400">Marketing Lead</p>
        </motion.div>
      </section>

      <NavBox isOpen={isNavOpen} toggleNav={toggleNav} />

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </>
  );
};

export default Hero;
