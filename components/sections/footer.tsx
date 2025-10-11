"use client";

import React from "react";

export default function ContactSection() {
  return (
    <div className="min-h-screen rounded-3xl m-2 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 via-transparent to-transparent pointer-events-none"></div>

      {/* Main Content */}
      <div className=" relative z-10 flex flex-col items-center justify-center  px-6 md:px-1 text-center">
        {/* Subtitle */}
        <p className="text-gray-400 text-base md:text-lg italic font-serif mb-8 md:mb-10">
          Available to work
        </p>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-8 md:mb-10">
          <span className="text-white">Let's </span>
          <span className="text-gray-500">Connect</span>
        </h1>

        {/* Description */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-2">
            Feel free to contact me if having any questions.
          </p>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            I'm available for new projects or just for chatting.
          </p>
        </div>

        {/* CTA Button */}
        <button className="group relative overflow-hidden bg-gray-800/60 backdrop-blur-sm hover:bg-gray-700/60 text-white px-8 md:px-10 py-4 md:py-5 rounded-full border-2 border-gray-600/50 hover:border-gray-500/50 transition-all duration-300 flex items-center gap-3 shadow-2xl hover:shadow-3xl hover:scale-105">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="3"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12h8M12 8l4 4-4 4" />
            </svg>
          </div>
          <span className="text-base md:text-lg font-medium">
            Book a Meeting
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="group-hover:translate-x-1 transition-transform"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Footer */}
      <div className="relative z-10 px-6 md:px-12 pb-8 ">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-gray-800 pt-8">
          {/* Copyright and Links */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm md:text-base">
            <span className="text-white">© Denqid, 2025</span>
            <span className="text-gray-600">|</span>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-300 transition-colors"
            >
              Legal Notice
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-12 h-12 rounded-full border border-gray-700 hover:border-gray-500 flex items-center justify-center transition-all hover:scale-110 hover:bg-gray-800/50"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full border border-gray-700 hover:border-gray-500 flex items-center justify-center transition-all hover:scale-110 hover:bg-gray-800/50"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full border border-gray-700 hover:border-gray-500 flex items-center justify-center transition-all hover:scale-110 hover:bg-gray-800/50"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full border border-gray-700 hover:border-gray-500 flex items-center justify-center transition-all hover:scale-110 hover:bg-gray-800/50"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                <line x1="12" y1="2" x2="12" y2="22" />
                <path d="M17 2v20" />
                <path d="M7 2v20" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
