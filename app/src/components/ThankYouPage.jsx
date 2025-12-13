
import { Link } from 'react-router-dom';




export default function ThankYouPage() {
    return (
        <div className="flex flex-col items-center justify-center text-center p-4 sm:p-8 min-h-screen bg-gray-50">
            <div className="bg-white p-8 sm:p-12 rounded-lg shadow-xl max-w-lg w-full">
                {/* Success Icon Placeholder (You can use an actual SVG icon library like Heroicons) */}
                <div className="mb-6">
                    <svg className="mx-auto h-16 w-16 text-green-500" xmlns="www.w3.org" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2m0 0l4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
                    Thank You!
                </h1>

                <p className="text-lg text-gray-600 mb-6">
                    Your message has been successfully submitted.
                </p>

                <p className="text-gray-500 mb-8">
                    We appreciate you reaching out and will respond to your inquiry as soon as possible.
                </p>

                <Link to="/">
                    <button className="px-8 py-3 bg-gold-600 text-white font-semibold rounded-lg shadow-md hover:bg-gold-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out">
                        Go to Homepage
                    </button>
                </Link>
            </div>
        </div>
    );

}
