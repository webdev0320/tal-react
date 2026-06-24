"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Partners from '../components/Partners';
import ReviewsSlider from '../components/ReviewsSlider';
import ContactForm from '../components/ContactForm';
import AccountsLinksBar from '../components/AccountsLinksBar';
import { CheckIcon } from '../components/accounts/AccountsPageIcons';

const BookkeepingServices = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickNav = [
                    { title: 'Statutory Accounts', link: '/accounts/statutory-accounts' },
                    { title: 'Management Accounts', link: '/accounts/management-accounts' },
                    { title: 'Payroll Services', link: '/accounts/payroll-services' }
  ];

  return (
    <div className="bg-light min-h-screen">
      <header className="position-relative text-white overflow-hidden py-5" style={{ backgroundImage: 'linear-gradient(rgba(29, 60, 69, 0.72), rgba(29, 60, 69, 0.82)), url(/images/2026/05/Bookkeeping-scaled.webp)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '380px' }}>
        <div className="position-absolute w-100 h-100" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(210, 96, 26, 0.15) 0%, transparent 60%)', top: 0, left: 0, zIndex: 1 }}></div>
        <div className="container position-relative py-4" style={{ zIndex: 2, paddingTop: '5rem' }}>
          <div className="row g-4 align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <span className="text-uppercase small tracking-wider fw-bold mb-2 d-inline-block text-brand-orange" style={{ letterSpacing: '2px' }}>
                Accounts Services
              </span>
              <h1 className="display-4 fw-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Bookkeeping Services For Small and Medium Businesses in UK
              </h1>
              <p className="lead text-white-50 mb-4" style={{ maxWidth: '680px', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Taxaccolega’s online solutions can simplify your finances, ensuring accuracy and compliance. Book consult.
              </p>
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mb-4">
                <a href="#contact-block" className="btn btn-brand px-4 py-2 shadow">CONTACT US</a>
                <a href="/schedule-a-phone-call-or-video-meeting" className="btn btn-outline-light px-4 py-2">Schedule a Call</a>
              </div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0 small" style={{ background: 'transparent' }}>
                  <li className="breadcrumb-item"><Link href="/" className="text-decoration-none text-brand-orange">Home</Link></li>
                  <li className="breadcrumb-item"><Link href="/accounts" className="text-decoration-none text-brand-orange">Accounts</Link></li>
                  <li className="breadcrumb-item active text-white-50" aria-current="page">Bookkeeping Services For Small and Medium Businesses in UK</li>
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
              <li className="breadcrumb-item active text-secondary">Bookkeeping Services For Small and Medium Businesses in UK</li>
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
                Bookkeeping doesn’t usually fail — it slowly slips out of control
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Bookkeeping rarely breaks all at once. It slips.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>A few invoices don’t get recorded. Some expenses are left for later. Bank transactions don’t fully match what’s in the system. At first, it doesn’t seem like a problem — the business is still running, payments are going through, and nothing feels urgent.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Then at some point, the numbers stop making sense.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>You look at your records and realise they no longer reflect what’s actually happening in the business. That’s when bookkeeping stops being a background task and becomes something that needs to be sorted properly.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This is where professional bookkeeping services in London and across the UK become relevant — not because bookkeeping is complicated, but because it needs to stay consistent as the business grows.</p>
            </div>
            <div className="col-lg-5">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img src="/images/2026/05/Services-Accounts-Bookkeeping-Bookkeeping-Services-UK.webp" alt="Bookkeeping doesn’t usually fail — it slowly slips out of control" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
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
                <img src="/images/2026/05/Services-Accounts-Bookkeeping-What-Bookkeeping-Actually-Does-in-a-Running-Business.webp" alt="Bookkeeping Services UK – Built Around Control, Not Just Recording" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>
            <div className="col-lg-7 order-1 order-lg-2">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Bookkeeping Services UK – Built Around Control, Not Just Recording
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Bookkeeping is often treated as a task — something to complete and move on from. In reality, it’s the foundation of how your business understands its own finances.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Our bookkeeping services are designed to keep your records:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>accurate</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>up to date</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>usable</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Whether you’re looking for outsourced bookkeeping services, online bookkeeping services, or local bookkeeping services in London, the goal is the same:
 <strong className="text-brand-dark">make sure your financial records stay clear at all times, not just at year-end.</strong></p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                What Bookkeeping Actually Does in a Running Business
              </h2>
              <h3 className="text-brand-orange fw-bold mb-3">It turns activity into something measurable</h3>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Every business generates financial activity constantly — sales, expenses, payments, transfers. Bookkeeping is what turns that activity into a structured record.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Without that structure, numbers exist, but they don’t tell you anything useful.</p>
              <h3 className="text-brand-orange fw-bold mb-3">It keeps everything aligned across your business</h3>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>When bookkeeping is consistent, everything else becomes easier to manage. VAT figures match transactions. Reports reflect actual performance. Decisions are based on real numbers.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>When it isn’t, problems don’t stay isolated — they spread into other areas.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>For example, inaccurate records often lead to issues when preparing <Link href="/taxation/vat-accountants" className="text-brand-orange fw-semibold text-decoration-none">VAT return accountants,</Link> where figures must match underlying transactions.</p>
            </div>
            <div className="col-lg-5">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img src="/images/2026/05/Services-Accounts-Bookkeeping-Where-Bookkeeping-Starts-to-Go-Wrong.webp" alt="What Bookkeeping Actually Does in a Running Business" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
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
                <img src="/images/2026/05/Services-Accounts-Bookkeeping-Bookkeeping-Services-for-Small.webp" alt="Where Bookkeeping Starts to Go Wrong" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>
            <div className="col-lg-7 order-1 order-lg-2">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Where Bookkeeping Starts to Go Wrong
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Most businesses don’t ignore bookkeeping — they delay it.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>It starts with small gaps:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>transactions not recorded on time</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>receipts not properly tracked</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>accounts not reconciled regularly</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>A common example is where bank transactions are imported but not properly categorised, leaving accounts appearing complete but inaccurate. Another is where invoices are recorded but payments are not matched, creating differences between reported income and actual cash received.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Over time, those gaps build into something bigger.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>By the time you need the numbers — whether for reporting, tax, or planning — the records require correction rather than use.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This is also where complications start appearing in areas like <Link href="/taxation/company-tax-return-accountants" className="text-brand-orange fw-semibold text-decoration-none">corporation tax services</Link>, where financial accuracy directly affects tax calculations.</p>
              <h3 className="text-brand-orange fw-bold mb-3">Why Bookkeeping Problems Are Usually Discovered Too Late</h3>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>By the time bookkeeping issues are noticed, they are rarely new. They have usually been building quietly over several periods, only becoming visible when reports are needed or deadlines approach.</p>
              <h3 className="text-brand-orange fw-bold mb-3">Bookkeeping Services for Small Businesses and Growing Companies</h3>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>For small businesses, bookkeeping usually starts simple. Fewer transactions, fewer systems, and more direct control.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>As the business grows, that changes.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>More activity means:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>more transactions to track</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>more accounts to manage</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>more reliance on accurate data</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>At that stage, bookkeeping becomes less about “keeping records” and more about <strong className="text-brand-dark">maintaining control over financial information</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Online Bookkeeping Services and Cloud-Based Systems
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Modern bookkeeping in the UK is increasingly handled through cloud-based systems.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Online bookkeeping services allow businesses to:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>access financial data in real time ● monitor transactions continuously ● maintain visibility without relying on manual updates</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This is particularly useful when using platforms like <Link href="/xero" className="text-brand-orange fw-semibold text-decoration-none">Xero</Link>or <Link href="/quickbooks" className="text-brand-orange fw-semibold text-decoration-none">QuickBooks</Link>, where bookkeeping feeds directly into reporting and financial oversight.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Working with an online bookkeeper ensures that data isn’t just entered — it’s structured correctly from the start.</p>
            </div>
            <div className="col-lg-5">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img src="/images/2024/01/pexels-photo-3756937.jpg" alt="Online Bookkeeping Services and Cloud-Based Systems" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
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
                <img src="/images/2026/05/Services-Accounts-Bookkeeping-Bookkeeping-and-Accounting.webp" alt="Outsourced Bookkeeping Services UK – Why Businesses Shift Away from In-House" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>
            <div className="col-lg-7 order-1 order-lg-2">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Outsourced Bookkeeping Services UK – Why Businesses Shift Away from In-House
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Outsourcing bookkeeping is rarely the first step — it usually happens after internal systems start falling behind.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Businesses typically move to outsourced bookkeeping services when:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>records are no longer consistent ● internal tracking becomes unreliable ● time is being spent fixing errors instead of maintaining accuracy</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Outsourced bookkeeping provides a structured approach where everything is handled continuously, rather than corrected later.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This also supports better visibility through <Link href="/accounts/management-accounts" className="text-brand-orange fw-semibold text-decoration-none">accurate management accounts services</Link>, allowing businesses to understand their position without relying on guesswork.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Bookkeeping and Accounting – Understanding the Difference
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Bookkeeping and accounting are closely related, but they don’t serve the same purpose.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Bookkeeping creates the records. Accounting uses those records.</p>
              <h3 className="text-brand-orange fw-bold mb-3">Key Differences</h3>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>When bookkeeping is consistent, accounting processes such as <Link href="/accounts/statutory-accounts" className="text-brand-orange fw-semibold text-decoration-none">preparing statutory</Link> <Link href="/accounts/statutory-accounts" className="text-brand-orange fw-semibold text-decoration-none">accounts</Link> preparation become far more straightforward. This distinction becomes critical when records are relied on for tax and reporting, not just internal tracking.</p>
            </div>
            <div className="col-lg-5">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img src="/images/2026/05/Services-Accounts-Bookkeeping-Bookkeeping-as-a-Foundation-for-Financial-Planning.webp" alt="Bookkeeping and Accounting – Understanding the Difference" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10">
              <div className="table-responsive rounded-4 shadow-sm border overflow-hidden">
                <table className="table table-hover align-middle mb-0 bg-white">
                  <thead style={{ background: '#1d3c45', color: '#fff' }}>
                    <tr>
                      <th className="py-3 px-4 text-white border-0 fw-bold">Area</th>
                      <th className="py-3 px-4 text-white border-0 fw-bold">Bookkeeping</th>
                      <th className="py-3 px-4 text-white border-0 fw-bold">Accounting</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Function</td>
                      <td className="py-3 px-4 text-secondary">Recording transactions</td>
                      <td className="py-3 px-4 text-secondary">Interpreting data</td>
                    </tr>
                    <tr className="border-bottom" style={{ background: '#fcfcfc' }}>
                      <td className="py-3 px-4 fw-bold text-brand-dark">Timing</td>
                      <td className="py-3 px-4 text-secondary">Ongoing</td>
                      <td className="py-3 px-4 text-secondary">Periodic</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Focus</td>
                      <td className="py-3 px-4 text-secondary">Accuracy of records</td>
                      <td className="py-3 px-4 text-secondary">Financial insight</td>
                    </tr>
                    <tr className="border-bottom" style={{ background: '#fcfcfc' }}>
                      <td className="py-3 px-4 fw-bold text-brand-dark">Outcome</td>
                      <td className="py-3 px-4 text-secondary">Organised data</td>
                      <td className="py-3 px-4 text-secondary">Business decisions</td>
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
                <img src="/images/2026/05/Services-Accounts-Bookkeeping-Why-Businesses-Use-Professional.webp" alt="Business Bookkeeping Services and Financial Accuracy" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>
            <div className="col-lg-7 order-1 order-lg-2">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Business Bookkeeping Services and Financial Accuracy
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Accurate bookkeeping affects more than just records.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Bookkeeping Services London – Supporting Compliance Without Pressure
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Compliance is rarely the immediate concern when bookkeeping starts slipping — but it quickly becomes one.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>It influences:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>how clearly you understand your business ● how confidently you make decisions ● how smoothly financial processes run</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>For example, where businesses operate <strong className="text-brand-dark"><Link href="/accounts/payroll-services" className="text-brand-orange fw-semibold text-decoration-none">structured payroll</Link> <Link href="/accounts/payroll-services" className="text-brand-orange fw-semibold text-decoration-none">services in UK</Link></strong>, accurate bookkeeping ensures that salary payments, expenses, and financial records remain aligned.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Even though payroll operates separately, inconsistencies in bookkeeping often create confusion across both areas.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>They struggle because:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>prepare VAT returns ● complete tax filings ● respond to HMRC queries</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>In more complex situations, such as <Link href="/taxation/tax-investigation-insurance" className="text-brand-orange fw-semibold text-decoration-none">tax investigation support</Link>, properly maintained records can significantly reduce the time and effort needed to resolve issues.</p>
            </div>
            <div className="col-lg-5">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img src="/images/2026/05/Services-Accounts-Bookkeeping-When-You-Should-Speak-to-a-Bookkeeper-scaled.webp" alt="Bookkeeping Services London – Supporting Compliance Without Pressure" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
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
                What’s Included in Our Bookkeeping Services
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Our bookkeeping services are designed to cover the full scope of financial record management. This is not just about recording transactions — it is about making sure the records reflect what is actually happening in your business at any point in time.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This includes:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>recording financial transactions</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>reconciling bank accounts</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>organising invoices and expenses</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>maintaining supporting documentation</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>preparing records for reporting and tax</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Everything is handled consistently so your records are always ready when needed.</p>
              <h3 className="text-brand-orange fw-bold mb-3">Bookkeeping as a Foundation for Financial Planning</h3>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Bookkeeping doesn’t just reflect the past — it supports future decisions.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>When records are accurate, businesses can work with:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>financial forecasting services</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>cashflow forecasting services</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This allows for better planning, clearer expectations, and more controlled growth.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Why Businesses Use Professional Bookkeeping Services UK
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Most bookkeeping problems don’t come from complexity — they come from inconsistency.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>When records are not maintained properly:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>numbers stop reflecting reality</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>reporting becomes unreliable</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>decisions become uncertain</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Professional bookkeeping services bring structure to the process, ensuring that everything is recorded correctly as it happens.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                When You Should Speak to a Bookkeeper
              </h2>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>when records no longer match bank activity</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>when VAT figures feel unclear</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>when reports don’t reflect reality</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>when time is spent fixing errors</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>At that stage, bookkeeping shifts from maintenance to correction.</p>
              <h3 className="text-brand-orange fw-bold mb-3">Speak to Taxaccolega Bookkeepers in London UK</h3>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>When bookkeeping issues build over time, correcting them often means revisiting multiple periods — not just bringing records up to date.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>If your records no longer feel clear or consistent, it’s usually a sign they need to be handled more systematically.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Whether you need:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>outsourced bookkeeping services</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>online bookkeeping support</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>local bookkeepers in London</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>getting things organised early prevents problems from building later. At that stage, addressing bookkeeping early prevents problems from compounding further.</p>
            </div>
          </div>
        </div>
      </section>

      <Partners />

      <ReviewsSlider />

      <ContactForm source="BookkeepingServices" />

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
                      <span>What do bookkeeping services include?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 0 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 0 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        Bookkeeping services include recording financial transactions, reconciling accounts, maintaining records, and preparing data for reporting and tax purposes.
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
                      <span>How much do bookkeeping services cost in the UK?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 1 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 1 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        Bookkeeping service fees vary depending on business size, transaction volume, and service level. Some businesses use fixed monthly packages, while others pay based on workload.
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
                      <span>Do I need bookkeeping services for a small business?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 2 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 2 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        Yes. Small business bookkeeping services help maintain accurate records, making it easier to manage tax, reporting, and financial decisions.
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
                      <span>What is the difference between bookkeeping and accounting?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 3 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 3 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        Bookkeeping involves recording financial activity, while accounting involves analysing and interpreting that information for decision-making.
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

export default BookkeepingServices;
