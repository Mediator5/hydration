// ServiceSection.jsx
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Define the service data for our tabs and content
const servicesData = [
    {
        id: 'Criminal Defense',
        name: 'Criminal Defense',
        heading: 'Criminal Defense: What to Expect When Facing Charges',
        paragraph: [
            "*A criminal charge is often the most stressful time for someone accused of a crime. When charged with a criminal offense, it is critical to have the right person standing by your side. You and your loved ones deserve the best.",
            "* We have extensive expertise representing clients in a variety of state and federal prosecutions against misdemeanor and felony allegations – white-collar offenses such as mail and wire fraud and public-corruption offenses. Joseph Caleb began his career as a public defenders at the D.C. Public Defender Service, widely regarded as the best public defender trial office in the country, and has tried more than 40 cases to verdict.",
            "* Mr. Caleb’s substantial experience as a trial attorney makes him a dogged advocate in the courtroom, but he is also a skilled negotiator with substantial experience resolving disputes between a wide range of stakeholders. Because a number of the firm's clients maintain a high profile, we understand the importance of complete and total discretion. So, for those matters that must be resolved outside of a courtroom and away from the public eye, we have our clients covered there too.",
            "* Excellence is the norm at CalebLaw. With over twenty years of trial court experience, we know what it takes to win when the stakes are the highest. From misdemeanors to the most serious felonies, and from matters in local court to federal courts around the country – CalebLaw has the experience to successfully represent you in your matter. But what sets us apart from the rest is our compassion and care. We don’t just care about your problem. We care about you."
        ],
        imageUrl: 'https://caleblaw.io/wp-content/uploads/2025/12/Criminal-Defense-Case.jpg',
    },
    {
        id: 'White Collar Representation',
        name: 'White Collar Representation',
        heading: 'White Collar Representation',
        paragraph: [
            "* A specialized subset of Criminal Defense, White-Collar representation often requires an added level of discretion, composure, and finesse. For years CalebLaw has been a trusted and highly sought after advocate for those charged in white-collar offenses ranging from allegations involving financial crimes to those involving claims of public corruption of high-profile individuals and elected officials.",
            "* And because a number of the firm's clients maintain a high profile, we understand the importance of complete and total discretion.  So for those matters that must be resolved outside of a courtroom and away from the public eye, we have our clients covered there too.",
            " * Grand Jury Representations - You have rights! Whether you are a witness, subject, or target of a investigationGrand Jury Investigation from any government agency – you have rights. At CalebLaw, we provide sound legal advise and strategy – based on two dacades of experience - to help you navigate the nuances of a Grand Jury investigation."

        ],
        imageUrl: 'https://caleblaw.io/wp-content/uploads/2025/12/136.jpg',
    },
    {
        id: 'Civil Litigation',
        name: 'Civil Litigation',
        heading: 'Civil Litigation',
        paragraph: [
            "* Catostrophic Injuries - If you have suffered a serious injury we have the experience and expertise to help make you whole. We help our clients navigate the complex discovery and motions process as well as negotiate favorable settlements with a diverse set of stakeholders.  But we have real trial chops to boot -- so if trial becomes necessary, we also know how to fight and vindicate your rights in court .",
            " * Our substantial experience as trial attorneys make us dogged advocates in the courtroom.  However, we are also skilled negotiators with substantial experience resolving disputes between a wide range of stakeholders.",
            "Other Services",
            "We regularly represent clients in a variety of other litigation matters, including government investigations, arbitration and administrative proceedings, and campus disciplinary investigations."

        ],
        imageUrl: 'https://caleblaw.io/wp-content/uploads/2025/12/60239-adobestock_542324899-00858439.jpg',
    },
    {
        id: 'Government Investigations',
        name: 'Government Investigations',
        heading: 'Government Investigations',
        paragraph: ["We represent and advise clients who are facing investigation by federal law-enforcement agencies and OIG inquiries."],
        imageUrl: 'https://caleblaw.io/wp-content/uploads/2025/12/bigstock-Hand-Knocking-On-The-Door-74914648-1.webp',
    },
    {
        id: 'Arbitrations and Administrative Hearings',
        name: 'Arbitrations and Administrative Hearings',
        heading: 'Arbitrations and Administrative Hearings',
        paragraph: ["We represent clients in arbitration hearings at the local and national levels involving a range of issues, from employee grievances to complex matters of contract interpretation.  We also represent individuals at disciplinary hearings facing adverse disciplinary action at work, from internal proceedings with their employers to appeals to local, state, and federal administrative agencies and governing bodies."],
        imageUrl: 'https://caleblaw.io/wp-content/uploads/2025/12/dispute-resolution-scaled.jpeg',
    },

];





export default function Services() {
    const [activeServiceId, setActiveServiceId] = useState(servicesData[0].id);
    const activeService = servicesData.find(s => s.id === activeServiceId);

    // Reusable classes
    const baseTabClass = "px-4 py-3 text-left rounded-lg transition duration-200 font-medium";
    const inactiveTabClass = "bg-white text-gray-600 hover:bg-gold-600 hover:text-white border border-gray-200";
    const activeTabClass = "bg-gold-600 text-white shadow-md";
    const primaryButtonClasses = "inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-gold-600 hover:bg-gold-700 transition duration-200 mt-8 mb-8";
    return (
        <section className="bg-gray-50 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading Div: Flex row on desktop, flex col on mobile */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl text-start font-heading">
                            Our Legal Services

                        </h2>
                    </div>
                    <div className="md:w-1/2">
                        <p className="text-xl text-gray-500 text-start">
                            We combine deep experience with strategic advocacy to protect our clients’ rights and guide them through every stage of their case.
                        </p>
                    </div>
                </div>

                {/* Content Div: Two columns on desktop (1/3, 2/3), stack on mobile */}
                <div className="flex flex-col md:flex-row gap-12">

                    {/* Column 1 (Tabs/Buttons) */}
                    <div className="md:w-1/3">
                        <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0">
                            {servicesData.map((service) => (
                                <button
                                    key={service.id}
                                    onClick={() => setActiveServiceId(service.id)}
                                    className={`${baseTabClass} ${activeServiceId === service.id ? activeTabClass : inactiveTabClass
                                        }`}
                                >
                                    {service.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Column 2 (Service Content Display) */}
                    <div className="md:w-2/3 bg-white rounded-md p-8">
                        <div className="flex flex-col h-full">

                            {/* Text content */}
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">{activeService.heading}</h3>
                            {/* <p className="text-lg text-gray-600">{activeService.paragraph}</p> */}
                            {activeService.paragraph.map((p, i) => (

                                <p key={i} className="text-lg text-gray-600 mb-4">{p}</p>
                            ))}


                            {/* Button with arrow icon */}
                            <Link to="/contact" className={primaryButtonClasses}>
                                Get Consultation
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                            {/* Image with border radius */}
                            <img
                                src={activeService.imageUrl}
                                alt={activeService.heading}
                                className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg "
                            />


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
