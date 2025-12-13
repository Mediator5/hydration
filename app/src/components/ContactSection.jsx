import React from 'react';

export default function ContactSection() {
  // List of possible law cases for the dropdown
  const caseOptions = [
    "Choose your case type",
    "Personal Injury",
    "Family Law/Divorce",
    "Criminal Defense",
    "Real Estate Law",
    "Estate Planning/Wills",
    "Employment Law",
    "Business/Contract Disputes",
  ];

  // Reusable form input classes
  const inputClasses = "mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3";
  const labelClasses = "block text-sm font-medium text-gray-700";

  return (
    <section className="relative overflow-hidden bg-gray-900">
      {/* Background Image and Black Overlay */}
      <div
        className="absolute inset-0 bg-[url('https://caleblaw.io/wp-content/uploads/2025/09/image-24-1536x1024-1.jpg')]"
        style={{ backgroundAttachment: 'fixed' }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-12 items-center">

          {/* Column 1: Heading and Paragraph */}
          <div className="md:w-1/2 text-white">
            <h2 className="text-4xl font-extrabold sm:text-5xl mb-4 text-white font-heading">
              Ready to Discuss Your Case?
            </h2>
            <p className="text-xl text-gray-300">
              Fill out the form below for a free, confidential consultation. Our team will get back to you within 24 hours.
            </p>
          </div>

          {/* Column 2: Contact Form */}
          <div className="md:w-1/2 w-full p-8 bg-white rounded-xl shadow-2xl">
            <form
              action="https://formspree.io/f/xovynrvb" // replace with your Formspree form ID
              method="POST"
              className="space-y-6"
            >
              {/* First Name and Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className={labelClasses}>First Name</label>
                  <input type="text" id="first-name" name="first-name" required className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="last-name" className={labelClasses}>Last Name</label>
                  <input type="text" id="last-name" name="last-name" required className={inputClasses} />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className={labelClasses}>Email Address</label>
                  <input type="email" id="email" name="email" required className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClasses}>Phone Number</label>
                  <input type="tel" id="phone" name="phone" className={inputClasses} />
                </div>
              </div>

              {/* Case Type Dropdown */}
              <div>
                <label htmlFor="case-type" className={labelClasses}>Choose Case You Are Interested In</label>
                <select id="case-type" name="case-type" className={inputClasses}>
                  {caseOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              {/* Message Box */}
              <div>
                <label htmlFor="message" className={labelClasses}>Message</label>
                <textarea id="message" name="message" rows="4" required className={inputClasses}></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gold-600 hover:bg-gold-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
                >
                  Send Consultation Request
                </button>
              </div>

              {/* Hidden input for redirect after submission */}
              <input type="hidden" name="_next" value="/thank-you" />
            </form>

            {/* Disclaimer */}
            <p className="mt-6 text-xs text-gray-500 text-center">
              *Disclaimer: Submitting this form does not create an attorney-client relationship. All information remains confidential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
