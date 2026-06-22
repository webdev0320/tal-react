"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ReviewsSlider from '../components/ReviewsSlider';
import ContactSection from '../components/ContactSection';
import AccountsLinksBar from '../components/AccountsLinksBar';

const FinancialForecasting = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Proposal request submitted!');
    setFormData({ name: '', email: '', message: '' });
  };

  const faqs = [
    { q: "What is financial forecasting?", a: "Financial forecasting is the process of projecting future business performance using structured assumptions around revenue, costs, cashflow, and operational activity." },
    { q: "Why is financial forecasting important?", a: "It helps businesses evaluate future financial pressure, growth sustainability, and operational risk before decisions become difficult to reverse." },
    { q: "What is included in a financial forecast?", a: "Most forecasts include projected revenue, expected costs, cashflow timing, profitability analysis, and future financial projections." },
    { q: "How often should a financial forecast be updated?", a: "Forecasts should be reviewed regularly because assumptions change as operational conditions evolve." },
    { q: "Do startups need financial forecasting?", a: "Yes. Startup financial forecasting is often essential for funding discussions, planning, and assessing commercial viability." },
    { q: "Can financial forecasting help with tax planning?", a: "Yes. Forecasting improves visibility around future corporation tax, VAT, payroll, and income tax liabilities." },
    { q: "What is the difference between financial forecasting and cashflow forecasting?", a: "Financial forecasting focuses on broader business performance and direction, while cashflow forecasting focuses specifically on liquidity timing and cash movement." }
  ];

  return (
    <div className="bg-white">
      <AccountsLinksBar />

      {/* ── HERO SECTION WITH SIDEBAR OVERLAP ── */}
      <header className="position-relative text-white overflow-hidden py-5" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)', minHeight: '380px' }}>
        <div className="position-absolute w-100 h-100" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(210, 96, 26, 0.15) 0%, transparent 60%)', top: 0, left: 0, zIndex: 1 }}></div>
        <div className="container position-relative py-4" style={{ zIndex: 2 }}>
          <div className="row g-4 align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <span className="text-uppercase small tracking-wider fw-bold mb-2 d-inline-block text-brand-orange" style={{ letterSpacing: '2px' }}>
                Forecasting Specialists
              </span>
              <h1 className="display-4 fw-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Financial Forecasting Service
              </h1>
              <p className="lead text-white-50 mb-4" style={{ maxWidth: '680px', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Tailored Solutions for Strategic Planning and Informed Decision-Making at Taxaccolega.
              </p>
              
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mb-4">
                <a href="#contact-block" className="btn btn-brand px-4 py-2 shadow">
                  CONTACT US
                </a>
              </div>

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0 small" style={{ background: 'transparent' }}>
                  <li className="breadcrumb-item"><Link href="/" className="text-decoration-none text-brand-orange">Home</Link></li>
                  <li className="breadcrumb-item"><Link href="/accounts" className="text-decoration-none text-brand-orange">Accounts</Link></li>
                  <li className="breadcrumb-item active text-white-50" aria-current="page">Financial Forecasting</li>
                </ol>
              </nav>
            </div>
            
            {/* HERO OVERLAPPING SIDEBAR */}
            <div className="col-lg-4 d-none d-lg-block position-relative" style={{ zIndex: 3 }}>
              <div className="p-4 rounded-4 shadow-lg" style={{ background: 'linear-gradient(180deg, rgba(232,162,116,0.9) 0%, rgba(212,108,36,0.95) 50%, rgba(184,80,14,1) 100%)' }}>
                <h5 className="text-white fw-bold mb-4 text-center border-bottom pb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>Quick Navigation</h5>
                <div className="d-flex flex-column gap-3">
                  {[
                    { title: 'Management Accounts', link: '/accounts/management-accounts' },
                    { title: 'Statutory Accounts', link: '/accounts/statutory-accounts' },
                    { title: 'Bookkeeping', link: '/accounts/bookkeeping-services' }
                  ].map((item, idx) => (
                    <Link key={idx} href={item.link} className="card border-0 shadow rounded-3 p-3 text-decoration-none bg-white hover-shadow transition" style={{ transition: 'all 0.3s' }}>
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
              <li className="breadcrumb-item"><Link href="/" className="text-decoration-none" style={{ color: '#D2601A' }}>Home</Link></li>
              <li className="breadcrumb-item"><Link href="/accounts" className="text-decoration-none" style={{ color: '#D2601A' }}>Accounts</Link></li>
              <li className="breadcrumb-item active text-secondary">Financial Forecasting</li>
            </ol>
          </nav>
        </div>
      </div>
      
      <main className="py-5">
        <div className="container">
          <section className="mb-5">
            <h2 className="text-deepTeal">Most financial pressure starts months before it becomes visible</h2>
            <p>Businesses rarely wake up one morning surprised by financial problems.</p>
            <p>Usually, the signals were already there.</p>
            <p>Margins had been tightening quietly. Costs had started rising faster than revenue. Hiring decisions were made based on expected growth that arrived slower than planned. Cash reserves looked stable at first, then suddenly started shrinking faster than anyone expected.</p>
            <p>The difficulty is that these shifts often happen gradually, inside day-to-day operations where nobody notices the wider pattern developing.</p>
            <p>That is why financial forecasting matters.</p>
            <p>Not because it predicts the future perfectly.</p>
            <p>Because it helps businesses understand how today’s decisions are likely to behave once they collide with real operating conditions.</p>
            <p>At Taxaccolega, our financial forecasting services help businesses across London and the UK build financial visibility before commitments become fixed, pressure becomes operational, or growth starts creating instability instead of opportunity.</p>
          </section>
          
          <section className="mb-5">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2 className="text-deepTeal">Financial Forecasting Is Not About Guesswork. It Is About Financial Direction</h2>
                <p>A financial forecast is often misunderstood as a spreadsheet exercise.</p>
                <p>Numbers are projected forward. Revenue assumptions are entered. Costs are estimated. A business financial forecast is produced for investors, lenders, or internal planning.</p>
                <p>But useful forecasting works differently from that.</p>
                <p>The real value does not come from producing a document.</p>
                <p>It comes from understanding how decisions interact financially over time.</p>
                <p>A hiring plan affects payroll pressure. Expansion affects overhead structure. Revenue growth changes VAT exposure. Delayed customer payments influence liquidity. New borrowing reshapes cash behaviour months later.</p>
                <p>Financial forecasting exists to show those relationships before they become operational problems.</p>
                <p>That is why forecasting should never sit separately from management accounts, bookkeeping, or cashflow forecasting. If the underlying financial structure is weak, even the most polished financial forecast template becomes unreliable.</p>
              </div>
              <div className="col-md-6">
                <div className="bg-secondary rounded p-5 text-center text-white">Placeholder Image</div>
              </div>
            </div>
          </section>

          <section className="mb-5">
            <h3>What Financial Forecasting Actually Improves</h3>
            <p>Financial forecasting is not just about producing reports. It is about creating reliable financial visibility as the business grows.</p>
            <p>Our forecasting approach focuses on:</p>
            <ul>
                <li>aligning financial projections with operational reality</li>
                <li>identifying cash pressure before it escalates</li>
                <li>stress-testing growth assumptions</li>
                <li>managing resource allocation efficiently</li>
                <li>supporting strategic decision-making</li>
            </ul>
            <p>The result is a clearer understanding of how the business will behave financially over the coming months and years.</p>
          </section>

          <section className="mb-5">
            <h2 className="text-deepTeal">What Financial Forecasting Actually Helps Businesses Understand</h2>
            <h4 className="text-brand-orange">Growth and stability are not always the same thing</h4>
            <p>One of the most common mistakes businesses make is assuming growth automatically improves financial position.</p>
            <p>In reality, growth can increase pressure faster than it increases stability.</p>
            <p>More clients may require more staffing. Increased turnover may increase VAT liabilities. Larger projects may create delayed payment cycles while operational costs rise immediately.</p>
            <p>Financial forecasting helps businesses understand whether projected growth is financially sustainable — not simply commercially attractive.</p>

            <h4 className="text-brand-orange mt-4">Timing usually matters more than totals</h4>
            <p>A business may technically be profitable while still struggling financially.</p>
            <p>That often happens because revenue timing and cost timing behave differently.</p>
            <p>Income expected in 60 days cannot pay wages due next week.</p>
            <p>Forecasting helps businesses see how timing gaps develop across operations rather than only reviewing headline figures after the fact.</p>
            <p>This is especially important where businesses operate with seasonal revenue patterns, long customer payment cycles, rapid hiring, or expansion plans.</p>
          </section>

          <section className="mb-5">
            <h3 className="text-center mb-4">What Is Usually Included in a Financial Forecast</h3>
            <div className="table-responsive">
              <table className="table table-bordered text-center">
                <thead>
                  <tr><th>Forecast Area</th><th>What It Measures</th><th>Why It Matters</th></tr>
                </thead>
                <tbody>
                  <tr><td>Revenue Forecasting</td><td>Expected income growth</td><td>Measures commercial assumptions</td></tr>
                  <tr><td>Cost Forecasting</td><td>Operational and fixed expenses</td><td>Tracks sustainability</td></tr>
                  <tr><td>Cashflow Forecasting</td><td>Timing of cash movement</td><td>Identifies liquidity pressure</td></tr>
                  <tr><td>Financial Projections</td><td>Multi-period business direction</td><td>Supports planning decisions</td></tr>
                  <tr><td>Scenario Modelling</td><td>Best-case and risk scenarios</td><td>Improves decision quality</td></tr>
                </tbody>
              </table>
            </div>
            <p className="small text-muted"><em>This table works best after explaining forecasting mechanics because it translates forecasting into practical operational categories rather than abstract finance terminology.</em></p>
          </section>

          <section className="mb-5">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="bg-secondary rounded p-5 text-center text-white">Placeholder Image</div>
              </div>
              <div className="col-md-6">
                <h2 className="text-deepTeal">Financial Forecasting for Startups and Expanding Businesses</h2>
                <p>Financial forecasting changes purpose depending on the stage of the business.</p>
                <p>For startups, forecasting often supports funding discussions, investor presentations, and business plan financial projections.</p>
                <p>In those situations, the forecast needs to demonstrate commercial viability while remaining grounded in realistic operational assumptions.</p>
                <p>Many startup business financial projections fail because the revenue assumptions are ambitious while the operational realities are understated.</p>
                <p>For established businesses, forecasting becomes less about proving potential and more about controlling direction.</p>
                <p>That includes evaluating:</p>
                <ul>
                  <li>expansion affordability</li>
                  <li>staffing pressure</li>
                  <li>pricing adjustments</li>
                  <li>debt commitments</li>
                  <li>investment timing</li>
                  <li>future tax exposure</li>
                </ul>
                <p>At this stage, forecasting becomes part of strategic decision-making rather than presentation material.</p>
              </div>
            </div>
          </section>

          <section className="mb-5">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2 className="text-deepTeal">Why Most Financial Forecasts Become Useless Faster Than Businesses Expect</h2>
                <p>A forecast usually fails long before anyone realises it has stopped being reliable.</p>
                <p>Not because the original numbers were “wrong.”</p>
                <p>Because the assumptions underneath the forecast quietly changed while the model stayed frozen.</p>
                <p>A business may forecast:</p>
                <ul>
                  <li>stable supplier pricing</li>
                  <li>consistent payment cycles</li>
                  <li>predictable staffing costs</li>
                  <li>gradual revenue growth</li>
                </ul>
                <p>Then real conditions shift.</p>
                <p>Supplier costs rise. Revenue arrives later. Payroll expands faster. Margins narrow unexpectedly. A common example is where projected sales growth appears commercially achievable, but the operational cost of delivering that growth increases far faster than the original forecast assumed. Recruitment expands, fulfilment costs rise, and cash pressure begins building underneath revenue growth that still looks positive on paper.</p>
                <p>If the forecast is not updated alongside operational reality, it slowly turns into a historical assumption rather than a planning tool.</p>
                <p>That is one reason financial forecasting services work best when forecasting becomes an ongoing operational process instead of a once-a-year exercise.</p>
              </div>
              <div className="col-md-6">
                <div className="bg-secondary rounded p-5 text-center text-white">Placeholder Image</div>
              </div>
            </div>
          </section>

          <section className="mb-5">
            <h2 className="text-deepTeal">Insight Section: Businesses often mistake turnover growth for financial progress</h2>
            <p>This is where many businesses get caught unexpectedly.</p>
            <p>Turnover increases feel reassuring.</p>
            <p>More clients arrive. Sales improve. Activity increases.</p>
            <p>Yet underneath that growth, the financial structure may already be weakening.</p>
            <p>Operational costs scale faster than expected. Recruitment expands overhead. Delivery becomes more expensive. Cash collection slows while liabilities accelerate.</p>
            <p>Externally, the business appears stronger.</p>
            <p>Internally, financial pressure is building quietly. By the time those pressures become fully visible through cashflow strain, delayed payments, or margin deterioration, many operational commitments have already become significantly harder to reverse without disruption.</p>
            <p>Forecasting exposes those hidden pressure points early enough for the business to respond before the consequences become difficult to reverse.</p>
            <p>That single visibility shift is often what separates controlled growth from reactive growth.</p>
          </section>

          <section className="mb-5">
            <h2 className="text-deepTeal">Financial Forecasting and Cashflow Planning</h2>
            <h2 className="text-deepTeal">Financial Forecasting and Tax Planning</h2>
            <p>Profitability and cashflow do not move together as neatly as many businesses assume.</p>
            <p>A business can technically show strong projected performance while still experiencing operational strain because cash behaves differently from profit.</p>
            <p>Forecasting becomes particularly valuable when connected directly with cashflow forecasting services because it allows businesses to model how revenue timing, operational commitments, and future liabilities interact.</p>
            <p>This becomes increasingly important where businesses are:</p>
            <ul>
                <li>scaling rapidly</li>
                <li>carrying supplier obligations</li>
                <li>operating with delayed debtor cycles</li>
                <li>funding expansion internally</li>
                <li>managing seasonal fluctuations</li>
            </ul>
            <p>Without forecasting, many businesses only recognise cash pressure once flexibility has already narrowed significantly.</p>
            
            <p className="mt-4">Forward visibility changes how businesses approach tax decisions.</p>
            <p>Forecasting helps businesses plan more effectively around:</p>
            <ul>
                <li>corporation tax liabilities</li>
                <li>director remuneration structures</li>
                <li>VAT obligations</li>
                <li>payroll commitments</li>
                <li>personal income planning</li>
            </ul>
            <p>This is why financial forecasting often works closely alongside corporation tax services, payroll services, VAT accounting, and personal tax planning.</p>
            <p>Without forecasting, tax planning becomes reactive.</p>
            <p>With forecasting, liabilities can be anticipated before they create operational strain.</p>
          </section>

          <section className="mb-5">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2 className="text-deepTeal">What Our Financial Forecasting Services Actually Change</h2>
                <p>Most businesses already have access to forecasting software, spreadsheets, and financial projection templates.</p>
                <p>The issue is rarely access to tools.</p>
                <p>The issue is whether the forecast reflects how the business genuinely operates.</p>
                <p>At Taxaccolega, financial forecasting focuses on building commercially realistic forecasting structures rather than simply producing projection documents.</p>
                <p>That means reviewing:</p>
                <ul>
                  <li>operational behaviour</li>
                  <li>revenue dependency patterns</li>
                  <li>staffing impact</li>
                  <li>margin sensitivity</li>
                  <li>timing differences</li>
                  <li>cost scalability</li>
                  <li>future commitment pressure</li>
                </ul>
                <p>The goal is not to create optimistic forecasts.</p>
                <p>The goal is to create usable forecasts.</p>
              </div>
              <div className="col-md-6">
                <div className="bg-secondary rounded p-5 text-center text-white">Placeholder Image</div>
              </div>
            </div>
          </section>

          <section className="mb-5">
            <div className="row align-items-center">
              <section className="mb-5">
                <h2 className="text-deepTeal">Financial Forecasting Within Wider Financial Management</h2>
                <p>Forecasting works best when connected with wider financial systems rather than operating independently.</p>
                <p>That includes:</p>
                <ul>
                  <li>bookkeeping services for accurate reporting foundations</li>
                  <li>management accounts for operational visibility</li>
                  <li>statutory accounts for year-end alignment</li>
                  <li>cashflow forecasting for liquidity control</li>
                  <li>tax advisory services for future liability planning</li>
                </ul>
                <p>Together, these areas create continuity between current performance and future planning.</p>
              </section>

              <section className="mb-5">
                <h2 className="text-deepTeal">When Businesses Should Start Financial Forecasting</h2>
                <p>Most businesses begin forecasting after financial pressure already exists.</p>
                <p>That is usually later than ideal.</p>
                <p>Forecasting becomes valuable as soon as future decisions begin affecting operational structure.</p>
                <p>That includes:</p>
                <ul>
                  <li>expansion planning</li>
                  <li>hiring decisions</li>
                  <li>borrowing discussions</li>
                  <li>investment planning</li>
                  <li>funding preparation</li>
                  <li>margin uncertainty</li>
                  <li>scaling operations</li>
                </ul>
                <p>The earlier financial forecasting begins, the more flexibility businesses retain around future decisions.</p>
              </section>
              <div className="col-md-6">
                <div className="bg-secondary rounded p-5 text-center text-white">Placeholder Image</div>
              </div>
            </div>
          </section>
          
          {/* FAQs */}
          <section className="py-5 bg-light">
            <div className="container">
              <h3>FAQs on Financial Forecasting</h3>
              {faqs.map((faq, idx) => (
                <div key={idx} className="accordion-item border rounded mb-2">
                  <button className="btn w-100 text-start p-3" onClick={() => setActiveFaqIndex(activeFaqIndex === idx ? null : idx)}>
                    {faq.q}
                  </button>
                  {activeFaqIndex === idx && <div className="p-3 bg-white">{faq.a}</div>}
                </div>
              ))}
            </div>
          </section>

          <ContactSection />
        </div>
      </main>
    </div>
  );
};

export default FinancialForecasting;
