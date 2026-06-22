"use client";
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#064E3B] py-8 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm">
          <p>Phone: 020 8127 0728</p>
          <p>Email Address: info@taxaccolega.co.uk</p>
        </div>
        <div className="flex gap-4">
          <span>Facebook</span>
          <span>Twitter</span>
          <span>Google Review</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
