"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Partners from '../components/Partners';
import ReviewsSlider from '../components/ReviewsSlider';
import AccountsLinksBar from '../components/AccountsLinksBar';
import { CheckIcon } from '../components/accounts/AccountsPageIcons';

const PayrollServices = () => {
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
      <header className="position-relative text-white overflow-hidden py-5" style={{ backgroundImage: 'linear-gradient(rgba(29, 60, 69, 0.72), rgba(29, 60, 69, 0.82)), url(/images/2026/05/Payroll-by-scott-scaled.webp)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '380px' }}>
        <div className="position-absolute w-100 h-100" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(210, 96, 26, 0.15) 0%, transparent 60%)', top: 0, left: 0, zIndex: 1 }}></div>
        <div className="container position-relative py-4" style={{ zIndex: 2, paddingTop: '5rem' }}>
          <div className="row g-4 align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <span className="text-uppercase small tracking-wider fw-bold mb-2 d-inline-block text-brand-orange" style={{ letterSpacing: '2px' }}>
                Accounts Services
              </span>
              <h1 className="display-4 fw-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Payroll Services UK – HMRC PAYE for Small & Medium Businesses
              </h1>
              <p className="lead text-white-50 mb-4" style={{ maxWidth: '680px', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Taxaccolega offer professional payroll services for small businesses wherever you are in the UK to help your employee payroll run smoothly month after month.
              </p>
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mb-4">
                <a href="#contact-block" className="btn btn-brand px-4 py-2 shadow">CONTACT US</a>
                <a href="/schedule-a-phone-call-or-video-meeting" className="btn btn-outline-light px-4 py-2">Schedule a Call</a>
              </div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0 small" style={{ background: 'transparent' }}>
                  <li className="breadcrumb-item"><Link href="/" className="text-decoration-none text-brand-orange">Home</Link></li>
                  <li className="breadcrumb-item"><Link href="/accounts" className="text-decoration-none text-brand-orange">Accounts</Link></li>
                  <li className="breadcrumb-item active text-white-50" aria-current="page">Payroll Services UK – HMRC PAYE for Small & Medium Businesses</li>
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
              <li className="breadcrumb-item active text-secondary">Payroll Services UK – HMRC PAYE for Small & Medium Businesses</li>
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
                Payroll problems usually start before payday arrives
              </h2>

            </div>
            <div className="col-lg-5">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img src="/images/2026/05/Services-Accounts-Payroll-Services-Payroll-Services-UK-Built-Around.webp" alt="Payroll problems usually start before payday arrives" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
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
                <img src="/images/2026/05/Services-Accounts-Payroll-Services-How-Payroll-Actually-Functions-Inside-a-Business-scaled.webp" alt="Payroll Services UK Built Around Consistency and Timing" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>
            <div className="col-lg-7 order-1 order-lg-2">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Payroll Services UK Built Around Consistency and Timing
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Payroll is one of the few business functions that repeats under fixed deadlines regardless of what else is happening inside the company.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>A business can postpone meetings, delay projects, or move operational priorities around. Payroll does not work like that.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Salaries still need to be processed. HMRC still expects reporting. Employees still expect the correct amount to reach their bank accounts on time.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Our payroll services in London and across the UK are structured around that reality.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The focus is not simply on running calculations. It is on making sure payroll continues operating accurately as staffing, salaries, pensions, and reporting requirements evolve over time.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                How Payroll Actually Functions Inside a Business
              </h2>

            </div>
            <div className="col-lg-5">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img src="/images/2026/05/Services-Accounts-Payroll-Services-Payroll-Services-for-Small-Business-UK.webp" alt="How Payroll Actually Functions Inside a Business" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
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
                <img src="/images/2026/05/Services-Accounts-Payroll-Services-Outsourced-Payroll-Services-UK.webp" alt="Payroll sits between employees, HMRC, pensions, and accounts" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>
            <div className="col-lg-7 order-1 order-lg-2">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Payroll sits between employees, HMRC, pensions, and accounts
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Payroll affects multiple areas simultaneously.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>An employee sees net pay. HMRC sees deductions and RTI submissions. Pension providers see contribution figures. The business itself sees wage costs flowing into financial records.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>If one part becomes inconsistent, the issue spreads quickly into other areas.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This is why payroll connects naturally with <Link href="/accounts/bookkeeping-services" className="text-brand-orange fw-semibold text-decoration-none">bookkeeping services for small businesses.</Link>Wage costs, PAYE liabilities, <Link href="/accounts/auto-enrolment-pension-contributions" className="text-brand-orange fw-semibold text-decoration-none">pension contributions</Link>, and salary payments all need to reconcile against the underlying records.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>When payroll and bookkeeping drift apart, corrections usually become more complicated later.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Small payroll errors rarely stay small
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>A payroll issue often affects more than one pay cycle.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>For example:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>an incorrect tax code can continue for months</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>pension deductions may keep applying incorrectly</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>overtime or bonus calculations can distort payroll costs over multiple periods</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>By the time the issue is noticed, adjustments usually involve backdating, amended reporting, and employee explanations.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That is why payroll services for small businesses are less about “running payroll software” and more about maintaining accuracy across repeated cycles.</p>
            </div>
            <div className="col-lg-5">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img src="/images/2024/01/pexels-photo-3756937.jpg" alt="Small payroll errors rarely stay small" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
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
                <img src="/images/2026/05/Services-Accounts-Payroll-Services-Insight-Payroll-pressure-usually.webp" alt="Payroll Services for Small Business UK" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>
            <div className="col-lg-7 order-1 order-lg-2">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Payroll Services for Small Business UK
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Small businesses often assume payroll will remain simple because headcount is low.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That usually changes faster than expected.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The moment staffing structures begin changing regularly, payroll becomes operationally sensitive. Different salaries, holiday pay, directors’ pay, statutory sick pay, maternity payments, pension deductions, and starter/leaver processing all begin interacting at the same time.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>At that stage, payroll becomes closely connected with:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>management accounts services</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>statutory accounts preparation</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>because salary costs and payroll liabilities need to remain consistent across all financial reporting.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Payroll Processing Flow in UK Businesses
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This table belongs here because payroll problems are rarely caused by one event. They usually happen when one stage stops matching the others.</p>
            </div>
            <div className="col-lg-5">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img src="/images/2026/05/Services-Accounts-Payroll-Services-\u2013-What-Our-Payroll-Services-Actually-Change.webp" alt="Payroll Processing Flow in UK Businesses" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10">
              <div className="table-responsive rounded-4 shadow-sm border overflow-hidden">
                <table className="table table-hover align-middle mb-0 bg-white">
                  <thead style={{ background: '#1d3c45', color: '#fff' }}>
                    <tr>
                      <th className="py-3 px-4 text-white border-0 fw-bold">Payroll Stage</th>
                      <th className="py-3 px-4 text-white border-0 fw-bold">What Happens</th>
                      <th className="py-3 px-4 text-white border-0 fw-bold">What Usually Causes Problems</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Employee updates</td>
                      <td className="py-3 px-4 text-secondary">Hours, salaries, starters, leavers</td>
                      <td className="py-3 px-4 text-secondary">Delayed or incomplete information</td>
                    </tr>
                    <tr className="border-bottom" style={{ background: '#fcfcfc' }}>
                      <td className="py-3 px-4 fw-bold text-brand-dark">Payroll calculations</td>
                      <td className="py-3 px-4 text-secondary">PAYE, NI, pension deductions</td>
                      <td className="py-3 px-4 text-secondary">Incorrect coding or contribution setup</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">RTI submissions</td>
                      <td className="py-3 px-4 text-secondary">Payroll data sent to HMRC</td>
                      <td className="py-3 px-4 text-secondary">Filing inconsistencies</td>
                    </tr>
                    <tr className="border-bottom" style={{ background: '#fcfcfc' }}>
                      <td className="py-3 px-4 fw-bold text-brand-dark">Salary payments</td>
                      <td className="py-3 px-4 text-secondary">Net wages processed</td>
                      <td className="py-3 px-4 text-secondary">Payment timing issues</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Record alignment</td>
                      <td className="py-3 px-4 text-secondary">Payroll reconciled with accounts</td>
                      <td className="py-3 px-4 text-secondary">Differences across systems</td>
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
                <img src="/images/2026/05/Services-Accounts-Payroll-Services-When-Businesses-Should-Move-to-Structured.webp" alt="Outsourced Payroll Services UK – Why Businesses Move Payroll Outside" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>
            <div className="col-lg-7 order-1 order-lg-2">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Outsourced Payroll Services UK – Why Businesses Move Payroll Outside
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Businesses rarely outsource payroll because they cannot technically run it.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>They outsource it because payroll begins consuming too much operational attention.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Someone inside the business ends up:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>checking calculations repeatedly</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>correcting pension deductions</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>responding to payroll queries</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>chasing missing employee details close to payday</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That pressure increases as the business grows.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Outsourced payroll services create a fixed structure where payroll is reviewed, processed, and submitted consistently without relying on last-minute internal coordination.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Payroll and HMRC Reporting Requirements
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Payroll reporting in the UK is tied directly to HMRC through RTI submissions.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This means payroll is not only about paying staff correctly. It is also about reporting deductions accurately and on time.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Incorrect submissions can create:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>mismatched employee records ● PAYE discrepancies ● unnecessary HMRC follow-up</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This becomes especially important where <Link href="/taxation/personal-income-tax-professionals-and-chartered-accountants" className="text-brand-orange fw-semibold text-decoration-none">payroll links with</Link> <Link href="/taxation/personal-income-tax-professionals-and-chartered-accountants" className="text-brand-orange fw-semibold text-decoration-none">income tax services in UK</Link> because employee tax records and payroll reporting need to remain aligned.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Payroll and Pension Auto Enrolment
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Payroll and pensions cannot realistically be separated once employee numbers grow.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Auto enrolment requires:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>eligibility assessment ● contribution calculation</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>ongoing pension reporting</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The difficulty is not the setup itself. The difficulty is maintaining accuracy every payroll cycle as salaries and employee status change.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That is why payroll naturally overlaps with auto enrolment pension contributions.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>When payroll changes but pension treatment does not update correctly, the issue repeats automatically every pay period.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Insight: Payroll pressure usually comes from timing, not calculation
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Most payroll calculations are not inherently difficult.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The pressure comes from the fact that payroll has almost no recovery time.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>If bookkeeping has an issue, there may be time to revisit it later.
 If management reports are delayed, decisions can sometimes wait a few days.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Payroll operates differently.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Employees expect payment immediately. HMRC expects reporting immediately. Pension deductions must already be correct when processing happens.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That means payroll problems are often discovered at the exact moment they become urgent.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>When bookkeeping is consistent, accounting processes <Link href="/accounts/statutory-accounts" className="text-brand-orange fw-semibold text-decoration-none">such as preparing</Link> <Link href="/accounts/statutory-accounts" className="text-brand-orange fw-semibold text-decoration-none">statutory accounts preparation</Link> become far more straightforward. This distinction becomes critical when records are relied on for tax and reporting, not just internal tracking.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Where Payroll Problems Usually Begin
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>A common example is where an employee salary update reaches payroll after pension contributions have already been calculated, creating differences across payslips, pension reporting, and payroll records simultaneously.</p>
            </div>
          </div>
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10">
              <div className="table-responsive rounded-4 shadow-sm border overflow-hidden">
                <table className="table table-hover align-middle mb-0 bg-white">
                  <thead style={{ background: '#1d3c45', color: '#fff' }}>
                    <tr>
                      <th className="py-3 px-4 text-white border-0 fw-bold">Issue</th>
                      <th className="py-3 px-4 text-white border-0 fw-bold">What Happens</th>
                      <th className="py-3 px-4 text-white border-0 fw-bold">Longer-Term Effect</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Incorrect employee setup</td>
                      <td className="py-3 px-4 text-secondary">Wrong tax or pension treatment</td>
                      <td className="py-3 px-4 text-secondary">Repeated payroll errors</td>
                    </tr>
                    <tr className="border-bottom" style={{ background: '#fcfcfc' }}>
                      <td className="py-3 px-4 fw-bold text-brand-dark">Delayed payroll updates</td>
                      <td className="py-3 px-4 text-secondary">Salary or hours not adjusted</td>
                      <td className="py-3 px-4 text-secondary">Under or overpayments</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Inconsistent payroll records</td>
                      <td className="py-3 px-4 text-secondary">Figures differ from accounts</td>
                      <td className="py-3 px-4 text-secondary">Reporting complications</td>
                    </tr>
                    <tr className="border-bottom" style={{ background: '#fcfcfc' }}>
                      <td className="py-3 px-4 fw-bold text-brand-dark">Pension mismatch</td>
                      <td className="py-3 px-4 text-secondary">Contributions calculated incorrectly</td>
                      <td className="py-3 px-4 text-secondary">Compliance corrections</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Poor internal coordination</td>
                      <td className="py-3 px-4 text-secondary">Missing payroll data close to deadline</td>
                      <td className="py-3 px-4 text-secondary">Processing pressure</td>
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
                Payroll Services and Wider Financial Reporting
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Payroll affects much more than salaries.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Wage costs influence:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>business profitability ● tax calculations ● pension liabilities ● year-end reporting ownership history</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This is why payroll data must align with:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>corporation tax services ● financial forecasting services ● cashflow forecasting services</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Without accurate payroll figures, forecasts and tax calculations lose reliability quickly. Once payroll figures lose consistency, the impact usually spreads beyond payroll itself into reporting, planning, and compliance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                What Our Payroll Services Actually Change
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Basic payroll providers process payslips.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That is expected.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The real difference is whether payroll remains controlled as the business becomes more active and employee structures become more complicated.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Our payroll services focus on:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>keeping payroll aligned with employee changes</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>maintaining consistent RTI reporting</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>ensuring pension deductions and payroll figures remain connected</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>reducing last-minute payroll pressure</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This creates stability inside the payroll cycle itself, which is usually where businesses struggle once staffing increases.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                When Businesses Should Move to Structured Payroll Support
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Payroll support usually becomes necessary when:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>payroll starts taking excessive internal time</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>employee changes happen frequently</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>pension deductions become harder to track</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>payroll corrections start appearing repeatedly</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>At that point, the issue is no longer software. It is process control.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>And once payroll errors begin repeating across multiple cycles, fixing them becomes significantly harder than preventing them earlier.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Speak to Payroll Service Providers in London UK
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>If payroll is beginning to feel rushed, reactive, or difficult to control internally, it is usually a sign the process has outgrown its current structure.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Payroll services should remove pressure, not create more of it.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Taxaccolega supports businesses across London and the UK with outsourced payroll services, RTI reporting, payroll processing, and pension alignment designed to keep payroll accurate before deadlines arrive — not corrected afterwards.</p>
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
                      <span>What do payroll services include?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 0 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 0 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        Payroll services include salary calculations, PAYE deductions, RTI submissions, pension processing, payslips, and payroll reporting.
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
                      <span>What is RTI in payroll?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 1 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 1 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        RTI (Real Time Information) is the HMRC reporting system used each time employees are paid.
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
                      <span>Can payroll services handle pension auto enrolment?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 2 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 2 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        Yes. Payroll services can manage pension eligibility, deductions, and contribution reporting.
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
                      <span>Why do businesses outsource payroll services?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 3 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 3 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        Businesses outsource payroll to reduce internal workload, improve accuracy, and ensure payroll deadlines are met consistently.
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
                      <span>How often should payroll be processed?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 4 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 4 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        Most UK businesses process payroll monthly, although weekly and fortnightly payroll cycles are also common.
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
                      <span>What happens if payroll is submitted incorrectly?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 5 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 5 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        Incorrect payroll submissions can create HMRC discrepancies, pension issues, employee underpayments, and correction work across future payroll periods.
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

export default PayrollServices;
