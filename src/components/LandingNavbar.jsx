import React from 'react';
import Link from './NextLinkShim';

const LandingNavbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-8 bg-white border-b border-gray-200">
      <div className="text-2xl font-bold text-brand-teal">
        <img src="/images/logo/tal-logo.png" alt="Taxaccolega Logo" height="60" />
      </div>
      
      <div className="flex items-center space-x-6 text-gray-700 font-medium">
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/services">Services</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact Us</Link>
      </div>

      <div className="font-bold text-brand-orange-custom">
        Call Us: 020 8127 0728
      </div>
    </nav>
  );
};

export default LandingNavbar;
