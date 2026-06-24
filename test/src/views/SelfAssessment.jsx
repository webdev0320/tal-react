"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Partners from '../components/Partners';
import ReviewsSlider from '../components/ReviewsSlider';
import AccountsLinksBar from '../components/AccountsLinksBar';
import { CheckIcon } from '../components/accounts/AccountsPageIcons';

const SelfAssessment = () => {
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
      <header className="position-relative text-white overflow-hidden py-5" style={{ backgroundImage: 'linear-gradient(rgba(29, 60, 69, 0.72), rgba(29, 60, 69, 0.82)), url(/images/2026/05/Self-Assessment-Tax-scaled.webp)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '380px' }}>
        <div className="position-absolute w-100 h-100" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(210, 96, 26, 0.15) 0%, transparent 60%)', top: 0, left: 0, zIndex: 1 }}></div>
        <div className="container position-relative py-4" style={{ zIndex: 2, paddingTop: '5rem' }}>
          <div className="row g-4 align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <span className="text-uppercase small tracking-wider fw-bold mb-2 d-inline-block text-brand-orange" style={{ letterSpacing: '2px' }}>
                Accounts Services
              </span>
              <h1 className="display-4 fw-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Self Assessment Tax Return Accountants UK
              </h1>
              
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mb-4">
                <a href="#contact-block" className="btn btn-brand px-4 py-2 shadow">CONTACT US</a>
                <a href="/schedule-a-phone-call-or-video-meeting" className="btn btn-outline-light px-4 py-2">Schedule a Call</a>
              </div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0 small" style={{ background: 'transparent' }}>
                  <li className="breadcrumb-item"><Link href="/" className="text-decoration-none text-brand-orange">Home</Link></li>
                  <li className="breadcrumb-item"><Link href="/accounts" className="text-decoration-none text-brand-orange">Accounts</Link></li>
                  <li className="breadcrumb-item active text-white-50" aria-current="page">Self Assessment Tax Return Accountants UK</li>
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
              <li className="breadcrumb-item active text-secondary">Self Assessment Tax Return Accountants UK</li>
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
                Self assessment doesn’t feel urgent — until the deadline is already close
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Self assessment rarely starts as a priority.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>You know it needs to be done. You’ve got time. The income is there — salary, dividends, rental, maybe some freelance work — but it all feels manageable while it’s spread across the year.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Then the deadline gets closer.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>You log into your HMRC self assessment tax return account, start going through the figures, and realise it’s not as straightforward as it looked. Income sources need to be combined. Some things aren’t clear. Others don’t quite match what you expected.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That’s when it stops being routine and becomes something you don’t want to get wrong.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This is where working with a self assessment tax return accountant in London or across the UK becomes important — not just to file, but to make sure everything behind the return is actually correct.</p>
            </div>
            <div className="col-lg-5">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img src="/images/2026/05/Services-Accounts-Self-Assessment-Tax-Return.webp" alt="Self assessment doesn’t feel urgent — until the deadline is already close" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
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
                <img src="/images/2026/05/Services-Accounts-Self-Assessment-Tax-Return-Who-Needs-to-File-a-Self-Assessment-Tax-Return.webp" alt="Self Assessment Tax Return UK – Built Around Accuracy Under Deadline" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>
            <div className="col-lg-7 order-1 order-lg-2">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Self Assessment Tax Return UK – Built Around Accuracy Under Deadline
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>A self assessment tax return is not just a form — it’s a complete picture of your income for the year.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Our self assessment tax return services are designed to:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>bring all income sources together clearly</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>ensure correct tax treatment across each area</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>file your return accurately and on time</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Whether you need help to file a self assessment tax return online, support with HMRC login and submission, or a dedicated self assessment accountant, the approach stays the same:</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}><strong className="text-brand-dark">get the figures right before submission — not corrected afterwards.</strong></p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                What a Self Assessment Tax Return Actually Covers
              </h2>
              <h3 className="text-brand-orange fw-bold mb-3">It’s where all income meets in one place</h3>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>A self assessment tax return pulls together multiple sources of income that are not fully handled through PAYE.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This commonly includes:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>dividends from limited companies</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>rental income from property</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>freelance or self-employed income</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>foreign income</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>capital gains</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Each of these is treated differently, but within self assessment, they must all align.</p>
              <h3 className="text-brand-orange fw-bold mb-3">It’s not the form — it’s the combination that creates complexity</h3>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Most individuals don’t struggle with one income source.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>They struggle with how multiple sources interact.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>For example:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>dividends combined with salary can push income into higher tax bands</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>rental income may be overstated if expenses are not treated correct</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>foreign income may require different reporting treatment</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>A common example is where salary, dividends, and rental income each appear manageable individually, but together create a much higher tax liability than expected once combined within self assessment. This is where <Link href="/taxation/personal-income-tax-professionals-and-chartered-accountants" className="text-brand-orange fw-semibold text-decoration-none">self assessment overlaps with income tax services in UK</Link>, ensuring the full position is understood before submission.</p>
              <h3 className="text-brand-orange fw-bold mb-3">Who Needs to File a Self Assessment Tax Return</h3>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>You typically need to file a self assessment tax return if you:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>are self-employed or a sole trader</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>receive rental income</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>earn dividends from a limited company</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>have foreign income</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>dispose of assets creating gains</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Many individuals only realise they need to file after the year has passed — which is where pressure starts building.</p>
            </div>
            <div className="col-lg-5">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img src="/images/2026/05/Services-Accounts-Self-Assessment-Tax-Return-Self-Assessment-Tax-Return-Deadlines.webp" alt="What a Self Assessment Tax Return Actually Covers" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
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
                <img src="/images/2026/05/Services-Accounts-Self-Assessment-Tax-Return-Filing-a-Self-Assessment-Tax-Return-Online.webp" alt="Self Assessment Tax Return Deadlines and HMRC Requirements" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>
            <div className="col-lg-7 order-1 order-lg-2">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Self Assessment Tax Return Deadlines and HMRC Requirements
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Self assessment operates on fixed deadlines:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>31 January → online filing deadline</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>31 January → payment deadline</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>31 July → second payment on account (if applicable)</span></li>
              </ul>
              <h3 className="text-brand-orange fw-bold mb-3">Self Assessment Timeline</h3>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Most problems occur when preparation is left too close to these deadlines.</p>
            </div>
          </div>
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10">
              <div className="table-responsive rounded-4 shadow-sm border overflow-hidden">
                <table className="table table-hover align-middle mb-0 bg-white">
                  <thead style={{ background: '#1d3c45', color: '#fff' }}>
                    <tr>
                      <th className="py-3 px-4 text-white border-0 fw-bold">Stage</th>
                      <th className="py-3 px-4 text-white border-0 fw-bold">Deadline</th>
                      <th className="py-3 px-4 text-white border-0 fw-bold">Risk</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Registration</td>
                      <td className="py-3 px-4 text-secondary">Before filing</td>
                      <td className="py-3 px-4 text-secondary">Late registration delays filing</td>
                    </tr>
                    <tr className="border-bottom" style={{ background: '#fcfcfc' }}>
                      <td className="py-3 px-4 fw-bold text-brand-dark">Filing</td>
                      <td className="py-3 px-4 text-secondary">31 January</td>
                      <td className="py-3 px-4 text-secondary">Penalties if late</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Payment</td>
                      <td className="py-3 px-4 text-secondary">31 January</td>
                      <td className="py-3 px-4 text-secondary">Interest on unpaid tax</td>
                    </tr>
                    <tr className="border-bottom" style={{ background: '#fcfcfc' }}>
                      <td className="py-3 px-4 fw-bold text-brand-dark">Adjustment</td>
                      <td className="py-3 px-4 text-secondary">After submission</td>
                      <td className="py-3 px-4 text-secondary">Limited flexibility</td>
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
                Filing a Self Assessment Tax Return Online
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Filing online through HMRC systems is now standard.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The process includes:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>logging into your HMRC self assessment account ● entering all income sources ● calculating tax liability ● submitting the return</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The system itself is straightforward.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The difficulty comes from:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>knowing what to include</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>treating income correctly</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>ensuring figures match supporting records</span></li>
              </ul>
            </div>
            <div className="col-lg-5">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img src="/images/2026/05/Services-Accounts-Self-Assessment-Tax-Return-Why-Most-Self-Assessment-Mistakes-Are-scaled.webp" alt="Filing a Self Assessment Tax Return Online" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
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
                <img src="/images/2026/05/Services-Accounts-Self-Assessment-Tax-Return-Rental-Income-and-Self-Assessment.webp" alt="Why Most Self Assessment Mistakes Are Only Found After Submission" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>
            <div className="col-lg-7 order-1 order-lg-2">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Why Most Self Assessment Mistakes Are Only Found After Submission
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This is one of the most common issues.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>While preparing the return:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>income sources appear complete</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>figures look reasonable</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>nothing seems obviously wrong</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>After submission:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>tax liability is higher than expected</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>HMRC queries inconsistencies</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>adjustments are required</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The reason is simple:</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Self assessment combines everything at once.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Issues that are not visible individually become obvious when everything is brought together.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>By that stage:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>the return is already filed</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>corrections require amendments</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>penalties may already apply</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Where records have not been maintained properly across the year, correcting the return later often means rebuilding the position from multiple incomplete sources. This is why self assessment problems are rarely about the form — they are about the <strong className="text-brand-dark">structure behind it</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Self Assessment for Company Directors
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>For directors, self assessment becomes more complex due to multiple income streams.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This includes:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>salary processed through payroll services in UK</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>dividends taken from company profits</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>potential benefits or additional income</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>These must align with <Link href="/taxation/company-tax-return-accountants" className="text-brand-orange fw-semibold text-decoration-none">figures from</Link> <strong className="text-brand-dark"><Link href="/taxation/company-tax-return-accountants" className="text-brand-orange fw-semibold text-decoration-none">corporation tax services</Link>,</strong> where profits are calculated before distribution.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>If these are not aligned:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>tax calculations become inconsistent</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>HMRC may question discrepancies</span></li>
              </ul>
              <h3 className="text-brand-orange fw-bold mb-3">Rental Income and Self Assessment</h3>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Rental income is one of the most common triggers for self assessment.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Typical issues include:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>incorrect expense deductions</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>misunderstanding allowable costs</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>missing income entries</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>It also <strong className="text-brand-dark"><Link href="/taxation/capital-gains-tax-accountants" className="text-brand-orange fw-semibold text-decoration-none">connects with capital gains tax accountants</Link></strong><strong className="text-brand-dark">,</strong>particularly when properties are later sold.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Without proper treatment, both income and future gains can be affected.</p>
            </div>
            <div className="col-lg-5">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img src="/images/2026/05/Services-Accounts-Self-Assessment-Tax-Return-Foreign-Income-and-Reporting-Obligations.webp" alt="Self Assessment for Company Directors" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
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
                <img src="/images/2026/05/Services-Accounts-Self-Assessment-Tax-Return-Self-Assessment-and-Financial-Records.webp" alt="Foreign Income and Reporting Obligations" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>
            <div className="col-lg-7 order-1 order-lg-2">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Foreign Income and Reporting Obligations
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Foreign income introduces additional complexity.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This includes:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>overseas employment</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>foreign rental income</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>international investments</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>In these cases:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>reporting requirements differ</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>double taxation rules may apply</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>incorrect reporting can trigger HMRC review</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Handling this correctly requires structured understanding, not just data entry.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                What Our Self Assessment Tax Return Services Actually Change
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Most providers will:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>complete your return</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>submit it to HMRC</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>tell you what you owe</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That’s expected.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>What changes the outcome is what happens before submission.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Our approach focuses on:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>reviewing all income sources in detail</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>identifying inconsistencies early</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>ensuring correct treatment before filing</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This results in:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>accurate tax calculation</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>reduced risk of HMRC queries</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>fewer post-submission corrections</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The difference is not in the filing — it’s in the preparation.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Handling this correctly requires structured understanding, not just data entry.</p>
            </div>
            <div className="col-lg-5">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img src="/images/2026/05/Services-Accounts-Self-Assessment-Tax-Return-Self-Assessment-Tax-Return-UK.webp" alt="What Our Self Assessment Tax Return Services Actually Change" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                When You Should Speak to a Self Assessment Accountant
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Most individuals wait until:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>the deadline is close</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>they are ready to file</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>they realise something is unclear</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That’s already late.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>You should speak to a self assessment tax return accountant when:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>you have multiple income sources</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>your income structure changes</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>you are unsure how something should be reported</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>At that stage:
 👉 decisions can still be corrected</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>After submission:
 👉 they usually cannot</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Self Assessment and Wider Financial Planning
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Self assessment is not just about compliance.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>It reflects:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>how your income is structured</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>how efficiently it is taxed</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>how decisions affect your overall position</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This is why it often <Link href="/accounts/financial-forecasting" className="text-brand-orange fw-semibold text-decoration-none">connects with financial forecasting services</Link> and <Link href="/accounts/cash-flow-forecasting" className="text-brand-orange fw-semibold text-decoration-none">cashflow forecasting services</Link>, ensuring tax is considered as part of your wider financial planning.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Speak to Self Assessment Tax Return Accountants in London UK
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>If your self assessment tax return is being left until the final stage, there’s a strong chance that:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>opportunities have already been missed</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>income has not been treated optimally</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>risks are higher than they need to be</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Once filing deadlines are close and income sources have already been combined incorrectly, the flexibility to improve the position becomes much smaller.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Whether you need:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>help with filing a self assessment tax return</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>support with HMRC login and submission</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>ongoing personal tax support</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>handling it early changes the outcome — and avoids unnecessary cost later.</p>
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
                      <span>What is a self assessment tax return?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 0 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 0 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        A self assessment tax return is a report submitted to HMRC that details all your income sources and calculates how much tax you owe.
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
                      <span>Who needs to file a self assessment tax return?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 1 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 1 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        Anyone with income outside PAYE, such as self-employed individuals, landlords, or company directors, typically needs to file.
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
                      <span>When is the self assessment deadline?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 2 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 2 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        The online filing deadline is 31 January, with the same date applying to tax payment.
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
                      <span>Can I file a self assessment tax return myself?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 3 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 3 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        Yes, but many individuals use accountants to ensure accuracy and avoid mistakes.
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
                      <span>What happens if I miss the deadline?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 4 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 4 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        Late filing results in penalties and interest on unpaid tax.
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
                      <span>How can I reduce my self assessment tax?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 5 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 5 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        Through correct income structuring, allowable expenses, and proper use of tax rules.
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

export default SelfAssessment;
