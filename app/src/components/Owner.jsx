import React from 'react';

// Export default function syntax as requested
export default function Owner() {
    return (
        // Main container (white background overall)
        <section className="bg-white" id='owner'>
            <div className="container mx-auto px-0 md:px-6 py-12 flex flex-col md:flex-row items-center justify-between">

                {/* Left side: Image Container with the custom curve */}
                {/* We use an inline style here to achieve the exact large bottom-right border radius */}
                <div
                    className="md:w-1/2 overflow-hidden shadow-lg"
                    style={{ borderBottomRightRadius: '100px' }} // Custom large curve
                >
                    <img
                        src="https://caleblaw.io/wp-content/uploads/2026/01/HYDRATION-SOLUTIONS-Google-Drive-5.png" // Replace with your actual image path
                        alt="Mobile IV Therapy session"
                        className="object-cover w-full h-full min-h-[500px]" // Ensure image covers the area
                    />
                </div>

                {/* Right side: Text Content Area */}
                <div className="md:w-1/2 px-6 md:pl-16 mt-8 md:mt-0">
                    {/* Main Title - Serif font styling as seen in the image */}
                    <h1 className="text-5xl font-serif font-light text-gray-800 mb-6 leading-tight">
                        About the Owner<br />
                       
                    </h1>

                    {/* Body Paragraphs */}
                    <p className="text-gray-500 mb-6  leading-relaxed">
                        Hydration Solution was founded with a mission to provide convenient, high-quality mobile IV therapy that fits seamlessly into everyday life. As a veteran-owned company, our owner brings a strong commitment to service, professionalism, and integrity—ensuring every client receives care they can trust.
                    </p>
                    <p className="text-gray-500 mb-8  leading-relaxed">
                        Focused on safety, convenience, and personalized wellness, Hydration Solution delivers IV therapy directly to homes, offices, hotels, and events. All treatments are administered by licensed medical professionals and customized to support hydration, energy, immunity, recovery, and overall well-being—helping clients feel better, faster.
                    </p>

                    {/* Call to Action Button */}
                    <a href="https://intakeq.com/booking/irzpf9" className="bg-teal hover:bg-ocean text-white  py-3 px-6 rounded shadow-lg inline-flex items-center transition duration-300 font-sans">
                        BOOK NOW →
                    </a>
                </div>
            </div>
        </section>
    );
}
