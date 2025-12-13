// CTASection.jsx

import { Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';




export default function CTASection() {
    //  Reusable button styles that stack on mobile ('flex-col sm:flex-row')
    const baseButtonClasses = "inline-flex items-center justify-center font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-lg w-full sm:w-auto";

    return (
        <section className="bg-navy-blue-800"> {/* Using a generic blue-800 for Navy Blue */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

                {/* Main 2-column layout (flex-row on desktop, flex-col-reverse on mobile) */}
                <div className="flex flex-col-reverse md:flex-row gap-12 items-center">

                    {/* Column 1 (Left on desktop, Bottom on mobile): Image */}
                    <div className="md:w-1/2 w-full">
                        <img
                            src="https://caleblaw.io/wp-content/uploads/2025/09/blog23.jpg"
                            alt="Consultation meeting in progress"
                            className="w-full h-auto object-cover rounded-xl shadow-xl"
                        />
                    </div>

                    {/* Column 2 (Right on desktop, Top on mobile): Text and Buttons (Text is white due to dark background) */}
                    <div className="md:w-1/2 text-white">
                        <h2 className="text-4xl font-extrabold sm:text-5xl mb-4 text-white font-heading">
                            Get Your Free Consultation Today
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Don't wait to address your legal or business challenges. Our experts are standing by 24/7 to provide immediate assistance and strategic advice.
                        </p>

                        {/* Two Buttons: Flex row on desktop, flex-col on mobile */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* Button 1: Get Consultation */}
                            <Link to="/contact" className={`${baseButtonClasses} bg-white text-gray-800 hover:bg-gray-100`}>
                                <Calendar className="w-5 h-5 mr-2" />
                                Get Consultation
                            </Link>

                            {/* Button 2: CALL OR TEXT 24/7 */}
                            <a href="tel:202-953-9850" className={`${baseButtonClasses} bg-gold-600 text-white hover:bg-gold-700`}>
                                <Phone className="w-5 h-5 mr-2" />
                                CALL OR TEXT 202-953-9850
                            </a>
                        </div>
                        <p className="text-gray-300 mt-4 text-sm">Guaranteed response within 24 hours</p>
                    </div>
                </div>
            </div>
        </section>
    );

}
