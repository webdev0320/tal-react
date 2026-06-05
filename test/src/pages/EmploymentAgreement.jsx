import React from 'react';
import HeroBanner from '../components/HeroBanner';
import ContactSection from '../components/ContactSection';

const EmploymentAgreement = () => {
  return (
    <div>
      <HeroBanner />
      
      <section className="py-5">
        <div className="container">
          <h1 className="mb-4">Employment Agreement</h1>
          <p className="lead text-muted mb-5">Agreements for Comprehensive Employment</p>
          
          <div className="row g-4 mb-5">
            <div className="col-lg-8">
              <h3>Professional Employment Agreement Services</h3>
              <p>An employment agreement is the foundation of a positive, legally compliant working relationship. We assist businesses and individuals in creating, reviewing, and implementing robust agreements that clearly define rights, responsibilities, and terms.</p>
              
              <h3>Our Key Services</h3>
              <ul>
                <li><strong>Tailored Drafting:</strong> Customized agreements meeting unique business and role-specific requirements.</li>
                <li><strong>Regulatory Compliance:</strong> Ensuring agreements adhere to the latest employment laws and regulations.</li>
                <li><strong>Protection of Interests:</strong> Clearly defining terms to protect both employers and employees.</li>
                <li><strong>Ongoing Advice:</strong> Expert support for reviewing and updating agreements as your business needs change.</li>
              </ul>
            </div>
            <div className="col-lg-4">
              <div className="bg-light p-4 rounded-4 shadow-sm">
                <h4>Need help with employment agreements?</h4>
                <p>Ensure your working relationships are legally sound.</p>
                <a href="/contact-us" className="btn btn-primary">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default EmploymentAgreement;
