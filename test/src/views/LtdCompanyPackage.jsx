"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import Partners from '../components/Partners';
import ContactForm from '../components/ContactForm';

// Icon for checkmarks
const CheckIcon = () => (
  <svg className="me-2 flex-shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--brand-orange)' }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const LtdCompanyPackage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-light min-h-screen">
      {/* Hero Section */}
      <header className="position-relative text-white overflow-hidden py-5" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)' }}>
        <div className="container position-relative py-4 text-center text-lg-start" style={{ zIndex: 2 }}>
          <span className="text-uppercase small tracking-wider fw-bold mb-2 d-inline-block text-brand-orange" style={{ letterSpacing: '2px' }}>
            LTD Company
          </span>
          <h1 className="display-4 fw-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Simple Tax Solutions for Your Sole Trader Business, <br /> No Matter Your Turnover.
          </h1>

          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0 small" style={{ background: 'transparent' }}>
              <li className="breadcrumb-item"><Link href="/" className="text-decoration-none text-brand-orange">Home</Link></li>
              <li className="breadcrumb-item"><Link href="/packages" className="text-decoration-none text-brand-orange">Packages</Link></li>
              <li className="breadcrumb-item active text-white-50" aria-current="page">LTD Company</li>
            </ol>
          </nav>
        </div>
      </header>

      {/* Pricing Section */}
      <section className="py-5 bg-white">
        <div className="container py-4 text-center mb-4">
            <h2 className="display-6 fw-bold text-brand-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Focus on Your Business <br /> We'll Handle the Tax Bill
            </h2>
        </div>

        <div className="container pb-4">
          <div className="row g-4 justify-content-center">
            
            {/* Essential Package */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 service-card position-relative">
                <div className="text-center mb-4">
                  <h3 className="fw-bold text-brand-dark mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>Essential</h3>
                  <p className="text-muted small">Turnover</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <span className="fs-1 fw-bold text-brand-orange">£45</span>
                    <span className="text-muted ms-1">+VAT / m</span>
                  </div>
                </div>
                
                <ul className="list-unstyled text-secondary mb-4 d-flex flex-column gap-3" style={{ fontSize: '0.95rem' }}>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Free Initial Consultation</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Bookkeeping Spreadsheet</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Full Set of Accounts</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Abridged Accounts</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Corporation Tax Return</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Director Personal Tax Return</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Confirmation Statement inc. CH Fee</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Payroll for 1 Employee</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Automated Email Reminders</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>64-8 Authority – Dealing with HMRC</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Online Submission to HMRC and CH</span></li>
                </ul>
                
                <div className="mt-auto pt-4 text-center">
                  <a href="#signup" className="btn btn-brand-outline w-100 py-2 fw-bold">Join Now</a>
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
                    <span className="fs-1 fw-bold text-brand-orange">£60</span>
                    <span className="text-muted ms-1">+VAT / m</span>
                  </div>
                </div>
                
                <ul className="list-unstyled text-secondary mb-4 d-flex flex-column gap-3" style={{ fontSize: '0.95rem' }}>
                  <li className="d-flex align-items-start fw-semibold text-brand-dark"><CheckIcon /> <span>Essential Package Services</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Bookkeeping up to 120 Transactions a month</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Payroll for up to 5 Employees</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Quarterly VAT Returns</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Unlimited Telephonic, Whatsapp & Email Support</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Tax Planning Advice</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Dedicated Accountant Upon Request</span></li>
                </ul>
                
                <div className="mt-auto pt-4 text-center">
                  <a href="#signup" className="btn btn-brand w-100 py-2 fw-bold shadow">Join Now</a>
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
                    <span className="fs-1 fw-bold text-brand-orange">£85</span>
                    <span className="text-muted ms-1">+VAT / m</span>
                  </div>
                </div>
                
                <ul className="list-unstyled text-secondary mb-4 d-flex flex-column gap-3" style={{ fontSize: '0.95rem' }}>
                  <li className="d-flex align-items-start fw-semibold text-brand-dark"><CheckIcon /> <span>Extensive Package Services</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Payroll for up to 10 Employees</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Setting up Accounting System</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Company Secretarial</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Tax Investigation Insurance</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /> <span>Business Health Meeting up to 2 Annually</span></li>
                </ul>
                
                <div className="mt-auto pt-4 text-center">
                  <a href="#signup" className="btn btn-brand-outline w-100 py-2 fw-bold">Join Now</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-5 bg-light border-top">
        <div className="container text-center">
          <Partners />
        </div>
      </section>
      <ContactForm />
    </div>
  );
};

export default LtdCompanyPackage;
