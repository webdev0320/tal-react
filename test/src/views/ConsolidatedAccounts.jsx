"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AccountsLinksBar from '../components/AccountsLinksBar';
import ReviewsSlider from '../components/ReviewsSlider';

const ConsolidatedAccounts = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Proposal request submitted!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-white">
      <AccountsLinksBar />

      {/* ── HERO SECTION WITH SIDEBAR OVERLAP ── */}
      <header className="position-relative text-white overflow-hidden py-5" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)', minHeight: '380px' }}>
        <div className="position-absolute w-100 h-100" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(210, 96, 26, 0.15) 0%, transparent 60%)', top: 0, left: 0, zIndex: 1 }}></div>
        <div className="container position-relative py-4" style={{ zIndex: 2 }}>
          <div className="row g-4 align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <span className="text-uppercase small tracking-wider fw-bold mb-2 d-inline-block text-brand-orange" style={{ letterSpacing: '2px' }}>
                Consolidation Specialists
              </span>
              <h1 className="display-4 fw-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Consolidated Accounts UK – Consolidation Accounting & Financial Statements
              </h1>
              <p className="lead text-white-50 mb-4" style={{ maxWidth: '680px', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Streamlined Consolidated Accounts: Clarity and Precision for Your Group Finances at Taxaccolega.
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
                  <li className="breadcrumb-item active text-white-50" aria-current="page">Consolidated Accounts</li>
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
              <li className="breadcrumb-item active text-secondary">Consolidated Accounts</li>
            </ol>
          </nav>
        </div>
      </div>
      
      <main className="py-5">
        <div className="container">
          <section className="mb-5">
            <p>A group structure usually starts with a practical reason.</p>
            <p>A second company is created to separate risk. Another entity is introduced for property ownership. A trading business expands into a different activity. A holding company is added for investment or long-term planning.</p>
            <p>At first, everything still feels visible.</p>
            <p>Each company has its own bank account, its own bookkeeping, its own payroll, its own statutory accounts. Individually, the businesses still appear manageable.</p>
            <p>Then the group grows.</p>
            <p>Money starts moving between entities. One company invoices another. Shared costs are allocated differently across businesses. Directors move funds between accounts to support operations. Assets sit in one company while revenue flows through another.</p>
            <p>That is usually the point where business owners stop looking at companies separately and start asking a different question:</p>
            <p className="fw-bold">“What does the group actually look like as one business?”</p>
            <p>That question is where consolidated accounts begin.</p>
            <p>Not as a technical exercise. Not as an accounting formality. But as the only reliable way to understand how a connected group is really performing.</p>
            <p>At Taxaccolega, we prepare consolidated accounts and consolidated financial statements for UK groups that need clearer reporting, stronger financial visibility, and properly aligned group-level reporting across connected entities.</p>
          </section>
          
          <section className="mb-5">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2 className="text-deepTeal">Consolidated Accounts UK – What Consolidation Actually Means</h2>
                <p>Consolidated accounts combine multiple companies into one reporting position.</p>
                <p>Instead of viewing each company separately, consolidation accounting restructures the figures so the group can be seen as a single economic entity.</p>
                <p>That includes:</p>
                <ul>
                  <li>consolidating income and expenses</li>
                  <li>combining assets and liabilities</li>
                  <li>removing intercompany balances</li>
                  <li>eliminating internal transactions</li>
                  <li>adjusting for ownership structures</li>
                  <li>reflecting minority interests correctly</li>
                </ul>
                <p>The purpose is not simply combining numbers.</p>
                <p>The purpose is removing distortion.</p>
                <p>Without consolidation, the same money can appear multiple times across the group. Revenue may look overstated. Costs may appear duplicated. Intercompany balances may inflate assets or liabilities artificially.</p>
                <p>Proper consolidated financial reporting removes that noise.</p>
                <p>It shows what the group actually looks like externally, not internally.</p>
              </div>
              <div className="col-md-6">
                <div className="bg-secondary rounded p-5 text-center text-white">Placeholder Image</div>
              </div>
            </div>
          </section>

          <section className="mb-5">
            <h2 className="text-deepTeal">Why Groups Become Difficult to Read Without Consolidation</h2>
            <p>The problem with multi-company structures is not usually accounting volume.</p>
            <p>It is fragmentation.</p>
            <p>Each entity may technically maintain accurate records, yet the group still becomes difficult to interpret because:</p>
            <ul>
              <li>transactions overlap</li>
              <li>balances interact</li>
              <li>costs are shared</li>
              <li>revenue flows between entities</li>
              <li>ownership structures influence reporting</li>
            </ul>
            <p>A profitable subsidiary may support another entity absorbing operational cost. A holding company may hold debt while a trading company generates revenue. Intercompany loans may move constantly between businesses.</p>
            <p>Viewed separately, the numbers may appear inconsistent.</p>
            <p>Viewed properly through consolidated accounts, the structure starts making sense.</p>
            <p>This is why consolidation becomes increasingly important as groups evolve.</p>
          </section>
          
          <section className="mb-5">
            <h2 className="text-deepTeal">What Are Consolidated Financial Statements?</h2>
            <h4 className="text-brand-orange">Consolidation is based on control, not just ownership</h4>
            <p>One of the biggest misconceptions around consolidated accounts UK is assuming consolidation depends entirely on shareholding percentages.</p>
            <p>In reality, consolidation is driven by control.</p>
            <p>If one entity controls another through:</p>
            <ul>
              <li>ownership</li>
              <li>voting rights</li>
              <li>operational authority</li>
              <li>decision-making influence</li>
            </ul>
            <p>then consolidated financial statements may be required under UK reporting rules.</p>
            <p>This is where many businesses unintentionally underestimate their reporting obligations.</p>
          </section>

          <section className="mb-5">
            <h3 className="text-deepTeal">Group thresholds still need technical assessment</h3>
            <p>Some groups may qualify for consolidation exemptions depending on:</p>
            <ul>
              <li>turnover</li>
              <li>balance sheet totals</li>
              <li>employee numbers</li>
              <li>group structure size</li>
            </ul>
            <p>But thresholds are not always as straightforward as business owners expect.</p>
            <p>A group may appear exempt initially while still crossing reporting limits after adjustments, acquisitions, or structural changes.</p>
            <p>That is why consolidated accounts requirements should be reviewed carefully rather than assumed informally.</p>
          </section>
          
          <section className="mb-5">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2 className="text-deepTeal">What Makes Consolidation Accounting Difficult in Practice</h2>
                <p>Consolidation accounting rarely becomes difficult because of arithmetic.</p>
                <p>It becomes difficult because companies rarely operate identically.</p>
                <p>Different entities inside the same group may:</p>
                <ul>
                  <li>record transactions differently</li>
                  <li>close periods at different stages</li>
                  <li>apply slightly different accounting treatment</li>
                  <li>recognise income at different timings</li>
                  <li>classify balances inconsistently</li>
                </ul>
                <p>That is where accounts consolidation becomes investigative rather than mechanical.</p>
                <p>The work is not simply merging figures together.</p>
                <p>The work is understanding why the figures differ before consolidation adjustments are applied.</p>
                <p>This is also why accurate bookkeeping services and structured statutory accounts preparation matter heavily within group structures. Weak underlying records create weak consolidation foundations.</p>
              </div>
              <div className="col-md-6">
                <div className="bg-secondary rounded p-5 text-center text-white">Placeholder Image</div>
              </div>
            </div>
          </section>
          
          <section className="mb-5">
            <h3 className="text-center mb-4">Core Structure Within Consolidated Financial Statements</h3>
            <div className="table-responsive">
              <table className="table table-bordered text-center">
                <thead>
                  <tr><th>Consolidation Component</th><th>Purpose Within Group Reporting</th><th>Why It Matters</th></tr>
                </thead>
                <tbody>
                  <tr><td>Consolidated income statement</td><td>Combines group-wide income and costs</td><td>Shows true group performance</td></tr>
                  <tr><td>Consolidated balance sheet</td><td>Combines assets and liabilities</td><td>Reflects actual group position</td></tr>
                  <tr><td>Intercompany eliminations</td><td>Removes internal transactions</td><td>Prevents duplication</td></tr>
                  <tr><td>Non-controlling interests</td><td>Separates minority ownership</td><td>Clarifies group ownership</td></tr>
                  <tr><td>Consolidated statement of financial position</td><td>Shows overall financial standing</td><td>Supports reporting accuracy</td></tr>
                </tbody>
              </table>
            </div>
            <p className="small text-muted"><em>This section belongs here because understanding the structure first makes later consolidation adjustments easier to follow.</em></p>
          </section>

          <section className="mb-5">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2 className="text-deepTeal">Intercompany Transactions – Where Most Consolidation Problems Begin</h2>
                <p>Intercompany activity is usually where consolidated accounts become technically sensitive.</p>
                <p>One company records a sale.</p>
                <p>Another records a purchase.</p>
                <p>One entity shows a receivable.</p>
                <p>Another records a payable.</p>
                <p>On paper, those figures should cancel each other exactly.</p>
                <p>In reality, they often do not.</p>
                <p>The mismatch may come from:</p>
                <ul>
                  <li>timing differences</li>
                  <li>currency treatment</li>
                  <li>invoice classification</li>
                  <li>partially recorded transactions</li>
                  <li>manual bookkeeping adjustments</li>
                  <li>inconsistent accounting periods</li>
                </ul>
                <p>That is why consolidation accounting software alone rarely solves the issue.</p>
                <p>Software can process entries.</p>
                <p>It cannot explain why balances differ.</p>
                <p>That part still requires structured investigation and reconciliation.</p>
              </div>
              <div className="col-md-6">
                <div className="bg-secondary rounded p-5 text-center text-white">Placeholder Image</div>
              </div>
            </div>
          </section>

          <section className="mb-5">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2 className="text-deepTeal">Consolidated Accounts and Management Visibility</h2>
                <p>One of the biggest advantages of consolidated management accounts is visibility.</p>
                <p>Without group-level reporting, business owners often make decisions using fragmented information.</p>
                <p>One company may appear highly profitable while another carries most of the operational cost. Cash movement may appear healthy inside one entity while pressure quietly builds elsewhere within the structure.</p>
                <p>Consolidated reporting changes how decisions are made because it shows:</p>
                <ul>
                  <li>total group profitability</li>
                  <li>group cash exposure</li>
                  <li>group debt position</li>
                  <li>operational dependency between entities</li>
                  <li>overall performance trends</li>
                </ul>
                <p>This connects naturally with:</p>
                <ul>
                  <li>management accounts</li>
                  <li>financial forecasting</li>
                  <li>cashflow forecasting</li>
                </ul>
                <p>Because forecasting becomes far more reliable when the group is viewed collectively rather than in disconnected pieces.</p>
              </div>
              <div className="col-md-6">
                <div className="bg-secondary rounded p-5 text-center text-white">Placeholder Image</div>
              </div>
            </div>
          </section>

          <section className="mb-5">
            <h3 className="text-center mb-4">Where Consolidation Usually Starts Breaking Down</h3>
            <div className="table-responsive">
              <table className="table table-bordered text-center">
                <thead>
                  <tr><th>Consolidation Issue</th><th>What Happens Operationally</th><th>Likely Result</th></tr>
                </thead>
                <tbody>
                  <tr><td>Intercompany balances differ</td><td>Accounts do not reconcile</td><td>Reporting delays</td></tr>
                  <tr><td>Accounting policies inconsistent</td><td>Entities treat transactions differently</td><td>Distorted group figures</td></tr>
                  <tr><td>Internal sales remain unadjusted</td><td>Revenue duplicated across entities</td><td>Inflated turnover</td></tr>
                  <tr><td>Timing differences unresolved</td><td>Transactions appear in different periods</td><td>Misaligned statements</td></tr>
                  <tr><td>Weak entity bookkeeping</td><td>Missing support for balances</td><td>Unreliable consolidation</td></tr>
                </tbody>
              </table>
            </div>
            <p className="small text-muted"><em>This authority section matters because it demonstrates where real-world consolidation failures happen operationally.</em></p>
          </section>
          
          <section className="mb-5">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2 className="text-deepTeal">Insight Section: Most Consolidation Problems Exist Long Before Consolidation Begins</h2>
                <p>A common assumption is that consolidation errors happen during year-end reporting.</p>
                <p>Usually, they start months earlier.</p>
                <p>A transaction is recorded differently between entities.</p>
                <p>An intercompany balance is partially reconciled but never fully cleared.</p>
                <p>One company changes accounting treatment without aligning the rest of the group.</p>
                <p>A director loan moves informally between businesses without structured tracking.</p>
                <p>None of these problems appear urgent individually.</p>
                <p>But over time, they accumulate quietly beneath the reporting structure.</p>
                <p>Then year-end arrives.</p>
                <p>At that point, consolidation becomes less about preparing consolidated accounts and more about repairing inconsistencies across the group.</p>
                <p>That is why the strongest group reporting structures do not begin at year-end.</p>
                <p>They begin during the year through consistent accounting treatment, aligned bookkeeping, and structured intercompany controls across all connected entities.</p>
              </div>
              <div className="col-md-6">
                <div className="bg-secondary rounded p-5 text-center text-white">Placeholder Image</div>
              </div>
            </div>
          </section>

          <section className="mb-5">
            <h2 className="text-deepTeal">Consolidated Accounts and Corporation Tax Planning</h2>
            <p>Although each company is still assessed separately for corporation tax purposes, consolidated financial reporting often highlights wider structural issues affecting the group.</p>
            <p>Group-level visibility can reveal:</p>
            <ul>
              <li>inefficient transaction structures</li>
              <li>unbalanced cost allocation</li>
              <li>unnecessary intercompany exposure</li>
              <li>profit concentration issues</li>
              <li>inefficient ownership structures</li>
            </ul>
            <p>That creates natural links between consolidated accounts and:</p>
            <ul>
              <li>corporation tax planning</li>
              <li>tax advisory services</li>
              <li>management reporting</li>
              <li>financial planning</li>
            </ul>
            <p>Because once the group becomes visible properly, strategic decisions become clearer as well.</p>
          </section>

          <section className="mb-5">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2 className="text-deepTeal">What Our Consolidated Accounts Services Actually Improve</h2>
                <p>This is not simply about combining figures across entities. It is about creating group-level financial visibility that remains reliable as the structure evolves. Basic consolidation work usually focuses on producing final group accounts.</p>
                <p>Our approach focuses on improving the structure behind the reporting itself.</p>
                <p>That includes:</p>
                <ul>
                  <li>aligning accounting treatment across entities</li>
                  <li>reviewing intercompany activity earlier</li>
                  <li>reducing reconciliation pressure</li>
                  <li>improving consolidation consistency</li>
                  <li>structuring clearer group-level reporting</li>
                  <li>identifying mismatches before year-end</li>
                  <li>supporting ongoing group reporting visibility</li>
                </ul>
                <p>The practical result is not simply “a completed set of consolidated financial statements.”</p>
                <p>It is a reporting process that remains usable as the group continues growing.</p>
              </div>
              <div className="col-md-6">
                <div className="bg-secondary rounded p-5 text-center text-white">Placeholder Image</div>
              </div>
            </div>
          </section>

          <section className="mb-5">
            <h2 className="text-deepTeal">When Businesses Should Move to Structured Consolidation</h2>
            <p>Businesses usually delay structured consolidation longer than they should.</p>
            <p>The turning point normally arrives when:</p>
            <ul>
              <li>multiple entities trade actively together</li>
              <li>intercompany transactions increase</li>
              <li>directors struggle to interpret group position</li>
              <li>reporting becomes inconsistent</li>
              <li>forecasting stops aligning across entities</li>
              <li>management decisions rely on incomplete information</li>
            </ul>
            <p>The longer consolidation is delayed, the more historic adjustments accumulate underneath the structure.</p>
            <p>That increases:</p>
            <ul>
              <li>reporting complexity</li>
              <li>reconciliation time</li>
              <li>correction work</li>
              <li>compliance risk</li>
            </ul>
            <p>Early consolidation creates clarity.</p>
            <p>Late consolidation usually becomes reconstruction.</p>
          </section>

          <section className="mb-5">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2 className="text-deepTeal">Speak to Consolidated Accounts Accountants in London UK</h2>
                <p>If your group structure has reached the point where individual company accounts no longer explain the wider financial picture clearly, consolidated accounts become essential.</p>
                <p>Taxaccolega supports UK groups with:</p>
                <ul>
                  <li>consolidated accounts preparation</li>
                  <li>consolidated financial statements</li>
                  <li>intercompany reconciliation</li>
                  <li>consolidation accounting adjustments</li>
                  <li>consolidated management accounts</li>
                  <li>group-level reporting support</li>
                  <li>financial reporting alignment across entities</li>
                </ul>
                <p>The goal is not simply combining companies together on paper.</p>
                <p>It is making sure the financial position of the group reflects operational reality — clearly, accurately, and consistently.</p>
              </div>
              <div className="col-md-6">
                <div className="bg-secondary rounded p-5 text-center text-white">Placeholder Image</div>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="py-5 bg-light">
            <div className="container">
              <h3>FAQs on Consolidated Accounts</h3>
              {[
                { q: "What are consolidated accounts?", a: "Consolidated accounts combine multiple connected companies into one set of financial statements showing the group as a single entity." },
                { q: "When are consolidated accounts required in the UK?", a: "They are generally required when one company controls another, subject to group thresholds and reporting exemptions." },
                { q: "What are consolidated financial statements?", a: "Consolidated financial statements include the group income statement, consolidated balance sheet, and supporting disclosures covering the group collectively." },
                { q: "Why are intercompany eliminations important?", a: "They remove internal transactions and balances so revenue, costs, assets, and liabilities are not overstated." },
                { q: "Do all company groups need consolidated accounts?", a: "No. Some groups may qualify for exemptions, but this should be reviewed properly against UK reporting requirements." },
                { q: "How do consolidated accounts differ from statutory accounts?", a: "Statutory accounts report individual companies separately. Consolidated accounts report the overall financial position of the group together." }
              ].map((faq, idx) => (
                <div key={idx} className="accordion-item border rounded mb-2">
                  <button className="btn w-100 text-start p-3" onClick={() => setActiveFaqIndex(activeFaqIndex === idx ? null : idx)}>
                    {faq.q}
                  </button>
                  {activeFaqIndex === idx && <div className="p-3 bg-white">{faq.a}</div>}
                </div>
              ))}
            </div>
          </section>

          {/* Ratings & Contact */}
          <section className="py-5" id="contact-block">
            <div className="container">
              <ReviewsSlider />
              <div className="row mt-5">
                <div className="col-md-6">
                  <h3>Request a Tailored Consolidated Accounts Proposal</h3>
                  <form onSubmit={handleFormSubmit}>
                    <input className="form-control mb-2" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" required />
                    <input className="form-control mb-2" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" required />
                    <textarea className="form-control mb-2" name="message" value={formData.message} onChange={handleInputChange} placeholder="Message" required></textarea>
                    <button className="btn btn-brand">Submit Details</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

    </div>
  );
};

export default ConsolidatedAccounts;