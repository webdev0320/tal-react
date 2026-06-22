"use client";
import React from 'react';
import HeroBanner from '../components/HeroBanner';
import ContactSection from '../components/ContactSection';
import StatsCounter from '../components/StatsCounter';
import Partners from '../components/Partners';
import ReviewsSlider from '../components/ReviewsSlider';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      
    {/* ── Page Hero Banner ── */}
    <header
      className="position-relative text-white d-flex align-items-center"
      style={{
        minHeight: '280px',
        backgroundImage: "url('/images/2025/08/TAL-aboust-us.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100 bg-brand-dark"
        style={{ opacity: 0.65, zIndex: 1 }}
      />
      <div className="container position-relative py-5" style={{ zIndex: 2 }}>
        <h1 className="display-3 fw-bold text-white mb-0">About Us</h1>
      </div>
    </header>

    {/* ── Breadcrumb ── */}
    <div className="bg-white border-bottom py-2">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0 small">
            <li className="breadcrumb-item"><a href="/" className="text-decoration-none" style={{ color: '#e07b39' }}>Home</a></li>
            <li className="breadcrumb-item active text-secondary">About Us</li>
          </ol>
        </nav>
      </div>
    </div>

      <section className="py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-8">
              <h2 className="mb-3">Top Accountancy Firm In London</h2>
              <p className="lead fw-bold">Discover Simple and Effective Accounting Solutions with Taxaccolega.</p>
              <p>Since 2011, Taxaccolega Accounting has been the go-to choice for contractor and freelancer accounting. We make accounting easy, using technology to simplify the process, and you’ll have your own dedicated accountant to support you every step of the way.</p>
              <p>Our experienced team of specialist contractor accountants demystifies accounting. No confusing jargon, no sky-high fees, and no disappearing accountants. We’re committed to making your financial life easier.</p>
              <p>At Taxaccolega, we provide solutions for all your accounting needs. Whether you’re thinking of starting a Limited Company, want to save on taxes, or need advice on IR35, we’re here to help.</p>
              <p>We know that everyone’s situation is different, so we offer flexible services that we’re always improving. You’ll get 24/7 access to our easy-to-use online bookkeeping tool, help with quarterly VAT returns, assistance with your self-assessment tax return, support with HMRC checks, and all the documentation you need for dividends and board meetings.</p>
              <p>With Taxaccolega, accounting is a breeze. Let us simplify your financial life.</p>
            </div>
            <div className="col-lg-4">
              <img 
                src="/images/2023/08/business-woman-or-accountant-who-are-using-a-calcu-2023-06-21-04-41-50-utc-scaled.jpg" 
                alt="Accountant working" 
                className="img-fluid rounded-3 shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-4">
              <img 
                src="/images/2023/06/Benefits-of-Hiring-an-Accountant-for-a-Small-Business-scaled-1-1024x683.jpg" 
                alt="Our Mission" 
                className="img-fluid rounded-3 shadow-lg" 
              />
            </div>
            <div className="col-lg-8">
              <h2 className="mb-4">OUR MISSION</h2>
              <p><strong>At Taxaccolega Chartered Accountants, our mission is to provide top-tier accounting solutions tailored to our clients’ unique needs. We are dedicated to delivering comprehensive accounting, tax, and advisory services with the utmost professionalism and integrity. Our commitment is to foster financial growth, compliance, and peace of mind for our clients. This contributes to the London community’s success and financial well-being.</strong></p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "fas fa-home", title: "For Landlords", price: "From £24.50 per month", body: "“Streamlined and Comprehensive Accounting Support at an Unbeatable Price”" },
              { icon: "fas fa-tooth", title: "For Dentists", price: "From £24.50 per month", body: "“Proficient Accounting Support for Your Expanding Businesses”" },
              { icon: "fas fa-user-tie", title: "For Contractors", price: "From £24.50 per month", body: "“A Warm and All-Inclusive Accounting Service for You and Your Business Partners”" },
            ].map((card, i) => (
              <div key={i} className="bg-[#1D3C45] p-8 md:p-10 rounded-3xl shadow-[0_8px_0_0_#d2601a] flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                  <i className={`${card.icon} text-[#d2601a] text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-sm text-white/90 mb-3 font-medium">{card.price}</p>
                <p className="text-xs text-slate-200 leading-relaxed font-normal px-2 max-w-[260px] mb-8 flex-grow">{card.body}</p>
                <a href="#" className="text-sm font-semibold text-white hover:underline flex items-center gap-2 mt-auto">
                  View Details <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsCounter />
      
      <ReviewsSlider />

      <Partners />
    </div>
  );
};

export default AboutUs;
