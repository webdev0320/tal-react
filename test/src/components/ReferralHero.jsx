import React from 'react';

const ReferralHero = () => {
  return (
    <section className="relative py-20 bg-[#1D3C45] text-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <span className="text-[#d2601a] font-bold uppercase tracking-widest text-sm">Earn Rewards</span>
          <h1 className="text-4xl lg:text-6xl font-extrabold mt-4 mb-6 leading-tight">
            Refer & Earn with <span className="text-[#d2601a]">Taxaccolega</span>
          </h1>
          <p className="text-lg opacity-90 mb-8">
            Know someone who could benefit from expert accounting services? Share Taxaccolega with your network, help them succeed, and earn a handsome reward for every successful referral.
          </p>
          <a href="#refer-form" className="inline-block px-8 py-4 bg-[#d2601a] text-white font-semibold rounded-full hover:bg-[#b85014] transition-all text-lg">
            Start Referring Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReferralHero;
