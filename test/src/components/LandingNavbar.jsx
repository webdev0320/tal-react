import React from 'react';
import { Link } from 'react-router-dom';

const LandingNavbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-8 bg-white border-b border-gray-200">
      <div className="text-2xl font-bold text-brand-teal">Taxaccolega</div>
      
      <div className="flex items-center space-x-6 text-gray-700 font-medium">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

      <div className="font-bold text-brand-orange-custom">
        Call Us: 020 8127 0728
      </div>
    </nav>
  );
};

export default LandingNavbar;
