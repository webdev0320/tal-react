"use client";
import { useState } from 'react';

/* ── Sidebar Cards ── */
export const SidebarCards = () => {
  const links = [
    { title: 'Tax\nInvestigation', link: '/taxation/tax-investigation-insurance' },
    { title: 'Income Tax\nAccountant\nofficial', link: '/taxation/personal-income-tax' },
    { title: 'VAT Tax\nAccounting\nofficial', link: '/taxation/vat-accountants' }
  ];
  return (
    <div className="p-4 rounded-4" style={{ background: 'linear-gradient(180deg, rgba(232,162,116,0.6) 0%, rgba(212,108,36,0.8) 50%, rgba(184,80,14,0.9) 100%)', position: 'relative', overflow: 'hidden', height: '100%' }}>
      <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, transparent 60%)' }}></div>
      <div className="position-relative d-flex flex-column gap-4" style={{ zIndex: 2 }}>
        {links.map((link, idx) => (
          <div key={idx} className="card border-0 shadow rounded-4 p-4 text-start bg-white" style={{ transition: 'transform 0.2s ease', minHeight: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h4 className="fw-bold mb-4" style={{ color: '#1a3644', fontFamily: "'Outfit', sans-serif", fontSize: '1.4rem', whiteSpace: 'pre-line' }}>{link.title}</h4>
            <a href={link.link} className="text-decoration-none fw-bold small text-uppercase mt-auto" style={{ color: '#1a3644', letterSpacing: '1px' }}>READ MORE &raquo;</a>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── Tax Links Grid ── */
export const TaxLinksGrid = () => {
  const taxLinks = [
    { label: 'Corporation Tax', href: '/taxation/company-tax-return-accountants', active: true },
    { label: 'Value Added Tax', href: '/taxation/vat-accountants' },
    { label: 'Inheritance Tax', href: '/taxation/inheritance-tax-planning' },
    { label: 'Tax Investigation', href: '/taxation/tax-investigation-insurance' },
    { label: 'Capital Gain Tax', href: '/taxation/capital-gains-tax-accountants' },
    { label: 'Estate Tax Planning', href: '/taxation/estate-property-tax-planning' },
    { label: 'Research & Development', href: '/taxation/company-tax-return-accountants' },
    { label: 'Tax Advisory', href: '/taxation/tax-advisors' },
    { label: 'EMI Scheme', href: '/taxation/emi-schemes' },
    { label: 'SEIS and EIS', href: '/taxation/seis-tax-relief' },
    { label: 'Non-UK Resident', href: '/taxation/non-uk-resident-taxation' },
    { label: 'Let Property Campaign', href: '/taxation/let-property-campaign' },
    { label: 'Worldwide Disclosure', href: '/taxation/worldwide-disclosure-facility' },
    { label: 'Cryptocurrency', href: '/taxation/cryptocurrency' },
    { label: 'Income Tax', href: '/taxation/personal-income-tax-professionals-and-chartered-accountants' },
    { label: 'Film Tax Relief', href: '/taxation/film-tax-relief' },
  ];
  return (
    <div className="d-flex flex-wrap gap-2 mt-4">
      {taxLinks.map((t, i) => (
        <a key={i} href={t.href} className={`btn btn-sm rounded-pill px-3 py-2 fw-medium ${t.active ? 'text-white' : 'text-dark'}`}
          style={{ backgroundColor: t.active ? '#d2601a' : '#f0f0f0', fontSize: '0.85rem', border: 'none', transition: 'all 0.2s' }}
          onMouseEnter={e => { if (!t.active) e.target.style.backgroundColor = '#e0e0e0'; }}
          onMouseLeave={e => { if (!t.active) e.target.style.backgroundColor = '#f0f0f0'; }}>
          {t.label}
        </a>
      ))}
    </div>
  );
};

/* ── What Corp Tax Involves ── */
export const WhatItInvolves = () => (
  <section className="py-5 bg-white">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-5">
          {/* REPLACE: Corporation tax illustration image */}
          <img src="/images/2023/06/calculator-khOE-621x414@LiveMint.webp" alt="Corporation Tax Calculation" className="img-fluid rounded-4 shadow" />
        </div>
        <div className="col-lg-7">
          <h3 className="fw-bold mb-3" style={{ color: '#1a2332', fontFamily: "'Outfit', sans-serif" }}>What Corporation Tax Actually Involves In Practice</h3>
          <p className="fw-semibold mb-3" style={{ color: '#d2601a' }}>It Starts Long Before The Return Is Filed</p>
          <p className="text-secondary" style={{ lineHeight: 1.8 }}>Corporation tax is calculated at year-end, but it is created throughout the year. Every decision affects it:</p>
          <ul className="text-secondary mb-3">
            <li>How income is recorded</li>
            <li>How expenses are treated</li>
            <li>How directors take money from the business</li>
          </ul>
          <p className="text-secondary" style={{ lineHeight: 1.8 }}>A common pattern we see is where director loan accounts are used without clear tracking, dividend and salary decisions are made without reviewing tax efficiency, or expenses are recorded without considering whether they are fully allowable.</p>
          <h5 className="fw-bold mt-4" style={{ color: '#1a2332' }}>It Depends On Consistency Across Multiple Areas</h5>
          <p className="text-secondary" style={{ lineHeight: 1.8 }}>Corporation tax sits on top of financial records, company accounts, and tax calculations. If these do not align, the return becomes inconsistent.</p>
        </div>
      </div>
    </div>
  </section>
);

/* ── Company Tax Returns for Ltd ── */
export const LtdCompanyReturns = () => (
  <section className="py-5 bg-white">
    <div className="container">
      <h3 className="fw-bold mb-3" style={{ color: '#1a2332', fontFamily: "'Outfit', sans-serif" }}>Company Tax Returns For Limited Companies</h3>
      <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>Every UK limited company is required to submit a company tax return. This involves:</p>
      <ul className="text-secondary mb-4">
        <li>Preparing the CT600</li>
        <li>Calculating taxable profit</li>
        <li>Submitting through HMRC systems</li>
      </ul>
      <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>But the real work is not in submission — it's in preparation. Everything must match. If one figure changes, everything else needs to follow.</p>
      <div className="text-center mb-4 mt-5">
        <h4 className="fw-bold" style={{ color: '#1a2332' }}>Company Tax Return Components</h4>
        <p className="text-secondary">Understanding what makes up your tax submission</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="table-responsive bg-white rounded-3 shadow-sm">
            <table className="table table-borderless mb-0">
              <thead style={{ backgroundColor: '#1d3c45', color: 'white' }}>
                <tr><th className="py-3 px-4">Component</th><th className="py-3 px-4">Purpose</th><th className="py-3 px-4">Submitted To</th></tr>
              </thead>
              <tbody>
                <tr className="border-bottom"><td className="py-3 px-4 fw-semibold" style={{ color: '#1a2332' }}>Company Accounts</td><td className="py-3 px-4 text-secondary">Financial performance</td><td className="py-3 px-4 text-secondary">Companies House</td></tr>
                <tr className="border-bottom" style={{ backgroundColor: '#fcfcfc' }}><td className="py-3 px-4 fw-semibold" style={{ color: '#1a2332' }}>Tax Calculations</td><td className="py-3 px-4 text-secondary">Profit adjustments</td><td className="py-3 px-4 text-secondary">HMRC</td></tr>
                <tr><td className="py-3 px-4 fw-semibold" style={{ color: '#1a2332' }}>Supporting Notes</td><td className="py-3 px-4 text-secondary">Explanation of figures</td><td className="py-3 px-4 text-secondary">HMRC</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ── Filing Problems Section ── */
export const FilingProblems = () => (
  <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6">
          {/* REPLACE: Filing problems illustration */}
          <img src="/images/2023/06/Benefits-of-Hiring-an-Accountant-for-a-Small-Business-scaled-1-1024x683.jpg" alt="Filing Corporation Tax Return" className="img-fluid rounded-4 shadow" />
        </div>
        <div className="col-lg-6">
          <h3 className="fw-bold mb-3" style={{ color: '#1a2332', fontFamily: "'Outfit', sans-serif" }}>Filing Corporation Tax Return Online — Where Problems Usually Appear</h3>
          <p className="text-secondary" style={{ lineHeight: 1.8 }}>Filing a corporation tax return online is straightforward in process — but not in practice. Most issues appear when:</p>
          <ul className="text-secondary mb-3">
            <li>Figures don't align</li>
            <li>Adjustments are unclear</li>
            <li>Records are incomplete</li>
          </ul>
          <p className="text-secondary" style={{ lineHeight: 1.8 }}>This usually happens when returns are prepared from figures that look complete on the surface but haven't been fully reviewed against how those figures should be treated for Corporation Tax purposes.</p>
        </div>
      </div>
    </div>
  </section>
);

/* ── Deadlines Section ── */
export const DeadlinesSection = () => (
  <section className="py-5 bg-white">
    <div className="container">
      <h3 className="fw-bold mb-3" style={{ color: '#1a2332', fontFamily: "'Outfit', sans-serif" }}>Corporation Tax Deadlines, Payments & Penalties</h3>
      <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>Corporation tax has two key deadlines. Most penalties arise not from complexity — but from timing.</p>
      <div className="text-center mb-3"><h4 className="fw-bold" style={{ color: '#1a2332' }}>Company Tax Timelines</h4></div>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="table-responsive bg-white rounded-3 shadow-sm">
            <table className="table table-borderless mb-0">
              <thead style={{ backgroundColor: '#1d3c45', color: 'white' }}>
                <tr><th className="py-3 px-4">Type</th><th className="py-3 px-4">Deadline</th><th className="py-3 px-4">Common Issues</th></tr>
              </thead>
              <tbody>
                <tr className="border-bottom"><td className="py-3 px-4 fw-semibold" style={{ color: '#1a2332' }}>Payment</td><td className="py-3 px-4 text-secondary">9 months + 1 day</td><td className="py-3 px-4 text-secondary">Interest on late payments</td></tr>
                <tr><td className="py-3 px-4 fw-semibold" style={{ color: '#1a2332' }}>Filing</td><td className="py-3 px-4 text-secondary">12 months after year-end</td><td className="py-3 px-4 text-secondary">Automatic penalties</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ── Year-End Problems ── */
export const YearEndProblems = () => (
  <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
    <div className="container">
      <h3 className="fw-bold mb-4" style={{ color: '#1a2332', fontFamily: "'Outfit', sans-serif" }}>Why Most Corporation Tax Problems Are Only Discovered At Year-End</h3>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card h-100 border-0 shadow-sm rounded-4 p-4" style={{ borderLeft: '4px solid #d2601a' }}>
            <h5 className="fw-bold mb-3" style={{ color: '#1a2332' }}>Throughout the year:</h5>
            <ul className="text-secondary mb-0"><li>Figures look reasonable</li><li>Accounts seem in order</li><li>Nothing appears urgent</li></ul>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card h-100 border-0 shadow-sm rounded-4 p-4" style={{ borderLeft: '4px solid #dc3545' }}>
            <h5 className="fw-bold mb-3" style={{ color: '#1a2332' }}>But at year-end:</h5>
            <ul className="text-secondary mb-0"><li>Expenses don't match treatment rules</li><li>Director payments create unexpected tax outcomes</li><li>Adjustments are required across multiple areas</li></ul>
          </div>
        </div>
      </div>
      <p className="text-secondary mt-4" style={{ lineHeight: 1.8 }}>Corporation tax issues are rarely solved at the point of filing. They are either prevented earlier or corrected later at cost.</p>
    </div>
  </section>
);

/* ── Payroll & Expenses ── */
export const PayrollExpenses = () => (
  <section className="py-5 bg-white">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-7">
          <h3 className="fw-bold mb-3" style={{ color: '#1a2332', fontFamily: "'Outfit', sans-serif" }}>Corporation Tax And Payroll, Expenses, And Financial Activity</h3>
          <p className="text-secondary" style={{ lineHeight: 1.8 }}>Payroll plays a significant role in corporation tax. Salary payments reduce profit, but must be structured correctly. Where businesses operate structured payroll services, it becomes easier to ensure:</p>
          <ul className="text-secondary mb-3"><li>Accurate recording</li><li>Correct tax treatment</li><li>Consistent financial reporting</li></ul>
          <p className="text-secondary" style={{ lineHeight: 1.8 }}>Without this alignment, payroll and tax figures often require adjustment.</p>
        </div>
        <div className="col-lg-5">
          {/* REPLACE: Payroll illustration */}
          <img src="/images/2023/06/360_F_250204593_VbMhcn9dQ3TP5DQxBwcZwT6P3xz5rIKD.jpg" alt="Payroll and Corporation Tax" className="img-fluid rounded-4 shadow" />
        </div>
      </div>
    </div>
  </section>
);

/* ── Small Business Section ── */
export const SmallBusinessSection = () => (
  <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
    <div className="container">
      <h3 className="fw-bold mb-3" style={{ color: '#1a2332', fontFamily: "'Outfit', sans-serif" }}>Corporation Tax Services For Small Businesses</h3>
      <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>For small businesses, corporation tax often becomes difficult when growth outpaces structure. Common issues include:</p>
      <div className="row g-4">
        {['Unclear financial position', 'Inconsistent records', 'Reactive tax handling'].map((item, i) => (
          <div key={i} className="col-md-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 p-4 text-center">
              <div className="mb-3"><i className="fas fa-exclamation-triangle fa-2x" style={{ color: '#d2601a' }}></i></div>
              <p className="text-secondary fw-medium mb-0">{item}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-secondary mt-4" style={{ lineHeight: 1.8 }}>Working with small business tax accountants ensures that tax is handled as part of the business process — not as a last-minute task.</p>
    </div>
  </section>
);

/* ── Services Actually Change ── */
export const ServicesChange = () => (
  <section className="py-5 bg-white">
    <div className="container">
      <div className="text-center mb-5">
        <h3 className="fw-bold mb-3" style={{ color: '#1a2332', fontFamily: "'Outfit', sans-serif" }}>What Our Corporation Tax Services Actually Change</h3>
        <p className="text-secondary mx-auto" style={{ maxWidth: '700px', lineHeight: 1.8 }}>What changes the outcome is how the process is handled. The difference is not in what is done but when and how it is done.</p>
      </div>
      <div className="row g-4 justify-content-center">
        {[
          { title: 'Most firms offer:', desc: 'Preparation, calculation, and submission. That\'s expected.' },
          { title: 'Our approach focuses on:', desc: 'Aligning records before calculation, reviewing treatment of income and expenses, identifying issues before submission.' },
          { title: 'This means:', desc: 'Fewer adjustments, a clearer tax position, and a reduced risk of HMRC queries.' },
        ].map((card, i) => (
          <div key={i} className="col-lg-4 col-md-6">
            <div className="card h-100 border-0 shadow-sm rounded-4 p-4 text-center">
              <h5 className="fw-bold mb-3" style={{ color: '#1a2332' }}>{card.title}</h5>
              <p className="text-secondary mb-0">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ── When To Speak To Advisor ── */
export const SpeakToAdvisor = () => (
  <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-7">
          <h3 className="fw-bold mb-3" style={{ color: '#1a2332', fontFamily: "'Outfit', sans-serif" }}>When You Should Speak To A Corporation Tax Advisor</h3>
          <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Most businesses wait until the return is due, figures are finalised, or deadlines are close. That's already late. You should speak to a corporation tax advisor when:</p>
          <ul className="text-secondary mb-3">
            <li>Profits start increasing</li>
            <li>Financial decisions become less straightforward</li>
            <li>Structure of income or expenses changes</li>
          </ul>
          <p className="text-secondary" style={{ lineHeight: 1.8 }}>At this stage, decisions can still influence the outcome. Later, they cannot.</p>
        </div>
        <div className="col-lg-5">
          {/* REPLACE: Advisor consultation image */}
          <img src="/images/2023/06/fooddrive-1024x683.webp" alt="Tax Advisor Consultation" className="img-fluid rounded-4 shadow" />
        </div>
      </div>
    </div>
  </section>
);

/* ── Bottom Two-Column Section ── */
export const BottomColumns = () => (
  <section className="py-5 bg-white">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-6">
          <div className="card h-100 border-0 shadow-sm rounded-4 p-4" style={{ borderTop: '4px solid #d2601a' }}>
            <h4 className="fw-bold mb-3" style={{ color: '#1a2332', fontFamily: "'Outfit', sans-serif" }}>Corporation Tax And Wider Financial Planning</h4>
            <p className="text-secondary" style={{ lineHeight: 1.8 }}>Corporation tax does not sit in isolation. It connects with:</p>
            <ul className="text-secondary"><li>Cash flow</li><li>Profit planning</li><li>Future growth</li></ul>
            <p className="text-secondary" style={{ lineHeight: 1.8 }}>This is why it often aligns with financial forecasting services and cashflow forecasting services, ensuring tax is considered within the broader financial picture.</p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card h-100 border-0 shadow-sm rounded-4 p-4" style={{ borderTop: '4px solid #1d3c45' }}>
            <h4 className="fw-bold mb-3" style={{ color: '#1a2332', fontFamily: "'Outfit', sans-serif" }}>Speak To Corporation Tax Accountants In London UK</h4>
            <p className="text-secondary" style={{ lineHeight: 1.8 }}>If your corporation tax is only being considered at the point of filing, there's a strong chance opportunities have already been missed. Whether you need:</p>
            <ul className="text-secondary"><li>Company tax return preparation</li><li>Corporation tax filing support</li><li>Ongoing business tax advice</li></ul>
            <p className="text-secondary" style={{ lineHeight: 1.8 }}>Reviewing it earlier gives you control over the outcome — not just visibility of it.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ── FAQ Section ── */
export const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const faqs = [
    { q: 'What is corporation tax in the UK?', a: 'Corporation tax is the tax paid by UK limited companies on their profits after allowable expenses.' },
    { q: 'When is corporation tax due?', a: 'Payment is due 9 months and 1 day after the end of the accounting period, while the return must be filed within 12 months.' },
    { q: 'How do I file a corporation tax return online?', a: 'You complete the CT600, attach company accounts and tax calculations, and submit via HMRC-approved software.' },
    { q: 'Do I need an accountant for corporation tax?', a: 'Not legally, but most businesses use accountants to ensure accuracy and avoid costly errors.' },
    { q: 'What happens if corporation tax is filed late?', a: 'Late filing results in penalties, and interest is charged on late payments.' },
    { q: 'Can corporation tax be reduced legally?', a: 'Yes. Through proper planning, allowable expenses, and correct structuring, tax can be reduced within HMRC rules.' },
  ];
  return (
    <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <h3 className="fw-bold mb-4 text-center" style={{ color: '#1a2332', fontFamily: "'Outfit', sans-serif" }}>FAQs On Corporation Tax</h3>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {faqs.map((faq, i) => (
              <div key={i} className="card border-0 shadow-sm rounded-3 mb-3 overflow-hidden">
                <button className="btn w-100 text-start p-4 d-flex justify-content-between align-items-center" onClick={() => setOpenIdx(openIdx === i ? null : i)} style={{ backgroundColor: openIdx === i ? '#1d3c45' : 'white', color: openIdx === i ? 'white' : '#1a2332', border: 'none', fontWeight: 600 }}>
                  {faq.q}
                  <i className={`fas fa-chevron-${openIdx === i ? 'up' : 'down'} ms-3`}></i>
                </button>
                {openIdx === i && <div className="p-4 text-secondary border-top" style={{ lineHeight: 1.8 }}>{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
