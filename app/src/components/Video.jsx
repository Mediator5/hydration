import { useRef, useState } from "react";

export default function Video({
  title = "Experience Mobile IV Therapy",
  description = "See how our licensed professionals deliver premium hydration therapy directly to your home, office, or hotel.",
  videoSrc = "https://caleblaw.io/wp-content/uploads/2026/01/Copy-of-IMG_4545.mov",
}) {


  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Text */}
        <h2 className="text-5xl font-serif font-light text-gray-800 mb-6 leading-tight">
          {title}
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          {description}
        </p>

        {/* Video */}
        <div className="relative mt-12 h-[420px] md:h-[520px] rounded-2xl overflow-hidden shadow-xl ">
          <video
           
            src={videoSrc}
            poster="https://caleblaw.io/wp-content/uploads/2026/01/HYDRATION-SOLUTIONS-Google-Drive-2.png"
           className="absolute inset-0 w-full h-full object-cover"
            playsInline
            controls
            autoPlay
            muted
            loop
          />

        </div>
      </div>
    </section>
  );
}
