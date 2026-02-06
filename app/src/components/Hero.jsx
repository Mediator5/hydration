import React from 'react';

export default function Hero() {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden" id='home'>
            {/* Decorative curve element */}
            <div className="absolute left-0 bottom-0 w-1/3 h-full">
                <svg
                    className="absolute left-0 bottom-0 w-full h-full"
                    viewBox="0 0 400 800"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0 0 Q200 400 0 800 L0 0 Z"
                        fill="#F5F1ED"
                        opacity="0.8"
                    />
                </svg>
            </div>

            {/* Main content container */}
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left content section */}
                    <div className="space-y-8 z-10">
                        <h1 className="text-5xl font-serif font-light text-gray-800 mb-6 leading-tight">
                            Mobile IV Therapy
                            <br />
                            Delivered to You
                        </h1>

                        <p className="text-gray-500 mb-6  leading-relaxed font-sans">
                            Premium mobile hydration therapy brought directly to your home, office, hotel, or event. Our licensed medical professionals deliver safe, personalized IV treatments designed to help you feel better—fast.</p>

                        <a href="https://intakeq.com/booking/irzpf9" className="bg-teal hover:bg-ocean text-white  py-3 px-6 rounded shadow-lg inline-flex items-center transition duration-300 font-sans">
                            <span className="tracking-wide">BOOK NOW</span>
                            <svg
                                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a>
                    </div>

                    {/* Right image section */}
                    <img src="https://caleblaw.io/wp-content/uploads/2026/01/HYDRATION-SOLUTIONS-Google-Drive-4.png" alt="" style={{ borderTopLeftRadius: '50px', borderBottomRightRadius: '50px' }} />
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-amber-50 to-transparent opacity-50 rounded-full blur-3xl"></div>
        </section>
    );
}