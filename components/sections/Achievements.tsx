"use client";

import React from "react";
import CircularGallery from "./CircularGallery";

export default function Achievements() {
  return (
    <div className="bg-[#eaeaea]">
      {/* Header */}
      <div className="text-center   md:-mb-6">
        <p className="text-gray-500 italic font-serif mb-1">
          Our Process, Explained
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-black">
          Here's My Achievements
        </h1>
      </div>

      {/* Gallery Section */}
      <div className="relative h-[300px] md:h-[600px]">
        <CircularGallery
          bend={2}
          textColor="#000000"
          borderRadius={0.05}
          scrollEase={0.02}
          styles={"mt-0"}
        />
      </div>
    </div>
  );
}
