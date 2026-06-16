import React from 'react';

const AboutUsSection = () => {
  // Use the same image URL pattern or replace with your actual asset
  const imageUrl = "/images/2025/08/TAL-aboust-us.webp";

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content Column */}
        <div className="lg:col-span-6 space-y-6">
          <div className="border-l-4 border-[#d2601a] pl-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D3C45] leading-tight">
              Top Rated Chartered Accountants in London - Local Tax & Accounting Firm
            </h2>
          </div>
          
          <p className="text-xl font-bold text-[#1D3C45]">
            Discover Simple and Effective Accounting Solutions with Taxaccolega.
          </p>
          
          <p className="text-sm text-slate-600 leading-relaxed">
            Taxaccolega wasn't built to be just another accountancy firm. Since we don't just do the numbers, so it grew from a simple belief: real support goes beyond spreadsheets. It means promptly answering the call when a client's unsure. It means patiently explaining things without using jargons. And it means celebrating growth, not just tracking it.
          </p>
          
          <button className="bg-[#1D3C45] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#142d34] transition-all">
            About Us
          </button>
        </div>

        {/* Right Image Column (Sliced Pillar Effect) */}
        <div className="lg:col-span-6">
          <div className="flex gap-1 h-[450px] bg-white rounded-3xl overflow-hidden shadow-2xl">
            {Array(4).fill(0).map((_, i) => (
              <div 
                key={i} 
                className="flex-1 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url('${imageUrl}')`,
                  backgroundPosition: `${(i / 3) * 100}% center`,
                  backgroundSize: '400% 100%' 
                }}
              ></div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUsSection;
