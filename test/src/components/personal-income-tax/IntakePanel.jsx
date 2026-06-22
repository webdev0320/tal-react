"use client";
import React from 'react';

const IntakePanel = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <div className="space-y-4 text-gray-600">
            <p><strong>Phone Number:</strong> 020 8127 0728</p>
            <p><strong>Whatsapp:</strong> 074 7117 0484</p>
            <p><strong>Email:</strong> info@taxaccolega.co.uk</p>
            <p><strong>Address:</strong> 187a London Road, Croydon, Surrey, CR0 2RJ</p>
          </div>
        </div>
        <div className="bg-gray-50 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300" />
            <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300" />
            <textarea placeholder="Message" className="w-full p-3 border border-gray-300 h-32"></textarea>
            <button className="w-full p-4 bg-[#EA580C] text-white font-bold uppercase">Send Us a Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default IntakePanel;
