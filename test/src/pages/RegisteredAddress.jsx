import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';
import ContactSection from '../components/ContactSection';

const RegisteredAddress = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <HeroBanner />
      
      <section className="py-5">
        <div className="container">
          <h1 className="mb-4">Registered Address</h1>
          <p className="lead text-muted mb-5">Providing Reliable Registered Addresses for Your Business</p>
          
          <div className="row g-4 mb-5">
            <div className="col-lg-8">
              <h3>Professional Registered Office Service</h3>
              <p>Every UK limited company is legally required to have a registered office address. Taxaccolega provides a professional registered address service that ensures you meet all legal requirements while enhancing your company's credibility.</p>
              
              <h3>Key Benefits</h3>
              <ul>
                <li><strong>Legal Compliance:</strong> Meet mandatory requirements for a UK registered office.</li>
                <li><strong>Professional Image:</strong> Maintain a credible and reliable business presence.</li>
                <li><strong>Peace of Mind:</strong> Trust your company's address management to our experienced team.</li>
                <li><strong>Focus on Growth:</strong> Leave the administrative and compliance aspects to us.</li>
              </ul>
            </div>
            <div className="col-lg-4">
              <div className="bg-light p-4 rounded-4 shadow-sm">
                <h4>Need a registered address?</h4>
                <p>Ensure your business meets legal requirements effortlessly.</p>
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

export default RegisteredAddress;
