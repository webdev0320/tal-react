"use client";
import React from 'react';
import Link from 'next/link';
import AccountsLinksBar from '../components/AccountsLinksBar';
import AccountsServiceGrid from '../components/AccountsServiceGrid';
import { accountsLinks } from '../data/accountsLinks';
import Partners from '../components/Partners';
import FAQSection from '../components/FAQSection';

const BookkeepingServices = () => {
  return (
    <div className="bg-light min-h-screen">
      <AccountsLinksBar />

      {/* SECTION 1: HERO BANNER */}
      <header className="position-relative text-white overflow-hidden py-5" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)', minHeight: '400px' }}>
        <div className="container position-relative py-5" style={{ zIndex: 2 }}>
          <div className="row g-4 align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <span className="text-uppercase small fw-bold mb-2 d-inline-block" style={{ letterSpacing: '2px', color: '#D2601A' }}>Accounting & Bookkeeping Services</span>
              <h1 className="display-4 fw-bold text-white mb-3">Bookkeeping Services For Small and Medium Businesses in UK</h1>
              <p className="lead text-white-50 mb-4" style={{ maxWidth: '680px' }}>A tailored solution to fit your business requirements and keep your books tidy and tax-ready.</p>
              <button className="btn px-4 py-2 shadow" style={{ backgroundColor: 'white', color: '#0F4C5C', borderRadius: '5px' }}>Get Started</button>
            </div>
            <div className="col-lg-4 text-center">
              <img src="/images/hero-bookkeeping.jpg" alt="Professional reviewing digital documents on a laptop" className="img-fluid rounded shadow-lg" />
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
              <li className="breadcrumb-item active text-secondary">Bookkeeping Services</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container py-5">
        {/* SECTION 2: THE 30% EFFICIENCY BLOCK */}
        <section className="row align-items-center mb-5 bg-white p-4 shadow-sm rounded">
          <div className="col-lg-7">
            <span className="fw-bold" style={{ color: '#D2601A' }}>Why Choose Professional Bookkeeping?</span>
            <h2 className="h2 my-3" style={{ color: '#0F4C5C' }}>Bookkeeping Services: Don't Let It Slowly Slip Out Of Control</h2>
            <p>Managing your business transactions can often feel overwhelming when receipts pile up and spreadsheets break.</p>
            <p>Our tailored services give you peace of mind so you can return to running what you do best: your business.</p>
          </div>
          <div className="col-lg-5">
            <div className="p-5 text-center shadow rounded" style={{ backgroundColor: '#0F4C5C', color: 'white' }}>
              <h3 className="display-5 fw-bold">Save Up To 30% Of Your Valuable Time</h3>
            </div>
          </div>
        </section>

        {/* SERVICE GRID */}
        <div className="py-5">
          <h2 className="text-center fw-bold">Our Accounts Services</h2>
          <AccountsServiceGrid items={accountsLinks} />
        </div>

        {/* SECTION 3: ALTERNATING FEATURE 1 */}
        <section className="row align-items-center mb-5">
          <div className="col-lg-6">
            <h2 className="h2 mb-4" style={{ color: '#0F4C5C' }}>Bookkeeping Services UK - Our Bookkeepers For Online Bookkeeping</h2>
            <ul className="list-unstyled">
              <li>• Dedicated certified UK accountants assigned to your portal.</li>
              <li>• Full configuration of Making Tax Digital (MTD) compliant software.</li>
              <li>• Automatic, secure daily bank feed reconciliations.</li>
            </ul>
          </div>
          <div className="col-lg-6">
            <img src="/images/team-review.jpg" alt="Collaborative meeting reviewing project prints and financial data charts" className="img-fluid rounded shadow" />
          </div>
        </section>

        {/* SECTION 4: ALTERNATING FEATURE 2 */}
        <section className="row align-items-center mb-5">
          <div className="col-lg-6">
            <img src="/images/accountant-desk.jpg" alt="Accountant cross-referencing physical paperwork logs" className="img-fluid rounded shadow" />
          </div>
          <div className="col-lg-6">
            <h2 className="h2 mb-3" style={{ color: '#0F4C5C' }}>What Bookkeeping Activity Does for a Business Owner</h2>
            <h5 className="text-muted mb-3">Complete clarity on revenue streams and continuous tracking.</h5>
            <p>By shifting the time-consuming administrative task of invoice matching and balance matching to a dedicated resource, you regain hours every single week.</p>
          </div>
        </section>

        {/* SECTION 5: QUICK LINK/TAG GRID */}
        <section className="text-center py-5">
          <div className="row row-cols-md-3 g-3 justify-content-center">
            {['Xero Bookkeeping', 'QuickBooks Bookkeeping', 'Sage Bookkeeping', 'Monthly Bookkeeping', 'Catch-up Bookkeeping', 'VAT & Bookkeeping', 'Small Business Books', 'Outsourced Bookkeeping', 'Online Bookkeeping Services'].map(label => (
              <div key={label} className="col-auto">
                <button className="btn btn-outline-dark rounded-pill px-4">{label}</button>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: COMPLIANCE VALUE BLOCK */}
        <section className="row align-items-center mb-5 py-5">
          <div className="col-lg-6">
            <h2 className="h2 mb-4" style={{ color: '#0F4C5C' }}>Let Our Bookkeepers Take Care Of Your Books</h2>
            <ul className="list-unstyled">
              <li>• Accurate data entries mapping matching invoices to expenditures.</li>
              <li>• Timely submission declarations to HMRC avoiding late penalties.</li>
            </ul>
          </div>
          <div className="col-lg-6">
            <img src="/images/compliance-medical.jpg" alt="A tablet showing graphs resting next to medical tools and physical documents" className="img-fluid rounded shadow" />
          </div>
        </section>

        {/* SECTION 7: SERVICE SPLIT BANNERS */}
        <section className="row g-4 mb-5">
          <div className="col-lg-6 p-4 border rounded bg-white text-center">
            <h3>Online Bookkeeping Services and Cloud-Based Systems</h3>
            <button className="btn btn-warning mt-3 fw-bold">Learn More About Cloud Accounting</button>
          </div>
          <div className="col-lg-6 p-4 border rounded bg-white text-center">
            <h3>Automated Bookkeeping Services With Third-Party Integrations</h3>
            <button className="btn btn-warning mt-3 fw-bold">Discover Automation Benefits</button>
          </div>
        </section>

        {/* SECTION 9: MATRIX COMPARISON TABLE */}
        <section className="mb-5">
          <h2 className="mb-4 text-center">Bookkeeping and Accounting - Interlinked and Effective Areas</h2>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <table className="table table-bordered shadow-sm">
                <thead><tr><th>Key Differences</th><th>Bookkeeping</th><th>Accounting</th></tr></thead>
                <tbody>
                  <tr><td>Data Recording</td><td>Yes</td><td>Review Only</td></tr>
                  <tr><td>Tax Compliance</td><td>No</td><td>Yes</td></tr>
                  <tr><td>Account Statements</td><td>No</td><td>Yes</td></tr>
                </tbody>
              </table>
            </div>
            <div className="col-lg-6">
              <img src="/images/office-discussion.jpg" alt="Two corporate executives talking over financial reporting charts" className="img-fluid rounded shadow" />
            </div>
          </div>
        </section>

        {/* SECTION 10: COMPARATIVE MANAGEMENT CARDS */}
        <section className="row g-4 mb-5">
          <div className="col-md-6 p-4 bg-light border">
            <h3>Business Bookkeeping Services And Financial Processes</h3>
            <p>Standard workflows highlighting document management, transaction logging, and ledger configuration.</p>
          </div>
          <div className="col-md-6 p-4 bg-light border">
            <h3>Bookkeeping Services London - Ensuring Compliance Without Hassle</h3>
            <p>Compliance checklists specifically addressing regional corporate tax regulations, real-time reporting updates, and payroll sync alignment.</p>
          </div>
        </section>

        {/* SECTION 11: REVIEWS */}
        <section className="mb-5 text-center">
          <h2>Our Success Speaks For Itself</h2>
          <p className="text-muted">Independent Customer Reviews</p>
          <div className="row g-4 mt-3">
            {[1,2,3].map(i => <div key={i} className="col-md-4 card p-3 shadow-sm">⭐⭐⭐⭐⭐<p>Excellent accuracy and rapid response!</p></div>)}
          </div>
        </section>

        {/* SECTION 12: DEEP DIVE ARTICLES */}
        <section className="mb-5">
          {[{h: 'VAT & Dedicated Tax Bookkeeping Services', i: 'keys'}, {h: 'Bookkeeping as a Cornerstone for Financial Growth', i: 'meeting'}, {h: 'VAT & Bookkeeping Services Tailored For Online Businesses', i: 'graph'}].map((item, i) => (
            <div key={i} className={`row align-items-center mb-4 ${i % 2 === 0 ? '' : 'flex-row-reverse'}`}>
              <div className="col-md-6"><h3>{item.h}</h3></div>
              <div className="col-md-6"><div className="bg-secondary rounded shadow" style={{ height: '150px' }}></div></div>
            </div>
          ))}
        </section>

        {/* SECTION 13: LEAD GEN */}
        <section className="p-4 border rounded bg-white shadow-sm mb-5">
          <h3>Fill In Details For A Fast Callback</h3>
          <div className="row">
            <div className="col-md-6"><form className="d-flex flex-column gap-2"><input placeholder="Full Name" className="form-control"/><input placeholder="Corporate Email Address" className="form-control"/><input placeholder="Contact Number" className="form-control"/><textarea placeholder="Message" className="form-control"/><button className="btn btn-warning fw-bold">Submit Details</button></form></div>
            <div className="col-md-6 bg-light text-center p-5 border">Map Placeholder</div>
          </div>
        </section>

        {/* SECTION 14: FAQ */}
        <FAQSection />
      </div>

      {/* SECTION 8: PARTNER STRIP (Placed before footer) */}
      <Partners />
    </div>
  );
};

export default BookkeepingServices;
