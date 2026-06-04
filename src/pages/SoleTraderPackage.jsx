import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Partners from '../components/Partners';

// Icon for checkmarks
const CheckIcon = () => (
  <svg className="me-2 flex-shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--brand-orange)' }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const SoleTraderPackage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-light min-h-screen">
      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <header className="position-relative text-white overflow-hidden py-5" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)' }}>
        <div className="container position-relative py-4 text-center text-lg-start" style={{ zIndex: 2 }}>
          <span className="text-uppercase small tracking-wider fw-bold mb-2 d-inline-block text-brand-orange" style={{ letterSpacing: '2px' }}>
            Sole Trader Pricing
          </span>
          <h1 className="display-4 fw-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Focus on Your Business <br /> We'll Handle the Tax Bill
          </h1>

          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0 small" style={{ background: 'transparent' }}>
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none text-brand-orange">Home</Link></li>
              <li className="breadcrumb-item active text-white-50" aria-current="page">Sole Trader</li>
            </ol>
          </nav>
        </div>
      </header>

      {/* Pricing Section */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="row g-4 justify-content-center">
            
            {/* Essential Package */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 service-card position-relative">
                <div className="text-center mb-4">
                  <h3 className="fw-bold text-brand-dark mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>Essential</h3>
                  <p className="text-muted small">Turnover</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <span className="fs-1 fw-bold text-brand-orange">£25</span>
                    <span className="text-muted ms-1">+VAT/ m</span>
                  </div>
                </div>
                
                <ul className="list-unstyled text-secondary mb-4 d-flex flex-column gap-3" style={{ fontSize: '0.95rem' }}>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Sole Trader Accounts</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Employment Income, Including Pension, Benefits & Expenses</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Self Assessment Tax Return</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Advising on Income Tax Liabilities & Deadlines</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>64-8 authority – Dealing with HMRC</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Online Submission to HMRC</span></li>
                </ul>
                
                <div className="mt-auto pt-4 text-center">
                  <a href="#signup" className="btn btn-brand-outline w-100 py-2 fw-bold">Sign-Up</a>
                </div>
              </div>
            </div>

            {/* Extensive Package */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow rounded-4 p-4 service-card position-relative" style={{ borderTop: '4px solid var(--brand-orange)' }}>
                {/* Sale Badge */}
                <div className="position-absolute top-0 end-0 bg-danger text-white px-3 py-1 rounded-bl-3 rounded-tr-3 fw-bold small shadow-sm" style={{ borderBottomLeftRadius: '10px', borderTopRightRadius: '10px' }}>
                  Sale
                </div>

                <div className="text-center mb-4">
                  <h3 className="fw-bold text-brand-dark mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>Extensive</h3>
                  <p className="text-muted small">Turnover</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <span className="fs-1 fw-bold text-brand-orange">£32</span>
                    <span className="text-muted ms-1">+VAT/ m</span>
                  </div>
                </div>
                
                <ul className="list-unstyled text-secondary mb-4 d-flex flex-column gap-3" style={{ fontSize: '0.95rem' }}>
                  <li className="d-flex align-items-start fw-semibold text-brand-dark"><CheckIcon /> <span>Essential Package Services</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Bookkeeping up to 100 Transactions a month</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Payroll for up to 2 Employees</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Quarterly VAT returns</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Tax Planning Advice</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Unlimited Telephonic, Whatsapp & Email Support</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Dedicated Accountant upon request</span></li>
                </ul>
                
                <div className="mt-auto pt-4 text-center">
                  <a href="#signup" className="btn btn-brand w-100 py-2 fw-bold shadow">Sign-Up</a>
                </div>
              </div>
            </div>

            {/* Supreme Package */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 service-card position-relative">
                {/* Sale Badge */}
                <div className="position-absolute top-0 end-0 bg-danger text-white px-3 py-1 rounded-bl-3 rounded-tr-3 fw-bold small shadow-sm" style={{ borderBottomLeftRadius: '10px', borderTopRightRadius: '10px' }}>
                  Sale
                </div>

                <div className="text-center mb-4">
                  <h3 className="fw-bold text-brand-dark mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>Supreme</h3>
                  <p className="text-muted small">Turnover</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <span className="fs-1 fw-bold text-brand-orange">£40</span>
                    <span className="text-muted ms-1">+VAT/ m</span>
                  </div>
                </div>
                
                <ul className="list-unstyled text-secondary mb-4 d-flex flex-column gap-3" style={{ fontSize: '0.95rem' }}>
                  <li className="d-flex align-items-start fw-semibold text-brand-dark"><CheckIcon /> <span>Extensive Package Services</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Payroll for up to 5 Employees</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Setting up Accounting System</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Tax Investigation Insurance</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Business Health Meeting</span></li>
                </ul>
                
                <div className="mt-auto pt-4 text-center">
                  <a href="#signup" className="btn btn-brand-outline w-100 py-2 fw-bold">Sign-Up</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-5 bg-light border-top">
        <div className="container text-center">
          <h2 className="text-brand-dark mb-5 fw-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>Our Clients and Collaborative Partners</h2>
          <Partners />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SoleTraderPackage;
