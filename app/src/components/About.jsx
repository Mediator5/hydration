
// AboutSection.jsx
import React, { useEffect, useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Loader from './Loader';


export default function About() {


    const features = [
        { title: 'Data-Driven Insights', description: 'Leverage data to make informed, strategic decisions.' },
        { title: 'Expert Team', description: 'Work with industry veterans who understand your challenges.' },
        { title: 'Scalable Solutions', description: 'Solutions that grow with your business needs.' },
    ];



    return (
        <section className="bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading Div - Centered on all screens */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl font-heading">
                        A Better Way to Consult
                    </h2>

                </div>

                {/* Content Div - Flex-row on desktop, flex-col-reverse on mobile */}
                <div className="flex flex-col-reverse md:flex-row items-start gap-12">

                    {/* Column 1 (Left on desktop, Bottom on mobile) - Image */}
                    <div className="md:w-1/2 mt-10 md:mt-0">
                        <img
                            className="w-full h-auto object-cover rounded-xl shadow-xl"
                            src="https://caleblaw.io/wp-content/uploads/2025/09/image-24-1536x1024-1.jpg"
                            alt="People shaking hands after successful meeting"
                        />
                    </div>

                    {/* Column 2 (Right on desktop, Top on mobile) - Text and Checklist */}
                    <div className="md:w-1/2">
                        <p className="text-gray-600 mb-6 text-lg">
                            CalebLaw is a boutique law firm with more than 20 years of experience handling criminal and civil cases in the United States. We are true trial lawyers, having tried over 40 cases to verdict. The firm has guided numerous clients through the complexities of civil discovery and dispositive motions practice, and we have resolved countless disputes after these stages before they ever reach a courtroom. We work to make things right. And just as our clients are investing in our expertise and experience, we give everything we have to our clients and we stay with them in the trenches until the end.
                        </p>


                        {/* Checklist/Feature List */}
                        {/* <div className="space-y-6">
                            {features.map((feature) => (
                                <div key={feature.title} className="flex items-start space-x-4">
                                    <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                                        <p className="mt-1 text-gray-500">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div> */}

                        {/* About Us Button with Arrow Icon */}
                        <div className="mt-10">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-gold-600 hover:bg-gold-700 transition duration-200"
                            >
                                Get Consultation
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
