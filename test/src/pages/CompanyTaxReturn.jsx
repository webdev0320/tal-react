import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Partners from '../components/Partners';
import ReviewsSlider from '../components/ReviewsSlider';
import Footer from '../components/Footer';
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

const CompanyTaxReturn = () => {
  // FAQ accordion state
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
      q: 'What is corporation tax in the UK?',
      a: 'Corporation tax is the tax paid by UK limited companies on their taxable profits after deducting allowable business expenses and capital allowances.'
    },
    {
      q: 'When is corporation tax due?',
      a: 'Payment is due 9 months and 1 day after the end of the accounting period, while the tax return (CT600) itself must be filed within 12 months.'
    },
    {
      q: 'How do I file a corporation tax return online?',
      a: 'You complete the CT600 tax return form, attach your company statutory accounts and tax calculations, and submit electronically via HMRC-approved software.'
    },
    {
      q: 'Do I need an accountant for corporation tax?',
      a: 'Not legally, but most businesses use chartered accountants to ensure accuracy, leverage tax allowances, stay compliant, and avoid costly HMRC penalties.'
    },
    {
      q: 'What happens if corporation tax is filed late?',
      a: 'Late filing results in automatic financial penalties starting at £100 and rising. In addition, HMRC charges interest on any late-paid tax.'
    },
    {
      q: 'Can corporation tax be reduced legally?',
      a: 'Yes. Through proper tax planning, utilizing all allowable expenses, claims like R&D tax credits, and correct salary/dividend structuring, tax can be significantly reduced within HMRC rules.'
    }
  ];



  return (
    <div className="bg-light min-h-screen">
      <TopBar />
      <Navbar />
      <TaxationLinksBar />

      {/* ── HERO SECTION WITH SIDEBAR OVERLAP ── */}
      <header className="position-relative text-white overflow-hidden py-5" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)', minHeight: '380px' }}>
        <div className="position-absolute w-100 h-100" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(210, 96, 26, 0.15) 0%, transparent 60%)', top: 0, left: 0, zIndex: 1 }}></div>
        <div className="container position-relative py-4" style={{ zIndex: 2 }}>
          <div className="row g-4 align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <span className="text-uppercase small tracking-wider fw-bold mb-2 d-inline-block text-brand-orange" style={{ letterSpacing: '2px' }}>
                Corporate Tax Specialists
              </span>
              <h1 className="display-4 fw-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Corporate Tax Return Accountants
              </h1>
              <p className="lead text-white-50 mb-4" style={{ maxWidth: '680px', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Expert Guidance for Corporate Tax Accountant Services: Tailored Solutions for Tax-Efficient Business Strategies at Taxaccolega.
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
                  <li className="breadcrumb-item active text-white-50" aria-current="page">Corporate tax accountant official</li>
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

            {/* Breadcrumb */}
      <div className="bg-white border-bottom py-3">
        <div className="container px-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 small">
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none" style={{ color: '#D2601A' }}>Home</Link></li>
              <li className="breadcrumb-item"><Link to="/taxation" className="text-decoration-none" style={{ color: '#D2601A' }}>Taxation</Link></li>
              <li className="breadcrumb-item active text-secondary">Company Tax Return</li>
            </ol>
          </nav>
        </div>
      </div>
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

      {/* ── SECTION 1: HOW IT GOES WRONG ── */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Corporation Tax Doesn't Usually Go Wrong In One Place — It Goes Wrong Across Everything
              </h2>
              <div className="text-secondary d-flex flex-column gap-3 fs-6" style={{ lineHeight: 1.8 }}>
                <p>Corporation tax rarely becomes a problem because of one mistake.</p>
                <p>It builds quietly across the year.</p>
                <p>A few expenses are treated incorrectly. Director payments are structured without full consideration. Financial records don’t fully reflect what’s happening in the business. Nothing feels wrong at the time — everything appears to be working.</p>
                <p>Then the Company Tax Return is due.</p>
                <p>Suddenly, the numbers need to align. The figures need to make sense. And it becomes clear that what looked manageable throughout the year now needs to be corrected all at once.</p>
                <p >
                  That’s where pressure builds.
                </p>

                <p>This is where working with corporation tax accountants in London or across the UK becomes important — not just to file a return, but to ensure everything behind that return is already correct before submission.</p>
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

      {/* ── SECTION 2: BUILT AROUND ACCURACY ── */}
      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Corporation Tax Services UK – Built Around Accuracy Before Submission
              </h2>
              <p className="text-secondary mb-4 fs-6" style={{ lineHeight: 1.8 }}>
                Corporation tax is not just about filing a return. It’s about making sure the financial position it represents is accurate.
              </p>
              
              <h5 className="fw-bold text-brand-dark mb-3">Our corporation tax services are structured to:</h5>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-center"><CheckIcon /> prepare company tax returns correctly</li>
                <li className="d-flex align-items-center"><CheckIcon /> align financial records with tax calculations</li>
                <li className="d-flex align-items-center"><CheckIcon /> ensure compliance with HMRC requirements</li>
              </ul>
              
              <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                Whether you need a corporate tax accountant, help to file a corporation tax return online, or ongoing support for your company tax account, the focus stays consistent: 
                <strong className="text-brand-dark d-block mt-2 fs-5">accuracy first, submission second.</strong>
              </p>
            </div>
            
            <div className="col-lg-5">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img 
                  src="/images/2023/06/Benefits-of-Hiring-an-Accountant-for-a-Small-Business-scaled-1-1024x683.jpg" 
                  alt="Tax Expert Submitting Corporation Tax" 
                  className="img-fluid rounded-3" 
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: TAX BADGES NAV GRID (shared component) ── */}
      <TaxationLinksBar />

      {/* ── SECTION 4: WHAT IT INVOLVES IN PRACTICE ── */}
      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 order-2 order-lg-1">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img 
                  src="/images/2023/06/calculator-khOE-621x414@LiveMint.webp" 
                  alt="Financial calculations" 
                  className="img-fluid rounded-3"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
            
            <div className="col-lg-7 order-1 order-lg-2">
              <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Operational Insights</span>
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                What Corporation Tax Actually Involves In Practice
              </h2>
              <h5 className="text-brand-orange fw-bold mb-3">It Starts Long Before The Return Is Filed</h5>
              <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>
                Corporation tax is calculated at year-end, but it is created throughout the year. Every decision affects it:
              </p>
              
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-center"><CheckIcon /> how income is recorded</li>
                <li className="d-flex align-items-center"><CheckIcon /> how expenses are treated</li>
                <li className="d-flex align-items-center"><CheckIcon /> how directors take money from the business</li>
              </ul>
              
              <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>
                A common pattern we see is where director loan accounts are used without clear tracking, dividend and salary decisions are made without reviewing tax efficiency, or expenses are recorded without considering whether they are fully allowable. These small gaps don’t usually cause immediate problems — but they tend to surface when the final tax position is being prepared. 
              </p>
              
              <h5 className="text-brand-dark fw-bold mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>It Depends On Consistency Across Multiple Areas</h5>
              <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                Corporation tax sits on top of financial records, company accounts, and tax calculations. If these do not align, the return becomes inconsistent. For example, differences between company accounts and statutory accounts preparation often lead to adjustments that delay submission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: CLIENTS AND PARTNERS ── */}
      <Partners />

      {/* ── SECTION 6: LTD COMPANY RETURNS ── */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Limited Company Protocols</span>
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Company Tax Returns For Limited Companies
              </h2>
              <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>
                Every UK limited company is required to submit a company tax return. This involves:
              </p>
              
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-center"><CheckIcon /> preparing the CT600</li>
                <li className="d-flex align-items-center"><CheckIcon /> calculating taxable profit</li>
                <li className="d-flex align-items-center"><CheckIcon /> submitting through HMRC systems</li>
              </ul>
              
              <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                But the real work is not in submission — it’s in preparation. If one figure changes, everything else needs to follow.
              </p>
            </div>
            
            <div className="col-lg-5">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img 
                  src="/images/2023/06/What-is-the-process-100-scaled-1.webp" 
                  alt="Company accounts paperwork" 
                  className="img-fluid rounded-3"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h4 className="text-brand-dark fw-bold text-center mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>Company Tax Return Components</h4>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="table-responsive rounded-4 shadow-sm border overflow-hidden">
                  <table className="table table-hover align-middle mb-0 bg-white">
                    <thead style={{ background: '#1d3c45', color: '#fff' }}>
                      <tr>
                        <th className="py-3 px-4 text-white border-0 fw-bold">Component</th>
                        <th className="py-3 px-4 text-white border-0 fw-bold">Purpose</th>
                        <th className="py-3 px-4 text-white border-0 fw-bold">Submitted To</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-bottom">
                        <td className="py-3 px-4 fw-bold text-brand-dark">Company Accounts</td>
                        <td className="py-3 px-4 text-secondary">Financial performance representation</td>
                        <td className="py-3 px-4 text-secondary">Companies House</td>
                      </tr>
                      <tr className="border-bottom" style={{ background: '#fcfcfc' }}>
                        <td className="py-3 px-4 fw-bold text-brand-dark">CT600 Form</td>
                        <td className="py-3 px-4 text-secondary">Statutory tax declaration form</td>
                        <td className="py-3 px-4 text-secondary">HMRC</td>
                      </tr>
                      <tr className="border-bottom">
                        <td className="py-3 px-4 fw-bold text-brand-dark">Tax Calculations</td>
                        <td className="py-3 px-4 text-secondary">Profit-to-tax adjustments</td>
                        <td className="py-3 px-4 text-secondary">HMRC</td>
                      </tr>
                      <tr style={{ background: '#fcfcfc' }}>
                        <td className="py-3 px-4 fw-bold text-brand-dark">Supporting Notes</td>
                        <td className="py-3 px-4 text-secondary">Detailed breakdowns of allowable items</td>
                        <td className="py-3 px-4 text-secondary">HMRC</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: WHERE PROBLEMS APPEAR ── */}
      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 order-2 order-lg-1">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img 
                  src="/images/2023/06/Benefits-of-Hiring-an-Accountant-for-a-Small-Business-scaled-1-1024x683.jpg" 
                  alt="Audit of figures" 
                  className="img-fluid rounded-3"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
            
            <div className="col-lg-7 order-1 order-lg-2">
              <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Troubleshooting HMRC Issues</span>
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Filing Corporation Tax Return Online — Where Problems Usually Appear
              </h2>
              <p className="text-secondary mb-4 fs-6" style={{ lineHeight: 1.8 }}>
                Filing a corporation tax return online is straightforward in process — but not in practice. Most issues appear when:
              </p>
              
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-center"><WarningIcon /> figures don’t align across calculations</li>
                <li className="d-flex align-items-center"><WarningIcon /> adjustments are unclear or undocumented</li>
                <li className="d-flex align-items-center"><WarningIcon /> records are incomplete or lack supporting files</li>
              </ul>
              
              <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                This usually happens when returns are prepared from figures that look complete on the surface but haven’t been fully reviewed against how those figures should be treated for Corporation Tax purposes. This is especially common when businesses attempt to file returns based on partial data rather than structured financial records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: REVIEWS SLIDER ── */}
      <ReviewsSlider />

      {/* ── SECTION 9: DEADLINES ── */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Critical Deadlines</span>
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Corporation Tax Deadlines, Payments & Penalties
              </h2>
              <p className="text-secondary mb-4 fs-6" style={{ lineHeight: 1.8 }}>
                Every UK limited company is required to submit a company tax return. Corporation tax has two key deadlines:
              </p>
              
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-center"><CheckIcon /> <strong>payment deadline:</strong> 9 months + 1 day after the end of your accounting period</li>
                <li className="d-flex align-items-center"><CheckIcon /> <strong>filing deadline:</strong> 12 months after the end of your accounting period</li>
              </ul>
              
              <p className="text-secondary fw-semibold bg-light p-3 border-start border-warning border-4 rounded-end">
                These deadlines are separate. Most penalties arise not from computational complexity — but from basic timing errors.
              </p>
            </div>
            
            <div className="col-lg-5">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img 
                  src="/images/2023/06/inheritance-tax3-600.jpg" 
                  alt="Compliance timeline calendars" 
                  className="img-fluid rounded-3"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h4 className="text-brand-dark fw-bold text-center mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>Company Tax Timeline</h4>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="table-responsive rounded-4 shadow-sm border overflow-hidden">
                  <table className="table table-hover align-middle mb-0 bg-white">
                    <thead style={{ background: '#1d3c45', color: '#fff' }}>
                      <tr>
                        <th className="py-3 px-4 text-white border-0 fw-bold">Stage</th>
                        <th className="py-3 px-4 text-white border-0 fw-bold">Deadline</th>
                        <th className="py-3 px-4 text-white border-0 fw-bold">Common Issue</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-bottom">
                        <td className="py-3 px-4 fw-bold text-brand-dark">Payment</td>
                        <td className="py-3 px-4 text-secondary">9 months + 1 day</td>
                        <td className="py-3 px-4 text-secondary">Paid late due to unclear figures or late reconciliations</td>
                      </tr>
                      <tr className="border-bottom" style={{ background: '#fcfcfc' }}>
                        <td className="py-3 px-4 fw-bold text-brand-dark">Filing</td>
                        <td className="py-3 px-4 text-secondary">12 months after year-end</td>
                        <td className="py-3 px-4 text-secondary">Filed without full review of tax treatments</td>
                      </tr>
                      <tr style={{ background: '#fcfcfc' }}>
                        <td className="py-3 px-4 fw-bold text-brand-dark">Review</td>
                        <td className="py-3 px-4 text-secondary">Ongoing</td>
                        <td className="py-3 px-4 text-secondary">Left too close to deadlines, removing structuring options</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: PROBLEMS DISCOVERED AT YEAR-END ── */}
      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="text-center mb-5">
            <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Preventative Structuring</span>
            <h3 className="text-brand-dark display-6 fw-bold mt-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Why Most Corporation Tax Problems Are Only Discovered at Year-End
            </h3>
            <p className="text-secondary mt-2">This is where most businesses get caught out during the compliance lifecycle.</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card border-0 h-100 shadow-sm rounded-4 overflow-hidden">
                <div className="p-4 text-white" style={{ background: '#1d3c45' }}>
                  <h5 className="fw-bold mb-0 d-flex align-items-center">
                    <InfoIcon /> Throughout the year
                  </h5>
                </div>
                <div className="p-4 bg-white">
                  <ul className="list-unstyled mb-0 d-flex flex-column gap-3 text-secondary">
                    <li className="d-flex align-items-start"><WarningIcon /> figures look reasonable on basic bookkeeping</li>
                    <li className="d-flex align-items-start"><WarningIcon /> bank accounts seem in order and cashflow flows</li>
                    <li className="d-flex align-items-start"><WarningIcon /> nothing appears urgent or sparks alarm</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="card border-0 h-100 shadow-sm rounded-4 overflow-hidden">
                <div className="p-4 text-white bg-brand-orange">
                  <h5 className="fw-bold mb-0 d-flex align-items-center">
                    <WarningIcon /> But at year-end
                  </h5>
                </div>
                <div className="p-4 bg-white">
                  <ul className="list-unstyled mb-0 d-flex flex-column gap-3 text-secondary">
                    <li className="d-flex align-items-start"><WarningIcon /> expenses don’t match strict tax treatment rules</li>
                    <li className="d-flex align-items-start"><WarningIcon /> director payments create unexpected tax outcomes</li>
                    <li className="d-flex align-items-start"><WarningIcon /> complex adjustments are required across multiple areas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-secondary text-center" style={{ lineHeight: 1.8 }}>
            <p>This often includes reworking director payments, correcting expense treatment, or identifying transactions that were recorded correctly in accounts but not treated correctly for tax. By this stage, there is very little flexibility left.</p>
            <p className="fw-bold text-brand-dark">Decisions that affect corporation tax have already been made — and cannot be reversed. This is why corporation tax issues are rarely solved at the point of filing.</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: PAYROLL EXPENSES & ACTIVITY ── */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 order-2 order-lg-1">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img 
                  src="/images/2023/06/360_F_250204593_VbMhcn9dQ3TP5DQxBwcZwT6P3xz5rIKD.jpg" 
                  alt="Payroll audit team" 
                  className="img-fluid rounded-3"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
            
            <div className="col-lg-7 order-1 order-lg-2">
              <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Integrated Accounting</span>
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Corporation Tax and Payroll, Expenses, and Financial Activity
              </h2>
              <p className="text-secondary mb-4 fs-6" style={{ lineHeight: 1.8 }}>
                Payroll plays a significant role in corporation tax. Salary payments reduce taxable profit, but must be structured correctly.
              </p>
              
              <h5 className="fw-bold text-brand-dark mb-3">Where businesses operate structured payroll services, it becomes easier to ensure:</h5>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-center"><CheckIcon /> accurate recording of salaries and benefits</li>
                <li className="d-flex align-items-center"><CheckIcon /> correct tax treatment of pensions and bonuses</li>
                <li className="d-flex align-items-center"><CheckIcon /> consistent financial reporting across business areas</li>
              </ul>
              
              <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                Without this alignment, payroll and tax figures often require complex retrospective adjustments. It also overlaps with VAT reporting, where inconsistencies between returns and VAT return accountants submissions create discrepancies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 12: SMALL BUSINESS SERVICES ── */}
      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Small Business Scale-up</span>
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Corporation Tax Services for Small Businesses
              </h2>
              <p className="text-secondary mb-4 fs-6" style={{ lineHeight: 1.8 }}>
                For small businesses, corporation tax often becomes difficult when growth outpaces the internal financial structure. Common issues include:
              </p>
              
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-center"><WarningIcon /> unclear real-time financial position</li>
                <li className="d-flex align-items-center"><WarningIcon /> inconsistent bookkeeping records</li>
                <li className="d-flex align-items-center"><WarningIcon /> reactive tax handling at the last minute</li>
              </ul>
              
              <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                Working with small business tax accountants ensures that tax is handled as part of the business process — not as an afterthought.
              </p>
            </div>
            
            <div className="col-lg-5">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img 
                  src="/images/2023/06/What-is-the-process-100-scaled-1.webp" 
                  alt="Business financial structure" 
                  className="img-fluid rounded-3"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 13: WHAT OUR SERVICES ACTUALLY CHANGE ── */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">The Strategic Advantage</span>
            <h3 className="text-brand-dark display-6 fw-bold mt-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
              What Our Corporation Tax Services Actually Change
            </h3>
            <p className="text-secondary mt-2">The difference is not in what is done but when and how it is done.</p>
          </div>
          
          <div className="row g-4 justify-content-center">
            {[
              { 
                title: 'Most firms offer:', 
                list: ['Preparation of accounts', 'Basic tax calculation', 'Standard filing submission'],
                desc: 'That\'s expected standard service.'
              },
              { 
                title: 'Our approach focuses on:', 
                list: ['Aligning records before calculation', 'Reviewing treatment of income and expenses', 'Identifying structural issues before submission'],
                desc: 'Preventative, forward-thinking tax advisory.',
                featured: true
              },
              { 
                title: 'This means:', 
                list: ['Fewer end-of-year adjustments', 'Clearer tax positions for cashflow planning', 'Significantly reduced risk of HMRC queries'],
                desc: 'Strategic commercial confidence.'
              }
            ].map((card, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div 
                  className={`card h-100 border-0 shadow-sm rounded-4 p-4 text-center service-card ${card.featured ? 'border-top border-brand-orange border-4 shadow' : ''}`}
                  style={{ transform: card.featured ? 'scale(1.02)' : 'scale(1)', zIndex: card.featured ? 2 : 1 }}
                >
                  <h5 className={`fw-bold mb-3 ${card.featured ? 'text-brand-orange' : 'text-brand-dark'}`} style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {card.title}
                  </h5>
                  <ul className="list-unstyled text-secondary mb-4 text-start d-flex flex-column gap-2" style={{ fontSize: '0.92rem' }}>
                    {card.list.map((item, bulletIdx) => (
                      <li key={bulletIdx} className="d-flex align-items-start">
                        {card.featured ? <CheckIcon /> : <CheckIcon />}
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-brand-dark fw-semibold mt-auto mb-0" style={{ fontSize: '0.9rem' }}>
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 14: WHEN YOU SHOULD SPEAK TO A CORP TAX ADVISOR ── */}
      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 order-2 order-lg-1">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img 
                  src="/images/2023/06/fooddrive-1024x683.webp" 
                  alt="Tax Consultation session" 
                  className="img-fluid rounded-3"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
            
            <div className="col-lg-7 order-1 order-lg-2">
              <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Timely Engagement</span>
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                When You Should Speak to a Corporation Tax Advisor
              </h2>
              <p className="text-secondary mb-4 fs-6" style={{ lineHeight: 1.8 }}>
                Most businesses wait until the return is due, figures are finalised, or deadlines are close. That’s already too late. You should speak to a corporation tax advisor when:
              </p>
              
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-center"><CheckIcon /> profits start increasing or sales spikes occur</li>
                <li className="d-flex align-items-center"><CheckIcon /> financial decisions become less straightforward (e.g. key asset buying)</li>
                <li className="d-flex align-items-center"><CheckIcon /> structure of income or business expenses changes</li>
              </ul>
              
              <p className="text-secondary fw-semibold bg-white p-3 rounded shadow-sm border-start border-brand-orange border-4">
                At this stage, decisions can still actively influence the final tax liability outcome. Later on, they cannot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 15: TWO COLUMNS ── */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4" style={{ borderTop: '4px solid var(--brand-orange)' }}>
                <h4 className="fw-bold mb-3 text-brand-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>Corporation Tax and Wider Financial Planning</h4>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  Corporation tax does not sit in isolation. It connects with:
                </p>
                <ul className="list-unstyled text-secondary mb-4 d-flex flex-column gap-2">
                  <li className="d-flex align-items-center"><CheckIcon /> cash flow dynamics</li>
                  <li className="d-flex align-items-center"><CheckIcon /> profit planning models</li>
                  <li className="d-flex align-items-center"><CheckIcon /> future growth strategies</li>
                </ul>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  This is why it often aligns with financial forecasting services and cashflow forecasting services, ensuring tax is considered within the broader financial picture.
                </p>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4" style={{ borderTop: '4px solid #1d3c45' }}>
                <h4 className="fw-bold mb-3 text-brand-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>Speak to Corporation Tax Accountants in London UK</h4>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  If your corporation tax is only being considered at the point of filing, there’s a strong chance opportunities have already been missed. Whether you need:
                </p>
                <ul className="list-unstyled text-secondary mb-4 d-flex flex-column gap-2">
                  <li className="d-flex align-items-center"><CheckIcon /> company tax return preparation</li>
                  <li className="d-flex align-items-center"><CheckIcon /> corporation tax filing support</li>
                  <li className="d-flex align-items-center"><CheckIcon /> ongoing business tax advice</li>
                </ul>
                <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                  If corporation tax is only reviewed when the return is due, there is very little left to influence. Reviewing it earlier gives you control over the outcome — not just visibility of it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 16: CONTACT FORM BLOCK ── */}
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
                      <p className="mb-0 small">Thank you. An expert corporation tax advisor will reply within 2 working hours.</p>
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
                          placeholder="How can we assist you with your tax or company accounts today?" 
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

      {/* ── SECTION 17: STATE-DRIVEN FAQS & SIDEBAR ── */}
      <section className="py-5 bg-white border-bottom">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Knowledge Base</span>
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                FAQs On Corporation Tax
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

      {/* ── SECTION 18: DOUBLE LOGOS GRID / CERTIFICATES ── */}
      <Partners />
      
      <Footer />
    </div>
  );
};

export default CompanyTaxReturn;
