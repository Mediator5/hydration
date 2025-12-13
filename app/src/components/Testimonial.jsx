// TestimonialSection.jsx
import React, { useState } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        quote: "CalebLaw guided me through the most stressful period of my life with clarity, skill, and genuine care. Their strategic approach changed the outcome of my case entirely. I’m forever grateful for their dedication.",
        name: "Michael R.",
        title: "Former Client",
    },
    {
        id: 2,
        quote: "Professional, responsive, and exceptionally thorough. CalebLaw handled my matter with unmatched expertise and discretion. I trusted them completely, and they delivered beyond every expectation.",
        name: "Sarah K.",
        title: "Business Owner",
    },
    {
        id: 3,
        quote: "Their knowledge of the legal system is extraordinary. CalebLaw walked me through every step, fought hard on my behalf, and secured a result I didn’t think was possible. Truly outstanding representation.",
        name: "David L.",
        title: "Client",
    },
];




export default function Testimonial() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[currentIndex];

    // Reusable button styles for navigation
    const navButtonClasses = "p-3 rounded-full bg-gold-600 text-white hover:bg-gold-700 transition duration-200 shadow-md disabled:opacity-50 disabled:cursor-not-allowed";

    return (
        <section className="bg-gray-50 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading Div */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl font-heading">
                        Trusted by Our Clients
                    </h2>
                    {/* 5 Stars under heading */}
                    <div className="flex justify-center mt-4 space-x-1">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                        ))}
                    </div>
                </div>

                {/* Content Div - Controls position of arrows */}
                <div className="relative">

                    {/* Testimonial Content Box */}
                    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-xl">
                        <p className="text-xl md:text-2xl italic text-gray-700 mb-6 text-center">
                            "{currentTestimonial.quote}"
                        </p>
                        <div className="font-semibold text-gray-900 text-center">
                            {currentTestimonial.name}
                        </div>
                        <div className="text-sm text-gray-500 text-center">
                            {currentTestimonial.title}
                        </div>
                    </div>

                    {/* Navigation Arrows (Desktop position: beside the box) */}
                    <div className="hidden md:block absolute top-1/2 left-0 right-0 transform -translate-y-1/2 px-4">
                        <div className="flex justify-between max-w-5xl mx-auto">
                            <button onClick={prevTestimonial} className={navButtonClasses} aria-label="Previous Testimonial">
                                <ArrowLeft className="w-6 h-6" />
                            </button>
                            <button onClick={nextTestimonial} className={navButtonClasses} aria-label="Next Testimonial">
                                <ArrowRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Navigation Arrows (Mobile position: below the box) */}
                    <div className="flex justify-center mt-8 md:hidden space-x-6">
                        <button onClick={prevTestimonial} className={navButtonClasses} aria-label="Previous Testimonial">
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                        <button onClick={nextTestimonial} className={navButtonClasses} aria-label="Next Testimonial">
                            <ArrowRight className="w-6 h-6" />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
