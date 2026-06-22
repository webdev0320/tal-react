"use client";
import React, { useState } from 'react';
import Link from '../components/NextLinkShim';
import Section from '../components/Layout/Section';
import TwoColumnGrid from '../components/Layout/TwoColumnGrid';
import TaxationLinksBar from '../components/TaxationLinksBar';
import Footer from '../components/Footer';

const PlaceholderImage = () => <div className="bg-gray-200 h-64 w-full flex items-center justify-center text-gray-500">Image Placeholder</div>;

const OrangeBulletList = ({ items }) => (
  <ul className="space-y-2 mt-4">
    {items.map((item, index) => (
      <li key={index} className="flex items-center text-gray-700">
        <span className="text-brand-orange-custom mr-2 text-xl">●</span> {item}
      </li>
    ))}
  </ul>
);

const LetPropertyCampaign = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const reviews = [
    { name: "Md Sajib Miah" }, { name: "OYINTONYE EMELEDOH" }, { name: "Joe Schofield" }, 
    { name: "Krishan Wagay" }, { name: "Quentin Asamoah" }, { name: "Hespari Properties" }, 
    { name: "Philip James McGoldrick" }, { name: "KINICHA DA COSTA" }, { name: "Abdul Nayeem Mohammed" }, 
    { name: "Mr Opinionated" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <TaxationLinksBar />
      
      {/* ── HERO SECTION WITH SIDEBAR OVERLAP ── */}
      <header className="position-relative text-white overflow-hidden py-5" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)', minHeight: '380px' }}>
        <div className="position-absolute w-100 h-100" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(210, 96, 26, 0.15) 0%, transparent 60%)', top: 0, left: 0, zIndex: 1 }}></div>
        <div className="container position-relative py-4" style={{ zIndex: 2 }}>
          <div className="row g-4 align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <span className="text-uppercase small tracking-wider fw-bold mb-2 d-inline-block text-brand-orange" style={{ letterSpacing: '2px' }}>
                Corporate Tax Specialists
              </span>
              <h1 className="display-4 fw-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Let Property Campaign
              </h1>
              <p className="lead text-white-50 mb-4" style={{ maxWidth: '680px', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Expert Guidance for HMRC Let Property Campaign Disclosures: Tailored Solutions for Tax-Efficient Business Strategies at Taxaccolega.
              </p>
              
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mb-4">
                <a href="#contact-block" className="btn btn-brand px-4 py-2 shadow" style={{ backgroundColor: '#D2601A', color: 'white' }}>
                  CONTACT US
                </a>
              </div>
            </div>
            
            {/* HERO OVERLAPPING SIDEBAR */}
            <div className="col-lg-4 d-none d-lg-block position-relative" style={{ zIndex: 3 }}>
              <div className="p-4 rounded-4 shadow-lg" style={{ background: 'linear-gradient(180deg, rgba(232,162,116,0.9) 0%, rgba(212,108,36,0.95) 50%, rgba(184,80,14,1) 100%)' }}>
                <h5 className="text-white fw-bold mb-4 text-center border-bottom pb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>Quick Navigation</h5>
                <div className="d-flex flex-column gap-3">
                  {[
                    { title: 'Tax Investigation', link: '/taxation/tax-investigation' },
                    { title: 'VAT Tax Accounting', link: '/taxation/vat-accountants' },
                    { title: 'Non Uk Resident', link: '/taxation/non-uk-resident-taxation' }
                  ].map((item, idx) => (
                    <Link key={idx} href={item.link} className="card border-0 shadow rounded-3 p-3 text-decoration-none bg-white hover-shadow transition" style={{ transition: 'all 0.3s' }}>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-bold text-brand-dark" style={{ fontSize: '0.95rem', color: '#1d3c45' }}>{item.title}</span>
                        <span className="text-brand-orange fw-bold" style={{ color: '#d2601a' }}>READ MORE &raquo;</span>
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
              <li className="breadcrumb-item"><Link href="/taxation" className="text-decoration-none" style={{ color: '#D2601A' }}>Taxation</Link></li>
              <li className="breadcrumb-item active text-secondary">Let Property Campaign</li>
            </ol>
          </nav>
        </div>
      </div>

      <TaxationLinksBar />

      <Section className="bg-white">
        <TwoColumnGrid 
          left={
            <div>
              <h1 className="text-4xl font-bold text-brand-teal mb-6">
                Most landlords do not deliberately decide to ignore tax.
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                What usually happens is slower than that. A property gets rented temporarily after a move. Another property is inherited and let out for “just a few years.” Mortgage interest rules change. Records become inconsistent. A return is submitted once, then missed later. Rental income is declared partially but not fully. Expenses are estimated instead of tracked properly. Eventually, years pass. Throughout that time, the landlord often still believes the situation is manageable. Then the HMRC letter arrives. Not aggressive. Not accusatory. Just enough to make the situation suddenly feel real.
              </p>
              <p className="text-xl font-semibold text-brand-teal mb-6">
                That moment is usually when the Let Property Campaign stops feeling like “something other landlords deal with” and becomes personal.
              </p>
              <p className="text-lg text-gray-700">
                At Taxaccolega, we help landlords across London and the UK deal with HMRC Let Property Campaign disclosures properly, especially where undeclared rental income, historic reporting gaps, overseas ownership, capital gains exposure, or incomplete records have already built up over several years.
              </p>
            </div>
          }
          right={
            <div className="space-y-6">
              {[
                { title: 'Tax Investigation', link: '#' },
                { title: 'VAT Tax Accounting official', link: '#' },
                { title: 'Non Uk Resident Taxation', link: '#' }
              ].map((card) => (
                <div key={card.title} className="border-l-4 border-brand-orange-custom bg-brand-panel-light-grey p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-brand-teal">{card.title}</h3>
                    <a href={card.link} className="text-brand-orange-custom font-semibold">Read More »</a>
                  </div>
                </div>
              ))}
            </div>
          }
        />
      </Section>

      {/* Section 3: Campaign Scope */}
      <Section>
        <TwoColumnGrid 
          left={
            <div>
              <h2 className="text-3xl font-bold text-brand-teal mb-4">HMRC Let Property Campaign – What It Actually Is</h2>
              <p className="text-lg text-gray-700 mb-4">The Let Property Campaign is an HMRC disclosure facility designed for landlords who need to correct previously undeclared or incorrectly reported rental income. In practice, the campaign applies to far more situations than most landlords initially realise. Some landlords never declared rental income at all. Others declared parts of it incorrectly. Some missed years entirely. Others misunderstood allowable expenses, overseas reporting rules, or ownership treatment between spouses or family members.</p>
              <p className="text-lg text-gray-700">The issue is not always deliberate concealment. Very often, the reporting structure simply became inconsistent over time. That is why HMRC Let Property Campaign disclosures frequently overlap with:</p>
              <OrangeBulletList items={["self assessment corrections", "income tax liabilities", "capital gains tax exposure", "non-UK resident taxation", "tax investigation concerns", "bookkeeping failures", "historic record reconstruction"]} />
              <p className="text-lg font-semibold mt-4">especially where property ownership has existed for several years.</p>
            </div>
          }
          right={<PlaceholderImage />}
        />
      </Section>

      {/* Section 4: Dual Growth-Dilemma */}
      <Section bg="bg-brand-panel-light-grey">
        <div className="space-y-12">
          <TwoColumnGrid left={<div><h3 className="text-2xl font-bold text-brand-teal">Why EMI Schemes Become Strategically Important as Businesses Grow</h3><h4 className="text-xl font-semibold mb-2">Property income rarely stays simple over time</h4><p className="text-lg text-gray-700">At the beginning, a landlord may own only one property. The rental income feels straightforward. One tenant. One payment stream. One mortgage. Then circumstances change. Mortgage structures are refinanced. Ownership percentages shift. Rental gaps occur. Properties are sold. Overseas movement happens. Improvements are mixed with repairs. Records become fragmented between accountants, spreadsheets, bank statements, and letting agents. At that point, the tax position usually stops matching the landlord’s understanding of it. The problem is not just “undeclared rent.” It becomes a wider issue involving how the property activity was tracked, reported, and structured over time.</p></div>} right={<PlaceholderImage />} />
          <TwoColumnGrid reverse={true} left={<div><h4 className="text-xl font-semibold mb-2">Delay quietly increases the risk</h4><p className="text-lg text-gray-700">Many landlords postpone disclosure because the issue feels uncomfortable rather than urgent. That delay is where the exposure grows. Interest continues building. Penalty positioning changes. Records become harder to retrieve. Mortgage histories disappear. Older expense evidence weakens. Disposal decisions happen before the historic income position is corrected. By the time many landlords seek professional help, the position is no longer about routine tax filing. It has become a disclosure strategy issue.</p></div>} right={<PlaceholderImage />} />
        </div>
      </Section>

      {/* Section 5: Pill Cloud (shared component) */}
      <TaxationLinksBar />

      {/* Section 6: Inspection Parameters */}
      <Section>
        <h2 className="text-3xl font-bold text-brand-teal mb-4 text-center">Let Property Campaign Disclosure – What HMRC Usually Looks At</h2>
        <p className="text-lg text-gray-700 text-center mb-6">A Let Property Campaign disclosure is not limited to entering one missing figure into a form. HMRC will usually expect the position to reflect:</p>
        <div className="flex flex-wrap justify-center gap-2 mb-6 text-brand-teal font-semibold">
          {["undeclared rental income", "allowable expense treatment", "mortgage interest restrictions", "ownership structures", "overseas rental activity", "historic tax years affected", "penalties and interest", "disclosure behaviour"].map((item, i, arr) => (
            <React.Fragment key={item}>{item}{i < arr.length - 1 && <span className="text-brand-orange-custom">|</span>}</React.Fragment>
          ))}
        </div>
        <p className="text-lg text-gray-700 text-center mb-6">This becomes particularly important where landlords:</p>
        <div className="flex flex-wrap justify-center gap-2 text-brand-teal font-semibold">
          {["owned multiple properties", "moved abroad", "sold rental properties later", "mixed personal and rental spending", "transferred ownership between spouses", "inherited property", "received overseas rental income"].map((item, i, arr) => (
            <React.Fragment key={item}>{item}{i < arr.length - 1 && <span className="text-brand-orange-custom">|</span>}</React.Fragment>
          ))}
        </div>
        <p className="text-lg font-semibold text-center mt-6">These are the kinds of real-world complications that generic Let Property Campaign guides rarely explain properly.</p>
      </Section>

      {/* Section 7: Timing */}
      <Section>
        <TwoColumnGrid 
          left={<PlaceholderImage />}
          right={
            <div>
              <h2 className="text-3xl font-bold text-brand-teal mb-4">The Difference Between a Prompted and Unprompted Disclosure</h2>
              <p className="text-lg text-gray-700 mb-4">One of the most important parts of the HMRC Let Property Campaign process is timing. Whether HMRC contacted the taxpayer before disclosure can materially affect penalties. An unprompted disclosure usually places the taxpayer in a stronger position than a disclosure made after HMRC has already opened contact or raised questions. That distinction is one reason landlords should not ignore:</p>
              <OrangeBulletList items={["HMRC letters", "property income queries", "disclosure prompts", "data requests", "compliance checks"]} />
              <p className="text-lg font-semibold mt-4">especially where older rental income was never fully reported.</p>
            </div>
          }
        />
      </Section>

      {/* Section 8: Blind Spot */}
      <Section>
        <div className="border-4 border-brand-orange-custom p-8">
          <h3 className="text-2xl font-bold text-brand-teal mb-4">Insight Section – Most Let Property Campaign Problems Start Long Before Tax Gets Missed</h3>
          <p className="text-lg text-gray-700 mb-4">The largest Let Property Campaign liabilities are rarely created by one dramatic mistake. Usually, they build quietly through assumptions. A landlord assumes short rental periods “probably do not matter.” Someone believes overseas income only matters where money enters the UK. Joint ownership percentages are assumed instead of formally documented. Mortgage interest is claimed incorrectly for years because “that is how it was always done.” Repairs and improvements become mixed together without proper tracking.</p>
          <p className="text-lg text-gray-700 mb-4">Then eventually, often years later, the landlord attempts to reconstruct the position and realises the tax history no longer properly connects. That is when disclosure becomes expensive. Because once multiple years overlap with incomplete records, missing returns, incorrect expenses, and possible capital gains implications, the issue stops being routine compliance and becomes risk management. The earlier the position is reviewed, the more flexibility usually exists around:</p>
          <div className="grid grid-cols-2 gap-4 mb-4 text-brand-teal font-semibold">
            {["disclosure timing", "penalty mitigation", "evidence support", "record reconstruction", "payment planning", "strategic correction"].map(item => <div key={item}>● {item}</div>)}
          </div>
          <p className="font-bold text-brand-orange-custom">After HMRC enforcement escalates, those options narrow quickly.</p>
        </div>
      </Section>

      {/* Section 9: CGT Overlaps */}
      <Section>
        <TwoColumnGrid 
          left={
            <div>
              <h2 className="text-3xl font-bold text-brand-teal mb-4">Let Property Campaign and Capital Gains Tax</h2>
              <p className="text-lg text-gray-700 mb-4">Many landlords focus entirely on rental income and forget that property disposals may later create capital gains tax exposure as well. That becomes especially important where:</p>
              <OrangeBulletList items={["a former main residence was later rented", "letting relief issues apply", "private residence relief calculations are involved", "overseas property exists", "ownership changed during the holding period", "historic reporting gaps affect acquisition evidence"]} />
              <p className="text-lg font-semibold mt-4">This creates a direct overlap between: Let Property Campaign disclosures, capital gains tax planning, inheritance tax planning, tax advisory services, self assessment corrections particularly where properties have been held for many years.</p>
            </div>
          }
          right={<PlaceholderImage />}
        />
      </Section>

      {/* Section 10: Partners */}
      <Section className="text-center">
        <h2 className="text-3xl font-bold text-brand-teal mb-8">Our Clients and Collaborative Partners</h2>
        <div className="flex justify-center gap-4">
          {[1,2,3,4].map(i => <div key={i} className="w-32 h-16 bg-gray-200"></div>)}
        </div>
      </Section>

      {/* Section 11: Non-UK */}
      <Section>
        <TwoColumnGrid 
          reverse={true}
          left={<PlaceholderImage />}
          right={
            <div>
              <h2 className="text-3xl font-bold text-brand-teal mb-4">Let Property Campaign and Non-UK Resident Landlords</h2>
              <p className="text-lg text-gray-700 mb-4">One of the most misunderstood areas involves landlords living outside the UK. Many non-residents incorrectly assume that leaving the UK removes UK rental reporting obligations. In reality, UK rental income can still remain taxable and reportable even after residency changes. This is why Let Property Campaign matters frequently overlap with:</p>
              <OrangeBulletList items={["non-UK resident taxation", "worldwide disclosure facility disclosures", "overseas income reporting", "capital gains tax for non-residents", "HMRC offshore compliance checks"]} />
              <p className="text-lg font-semibold mt-4">especially where landlords owned UK property while living abroad.</p>
            </div>
          }
        />
      </Section>

      {/* Section 12: Deliverables */}
      <Section>
        <h2 className="text-3xl font-bold text-brand-teal mb-4 text-center">What Our Let Property Campaign Services Actually Help With</h2>
        <p className="text-lg text-gray-700 mb-4 text-center">This is not simply about correcting undeclared rental income. It is about rebuilding a property tax position that often became fragmented across multiple years before the reporting issue was fully recognised. Many firms simply calculate figures and complete disclosure forms. The more difficult part is understanding whether the underlying position itself is reliable.</p>
        <p className="text-lg text-gray-700 mb-4 text-center">Our work focuses on helping landlords reconstruct and stabilise complicated property tax positions before they become more serious HMRC problems. That may involve:</p>
        <div className="grid md:grid-cols-2 gap-4 text-brand-teal font-semibold">
          {["reviewing historic rental income", "rebuilding incomplete records", "assessing ownership structures", "calculating tax, interest, and penalties", "reviewing capital gains exposure", "correcting self assessment returns", "supporting HMRC disclosure correspondence", "analysing overseas property reporting issues"].map(item => <div key={item}>● {item}</div>)}
        </div>
        <div className="border border-brand-orange-custom p-6 mt-8 font-semibold text-center">The difference is not simply “filing a disclosure.” It is creating a position that can still be defended logically if HMRC later reviews how the disclosure was prepared.</div>
      </Section>

      {/* Section 13: Table */}
      <Section>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-brand-teal text-white">
              <th className="p-4 text-left">Area</th>
              <th className="p-4 text-left">Why Problems Happen</th>
              <th className="p-4 text-left">Result</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Mortgage interest claims', 'Rules misunderstood', 'Underpaid tax'],
              ['Joint ownership income', 'Ownership split unclear', 'Incorrect allocations'],
              ['Overseas rental income', 'Residency rules misunderstood', 'Offshore disclosure risk'],
              ['Repair vs improvement costs', 'Expenses classified incorrectly', 'Tax adjustments'],
              ['Missing historic records', 'Poor bookkeeping over time', 'Estimated disclosures']
            ].map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-brand-panel-light-grey'}>
                {row.map((cell, j) => <td key={j} className="p-4 border-b">{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      {/* Section 14: Reviews */}
      <Section bg="bg-brand-panel-light-grey">
        <h2 className="text-3xl font-bold text-brand-teal mb-2 text-center">Our Recent Google Reviews</h2>
        <p className="text-center mb-8">5.0 | 193 reviews EXCELLENT | Based on 193 reviews</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map(rev => <div key={rev.name} className="bg-white p-6 shadow rounded">⭐⭐⭐⭐⭐<p className="font-bold mt-2">{rev.name}</p></div>)}
        </div>
      </Section>

      {/* Section 15: Milestones */}
      <Section>
        <TwoColumnGrid 
          left={
            <div>
              <h2 className="text-3xl font-bold text-brand-teal mb-4">When You Should Speak to a Let Property Campaign Accountant</h2>
              <p className="text-lg text-gray-700 mb-4">Many landlords wait too long before seeking advice. Usually until:</p>
              <OrangeBulletList items={["HMRC letters arrive", "a property sale is approaching", "mortgage refinancing begins", "overseas tax issues emerge", "penalties start increasing", "disclosure deadlines appear"]} />
              <p className="text-lg text-gray-700 mt-4 mb-4">At that stage, the work becomes reactive rather than strategic. Earlier advice creates more control over:</p>
              <OrangeBulletList items={["disclosure timing", "supporting evidence", "penalty positioning", "capital gains planning", "payment arrangements", "reporting accuracy"]} />
              <p className="text-lg font-semibold mt-4">This becomes especially important where multiple tax years are involved.</p>
            </div>
          }
          right={<PlaceholderImage />}
        />
      </Section>

      {/* Section 16: Reporting */}
      <Section bg="bg-brand-panel-light-grey">
        <TwoColumnGrid 
          reverse={true}
          left={<PlaceholderImage />}
          right={
            <div>
              <h2 className="text-3xl font-bold text-brand-teal mb-4">Let Property Campaign and Wider Financial Reporting</h2>
              <p className="text-lg text-gray-700 mb-4">Rental property issues rarely stay isolated. Undeclared or incorrectly reported rental income often affects:</p>
              <OrangeBulletList items={["income tax positions", "self assessment filings", "bookkeeping accuracy", "financial forecasting", "management accounts", "inheritance tax planning", "long-term property structuring"]} />
              <p className="text-lg text-gray-700 mt-4 mb-4">At that stage, the work becomes corrective rather than strategic. For landlords operating through companies, the issue may also extend into:</p>
              <OrangeBulletList items={["Corporation Tax", "Statutory Accounts", "Consolidated Accounts", "director reporting obligations"]} />
              <p className="text-lg font-semibold mt-4">especially where property income and personal income became mixed historically.</p>
            </div>
          }
        />
      </Section>

      {/* Section 17: CTA */}
      <Section className="text-center">
        <h2 className="text-3xl font-bold text-brand-teal mb-4">Speak to Let Property Campaign Accountants London UK</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto">If you have received an HMRC Let Property Campaign letter, if rental income was not fully declared previously, or if historic property reporting no longer feels fully clear, addressing the position early is usually far safer than waiting for HMRC scrutiny to intensify. Taxaccolega supports landlords across London and the UK with:</p>
        <div className="grid md:grid-cols-2 gap-4 mb-8 text-brand-teal font-semibold max-w-2xl mx-auto text-left">
          {["HMRC Let Property Campaign disclosures", "rental income corrections", "self assessment amendments", "capital gains tax reviews", "non-resident landlord tax issues", "disclosure calculations", "penalty mitigation support", "historic property tax reconstruction"].map(item => <div key={item}>● {item}</div>)}
        </div>
        <p className="text-lg font-bold">The objective is not simply closing a tax issue. It is regaining clarity around a property position that often became progressively more complicated over time.</p>
      </Section>

      {/* Section 18: Form */}
      <Section bg="bg-brand-panel-light-grey">
        <TwoColumnGrid 
          left={
            <div>
              <h3 className="text-2xl font-bold text-brand-teal mb-4">Get in Touch</h3>
              <p>Phone Number: 020 8127 0728</p>
              <p>Whatsapp: 074 7117 0484</p>
              <p>Email: info@taxaccolega.co.uk</p>
              <p>Address: 187a London Road, Croydon, Surrey, CR0 2RJ</p>
            </div>
          }
          right={
            <div className="bg-white p-6 shadow">
              <h3 className="text-2xl font-bold text-brand-teal mb-4">Send Us a Message</h3>
              <input placeholder="Name" className="w-full p-2 border border-gray-300 mb-4" />
              <input placeholder="Email" className="w-full p-2 border border-gray-300 mb-4" />
              <textarea placeholder="Message" className="w-full p-2 border border-gray-300 mb-4 h-32" />
              <button className="bg-brand-orange-custom text-white px-6 py-2">Send Us a Message</button>
            </div>
          }
        />
      </Section>

      {/* Section 19: FAQ */}
      <Section>
        <h2 className="text-3xl font-bold text-brand-teal mb-8 text-center">FAQs on HMRC Let Property Campaign</h2>
        <div className="space-y-4">
          {[
            { q: "What is the Let Property Campaign?", a: "It is an HMRC disclosure facility allowing landlords to correct undeclared or incorrectly reported rental income." },
            { q: "How many years does the Let Property Campaign go back?" }, { q: "Can HMRC reduce Let Property Campaign penalties?" }, { q: "Does the Let Property Campaign apply to overseas landlords?" },
            { q: "What happens if I ignore an HMRC Let Property Campaign letter?" }, { q: "Can rental property disclosures affect capital gains tax later?" }, { q: "Do I need an accountant for a Let Property Campaign disclosure?" }
          ].map((item, i) => (
            <div key={i} className="border border-brand-teal">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full p-4 text-left font-bold bg-brand-teal text-white flex justify-between">{item.q} <span>{openFaq === i ? '−' : '+'}</span></button>
              {openFaq === i && <div className="p-4">{item.a || "Answer content goes here..."}</div>}
            </div>
          ))}
        </div>
      </Section>
      <Footer />
      </div>
  );
};

export default LetPropertyCampaign;
