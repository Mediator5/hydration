import OurTeam from "./OurTeam";

const member = {
    id: 2,
    name: "Jeanette Irwin",
    title: "Jeanette Irwin",
    imageUrl: "https://caleblaw.io/wp-content/uploads/2025/09/image-9.jpg",
    Bio: [
        "Jeanette Irwin serves as the Office Manager at our boutique law firm, bringing both professionalism and warmth to every client interaction. She oversees the daily operations of the office, ensuring that our team remains organized, efficient, and focused on delivering exceptional service. Jeanette is the primary point of contact for many of our clients, cultivating strong relationships built on trust and responsiveness. Before joining the legal field, she enjoyed a successful career in the non‑profit sector, where she honed her skills in leadership, communication, and community engagement. This second career reflects her passion for supporting people and organizations in achieving their goals. Her ability to balance administrative precision with genuine care makes her an invaluable member of our team. Jeanette’s dedication helps create the welcoming and professional environment that defines our firm."
    ]
}

export default function JeanetteIrwin() {
    return (
        <>
            <section className="bg-gray-50 py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Blog Title (H2) - text-left by default in modern CSS */}
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 text-left">
                        {`Our People | ${member.name}`}
                    </h2>
                </div>
            </section>

            <section className="flex flex-col p-6 py-20 bg-white rounded-xl shadow-lg">

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
                        {member.Bio.map((bi) => (
                            <p className="text-gray-600  mb-4">{bi}</p>

                        ))}




                    </div>
                </div>
            </section>
            <OurTeam />
        </>

    );
}
