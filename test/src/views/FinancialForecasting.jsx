"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Partners from '../components/Partners';
import ReviewsSlider from '../components/ReviewsSlider';
import AccountsLinksBar from '../components/AccountsLinksBar';
import { CheckIcon } from '../components/accounts/AccountsPageIcons';

const FinancialForecasting = () => {
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

  const quickNav = [
                    { title: 'Bookkeeping', link: '/accounts/bookkeeping-services' },
                    { title: 'Statutory Accounts', link: '/accounts/statutory-accounts' },
                    { title: 'Management Accounts', link: '/accounts/management-accounts' }
  ];

  return (
    <div className="bg-light min-h-screen">
      <header className="position-relative text-white overflow-hidden py-5" style={{ backgroundImage: 'linear-gradient(rgba(29, 60, 69, 0.72), rgba(29, 60, 69, 0.82)), url(/images/2026/05/Cashflow-Forecasting-scaled.webp)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '380px' }}>
        <div className="position-absolute w-100 h-100" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(210, 96, 26, 0.15) 0%, transparent 60%)', top: 0, left: 0, zIndex: 1 }}></div>
        <div className="container position-relative py-4" style={{ zIndex: 2, paddingTop: '5rem' }}>
          <div className="row g-4 align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <span className="text-uppercase small tracking-wider fw-bold mb-2 d-inline-block text-brand-orange" style={{ letterSpacing: '2px' }}>
                Accounts Services
              </span>
              <h1 className="display-4 fw-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Financial Forecasting
              </h1>
              
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mb-4">
                <a href="#contact-block" className="btn btn-brand px-4 py-2 shadow">CONTACT US</a>
                <a href="/schedule-a-phone-call-or-video-meeting" className="btn btn-outline-light px-4 py-2">Schedule a Call</a>
              </div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0 small" style={{ background: 'transparent' }}>
                  <li className="breadcrumb-item"><Link href="/" className="text-decoration-none text-brand-orange">Home</Link></li>
                  <li className="breadcrumb-item"><Link href="/accounts" className="text-decoration-none text-brand-orange">Accounts</Link></li>
                  <li className="breadcrumb-item active text-white-50" aria-current="page">Financial Forecasting</li>
                </ol>
              </nav>
            </div>
            <div className="col-lg-4 d-none d-lg-block position-relative" style={{ zIndex: 3 }}>
              <div className="p-4 rounded-4 shadow-lg" style={{ background: 'linear-gradient(180deg, rgba(232,162,116,0.9) 0%, rgba(212,108,36,0.95) 50%, rgba(184,80,14,1) 100%)' }}>
                <h5 className="text-white fw-bold mb-4 text-center border-bottom pb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>Quick Navigation</h5>
                <div className="d-flex flex-column gap-3">
                  {quickNav.map((item, idx) => (
                    <Link key={idx} href={item.link} className="card border-0 shadow rounded-3 p-3 text-decoration-none bg-white" style={{ transition: 'all 0.3s' }}>
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

      <div className="bg-white border-bottom py-3">
        <div className="container px-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 small">
              <li className="breadcrumb-item"><Link href="/" className="text-decoration-none" style={{ color: '#D2601A' }}>Home</Link></li>
              <li className="breadcrumb-item"><Link href="/accounts" className="text-decoration-none" style={{ color: '#D2601A' }}>Accounts</Link></li>
              <li className="breadcrumb-item active text-secondary">Financial Forecasting</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="d-block d-lg-none py-3 bg-white border-bottom shadow-sm">
        <div className="container">
          <div className="row g-2">
            {quickNav.map((item, idx) => (
              <div className="col-4" key={idx}>
                <Link href={item.link} className="btn btn-sm btn-outline-dark w-100 text-truncate fw-semibold" style={{ fontSize: '0.75rem' }}>
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-10 mx-auto">
              <div className="text-secondary d-flex flex-column gap-1 fs-6" style={{ lineHeight: 1.8 }}>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Tailored Solutions for Strategic Planning and Informed Decision-Making at Taxaccolega.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AccountsLinksBar />

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Most financial pressure starts months before it becomes visible
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Businesses rarely wake up one morning surprised by financial problems.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Usually, the signals were already there.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Margins had been tightening quietly. Costs had started rising faster than revenue. Hiring decisions were made based on expected growth that arrived slower than planned. Cash reserves looked stable at first, then suddenly started shrinking faster than anyone expected.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The difficulty is that these shifts often happen gradually, inside day-to-day operations where nobody notices the wider pattern developing.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That is why financial forecasting matters.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Not because it predicts the future perfectly.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Because it helps businesses understand how today’s decisions are likely to behave once they collide with real operating conditions.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>At Taxaccolega, our financial forecasting services help businesses across London and the UK build financial visibility before commitments become fixed, pressure becomes operational, or growth starts creating instability instead of opportunity.</p>
            </div>
            <div className="col-lg-5">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img src="/images/2024/11/edit.4-1.webp" alt="Most financial pressure starts months before it becomes visible" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 order-2 order-lg-1">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img src="/images/2024/11/edit.2-1.webp" alt="What Financial Forecasting Actually Helps Businesses Understand" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>
            <div className="col-lg-7 order-1 order-lg-2">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                What Financial Forecasting Actually Helps Businesses Understand
              </h2>
              <h3 className="text-brand-orange fw-bold mb-3">Growth and stability are not always the same thing</h3>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>One of the most common mistakes businesses make is assuming growth automatically improves financial position.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>In reality, growth can increase pressure faster than it increases stability.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>More clients may require more staffing. Increased turnover may increase VAT liabilities. Larger projects may create delayed payment cycles while operational costs rise immediately.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Financial forecasting helps businesses understand whether projected growth is financially sustainable — not simply commercially attractive.</p>
              <h3 className="text-brand-orange fw-bold mb-3">Timing usually matters more than totals</h3>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>A business may technically be profitable while still struggling financially.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That often happens because revenue timing and cost timing behave differently.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}><strong className="text-brand-dark">Income expected in 60 days cannot pay wages due next week.</strong></p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Forecasting helps businesses see how timing gaps develop across operations rather than only reviewing headline figures after the fact.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This is especially important where businesses operate with seasonal revenue patterns, long customer payment cycles, rapid hiring, or expansion plans.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                What Is Usually Included in a Financial Forecast
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This table works best after explaining forecasting mechanics because it translates forecasting into practical operational categories rather than abstract finance terminology.</p>
            </div>
            <div className="col-lg-5">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img src="/images/2024/11/office-with-documents-money-accounts-1-scaled.jpg" alt="What Is Usually Included in a Financial Forecast" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10">
              <div className="table-responsive rounded-4 shadow-sm border overflow-hidden">
                <table className="table table-hover align-middle mb-0 bg-white">
                  <thead style={{ background: '#1d3c45', color: '#fff' }}>
                    <tr>
                      <th className="py-3 px-4 text-white border-0 fw-bold">Forecast Area</th>
                      <th className="py-3 px-4 text-white border-0 fw-bold">What It Measures</th>
                      <th className="py-3 px-4 text-white border-0 fw-bold">What It Matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Revenue Forecasting</td>
                      <td className="py-3 px-4 text-secondary">Expected income growth</td>
                      <td className="py-3 px-4 text-secondary">Measures commercial assumptions</td>
                    </tr>
                    <tr className="border-bottom" style={{ background: '#fcfcfc' }}>
                      <td className="py-3 px-4 fw-bold text-brand-dark">Cost Forecasting</td>
                      <td className="py-3 px-4 text-secondary">Operational and fixed expenses</td>
                      <td className="py-3 px-4 text-secondary">Tracks sustainability</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Cashflow Forecasting</td>
                      <td className="py-3 px-4 text-secondary">Timing of cash movement</td>
                      <td className="py-3 px-4 text-secondary">Identifies liquidity pressure</td>
                    </tr>
                    <tr className="border-bottom" style={{ background: '#fcfcfc' }}>
                      <td className="py-3 px-4 fw-bold text-brand-dark">Financial Projections</td>
                      <td className="py-3 px-4 text-secondary">Multi-period business direction</td>
                      <td className="py-3 px-4 text-secondary">Supports planning decisions</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Scenario Modelling</td>
                      <td className="py-3 px-4 text-secondary">Best-case and risk scenarios</td>
                      <td className="py-3 px-4 text-secondary">Improves decision quality</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 order-2 order-lg-1">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img src="/images/2024/11/edit.8.jpg" alt="Why Most Financial Forecasts Become Useless Faster Than Businesses Expect" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>
            <div className="col-lg-7 order-1 order-lg-2">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Why Most Financial Forecasts Become Useless Faster Than Businesses Expect
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>A forecast usually fails long before anyone realises it has stopped being reliable.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Not because the original numbers were “wrong.”</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Because the assumptions underneath the forecast quietly changed while the model stayed frozen.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>A business may forecast:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>stable supplier pricing</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>consistent payment cycles</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>predictable staffing costs</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>gradual revenue growth</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Then real conditions shift.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Supplier costs rise. Revenue arrives later. <Link href="/accounts/payroll-services" className="text-brand-orange fw-semibold text-decoration-none">Payroll expands faster</Link>. Margins narrow unexpectedly. A common example is where projected sales growth appears commercially achievable, but the operational cost of delivering that growth increases far faster than the original forecast assumed. Recruitment expands, fulfilment costs rise, and cash pressure begins building underneath revenue growth that still looks positive on paper.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>If the forecast is not updated alongside operational reality, it slowly turns into a historical assumption rather than a planning tool.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That is one reason financial forecasting services work best when forecasting becomes an ongoing operational process instead of a once-a-year exercise.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Insight Section: Businesses often mistake turnover growth for financial progress
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This is where many businesses get caught unexpectedly.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Turnover increases feel reassuring.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>More clients arrive. Sales improve. Activity increases.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Yet underneath that growth, the financial structure may already be weakening.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Operational costs scale faster than expected. Recruitment expands overhead. Delivery becomes more expensive. Cash collection slows while liabilities accelerate.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Externally, the business appears stronger.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Internally, financial pressure is building quietly. By the time those pressures become fully visible through cashflow strain, delayed payments, or margin deterioration, many operational commitments have already become significantly harder to reverse without disruption.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Forecasting exposes those hidden pressure points early enough for the business to respond before the consequences become difficult to reverse.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That single visibility shift is often what separates controlled growth from reactive growth.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                What Our Financial Forecasting Services Actually Change
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Most businesses already have access to forecasting software, spreadsheets, and financial projection templates.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The issue is rarely access to tools.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The issue is whether the forecast reflects how the business genuinely operates.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>At Taxaccolega, financial forecasting focuses on building commercially realistic forecasting structures rather than simply producing projection documents.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That means reviewing:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>operational behaviour</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>revenue dependency patterns</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>staffing impact</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>margin sensitivity</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>timing differences</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>cost scalability</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>future commitment pressure</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The goal is not to create optimistic forecasts.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The goal is to create usable forecasts.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Where Financial Forecasts Commonly Break Down
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This second table belongs after the “what changes” section because it reinforces why many businesses technically have forecasts but still lack financial clarity.</p>
            </div>
            <div className="col-lg-5">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img src="/images/2024/11/edit.8.jpg" alt="Where Financial Forecasts Commonly Break Down" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10">
              <div className="table-responsive rounded-4 shadow-sm border overflow-hidden">
                <table className="table table-hover align-middle mb-0 bg-white">
                  <thead style={{ background: '#1d3c45', color: '#fff' }}>
                    <tr>
                      <th className="py-3 px-4 text-white border-0 fw-bold">Forecast Problem</th>
                      <th className="py-3 px-4 text-white border-0 fw-bold">What It happens</th>
                      <th className="py-3 px-4 text-white border-0 fw-bold">Operational Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Revenue assumptions too optimistic</td>
                      <td className="py-3 px-4 text-secondary">Forecast disconnected from operational capacity</td>
                      <td className="py-3 px-4 text-secondary">Financial strain develops</td>
                    </tr>
                    <tr className="border-bottom" style={{ background: '#fcfcfc' }}>
                      <td className="py-3 px-4 fw-bold text-brand-dark">Cash timing ignored</td>
                      <td className="py-3 px-4 text-secondary">Profit treated as available cash</td>
                      <td className="py-3 px-4 text-secondary">Liquidity pressure appears</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Forecast never updated</td>
                      <td className="py-3 px-4 text-secondary">Static assumptions remain unchanged</td>
                      <td className="py-3 px-4 text-secondary">Decision quality weakens</td>
                    </tr>
                    <tr className="border-bottom" style={{ background: '#fcfcfc' }}>
                      <td className="py-3 px-4 fw-bold text-brand-dark">Generic forecasting templates used</td>
                      <td className="py-3 px-4 text-secondary">Business model not reflected properly</td>
                      <td className="py-3 px-4 text-secondary">Forecast loses practical value</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Costs underestimated during growth</td>
                      <td className="py-3 px-4 text-secondary">Expansion pressure overlooked</td>
                      <td className="py-3 px-4 text-secondary">Margins deteriorate</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                When Businesses Should Start Financial Forecasting
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Most businesses begin forecasting after financial pressure already exists.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That is usually later than ideal.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Forecasting becomes valuable as soon as future decisions begin affecting operational structure.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That includes:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>expansion planning</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>hiring decisions</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>borrowing discussions</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>investment planning</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>funding preparation</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>margin uncertainty</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>scaling operations</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The earlier financial forecasting begins, the more flexibility businesses retain around future decisions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Speak to Financial Forecasting Consultants London UK
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>If business decisions inside your company are increasingly based on assumptions rather than financial visibility, forecasting usually becomes less optional and more operationally necessary.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Financial forecasting services help businesses understand how today’s commitments are likely to affect tomorrow’s financial position before those outcomes become fixed.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Taxaccolega provides financial forecasting services, business financial projections, startup financial forecasting, and strategic financial planning support for businesses across London and the UK.</p>
            </div>
          </div>
        </div>
      </section>

      <Partners />

      <ReviewsSlider />

      <section id="contact-block" className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Contact</span>
              <h2 className="text-brand-dark display-5 mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>Get in Touch</h2>
              <p className="text-secondary mb-4">Connect directly with our customer response desk or drop by our physical consultation offices.</p>
              <div className="d-flex flex-column gap-3">
                <div className="card border-0 bg-white p-3 rounded-3 d-flex flex-row align-items-center gap-3 shadow-sm">
                  <div className="bg-brand-orange text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                    <i className="fas fa-phone-alt fs-5"></i>
                  </div>
                  <div>
                    <span className="text-muted small d-block">Phone Number</span>
                    <a href="tel:02081270728" className="fw-bold text-brand-dark text-decoration-none fs-5">020 8127 0728</a>
                  </div>
                </div>
                <div className="card border-0 bg-white p-3 rounded-3 d-flex flex-row align-items-center gap-3 shadow-sm">
                  <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                    <i className="fab fa-whatsapp fs-4"></i>
                  </div>
                  <div>
                    <span className="text-muted small d-block">Whatsapp Chat</span>
                    <a href="https://wa.me/447471170484" target="_blank" rel="noreferrer" className="fw-bold text-brand-dark text-decoration-none fs-5">074 7117 0484</a>
                  </div>
                </div>
                <div className="card border-0 bg-white p-3 rounded-3 d-flex flex-row align-items-center gap-3 shadow-sm">
                  <div className="bg-brand-dark text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                    <i className="fas fa-envelope fs-5"></i>
                  </div>
                  <div>
                    <span className="text-muted small d-block">Email Support</span>
                    <a href="mailto:info@taxaccolega.co.uk" className="fw-bold text-brand-dark text-decoration-none fs-5">info@taxaccolega.co.uk</a>
                  </div>
                </div>
                <div className="card border-0 bg-white p-3 rounded-3 d-flex flex-row align-items-center gap-3 shadow-sm">
                  <div className="bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                    <i className="fas fa-map-marker-alt fs-5"></i>
                  </div>
                  <div>
                    <span className="text-muted small d-block">Office Address</span>
                    <span className="fw-bold text-brand-dark fs-6">187a London Road, Croydon, Surrey, CR0 2RJ</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="card p-4 p-md-5 border-0 shadow-lg rounded-4 bg-white h-100">
                <h3 className="mb-2 text-brand-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>Send Us a Message</h3>
                <p className="text-secondary small mb-4">Request a call back or drop details of your accounts enquiry.</p>
                {formSubmitted ? (
                  <div className="alert alert-success py-4 rounded-3" role="alert">
                    <h6 className="alert-heading fw-bold mb-1">Enquiry Successfully Dispatched!</h6>
                    <p className="mb-0 small">Thank you. An expert advisor will reply within 2 working hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label small fw-semibold">Name <span className="text-danger">*</span></label>
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="form-control" placeholder="Your Name" required />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label small fw-semibold">Email <span className="text-danger">*</span></label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="form-control" placeholder="Your Email" required />
                      </div>
                      <div className="col-12">
                        <label className="form-label small fw-semibold">Phone Number</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="form-control" placeholder="Contact Number" />
                      </div>
                      <div className="col-12">
                        <label className="form-label small fw-semibold">Message <span className="text-danger">*</span></label>
                        <textarea name="message" value={formData.message} onChange={handleInputChange} rows="4" className="form-control" placeholder="How can we assist you today?" required></textarea>
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

      <section className="py-5 bg-white border-bottom">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Knowledge Base</span>
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Frequently Asked Questions
              </h2>
              <div className="accordion-custom">
                  <div key={0} className="accordion-item border rounded-3 mb-3 overflow-hidden shadow-sm">
                    <button
                      className="btn w-100 text-start p-4 d-flex justify-content-between align-items-center"
                      onClick={() => setActiveFaqIndex(activeFaqIndex === 0 ? null : 0)}
                      style={{
                        backgroundColor: activeFaqIndex === 0 ? '#1d3c45' : 'white',
                        color: activeFaqIndex === 0 ? 'white' : '#1a2332',
                        border: 'none',
                        fontWeight: 600,
                        transition: 'all 0.3s',
                      }}
                    >
                      <span>Email Address:</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 0 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 0 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        info@taxaccolega.co.uk
                      </div>
                    )}
                  </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-0 shadow-lg rounded-4 p-4 text-center text-white" style={{ background: '#1d3c45' }}>
                <h4 className="fw-bold mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>Helpline Desk</h4>
                <p className="text-white-50 mb-4 small">Need help with your accounts? Speak directly to our team today.</p>
                <div className="d-flex flex-column gap-3 mb-4 text-start">
                  <a href="tel:02081270728" className="d-flex align-items-center text-white text-decoration-none gap-3 p-2 rounded bg-white bg-opacity-10">
                    <div className="bg-brand-orange text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', minWidth: '45px' }}>
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div>
                      <span className="text-white-50 d-block small" style={{ fontSize: '0.75rem' }}>Call Office</span>
                      <span className="fw-bold" style={{ fontSize: '0.95rem' }}>020 8127 0728</span>
                    </div>
                  </a>
                  <a href="https://wa.me/447471170484" target="_blank" rel="noreferrer" className="d-flex align-items-center text-white text-decoration-none gap-3 p-2 rounded bg-white bg-opacity-10">
                    <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px', minWidth: '45px' }}>
                      <i className="fab fa-whatsapp"></i>
                    </div>
                    <div>
                      <span className="text-white-50 d-block small" style={{ fontSize: '0.75rem' }}>Whatsapp Chat</span>
                      <span className="fw-bold" style={{ fontSize: '0.95rem' }}>074 7117 0484</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Partners />
    </div>
  );
};

export default FinancialForecasting;
