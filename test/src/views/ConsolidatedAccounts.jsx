"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Partners from '../components/Partners';
import ReviewsSlider from '../components/ReviewsSlider';
import AccountsLinksBar from '../components/AccountsLinksBar';
import { CheckIcon } from '../components/accounts/AccountsPageIcons';

const ConsolidatedAccounts = () => {
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
      <header className="position-relative text-white overflow-hidden py-5" style={{ backgroundImage: 'linear-gradient(rgba(29, 60, 69, 0.72), rgba(29, 60, 69, 0.82)), url(/images/2026/05/Consolidated-Accounts-scaled.webp)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '380px' }}>
        <div className="position-absolute w-100 h-100" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(210, 96, 26, 0.15) 0%, transparent 60%)', top: 0, left: 0, zIndex: 1 }}></div>
        <div className="container position-relative py-4" style={{ zIndex: 2, paddingTop: '5rem' }}>
          <div className="row g-4 align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <span className="text-uppercase small tracking-wider fw-bold mb-2 d-inline-block text-brand-orange" style={{ letterSpacing: '2px' }}>
                Accounts Services
              </span>
              <h1 className="display-4 fw-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Consolidated Accounts UK – Consolidation Accounting & Financial Statements
              </h1>
              <p className="lead text-white-50 mb-4" style={{ maxWidth: '680px', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Streamlined Consolidated Accounts: Clarity and Precision for Your Group Finances at Taxaccolega.
              </p>
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mb-4">
                <a href="#contact-block" className="btn btn-brand px-4 py-2 shadow">CONTACT US</a>
                <a href="/schedule-a-phone-call-or-video-meeting" className="btn btn-outline-light px-4 py-2">Schedule a Call</a>
              </div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0 small" style={{ background: 'transparent' }}>
                  <li className="breadcrumb-item"><Link href="/" className="text-decoration-none text-brand-orange">Home</Link></li>
                  <li className="breadcrumb-item"><Link href="/accounts" className="text-decoration-none text-brand-orange">Accounts</Link></li>
                  <li className="breadcrumb-item active text-white-50" aria-current="page">Consolidated Accounts UK – Consolidation Accounting & Financial Statements</li>
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
              <li className="breadcrumb-item active text-secondary">Consolidated Accounts UK – Consolidation Accounting & Financial Statements</li>
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
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Streamlined Consolidated Accounts: Clarity and Precision for Your Group Finances at Taxaccolega.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>A group structure usually starts with a practical reason.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>A second company is created to separate risk. Another entity is introduced for property ownership. A trading business expands into a different activity. A holding company is added for investment or long-term planning.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>At first, everything still feels visible.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Each company has its own bank account, its own bookkeeping, <Link href="/accounts/payroll-services" className="text-brand-orange fw-semibold text-decoration-none">its own payroll</Link>, its own statutory accounts. Individually, the businesses still appear manageable.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Then the group grows.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Money starts moving between entities. One company invoices another. Shared costs are allocated differently across businesses. Directors move funds between accounts to support operations. Assets sit in one company while revenue flows through another.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That is usually the point where business owners stop looking at companies separately and start asking a different question:</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>“What does the group actually look like as one business?”</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That question is where consolidated accounts begin.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Not as a technical exercise. Not as an accounting formality. But as the only reliable way to understand how a connected group is really performing.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>At Taxaccolega, we prepare consolidated accounts and consolidated financial statements for UK groups that need clearer reporting, stronger financial visibility, and properly aligned group-level reporting across connected entities.</p>
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
                Consolidated Accounts UK – What Consolidation Actually Means
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Consolidated accounts combine multiple companies into one reporting position.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Instead of viewing each company separately, consolidation accounting restructures the figures so the group can be seen as a single economic entity.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That includes:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>consolidating income and expenses</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>combining assets and liabilities</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>removing intercompany balances</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>eliminating internal transactions</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>adjusting for ownership structures</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>reflecting minority interests correctly</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The purpose is not simply combining numbers.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The purpose is removing distortion.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Without consolidation, the same money can appear multiple times across the group. Revenue may look overstated. Costs may appear duplicated. Intercompany balances may inflate assets or liabilities artificially.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Proper consolidated financial reporting removes that noise.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>It shows what the group actually looks like externally, not internally.</p>
            </div>
            <div className="col-lg-5">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img src="/images/2024/11/edit.1-3.jpg" alt="Consolidated Accounts UK – What Consolidation Actually Means" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
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
                <img src="/images/2024/11/edit.2-3.jpg" alt="Why Groups Become Difficult to Read Without Consolidation" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>
            <div className="col-lg-7 order-1 order-lg-2">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Why Groups Become Difficult to Read Without Consolidation
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The problem with multi-company structures is not usually accounting volume.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>It is fragmentation.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Each entity may technically maintain accurate records, yet the group still becomes difficult to interpret because:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>transactions overlap</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>balances interact</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>costs are shared</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>revenue flows between entities</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>ownership structures influence reporting</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>A profitable subsidiary may support another entity absorbing operational cost. A holding company may hold debt while a trading company generates revenue. Intercompany loans may move constantly between businesses.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Viewed separately, the numbers may appear inconsistent.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Viewed properly through consolidated accounts, the structure starts making sense.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This is why consolidation becomes increasingly important as groups evolve.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                What Are Consolidated Financial Statements?
              </h2>
              <h3 className="text-brand-orange fw-bold mb-3">Consolidation is based on control, not just ownership</h3>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>One of the biggest misconceptions around consolidated accounts UK is assuming consolidation depends entirely on shareholding percentages.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>In reality, consolidation is driven by control.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>If one entity controls another through:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>ownership</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>voting rights</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>operational authority</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>decision-making influence</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>then consolidated financial statements may be required under UK reporting rules.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This is where many businesses unintentionally underestimate their reporting obligations.</p>
              <h3 className="text-brand-orange fw-bold mb-3">Group thresholds still need technical assessment</h3>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Some groups may qualify for consolidation exemptions depending on:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>turnover</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>balance sheet totals</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>employee numbers</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>group structure size</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>But thresholds are not always as straightforward as business owners expect.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>A group may appear exempt initially while still crossing reporting limits after adjustments, acquisitions, or structural changes.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That is why consolidated accounts requirements should be reviewed carefully rather than assumed informally.</p>
            </div>
            <div className="col-lg-5">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img src="/images/2024/11/edit.3-2.webp" alt="What Are Consolidated Financial Statements?" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
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
                <img src="/images/2024/11/money-bank-card-keyboard_144627-47420.jpg" alt="What Makes Consolidation Accounting Difficult in Practice" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>
            <div className="col-lg-7 order-1 order-lg-2">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                What Makes Consolidation Accounting Difficult in Practice
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Consolidation accounting rarely becomes difficult because of arithmetic.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>It becomes difficult because companies rarely operate identically.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Different entities inside the same group may:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>record transactions differently</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>close periods at different stages</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>apply slightly different accounting treatment</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>recognise income at different timings</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>classify balances inconsistently</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That is where accounts consolidation becomes investigative rather than mechanical.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The work is not simply merging figures together.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The work is understanding why the figures differ before consolidation adjustments are applied.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This is also why <Link href="/accounts/bookkeeping-services" className="text-brand-orange fw-semibold text-decoration-none">accurate bookkeeping services</Link> and structured <Link href="/accounts/statutory-accounts" className="text-brand-orange fw-semibold text-decoration-none">statutory accounts</Link> <Link href="/accounts/statutory-accounts" className="text-brand-orange fw-semibold text-decoration-none">preparation</Link> matter heavily within group structures. Weak underlying records create weak consolidation foundations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Core Structure Within Consolidated Financial Statements
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This section belongs here because understanding the structure first makes later consolidation adjustments easier to follow.</p>
            </div>
            <div className="col-lg-5">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img src="/images/2024/11/edit.4-2.jpg" alt="Core Structure Within Consolidated Financial Statements" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10">
              <div className="table-responsive rounded-4 shadow-sm border overflow-hidden">
                <table className="table table-hover align-middle mb-0 bg-white">
                  <thead style={{ background: '#1d3c45', color: '#fff' }}>
                    <tr>
                      <th className="py-3 px-4 text-white border-0 fw-bold">Consolidation Component</th>
                      <th className="py-3 px-4 text-white border-0 fw-bold">Purpose Within Group Reporting</th>
                      <th className="py-3 px-4 text-white border-0 fw-bold">Why It Matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Consolidated income statement</td>
                      <td className="py-3 px-4 text-secondary">Combines group-wide income and costs</td>
                      <td className="py-3 px-4 text-secondary">Shows true group performance</td>
                    </tr>
                    <tr className="border-bottom" style={{ background: '#fcfcfc' }}>
                      <td className="py-3 px-4 fw-bold text-brand-dark">Consolidated balance sheet</td>
                      <td className="py-3 px-4 text-secondary">Combines assets and liabilities</td>
                      <td className="py-3 px-4 text-secondary">Reflects actual group position</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Intercompany eliminations</td>
                      <td className="py-3 px-4 text-secondary">Removes internal transactions</td>
                      <td className="py-3 px-4 text-secondary">Prevents duplication</td>
                    </tr>
                    <tr className="border-bottom" style={{ background: '#fcfcfc' }}>
                      <td className="py-3 px-4 fw-bold text-brand-dark">Non-controlling interests</td>
                      <td className="py-3 px-4 text-secondary">Separates minority ownership</td>
                      <td className="py-3 px-4 text-secondary">Clarifies group ownership</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Consolidated statement of financial position</td>
                      <td className="py-3 px-4 text-secondary">Shows overall financial standing</td>
                      <td className="py-3 px-4 text-secondary">Supports reporting accuracy</td>
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
                <img src="/images/2024/11/magnifying-glass-fallen-coins-infographic-template-1-scaled.jpg" alt="Intercompany Transactions – Where Most Consolidation Problems Begin" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>
            <div className="col-lg-7 order-1 order-lg-2">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Intercompany Transactions – Where Most Consolidation Problems Begin
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Intercompany activity is usually where consolidated accounts become technically sensitive.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>One company records a sale.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Another records a purchase.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>One entity shows a receivable.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Another records a payable.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>On paper, those figures should cancel each other exactly.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>In reality, they often do not.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The mismatch may come from:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>timing differences</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>currency treatment</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>invoice classification</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>partially recorded transactions</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>manual bookkeeping adjustments</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>inconsistent accounting periods</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That is why consolidation accounting software alone rarely solves the issue.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Software can process entries.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>It cannot explain why balances differ.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That part still requires structured investigation and reconciliation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Consolidated Accounts and Management Visibility
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>One of the biggest advantages of consolidated management accounts is visibility.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Without group-level reporting, business owners often make decisions using fragmented information.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>One company may appear highly profitable while another carries most of the operational cost. Cash movement may appear healthy inside one entity while pressure quietly builds elsewhere within the structure.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Consolidated reporting changes how decisions are made because it shows:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>total group profitability</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>group cash exposure</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>group debt position</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>operational dependency between entities</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>overall performance trends</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This connects naturally with:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>management accounts</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>financial forecasting</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>cashflow forecasting</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Because forecasting becomes far more reliable when the group is viewed collectively rather than in disconnected pieces.</p>
            </div>
            <div className="col-lg-5">
              <div className="p-2 border rounded-4 shadow-lg bg-white">
                <img src="/images/2024/11/edit.4.jpg" alt="Consolidated Accounts and Management Visibility" className="img-fluid rounded-3" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading="lazy" />
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
                Where Consolidation Usually Starts Breaking Down
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This authority section matters because it demonstrates where real-world consolidation failures happen operationally.</p>
            </div>
          </div>
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10">
              <div className="table-responsive rounded-4 shadow-sm border overflow-hidden">
                <table className="table table-hover align-middle mb-0 bg-white">
                  <thead style={{ background: '#1d3c45', color: '#fff' }}>
                    <tr>
                      <th className="py-3 px-4 text-white border-0 fw-bold">Consolidation Issue</th>
                      <th className="py-3 px-4 text-white border-0 fw-bold">What Happens Operationally</th>
                      <th className="py-3 px-4 text-white border-0 fw-bold">Likely Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Intercompany balances differ</td>
                      <td className="py-3 px-4 text-secondary">Accounts do not reconcile</td>
                      <td className="py-3 px-4 text-secondary">Reporting delays</td>
                    </tr>
                    <tr className="border-bottom" style={{ background: '#fcfcfc' }}>
                      <td className="py-3 px-4 fw-bold text-brand-dark">Accounting policies inconsistent</td>
                      <td className="py-3 px-4 text-secondary">Entities treat transactions differently</td>
                      <td className="py-3 px-4 text-secondary">Distorted group figures</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Internal sales remain unadjusted</td>
                      <td className="py-3 px-4 text-secondary">Revenue duplicated across entities</td>
                      <td className="py-3 px-4 text-secondary">Inflated turnover</td>
                    </tr>
                    <tr className="border-bottom" style={{ background: '#fcfcfc' }}>
                      <td className="py-3 px-4 fw-bold text-brand-dark">Timing differences unresolved</td>
                      <td className="py-3 px-4 text-secondary">Transactions appear in different periods</td>
                      <td className="py-3 px-4 text-secondary">Misaligned statements</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-3 px-4 fw-bold text-brand-dark">Weak entity bookkeeping</td>
                      <td className="py-3 px-4 text-secondary">Missing support for balances</td>
                      <td className="py-3 px-4 text-secondary">Unreliable consolidation</td>
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
                What Our Consolidated Accounts Services Actually Improve
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>This is not simply about combining figures across entities. It is about creating group-level financial visibility that remains reliable as the structure evolves. Basic consolidation work usually focuses on producing final group accounts.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Our approach focuses on improving the structure behind the reporting itself.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>That includes:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>aligning accounting treatment across entities</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>reviewing intercompany activity earlier</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>reducing reconciliation pressure</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>improving consolidation consistency</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>structuring clearer group-level reporting</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>identifying mismatches before year-end</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>supporting ongoing group reporting visibility</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The practical result is not simply “a completed set of consolidated financial statements.”</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>It is a reporting process that remains usable as the group continues growing.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light border-top border-bottom border-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Speak to Consolidated Accounts Accountants in London UK
              </h2>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>If your group structure has reached the point where individual company accounts no longer explain the wider financial picture clearly, consolidated accounts become essential.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>Taxaccolega supports UK groups with:</p>
              <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
                <li className="d-flex align-items-start"><CheckIcon /><span>consolidated accounts preparation</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>consolidated financial statements</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>intercompany reconciliation</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>consolidation accounting adjustments</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>consolidated management accounts</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>group-level reporting support</span></li>
                <li className="d-flex align-items-start"><CheckIcon /><span>financial reporting alignment across entities</span></li>
              </ul>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>The goal is not simply combining companies together on paper.</p>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>It is making sure the financial position of the group reflects operational reality — clearly, accurately, and consistently.</p>
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
                      <span>What are consolidated accounts?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 0 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 0 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        Consolidated accounts combine multiple connected companies into one set of financial statements showing the group as a single entity.
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
                      <span>When are consolidated accounts required in the UK?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 1 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 1 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        They are generally required when one company controls another, subject to group thresholds and reporting exemptions.
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
                      <span>What are consolidated financial statements?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 2 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 2 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        Consolidated financial statements include the group income statement, consolidated balance sheet, and supporting disclosures covering the group collectively.
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
                      <span>Why are intercompany eliminations important?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 3 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 3 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        They remove internal transactions and balances so revenue, costs, assets, and liabilities are not overstated.
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
                      <span>Do all company groups need consolidated accounts?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 4 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 4 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        No. Some groups may qualify for exemptions, but this should be reviewed properly against UK reporting requirements.
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
                      <span>How do consolidated accounts differ from statutory accounts?</span>
                      <i className={`fas fa-chevron-${activeFaqIndex === 5 ? 'up' : 'down'} ms-3 text-brand-orange`}></i>
                    </button>
                    {activeFaqIndex === 5 && (
                      <div className="p-4 text-secondary border-top bg-light" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                        Statutory accounts report individual companies separately. Consolidated accounts report the overall financial position of the group together.
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

export default ConsolidatedAccounts;
