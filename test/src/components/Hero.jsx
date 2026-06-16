import React from 'react';

const Hero = () => {
  return (
    <section className="relative z-10 -mt-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Title */}
          <div className="flex items-center gap-4">
            <div className="bg-slate-100 p-3 rounded-2xl">
              <img src="/images/2025/08/Google.webp" alt="Google logo" className="h-8 w-8" />
            </div>
            <div>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Trusted by clients</p>
              <h3 className="font-bold text-[#1D3C45] text-lg">Google Reviews</h3>
            </div>
          </div>

          {/* Rating */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-[#d2601a] text-lg mb-1">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fas fa-star"></i>
              ))}
            </div>
            <span className="font-bold text-[#1D3C45] text-lg">5.0 / 5.0 Rating</span>
          </div>

          {/* Verification */}
          <div className="text-center md:text-right">
            <p className="text-sm text-slate-600 mb-1">Based on <span className="font-bold text-[#1D3C45]">193</span> reviews</p>
            <a 
              href="https://www.google.com/search?q=taxaccolega+google+reviews" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-2 text-sm font-bold text-[#d2601a] hover:text-[#b85014] transition-colors"
            >
              Verify Reviews <i className="fas fa-external-link-alt text-xs"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
