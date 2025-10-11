
"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Mail, Instagram, Linkedin, Dribbble, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import AnimatedName from './svganim';

// NavBox Component
interface NavBoxProps {
  isOpen: boolean;
  toggleNav: () => void;
}

export default function NavBox( { isOpen, toggleNav }: NavBoxProps) {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
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