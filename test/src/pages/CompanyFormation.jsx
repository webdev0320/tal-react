import React from 'react';
import HeroBanner from '../components/HeroBanner';
import ContactSection from '../components/ContactSection';

const CompanyFormation = () => {
  return (
    <div>
      <HeroBanner />
      
      <section className="py-5">
        <div className="container">
          <h1 className="mb-4">Company Formation</h1>
          <p className="lead text-muted mb-5">Creating your legal entity in the United Kingdom is easy with TaxAccolega's experienced team.</p>
          
          <div className="row g-4 mb-5">
            <div className="col-lg-8">
              <h3>Professional Company Formation</h3>
              <p>Setting up a new business is an exciting step, but it involves complex legal and regulatory requirements. We simplify the company formation process to get you up and running quickly and compliantly.</p>
              
              <h3>Our Services</h3>
              <ul>
                <li><strong>Entity Setup:</strong> Guidance on choosing the right business structure.</li>
                <li><strong>Registration:</strong> Handling registration with Companies House and other authorities.</li>
                <li><strong>Legal Documentation:</strong> Drafting necessary documents and articles of association.</li>
                <li><strong>Identity Verification:</strong> Compliance with the latest UK requirements for Director and PSC identity verification.</li>
              </ul>
            </div>
            <div className="col-lg-4">
              <div className="bg-light p-4 rounded-4 shadow-sm">
                <h4>Ready to start your business?</h4>
                <p>We handle the legal complexities for you.</p>
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

export default CompanyFormation;
