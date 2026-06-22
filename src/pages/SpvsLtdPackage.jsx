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

const SpvsLtdPackage = () => {
  

  return (
    <div className="bg-light">
      <ClientScroll />
      {/* Hero */}
      <header className="position-relative text-white overflow-hidden py-5" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)' }}>
        <div className="container position-relative py-4" style={{ zIndex: 2 }}>
          <span className="text-uppercase small fw-bold mb-2 d-inline-block text-brand-orange" style={{ letterSpacing: '2px' }}>SPVs & Property Ltd Companies</span>
          <h1 className="display-4 fw-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Tax-Efficient Property Structures. <br /> Built for Serious Investors.
          </h1>
          <p className="text-white-50 fs-5 mb-4" style={{ maxWidth: 600 }}>Special Purpose Vehicles, property holding companies, and corporate tax efficiency for UK property investors.</p>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 small" style={{ background: 'transparent' }}>
              <li className="breadcrumb-item"><Link href="/" className="text-decoration-none text-brand-orange">Home</Link></li>
              <li className="breadcrumb-item"><Link href="/packages" className="text-decoration-none text-brand-orange">Packages</Link></li>
              <li className="breadcrumb-item active text-white-50" aria-current="page">SPVs & Ltd</li>
            </ol>
          </nav>
        </div>
      </header>

      {/* Key Services */}
      <section className="py-5 bg-white border-bottom">
        <div className="container py-3">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-brand-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>What We Do for SPVs & Property LTDs</h2>
            <p className="text-muted">Specialist accounting for property holding companies — from incorporation to annual compliance.</p>
          </div>
          <div className="row g-4">
            {[
              { icon: '🏗️', title: 'SPV Structure Setup', text: 'Full advice on setting up a Special Purpose Vehicle for property investment, including optimal share structures and SIC codes.' },
              { icon: '🏢', title: 'Annual Accounts & CT600', text: 'Statutory accounts preparation and corporation tax return filing for your property holding company.' },
              { icon: '💷', title: 'Stamp Duty Land Tax', text: 'SDLT planning, including the 3% surcharge, multiple dwellings relief, and mixed-use property treatment.' },
              { icon: '📊', title: 'Corporation Tax Efficiency', text: 'Maximising allowable deductions, interest relief, and capital allowances within your SPV structure.' },
              { icon: '🔗', title: 'Inter-Company Transactions', text: 'Management charges, director loans, and dividend extraction structured for maximum tax efficiency.' },
              { icon: '🔄', title: 'Ongoing Compliance', text: 'Confirmation statements, Companies House filings, and HMRC correspondence all handled for you.' },
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
            <h2 className="display-6 fw-bold text-brand-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>Transparent Pricing for Your Property Company</h2>
            <p className="text-muted mt-2">All plans include corporation tax filing, Companies House submission, and dedicated accountant support.</p>
          </div>
          <div className="row g-4 justify-content-center">

            {/* Essential */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 service-card">
                <div className="text-center mb-4">
                  <h3 className="fw-bold text-brand-dark mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>Essential</h3>
                  <p className="text-muted small mb-0">Single SPV</p>
                  <div className="d-flex justify-content-center align-items-baseline mt-1">
                    <span className="fs-1 fw-bold text-brand-orange">£55</span>
                    <span className="text-muted ms-1">+VAT / m</span>
                  </div>
                </div>
                <ul className="list-unstyled text-secondary mb-4 d-flex flex-column gap-3" style={{ fontSize: '0.95rem' }}>
                  <li className="d-flex align-items-start"><CheckIcon /><span>SPV Company Formation Advice</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Annual Statutory Accounts</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Corporation Tax Return (CT600)</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Confirmation Statement inc. CH Fee</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Director's Personal Tax Return</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>64-8 Authority – Dealing with HMRC</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Online Submission to HMRC and CH</span></li>
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
                  <p className="text-muted small mb-0">Growing Portfolio</p>
                  <div className="d-flex justify-content-center align-items-baseline mt-1">
                    <span className="fs-1 fw-bold text-brand-orange">£80</span>
                    <span className="text-muted ms-1">+VAT / m</span>
                  </div>
                </div>
                <ul className="list-unstyled text-secondary mb-4 d-flex flex-column gap-3" style={{ fontSize: '0.95rem' }}>
                  <li className="d-flex align-items-start fw-semibold text-brand-dark"><CheckIcon /><span>All Essential Services</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Bookkeeping up to 150 Transactions/mo</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Quarterly VAT Returns</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Corporation Tax Optimisation Planning</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>SDLT Review & Multi-Dwelling Relief</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Inter-Company Transaction Structuring</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Unlimited Telephonic & Email Support</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Dedicated Property Company Accountant</span></li>
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
                  <p className="text-muted small mb-0">Multi-SPV Groups</p>
                  <div className="d-flex justify-content-center align-items-baseline mt-1">
                    <span className="fs-1 fw-bold text-brand-orange">£120</span>
                    <span className="text-muted ms-1">+VAT / m</span>
                  </div>
                </div>
                <ul className="list-unstyled text-secondary mb-4 d-flex flex-column gap-3" style={{ fontSize: '0.95rem' }}>
                  <li className="d-flex align-items-start fw-semibold text-brand-dark"><CheckIcon /><span>All Extensive Services</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Multiple SPV Companies Covered</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Group Consolidated Accounts</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Group Relief & Transfer Pricing</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>ATED (Annual Tax on Enveloped Dwellings)</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Inheritance Tax & IHT Business Property Relief</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Tax Investigation Insurance</span></li>
                  <li className="d-flex align-items-start"><CheckIcon /><span>Bi-Annual Business Health Meeting</span></li>
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

export default SpvsLtdPackage;
