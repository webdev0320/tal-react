import React from 'react';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[#1e293b] leading-tight">
            Chartered Accountants in London for Small Businesses, Contractors, Landlords and Startups
          </h1>
          
          <p className="text-lg text-[#475569]">
            Fixed-fee accounting, proactive tax planning, and same-day responses from a named accountant.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <Link to="/contact-us/" className="px-5 py-2.5 text-sm !bg-[#d2601a] text-white font-semibold rounded-lg hover:!bg-[#b55216] transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:shadow-lg text-center">
              Get an Instant Quote
            </Link>
            <Link to="/contact-us/" className="px-5 py-2.5 text-sm border-2 !border-[#d2601a] !text-[#d2601a] font-semibold rounded-lg hover:!bg-[#fdf2ec] transition-all duration-200 hover:-translate-y-0.5 text-center">
              Book a Free Consultation
            </Link>
            <a href="tel:+447912357096" className="px-3 py-2 text-sm !bg-[#d2601a] text-white rounded-full flex items-center justify-center gap-2 hover:!bg-[#b55216] transition-all duration-200 hover:-translate-y-0.5 shadow-md w-max">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              Call at +447912357096
            </a>
          </div>

          {/* Trust Footer */}
          <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>
              </div>
              <span className="font-semibold text-[#475569]">300+ 5-star Reviews</span>
            </div>
            <p className="text-sm text-[#475569]">
              Average first response under hour • 99% client retention
            </p>
          </div>
        </div>

        {/* Right Content (Image) */}
        <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
          {/* Gradient Overlay for blend */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10"></div>
          
          {/* Placeholder Image */}
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
               alt="Professional team" 
               className="w-full h-full object-cover" />
        </div>

      </div>
    </section>
  );
};

export default HeroBanner;
