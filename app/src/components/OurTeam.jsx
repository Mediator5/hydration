// TeamSection.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const teamMembers = [
    {
        id: 1,
        name: "Joseph Caleb",
        title: "Joseph Caleb",
        url: "joseph-caleb",
        imageUrl: "https://caleblaw.io/wp-content/uploads/2025/12/choice_caleb_joseph-20190412-135641.jpg",
        shortBio: "Joseph Caleb is an architect of practical solutions partnering with stakeholders as a trusted advisor to navigate complex and high-stakes issues. Prior to entering private practice, Joseph honed his litigation skills at the Public Defender Service for the District of Columbia - often recognized as the leading training ground for trial attorneys in the United States - where he served as lead counsel in trials against local and federal prosecutors. Joseph has built a highly successful solo practice, which focuses on criminal and civil matters in D.C. and Maryland in other state and federal courts around the country. ",
    },
    {
        id: 2,
        name: "Jeanette Irwin",
        title: "Jeanette Irwin",
        url: "jeanette-irwin",
        imageUrl: "https://caleblaw.io/wp-content/uploads/2025/09/image-9.jpg",
        shortBio: "Jeanette Irwin serves as the Office Manager at our boutique law firm, bringing both professionalism and warmth to every client interaction. She oversees the daily operations of the office, ensuring that our team remains organized, efficient, and focused on delivering exceptional service. Jeanette is the primary point of contact for many of our clients, cultivating strong relationships built on trust and responsiveness. Before joining the legal field, she enjoyed a successful career in the non‑profit sector, where she honed her skills in leadership, communication, and community engagement",
    },
];

export default function OurTeam() {
    return (
        <section className="bg-gold-600 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading Div */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-white sm:text-5xl font-heading">
                        Meet Our Expert Team
                    </h2>
                    <p className="mt-4 text-xl text-white max-w-3xl mx-auto">
                        At CalebLaw, our team brings deep experience, proven trial skill, and a client-first approach to every case. We are dedicated advocates committed to excellence in every matter we handle.
                    </p>
                </div>

                {/* Content Div: 2 columns flex row on desktop, flex column on mobile */}
                <div className="flex flex-col md:flex-row gap-12">

                    {teamMembers.map((member) => (
                        // Each team member div
                        <div key={member.id} className="flex flex-col md:w-1/2 p-6 bg-gray-50 rounded-xl shadow-lg">

                            {/* Inner layout: 2 columns within the member card */}
                            <div className="flex flex-col sm:flex-row gap-6">

                                {/* Column 1: Image */}
                                <div className="sm:w-1/3 flex-shrink-0">
                                    <img
                                        src={member.imageUrl}
                                        alt={member.name}
                                        className="w-full h-48 sm:h-full object-cover rounded-xl shadow-md"
                                    />
                                </div>

                                {/* Column 2: Name, Title, Achievements */}
                                <div className="sm:w-2/3">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{member.name}</h3>
                                    <p className="text-gray-600  mb-4">{member.shortBio}</p>



                                    {/* Read Full Bio Button */}
                                    <Link
                                        to={`/${member.url}`}
                                        className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition duration-200"
                                    >
                                        Read Full Bio
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
