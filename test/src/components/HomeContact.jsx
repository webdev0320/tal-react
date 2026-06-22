"use client";
import React from 'react';

const HomeContact = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Main Title Header with Flanking Lines */}
        <div className="flex items-center justify-center gap-6 mb-16">
          <div className="h-0.5 w-16 bg-[#d2601a]"></div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1D3C45]">Contact - Us</h2>
          <div className="h-0.5 w-16 bg-[#d2601a]"></div>
        </div>

        {/* Two-Column Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column - Minimal Info Blocks */}
          <div className="space-y-8">
            {[
              { icon: "fas fa-map-marker-alt", title: "Address", text: "187a London Road, Croydon, Surrey, CR0 2RJ" },
              { icon: "fas fa-phone-alt", title: "Phone No", text: "020 8127 0728" },
              { icon: "fas fa-envelope", title: "Email", text: "info@taxaccolega.co.uk" },
              { icon: "fas fa-clock", title: "Opening Hours", text: "Mon-Fri: 9:00 AM - 6:00 PM" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="text-[#d2601a] text-2xl pt-1">
                  <i className={item.icon}></i>
                </div>
                <div>
                  <h4 className="font-bold text-[#1D3C45] text-lg mb-1">{item.title}</h4>
                  <p className="text-slate-600 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Orange Outlined Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-bold text-[#1D3C45] mb-2">Name</label>
              <input type="text" className="w-full p-4 border-2 border-[#d2601a]/80 rounded-lg outline-none placeholder:text-slate-400" placeholder="Name" required />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#1D3C45] mb-2">Email</label>
              <input type="email" className="w-full p-4 border-2 border-[#d2601a]/80 rounded-lg outline-none placeholder:text-slate-400" placeholder="Email" required />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#1D3C45] mb-2">Message</label>
              <textarea className="w-full p-4 border-2 border-[#d2601a]/80 rounded-lg outline-none placeholder:text-slate-400 h-32" placeholder="Message" required></textarea>
            </div>
            
            <div className="text-center pt-4">
              <button type="submit" className="bg-[#1D3C45] text-white px-14 py-3 rounded-full font-semibold tracking-widest uppercase hover:bg-[#142d34] transition-all">
                Send
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default HomeContact;
