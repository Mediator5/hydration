import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ann Peterson",
      title: "Senior Director",
      text: "The convenience was unbeatable. The nurse was professional, friendly, and I felt amazing afterward. Highly recommend!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
      name: "Peter Parker",
      title: "Senior Director",
      text: "Booking was easy and the IV therapy helped me recover fast after a long week of travel. Excellent service.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
      name: "Jhon Smith",
      title: "Senior Director",
      text: "Top-notch experience from start to finish. Knowing they’re licensed and veteran-owned made me feel confident choosing them.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-20 px-6" id='testimonial'>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-gray-900 mb-6">
            What People Say
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our clients trust us for safe, convenient, and professional mobile IV therapy—here’s what they have to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Testimonial Cards */}
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {testimonial.name}
              </h3>
              <div className="w-12 h-0.5 bg-bronze mb-4"></div>
              <p className="text-sm text-gray-500 mb-4">{testimonial.title}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {testimonial.text}
              </p>
              
              {/* Rating and Avatar */}
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-amber-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                />
              </div>
            </div>
          ))}

          {/* View All Button Card */}
          <div className="bg-gradient-primary rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group cursor-pointer">
            <div className="text-center">
              <a href='#booking' className="text-white font-semibold text-lg tracking-wide flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                BOOK NOW
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}