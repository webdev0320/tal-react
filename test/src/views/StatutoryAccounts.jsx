"use client";
import React from 'react';
import Link from 'next/link';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AccountsServiceGrid from '../components/AccountsServiceGrid';
import { accountsLinks } from '../data/accountsLinks';

const StatutoryAccounts = () => {
  return (
    <div className="bg-light min-h-screen">
      <TopBar />
      <Navbar />

      {/* SECTION 1: HERO BANNER */}
      <header className="position-relative text-white py-5" style={{ background: '#1d3c45', backgroundImage: 'url(/images/skyline-overlay.png)', backgroundSize: 'cover' }}>
        <div className="container text-center py-5">
          <h1 className="display-4 fw-bold mb-4">Statutory Accounts UK – Preparation, Filing & Reporting</h1>
          <button className="btn btn-light px-4 py-2 rounded-0 text-dark fw-bold">Get Started</button>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-bottom py-3">
        <div className="container px-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 small">
              <li className="breadcrumb-item"><Link href="/">Home</Link></li>
              <li className="breadcrumb-item"><Link href="/accounts">Accounts</Link></li>
              <li className="breadcrumb-item active">Statutory Accounts</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container py-5">
        {/* SECTION 2: INTRO & FLOATING SIDEBAR */}
        <section className="row mb-5">
          <div className="col-lg-9">
            <h2 className="text-brand-dark mb-4" style={{ color: '#0F4C5C' }}>Statutory Accounts And Tax Filing Service – Why Add Our Team?</h2>
            <p>Preparing annual statutory accounts for Companies House and HMRC can be complex, stressful, and time-consuming for business owners.</p>
            <p>Our specialist accountants handle the end-to-end preparation, ensuring full compliance with the UK Companies Act and financial reporting frameworks.</p>
          </div>
          <div className="col-lg-3">
            {['100% Compliance Guarantee', 'Avoid costly HMRC & Companies House penalties.', 'Dedicated accountant assigned to your business.'].map((text, i) => (
              <div key={i} className="card p-3 border rounded-0 mb-3 border-dark" style={{ borderLeft: '4px solid #D2601A' }}>{text}</div>
            ))}
          </div>
        </section>

        {/* SECTION 3: CORE CAPABILITIES */}
        <section className="row align-items-center mb-5 bg-white p-4 shadow-sm">
          <div className="col-lg-6">
            <h2>Statutory Accounts UK – Safe, Cost-Effective Preparation and Compliance</h2>
            <p>We provide comprehensive preparation services designed to minimize your tax liabilities while ensuring absolute filing precision.</p>
            <ul>
              <li>Dedicated chartered accountants managing your ledger files.</li>
              <li>Full coordination with corporate tax return (CT600) submissions.</li>
            </ul>
          </div>
          <div className="col-lg-6"><img src="/images/statutory-software.jpg" className="img-fluid" alt="Statutory Software" /></div>
        </section>

        {/* SECTION 4: REGULATORY STAGGER */}
        <section className="row g-4 mb-5 p-4 bg-light">
          <div className="col-md-6"><h3>What Are Statutory Accounts And Who Must File?</h3><p>Every limited company in the UK is legally required to prepare statutory annual accounts at the end of their financial year.</p></div>
          <div className="col-md-6"><h3>Companies Act Guidelines And FRS Rules</h3><p>Your accounts must meet specific accounting standards—either FRS 102 or FRS 105—depending entirely on the scale and classification of your business.</p></div>
        </section>

        {/* SECTION 5: GRID LINK MATRIX */}
        <section className="py-5">
          <h2 className="text-center fw-bold">Our Accounts Services</h2>
          <AccountsServiceGrid items={accountsLinks} />
        </section>

        {/* SECTION 6: SERVICE ILLUSTRATION BREAKDOWN */}
        <section className="mb-5">
          <div className="row align-items-center mb-4">
            <div className="col-md-6"><img src="/images/calculator-desk.jpg" className="img-fluid" alt="Calculator" /></div>
            <div className="col-md-6"><h2>Preparing National Accounts & Tax Filings Efficiently</h2></div>
          </div>
          <table className="table table-bordered">
            <thead><tr><th>Feature Scope</th><th>Micro-Entities (FRS 105)</th><th>Small Companies (FRS 102)</th></tr></thead>
            <tbody>
              <tr><td>Balance Sheet</td><td>Included</td><td>Included</td></tr>
              <tr><td>Profit & Loss Account</td><td>Simplified</td><td>Full Disclosure Required</td></tr>
              <tr><td>Director's Report</td><td>Usually Exempt</td><td>Required</td></tr>
              <tr><td>Notes to the Accounts</td><td>Minimal</td><td>Comprehensive</td></tr>
            </tbody>
          </table>
        </section>

        {/* SECTION 7: SERVICE SPLIT BANNERS (Orange Block Layout) */}
        <section className="row g-4 mb-5 text-white">
          <div className="col-lg-6 p-4" style={{background: 'linear-gradient(to right, #e8a274, #b8500e)'}}><h3>We Assist with Accounts Preparation</h3><p>Internal check audits and journal reconciliation protocols.</p></div>
          <div className="col-lg-6 p-4 bg-white"><img src="/images/accounting-sheets.jpg" alt="sheets" className="img-fluid"/></div>
        </section>

        {/* SECTION 8: BULLET REQUIREMENT GRID */}
        <section className="row align-items-center mb-5">
          <div className="col-md-6"><img src="/images/working-laptop.jpg" className="img-fluid" alt="Laptop" /></div>
          <div className="col-md-6 p-4 border border-warning"><h3>Filing Your Statutory Accounts Correctly</h3>
            <ul>
              <li>Compilation of correct financial statements including balance sheet and notes.</li>
              <li>Delivery of files to Companies House within 9 months of your financial year-end.</li>
              <li>Simultaneous filing of your Company Tax Return with HMRC.</li>
            </ul></div>
        </section>

        {/* SECTION 10: ALTERNATING DETAIL SECTION */}
        <section className="row align-items-center mb-5">
            <div className="col-md-6"><h2>Our UK Statutory Accounts Service Fits Well With Your Business Goals</h2><ul><li>Minimization of data errors using automated ingestion workflows.</li><li>Seamless strategic tax advice aligned alongside annual data logging.</li></ul></div>
            <div className="col-md-6"><img src="/images/reviewing-stats.jpg" className="img-fluid" alt="Review" /></div>
        </section>

        {/* SECTION 11: TWO-COLUMN COMPARATIVE SPECIFICATION CARDS */}
        <section className="row g-4 mb-5">
            <div className="col-md-6 card p-3 rounded-0"><h3>Statutory Accounts And Tax Preparation: Tax Alignment</h3><p>Structural adjustments to minimize taxable profits securely under current UK laws.</p></div>
            <div className="col-md-6 card p-3 rounded-0"><h3>Company Reporting and Filing Tools For Teams</h3><p>Software tool integrations (Xero, FreeAgent) configured to push records straight to governmental entry nodes.</p></div>
        </section>

        {/* SECTION 12: DATA VERIFICATION MATRIX */}
        <section className="mb-5">
            <h2 className="mb-3">Our Clear Workflow For Statutory Accounting Processing</h2>
            <table className="table"><thead><tr><th>Production Phase</th><th>Your Responsibility</th><th>Our Delivery Actions</th></tr></thead>
            <tbody>
                <tr><td>Initial Discovery</td><td>Upload raw transaction statements</td><td>Verify opening balances & ledgers</td></tr>
                <tr><td>Reconciliation</td><td>Clarify unidentified banking line items</td><td>Map chart of accounts correctly</td></tr>
                <tr><td>Final Sign-off</td><td>Review final drafts online</td><td>Electronic submission to regulatory bodies</td></tr>
            </tbody></table>
        </section>

        {/* SECTION 13: REVIEWS & SOCIAL PROOF */}
        <section className="mb-5 text-center">
            <div className="p-3 mb-3" style={{backgroundColor: '#e8a274'}}><h2>Our Success Speaks For Itself</h2></div>
            <p className="text-muted">Independent Customer Reviews</p>
            <div className="row g-3">{[1,2,3].map(i=><div key={i} className="col-md-4 card p-3 shadow-sm rounded-0">⭐⭐⭐⭐⭐<p>Excellent compliance management!</p></div>)}</div>
        </section>

        {/* SECTION 14: STRATIFIED DIVE SECTIONS */}
        <section className="mb-5">
            {['All-Inclusive Corporate Accounts Services', 'When To Appoint An Accounts Specialist', 'Summary Account Reporting And Future Planning'].map((h, i) => (
                <div key={i} className={`row align-items-center mb-3 ${i % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                    <div className="col-md-6"><h3>{h}</h3></div>
                    <div className="col-md-6 bg-secondary" style={{height: '100px'}}></div>
                </div>
            ))}
        </section>

        {/* SECTION 15: CALLBACK CONTACT */}
        <section className="row mb-5 border p-3">
            <div className="col-md-6"><form className="d-flex flex-column gap-2"><input placeholder="Name" className="form-control"/><input placeholder="Phone" className="form-control"/><input placeholder="Email" className="form-control"/><button className="btn btn-warning fw-bold">Submit Details</button></form></div>
            <div className="col-md-6 bg-light text-center border">Map Marker Placeholder</div>
        </section>

        {/* SECTION 16: SECONDARY VALUE STATEMENT */}
        <section className="row align-items-center mb-5">
            <div className="col-md-6"><img src="/images/workspace-meeting.jpg" className="img-fluid" alt="meeting" /></div>
            <div className="col-md-6"><h2>Appoint An Accountant For Your Statutory Reporting Requirements</h2><p>By selecting a dedicated team, you eradicate structural data silos, ensuring that your company accounts tie accurately to your corporate filings year after year.</p></div>
        </section>

        {/* SECTION 17: FAQ */}
        <section className="mb-5">
            <div className="row"><div className="col-md-4"><h2>FAQs on Statutory Accounts</h2></div>
            <div className="col-md-8 accordion">
                {[
                  {q: 'What happens if my statutory accounts are submitted late?', a: '...'},
                  {q: 'Can a dormant company avoid submitting statutory reports?', a: '...'},
                  {q: 'What is the difference between abbreviated accounts and full accounts?', a: '...'}
                ].map((item, i)=><div key={i} className="accordion-item mb-2"><h2 className="accordion-header"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#faq${i}`}>{item.q}</button></h2><div id={`faq${i}`} className="accordion-collapse collapse"><div className="accordion-body">{item.a}</div></div></div>)}
            </div></div>
        </section>

        {/* SECTION 18: BRAND DIRECTORY GRID FOOTER */}
        <section className="border-top pt-4">
            <div className="row">
                <div className="col-md-3"><h5>Telephone Hotlines</h5></div>
                <div className="col-md-3"><h5>Support Emails</h5></div>
                <div className="col-md-6"><h5>Regional Offices</h5>
                  <div className="row row-cols-3 small">{['London', 'Birmingham', 'Manchester', 'Leeds', 'Glasgow', 'Sheffield', 'Liverpool', 'Bristol', 'Edinburgh', 'Leicester', 'Coventry'].map(city => <div key={city} className="col">{city}</div>)}</div>
                </div>
            </div>
        </section>
      </div>

      {/* SECTION 9: ACCREDITATION STRIP */}
      <section className="py-4 text-white text-center" style={{ background: '#1d3c45' }}>
        <h4>Our Clients and Collaborative Partners</h4>
        <div className="d-flex justify-content-center gap-4"><span>ACCA</span> | <span>ICAEW</span> | <span>Xero</span> | <span>QuickBooks</span> | <span>Sage</span></div>
      </section>

      <Footer />
    </div>
  );
};

export default StatutoryAccounts;
