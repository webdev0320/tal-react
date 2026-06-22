import React from 'react';
import HeroBanner from '../components/HeroBanner';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const CompanySecretarial = () => {
  return (
    <div>
      <HeroBanner />
      
      <section className="py-5">
        <div className="container">
          <h1 className="mb-4">Company Secretarial</h1>
          <p className="lead text-muted mb-5">Your dedicated partner for professional corporate governance and compliance.</p>
          
          <div className="row g-4 mb-5">
            <div className="col-lg-8">
              <h3>Professional Corporate Secretarial Services</h3>
              <p>Managing corporate governance and meeting statutory requirements can be demanding. Our company secretarial services ensure your business remains compliant, organized, and in good standing with Companies House.</p>
              
              <h3>Our Core Services</h3>
              <ul>
                <li><strong>Corporate Governance:</strong> Expert management of governance tasks and statutory records.</li>
                <li><strong>Filing Compliance:</strong> Timely filing of all necessary documents and annual returns.</li>
                <li><strong>Statutory Management:</strong> Maintaining your company's official records accurately.</li>
              </ul>
            </div>
            <div className="col-lg-4">
              <div className="bg-light p-4 rounded-4 shadow-sm">
                <h4>Need secretarial support?</h4>
                <p>We ensure your business remains compliant and professional.</p>
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

export default CompanySecretarial;
