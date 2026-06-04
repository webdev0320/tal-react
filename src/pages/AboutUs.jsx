import React from 'react';
import HeroBanner from '../components/HeroBanner';
import ContactSection from '../components/ContactSection';
import StatsCounter from '../components/StatsCounter';
import Partners from '../components/Partners';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <HeroBanner />
      
      <section className="py-5">
        <h1 className="mb-4">About Taxaccolega</h1>
        <p>Starting a small business can be both challenging and rewarding.</p>
        <p className="text-muted">Home / About Us</p>
      </section>

      <section className="py-5">
        <h2 className="mb-3">Top Accountancy Firm In London</h2>
        <p className="lead fw-bold">Discover Simple and Effective Accounting Solutions with Taxaccolega.</p>
        <p>Since 2011, Taxaccolega Accounting has been the go-to choice for contractor and freelancer accounting. We make accounting easy, using technology to simplify the process, and you’ll have your own dedicated accountant to support you every step of the way.</p>
        <p>Our experienced team of specialist contractor accountants demystifies accounting. No confusing jargon, no sky-high fees, and no disappearing accountants. We’re committed to making your financial life easier.</p>
        <p>At Taxaccolega, we provide solutions for all your accounting needs. Whether you’re thinking of starting a Limited Company, want to save on taxes, or need advice on IR35, we’re here to help.</p>
        <p>We know that everyone’s situation is different, so we offer flexible services that we’re always improving. You’ll get 24/7 access to our easy-to-use online bookkeeping tool, help with quarterly VAT returns, assistance with your self-assessment tax return, support with HMRC checks, and all the documentation you need for dividends and board meetings.</p>
        <p>With Taxaccolega, accounting is a breeze. Let us simplify your financial life.</p>
      </section>

      <section className="py-5 bg-light">
        <h2>OUR MISSION</h2>
        <p><strong>At Taxaccolega Chartered Accountants, our mission is to provide top-tier accounting solutions tailored to our clients’ unique needs. We are dedicated to delivering comprehensive accounting, tax, and advisory services with the utmost professionalism and integrity. Our commitment is to foster financial growth, compliance, and peace of mind for our clients. This contributes to the London community’s success and financial well-being.</strong></p>
      </section>

      <StatsCounter />
      
      <section className="py-5">
        <h2>Our Recent Google Reviews</h2>
        {/* Placeholder for Reviews - integrating existing reviews slider if available or simple layout */}
        <p>5.0 | 187 reviews - EXCELLENT</p>
      </section>

      <Partners />
      <ContactSection />
    </div>
  );
};

export default AboutUs;
