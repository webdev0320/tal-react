import React from 'react';
import ClientScroll from '../components/ClientScroll';
import Link from '../components/NextLinkShim';
import Partners from '../components/Partners';
import Footer from '../components/Footer';

const CheckIcon = () => (
  <svg className="me-2 flex-shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--brand-orange)' }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const LandlordsPackage = () => {
  

  return (
    <div className="bg-light">
      <ClientScroll />
      {/* Hero */}
      <header className="position-relative text-white overflow-hidden py-5" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)' }}>
        <div className="container position-relative py-4" style={{ zIndex: 2 }}>
          <span className="text-uppercase small fw-bold mb-2 d-inline-block text-brand-orange" style={{ letterSpacing: '2px' }}>Landlords Pricing</span>
          <h1 className="display-4 fw-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Property Tax Made Simple. <br /> From One Flat to a Full Portfolio.
          </h1>
          <p className="text-white-50 fs-5 mb-4" style={{ maxWidth: 600 }}>Buy-to-let returns, capital gains tax advice, and full MTD compliance — handled by specialist property accountants.</p>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 small" style={{ background: 'transparent' }}>
              <li className="breadcrumb-item"><Link href="/" className="text-decoration-none text-brand-orange">Home</Link></li>
              <li className="breadcrumb-item"><Link href="/packages" className="text-decoration-none text-brand-orange">Packages</Link></li>
              <li className="breadcrumb-item active text-white-50" aria-current="page">Landlords</li>
            </ol>
          </nav>
        </div>
      </header>

      {/* Key Services */}
      <section className="py-5 bg-white border-bottom">
        <div className="container py-3">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-brand-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>Specialist Landlord Accounting Services</h2>
            <p className="text-muted">Everything a UK landlord needs — from a single rental property to a complex multi-site portfolio.</p>
          </div>
          <div className="row g-4">
            {[
              { icon: '🏠', title: 'Buy-to-Let Tax Returns', text: 'Full SA105 rental income pages with allowable expense optimisation and HMRC submission.' },
              { icon: '🗂️', title: 'Multi-Property Portfolios', text: 'Consolidated reporting for multiple properties, HMOs, furnished holiday lets, and mixed portfolios.' },
              { icon: '📈', title: 'Capital Gains Tax Advice', text: 'Strategic CGT planning before you sell, including principal private residence and letting relief.' },
              { icon: '🔄', title: 'MTD Compliance', text: 'Making Tax Digital for landlords — quarterly digital submissions handled from day one.' },
              { icon: '💼', title: 'Mortgage Interest Relief', text: 'Expert guidance on Section 24 restrictions with structural tax planning to protect your yield.' },
              { icon: '🏢', title: 'Ltd Company Transfers', text: 'Advice on incorporating your portfolio into a limited company structure for long-term savings.' },
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
            <h2 className="display-6 fw-bold text-brand-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>Focus on Your Property. <br /> We'll Handle the Tax Bill.</h2>
            <p className="text-muted mt-2">Transparent monthly pricing — no hidden fees, no surprises.</p>
          </div>
          <div className="row g-4 justify-content-center">

            {/* Essential */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 service-card">
                <div className="text-center mb-4">
                  <h3 className="fw-bold text-brand-dark mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>Essential</h3>
                  <p className="text-muted small mb-0">Single Property</p>
                  <div className="d-flex justify-content-center align-items-baseline mt-1">
                    <span className="fs-1 fw-bold text-brand-orange">£25</span>
                    <span className="text-muted ms-1">+VAT / m</span>
                  </div>
                </div>
                <ul className="list-unstyled text-secondary mb-4 d-flex flex-column gap-3" style={{ fontSize: '0.95rem' }}>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Rental Income Self Assessment (SA105)</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Allowable Expense Review & Optimisation</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Section 24 Mortgage Interest Relief Advice</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>64-8 Authority – Dealing with HMRC</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Online Submission to HMRC</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Automated Tax Deadline Reminders</span></li>
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
                  <p className="text-muted small mb-0">2–5 Properties</p>
                  <div className="d-flex justify-content-center align-items-baseline mt-1">
                    <span className="fs-1 fw-bold text-brand-orange">£45</span>
                    <span className="text-muted ms-1">+VAT / m</span>
                  </div>
                </div>
                <ul className="list-unstyled text-secondary mb-4 d-flex flex-column gap-3" style={{ fontSize: '0.95rem' }}>
                  <li className="d-flex align-items-start fw-semibold text-brand-dark"><CheckIcon /><span>All Essential Services</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Multi-Property Portfolio Accounting</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Capital Gains Tax Calculation & Planning</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>MTD Bookkeeping (up to 80 transactions/mo)</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>HMO & Furnished Holiday Let Expertise</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Unlimited WhatsApp & Email Support</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Dedicated Property Tax Accountant</span></li>
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
                  <p className="text-muted small mb-0">Large Portfolios & LTD</p>
                  <div className="d-flex justify-content-center align-items-baseline mt-1">
                    <span className="fs-1 fw-bold text-brand-orange">£75</span>
                    <span className="text-muted ms-1">+VAT / m</span>
                  </div>
                </div>
                <ul className="list-unstyled text-secondary mb-4 d-flex flex-column gap-3" style={{ fontSize: '0.95rem' }}>
                  <li className="d-flex align-items-start fw-semibold text-brand-dark"><CheckIcon /><span>All Extensive Services</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Unlimited Properties in Portfolio</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Ltd Company Incorporation Advice</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Annual Accounts for Property Holding Companies</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Overseas Rental Income Reporting</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Inheritance Tax & Estate Planning Advice</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Tax Investigation Insurance</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Annual Business Health Meeting</span></li>
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
      <Footer />
      </div>
  );
};

export default LandlordsPackage;
