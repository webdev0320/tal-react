"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Partners from '../components/Partners';
import ReviewsSlider from '../components/ReviewsSlider';
import ContactForm from '../components/ContactForm';
import AccountsLinksBar from '../components/AccountsLinksBar';
import { CheckIcon } from '../components/accounts/AccountsPageIcons';

const ManagementAccounts = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickNav = [
                    { title: 'Bookkeeping', link: '/accounts/bookkeeping-services' },
                    { title: 'Statutory Accounts', link: '/accounts/statutory-accounts' },
                    { title: 'Payroll Services', link: '/accounts/payroll-services' }
  ];

  return (
    <div className="bg-light min-h-screen">
      <header className="position-relative text-white overflow-hidden py-5" style={{ backgroundImage: 'linear-gradient(rgba(29, 60, 69, 0.72), rgba(29, 60, 69, 0.82)), url(/images/2026/05/Management-Accounts-scaled.webp)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '380px' }}>
        <div className="position-absolute w-100 h-100" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(210, 96, 26, 0.15) 0%, transparent 60%)', top: 0, left: 0, zIndex: 1 }}></div>
        <div className="container position-relative py-4" style={{ zIndex: 2, paddingTop: '5rem' }}>
          <div className="row g-4 align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <span className="text-uppercase small tracking-wider fw-bold mb-2 d-inline-block text-brand-orange" style={{ letterSpacing: '2px' }}>
                Accounts Services
              </span>
              <h1 className="display-4 fw-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Management Accounts UK – Reporting, Analysis & Business Insights
              </h1>
              
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mb-4">
                <a href="#contact-block" className="btn btn-brand px-4 py-2 shadow">CONTACT US</a>
                <a href="/schedule-a-phone-call-or-video-meeting" className="btn btn-outline-light px-4 py-2">Schedule a Call</a>
              </div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0 small" style={{ background: 'transparent' }}>
                  <li className="breadcrumb-item"><Link href="/" className="text-decoration-none text-brand-orange">Home</Link></li>
                  <li className="breadcrumb-item"><Link href="/accounts" className="text-decoration-none text-brand-orange">Accounts</Link></li>
                  <li className="breadcrumb-item active text-white-50" aria-current="page">Management Accounts UK – Reporting, Analysis & Business Insights</li>
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
              <li className="breadcrumb-item active text-secondary">Management Accounts UK – Reporting, Analysis & Business Insights</li>
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
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Businesses rarely struggle because information is unavailable.
              </h2>

            </div>
            <div className="col-lg-5">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img src="/images/2026/05/Services-Accounts-Management-Accounts-Management-Accounts-Are-Built.webp" alt="Businesses rarely struggle because information is unavailable." className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <AccountsLinksBar />

      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 order-2 order-lg-1">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img src="/images/2026/05/Services-Accounts-Management-Accounts-Why-Businesses-Lose-Financial-Control-scaled.webp" alt="They struggle because nobody can interpret the financial position while decisions are still unfolding." className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>
            <div className="col-lg-7 order-1 order-lg-2">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                They struggle because nobody can interpret the financial position while decisions are still unfolding.
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Most businesses already have numbers everywhere.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Invoices exist. Bank balances update daily. Revenue can be seen. Costs are recorded. Software keeps producing reports.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Yet despite all of that visibility, many business owners still reach the end of a month wondering why profit feels tighter than expected, why cash pressure appeared unexpectedly, or why growth is not translating into financial stability the way it should.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That disconnect is usually where management accounts become necessary.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Not because the business lacks data.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Because the business lacks a financial structure that explains what the data is actually saying while decisions are still affecting the outcome.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Management accounts are designed to close that gap between activity and understanding.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>At Taxaccolega, our management accounting services help businesses across London and the UK turn fragmented financial information into something operationally useful — something that supports decisions before financial pressure becomes visible through year-end accounts or tax filings.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Management Accounts Are Built for Decision-Making, Not Compliance
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>A common misunderstanding is treating management accounts like smaller versions of statutory accounts.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>They are not the same thing.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}><Link href="/accounts/statutory-accounts" className="text-brand-orange fw-semibold text-decoration-none">Statutory accounts exist</Link> to satisfy formal reporting obligations through Companies House and HMRC. Their role is compliance-focused. They present a completed financial position for an already-finished accounting period.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Management accounts work differently.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>They are designed to help business owners understand performance while the business is still moving.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That difference matters because financial problems rarely appear suddenly at year end. They build gradually inside day-to-day operations.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Margins narrow slowly. Costs drift upward quietly. Cash leaves faster than expected. Certain services become less profitable without anyone immediately noticing.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>By the time formal accounts reveal the issue, the business has often already absorbed months of inefficient decisions.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Management account services exist to make those patterns visible earlier.</p>
            </div>
            <div className="col-lg-5">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img src="/images/2026/05/Services-Accounts-Management-Accounts-Management-Accounts-and-Business-Decision-Quality.webp" alt="Management Accounts Are Built for Decision-Making, Not Compliance" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
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
                <img src="/images/2026/05/Services-Accounts-Management-Accounts-What-Our-Management-Accounting-scaled.webp" alt="How Management Accounting Services Change Financial Visibility" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>
            <div className="col-lg-7 order-1 order-lg-2">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                How Management Accounting Services Change Financial Visibility
              </h2>
              <h3 className="text-brand-orange fw-bold mb-3">Financial information becomes connected instead of isolated</h3>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Most businesses review financial data in separate pieces.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Sales are reviewed independently from operational costs. <Link href="/accounts/payroll-services" className="text-brand-orange fw-semibold text-decoration-none">Payroll sits in another system</Link>. VAT liabilities appear later. Cash movement is checked through banking activity. Future commitments often exist outside the reporting entirely.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Individually, each figure may be accurate.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Collectively, the business still lacks visibility.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Management accounting services bring those moving parts together into one reporting structure so the relationship between revenue, cost, cash, liabilities, and operational behaviour becomes easier to interpret.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That structure becomes far more reliable when supported by <Link href="/accounts/bookkeeping-services" className="text-brand-orange fw-semibold text-decoration-none">accurate bookkeeping services</Link>, because poor records create distorted reporting no matter how sophisticated the analysis appears.</p>
              <h3 className="text-brand-orange fw-bold mb-3">Timing becomes just as important as totals</h3>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>One of the biggest reasons businesses feel financially uncertain is because timing changes everything.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>A profitable month on paper can still create operational pressure if customer payments arrive late while wages, suppliers, PAYE obligations, and pension contributions leave immediately.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Management accounts help businesses understand not only how much money exists inside operations, but when it actually moves.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This becomes especially important where businesses are scaling quickly, carrying large supplier obligations, or operating with uneven payment cycles.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                What Management Accounts Usually Include
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This table works best directly after explaining management account structure because it translates abstract financial reporting into practical business use.</p>
            </div>
            <div className="col-lg-5">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img src="/images/2026/05/Services-Accounts-Management-Accounts-When-Businesses-Usually-Need-Management-Accounts.webp" alt="What Management Accounts Usually Include" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10">
              <div className="table-responsive rounded-4 shadow-sm border overflow-hidden">
                <table className="table table-hover align-middle mb-0 bg-white">
                  <thead style={{ background: '#1d3c45', color: '#fff' }}>
                    <tr>
                      <th className="py-3 px-4 text-white border-0 fw-bold">Reporting Area</th>
                      <th className="py-3 px-4 text-white border-0 fw-bold">What It Shows</th>
                      <th className="py-3 px-4 text-white border-0 fw-bold">Why It Matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Profit & Loss Reporting</td>
                      <td className="py-3 px-4 text-secondary">Revenue, expenses, operating margins</td>
                      <td className="py-3 px-4 text-secondary">Measures business performance</td>
                    </tr>
                    <tr className="border-bottom" style={{ background: '#fcfcfc' }}>
                      <td className="py-3 px-4 fw-bold text-brand-dark">Cash Position Analysis</td>
                      <td className="py-3 px-4 text-secondary">Inflows, outflows, liquidity timing</td>
                      <td className="py-3 px-4 text-secondary">Identifies pressure before it escalates</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Department or Project Tracking</td>
                      <td className="py-3 px-4 text-secondary">Performance across areas of activity</td>
                      <td className="py-3 px-4 text-secondary">Highlights inefficiencies</td>
                    </tr>
                    <tr className="border-bottom" style={{ background: '#fcfcfc' }}>
                      <td className="py-3 px-4 fw-bold text-brand-dark">Comparative Financial Review</td>
                      <td className="py-3 px-4 text-secondary">Month-on-month movement</td>
                      <td className="py-3 px-4 text-secondary">Detects trends early</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Forecast Alignment</td>
                      <td className="py-3 px-4 text-secondary">Future financial direction</td>
                      <td className="py-3 px-4 text-secondary">Supports planning decisions</td>
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
                <img src="/images/2026/05/Services-Accounts-Management-Accounts-Management-Accounts-and-Long.webp" alt="Why Businesses Lose Financial Control Even While Revenue Is Growing" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>
            <div className="col-lg-7 order-1 order-lg-2">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Why Businesses Lose Financial Control Even While Revenue Is Growing
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Growth can hide financial weakness surprisingly well.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>A business may appear successful externally because turnover continues increasing, new clients are arriving, and operational activity looks busy.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Internally, however, the structure underneath that growth may already be under strain.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This is where management accounts become commercially important rather than simply informational.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>A business can grow while simultaneously experiencing:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>shrinking margins</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>worsening cash timing</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>increasing operational inefficiency</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>uncontrolled overhead expansion</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>tax pressure building in the background</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Without structured reporting, those problems often stay disguised behind overall revenue growth. A common example is where revenue continues increasing while supplier costs, payroll commitments, and delayed customer payments quietly erode the actual profitability underneath that growth.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This is one reason management accounts frequently <Link href="/accounts/cash-flow-forecasting" className="text-brand-orange fw-semibold text-decoration-none">connect naturally with cashflow</Link> <Link href="/accounts/cash-flow-forecasting" className="text-brand-orange fw-semibold text-decoration-none">forecasting services</Link> and <Link href="/accounts/financial-forecasting" className="text-brand-orange fw-semibold text-decoration-none">financial forecasting services</Link>. Growth itself is not always the issue. Understanding whether growth is financially sustainable is the real challenge.</p>
              <h3 className="text-brand-orange fw-bold mb-3">Management Accounts and Business Decision Quality</h3>

              <h3 className="text-brand-orange fw-bold mb-3">Better decisions usually come from earlier financial visibility</h3>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Many operational decisions are made long before their financial effect becomes obvious.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Pricing structures are adjusted. Staff are hired. New software is introduced. Supplier agreements are signed. Directors increase drawings. Expansion costs begin accumulating.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>At the time those decisions are made, the financial impact often feels manageable.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The issue appears later when several commitments begin interacting together.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Management accounts help businesses evaluate whether operational decisions are strengthening the financial structure or gradually weakening it.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That changes the quality of decision-making because assumptions become measurable rather than emotional.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Insight Section: Most businesses do not notice financial deterioration until cashflow reacts
              </h2>

            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Where Management Accounts Connect With Tax and Compliance
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This is one of the most overlooked patterns in growing businesses.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Profit deterioration usually appears before cashflow pressure — but many businesses only recognise the problem once cash becomes tight.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>By that stage:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>supplier pressure has already increased</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>VAT liabilities are approaching</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>payroll obligations remain fixed</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>director withdrawals may already be excessive</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>overdue debtors begin affecting operations</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The underlying financial decline often started months earlier. By the time cashflow pressure becomes visible operationally, many corrective decisions have already become more expensive, slower, or harder to reverse.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Management accounts help identify those shifts while corrective decisions are still possible.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That is the difference between using accounts as a reporting tool versus using them as an operational control system.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Management accounts are not tax returns.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>But they heavily influence how tax positions develop.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Clear financial reporting improves:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>corporation tax planning</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>VAT management and filing consistency</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>director income planning for income tax purposes</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>payroll accuracy and pension contribution planning</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>year-end statutory accounts preparation</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Without visibility across the year, tax decisions often become reactive rather than strategic.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This is why businesses using management accounting services usually experience better coordination across wider accounting and taxation functions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                What Our Management Accounting Services Actually Change
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Most firms can generate reports.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That alone is not valuable anymore.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This is not simply about producing financial reports — it is about creating financial visibility early enough for business decisions to remain flexible. The real difference sits in how reporting is interpreted and structured around operational reality.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>At Taxaccolega, management accounting focuses on how the business actually functions commercially — not simply how accounting categories are organised inside software.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That includes reviewing:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>revenue behaviour across periods</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>timing differences affecting cashflow</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>margin movement across operational areas</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>cost structures becoming inefficient</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>financial trends developing quietly beneath overall growth</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The outcome is not simply “more reports.”</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>It is clearer operational understanding.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Where Management Accounts Commonly Fail
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This second table belongs after the “what changes” section because it reinforces why many businesses already receiving reports still lack meaningful financial control.</p>
            </div>
          </div>
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10">
              <div className="table-responsive rounded-4 shadow-sm border overflow-hidden">
                <table className="table table-hover align-middle mb-0 bg-white">
                  <thead style={{ background: '#1d3c45', color: '#fff' }}>
                    <tr>
                      <th className="py-3 px-4 text-white border-0 fw-bold">Problem</th>
                      <th className="py-3 px-4 text-white border-0 fw-bold">What It Happens</th>
                      <th className="py-3 px-4 text-white border-0 fw-bold">Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Reports arrive too late</td>
                      <td className="py-3 px-4 text-secondary">Financial review becomes reactive</td>
                      <td className="py-3 px-4 text-secondary">Decisions remain unchanged</td>
                    </tr>
                    <tr className="border-bottom" style={{ background: '#fcfcfc' }}>
                      <td className="py-3 px-4 fw-bold text-brand-dark">Figures lack operational context</td>
                      <td className="py-3 px-4 text-secondary">Generic reporting structure</td>
                      <td className="py-3 px-4 text-secondary">Limited practical value</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Cashflow ignored</td>
                      <td className="py-3 px-4 text-secondary">Focus stays on profit only</td>
                      <td className="py-3 px-4 text-secondary">Liquidity pressure develops</td>
                    </tr>
                    <tr className="border-bottom" style={{ background: '#fcfcfc' }}>
                      <td className="py-3 px-4 fw-bold text-brand-dark">Inconsistent categorisation</td>
                      <td className="py-3 px-4 text-secondary">Weak bookkeeping systems</td>
                      <td className="py-3 px-4 text-secondary">Trend analysis becomes unreliable</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Reporting disconnected from forecasting</td>
                      <td className="py-3 px-4 text-secondary">No forward planning integration</td>
                      <td className="py-3 px-4 text-secondary">Short-term visibility only</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                When Businesses Usually Need Management Accounts
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Most businesses do not initially search for management accounting services because they “want reporting.”</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>They search because something feels financially unclear.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Common triggers include:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>profit not matching workload</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>strong sales but weak cash position</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>difficulty understanding margins</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>uncertainty around future commitments</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>inconsistent month-to-month performance</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>growth creating pressure instead of stability</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>These are usually signs that financial information exists but is not being interpreted properly.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The earlier management accounts are introduced, the more flexible business decisions remain.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Management Accounts and Long-Term Financial Planning
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Management accounts are most effective when connected to future planning rather than treated as historical reporting alone.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That includes:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>financial forecasting</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>expansion planning</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>staffing decisions</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>investment timing</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>tax planning</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>operational restructuring</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Because financial clarity is most useful before commitments become fixed.</p>
            </div>
          </div>
        </div>
      </section>

      <Partners />

      <ReviewsSlider />

      <ContactForm source="ManagementAccounts" />

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
                      <span>What are management accounts?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 0 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 0 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        Management accounts are internal financial reports designed to help businesses monitor performance, understand trends, and support operational decisions.
                      </div>
                    )}
                  </div>
                  <div key={1} className="accordion-item border rounded-3 mb-3 overflow-hidden shadow-sm">
                    <button
                      className="btn w-100 text-start p-4 d-flex justify-content-between align-items-center"
                      onClick={() => setActiveFaqIndex(activeFaqIndex === 1 ? null : 1)}
                      style={{
                        backgroundColor: activeFaqIndex === 1 ? '#1d3c45' : 'white',
                        color: activeFaqIndex === 1 ? 'white' : '#1a2332',
                        border: 'none',
                        fontWeight: 600,
                        transition: 'all 0.3s',
                      }}
                    >
                      <span>How often should management accounts be prepared?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 1 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 1 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        Most businesses prepare them monthly, although some high-growth businesses review management reporting more frequently.
                      </div>
                    )}
                  </div>
                  <div key={2} className="accordion-item border rounded-3 mb-3 overflow-hidden shadow-sm">
                    <button
                      className="btn w-100 text-start p-4 d-flex justify-content-between align-items-center"
                      onClick={() => setActiveFaqIndex(activeFaqIndex === 2 ? null : 2)}
                      style={{
                        backgroundColor: activeFaqIndex === 2 ? '#1d3c45' : 'white',
                        color: activeFaqIndex === 2 ? 'white' : '#1a2332',
                        border: 'none',
                        fontWeight: 600,
                        transition: 'all 0.3s',
                      }}
                    >
                      <span>Are management accounts required by law?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 2 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 2 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        No. Unlike statutory accounts, management accounts are optional internal reports used for operational and financial control.
                      </div>
                    )}
                  </div>
                  <div key={3} className="accordion-item border rounded-3 mb-3 overflow-hidden shadow-sm">
                    <button
                      className="btn w-100 text-start p-4 d-flex justify-content-between align-items-center"
                      onClick={() => setActiveFaqIndex(activeFaqIndex === 3 ? null : 3)}
                      style={{
                        backgroundColor: activeFaqIndex === 3 ? '#1d3c45' : 'white',
                        color: activeFaqIndex === 3 ? 'white' : '#1a2332',
                        border: 'none',
                        fontWeight: 600,
                        transition: 'all 0.3s',
                      }}
                    >
                      <span>How do management accounts differ from statutory accounts?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 3 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 3 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        Statutory accounts focus on formal compliance and year-end reporting. Management accounts focus on ongoing financial visibility and decision-making.
                      </div>
                    )}
                  </div>
                  <div key={4} className="accordion-item border rounded-3 mb-3 overflow-hidden shadow-sm">
                    <button
                      className="btn w-100 text-start p-4 d-flex justify-content-between align-items-center"
                      onClick={() => setActiveFaqIndex(activeFaqIndex === 4 ? null : 4)}
                      style={{
                        backgroundColor: activeFaqIndex === 4 ? '#1d3c45' : 'white',
                        color: activeFaqIndex === 4 ? 'white' : '#1a2332',
                        border: 'none',
                        fontWeight: 600,
                        transition: 'all 0.3s',
                      }}
                    >
                      <span>Can management accounts improve cashflow control?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 4 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 4 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        Yes. They help identify timing gaps, pressure points, and operational patterns affecting liquidity before they become severe.
                      </div>
                    )}
                  </div>
                  <div key={5} className="accordion-item border rounded-3 mb-3 overflow-hidden shadow-sm">
                    <button
                      className="btn w-100 text-start p-4 d-flex justify-content-between align-items-center"
                      onClick={() => setActiveFaqIndex(activeFaqIndex === 5 ? null : 5)}
                      style={{
                        backgroundColor: activeFaqIndex === 5 ? '#1d3c45' : 'white',
                        color: activeFaqIndex === 5 ? 'white' : '#1a2332',
                        border: 'none',
                        fontWeight: 600,
                        transition: 'all 0.3s',
                      }}
                    >
                      <span>Do small businesses benefit from management accounting services?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 5 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 5 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        Yes. Smaller businesses often benefit significantly because financial visibility usually becomes harder as operational activity grows.
                      </div>
                    )}
                  </div>
                  <div key={6} className="accordion-item border rounded-3 mb-3 overflow-hidden shadow-sm">
                    <button
                      className="btn w-100 text-start p-4 d-flex justify-content-between align-items-center"
                      onClick={() => setActiveFaqIndex(activeFaqIndex === 6 ? null : 6)}
                      style={{
                        backgroundColor: activeFaqIndex === 6 ? '#1d3c45' : 'white',
                        color: activeFaqIndex === 6 ? 'white' : '#1a2332',
                        border: 'none',
                        fontWeight: 600,
                        transition: 'all 0.3s',
                      }}
                    >
                      <span>When should a business start using management accounts?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 6 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 6 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        Usually before financial uncertainty becomes visible externally. Once growth, staffing, costs, or cashflow become harder to interpret, management reporting becomes increasingly valuable.
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

export default ManagementAccounts;
