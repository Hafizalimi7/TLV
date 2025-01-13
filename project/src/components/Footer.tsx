import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center">
            <img 
              src="https://purekonnect.com.ng/lifev.png" 
              alt="The Life Voyage Logo" 
              className="h-10 w-auto"
            />
            <span className="ml-2 text-xl font-semibold text-[#2B4C7E]">The Life Voyage</span>
          </div>
          
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-500 hover:text-[#2B4C7E]">Home</Link>
            <Link to="/about" className="text-gray-500 hover:text-[#2B4C7E]">About</Link>
            <Link to="/services" className="text-gray-500 hover:text-[#2B4C7E]">Services</Link>
            <Link to="/contact" className="text-gray-500 hover:text-[#2B4C7E]">Contact</Link>
          </div>

          <div className="flex space-x-6">
            <a href="https://www.instagram.com/the.life.voyage" className="text-gray-400 hover:text-[#2B4C7E] transition transform hover:scale-110">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://web.facebook.com/people/The-life-voyage/61570073396968/" className="text-gray-400 hover:text-[#2B4C7E] transition transform hover:scale-110">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-[#2B4C7E] transition transform hover:scale-110">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://x.com" className="text-gray-400 hover:text-[#2B4C7E] transition transform hover:scale-110">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-400">© {new Date().getFullYear()} The Life Voyage, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}