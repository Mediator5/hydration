
// HeroSectionComplex.jsx
import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
    const primaryButtonClasses = "bg-gold-600 hover:bg-gold-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-200";

    // Placeholder images for brands (replace with actual logos)
    const brands = [
        'cdn.tailgrids.com',
        'cdn.tailgrids.com',
        'cdn.tailgrids.com',
        'cdn.tailgrids.com',
        'cdn.tailgrids.com',
        'cdn.tailgrids.com',
    ];

    return (
        <section className="bg-blue-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

                {/* Main 2-column layout (flex-col on mobile, md:flex-row on desktop) */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Left Column: H1, Paragraph, Button, Review Box */}
                    <div className="md:w-1/2 lg:pr-10">
                        <h1 className=" font-heading text-5xl font-extrabold text-white sm:text-6xl leading-tight">
                            Future-focused and dedicated to excellence.
                        </h1>
                        <p className="mt-6 text-xl text-white">
                            CalebLaw is an elite law practice that helps clients anticipate whats next and navigate a path to success. At CalebLaw, we are focused on results through strategic collaboration.
                        </p>

                        {/* Consultation Button */}
                        <div className="mt-10">
                            <Link to="/contact" className={primaryButtonClasses}>
                                Get a Consultation
                            </Link>
                        </div>

                        {/* Review Quote Div (Rounded Border) */}
                        <div className="mt-12 p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm">
                            <div className="flex items-center mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-700 italic">
                                "CalebLaw guided me through the most stressful period of my life with clarity, skill, and genuine care. Their strategic approach changed the outcome of my case entirely. I’m forever grateful for their dedication."
                            </p>
                            <p className="mt-3 font-semibold text-gray-800">- Michael R., Former Client</p>
                        </div>
                    </div>

                    {/* Right Column: Image and Brand Scroller */}
                    <div className="md:w-1/2 mt-10 md:mt-0">
                        {/* Main Image with Border Radius */}
                        <img
                            className="w-full h-auto object-cover rounded-xl shadow-xl"
                            src="https://caleblaw.io/wp-content/uploads/2025/09/7.jpg"
                            alt="Business meeting"
                        />

                        {/* Auto Horizontal Scroll Images of Brands */}
                        {/* <div className="mt-10 overflow-hidden">
                            <p className="text-center text-sm font-semibold text-white uppercase tracking-wider mb-4">Trusted by over 500 brands</p> */}

                        {/* This div creates an infinite scroll effect using custom animation in Tailwind config is recommended for production. */}
                        {/* Here we use simple flex wrap for simplicity in a standalone component. */}
                        {/* <div className="flex items-center justify-center gap-8 flex-wrap">
                                {brands.map((brand, index) => (
                                    <img
                                        key={index}
                                        src={brand}
                                        alt={`Brand ${index + 1}`}
                                        className="h-8 opacity-60 hover:opacity-100 transition duration-300"
                                    />
                                ))}
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}


