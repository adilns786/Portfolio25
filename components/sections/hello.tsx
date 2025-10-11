'use client';

import React from 'react';

export default function ProcessSection() {
  const steps = [
    {
      number: '1',
      title: 'Discover',
      description: 'We uncover what drives your brand through purpose clarity audience insight and business focus.',
      position: 'top-56 left-4'
    },
    {
      number: '2',
      title: 'Request',
      description: 'We analyze your market understand your competitors and identify where you can stand out.',
      position: 'top-40 left-1/2 -translate-x-1/2 -ml-40'
    },
    {
      number: '3',
      title: 'Create',
      description: 'We design a distinct identity using voice visuals and story to build emotional connection.',
      position: 'top-72 left-1/2 -translate-x-1/2 ml-8'
    },
    {
      number: '4',
      title: 'Activate',
      description: 'We launch your brand across all channels creating a consistent experience that grows with you.',
      position: 'top-40 right-4'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-200 relative">
      {/* Header */}
      {/* <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-xl">D</span>
          </div>
          <span className="text-black font-semibold text-xl">Denqid</span>
        </div>
        
        <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div> */}

      {/* Main Content */}
      <div className="pt-2 pb-2 px-4">
        {/* Title Section */}
        <div className="text-center mb-2">
          <p className="text-gray-500 text-lg italic font-serif mb-4">Our Process, Explained</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-black">
            Here's how it works
          </h1>
        </div>

        {/* Cards Container */}
        <div className="relative max-w-7xl mx-auto h-[600px]">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`absolute ${step.position} w-80 bg-white rounded-3xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
            >
              <div className="mb-6">
                <span className="text-8xl font-light text-black leading-none">
                  {step.number}
                </span>
              </div>
              <h3 className="text-2xl font-normal text-black mb-4">
                {step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}