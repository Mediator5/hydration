import OurTeam from "./OurTeam";

const member = {
    id: 1,
    name: "Joseph Caleb",
    title: "Joseph Caleb",
    imageUrl: "images.unsplash.com",
    Bio: [
        "Joseph Caleb is an architect of practical solutions partnering with stakeholders as a trusted advisor to navigate complex and high-stakes issues. Prior to entering private practice, Joseph honed his litigation skills at the Public Defender Service for the District of Columbia - often recognized as the leading training ground for trial attorneys in the United States - where he served as lead counsel in trials against local and federal prosecutors. Joseph has built a highly successful solo practice, which focuses on criminal and civil matters in D.C. and Maryland in other state and federal courts around the country. Joseph's civil-litigation work includes representing plaintiffs who have suffered catastrophic personal injury and civil rights violations. While his criminal work focuses on individuals charged in federal and locals courts with criminal allegations.",
        "In 2018, Joseph was selected by The National Trial Lawyers as a 'Top 40 Under 40' lawyer - a distinction extended exclusively to trial lawyers doing civil plaintiff and criminal defense work. The National Trial Lawyers again recognized Joseph's accomplishments in 2020, this time naming him a Top 10 trial lawyer nationwide in his areas of expertise. ",
        "In 2023, Joseph was inducted into the American College of Trial Lawyers. Founded in 1950, the College is composed of the best of the trial bar in the United States and Canada. Fellowship in the College is extended by invitation only, and only after careful investigation, to those experienced trial lawyers of diverse backgrounds who have mastered the art of advocacy and whose professional careers have been marked by the highest standards of ethical conduct, professionalism, civility, and collegiality.",
        "Joseph also has substantial experience teaching litigation skills to lawyers and law students. He stays connected to his law school alma mater and has served as an adjunct mock-trial instructor at American University – Washington College of Law, and as a guest lecturer on a variety of legal topics when called upon. He has also served for several years as a faculty member of Harvard Law School's Trial Advocacy Workshop.",
        "In October 2025, Joseph concluded a two-year term as Chair of the Board of Trustees for the D.C. Public Defender Service. Appointed in July 2021, by a panel consisting of D.C. Mayor Muriel Bowser and the Chief Judges of the United States District Court for the District of Columbia, the D.C. Court of Appeals, and the D.C. Superior Court, Joseph continues to serve as a board member."


    ],
}

export default function JosephCalebPage() {
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
            <OurTeam/>
        </>


    );
}
