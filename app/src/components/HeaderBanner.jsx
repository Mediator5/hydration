const bgImage = 'https://caleblaw.io/wp-content/uploads/2025/09/image-5.jpg';

export default function HeaderBanner({ pageTitle }) {
    return (
        <section className="relative py-16 md:py-24 bg-blue-900 bg-cover bg-center ">
            {/* Background image with reduced opacity */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{ backgroundImage: `url(${bgImage})` }}
            ></div>

            {/* Optional overlay for blend mode */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-900/80 "></div>

            {/* Content */}
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 text-left font-heading">
                    {pageTitle}
                </h2>
            </div>
        </section>
    );
}
