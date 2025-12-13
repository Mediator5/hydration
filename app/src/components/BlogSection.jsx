// BlogSection.jsx
import React, { useState, useRef, useContext } from 'react';
import { ArrowLeft, ArrowRight, Calendar, User } from 'lucide-react';
import MyContext from './MyContext';
import { Link } from 'react-router-dom';







export default function BlogSection() {
  const { setBlogData, blogPosts } = useContext(MyContext)


  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      // Calculate how much to scroll based on container width or card width
      // Simple logic to move approximately one card's worth of space
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const navButtonClasses = "p-3 rounded-full bg-gold-600 text-white hover:bg-gold-700 transition duration-200 shadow-md";

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading Div */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl font-heading">
            Latest Insights & News
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Explore insights, guidance, and updates from the CalebLaw team. Our blog breaks down key legal issues, emerging trends, and practical advice to help you stay informed and empowered.
          </p>
        </div>

        {/* Content Div & Slider Mechanism */}
        <div className="relative">

          {/* Blog Card Container - hides scrollbar with 'overflow-x-hidden' on general view */}
          {/* Note: In a real Tailwind project, you might need custom utility for hiding scrollbar fully cross-browser */}
          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hide scrollbar for Firefox/IE
          >
            {blogPosts.map((post) => (
              // Card Wrapper: w-full on mobile (1 card per view), w-1/3 on desktop (3 per view)
              <Link to={`/blog/${post.id}`} key={post.id} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 snap-start">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">

                  {/* Image with Border Radius */}
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />

                  <div className="p-6 flex flex-col flex-grow">
                    {/* H3 Heading */}
                    <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 cursor-pointer mb-3">
                      {post.title}
                    </h3>

                    {/* Date and Author */}
                    <div className="flex items-center text-sm text-gray-500 mt-auto">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="mr-4">{post.date}</span>
                      <User className="w-4 h-4 mr-2" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Navigation Arrows below the content */}
          <div className="flex justify-center mt-10 space-x-6">
            <button onClick={() => scroll('left')} className={navButtonClasses} aria-label="Previous Post">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button onClick={() => scroll('right')} className={navButtonClasses} aria-label="Next Post">
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );


}
