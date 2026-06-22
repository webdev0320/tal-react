"use client";
import React, { useState } from 'react';
import Link from '../components/NextLinkShim';
import Footer from '../components/Footer';
import Partners from '../components/Partners';
import ReviewsSlider from '../components/ReviewsSlider';
import AccountsServiceGrid from '../components/AccountsServiceGrid';
import { accountsLinks } from '../data/accountsLinks';
import ClientScroll from '../components/ClientScroll';

const PayrollServices = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Proposal request submitted!');
    setFormData({ name: '', email: '', message: '' });
  };

  const faqs = [
    { q: "What do payroll services include?", a: "Payroll services include salary calculations, PAYE deductions, RTI submissions, pension processing, payslips, and payroll reporting." },
    { q: "What is RTI in payroll?", a: "RTI (Real Time Information) is the HMRC reporting system used each time employees are paid." },
    { q: "Can payroll services handle pension auto enrolment?", a: "Yes. Payroll services can manage pension eligibility, deductions, and contribution reporting." },
    { q: "Why do businesses outsource payroll services?", a: "Businesses outsource payroll to reduce internal workload, improve accuracy, and ensure payroll deadlines are met consistently." },
    { q: "How often should payroll be processed?", a: "Most UK businesses process payroll monthly, although weekly and fortnightly payroll cycles are also common." },
    { q: "What happens if payroll is submitted incorrectly?", a: "Incorrect payroll submissions can create HMRC discrepancies, pension issues, employee underpayments, and correction work across future payroll periods." }
  ];

  return (
    <div className="bg-white">
      <ClientScroll />
      {/* ── HERO SECTION WITH SIDEBAR OVERLAP ── */}
      <header className="position-relative text-white overflow-hidden py-5" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)', minHeight: '380px' }}>
        <div className="position-absolute w-100 h-100" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(210, 96, 26, 0.15) 0%, transparent 60%)', top: 0, left: 0, zIndex: 1 }}></div>
        <div className="container position-relative py-4" style={{ zIndex: 2 }}>
          <div className="row g-4 align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <span className="text-uppercase small tracking-wider fw-bold mb-2 d-inline-block text-brand-orange" style={{ letterSpacing: '2px' }}>
                Payroll Specialists
              </span>
              <h1 className="display-4 fw-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Payroll Services UK – HMRC PAYE for Small & Medium Businesses
              </h1>
              <p className="lead text-white-50 mb-4" style={{ maxWidth: '680px', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Taxaccolega offer professional payroll services for small businesses wherever you are in the UK to help your employee payroll run smoothly month after month.
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
                  <li className="breadcrumb-item active text-white-50" aria-current="page">Payroll Services</li>
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
              <li className="breadcrumb-item active text-secondary">Payroll Services</li>
            </ol>
          </nav>
        </div>
      </div>
      
      <main className="py-5">
        <div className="container">
          <section className="mb-5">
            <h2 className="text-deepTeal">Payroll problems usually start before payday arrives</h2>
            <p className="fw-bold">Most payroll mistakes are not caused on the day salaries are processed.</p>
            <p className="fw-bold">They begin earlier in the month.</p>
            <p>A new employee joins but their tax details are still incomplete. Someone’s hours change but the update never reaches payroll properly. Pension deductions continue under an old percentage. A director takes an irregular payment that gets treated like standard salary. Nothing appears serious at the time because the payroll run itself has not happened yet.</p>
            <p>Then payroll day arrives and suddenly everything becomes urgent at once.</p>
            <p>Employees are waiting to be paid. RTI submissions need to go to HMRC. Pension contributions need to match payroll figures. And if something is wrong, there is very little space to pause and work through it slowly.</p>
            <p>That is why payroll services are not really about “processing wages”. They are about keeping an entire monthly sequence accurate before pressure builds.</p>
          </section>

          <section className="mb-5">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2 className="text-deepTeal">Payroll Services UK Built Around Consistency and Timing</h2>
                <p>Payroll is one of the few business functions that repeats under fixed deadlines regardless of what else is happening inside the company.</p>
                <p>A business can postpone meetings, delay projects, or move operational priorities around. Payroll does not work like that.</p>
                <p>Salaries still need to be processed. HMRC still expects reporting. Employees still expect the correct amount to reach their bank accounts on time.</p>
                <p>Our payroll services in London and across the UK are structured around that reality.</p>
                <p>The focus is not simply on running calculations. It is on making sure payroll continues operating accurately as staffing, salaries, pensions, and reporting requirements evolve over time.</p>
              </div>
              <div className="col-md-6">
                <div className="bg-secondary rounded p-5 text-center text-white">Placeholder Image</div>
              </div>
            </div>
          </section>

          <section className="mb-5">
            <div className="row">
              <div className="col-12">
                <h2 className="text-deepTeal">How Payroll Actually Functions Inside a Business</h2>
                <h4 className="text-brand-orange">Payroll sits between employees, HMRC, pensions, and accounts</h4>
                <p>Payroll affects multiple areas simultaneously.</p>
                <p>An employee sees net pay. HMRC sees deductions and RTI submissions. Pension providers see contribution figures. The business itself sees wage costs flowing into financial records.</p>
                <p>If one part becomes inconsistent, the issue spreads quickly into other areas.</p>
                <p>This is why payroll connects naturally with bookkeeping services for small businesses. Wage costs, PAYE liabilities, pension contributions, and salary payments all need to reconcile against the underlying records.</p>
                <p>When payroll and bookkeeping drift apart, corrections usually become more complicated later.</p>

                <h4 className="mt-4">Small payroll errors rarely stay small</h4>
                <p>A payroll issue often affects more than one pay cycle.</p>
                <p>For example:</p>
                <ul>
                  <li>an incorrect tax code can continue for months</li>
                  <li>pension deductions may keep applying incorrectly</li>
                  <li>overtime or bonus calculations can distort payroll costs over multiple periods</li>
                </ul>
                <p>By the time the issue is noticed, adjustments usually involve backdating, amended reporting, and employee explanations.</p>
                <p>That is why payroll services for small businesses are less about “running payroll software” and more about maintaining accuracy across repeated cycles.</p>
              </div>
            </div>
          </section>

          <section className="mb-5">
            <h2 className="text-deepTeal">Payroll Services for Small Business UK</h2>
            <p>Small businesses often assume payroll will remain simple because headcount is low.</p>
            <p>That usually changes faster than expected.</p>
            <p>The moment staffing structures begin changing regularly, payroll becomes operationally sensitive. Different salaries, holiday pay, directors’ pay, statutory sick pay, maternity payments, pension deductions, and starter/leaver processing all begin interacting at the same time.</p>
            <p>At that stage, payroll becomes closely connected with:</p>
            <ul>
              <li>management accounts services</li>
              <li>statutory accounts preparation</li>
            </ul>
            <p>because salary costs and payroll liabilities need to remain consistent across all financial reporting.</p>
          </section>

          <section className="mb-5">
            <div className="row g-4">
              <div className="col-md-6">
                <h3 className="text-deepTeal">Payroll and HMRC Reporting Requirements</h3>
                <p>Payroll reporting in the UK is tied directly to HMRC through RTI submissions.</p>
                <p>This means payroll is not only about paying staff correctly. It is also about reporting deductions accurately and on time.</p>
                <p>Incorrect submissions can create:</p>
                <ul>
                  <li>mismatched employee records</li>
                  <li>PAYE discrepancies</li>
                  <li>unnecessary HMRC follow-up</li>
                </ul>
                <p>This becomes especially important where payroll links with income tax services in UK because employee tax records and payroll reporting need to remain aligned.</p>
              </div>
              <div className="col-md-6">
                <h3 className="text-deepTeal">Payroll and Pension Auto Enrolment</h3>
                <p>Payroll and pensions cannot realistically be separated once employee numbers grow.</p>
                <p>Auto enrolment requires:</p>
                <ul>
                  <li>eligibility assessment</li>
                  <li>contribution calculation</li>
                  <li>ongoing pension reporting</li>
                </ul>
                <p>The difficulty is not the setup itself. The difficulty is maintaining accuracy every payroll cycle as salaries and employee status change.</p>
                <p>That is why payroll naturally overlaps with auto enrolment pension contributions.</p>
                <p>When payroll changes but pension treatment does not update correctly, the issue repeats automatically every pay period.</p>
              </div>
            </div>
          </section>

          <section className="mb-5">
            <h3 className="text-center mb-4">Payroll Processing Flow in UK Businesses</h3>
            <div className="table-responsive">
              <table className="table table-bordered text-center">
                <thead>
                  <tr><th>Payroll Stage</th><th>What Happens</th><th>What Usually Causes Problems</th></tr>
                </thead>
                <tbody>
                  <tr><td>Employee updates</td><td>Hours, salaries, starters, leavers</td><td>Delayed or incomplete information</td></tr>
                  <tr><td>Payroll calculations</td><td>PAYE, NI, pension deductions</td><td>Incorrect coding or contribution setup</td></tr>
                  <tr><td>RTI submissions</td><td>Payroll data sent to HMRC</td><td>Filing inconsistencies</td></tr>
                  <tr><td>Salary payments</td><td>Net wages processed</td><td>Payment timing issues</td></tr>
                  <tr><td>Record alignment</td><td>Payroll reconciled with accounts</td><td>Differences across systems</td></tr>
                </tbody>
              </table>
            </div>
            <p className="small text-muted"><em>This table belongs here because payroll problems are rarely caused by one event. They usually happen when one stage stops matching the others.</em></p>
          </section>

          <section className="mb-5">
            <h2 className="text-deepTeal">Outsourced Payroll Services UK – Why Businesses Move Payroll Outside</h2>
            <p>Businesses rarely outsource payroll because they cannot technically run it.</p>
            <p>They outsource it because payroll begins consuming too much operational attention.</p>
            <p>Someone inside the business ends up:</p>
            <ul>
              <li>checking calculations repeatedly</li>
              <li>correcting pension deductions</li>
              <li>responding to payroll queries</li>
              <li>chasing missing employee details close to payday</li>
            </ul>
            <p>That pressure increases as the business grows.</p>
            <p>Outsourced payroll services create a fixed structure where payroll is reviewed, processed, and submitted consistently without relying on last-minute internal coordination.</p>
          </section>

          <section className="py-4 bg-light text-center">
            <div className="container">
              <p className="mb-3 fw-bold">Our Clients and Collaborative Partners</p>
              <Partners />
            </div>
          </section>
          
          <section className="mb-5">
            <h2 className="text-deepTeal">Insight: Payroll pressure usually comes from timing, not calculation</h2>
            <p>Most payroll calculations are not inherently difficult.</p>
            <p>The pressure comes from the fact that payroll has almost no recovery time.</p>
            <p>If bookkeeping has an issue, there may be time to revisit it later. If management reports are delayed, decisions can sometimes wait a few days.</p>
            <p>Payroll operates differently.</p>
            <p>Employees expect payment immediately. HMRC expects reporting immediately. Pension deductions must already be correct when processing happens.</p>
            <p>That means payroll problems are often discovered at the exact moment they become urgent.</p>
            <p>When bookkeeping is consistent, accounting processes such as preparing statutory accounts preparation become far more straightforward. This distinction becomes critical when records are relied on for tax and reporting, not just internal tracking.</p>
          </section>

          <section className="mb-5">
            <h3 className="text-center mb-4">Where Payroll Problems Usually Begin</h3>
            <div className="table-responsive">
              <table className="table table-bordered text-center">
                <thead>
                  <tr><th>Issue</th><th>What Happens</th><th>Longer-Term Effect</th></tr>
                </thead>
                <tbody>
                  <tr><td>Incorrect employee setup</td><td>Wrong tax or pension treatment</td><td>Repeated payroll errors</td></tr>
                  <tr><td>Delayed payroll updates</td><td>Salary or hours not adjusted</td><td>Under or overpayments</td></tr>
                  <tr><td>Inconsistent payroll records</td><td>Figures differ from accounts</td><td>Reporting complications</td></tr>
                  <tr><td>Pension mismatch</td><td>Contributions calculated incorrectly</td><td>Compliance corrections</td></tr>
                  <tr><td>Poor internal coordination</td><td>Missing payroll data close to deadline</td><td>Processing pressure</td></tr>
                </tbody>
              </table>
            </div>
            <p>A common example is where an employee salary update reaches payroll after pension contributions have already been calculated, creating differences across payslips, pension reporting, and payroll records simultaneously.</p>
          </section>

          <section className="mb-5">
            <h2 className="text-deepTeal">Payroll Services and Wider Financial Reporting</h2>
            <p>Payroll affects much more than salaries.</p>
            <p>Wage costs influence:</p>
            <ul>
              <li>business profitability</li>
              <li>tax calculations</li>
              <li>pension liabilities</li>
              <li>year-end reporting ownership history</li>
            </ul>
            <p>This is why payroll data must align with:</p>
            <ul>
              <li>corporation tax services</li>
              <li>financial forecasting services</li>
              <li>cashflow forecasting services</li>
            </ul>
            <p>Without accurate payroll figures, forecasts and tax calculations lose reliability quickly. Once payroll figures lose consistency, the impact usually spreads beyond payroll itself into reporting, planning, and compliance.</p>
          </section>

          <section className="mb-5">
            <h2 className="text-deepTeal">What Our Payroll Services Actually Change</h2>
            <p>Basic payroll providers process payslips.</p>
            <p>That is expected.</p>
            <p>The real difference is whether payroll remains controlled as the business becomes more active and employee structures become more complicated.</p>
            <p>Our payroll services focus on:</p>
            <ul>
              <li>keeping payroll aligned with employee changes</li>
              <li>maintaining consistent RTI reporting</li>
              <li>ensuring pension deductions and payroll figures remain connected</li>
              <li>reducing last-minute payroll pressure</li>
            </ul>
            <p>This creates stability inside the payroll cycle itself, which is usually where businesses struggle once staffing increases.</p>
          </section>

          <section className="mb-5">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2 className="text-deepTeal">When Businesses Should Move to Structured Payroll Support</h2>
                <p>Payroll support usually becomes necessary when:</p>
                <ul>
                  <li>payroll starts taking excessive internal time</li>
                  <li>employee changes happen frequently</li>
                  <li>pension deductions become harder to track</li>
                  <li>payroll corrections start appearing repeatedly</li>
                </ul>
                <p>At that point, the issue is no longer software. It is process control.</p>
                <p>And once payroll errors begin repeating across multiple cycles, fixing them becomes significantly harder than preventing them earlier.</p>
              </div>
              <div className="col-md-6">
                <div className="bg-secondary rounded p-5 text-center text-white">Placeholder Image</div>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="py-5 bg-light">
            <div className="container">
              <h3>Our Accounts Services</h3>
              <AccountsServiceGrid items={accountsLinks} />

              <h3 className="mt-5">FAQs on Payroll Services</h3>
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

          <section className="py-5 bg-white">
            <div className="container">
              <h2 className="text-deepTeal">Speak to Payroll Service Providers in London UK</h2>
              <p>If payroll is beginning to feel rushed, reactive, or difficult to control internally, it is usually a sign the process has outgrown its current structure.</p>
              <p>Payroll services should remove pressure, not create more of it.</p>
              <p>Taxaccolega supports businesses across London and the UK with outsourced payroll services, RTI reporting, payroll processing, and pension alignment designed to keep payroll accurate before deadlines arrive — not corrected afterwards.</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      </div>
  );
};

export default PayrollServices;
