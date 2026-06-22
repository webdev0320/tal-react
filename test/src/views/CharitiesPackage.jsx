"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';
import Partners from '../components/Partners';

const CheckIcon = () => (
  <svg className="me-2 flex-shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--brand-orange)' }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CharitiesPackage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-light">
      {/* Hero */}
      <header className="position-relative text-white overflow-hidden py-5" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)' }}>
        <div className="container position-relative py-4" style={{ zIndex: 2 }}>
          <span className="text-uppercase small fw-bold mb-2 d-inline-block text-brand-orange" style={{ letterSpacing: '2px' }}>Charities & Non-Profits</span>
          <h1 className="display-4 fw-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Accounting for Charities. <br /> So You Can Focus on Your Mission.
          </h1>
          <p className="text-white-50 fs-5 mb-4" style={{ maxWidth: 600 }}>Non-profit compliance, Gift Aid maximisation, Charity Commission filings, and fund accounting — handled by specialist charity accountants.</p>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 small" style={{ background: 'transparent' }}>
              <li className="breadcrumb-item"><Link href="/" className="text-decoration-none text-brand-orange">Home</Link></li>
              <li className="breadcrumb-item"><Link href="/packages" className="text-decoration-none text-brand-orange">Packages</Link></li>
              <li className="breadcrumb-item active text-white-50" aria-current="page">Charities</li>
            </ol>
          </nav>
        </div>
      </header>

      {/* Key Services */}
      <section className="py-5 bg-white border-bottom">
        <div className="container py-3">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-brand-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>Specialist Charity Accounting Services</h2>
            <p className="text-muted">We understand the unique compliance requirements of charities, CICs, and non-profits operating in the UK.</p>
          </div>
          <div className="row g-4">
            {[
              { icon: '🎁', title: 'Gift Aid Maximisation', text: 'Claim back 25p for every £1 donated — we manage your Gift Aid declarations, HMRC claims, and donor records.' },
              { icon: '📋', title: 'Charity Commission Filings', text: 'Annual return preparation and submission to the Charity Commission, including trustee reports and financial statements.' },
              { icon: '📊', title: 'Fund Accounting', text: 'Restricted, unrestricted, and endowment fund reporting — clearly separated and compliant with SORP guidelines.' },
              { icon: '🏛️', title: 'Trustees\' Annual Report', text: 'Professional preparation of the trustees\' annual report meeting the Charities SORP (FRS 102) requirements.' },
              { icon: '💼', title: 'Payroll for Charity Staff', text: 'PAYE, pension auto-enrolment, and payroll for both paid staff and volunteers receiving expenses.' },
              { icon: '🔄', title: 'VAT for Charities', text: 'Specialist advice on charity VAT reliefs, partial exemption, and business vs. non-business activity distinctions.' },
            ].map((s, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="d-flex gap-3 p-4 rounded-4 h-100 service-card bg-white border-0 shadow-sm">
                  <div className="flex-shrink-0 d-flex align-items-center justify-content-center rounded-3" style={{ width: 48, height: 48, background: 'rgba(210,96,26,0.1)' }}>
                    <span style={{ fontSize: '1.4rem' }}>{s.icon}</span>
                  </div>
                  <div>
                    <h6 className="fw-bold text-brand-dark mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>{s.title}</h6>
                    <p className="text-muted small mb-0">{s.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold text-brand-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>Focus on Your Cause. <br /> We'll Handle the Compliance.</h2>
            <p className="text-muted mt-2">Affordable, transparent pricing designed specifically for the charity and non-profit sector.</p>
          </div>
          <div className="row g-4 justify-content-center">

            {/* Essential */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 service-card">
                <div className="text-center mb-4">
                  <h3 className="fw-bold text-brand-dark mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>Essential</h3>
                  <p className="text-muted small mb-0">Small Charities</p>
                  <div className="d-flex justify-content-center align-items-baseline mt-1">
                    <span className="fs-1 fw-bold text-brand-orange">£35</span>
                    <span className="text-muted ms-1">+VAT / m</span>
                  </div>
                  <p className="text-muted small mt-1">Income under £25,000/yr</p>
                </div>
                <ul className="list-unstyled text-secondary mb-4 d-flex flex-column gap-3" style={{ fontSize: '0.95rem' }}>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Annual Accounts (Receipts & Payments)</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Charity Commission Annual Return</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Gift Aid Registration & Claims</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Trustees' Annual Report Preparation</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>HMRC Correspondence & 64-8 Authority</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Online Submission to Charity Commission</span></li>
                </ul>
                <div className="mt-auto pt-3 text-center">
                  <a href="#signup" className="btn btn-brand-outline w-100 py-2 fw-bold">Get Started</a>
                </div>
              </div>
            </div>

            {/* Extensive */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow rounded-4 p-4 service-card position-relative" style={{ borderTop: '4px solid var(--brand-orange)' }}>
                <div className="position-absolute top-0 end-0 bg-danger text-white px-3 py-1 fw-bold small shadow-sm" style={{ borderBottomLeftRadius: '10px', borderTopRightRadius: '10px' }}>Most Popular</div>
                <div className="text-center mb-4">
                  <h3 className="fw-bold text-brand-dark mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>Extensive</h3>
                  <p className="text-muted small mb-0">Growing Charities</p>
                  <div className="d-flex justify-content-center align-items-baseline mt-1">
                    <span className="fs-1 fw-bold text-brand-orange">£60</span>
                    <span className="text-muted ms-1">+VAT / m</span>
                  </div>
                  <p className="text-muted small mt-1">Income £25,000 – £250,000/yr</p>
                </div>
                <ul className="list-unstyled text-secondary mb-4 d-flex flex-column gap-3" style={{ fontSize: '0.95rem' }}>
                  <li className="d-flex align-items-start fw-semibold text-brand-dark"><CheckIcon /><span>All Essential Services</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>SORP-Compliant Accruals Accounts (FRS 102)</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Restricted & Unrestricted Fund Accounting</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Payroll for up to 5 Staff Members</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Gift Aid Donor Database Management</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Bookkeeping up to 100 Transactions/mo</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Unlimited Telephonic & Email Support</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Dedicated Charity Accountant</span></li>
                </ul>
                <div className="mt-auto pt-3 text-center">
                  <a href="#signup" className="btn btn-brand w-100 py-2 fw-bold shadow">Get Started</a>
                </div>
              </div>
            </div>

            {/* Supreme */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 service-card position-relative">
                <div className="position-absolute top-0 end-0 bg-danger text-white px-3 py-1 fw-bold small shadow-sm" style={{ borderBottomLeftRadius: '10px', borderTopRightRadius: '10px' }}>Sale</div>
                <div className="text-center mb-4">
                  <h3 className="fw-bold text-brand-dark mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>Supreme</h3>
                  <p className="text-muted small mb-0">Larger Organisations</p>
                  <div className="d-flex justify-content-center align-items-baseline mt-1">
                    <span className="fs-1 fw-bold text-brand-orange">£100</span>
                    <span className="text-muted ms-1">+VAT / m</span>
                  </div>
                  <p className="text-muted small mt-1">Income over £250,000/yr</p>
                </div>
                <ul className="list-unstyled text-secondary mb-4 d-flex flex-column gap-3" style={{ fontSize: '0.95rem' }}>
                  <li className="d-flex align-items-start fw-semibold text-brand-dark"><CheckIcon /><span>All Extensive Services</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Independent Examination or Audit Support</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Payroll for up to 20 Staff Members</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>VAT Partial Exemption Calculations</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Social Enterprise & CIC Compliance</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Grant Reporting & Management Accounts</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Trading Subsidiary Accounting</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Annual Governance & Finance Health Review</span></li>
                </ul>
                <div className="mt-auto pt-3 text-center">
                  <a href="#signup" className="btn btn-brand-outline w-100 py-2 fw-bold">Get Started</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-5 bg-white border-top">
        <div className="container text-center">
          <h2 className="text-brand-dark mb-5 fw-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>Our Clients and Collaborative Partners</h2>
          <Partners />
        </div>
      </section>
    </div>
  );
};

export default CharitiesPackage;
