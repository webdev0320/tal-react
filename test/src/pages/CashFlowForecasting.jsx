import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';
import AccountsLinksBar from '../components/AccountsLinksBar';

const CashFlowForecasting = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    { q: "What is a cash flow forecast?", a: "A cashflow forecast estimates future cash inflows and outflows over a defined period to help businesses understand their upcoming liquidity position." },
    { q: "Why is cashflow forecasting important for growing businesses?", a: "Growth often increases payroll, VAT, supplier commitments, and operational spending before customer payments fully stabilise. Forecasting helps businesses manage that timing pressure." },
    { q: "What is a 13 week cashflow forecast?", a: "A 13 week cashflow forecast focuses on short-term operational cash movement and is commonly used for liquidity monitoring and immediate financial planning." },
    { q: "Can cashflow forecasting help with VAT and corporation tax planning?", a: "Yes. Forecasting helps businesses anticipate future tax liabilities so payments can be planned before deadlines create operational pressure." },
    { q: "Is cashflow forecasting only for struggling businesses?", a: "No. Many profitable businesses use forecasting to manage expansion, investment planning, staffing growth, and operational timing more effectively." },
    { q: "Does software replace professional cashflow forecasting services?", a: "Software helps organise data, but forecast quality still depends on realistic assumptions, operational understanding, and ongoing financial interpretation." },
    { q: "How often should a cashflow forecast be updated?", a: "Most businesses benefit from updating forecasts regularly as sales patterns, expenses, tax liabilities, and customer payment behaviour change over time." }
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
                Cashflow Specialists
              </span>
              <h1 className="display-4 fw-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Cash Flow Forecasting UK – Forecasts, Projections & Management
              </h1>
              <p className="lead text-white-50 mb-4" style={{ maxWidth: '680px', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Expert Cashflow Forecasting Services for Optimal Financial Management
              </p>
              
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mb-4">
                <a href="#contact-block" className="btn btn-brand px-4 py-2 shadow">
                  CONTACT US
                </a>
              </div>

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0 small" style={{ background: 'transparent' }}>
                  <li className="breadcrumb-item"><Link to="/" className="text-decoration-none text-brand-orange">Home</Link></li>
                  <li className="breadcrumb-item"><Link to="/accounts" className="text-decoration-none text-brand-orange">Accounts</Link></li>
                  <li className="breadcrumb-item active text-white-50" aria-current="page">Cashflow Forecasting</li>
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
              <li className="breadcrumb-item"><Link to="/accounts" className="text-decoration-none" style={{ color: '#D2601A' }}>Accounts</Link></li>
              <li className="breadcrumb-item active text-secondary">Cashflow Forecasting</li>
            </ol>
          </nav>
        </div>
      </div>
      
      <main className="py-5">
        <div className="container">
          <section className="mb-5">
            <h2 className="text-deepTeal">Cash rarely creates problems loudly at the beginning.</h2>
            <p className="fw-bold">Most of the time, the warning signs look harmless.</p>
            <p>A business is invoicing consistently. Sales are moving. Work is coming in. The bank balance still appears stable enough to continue operating normally. From the outside, nothing looks urgent.</p>
            <p>Then timing starts shifting beneath the surface.</p>
            <p>A large client pays later than expected. VAT falls due during a slower trading period. Payroll lands before several invoices clear. Stock is purchased earlier than planned to secure pricing. One pressure point overlaps with another, and suddenly a business that looked financially healthy a month earlier is forced into reactive decisions.</p>
            <p>That is usually the moment businesses realise profitability and cash position are not the same thing.</p>
            <p>Cashflow forecasting exists to close that gap before it turns into pressure.</p>
            <p>At Taxaccolega, our cashflow forecasting services are built around how businesses actually operate in real conditions — not around theoretical spreadsheet assumptions. Whether you need a short-term cashflow forecast, ongoing cash flow management and forecasting support, or a structured business cashflow forecast for funding, expansion, staffing, or operational planning, the objective stays practical: create visibility before timing problems start affecting decisions.</p>
          </section>
          
          <section className="mb-5">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2 className="text-deepTeal">Cashflow Forecasting Services UK Built Around Real Business Movement</h2>
                <p>A cashflow forecast is not simply a finance document.</p>
                <p>It is a working model of how money moves through a business over time.</p>
                <p>That movement includes customer payment behaviour, supplier terms, payroll timing, tax liabilities, recurring overheads, seasonal changes, debt commitments, and operational spending patterns. When these elements are mapped properly, the business gains a clearer understanding of future cash position instead of relying on assumptions.</p>
                <p>This is where many generic cashflow forecast templates fail.</p>
                <p>Most templates assume ideal conditions:</p>
                <ul>
                  <li>customers pay on time</li>
                  <li>costs remain predictable</li>
                  <li>revenue follows straight lines</li>
                  <li>unexpected delays stay minimal</li>
                </ul>
                <p>Real businesses do not operate like that.</p>
                <p>A useful business cashflow forecast reflects delays, inconsistencies, slower collection periods, expanding cost structures, and operational behaviour that changes across the year.</p>
                <p>That is why accurate forecasting usually depends on strong underlying records through bookkeeping services, structured reporting through management accounts, and visibility into future liabilities connected to corporation tax and VAT obligations.</p>
                <p>Without those layers working together, even advanced cashflow forecasting software can produce misleading conclusions.</p>
              </div>
              <div className="col-md-6">
                <div className="bg-secondary rounded p-5 text-center text-white">Placeholder Image</div>
              </div>
            </div>
          </section>
          
          <section className="mb-5">
            <h2 className="text-deepTeal">What Cashflow Forecasting Actually Changes Inside a Business</h2>
            <p>Many businesses think cashflow forecasting is mainly about avoiding shortages.</p>
            <p>In reality, its biggest value is decision control.</p>
            <p>Without forecasting, decisions are often made in isolation:</p>
            <ul>
              <li>hiring based on current revenue</li>
              <li>expansion based on current turnover</li>
              <li>investment based on current balances</li>
            </ul>
            <p>But cash movement rarely follows the same timing as business activity.</p>
            <p>Revenue recorded today may not arrive for 45 days. A profitable contract may still create short-term cash pressure if supplier payments are front-loaded. Growth itself can increase strain if operational costs rise faster than collections.</p>
            <p>Forecasting changes how these decisions are evaluated.</p>
            <p>Instead of asking: “Can we afford this eventually?”</p>
            <p>The question becomes: “Can the business absorb this at the exact time cash leaves?”</p>
            <p>That difference is where many stable businesses either maintain control or start entering reactive financial cycles.</p>
            <div className="d-flex gap-3 mt-4">
              <Link to="/accounts/bookkeeping-services" className="btn btn-outline-brand">Bookkeeping</Link>
              <Link to="/accounts/statutory-accounts" className="btn btn-outline-brand">Statutory Accounts</Link>
            </div>
          </section>

          <section className="mb-5">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="bg-secondary rounded p-5 text-center text-white">Placeholder Image</div>
              </div>
              <div className="col-md-6">
                <h2 className="text-deepTeal">Why Profitable Businesses Still Run Into Cashflow Pressure</h2>
                <p>One of the biggest misconceptions in business finance is assuming profitability automatically protects cash position.</p>
                <p>It does not.</p>
                <p>A company can report strong profits and still struggle operationally if cash timing becomes distorted.</p>
                <p>This happens frequently where:</p>
                <ul>
                  <li>debtor collection periods increase</li>
                  <li>rapid growth increases upfront costs</li>
                  <li>payroll expands faster than receipts</li>
                  <li>VAT liabilities build during high-sales periods</li>
                  <li>director drawings are taken without forecasting future obligations</li>
                  <li>loan repayments overlap with seasonal slowdowns</li>
                </ul>
                <p>These issues rarely appear clearly inside year-end statutory accounts because statutory reporting focuses on historical compliance.</p>
                <p>Cashflow forecasting focuses on operational survivability moving forward.</p>
                <p>That distinction matters.</p>
              </div>
            </div>
          </section>

          <section className="mb-5">
            <h2 className="text-deepTeal">Cashflow Forecasting and Operational Timing</h2>
            <h4 className="text-brand-orange">Timing Creates More Pressure Than Most Businesses Expect</h4>
            <p>Most financial pressure is timing pressure.</p>
            <p>A supplier invoice arriving two weeks earlier than expected can change an entire month’s position. A delayed customer payment may affect payroll, pension contributions, tax obligations, and supplier commitments simultaneously.</p>
            <p>Individually, none of these events appear catastrophic.</p>
            <p>Combined together, they create compression.</p>
            <p>This is why businesses often say: “Everything was fine until suddenly it wasn’t.”</p>
            <p>The warning signs existed earlier. They simply were not being modelled properly.</p>
          </section>

          <section className="mb-5">
            <h2 className="text-deepTeal">Cashflow Forecasting Becomes More Important During Growth</h2>
            <p>Growth introduces financial strain long before problems become visible.</p>
            <p>More staff increase payroll exposure. Higher sales volumes increase VAT liabilities. Inventory commitments rise. Larger projects extend working capital cycles.</p>
            <p>From the outside, growth looks positive.</p>
            <p>Operationally, it often increases timing risk.</p>
            <p>This is where cashflow forecasting services become more strategic than administrative. Forecasting allows businesses to stress-test growth before committing fully.</p>
          </section>

          <section className="mb-5">
            <h3 className="text-center mb-4">What a Structured Cashflow Forecast Usually Includes</h3>
            <div className="table-responsive">
              <table className="table table-bordered text-center">
                <thead>
                  <tr><th>Forecast Area</th><th>Why It Matters</th></tr>
                </thead>
                <tbody>
                  <tr><td>Expected customer receipts</td><td>Shows when cash is realistically likely to arrive</td></tr>
                  <tr><td>Payroll and pension obligations</td><td>Identifies fixed outgoing pressure points</td></tr>
                  <tr><td>VAT and corporation tax liabilities</td><td>Prevents future tax pressure from appearing unexpectedly</td></tr>
                  <tr><td>Supplier payment schedules</td><td>Tracks operational commitments against inflows</td></tr>
                  <tr><td>Director drawings and dividends</td><td>Prevents over-withdrawal during unstable periods</td></tr>
                </tbody>
              </table>
            </div>
            <p className="small text-muted"><em>This structure becomes even stronger when connected with financial forecasting and consolidated accounts where multiple entities or departments affect group cash position.</em></p>
          </section>

          <section className="mb-5">
            <h2 className="text-deepTeal">The Difference Between Financial Forecasting and Cashflow Forecasting</h2>
            <p>These two areas are closely connected but often misunderstood.</p>
            <p>Financial forecasting focuses on projected business performance:</p>
            <ul>
                <li>profitability</li>
                <li>revenue growth</li>
                <li>projected expenses</li>
                <li>long-term expansion assumptions</li>
            </ul>
            <p>Cashflow forecasting focuses on liquidity timing:</p>
            <ul>
                <li>when money enters</li>
                <li>when money leaves</li>
                <li>where gaps form</li>
                <li>how operational pressure develops</li>
            </ul>
            <p>A business may appear financially strong on projections while still facing cashflow instability operationally.</p>
            <p>That is why businesses planning expansion, funding rounds, staffing increases, or property investment often require both:</p>
            <ul>
                <li>financial forecasting services</li>
                <li>cashflow forecasting services</li>
            </ul>
            <p>One measures projected success.</p>
            <p>The other measures operational sustainability.</p>
          </section>

          <section className="mb-5">
            <h2 className="text-deepTeal">Insight Section: Most Cashflow Crises Begin Months Before They Become Visible</h2>
            <p>Cashflow problems are rarely created at the point where money runs short.</p>
            <p>They usually begin much earlier.</p>
            <p>The issue is that businesses often interpret early growth signals as financial security:</p>
            <ul>
              <li>turnover increases</li>
              <li>larger contracts arrive</li>
              <li>staffing expands</li>
              <li>spending confidence increases</li>
            </ul>
            <p>But increased activity also increases timing exposure.</p>
            <p>A business may commit to:</p>
            <ul>
              <li>larger supplier orders</li>
              <li>higher wage costs</li>
              <li>expanded premises</li>
              <li>longer operational cycles</li>
            </ul>
            <p>before collections stabilise at the same pace.</p>
            <p>By the time the pressure becomes visible in the bank account, the decisions creating it are already locked in.</p>
            <p>This is why reactive forecasting usually arrives late.</p>
            <p>The businesses that maintain stronger financial control are normally forecasting before pressure appears — not after.</p>
          </section>

          <section className="mb-5">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2 className="text-deepTeal">When Businesses Should Move to Structured Cashflow Forecasting Support</h2>
                <p>Some businesses require forecasting continuously.</p>
                <p>Others only reach that point during transition periods.</p>
                <p>Common trigger points include:</p>
                <ul>
                  <li>rapid business growth</li>
                  <li>hiring expansion</li>
                  <li>seasonal fluctuations</li>
                  <li>property investment</li>
                  <li>funding applications</li>
                  <li>VAT pressure</li>
                  <li>declining liquidity visibility</li>
                  <li>multi-company operations</li>
                  <li>inconsistent customer payment cycles</li>
                </ul>
                <p>For startups, this often connects directly with SEIS and EIS accounting because projected cash movement affects investor confidence, operational planning, and future scaling assumptions.</p>
                <p>For established businesses, forecasting often becomes part of broader tax advisory and financial planning decisions.</p>
              </div>
              <div className="col-md-6">
                <div className="bg-secondary rounded p-5 text-center text-white">Placeholder Image</div>
              </div>
            </div>
          </section>

          <section className="mb-5">
            <h3 className="text-center mb-4">Common Reasons Cashflow Forecasts Become Inaccurate</h3>
            <div className="table-responsive">
              <table className="table table-bordered text-center">
                <thead>
                  <tr><th>Forecasting Problem</th><th>What Usually Causes It</th></tr>
                </thead>
                <tbody>
                  <tr><td>Revenue projections too optimistic</td><td>Assumptions ignore real customer payment behaviour</td></tr>
                  <tr><td>VAT obligations underestimated</td><td>Forecast excludes future tax timing</td></tr>
                  <tr><td>Payroll pressure appears suddenly</td><td>Hiring decisions not modelled against cash timing</td></tr>
                  <tr><td>Forecast becomes outdated quickly</td><td>Figures are not updated consistently</td></tr>
                  <tr><td>Growth creates instability</td><td>Expansion costs increase faster than collections</td></tr>
                </tbody>
              </table>
            </div>
            <p className="small text-muted"><em>This is why forecasting cannot operate independently from accurate bookkeeping, payroll services, and management accounting services. The underlying financial data determines forecast reliability.</em></p>
          </section>

          <section className="mb-5">
            <h2 className="text-deepTeal">How Our Cashflow Forecasting Services Differ</h2>
            <p>Many businesses already have spreadsheets.</p>
            <p>Some already use cash flow forecasting software or forecasting tools.</p>
            <p>The issue is rarely access to software.</p>
            <p>The issue is whether the forecast reflects how the business genuinely operates.</p>
            <p>A spreadsheet cannot recognise unrealistic assumptions. A forecasting tool cannot identify operational blind spots on its own. Software does not question whether projected collection periods actually reflect customer behaviour.</p>
            <p>This is not simply about tracking future cash movement. It is about understanding how timing pressure develops operationally before it begins restricting business decisions. Our role is to structure forecasting around how the business genuinely operates.</p>
            <p>That includes:</p>
            <ul>
                <li>realistic payment cycles</li>
                <li>operational cash pressure</li>
                <li>staffing commitments</li>
                <li>tax timing</li>
                <li>director extraction patterns</li>
                <li>funding requirements</li>
                <li>seasonal fluctuations</li>
                <li>supplier dependency exposure</li>
            </ul>
            <p>The objective is not simply producing a cashflow projection.</p>
            <p>It is producing one that remains useful under real trading conditions.</p>
          </section>

          <section className="mb-5">
            <h2 className="text-deepTeal">When You Should Speak to a Cashflow Forecasting Consultant</h2>
            <p>Businesses often wait until pressure already exists.</p>
            <p>Usually the stronger time to build forecasting is:</p>
            <ul>
                <li>before expansion</li>
                <li>before recruitment increases</li>
                <li>before major investment</li>
                <li>before funding applications</li>
                <li>before operational restructuring</li>
                <li>before tax liabilities accumulate</li>
                <li>before cash visibility becomes unclear</li>
            </ul>
            <p>Once pressure has already developed, the available options become narrower.</p>
            <p>Forecasting earlier creates room for adjustment while decisions are still flexible.</p>
          </section>

          {/* FAQs */}
          <section className="py-5 bg-light">
            <div className="container">
              <h3>FAQs on Cashflow Forecasting</h3>
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

          <section className="py-5 bg-white" id="contact-block">
            <div className="container">
              <h2 className="text-deepTeal">Speak to Cashflow Forecasting Consultants London UK</h2>
              <p>If business decisions are currently being made based on assumptions about future cash position rather than structured forecasting, the financial picture may not yet be fully visible.</p>
              <p>At Taxaccolega, our cashflow forecasting services help businesses across London and the UK create clearer operational visibility around future liquidity, timing pressure, growth exposure, and financial planning decisions.</p>
              <p>Whether you need a short-term 13 week cashflow forecast, long-term business cashflow forecasting support, or forecasting integrated with management accounts, corporation tax planning, payroll, and financial forecasting, the objective remains practical:</p>
              <p className="fw-bold">understand future pressure before it starts controlling current decisions.</p>
              
              <div className="row mt-5">
                <div className="col-md-6">
                  <h3>Request a Tailored Cashflow Proposal</h3>
                  <form onSubmit={handleFormSubmit}>
                    <input className="form-control mb-2" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" required />
                    <input className="form-control mb-2" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" required />
                    <textarea className="form-control mb-2" name="message" value={formData.message} onChange={handleInputChange} placeholder="Message" required></textarea>
                    <button className="btn btn-brand">Submit Details</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default CashFlowForecasting;
