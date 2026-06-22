"use client";
import React from 'react';

const ReferralForm = () => {
  return (
    <section id="refer-form" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-[#1D3C45] rounded-3xl p-8 lg:p-16 text-white shadow-2xl relative overflow-hidden">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Submit a Referral</h2>
            <p className="opacity-80">Fill in the details below and we'll reach out to your referral.</p>
          </div>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Name" className="w-full p-4 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#d2601a]" />
              <input type="email" placeholder="Your Email" className="w-full p-4 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#d2601a]" />
            </div>
            <input type="text" placeholder="Referral Name" className="w-full p-4 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#d2601a]" />
            <input type="email" placeholder="Referral Email" className="w-full p-4 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#d2601a]" />
            <textarea placeholder="Message (Optional)" rows="4" className="w-full p-4 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#d2601a]"></textarea>
            
            <button type="submit" className="w-full py-4 bg-[#d2601a] text-white font-bold rounded-lg hover:bg-[#b85014] transition-all">
              Submit Referral
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReferralForm;
