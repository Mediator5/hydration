// FooterSection.jsx
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

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

const serivces = [
  {
    name: 'Criminal Defense',
    href: '/services'
  },
  {
    name: 'White Collar Representation',
    href: '/services'
  },
  {
    name: 'Civil Litigation',
    href: '/services'
  },
  {
    name: 'Government Investigations',
    href: '/services'
  },
  {
    name: 'Arbitrations and Administrative Hearings',
    href: '/services'
  },
]





export default function Footeer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Main Footer Grid (4 Columns on Desktop, stacks on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Column 1: Logo and Company Info */}
          <div>
            <img className='h-20 w-30 ' src="https://caleblaw.io/wp-content/uploads/2025/12/cbllogo.png" alt="logo" />
            <p className="text-gray-400 mb-4">
              Defending justice with experience and excellence in D.C and Maryland courts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-400 transition duration-200" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition duration-200" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition duration-200" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition duration-200" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {menu.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-gray-400 hover:text-gold-400 transition duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-3">
              {serivces.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-gray-400 hover:text-gold-400 transition duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-gold-400" />
                <span>123 Business Lane, Suite 400, San Francisco, CA, 94105</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-gold-400" />
                <a href="tel:202-953-9850" className="hover:text-gold-400">202-953-9850</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-gold-400" />
                <a href="mailto:info@caleblaw.io" className="hover:text-gold-400">info@caleblaw.io</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Bottom Bar */}
        <div className="mt-16 border-t border-gray-700 pt-8">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} CalebLaw. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );

}
