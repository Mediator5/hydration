import React from 'react';

// Export default function syntax as requested
export default function HowItWorks() {
  
  // A reusable component for a single step
  const StepCard = ({ number, title, description }) => (
    <div className="flex flex-col items-center text-center px-4">
      {/* The number/step indicator circle */}
      {/* Note: The image's background wave is a single SVG/shape, not part of these individual divs */}
      <div className="w-24 h-24 bg-bronze rounded-full flex items-center justify-center text-white font-serif text-3xl font-medium mb-12 shadow-lg">
        {number}
      </div>

      {/* Title */}
      <h3 className="text-xl font-serif text-gray-800 mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
        {description}
      </p>
    </div>
  );

  return (
    // Main section container with a clean white background
    <section className="bg-white py-20 px-6" id='how'>
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header and Subtitle (Centered) */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-light text-gray-800 mb-4">
            How It Works
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Getting started with mobile IV therapy is quick and easy. Our streamlined process allows you to choose your service, book your appointment, and relax while we take care of the rest.
          </p>
        </div>

        {/* Steps Grid - Relative position for the background wave effect */}
        <div className="relative flex justify-center mb-12">
          
          {/* The Wavy Background Element */}
          {/* This SVG is a close representation of the visual wave line connecting the steps in the image */}
          <div className="absolute top-8 left-0 right-0 z-0">
            <svg width="100%" height="40" viewBox="0 0 1000 40" preserveAspectRatio="none">
              <path 
                d="M0,20 Q150,0 250,20 T500,20 T750,20 T1000,20" 
                stroke="#d6d3d1" // light gray color for the line
                strokeWidth="1.5" 
                fill="none"
              />
            </svg>
          </div>

          {/* Cards Container (z-10 to appear above the wave line) */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-full justify-items-center">
            <StepCard 
              number="01"
              title="Choose Your IV Service"
              description="Select from our menu of hydration and wellness IVs or request a custom cocktail tailored to your needs."
            />
            <StepCard 
              number="02"
              title="Book Your Nurse"
              description="Schedule your appointment online at a time and location that works best for you—home, office, hotel, or event."
            />
            <StepCard 
              number="03"
              title="Feel Better Fast"
              description="Relax while a licensed medical professional administers your IV. Most sessions take 30–45 minutes, and many clients feel results the same day."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
