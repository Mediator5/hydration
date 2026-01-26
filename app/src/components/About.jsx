import React from 'react';

// Export default function syntax as requested
export default function Hero() {
  return (
    // Main container (white background overall)
    <section className="bg-gradient-primary " id='about'>
      <div className="container mx-auto px-0 md:px-6 py-12 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left side: Image Container with the custom curve */}
        {/* We use an inline style here to achieve the exact large bottom-right border radius */}
        <div 
          className="md:w-1/2 overflow-hidden shadow-lg"
          style={{ borderBottomRightRadius: '100px' }} // Custom large curve
        >
          <img 
            src="https://caleblaw.io/wp-content/uploads/2026/01/HYDRATION-SOLUTIONS-Google-Drive-3.png" // Replace with your actual image path
            alt="Mobile IV Therapy session"
            className="object-cover w-full h-full min-h-[500px]" // Ensure image covers the area
          />
        </div>

        {/* Right side: Text Content Area */}
        <div className="md:w-1/2 px-6 md:pl-16 mt-8 md:mt-0">
          {/* Main Title - Serif font styling as seen in the image */}
          <h1 className="text-5xl font-serif font-light text-white mb-6 leading-tight">
            Your On-Demand Mobile <br />
            IV Therapy Provider
          </h1>
          
          {/* Body Paragraphs */}
          <p className="text-white mb-6  leading-relaxed">
            We provide convenient, on-demand mobile IV hydration services wherever you need us—at home, at work, in hotels, or at private events and parties. Each IV session is administered by licensed and experienced medical professionals and typically takes 30–45 minutes, making it easy to fit into your day.
          </p>
          <p className="text-white mb-8  leading-relaxed">
            Our custom IV cocktails are designed to support hydration, energy, immunity, recovery, and overall wellness. As a veteran-owned company, we take pride in delivering professional, reliable, and compassionate care you can trust.
          </p>
          
          {/* Call to Action Button */}
          <a href="#booking" className="bg-teal hover:bg-ocean text-white  py-3 px-6 rounded shadow-lg inline-flex items-center transition duration-300 font-sans">
            BOOK NOW →
          </a>
        </div>
      </div>
    </section>
  );
}
