"use client";
import React, { useState } from "react";
import { Mail, Instagram, Linkedin, Dribbble, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedName from "./svganim";

export default function NavBox() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => setIsOpen(!isOpen);

  const menuItems = [
    "Process",
    "Portfolio",
    "About",
    "Price",
    "FAQ",
    "Contact",
  ];

  const socialIcons = [
    { Icon: Mail, href: "#" },
    { Icon: Instagram, href: "#" },
    { Icon: Linkedin, href: "#" },
    { Icon: Dribbble, href: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      {/* Top Navbar Row */}
      <div className="flex items-center justify-between px-12 py-8">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <AnimatedName width={80} />
        </div>
        <div className="relative">
          <button
            onClick={toggleNav}
            className="z-50 text-[#1E1E1E]/80 bg-white p-2.5 rounded-full hover:scale-110 transition-all border border-white/10"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Animated Dropdown Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="absolute right-0 mt-[15px] bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-200/60 p-5 w-64"
              >
                {/* Menu Items */}
                <nav className="space-y-1">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item}
                      className="relative overflow-hidden rounded-lg"
                      onMouseEnter={() => setHoveredItem(index)}
                      onMouseLeave={() => setHoveredItem(null)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.08,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      whileHover={{ x: 4 }}
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
                        className="relative block px-4 py-2 text-gray-800 font-medium text-lg transition-all duration-200"
                      >
                        {item}
                      </a>
                    </motion.div>
                  ))}
                </nav>

                {/* Social Icons */}
                <div className="mt-8 flex items-center justify-around gap-2">
                  {socialIcons.map(({ Icon, href }, index) => (
                    <motion.a
                      key={index}
                      href={href}
                      className="relative w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300 text-gray-600 transition-all duration-300 hover:border-gray-900 hover:text-gray-900"
                      onMouseEnter={() => setHoveredIcon(index)}
                      onMouseLeave={() => setHoveredIcon(null)}
                      initial={{ opacity: 0, scale: 0.5, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.5, y: 10 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.5 + index * 0.06,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      whileHover={{
                        scale: 1.15,
                        rotate: 6,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
