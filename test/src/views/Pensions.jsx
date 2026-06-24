"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Partners from '../components/Partners';
import ReviewsSlider from '../components/ReviewsSlider';
import AccountsLinksBar from '../components/AccountsLinksBar';
import { CheckIcon } from '../components/accounts/AccountsPageIcons';

const Pensions = () => {
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
      <header className="position-relative text-white overflow-hidden py-5" style={{ backgroundImage: 'linear-gradient(rgba(29, 60, 69, 0.72), rgba(29, 60, 69, 0.82)), url(/images/2026/05/Auto-Enrolment-scaled.webp)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '380px' }}>
        <div className="position-absolute w-100 h-100" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(210, 96, 26, 0.15) 0%, transparent 60%)', top: 0, left: 0, zIndex: 1 }}></div>
        <div className="container position-relative py-4" style={{ zIndex: 2, paddingTop: '5rem' }}>
          <div className="row g-4 align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <span className="text-uppercase small tracking-wider fw-bold mb-2 d-inline-block text-brand-orange" style={{ letterSpacing: '2px' }}>
                Accounts Services
              </span>
              <h1 className="display-4 fw-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Auto Enrolment Pension UK – Contributions, Rates & Eligibility
              </h1>
              <p className="lead text-white-50 mb-4" style={{ maxWidth: '680px', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Expert Guidance for Auto Enrolment: Tailored Solutions for Seamless Compliance at Taxaccolega.
              </p>
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mb-4">
                <a href="#contact-block" className="btn btn-brand px-4 py-2 shadow">CONTACT US</a>
                <a href="/schedule-a-phone-call-or-video-meeting" className="btn btn-outline-light px-4 py-2">Schedule a Call</a>
              </div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0 small" style={{ background: 'transparent' }}>
                  <li className="breadcrumb-item"><Link href="/" className="text-decoration-none text-brand-orange">Home</Link></li>
                  <li className="breadcrumb-item"><Link href="/accounts" className="text-decoration-none text-brand-orange">Accounts</Link></li>
                  <li className="breadcrumb-item active text-white-50" aria-current="page">Auto Enrolment Pension UK – Contributions, Rates & Eligibility</li>
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
              <li className="breadcrumb-item active text-secondary">Auto Enrolment Pension UK – Contributions, Rates & Eligibility</li>
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
          <div className="row g-5">
            <div className="col-lg-10 mx-auto">
              <div className="text-secondary d-flex flex-column gap-1 fs-6" style={{ lineHeight: 1.8 }}>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Expert Guidance for Auto Enrolment: Tailored Solutions for Seamless Compliance at Taxaccolega.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>For many employers, pension compliance does not become stressful when the scheme is first set up.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>It becomes stressful three months later.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>A new employee joins halfway through a payroll cycle. Someone’s pay changes because overtime suddenly increases. Another employee turns eligible because their earnings cross the threshold for automatic enrolment. An opt-out request arrives after payroll has already been processed. Then re-enrolment dates appear in the background while payroll deadlines are already tight.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That is usually when businesses realise pension auto enrolment is not a static setup.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>It is a live process connected to every payroll run, every employee change, and every contribution calculation moving through the business.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>On paper, workplace pension rules can appear straightforward. In practice, employers are expected to monitor eligibility, apply automatic enrolment pension contributions correctly, maintain records, reassess workers at the right points, and keep payroll and pension data aligned continuously.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This is where many businesses start relying on structured pension and payroll support rather than trying to manage auto enrolment internally while balancing daily operations.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>At Taxaccolega, we support employers across London and the UK with auto enrolment pension contributions, pension eligibility reviews, workplace pension calculations, payroll-linked pension administration, and ongoing compliance support built around how businesses actually operate.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AccountsLinksBar />

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Auto Enrolment Pension Contributions UK – Why the Process Becomes Difficult Over Time
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The challenge with pension auto enrolment is rarely the first contribution.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The challenge is maintaining consistency as the business changes.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>A business with five employees may initially manage pension deductions comfortably. Then staffing grows. Payroll becomes more variable. Salaries change more often. Bonuses are introduced. Different worker categories start appearing across the workforce.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That is when pension administration becomes operational rather than administrative.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Automatic enrolment rules require employers to continually assess:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>employee age</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>earnings thresholds</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>pension eligibility</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>contribution rates</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>opt-in rights</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>re-enrolment duties</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>pensionable pay treatment</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The difficulty is that these factors move constantly.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>A pension contribution that was correct last month may become inaccurate after a payroll adjustment or earnings change if the assessment process is not updated alongside it.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This is why pension auto enrolment usually works best when <Link href="/accounts/payroll-services" className="text-brand-orange fw-semibold text-decoration-none">connected directly with payroll services</Link> rather than treated as a separate process operating independently.</p>
            </div>
            <div className="col-lg-5">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img src="/images/2026/05/Services-Accounts-Pension-Auto-Enrolment--Auto-Enrolment-Pension-Contributions-scaled.webp" alt="Auto Enrolment Pension Contributions UK – Why the Process Becomes Difficult Over Time" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
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
                <img src="/images/2026/05/Services-Accounts-Pension-Auto-Enrolment--Why-Auto-Enrolment-Problems-Usually-Start-Inside-Payroll.webp" alt="How Pension Auto Enrolment Actually Works in Practice" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>
            <div className="col-lg-7 order-1 order-lg-2">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                How Pension Auto Enrolment Actually Works in Practice
              </h2>
              <h3 className="text-brand-orange fw-bold mb-3">Worker eligibility changes more often than most employers expect</h3>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Automatic enrolment eligibility is based primarily on:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>age</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>earnings</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>worker classification</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That sounds simple until payroll becomes active in real conditions.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>An employee who was previously below the earnings threshold may become eligible because of overtime. A part-time worker may temporarily cross pension limits during seasonal periods. A common example is where overtime or irregular monthly earnings temporarily move an employee into a different eligibility category without pension treatment being reassessed alongside payroll. A younger employee may move into the qualifying age bracket without anyone noticing immediately.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The rules themselves are not necessarily complicated.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The risk comes from assuming eligibility stays static when workforce conditions keep changing.</p>
              <h3 className="text-brand-orange fw-bold mb-3">Pension contributions depend on the correct earnings basis</h3>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Another area where employers frequently run into problems is contribution calculation.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Auto enrolment pension contributions are not always based on total pay in the way employers initially assume. Contribution treatment depends on:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>qualifying earnings</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>pensionable pay basis</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>scheme structure</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>payroll treatment</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>statutory payment interaction</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>A deduction can appear perfectly reasonable on a payslip while still being technically incorrect under pension rules.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That difference matters because pension compliance is judged by accuracy, not appearance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Auto Enrolment Eligibility and Pension Assessment
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This section works best here because pension assessment comes before contribution processing. Employers first need to establish who should be assessed and how pension treatment should apply before deductions are calculated.</p>
            </div>
            <div className="col-lg-5">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img src="/images/2026/05/Services-Accounts-Pension-Auto-Enrolment--Insight-Section-Pension-Errors-Usually-Stay-Hidden-scaled.webp" alt="Auto Enrolment Eligibility and Pension Assessment" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10">
              <div className="table-responsive rounded-4 shadow-sm border overflow-hidden">
                <table className="table table-hover align-middle mb-0 bg-white">
                  <thead style={{ background: '#1d3c45', color: '#fff' }}>
                    <tr>
                      <th className="py-3 px-4 text-white border-0 fw-bold">Assessment Area</th>
                      <th className="py-3 px-4 text-white border-0 fw-bold">What Needs Reviewing</th>
                      <th className="py-3 px-4 text-white border-0 fw-bold">Why It Matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Worker age</td>
                      <td className="py-3 px-4 text-secondary">Automatic enrolment age rules</td>
                      <td className="py-3 px-4 text-secondary">Determines pension category</td>
                    </tr>
                    <tr className="border-bottom" style={{ background: '#fcfcfc' }}>
                      <td className="py-3 px-4 fw-bold text-brand-dark">Earnings level</td>
                      <td className="py-3 px-4 text-secondary">Workplace pension thresholds</td>
                      <td className="py-3 px-4 text-secondary">Controls eligibility status</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Pay frequency</td>
                      <td className="py-3 px-4 text-secondary">Weekly or monthly payroll</td>
                      <td className="py-3 px-4 text-secondary">Affects timing of assessment</td>
                    </tr>
                    <tr className="border-bottom" style={{ background: '#fcfcfc' }}>
                      <td className="py-3 px-4 fw-bold text-brand-dark">Worker type</td>
                      <td className="py-3 px-4 text-secondary">Employee, director, contractor</td>
                      <td className="py-3 px-4 text-secondary">Determines employer duties</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Pensionable pay basis</td>
                      <td className="py-3 px-4 text-secondary">Qualifying earnings or full pay</td>
                      <td className="py-3 px-4 text-secondary">Impacts contribution calculation</td>
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
                <img src="/images/2024/01/pexels-photo-3756937.jpg" alt="Why Auto Enrolment Problems Usually Start Inside Payroll" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>
            <div className="col-lg-7 order-1 order-lg-2">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Why Auto Enrolment Problems Usually Start Inside Payroll
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Most pension issues do not begin with pension providers.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>They begin with payroll movement.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>A salary increase is processed but pension rates are not reviewed. A new starter is added after payroll cut-off dates. Statutory sick pay changes contribution calculations. Variable pay alters eligibility status. An employee opts out but the records supporting that action are incomplete.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The issue is rarely one major failure.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>It is small inconsistencies repeating quietly across multiple payroll cycles.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This is why pension auto enrolment should not be treated as a one-time compliance task completed during initial setup.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>It is an ongoing operational process that moves with payroll every single pay period.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That operational connection is also why <Link href="/accounts/bookkeeping-services" className="text-brand-orange fw-semibold text-decoration-none">accurate bookkeeping services</Link> and <Link href="/accounts/management-accounts" className="text-brand-orange fw-semibold text-decoration-none">management accounts</Link> become important. Pension contributions affect wage reporting, employer costs, payroll liabilities, and future staffing decisions across the wider financial structure of the business.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Automatic Enrolment Pension Rates and Employer Contributions
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Automatic enrolment minimum contributions require both employer and employee pension contributions to be maintained at compliant levels under workplace pension rules.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>What many businesses underestimate is how sensitive those contribution levels become once payroll grows more complex.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>For example:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>bonuses may affect pensionable pay</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>maternity pay may change contribution treatment</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>directors may require separate assessment</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>irregular pay patterns may shift thresholds</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>multiple payroll frequencies may affect calculations</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This is why businesses often search for:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>auto enrolment pension calculator</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>automatic enrolment pension rates</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>minimum workplace pension contributions</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>pension auto enrolment UK</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>how do you calculate pension contributions</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The technical formula itself is rarely the hardest part.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The real difficulty is applying the right formula to the correct employee category at the correct point in time.</p>
            </div>
            <div className="col-lg-5">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img src="/images/2026/05/Services-Accounts-Pension-Auto-Enrolment--What-Our-Pension-Auto-Enrolment.webp" alt="Automatic Enrolment Pension Rates and Employer Contributions" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
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
                <img src="/images/2026/05/Services-Accounts-Pension-Auto-Enrolment--Speak-to-Pension-Auto.webp" alt="Where Pension Auto Enrolment Usually Breaks Down" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>
            <div className="col-lg-7 order-1 order-lg-2">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Where Pension Auto Enrolment Usually Breaks Down
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This section creates the authority layer of the page because it demonstrates how pension compliance problems develop operationally rather than theoretically.</p>
            </div>
          </div>
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10">
              <div className="table-responsive rounded-4 shadow-sm border overflow-hidden">
                <table className="table table-hover align-middle mb-0 bg-white">
                  <thead style={{ background: '#1d3c45', color: '#fff' }}>
                    <tr>
                      <th className="py-3 px-4 text-white border-0 fw-bold">Risk Area</th>
                      <th className="py-3 px-4 text-white border-0 fw-bold">What Typically Happens</th>
                      <th className="py-3 px-4 text-white border-0 fw-bold">Operational Consequence</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Delayed worker assessment</td>
                      <td className="py-3 px-4 text-secondary">New starters not reviewed promptly</td>
                      <td className="py-3 px-4 text-secondary">Missed enrolment duties</td>
                    </tr>
                    <tr className="border-bottom" style={{ background: '#fcfcfc' }}>
                      <td className="py-3 px-4 fw-bold text-brand-dark">Incorrect earnings basis</td>
                      <td className="py-3 px-4 text-secondary">Contributions calculated on wrong figures</td>
                      <td className="py-3 px-4 text-secondary">Under or overpayment</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Poor pension records</td>
                      <td className="py-3 px-4 text-secondary">Opt-outs or notices undocumented</td>
                      <td className="py-3 px-4 text-secondary">Weak compliance evidence</td>
                    </tr>
                    <tr className="border-bottom" style={{ background: '#fcfcfc' }}>
                      <td className="py-3 px-4 fw-bold text-brand-dark">Payroll and pension mismatch</td>
                      <td className="py-3 px-4 text-secondary">Payslip and pension data differ</td>
                      <td className="py-3 px-4 text-secondary">Reconciliation problems</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Re-enrolment ignored</td>
                      <td className="py-3 px-4 text-secondary">Previous opt-outs not reassessed</td>
                      <td className="py-3 px-4 text-secondary">Employer duties missed</td>
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
                Insight Section: Pension Errors Usually Stay Hidden Until Someone Looks Closely
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>One of the biggest misconceptions around pension auto enrolment is assuming that errors become obvious immediately.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Most do not.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>A contribution can be slightly incorrect for months without triggering visible concern. A worker may be assessed under the wrong category quietly across several payroll cycles. Re-enrolment obligations may be missed simply because nobody realised reassessment dates had arrived.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Everything appears stable on the surface:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>payslips are processed</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>payroll runs complete</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>pension deductions exist</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>employees are being paid</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The problem only becomes visible later:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>during payroll review</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>during pension provider checks</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>during compliance follow-up</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>when employees question contribution levels</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>when records need to be reconstructed historically</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>At that point, the issue is no longer setup.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>It becomes correction work.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That is usually far more time-consuming than maintaining accurate pension processes properly from the beginning.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                What Our Pension & Auto Enrolment Services Actually Improve
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Basic pension administration usually focuses on processing deductions.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This is not simply about processing pension deductions. It is about keeping pension compliance aligned with changing payroll conditions over time. Our approach focuses on keeping the entire process aligned operationally.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That includes:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>reviewing worker eligibility properly</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>maintaining pension assessment consistency</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>aligning pension treatment with payroll activity</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>checking contribution calculations against the correct basis</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>maintaining compliance records clearly</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>reducing reconciliation issues later</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>monitoring ongoing pension duties rather than only initial setup</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The outcome is not simply “a pension scheme.”</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The outcome is a cleaner payroll and pension process that remains stable as the business changes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                When Employers Should Review Pension Auto Enrolment
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Many employers wait until a problem appears before reviewing pension compliance.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Usually the stronger time to review is earlier:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>before staff numbers increase</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>before payroll complexity grows</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>before variable pay structures expand</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>before re-enrolment dates arrive</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>before payroll corrections become repetitive</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>before pension records become inconsistent</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Once errors spread across multiple payroll periods, reconstruction becomes far more difficult because historic payroll data may need to be reviewed individually.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Speak to Pension Auto Enrolment Accountants in London UK
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>If pension auto enrolment is currently being handled as a secondary payroll task rather than an active compliance process, there is a strong chance important changes are not being reviewed closely enough.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>At Taxaccolega, we support employers across London and the UK with:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>auto enrolment pension contributions</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>workplace pension calculations</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>payroll-linked pension administration</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>pension eligibility reviews</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>contribution checks</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>re-enrolment support</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>ongoing pension compliance management</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The focus is not simply setting up workplace pensions.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>It is making sure pension treatment continues working properly every payroll cycle as the business evolves.</p>
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
                      <span>What are auto enrolment pension contributions?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 0 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 0 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        Auto enrolment pension contributions are workplace pension payments made by employers and eligible employees under UK automatic enrolment rules.
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
                      <span>How do you calculate pension contributions?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 1 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 1 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        Pension contributions are calculated using pensionable earnings, qualifying earnings, contribution rates, and the rules of the pension scheme being used.
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
                      <span>What is automatic enrolment eligibility?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 2 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 2 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        Eligibility depends on worker age, earnings thresholds, and employment status under workplace pension rules.
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
                      <span>Do small businesses need workplace pension schemes?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 3 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 3 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        Yes. Employers with eligible workers generally need to meet workplace pension and automatic enrolment duties.
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
                      <span>What happens if pension contributions are calculated incorrectly?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 4 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 4 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        Incorrect contributions can create payroll corrections, pension reconciliation issues, employee disputes, and compliance risks.
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
                      <span>How often should pension auto enrolment be reviewed?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 5 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 5 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        Auto enrolment should be reviewed continuously through payroll cycles and reassessed whenever staffing, pay levels, or worker eligibility changes.
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
                      <span>Does payroll affect pension auto enrolment?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 6 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 6 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        Yes. Payroll changes directly influence eligibility assessment, pensionable pay, contribution calculations, and compliance reporting.
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

export default Pensions;
