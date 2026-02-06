import React from 'react';

// Export default function syntax as requested
export default function ServicesSection() {

  // The provided image URL to be used for all cards
  const sharedImageUrl = "https://coolwaveconsulting.com/wp-content/uploads/2023/11/a-healthcare-worker-examining-pregnant-woman-indoors-at-home-.jpg";

  // A reusable component for a single service card matching the image design
  const ServiceCard = ({ title, description, imgSrc }) => {
    return (
      <div className=" rounded-lg  overflow-hidden flex flex-col h-full">

        {/* Image container with specific top corner rounding matching the image design */}
        {/* We use an inline style to precisely match the large, rounded top-left and top-right curve */}
        <div
          className="h-64 overflow-hidden relative"
          style={{ borderTopLeftRadius: '50px', borderBottomRightRadius: '50px' }}
        >
          <img
            src={imgSrc} // Using the shared URL
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed flex-grow">
            {description}
          </p>
          <a href='https://intakeq.com/booking/irzpf9' className="bg-teal hover:bg-ocean text-white  py-3 px-6 rounded shadow transition duration-300 inline-flex items-center text-sm">
            BOOK NOW →
          </a>
        </div>
      </div>
    );
  };

  return (
    // Main section container with a light background color matching the image
    <section className="bg-gray-50 py-20 px-6" id='services'>
      <div className="container mx-auto max-w-7xl">

        {/* Section Header and Subtitle (Centered) */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-light text-gray-800 mb-4">
            Services We Offer
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Experience personalized IV therapy without the clinic visit. Our licensed professionals deliver custom hydration and wellness drips wherever you are—providing fast, convenient care designed around your lifestyle.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <ServiceCard
            imgSrc={'https://caleblaw.io/wp-content/uploads/2026/01/HYDRATION-SOLUTIONS-Google-Drive.png'}
            title="Hydration IV"
            description="Replenish essential fluids and electrolytes to combat dehydration, fatigue, and headaches. Perfect for travel recovery, busy schedules, or general wellness support."
          />
          <ServiceCard
            imgSrc={'https://caleblaw.io/wp-content/uploads/2026/01/IMG_0333.jpg'}
            title="Immune Boost IV"
            description="Support your immune system with a powerful blend of vitamins and nutrients designed to help your body stay strong and resilient year-round."
          />
          <ServiceCard
            imgSrc={'https://caleblaw.io/wp-content/uploads/2026/01/HYDRATION-SOLUTIONS-Google-Drive-3.png'}
            title="Athlete Recovery Drip"
            description="Speed up recovery and reduce muscle soreness with a custom IV formulated to support performance, endurance, and post-workout recovery."
          />
        </div>
      </div>
    </section>
  );
}
