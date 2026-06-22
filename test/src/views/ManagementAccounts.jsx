"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Partners from '../components/Partners';
import AccountsLinksBar from '../components/AccountsLinksBar';
import ReviewsSlider from '../components/ReviewsSlider';
import AccountsServiceGrid from '../components/AccountsServiceGrid';
import { accountsLinks } from '../data/accountsLinks';

const ManagementAccounts = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  const faqs = [
    { q: 'What are management accounts?', a: 'Management accounts are internal financial reports designed to help businesses monitor performance, understand trends, and support operational decisions.' },
    { q: 'How often should management accounts be prepared?', a: 'Management accounts are typically prepared on a monthly or quarterly basis to provide timely insights.' },
    { q: 'Are management accounts required by law?', a: 'No, management accounts are voluntary, unlike statutory accounts which are a legal requirement for limited companies.' },
    { q: 'How do management accounts differ from statutory accounts?', a: 'Statutory accounts are compliance-focused for external reporting, while management accounts are operational, helping business owners make decisions in real-time.' },
    { q: 'Can management accounts improve cashflow control?', a: 'Yes, by tracking cash inflows and outflows precisely, management accounts help identify liquidity pressures before they escalate.' },
    { q: 'Do small businesses benefit from management accounting services?', a: 'Absolutely. Small businesses benefit from early visibility into margins, costs, and cash timing, which is critical during growth phases.' },
    { q: 'When should a business start using management accounts?', a: 'As soon as operational decisions become complex or growth outpaces internal financial structures.' }
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
                Management Accounting Specialists
              </span>
              <h1 className="display-4 fw-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Management Accounts UK – Reporting, Analysis & Business Insights
              </h1>
              <p className="lead text-white-50 mb-4" style={{ maxWidth: '680px', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Expert Guidance for Management Account Services: Tailored Solutions for Financial Insight and Growth Strategies at Taxaccolega.
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
                  <li className="breadcrumb-item active text-white-50" aria-current="page">Management accounts official</li>
                </ol>
              </nav>
            </div>
            
            {/* HERO OVERLAPPING SIDEBAR */}
            <div className="col-lg-4 d-none d-lg-block position-relative" style={{ zIndex: 3 }}>
              <div className="p-4 rounded-4 shadow-lg" style={{ background: 'linear-gradient(180deg, rgba(232,162,116,0.9) 0%, rgba(212,108,36,0.95) 50%, rgba(184,80,14,1) 100%)' }}>
                <h5 className="text-white fw-bold mb-4 text-center border-bottom pb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>Quick Navigation</h5>
                <div className="d-flex flex-column gap-3">
                  {[
                    { title: 'Bookkeeping', link: '/accounts/bookkeeping-services' },
                    { title: 'Financial Forecasting', link: '/accounts/financial-forecasting' },
                    { title: 'Statutory Accounts', link: '/accounts/statutory-accounts' }
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
              <li className="breadcrumb-item active text-secondary">Management accounts official</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-5">
        <div className="container">
          <section className="mb-5">
            <p className="lead fw-bold">Businesses rarely struggle because information is unavailable.</p>
            <p className="lead fw-bold">They struggle because nobody can interpret the financial position while decisions are still unfolding.</p>
            <br />
            <h3>Most businesses already have numbers everywhere.</h3>
            <p>Invoices exist. Bank balances update daily. Revenue can be seen. Costs are recorded. Software keeps producing reports.</p>
            <p>Yet despite all of that visibility, many business owners still reach the end of a month wondering why profit feels tighter than expected, why cash pressure appeared unexpectedly, or why growth is not translating into financial stability the way it should.</p>
            <p>That disconnect is usually where management accounts become necessary.</p>
            <p>Not because the business lacks data.</p>
            <p>Because the business lacks a financial structure that explains what the data is actually saying while decisions are still affecting the outcome.</p>
            <p>Management accounts are designed to close that gap between activity and understanding.</p>
            <p>At Taxaccolega, our management accounting services help businesses across London and the UK turn fragmented financial information into something operationally useful — something that supports decisions before financial pressure becomes visible through year-end accounts or tax filings.</p>
          </section>
          
          <section className="mb-5">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h3>Management Accounts Are Built for Decision-Making, Not Compliance</h3>
                <p>A common misunderstanding is treating management accounts like smaller versions of statutory accounts.</p>
                <p>They are not the same thing.</p>
                <p>Statutory accounts exist to satisfy formal reporting obligations through Companies House and HMRC. Their role is compliance-focused. They present a completed financial position for an already-finished accounting period.</p>
                <p>Management accounts work differently.</p>
                <p>They are designed to help business owners understand performance while the business is still moving.</p>
                <p>That difference matters because financial problems rarely appear suddenly at year end. They build gradually inside day-to-day operations.</p>
                <p>Margins narrow slowly. Costs drift upward quietly. Cash leaves faster than expected. Certain services become less profitable without anyone immediately noticing.</p>
                <p>By the time formal accounts reveal the issue, the business has often already absorbed months of inefficient decisions.</p>
                <p>Management account services exist to make those patterns visible earlier.</p>
              </div>
              <div className="col-lg-4">
                <div className="bg-secondary rounded p-5 text-center text-white">Placeholder Image</div>
              </div>
            </div>
          </section>

          <section className="mb-5">
            <h3>What Management Accounts Usually Include</h3>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr><th>Reporting Area</th><th>What It Shows</th><th>Why It Matters</th></tr>
                </thead>
                <tbody>
                  <tr><td>Profit & Loss Reporting</td><td>Revenue, expenses, operating margins</td><td>Measures business performance</td></tr>
                  <tr><td>Cash Position Analysis</td><td>Inflows, outflows, liquidity timing</td><td>Identifies pressure before it escalates</td></tr>
                  <tr><td>Department or Project Tracking</td><td>Performance across areas of activity</td><td>Highlights inefficiencies</td></tr>
                  <tr><td>Comparative Financial Review</td><td>Month-on-month movement</td><td>Detects trends early</td></tr>
                  <tr><td>Forecast Alignment</td><td>Future financial direction</td><td>Supports planning decisions</td></tr>
                </tbody>
              </table>
            </div>
            <p className="small text-muted"><em>This table works best directly after explaining management account structure because it translates abstract financial reporting into practical business use.</em></p>
          </section>

          <section className="mb-5">
            <h3>Why Businesses Lose Financial Control Even While Revenue Is Growing</h3>
            <p>Growth can hide financial weakness surprisingly well.</p>
            <p>A business may appear successful externally because turnover continues increasing, new clients are arriving, and operational activity looks busy.</p>
            <p>Internally, however, the structure underneath that growth may already be under strain.</p>
            <p>This is where management accounts become commercially important rather than simply informational.</p>
            <p>A business can grow while simultaneously experiencing:</p>
            <ul>
              <li>shrinking margins</li>
              <li>worsening cash timing</li>
              <li>increasing operational inefficiency</li>
              <li>uncontrolled overhead expansion</li>
              <li>tax pressure building in the background</li>
            </ul>
            <p>Without structured reporting, those problems often stay disguised behind overall revenue growth. A common example is where revenue continues increasing while supplier costs, payroll commitments, and delayed customer payments quietly erode the actual profitability underneath that growth.</p>
            <p>This is one reason management accounts frequently connect naturally with cashflow forecasting services and financial forecasting services. Growth itself is not always the issue. Understanding whether growth is financially sustainable is the real challenge.</p>
          </section>

          <section className="mb-5">
            <h3>Management Accounts and Business Decision Quality</h3>
            <p className="fw-bold">Better decisions usually come from earlier financial visibility</p>
            <p>Many operational decisions are made long before their financial effect becomes obvious.</p>
            <p>Pricing structures are adjusted. Staff are hired. New software is introduced. Supplier agreements are signed. Directors increase drawings. Expansion costs begin accumulating.</p>
            <p>At the time those decisions are made, the financial impact often feels manageable.</p>
            <p>The issue appears later when several commitments begin interacting together.</p>
            <p>Management accounts help businesses evaluate whether operational decisions are strengthening the financial structure or gradually weakening it.</p>
            <p>That changes the quality of decision-making because assumptions become measurable rather than emotional.</p>
            <p className="fw-bold">Many operational decisions are made long before their financial effect becomes obvious.</p>
          </section>

          <section className="mb-5">
            <h3>Where Management Accounts Connect With Tax and Compliance</h3>
            <p>This is one of the most overlooked patterns in growing businesses.</p>
            <p>Profit deterioration usually appears before cashflow pressure — but many businesses only recognise the problem once cash becomes tight.</p>
            <p>By that stage:</p>
            <ul>
              <li>supplier pressure has already increased</li>
              <li>VAT liabilities are approaching</li>
              <li>payroll obligations remain fixed</li>
              <li>director withdrawals may already be excessive</li>
              <li>overdue debtors begin affecting operations</li>
            </ul>
            <p>The underlying financial decline often started months earlier. By the time cashflow pressure becomes visible operationally, many corrective decisions have already become more expensive, slower, or harder to reverse.</p>
            <p>Management accounts help identify those shifts while corrective decisions are still possible.</p>
            <p>That is the difference between using accounts as a reporting tool versus using them as an operational control system.</p>
            <p>Management accounts are not tax returns.</p>
            <p>But they heavily influence how tax positions develop.</p>
            <p>Clear financial reporting improves:</p>
            <ul>
              <li>corporation tax planning</li>
              <li>VAT management and filing consistency</li>
              <li>director income planning for income tax purposes</li>
              <li>payroll accuracy and pension contribution planning</li>
              <li>year-end statutory accounts preparation</li>
            </ul>
            <p>Without visibility across the year, tax decisions often become reactive rather than strategic.</p>
            <p>This is why businesses using management accounting services usually experience better coordination across wider accounting and taxation functions.</p>
          </section>

          <section className="mb-5">
            <h3>What Our Management Accounting Services Actually Change</h3>
            <p>Most firms can generate reports.</p>
            <p>That alone is not valuable anymore.</p>
            <p>This is not simply about producing financial reports — it is about creating financial visibility early enough for business decisions to remain flexible. The real difference sits in how reporting is interpreted and structured around operational reality.</p>
            <p>At Taxaccolega, management accounting focuses on how the business actually functions commercially — not simply how accounting categories are organised inside software.</p>
            <p>That includes reviewing:</p>
            <ul>
              <li>revenue behaviour across periods</li>
              <li>timing differences affecting cashflow</li>
              <li>margin movement across operational areas</li>
              <li>cost structures becoming inefficient</li>
              <li>financial trends developing quietly beneath overall growth</li>
            </ul>
            <p>The outcome is not simply “more reports.”</p>
            <p>It is clearer operational understanding.</p>
          </section>

          <section className="mb-5">
            <h3>Where Management Accounts Commonly Fail</h3>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr><th>Problem</th><th>What It Happens</th><th>Result</th></tr>
                </thead>
                <tbody>
                  <tr><td>Reports arrive too late</td><td>Financial review becomes reactive</td><td>Decisions remain unchanged</td></tr>
                  <tr><td>Figures lack operational context</td><td>Generic reporting structure</td><td>Limited practical value</td></tr>
                  <tr><td>Cashflow ignored</td><td>Focus stays on profit only</td><td>Liquidity pressure develops</td></tr>
                  <tr><td>Inconsistent categorisation</td><td>Weak bookkeeping systems</td><td>Trend analysis becomes unreliable</td></tr>
                  <tr><td>Reporting disconnected from forecasting</td><td>No forward planning integration</td><td>Short-term visibility only</td></tr>
                </tbody>
              </table>
            </div>
            <p className="small text-muted"><em>This second table belongs after the “what changes” section because it reinforces why many businesses already receiving reports still lack meaningful financial control.</em></p>
          </section>

          <section className="mb-5">
            <h3>When Businesses Usually Need Management Accounts</h3>
            <p>Most businesses do not initially search for management accounting services because they “want reporting.”</p>
            <p>They search because something feels financially unclear.</p>
            <p>Common triggers include:</p>
            <ul>
              <li>profit not matching workload</li>
              <li>strong sales but weak cash position</li>
              <li>difficulty understanding margins</li>
              <li>uncertainty around future commitments</li>
              <li>inconsistent month-to-month performance</li>
              <li>growth creating pressure instead of stability</li>
            </ul>
            <p>These are usually signs that financial information exists but is not being interpreted properly.</p>
            <p>The earlier management accounts are introduced, the more flexible business decisions remain.</p>
          </section>

          <section className="mb-5">
            <h3>Management Accounts and Long-Term Financial Planning</h3>
            <p>Management accounts are most effective when connected to future planning rather than treated as historical reporting alone.</p>
            <p>That includes:</p>
            <ul>
              <li>financial forecasting</li>
              <li>expansion planning</li>
              <li>staffing decisions</li>
              <li>investment timing</li>
              <li>tax planning</li>
              <li>operational restructuring</li>
            </ul>
            <p>Because financial clarity is most useful before commitments become fixed.</p>
          </section>

          <section className="py-5 bg-white">
            <div className="container">
              <h3>Speak to Management Accountants London UK</h3>
              <p>If your business already produces financial information but still struggles to explain performance clearly, the issue may not be the numbers themselves.</p>
              <p>It may be the structure behind them.</p>
              <p>Management accounting services help businesses understand how revenue, costs, tax exposure, cashflow, and operational decisions are interacting in real time — not months after the position has already developed.</p>
              <p>Taxaccolega provides management accounts, management accounting services, and strategic financial reporting support for businesses across London and the UK.</p>
            
              <div className="row g-4 mt-4">
                <div className="col-md-3"><strong>Phone Number</strong><br/>020 8127 0728</div>
                <div className="col-md-3"><strong>Whatsapp</strong><br/>074 7117 0484</div>
                <div className="col-md-3"><strong>Email</strong><br/>info@taxaccolega.co.uk</div>
                <div className="col-md-3"><strong>Address</strong><br/>187a London Road, Croydon, Surrey, CR0 2RJ</div>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="py-5">
            <div className="container">
              <h3>Our Accounts Services</h3>
              <AccountsServiceGrid items={accountsLinks} />
              
              <h3 className="mt-5">FAQs on Management Accounts</h3>
              {faqs.map((faq, idx) => (
                <div key={idx} className="accordion-item border rounded mb-2">
                  <button className="btn w-100 text-start p-3" onClick={() => setActiveFaqIndex(activeFaqIndex === idx ? null : idx)}>
                    {faq.q}
                  </button>
                  {activeFaqIndex === idx && <div className="p-3 bg-light">{faq.a}</div>}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Partners />
      <ReviewsSlider />
    </div>
  );
};

export default ManagementAccounts;
