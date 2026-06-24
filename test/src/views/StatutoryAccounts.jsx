"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Partners from '../components/Partners';
import ReviewsSlider from '../components/ReviewsSlider';
import ContactForm from '../components/ContactForm';
import AccountsLinksBar from '../components/AccountsLinksBar';
import { CheckIcon } from '../components/accounts/AccountsPageIcons';

const StatutoryAccounts = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickNav = [
                    { title: 'Bookkeeping', link: '/accounts/bookkeeping-services' },
                    { title: 'Management Accounts', link: '/accounts/management-accounts' },
                    { title: 'Payroll Services', link: '/accounts/payroll-services' }
  ];

  return (
    <div className="bg-light min-h-screen">
      <header className="position-relative text-white overflow-hidden py-5" style={{ backgroundImage: 'linear-gradient(rgba(29, 60, 69, 0.72), rgba(29, 60, 69, 0.82)), url(/images/2026/05/Statutory-Accounts-1-scaled.webp)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '380px' }}>
        <div className="position-absolute w-100 h-100" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(210, 96, 26, 0.15) 0%, transparent 60%)', top: 0, left: 0, zIndex: 1 }}></div>
        <div className="container position-relative py-4" style={{ zIndex: 2, paddingTop: '5rem' }}>
          <div className="row g-4 align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <span className="text-uppercase small tracking-wider fw-bold mb-2 d-inline-block text-brand-orange" style={{ letterSpacing: '2px' }}>
                Accounts Services
              </span>
              <h1 className="display-4 fw-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Statutory Accounts UK – Preparation, Filing & Reporting
              </h1>
              <p className="lead text-white-50 mb-4" style={{ maxWidth: '680px', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Reliable Statutory Accounts Services: Ensuring Compliance with Accuracy at Taxaccolega
              </p>
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mb-4">
                <a href="#contact-block" className="btn btn-brand px-4 py-2 shadow">CONTACT US</a>
                <a href="/schedule-a-phone-call-or-video-meeting" className="btn btn-outline-light px-4 py-2">Schedule a Call</a>
              </div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0 small" style={{ background: 'transparent' }}>
                  <li className="breadcrumb-item"><Link href="/" className="text-decoration-none text-brand-orange">Home</Link></li>
                  <li className="breadcrumb-item"><Link href="/accounts" className="text-decoration-none text-brand-orange">Accounts</Link></li>
                  <li className="breadcrumb-item active text-white-50" aria-current="page">Statutory Accounts UK – Preparation, Filing & Reporting</li>
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
              <li className="breadcrumb-item active text-secondary">Statutory Accounts UK – Preparation, Filing & Reporting</li>
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
                Statutory accounts don’t go wrong suddenly — they fall out of sync
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Most businesses don’t ignore their numbers.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Transactions are recorded. Invoices go out. Costs are tracked. Bank activity is visible.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>On the surface, everything looks complete.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The problem is not whether data exists.
 The problem is whether everything still connects when it needs to.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Statutory accounts bring everything together into one position — and that’s where gaps appear.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Figures that seemed fine during the year no longer align.
 Balances don’t reconcile exactly.
 Certain transactions need to be revisited because they were recorded in a way that doesn’t hold under statutory reporting rules.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That’s the point where statutory accounts stop being routine and become something that requires proper handling — because once submitted, they are final, public, and relied upon.</p>
            </div>
            <div className="col-lg-5">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img src="/images/2024/11/edit.11.jpg" alt="Statutory accounts don’t go wrong suddenly — they fall out of sync" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
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
                <img src="/images/2024/06/Accounts-1-scaled.webp" alt="Statutory Accounts UK – Built Around Accuracy, Structure and Compliance" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>
            <div className="col-lg-7 order-1 order-lg-2">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Statutory Accounts UK – Built Around Accuracy, Structure and Compliance
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Statutory accounts are formal financial statements prepared under UK statutory accounting principles and filed with Companies House.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>They are not internal summaries. They are the official version of your financial position.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Our statutory accounts preparation focuses on one outcome:</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>your accounts must hold together — technically, legally, and logically — before they are filed.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That means:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>figures align with underlying records</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>disclosures are complete</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>formatting meets statutory requirements</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>and the final output reflects the business as it actually operates</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                What Are Statutory Accounts and Why They Carry Weight
              </h2>
              <h3 className="text-brand-orange fw-bold mb-3">They define your business externally</h3>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Statutory accounts are what regulators, lenders, and third parties rely on.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>They include:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>balance sheet</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>profit and loss account</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>supporting notes and disclosures</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Once filed, they become part of the public record.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That changes the nature of the work.
 This is not internal reporting. This is representation.</p>
              <h3 className="text-brand-orange fw-bold mb-3">They depend on everything done before them</h3>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Statutory accounts are only as strong as the records behind them.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>If bookkeeping has inconsistencies, they surface here.
 If expense classifications were unclear, they surface here.
 If payroll figures don’t match financial records, they surface here.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This is why statutory accounts are directly tied to <Link href="/accounts/bookkeeping-services" className="text-brand-orange fw-semibold text-decoration-none">bookkeeping services for small businesses</Link> — not as a separate function, but as the foundation they rely on.</p>
            </div>
            <div className="col-lg-5">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img src="/images/2024/11/office-with-documents-money-accounts-1-scaled.jpg" alt="What Are Statutory Accounts and Why They Carry Weight" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
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
                <img src="/images/2024/11/edit.4.jpg" alt="Preparing Statutory Accounts – What Actually Happens" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>
            <div className="col-lg-7 order-1 order-lg-2">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Preparing Statutory Accounts – What Actually Happens
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Statutory accounts preparation is not a formatting exercise.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>It is a process of turning a year of financial activity into a position that is technically correct and internally consistent.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That involves reviewing how transactions were recorded, identifying areas that need adjustment, and applying statutory accounting principles to produce a compliant set of accounts.</p>
              <h3 className="text-brand-orange fw-bold mb-3">Statutory Accounts Preparation Process</h3>

            </div>
          </div>
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10">
              <div className="table-responsive rounded-4 shadow-sm border overflow-hidden">
                <table className="table table-hover align-middle mb-0 bg-white">
                  <thead style={{ background: '#1d3c45', color: '#fff' }}>
                    <tr>
                      <th className="py-3 px-4 text-white border-0 fw-bold">Stage</th>
                      <th className="py-3 px-4 text-white border-0 fw-bold">What Happens</th>
                      <th className="py-3 px-4 text-white border-0 fw-bold">Where It Commonly Breaks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Record Review</td>
                      <td className="py-3 px-4 text-secondary">Financial data assessed</td>
                      <td className="py-3 px-4 text-secondary">Missing or inconsistent entries</td>
                    </tr>
                    <tr className="border-bottom" style={{ background: '#fcfcfc' }}>
                      <td className="py-3 px-4 fw-bold text-brand-dark">Adjustments</td>
                      <td className="py-3 px-4 text-secondary">Corrections applied</td>
                      <td className="py-3 px-4 text-secondary">Misclassified costs or income</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Alignment</td>
                      <td className="py-3 px-4 text-secondary">Figures reconciled</td>
                      <td className="py-3 px-4 text-secondary">Differences across systems</td>
                    </tr>
                    <tr className="border-bottom" style={{ background: '#fcfcfc' }}>
                      <td className="py-3 px-4 fw-bold text-brand-dark">Structuring</td>
                      <td className="py-3 px-4 text-secondary">Accounts formatted</td>
                      <td className="py-3 px-4 text-secondary">Non-compliant presentation</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Finalisation</td>
                      <td className="py-3 px-4 text-secondary">Accounts completed</td>
                      <td className="py-3 px-4 text-secondary">Unresolved discrepancies</td>
                    </tr>
                    <tr className="border-bottom" style={{ background: '#fcfcfc' }}>
                      <td className="py-3 px-4 fw-bold text-brand-dark">Filing</td>
                      <td className="py-3 px-4 text-secondary">Submitted to Companies House</td>
                      <td className="py-3 px-4 text-secondary">Deadline pressure</td>
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
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Statutory Accounts Format and Technical Requirements
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Statutory accounts must follow a defined format.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That includes:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>consistent presentation</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>correct application of accounting standards</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>required disclosures and notes</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The detail here matters more than it appears.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>For example:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>director loan accounts must be treated correctly</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>accruals and prepayments must reflect actual timing</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>fixed asset values must be supported properly</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>These are not cosmetic adjustments. They change how the business is presented.</p>
            </div>
            <div className="col-lg-5">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img src="/images/2024/11/view-messy-office-workspace-with-tablet-device-scaled.webp" alt="Statutory Accounts Format and Technical Requirements" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
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
                <img src="/images/2024/11/edit.3-1.webp" alt="Where Statutory Accounts Become Complicated" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>
            <div className="col-lg-7 order-1 order-lg-2">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Where Statutory Accounts Become Complicated
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Statutory accounts become difficult when:
       ●   transactions span multiple periods
       ●   directors take mixed salary and dividends
       ●   costs are recorded without clear categorisation
       ●   intercompany transactions exist
       ●   prior period errors carry forward
These are not rare scenarios. They are common in growing businesses.
A common example is where director loan balances are recorded inconsistently across the year, creating discrepancies at year-end. Another is where income is recognised in one period but costs are recorded in another, leading to misaligned profit reporting. 
And this is where a “simple accounts preparation” approach breaks down — because the work is no longer about compiling figures, but about correcting structure.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Insight: Most statutory account issues start months before year-end
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>By the time statutory accounts are being prepared, the underlying data is already fixed.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Transactions have been recorded.
 Decisions have been made.
 Classifications are already in place.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>If something is wrong at that stage, it is not an adjustment — it is a correction.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>And corrections often mean:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>reworking earlier entries</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>revisiting assumptions</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>explaining differences that should not exist</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This is why businesses that treat statutory accounts as a year-end task usually experience pressure — because the work actually started long before preparation began.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Statutory Accounts and Corporation Tax Alignment
              </h2>

            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Statutory Reporting and Operational Data
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Statutory accounts directly <Link href="/taxation/company-tax-return-accountants" className="text-brand-orange fw-semibold text-decoration-none">feed into</Link><strong className="text-brand-dark">corporation tax services</strong>.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The profit reported in accounts forms the starting point for tax calculations.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>If accounts and tax positions are not aligned:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>adjustments increase</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>explanations become more complex</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>risk of error increases</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This is not about compliance alone — it is about consistency across financial outputs.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Statutory reporting requires alignment across:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>accounting records</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>tax calculations</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>payroll data</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>VAT submissions</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>For example:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>differences between accounts and vat accountants in UK outputs create reconciliation issues</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>inconsistencies with payroll services in UK affect cost reporting</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Statutory accounts sit at the point where everything must match.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Common Structural Issues in Statutory Accounts
              </h2>

            </div>
          </div>
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10">
              <div className="table-responsive rounded-4 shadow-sm border overflow-hidden">
                <table className="table table-hover align-middle mb-0 bg-white">
                  <thead style={{ background: '#1d3c45', color: '#fff' }}>
                    <tr>
                      <th className="py-3 px-4 text-white border-0 fw-bold">Issue</th>
                      <th className="py-3 px-4 text-white border-0 fw-bold">What It Looks Like</th>
                      <th className="py-3 px-4 text-white border-0 fw-bold">Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Misclassified expenses</td>
                      <td className="py-3 px-4 text-secondary">Costs in wrong categories</td>
                      <td className="py-3 px-4 text-secondary">Distorted profit</td>
                    </tr>
                    <tr className="border-bottom" style={{ background: '#fcfcfc' }}>
                      <td className="py-3 px-4 fw-bold text-brand-dark">Timing differences</td>
                      <td className="py-3 px-4 text-secondary">Income/expenses in wrong period</td>
                      <td className="py-3 px-4 text-secondary">Incorrect reporting</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Unreconciled balances</td>
                      <td className="py-3 px-4 text-secondary">Figures don’t match</td>
                      <td className="py-3 px-4 text-secondary">Delays and uncertainty</td>
                    </tr>
                    <tr className="border-bottom" style={{ background: '#fcfcfc' }}>
                      <td className="py-3 px-4 fw-bold text-brand-dark">Incomplete disclosures</td>
                      <td className="py-3 px-4 text-secondary">Missing notes</td>
                      <td className="py-3 px-4 text-secondary">Non-compliance risk</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Prior period errors</td>
                      <td className="py-3 px-4 text-secondary">Old mistakes carried forward</td>
                      <td className="py-3 px-4 text-secondary">Compounded inaccuracies</td>
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
                What Our Statutory Accounts Services Actually Change
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Most providers will:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>prepare</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>format</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>submit</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This is not about preparing accounts for submission — it is about ensuring the structure behind them is correct before they are finalised.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That’s expected.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The difference is in how the data is handled before it reaches that stage.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Our approach focuses on:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>identifying inconsistencies early</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>aligning records across the year</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>ensuring figures are structurally correct, not just presentable</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This reduces:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>last-minute adjustments</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>filing pressure</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>risk of incorrect submission</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The result is not just compliant statutory accounts — but accounts that stand up under scrutiny.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                When You Should Speak to a Statutory Accountant
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>You don’t need to wait until year-end pressure builds.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The right time is when:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>Records no longer fully reconcile</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>Financial reports feel inconsistent</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>You’re unsure how transactions should be treated</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>Deadlines are approaching but data is not aligned</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>At that stage, statutory accounts move from preparation to correction — and correction always takes longer.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Statutory Accounts and Future Planning
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Once statutory accounts are accurate, they become a reliable base for:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>financial forecasting services</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>cashflow forecasting services</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Without that accuracy, planning becomes guesswork.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Speak to Taxaccolega Statutory Accountant in London UK
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Where statutory issues build across the year, resolving them at year-end often requires revisiting and correcting earlier records — not just finalising accounts. If your year-end is approaching and your accounts are not fully aligned, the issue is not the deadline — it is the structure behind the numbers.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Statutory accounts need to be prepared once, correctly.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Because once filed:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>they are public</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>they are relied upon</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>and they are not easily changed</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Getting them right at the point of preparation avoids the need to explain them later.</p>
            </div>
          </div>
        </div>
      </section>

      <Partners />

      <ReviewsSlider />

      <ContactForm source="StatutoryAccounts" />

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
                      <span>What are statutory accounts?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 0 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 0 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        Statutory accounts are official financial statements prepared by UK companies and filed with Companies House.
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
                      <span>When must statutory accounts be filed?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 1 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 1 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        Usually within 9 months after the end of the accounting period.
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
                      <span>What do statutory accounts include?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 2 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 2 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        Balance sheet, profit and loss account, and supporting disclosures.
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
                      <span>Can I prepare statutory accounts myself?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 3 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 3 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        Yes, but errors often arise without professional review.
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
                      <span>What happens if statutory accounts are incorrect?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 4 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 4 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        They may require amendment and can create compliance and credibility issues.
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
                      <span>Do statutory accounts need to match tax returns?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 5 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 5 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        Yes. They must align with corporation tax calculations.
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

export default StatutoryAccounts;
