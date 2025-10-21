"use client";

import React from "react";
import CircularGallery from "./CircularGallery";

export default function Achievements() {
  return (
    <div className="bg-[#eaeaea]">
      <div className="text-center ">
        <p className="text-gray-500 text-lg italic font-serif mb-4">
          Our Process, Explained
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-black">
          Here's My Achievements
        </h1>
      </div>
      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery
          bend={2}
          textColor="#000000"
          borderRadius={0.05}
          scrollEase={0.02}
          styles={" mt-0 "}
        />
      </div>
    </div>
  );
}
