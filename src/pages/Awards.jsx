import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';
import ContactSection from '../components/ContactSection';

const Awards = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <HeroBanner />
      
      <section className="py-5">
        <div className="container">
          <h1 className="mb-4">Awards, Accolades and Accreditations</h1>
          <p className="lead text-muted mb-5">Empowering your financial journey with expertise and precision.</p>
          
          <div className="row g-4 mb-5">
            <div className="col-md-6">
              <h3>Professional Accreditations</h3>
              <p>We are proud to be associated with leading professional bodies.</p>
              <ul>
                <li>ACCA - Association of Chartered Certified Accountants</li>
                <li>Croydon Chamber of Commerce Member</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h3>Software & Industry Partners</h3>
              <p>We are certified partners with top accounting software providers.</p>
              <ul>
                <li>Xero, QuickBooks, FreeAgent, Dext</li>
                <li>TaxCalc, VT Software, BTC Software</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default Awards;
