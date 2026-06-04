import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';
import ContactSection from '../components/ContactSection';

const SwitchAccountant = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <HeroBanner />
      
      <section className="py-5">
        <div className="container">
          <h1 className="mb-4">Are You Looking To Switch Accountants?</h1>
          <p className="lead text-muted mb-5">We empower Business for success.</p>
          
          <div className="row g-4 mb-5">
            <div className="col-md-6">
              <h3>Key Benefits</h3>
              <ul className="list-unstyled">
                <li className="mb-2"><i className="fas fa-check text-success me-2"></i> Transparent Pricing</li>
                <li className="mb-2"><i className="fas fa-check text-success me-2"></i> Client Service Guarantee</li>
                <li className="mb-2"><i className="fas fa-check text-success me-2"></i> Dedicated Support</li>
                <li className="mb-2"><i className="fas fa-check text-success me-2"></i> Hassle-Free Transition</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h3>Our Process</h3>
              <ol>
                <li className="mb-2">Initial Consultation</li>
                <li className="mb-2">Application</li>
                <li className="mb-2">Notification</li>
                <li className="mb-2">Data Collection</li>
                <li className="mb-2">Setup</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default SwitchAccountant;
