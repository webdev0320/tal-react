import React from 'react';
import HeroBanner from '../components/HeroBanner';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const ShareTransfer = () => {
  return (
    <div>
      <HeroBanner />
      
      <section className="py-5">
        <div className="container">
          <h1 className="mb-4">Share Transfer</h1>
          <p className="lead text-muted mb-5">Seamless Share Transfer Solutions</p>
          
          <div className="row g-4 mb-5">
            <div className="col-lg-8">
              <h3>Professional Share Transfer Services</h3>
              <p>Transferring shares within a limited company requires careful documentation and compliance with Companies House procedures. Our expert team ensures your share transfers are handled securely, efficiently, and in full compliance with legal requirements.</p>
              
              <h3>Our Key Services</h3>
              <ul>
                <li><strong>Streamlined Documentation:</strong> Drafting and preparing all necessary transfer forms and resolutions.</li>
                <li><strong>Expert Guidance:</strong> Comprehensive support through every step of the transaction.</li>
                <li><strong>Regulatory Compliance:</strong> Ensuring all filings with Companies House are accurate and timely.</li>
                <li><strong>Minimized Risk:</strong> Simplifying complexities to minimize errors and potential legal issues.</li>
              </ul>
            </div>
            <div className="col-lg-4">
              <div className="bg-light p-4 rounded-4 shadow-sm">
                <h4>Need to transfer shares?</h4>
                <p>Ensure your transfer is managed securely and compliantly.</p>
                <a href="/contact-us" className="btn btn-primary">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
      </div>
  );
};

export default ShareTransfer;
