"use client";
import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';
import ContactSection from '../components/ContactSection';
import AccountsServiceGrid from '../components/AccountsServiceGrid';
import { accountsLinks } from '../data/accountsLinks';

const SelfAssessment = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <HeroBanner />
      
      <section className="py-5">
        <div className="container">
          <h1 className="mb-4">Self Assessment Tax Return Accountants UK</h1>
          <p className="lead text-muted mb-5">Self assessment doesn’t feel urgent — until the deadline is already close.</p>
          
          <div className="row g-4 mb-5">
            <div className="col-lg-8">
              <h3>Expert Self Assessment Support</h3>
              <p>Preparing a self assessment tax return is more than just submitting figures. It’s about bringing all income sources together, understanding how they interact, and ensuring you are not paying more tax than necessary.</p>
              
              <h3>Our Core Services</h3>
              <ul>
                <li><strong>Income Consolidation:</strong> Handling salary, dividends, rental income, freelance work, foreign income, and capital gains.</li>
                <li><strong>Accuracy & Compliance:</strong> Minimizing the risk of HMRC queries and penalties through meticulous preparation.</li>
                <li><strong>Specialized Support for Directors & Landlords:</strong> Tailored advice to align personal income with business or property affairs.</li>
              </ul>
            </div>
            <div className="col-lg-4">
              <div className="bg-light p-4 rounded-4 shadow-sm">
                <h4>Need help with your return?</h4>
                <p>Ensure your self assessment is completed accurately and on time.</p>
                <a href="/contact-us" className="btn btn-primary">Contact Us</a>
              </div>
            </div>
          </div>
          
          <h2 className="text-center fw-bold">Our Accounts Services</h2>
          <AccountsServiceGrid items={accountsLinks} />
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default SelfAssessment;
