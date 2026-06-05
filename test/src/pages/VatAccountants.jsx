import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Partners from '../components/Partners';
import ReviewsSlider from '../components/ReviewsSlider';
import TaxationLinksBar from '../components/TaxationLinksBar';

// Inline styled icons matching Lucide / SVG style
const CheckIcon = () => (
  <svg className="me-2 flex-shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--brand-orange)' }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const WarningIcon = () => (
  <svg className="me-2 flex-shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--brand-orange)' }}>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const InfoIcon = () => (
  <svg className="me-2 flex-shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#0dcaf0' }}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const VatAccountants = () => {
  // Stateful states for FAQ accordion and contact form submission
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 5000);
  };

  const faqs = [
    {
      q: 'What does a VAT accountant do?',
      a: 'A VAT accountant manages the full VAT life-cycle for your business. This includes registering your company for VAT, choosing the most cost-effective VAT scheme, preparing and reconciling VAT figures, submitting accurate quarterly or monthly VAT returns online to HMRC, and managing any audits or queries from HMRC.'
    },
    {
      q: 'How do I submit a VAT return online UK?',
      a: 'All VAT returns must now be submitted electronically using Making Tax Digital (MTD) compatible software. You must link your accounting records, reconcile sales and purchases, generate the 9-box VAT return, and submit it online via the HMRC MTD gateway. A VAT accountant ensures your calculations are fully aligned with your invoices before submitting.'
    },
    {
      q: 'When do I need a VAT registration accountant?',
      a: 'You are legally required to register for VAT if your taxable business turnover exceeds the threshold of £90,000 (rolling 12-month period). You can also choose to register voluntarily before reaching the threshold to reclaim input VAT. A VAT registration accountant helps analyze when to register, structures the process, and ensures you select the correct scheme.'
    },
    {
      q: 'Can VAT accountants fix previous filing errors?',
      a: 'Yes. If you discover a mistake on a previously submitted VAT return, our VAT accountants can review your transaction history, calculate the adjustments required, and submit the necessary correction notifications (such as form VAT652) to HMRC to resolve the errors cleanly.'
    },
    {
      q: 'What is the Flat Rate VAT scheme?',
      a: 'The Flat Rate Scheme is a simplified HMRC VAT structure designed for small businesses with an expected turnover under £150,000. Instead of calculating VAT on every purchase and sale, you pay HMRC a fixed percentage of your gross turnover. The percentage depends on your industry sector.'
    },
    {
      q: 'What are the penalties for late VAT filing or payment?',
      a: 'HMRC operates a points-based system for late submissions and payments. Each late return incurs 1 penalty point. Once a point threshold is reached, you are charged an automatic £200 penalty. Late payments also attract interest charges and percentage-based financial surcharges depending on how late the payment is.'
    }
  ];



  return (
    <div className="bg-light min-h-screen">

      {/* ── HERO SECTION WITH SIDEBAR OVERLAP ── */}
      <header className="position-relative text-white overflow-hidden py-5" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)', minHeight: '380px' }}>
        <div className="position-absolute w-100 h-100" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(210, 96, 26, 0.15) 0%, transparent 60%)', top: 0, left: 0, zIndex: 1 }}></div>
        <div className="container position-relative py-4" style={{ zIndex: 2 }}>
          <div className="row g-4 align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <span className="text-uppercase small tracking-wider fw-bold mb-2 d-inline-block text-brand-orange" style={{ letterSpacing: '2px' }}>
                Value Added Tax Specialists
              </span>
              <h1 className="display-4 fw-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                VAT Accountants UK, Submit VAT Returns Online
              </h1>
              <p className="lead text-white-50 mb-4" style={{ maxWidth: '680px', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Expert VAT services, UK HMRC registration, online VAT return submission & comprehensive tax advice for businesses at Taxaccolega.
              </p>
              
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mb-4">
                <a href="#contact-block" className="btn btn-brand px-4 py-2 shadow">
                  CONTACT US
                </a>
              </div>

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0 small" style={{ background: 'transparent' }}>
                  <li className="breadcrumb-item"><Link to="/" className="text-decoration-none text-brand-orange">Home</Link></li>
                  <li className="breadcrumb-item"><Link to="/taxation" className="text-decoration-none text-brand-orange">Taxation</Link></li>
                  <li className="breadcrumb-item active text-white-50" aria-current="page">VAT Tax Accounting official</li>
                </ol>
              </nav>
            </div>
            
            {/* HERO OVERLAPPING SIDEBAR */}
            <div className="col-lg-4 d-none d-lg-block position-relative" style={{ zIndex: 3 }}>
              <div className="p-4 rounded-4 shadow-lg" style={{ background: 'linear-gradient(180deg, rgba(232,162,116,0.9) 0%, rgba(212,108,36,0.95) 50%, rgba(184,80,14,1) 100%)' }}>
                <h5 className="text-white fw-bold mb-4 text-center border-bottom pb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>Quick Navigation</h5>
                <div className="d-flex flex-column gap-3">
                  {[
                    { title: 'Tax Investigation', link: '/taxation/tax-investigation-insurance' },
                    { title: 'Income Tax Accountant', link: '/taxation/personal-income-tax-professionals-and-chartered-accountants' },
                    { title: 'VAT Tax Accounting', link: '/taxation/vat-accountants' }
                  ].map((item, idx) => (
                    <Link key={idx} to={item.link} className="card border-0 shadow rounded-3 p-3 text-decoration-none bg-white hover-shadow transition" style={{ transition: 'all 0.3s' }}>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-bold text-brand-dark" style={{ fontSize: '0.95rem' }}>{item.title}</span>
                        <span className="text-brand-orange fw-bold">READ MORE &raquo;</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── BREADCRUMBS & SIDEBAR FOR MOBILE ── */}
      <section className="d-block d-lg-none py-3 bg-white border-bottom shadow-sm">
        <div className="container">
          <div className="row g-2">
            {[
              { title: 'Tax Investigation', link: '/taxation/tax-investigation-insurance' },
              { title: 'Income Tax Accountant', link: '/taxation/personal-income-tax-professionals-and-chartered-accountants' },
              { title: 'VAT Tax Accounting', link: '/taxation/vat-accountants' }
            ].map((item, idx) => (
              <div className="col-4" key={idx}>
                <Link to={item.link} className="btn btn-sm btn-outline-dark w-100 text-truncate fw-semibold" style={{ fontSize: '0.75rem' }}>
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 1: HOW VAT DEVELOPS ── */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">The VAT Progression</span>
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                VAT Rarely Feels Like a Problem at the Beginning — But It Builds Quickly
              </h2>
              <div className="text-secondary d-flex flex-column gap-3 fs-6" style={{ lineHeight: 1.8 }}>
                <p>VAT rarely feels like a problem at the beginning. A business starts trading, invoices go out, expenses are paid, and everything appears manageable. Then activity increases.</p>
                <p>More transactions, more suppliers, more customers — and suddenly VAT starts to feel less straightforward.</p>
                <p>Figures need to match. Deadlines become tighter. There’s uncertainty around what should actually be reported and when to submit a VAT return UK.</p>
                <p className="fw-semibold text-brand-dark bg-light p-3 border-start border-brand-orange border-4 rounded-end">
                  This is where working with a VAT accountant in London UK becomes relevant. For most businesses, VAT doesn’t become difficult because of the rules — it becomes difficult because of how those rules apply to real business activity.
                </p>
              </div>
            </div>
            
            <div className="col-lg-4 d-block d-lg-none">
              <div className="p-4 rounded-4 shadow-lg text-white" style={{ background: 'linear-gradient(180deg, rgba(232,162,116,0.9) 0%, rgba(212,108,36,0.95) 50%, rgba(184,80,14,1) 100%)' }}>
                <h5 className="fw-bold mb-3 text-center border-bottom pb-2">Quick Navigation</h5>
                <div className="d-flex flex-column gap-3">
                  {[
                    { title: 'Tax Investigation', link: '/taxation/tax-investigation-insurance' },
                    { title: 'Income Tax Accountant', link: '/taxation/personal-income-tax-professionals-and-chartered-accountants' },
                    { title: 'VAT Tax Accounting', link: '/taxation/vat-accountants' }
                  ].map((item, idx) => (
                    <Link key={idx} to={item.link} className="card border-0 shadow rounded-3 p-3 text-decoration-none bg-white hover-shadow transition" style={{ transition: 'all 0.3s' }}>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-bold text-brand-dark" style={{ fontSize: '0.9rem' }}>{item.title}</span>
                        <span className="text-brand-orange fw-bold">READ &raquo;</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: ACCURACY COMPLIANCE ── */}
      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Strategic VAT Oversight</span>
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                VAT Accountants London – VAT Services Built Around Accuracy
              </h2>
              <p className="text-secondary mb-4 fs-6" style={{ lineHeight: 1.8 }}>
                Our VAT services are designed to keep your business fully compliant, your reporting consistent, and your submissions highly accurate.
              </p>
              
              <h5 className="fw-bold text-brand-dark mb-3">Our VAT accounting methodologies are structured to:</h5>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-center"><CheckIcon /> keep transactional records clear before submission</li>
                <li className="d-flex align-items-center"><CheckIcon /> avoid retroactive fixes and late HMRC filing panic</li>
                <li className="d-flex align-items-center"><CheckIcon /> advise on registration, returns, and correct tax code usage</li>
              </ul>
              
              <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                Whether you need a VAT registration accountant, ongoing VAT accounting support, or support to file VAT returns online, the focus stays the same: 
                <strong className="text-brand-dark d-block mt-2 fs-5">keep records clear before submission — not fix them afterwards.</strong>
              </p>
            </div>
            
            <div className="col-lg-5">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img 
                  src="/images/2023/06/Benefits-of-Hiring-an-Accountant-for-a-Small-Business-scaled-1-1024x683.jpg" 
                  alt="VAT Filing Dashboard Screen" 
                  className="img-fluid rounded-3" 
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: TAX BADGES NAV GRID (now using shared TaxationLinksBar) ── */}
      <TaxationLinksBar />

      {/* ── SECTION 4: HOW VAT WORKS IN REAL BUSINESS ── */}
      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 order-2 order-lg-1">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img 
                  src="/images/2023/06/calculator-khOE-621x414@LiveMint.webp" 
                  alt="VAT ledger tracking" 
                  className="img-fluid rounded-3"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
            
            <div className="col-lg-7 order-1 order-lg-2">
              <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">VAT Mechanics</span>
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                How VAT Works in Real Business Activity
              </h2>
              <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>
                In practice, VAT accounting is not just about submitting periodic returns. It’s about understanding how VAT flows through your day-to-day business.
              </p>
              
              <ul className="list-unstyled mb-4 d-flex flex-column gap-3 text-secondary" style={{ lineHeight: 1.7 }}>
                <li className="d-flex align-items-start">
                  <CheckIcon />
                  <div>
                    <strong>VAT Collection on Sales:</strong> Every commercial transaction you execute represents VAT collected on behalf of HMRC.
                  </div>
                </li>
                <li className="d-flex align-items-start">
                  <CheckIcon />
                  <div>
                    <strong>VAT Deduction on Purchases:</strong> Your business expenditures represent input VAT paid, which can be reclaimed against collections.
                  </div>
                </li>
                <li className="d-flex align-items-start">
                  <CheckIcon />
                  <div>
                    <strong>The Reconciled Balance:</strong> The difference between sales VAT and purchase VAT is what gets reported and paid or refunded in your VAT return UK.
                  </div>
                </li>
              </ul>
              
              <p className="text-secondary fw-semibold bg-white p-3 rounded shadow-sm border-start border-brand-orange border-4">
                This mechanism relies entirely on accurate bookkeeping. When underlying <Link to="/accounts/bookkeeping-services/" className="text-brand-orange text-decoration-none">bookkeeping services for small businesses</Link> are kept up to date, VAT reporting stays simple and secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: CLIENTS AND PARTNERS ── */}
      <Partners />

      {/* ── SECTION 6: SUBMIT WITH CONFIDENCE ── */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Submission Quality</span>
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Submit the VAT Return with Absolute Confidence
              </h2>
              <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>
                Filing VAT returns online is now standard under HMRC requirements. But the submission itself is not usually where things go wrong.
              </p>
              
              <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>
                Most issues arise before submission — when figures don’t align. A common example is where sales invoices include VAT but purchase invoices are recorded late, creating an overstated liability. Another is where VAT is applied incorrectly on mixed-use expenses, leading to inaccurate input VAT claims.
              </p>

              <div className="p-4 border-start border-brand-orange border-4 bg-light rounded-end mb-4">
                <h5 className="fw-bold text-brand-dark mb-3">Reaching the Crunch Point:</h5>
                <ul className="list-unstyled mb-0 d-flex flex-column gap-2 text-secondary" style={{ fontSize: '0.92rem' }}>
                  <li className="d-flex align-items-center"><WarningIcon /> VAT returns are due and pressure builds</li>
                  <li className="d-flex align-items-center"><WarningIcon /> Figures look correct on the spreadsheet dashboard</li>
                  <li className="d-flex align-items-center"><WarningIcon /> But final totals don’t fully match underlying records</li>
                </ul>
              </div>

              <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                This is where working with VAT return accountants becomes critical. It is not about submitting VAT returns — it is about ensuring that the figures behind them reflect your actual business activity before they are filed.
              </p>
            </div>
            
            <div className="col-lg-5">
              <div className="card border-0 shadow-lg rounded-4 p-4 text-white" style={{ background: '#1d3c45' }}>
                <h4 className="fw-bold mb-4 border-bottom pb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>Our VAT Management Scope</h4>
                <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                  {[
                    { t: 'Preparing VAT returns', d: 'Fully reconciling invoices, expenses, and scheme rules.' },
                    { t: 'Reviewing figures before submission', d: 'Audit check of tax codes to guarantee alignment.' },
                    { t: 'Filing VAT returns online', d: 'Seamlessly through HMRC Making Tax Digital (MTD) gateway.' },
                    { t: 'Handling VAT tax return corrections', d: 'Preparing adjustments for any historic errors.' }
                  ].map((scope, idx) => (
                    <li key={idx} className="d-flex align-items-start gap-3">
                      <div className="bg-brand-orange text-white rounded-circle d-flex align-items-center justify-content-center mt-1" style={{ width: '24px', height: '24px', minWidth: '24px' }}>
                        <i className="fas fa-check" style={{ fontSize: '0.75rem' }}></i>
                      </div>
                      <div>
                        <span className="fw-bold d-block text-white" style={{ fontSize: '0.95rem' }}>{scope.t}</span>
                        <span className="text-white-50 small">{scope.d}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: VAT REGISTRATION ── */}
      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 order-2 order-lg-1">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img 
                  src="/images/2023/06/What-is-the-process-100-scaled-1.webp" 
                  alt="VAT Setup documents" 
                  className="img-fluid rounded-3"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
            
            <div className="col-lg-7 order-1 order-lg-2">
              <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Initial Setup Protocols</span>
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                VAT Registration Accountant – Getting Set Up Properly
              </h2>
              <p className="text-secondary mb-4 fs-6" style={{ lineHeight: 1.8 }}>
                VAT registration is one of the first stages where early mistakes can carry forward across years. Some businesses register too early. Others delay registration and face severe penalties.
              </p>
              
              <h5 className="fw-bold text-brand-dark mb-3">A dedicated VAT registration accountant ensures:</h5>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-center"><CheckIcon /> <strong>correct registration timing:</strong> avoid missing threshold deadlines or registering prematurely</li>
                <li className="d-flex align-items-center"><CheckIcon /> <strong>scheme selection:</strong> Flat Rate Scheme, Cash Accounting, or Standard Scheme evaluation</li>
                <li className="d-flex align-items-center"><CheckIcon /> <strong>accounting system setup:</strong> aligning software like Xero or QuickBooks for compliance</li>
              </ul>
              
              <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                Proper initial structure is especially important when your business is also managing <Link to="/taxation/company-tax-return-accountants" className="text-brand-orange text-decoration-none">corporation tax services</Link>, where VAT treatment directly affects profit calculations and allowable expenses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: WHY WORK WITH VAT ACCOUNTANTS ── */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Commercial Advantage</span>
            <h3 className="text-brand-dark display-6 fw-bold mt-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Why Businesses Work with VAT Accountants
            </h3>
            <p className="text-secondary mt-2">Submission is straightforward — but the preparation behind it is where errors build.</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card border-0 h-100 shadow-sm rounded-4 overflow-hidden">
                <div className="p-4 text-white" style={{ background: '#1d3c45' }}>
                  <h5 className="fw-bold mb-0 d-flex align-items-center">
                    <InfoIcon /> Online VAT Submission
                  </h5>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-secondary small mb-3">Submitting VAT through MTD compatible software simply requires clicking a button, but requires:</p>
                  <ul className="list-unstyled mb-0 d-flex flex-column gap-2 text-secondary" style={{ fontSize: '0.92rem' }}>
                    <li className="d-flex align-items-center"><CheckIcon /> verified and accurate figures</li>
                    <li className="d-flex align-items-center"><CheckIcon /> consistent records across sales & purchases</li>
                    <li className="d-flex align-items-center"><CheckIcon /> correct VAT treatment codes applied</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="card border-0 h-100 shadow-sm rounded-4 overflow-hidden">
                <div className="p-4 text-white bg-brand-orange">
                  <h5 className="fw-bold mb-0 d-flex align-items-center">
                    <WarningIcon /> Common Business Struggles
                  </h5>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-secondary small mb-3">Most businesses struggle with VAT not because of MTD systems, but because:</p>
                  <ul className="list-unstyled mb-0 d-flex flex-column gap-2 text-secondary" style={{ fontSize: '0.92rem' }}>
                    <li className="d-flex align-items-center"><WarningIcon /> records aren't consistent with bank activity</li>
                    <li className="d-flex align-items-center"><WarningIcon /> filing deadlines are too close before checks occur</li>
                    <li className="d-flex align-items-center"><WarningIcon /> sales and purchase figures do not match bank reconciliations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-light rounded-4 shadow-sm text-secondary" style={{ lineHeight: 1.8 }}>
            <p className="mb-0">
              VAT accountants bring structure to the entire process. We focus on comprehensive preparation and continuous reconciliation so that everything is in order before submission, preventing costly correction workflows later.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: REVIEWS SLIDER ── */}
      <ReviewsSlider />

      {/* ── SECTION 10: VAT SERVICES INCLUDED GRID ── */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Service Scope</span>
            <h3 className="text-brand-dark display-6 fw-bold mt-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
              VAT Services Across London and The UK – What’s Included
            </h3>
            <p className="text-secondary mt-2">Comprehensive VAT services covering the full compliance cycle, not just submission.</p>
          </div>
          
          <div className="row g-4 justify-content-center">
            {[
              { title: 'VAT Scheme Optimization', desc: 'Analyzing Cash Accounting, Flat Rate, and Standard Scheme suitability to select the best option.' },
              { title: 'Making Tax Digital (MTD)', desc: 'Seamless system transition and setup using HMRC-compliant software like Xero and QuickBooks.' },
              { title: 'Quarterly Reconciliations', desc: 'Reconciling all sales invoices and purchase receipts regularly to avoid last-minute errors.' },
              { title: 'HMRC Inquiry Support', desc: 'Managing correspondence, handling reviews, and resolving audits directly with HMRC.' }
            ].map((card, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div className="card h-100 border-0 shadow-sm rounded-4 p-4 text-center service-card">
                  <div className="bg-brand-orange text-white rounded-3 d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '48px', height: '48px' }}>
                    <i className={`fas ${i === 0 ? 'fa-chart-pie' : i === 1 ? 'fa-laptop-code' : i === 2 ? 'fa-balance-scale' : 'fa-handshake'} fs-5`}></i>
                  </div>
                  <h5 className="fw-bold mb-2 text-brand-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>{card.title}</h5>
                  <p className="text-secondary mb-0 small" style={{ lineHeight: 1.6 }}>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 11: GROWING BUSINESSES & TIMELINES ── */}
      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 bg-white" style={{ borderTop: '4px solid var(--brand-orange)' }}>
                <h4 className="fw-bold mb-3 text-brand-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>VAT Specialists for Growing Businesses</h4>
                <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>
                  As businesses grow, VAT becomes closely linked to your overall tax structures. It no longer sits separately — it connects with:
                </p>
                <ul className="list-unstyled text-secondary mb-4 d-flex flex-column gap-2">
                  <li className="d-flex align-items-center"><CheckIcon /> income tax decisions & dividend band caps</li>
                  <li className="d-flex align-items-center"><CheckIcon /> capital gains tax positions on asset dispersals</li>
                  <li className="d-flex align-items-center"><CheckIcon /> structural planning and corporate group VAT setups</li>
                </ul>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  At this stage, working with tax advisory services in the UK becomes important, especially when VAT starts affecting wider commercial decisions.
                </p>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 bg-white" style={{ borderTop: '4px solid #1d3c45' }}>
                <h4 className="fw-bold mb-3 text-brand-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>Filing VAT Return UK – Deadlines & Accuracy</h4>
                <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>
                  VAT deadlines are consistent, but they are often missed due to preparation delays rather than computational complexity. Typical problems include:
                </p>
                <ul className="list-unstyled text-secondary mb-4 d-flex flex-column gap-2">
                  <li className="d-flex align-items-center"><WarningIcon /> preparing figures too close to quarterly deadlines</li>
                  <li className="d-flex align-items-center"><WarningIcon /> working from incomplete records or late supplier files</li>
                  <li className="d-flex align-items-center"><WarningIcon /> last-minute adjustments creating filing mismatch logs</li>
                </ul>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  Keeping everything aligned throughout the year avoids these issues. This is especially true when VAT is handled alongside core processes like statutory accounts preparation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 12: PAYROLL & EXPENDITURES ── */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 order-2 order-lg-1">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img 
                  src="/images/2023/06/360_F_250204593_VbMhcn9dQ3TP5DQxBwcZwT6P3xz5rIKD.jpg" 
                  alt="Payroll and accounts audit" 
                  className="img-fluid rounded-3"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
            
            <div className="col-lg-7 order-1 order-lg-2">
              <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Operational Alignment</span>
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                VAT and Payroll, Expenses, and Business Activity
              </h2>
              <p className="text-secondary mb-4 fs-6" style={{ lineHeight: 1.8 }}>
                VAT doesn’t operate in isolation. Payments, salaries, and expenses all affect financial reporting — especially where structured payroll services UK are involved.
              </p>
              
              <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>
                While payroll itself is not subject to VAT, it influences overall financial records, which in turn affect VAT accuracy. Understanding this interaction ensures your business is prepared for a proper VAT audit if selected by HMRC.
              </p>
              
              <div className="p-4 bg-light border-start border-brand-orange border-4 rounded-end">
                <h5 className="fw-bold text-brand-dark mb-2">HMRC VAT Audits:</h5>
                <p className="text-secondary small mb-0" style={{ lineHeight: 1.6 }}>
                  HMRC conducts random and risk-based VAT audits. Having structured transaction links between your payroll calculations, company records, and VAT returns provides absolute confidence and protects your business from adjustments or penalties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 13: CONTACT FORM BLOCK ── */}
      <section id="contact-block" className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5">
            {/* Info Column */}
            <div className="col-lg-5">
              <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Contact Nodes</span>
              <h2 className="text-brand-dark display-5 mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>Get in Touch</h2>
              <p className="text-secondary mb-4">Connect directly with our customer response desk or drop by our physical consultation offices.</p>
              
              <div className="d-flex flex-column gap-3">
                <div className="card border-0 bg-white p-3 rounded-3 d-flex flex-row align-items-center gap-3 shadow-sm">
                  <div className="bg-brand-orange text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px", minWidth: "50px" }}>
                    <i className="fas fa-phone-alt fs-5"></i>
                  </div>
                  <div>
                    <span className="text-muted small d-block">Phone Number</span>
                    <a href="tel:02081270728" className="fw-bold text-brand-dark text-decoration-none fs-5">020 8127 0728</a>
                  </div>
                </div>
                
                <div className="card border-0 bg-white p-3 rounded-3 d-flex flex-row align-items-center gap-3 shadow-sm">
                  <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px", minWidth: "50px" }}>
                    <i className="fab fa-whatsapp fs-4"></i>
                  </div>
                  <div>
                    <span className="text-muted small d-block">Whatsapp Chat</span>
                    <a href="https://wa.me/447471170484" target="_blank" rel="noreferrer" className="fw-bold text-brand-dark text-decoration-none fs-5">074 7117 0484</a>
                  </div>
                </div>
                
                <div className="card border-0 bg-white p-3 rounded-3 d-flex flex-row align-items-center gap-3 shadow-sm">
                  <div className="bg-brand-dark text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px", minWidth: "50px" }}>
                    <i className="fas fa-envelope fs-5"></i>
                  </div>
                  <div>
                    <span className="text-muted small d-block">Email Support</span>
                    <a href="mailto:info@taxaccolega.co.uk" className="fw-bold text-brand-dark text-decoration-none fs-5">info@taxaccolega.co.uk</a>
                  </div>
                </div>
                
                <div className="card border-0 bg-white p-3 rounded-3 d-flex flex-row align-items-center gap-3 shadow-sm">
                  <div className="bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px", minWidth: "50px" }}>
                    <i className="fas fa-map-marker-alt fs-5"></i>
                  </div>
                  <div>
                    <span className="text-muted small d-block">Office Address</span>
                    <span className="fw-bold text-brand-dark fs-6">187a London Road, Croydon, Surrey, CR0 2RJ</span>
                  </div>
                </div>
              </div>

              {/* STYLISH STATIC MAP PLACEHOLDER */}
              <div className="mt-4 rounded-4 overflow-hidden border shadow-sm" style={{ height: '220px', background: '#e9ecef', position: 'relative' }}>
                <div className="position-absolute top-50 start-50 translate-middle text-center w-100 p-3">
                  <i className="fas fa-map-marked-alt text-brand-orange display-6 mb-2"></i>
                  <h6 className="fw-bold text-brand-dark">Map Location Matrix</h6>
                  <p className="text-muted small mb-0">187a London Road, Croydon, Surrey</p>
                  <a href="https://maps.google.com/?q=187a+London+Road,+Croydon" target="_blank" rel="noreferrer" className="btn btn-sm btn-dark mt-2 fw-semibold">Open Google Maps</a>
                </div>
              </div>
            </div>
            
            {/* Form Column */}
            <div className="col-lg-7">
              <div className="card p-4 p-md-5 border-0 shadow-lg rounded-4 bg-white h-100">
                <h3 className="mb-2 text-brand-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>Send Us a Message</h3>
                <p className="text-secondary small mb-4">Request call back or drop details of your company accounts enquiry.</p>
                
                {formSubmitted ? (
                  <div className="alert alert-success d-flex align-items-center py-4 rounded-3" role="alert">
                    <CheckIcon />
                    <div>
                      <h6 className="alert-heading fw-bold mb-1">Enquiry Successfully Dispatched!</h6>
                      <p className="mb-0 small">Thank you. An expert VAT advisor will reply within 2 working hours.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label small fw-semibold">Name <span className="text-danger">*</span></label>
                        <input 
                          type="text" 
                          name="name" 
                          value={formData.name} 
                          onChange={handleInputChange} 
                          className="form-control" 
                          placeholder="Your Name" 
                          required 
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label small fw-semibold">Email <span className="text-danger">*</span></label>
                        <input 
                          type="email" 
                          name="email" 
                          value={formData.email} 
                          onChange={handleInputChange} 
                          className="form-control" 
                          placeholder="Your Email" 
                          required 
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label small fw-semibold">Phone Number</label>
                        <input 
                          type="tel" 
                          name="phone" 
                          value={formData.phone} 
                          onChange={handleInputChange} 
                          className="form-control" 
                          placeholder="Contact Number" 
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label small fw-semibold">Message <span className="text-danger">*</span></label>
                        <textarea 
                          name="message" 
                          value={formData.message} 
                          onChange={handleInputChange} 
                          rows="4" 
                          className="form-control" 
                          placeholder="How can we assist you with your VAT or company accounts today?" 
                          required 
                        ></textarea>
                      </div>
                      <div className="col-12 mt-4">
                        <button type="submit" className="btn btn-brand w-100 py-3 fw-bold">Submit Message</button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 14: STATE-DRIVEN FAQS & SIDEBAR ── */}
      <section className="py-5 bg-white border-bottom">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Knowledge Base</span>
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                FAQs On VAT & VAT Returns
              </h2>
              
              <div className="accordion-custom">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="accordion-item border rounded-3 mb-3 overflow-hidden shadow-sm">
                    <button 
                      className="btn w-100 text-start p-4 d-flex justify-content-between align-items-center" 
                      onClick={() => setActiveFaqIndex(activeFaqIndex === idx ? null : idx)}
                      style={{ 
                        backgroundColor: activeFaqIndex === idx ? '#1d3c45' : 'white', 
                        color: activeFaqIndex === idx ? 'white' : '#1a2332', 
                        border: 'none', 
                        fontWeight: 600,
                        transition: 'all 0.3s'
                      }}
                    >
                      <span>{faq.q}</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === idx ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === idx && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Quick Contact sidebar card */}
            <div className="col-lg-4">
              <div className="card border-0 shadow-lg rounded-4 p-4 text-center text-white" style={{ background: '#1d3c45' }}>
                <h4 className="fw-bold mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>Helpline Desk</h4>
                <p className="text-white-50 mb-4 small">Tax and disclosure deadlines can arise quickly. Speak directly to an expert tax advisor today.</p>
                
                <div className="d-flex flex-column gap-3 mb-4 text-start">
                  <a href="tel:02081270728" className="d-flex align-items-center text-white text-decoration-none gap-3 p-2 rounded bg-white bg-opacity-10 hover-bg-translucent" style={{ transition: 'background-color 0.2s' }}>
                    <div className="bg-brand-orange text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', minWidth: '45px' }}>
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div>
                      <span className="text-white-50 d-block small" style={{ fontSize: '0.75rem' }}>Call Office</span>
                      <span className="fw-bold" style={{ fontSize: '0.95rem' }}>020 8127 0728</span>
                    </div>
                  </a>
                  
                  <a href="https://wa.me/447471170484" target="_blank" rel="noreferrer" className="d-flex align-items-center text-white text-decoration-none gap-3 p-2 rounded bg-white bg-opacity-10 hover-bg-translucent" style={{ transition: 'background-color 0.2s' }}>
                    <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', minWidth: '45px' }}>
                      <i className="fab fa-whatsapp"></i>
                    </div>
                    <div>
                      <span className="text-white-50 d-block small" style={{ fontSize: '0.75rem' }}>Whatsapp Chat</span>
                      <span className="fw-bold" style={{ fontSize: '0.95rem' }}>074 7117 0484</span>
                    </div>
                  </a>
                </div>

                <div className="d-flex justify-content-center gap-3 mt-2">
                  <a href="https://www.facebook.com/Taxaccolega" target="_blank" rel="noreferrer" className="footer-social-icon bg-white bg-opacity-10"><i className="fab fa-facebook-f"></i></a>
                  <a href="https://twitter.com/Taxaccolega" target="_blank" rel="noreferrer" className="footer-social-icon bg-white bg-opacity-10"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 15: BOTTOM PARTNERS LOGOS ── */}
      <Partners />
    </div>
  );
};

export default VatAccountants;
