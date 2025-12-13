// HeaderComponent.jsx
import React, { useState } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const menu = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Services',
    href: '/services'
  },
  {
    name: 'Blog',
    href: '/blog'
  },
  {
    name: 'Contact',
    href: '/contact'
  },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Reusable button styles
  const primaryButtonClasses = "bg-gold-600 hover:bg-gold-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 shadow-md";
  const iconButtonClasses = "p-2 rounded-lg hover:bg-gray-100 transition duration-200";

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 py-4">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              <img className='h-20 w-30 ' src="https://caleblaw.io/wp-content/uploads/2025/12/cbllogo.png" alt="logo" />
            </Link>
          </div>

          {/* Desktop Menu, Phone, Button (hidden on mobile/tablet) */}
          <div className="hidden md:flex items-center space-x-8">

            {/* Menu Links */}
            <div className="flex space-x-6">
              {menu.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className="text-gray-600 hover:text-gold-600 transition duration-200 font-medium"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Phone Number */}
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-blue-600" />
              <span className="text-gray-800 font-semibold">202-953-9850</span>
            </div>

            {/* Consultation Button */}
            <Link to="/contact" className={primaryButtonClasses}>
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Get Consultation
              </span>
            </Link>
          </div>

          {/* Mobile/Tablet Icons and Toggle (visible on mobile/tablet) */}
          <div className="md:hidden flex items-center space-x-4">

            {/* Phone Icon (always visible on mobile/tablet) */}
            <a href="tel:202-953-9850" className={iconButtonClasses}>
              <Phone className="w-6 h-6 text-gray-700" />
            </a>

            {/* Menu Toggle Button (always visible on mobile/tablet) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={iconButtonClasses}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
            {menu.map((item) => (
              <a
                key={item.name}
                to={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition duration-200"
              >
                {item.name}
              </a>
            ))}
            {/* Mobile Consultation Button */}
            <Link to="/contact" className={`block w-full text-center mt-4 ${primaryButtonClasses}`}>
              Get Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};


