"use client";
import React from 'react';
import Link from 'next/link';
import TaxationLinksBar from '../components/TaxationLinksBar';
import ContactForm from '../components/ContactForm';

const WorldwideDisclosureFacility = () => {
  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans">

      {/* [COMPONENT INDEX 2]: Hero Section */}
      <header className="position-relative text-white overflow-hidden py-5" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)', minHeight: '380px' }}>
        <div className="position-absolute w-100 h-100" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(210, 96, 26, 0.15) 0%, transparent 60%)', top: 0, left: 0, zIndex: 1 }}></div>
        <div className="container position-relative py-4" style={{ zIndex: 2 }}>
          <div className="row g-4 align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <span className="text-uppercase small tracking-wider fw-bold mb-2 d-inline-block" style={{ letterSpacing: '2px', color: '#D2601A' }}>
                Corporate Tax Specialists
              </span>
              <h1 className="display-4 fw-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                HMRC Worldwide Disclosure Facility Support
              </h1>
              <p className="lead text-white-50 mb-4" style={{ maxWidth: '680px', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Expert guidance for confidential HMRC offshore income disclosures. Tailored solutions for tax-efficient strategies at Taxaccolega.
              </p>
              
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mb-4">
                <a href="#contact-block" className="btn px-4 py-2 shadow" style={{ backgroundColor: '#D2601A', color: 'white' }}>
                  CONTACT US
                </a>
              </div>
            </div>
            
            <div className="col-lg-4 d-none d-lg-block position-relative" style={{ zIndex: 3 }}>
              <div className="p-4 rounded-4 shadow-lg" style={{ background: 'linear-gradient(180deg, rgba(232,162,116,0.9) 0%, rgba(212,108,36,0.95) 50%, rgba(184,80,14,1) 100%)' }}>
                <h5 className="text-white fw-bold mb-4 text-center border-bottom pb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>Quick Navigation</h5>
                <div className="d-flex flex-column gap-3">
                  {[
                    { title: 'Tax Investigation', link: '/taxation/tax-investigation-insurance' },
                    { title: 'Income Tax Accountant', link: '/taxation/personal-income-tax' },
                    { title: 'VAT Tax Accounting', link: '/taxation/vat-accountants' },
                    { title: 'Non Uk Resident', link: '/taxation/non-uk-resident-taxation' },
                    { title: 'Tax Advisory', link: '/taxation/tax-advisors' }
                  ].map((item, idx) => (
                    <Link key={idx} href={item.link} className="card border-0 shadow rounded-3 p-3 text-decoration-none bg-white hover-shadow transition" style={{ transition: 'all 0.3s' }}>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-bold" style={{ fontSize: '0.95rem', color: '#1d3c45' }}>{item.title}</span>
                        <span className="fw-bold" style={{ color: '#d2601a', fontSize: '0.8rem' }}>READ MORE &raquo;</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Sections */}
      <div className="py-16 px-4 md:px-8 bg-white">
        {/* [COMPONENT INDEX 3]: Scope */}
        <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
                <h2 className="text-3xl font-bold text-teal-900 mb-4">HMRC Worldwide Disclosure Facility – What It Actually Covers</h2>
                <p className="mb-6">The Worldwide Disclosure Facility (WDF) is an HMRC disclosure route designed for taxpayers who need to correct unpaid UK tax connected to offshore matters.</p>
                <p className="font-semibold mb-2">This can include:</p>
                <ul className="mb-6 space-y-1">
                    {['overseas income', 'foreign bank accounts', 'offshore investments', 'overseas rental property', 'non-UK employment income', 'foreign capital gains', 'undeclared inheritance-related assets', 'offshore trusts or structures', 'cryptocurrency activity connected internationally', 'residency-related reporting failures'].map(i => <li key={i} className="font-semibold text-orange-600">● <span className="text-gray-900 font-normal">{i}</span></li>)}
                </ul>
                <p className="mb-4">The Worldwide Disclosure Facility HMRC process is not limited to intentional tax evasion.</p>
                <p className="font-semibold mb-2">A significant number of disclosures involve:</p>
                <ul className="mb-6 space-y-1">
                    {['misunderstanding residency rules', 'incomplete reporting', 'historic accounting gaps', 'unstructured offshore income', 'foreign tax assumptions', 'inheritance-related omissions', 'property income errors'].map(i => <li key={i} className="font-semibold text-orange-600">● <span className="text-gray-900 font-normal">{i}</span></li>)}
                </ul>
                <p className="text-sm font-semibold italic">That distinction matters because behaviour classification directly affects Worldwide Disclosure Facility penalties.</p>
            </div>
            <div className="border-2 border-gray-200 h-96 flex items-center justify-center bg-gray-50 text-gray-500 font-bold">Global Assets Visual</div>
        </section>

        {/* [COMPONENT INDEX 4]: Offshore Vulnerability */}
        <section className="py-16 px-4 md:px-8 bg-gray-50 mb-16">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold text-teal-900 mb-2">Why Offshore Tax Problems Often Stay Hidden for Years</h3>
                        <h4 className="font-semibold text-lg mb-4">Offshore income rarely sits in one place</h4>
                        <p className="mb-4">Domestic tax problems are usually easier to track because records exist within one reporting system. Offshore matters are different.</p>
                        <p className="mb-4">Income may pass through:</p>
                        <ul className="mb-4 space-y-1">
                            {['foreign bank accounts', 'overseas payroll systems', 'international property agents', 'offshore investment platforms', 'multiple currencies', 'different tax jurisdictions'].map(i => <li key={i} className="font-semibold text-orange-600">● <span className="text-gray-900 font-normal">{i}</span></li>)}
                        </ul>
                        <p className="mb-4">Over time, the reporting trail becomes fragmented.</p>
                        <p className="mb-4">One adviser handles UK tax. Another handles overseas tax. Some income is taxed abroad. Some is not. Currency conversion records disappear. Historic paperwork becomes incomplete. The issue develops slowly. That is why many Worldwide Disclosure Facility disclosures involve several years of accumulated reporting inconsistencies rather than one isolated event.</p>
                    </div>
                    <div className="border-2 border-gray-200 h-96 bg-white flex items-center justify-center font-bold text-gray-500">Empty Box</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="border-2 border-gray-200 h-96 bg-white flex items-center justify-center font-bold text-gray-500">Empty Box</div>
                    <div>
                        <h4 className="font-semibold text-lg mb-4">HMRC visibility has increased significantly</h4>
                        <p className="mb-4">Many taxpayers still assume offshore information remains difficult for HMRC to access. That assumption is outdated. International data-sharing agreements now allow HMRC to receive financial information from multiple jurisdictions automatically. Overseas accounts, foreign investment activity, and offshore structures are increasingly visible through international reporting systems.</p>
                        <p className="mb-4">This is why voluntary disclosure matters strategically. Once HMRC identifies the issue independently, disclosure opportunities narrow significantly.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* [COMPONENT INDEX 5]: Pill Cloud (shared component) */}
        
        {/* [COMPONENT INDEX 6]: Data Matrix */}
        <section className="py-16 px-4 bg-white mb-16">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold text-teal-900 mb-4">What Happens Inside the Worldwide Disclosure Facility Process</h2>
                <p className="mb-4 font-semibold text-gray-800">The HMRC Worldwide Disclosure Facility process normally follows several stages.</p>
                <table className="w-full border-collapse">
                    <thead className="bg-teal-900 text-white">
                        <tr>
                            <th className="p-3 border">Worldwide Disclosure Facility Stage</th>
                            <th className="p-3 border">What Happens</th>
                            <th className="p-3 border">Why It Matters</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {[
                            ['Registration', 'Taxpayer registers for WDF', 'Starts formal disclosure process'],
                            ['Disclosure preparation', 'Historic tax position reviewed', 'Determines exposure'],
                            ['Calculation stage', 'Tax, interest, and penalties assessed', 'Shapes financial outcome'],
                            ['Submission', 'Disclosure submitted to HMRC', 'Position formally presented'],
                            ['HMRC review', 'HMRC assesses disclosure quality', 'May trigger further questions']
                        ].map((row, i) => (
                            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                {row.map((cell, j) => <td key={j} className="border p-3 font-semibold">{cell}</td>)}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p className="mt-4 italic">This table belongs here because most taxpayers initially struggle to understand how structured the disclosure process actually is.</p>
            </div>
        </section>

        {/* [COMPONENT INDEX 7]: Penalty Matrix */}
        <section className="py-16 px-4 bg-gray-50 text-center mb-16">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-teal-900 mb-6">Worldwide Disclosure Facility Penalties – What Changes the Outcome</h2>
                <p className="mb-4">One of the most misunderstood parts of the Worldwide Disclosure Facility is penalties. Many taxpayers search for: Worldwide Disclosure Facility penalty calculator, Worldwide Disclosure Facility penalty rates, or Worldwide Disclosure Facility penalties, expecting a fixed percentage answer. In reality, penalties depend heavily on behaviour.</p>
                <p className="mb-4 font-semibold">HMRC typically considers:</p>
                <div className="flex flex-wrap justify-center gap-2 mb-6 font-semibold">
                    {['whether disclosure was prompted or unprompted', 'whether inaccuracies were careless or deliberate', 'whether offshore structures increased complexity', 'whether records were maintained properly', 'whether cooperation was full and early'].map((item, i) => (
                        <React.Fragment key={i}>
                            <span>{item}</span>
                            {i < 4 && <span className="text-orange-600"> | </span>}
                        </React.Fragment>
                    ))}
                </div>
                <p className="font-semibold italic">This is where disclosure strategy becomes critical. A poorly structured disclosure can increase penalty exposure unnecessarily even where the underlying tax issue itself may have been manageable.</p>
            </div>
        </section>

        {/* [COMPONENT INDEX 8]: Non-UK */}
        <section className="py-16 px-4 bg-white mb-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-2 border-gray-200 p-6 shadow-sm">
                    <h3 className="font-bold text-lg mb-2 text-teal-900">Worldwide Disclosure Facility and Non-UK Resident Taxation</h3>
                    <p className="mb-2">The Worldwide Disclosure Facility (WDF) is an HMRC disclosure route designed for taxpayers who need to correct unpaid UK tax connected to offshore matters. It follows structured statutory tests involving:</p>
                    <p className="text-orange-600 font-semibold">● days spent in the UK | ● accommodation availability | ● family connections | ● work ties | ● historic residency patterns</p>
                </div>
                <div className="border-2 border-gray-200 p-6 shadow-sm">
                    <h3 className="font-bold text-lg mb-2 text-teal-900">The Residential Integration Pipeline</h3>
                    <p>This creates a natural connection between:</p>
                    <p className="text-orange-600 font-semibold">● non-UK resident taxation | ● income tax reporting | ● capital gains tax | ● inheritance tax exposure</p>
                    <p className="mt-2">Because offshore tax issues are often connected to residency classification errors rather than isolated filing mistakes.</p>
                </div>
            </div>
        </section>

        {/* [COMPONENT INDEX 9]: Partners */}
        <section className="py-12 bg-gray-50 mb-16">
            <h3 className="text-center text-xl font-bold mb-6 text-teal-900">Our Clients and Collaborative Partners</h3>
            <div className="max-w-7xl mx-auto flex justify-center flex-wrap gap-4 text-sm font-bold text-gray-600">
                {[1,2,3,4,5].map(i => <div key={i} className="w-32 h-16 border-2 bg-white"></div>)}
            </div>
        </section>

        {/* [COMPONENT INDEX 10]: Property */}
        <section className="py-16 px-4 bg-white mb-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-2xl font-bold text-teal-900 mb-4">Where Property Owners Commonly Run Into Worldwide Disclosure Problems</h2>
                    <p className="mb-4">Overseas property ownership creates some of the most technically sensitive Worldwide Disclosure Facility cases. Income may pass through:</p>
                    <ul className="mb-4 space-y-1">
                        {['Rental income was never declared in the UK', 'Foreign taxes were assumed to remove UK obligations', 'Ownership structures changed informally', 'Overseas mortgage interest treatment differed', 'Capital gains on disposal were misunderstood'].map(i => <li key={i} className="font-semibold text-orange-600">● <span className="text-gray-900 font-normal">{i}</span></li>)}
                    </ul>
                    <p className="mb-4 font-semibold text-gray-800">This overlaps heavily with:</p>
                    <ul className="mb-4 space-y-1">
                        {['Let Property Campaign disclosures', 'Capital Gains Tax reporting', 'Inheritance Tax planning', 'Self Assessment compliance'].map(i => <li key={i} className="font-semibold text-orange-600">● <span className="text-gray-900 font-normal">{i}</span></li>)}
                    </ul>
                    <p className="text-sm font-semibold italic">In many cases, property owners only realise the reporting issue years later when: refinancing property, selling overseas assets, restructuring ownership, dealing with inheritance matters, or responding to HMRC enquiries.</p>
                </div>
                <div className="border-2 border-gray-200 h-96 bg-gray-50 flex items-center justify-center font-bold text-gray-500">Overseas Property Visual Placer</div>
            </div>
        </section>

        {/* [COMPONENT INDEX 11]: Insight */}
        <section className="py-16 px-4 bg-white mb-16">
            <div className="max-w-4xl mx-auto border-4 border-orange-600 p-8">
                <h3 className="text-2xl font-bold text-teal-900 mb-4">Insight Section: The Biggest Worldwide Disclosure Mistake Usually Happens Before HMRC Is Contacted</h3>
                <p className="mb-4">One of the most damaging mistakes taxpayers make is trying to “fix” offshore tax problems informally before understanding the full exposure properly. They amend partial returns, move money between accounts, close offshore structures quickly, submit incomplete explanations, or disclose one issue while unintentionally leaving related issues unresolved.</p>
                <p className="font-semibold text-gray-800">That approach creates a major problem. Because once HMRC receives incomplete or inconsistent disclosure information, later corrections become far more difficult to explain credibly. Strong Worldwide Disclosure Facility cases are rarely built around speed alone. They are built around completeness, consistency, chronology, and evidence. That is why early strategic review matters before disclosure begins.</p>
            </div>
        </section>

        {/* [COMPONENT INDEX 12]: Crypto */}
        <section className="py-16 px-4 bg-gray-50 mb-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="border-2 border-gray-200 h-96 bg-white flex items-center justify-center font-bold text-gray-500">International Crypto tracking Visual</div>
                <div>
                    <h2 className="text-2xl font-bold text-teal-900 mb-4">Worldwide Disclosure Facility and Cryptocurrency Tax</h2>
                    <p className="mb-4">International cryptocurrency activity increasingly overlaps with offshore disclosure work.</p>
                    <p className="mb-4">Particularly where:</p>
                    <ul className="mb-4 space-y-1">
                        {['exchange accounts were held abroad', 'gains were never converted properly into GBP reporting', 'staking or DeFi income was ignored', 'offshore platforms were assumed outside UK visibility', 'historic crypto transactions lack clear records'].map(i => <li key={i} className="font-semibold text-orange-600">● <span className="text-gray-900 font-normal">{i}</span></li>)}
                    </ul>
                    <p className="text-sm font-semibold italic">Many taxpayers underestimate how much transaction reconstruction is required before offshore crypto disclosures can be prepared accurately.</p>
                </div>
            </div>
        </section>

        {/* [COMPONENT INDEX 13]: Reviews */}
        <section className="py-16 px-4 bg-white text-center mb-16">
            <h3 className="text-2xl font-bold mb-2 text-teal-900">Our Recent Google Reviews</h3>
            <p className="mb-8 font-semibold text-gray-700">5.0 | 193 reviews EXCELLENT</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {[
                { name: 'Md Sajib Miah', text: "Outstanding and quick service! Really supportive and affordable! As a start up company, they supported us a lot while filling the 1st accounts! Thanks Jazzy Khalid for your kind and prompt response on my needs!" },
                { name: 'OYINTONYE EMELEDOH', text: "Excellent service from Taxaccolega. Despite my many questions and follow-ups, they remained patient, thorough, and consistently helpful. I really appreciate the effort from the team and the clear guidance throughout. Highly recommended." },
                { name: 'Joe Schofield', text: "Exactly what it says on the tin. Could not recommend enough! Will be using again! Thank you!!" },
                { name: 'Krishan Wagay', text: "I can’t recommend my accountant highly enough. Jazzy at Taxaccolega handled my business tax case with exceptional professionalism and attention to detail, and successfully won an appeal on my behalf. Their knowledge, persistence, and clear communication throughout the process gave me real confidence during what could have been a very stressful time. An outstanding service and a true expert in his field. Thanks again Jazzy." },
                { name: 'Quentin Asamoah', text: "Very professional, worked with Jazzy from Taxaccolega. Very helpful and patient and was able to clarify the issue I needed assistance with" },
                { name: 'Hespari Properties', text: "This user only left a rating." },
                { name: 'Philip James McGoldrick', text: "This user only left a rating." },
                { name: 'KINICHA DA COSTA', text: "Excellent! Taxccolega Accountants, every year exceed my expectations with their commitment of excellence and expertise. It's a privilege to collaborate with them, so I highly recommend them. Thank you" },
                { name: 'Abdul Nayeem Mohammed', text: "Excellent service!!! Can’t describe in words thanks to the whole team!!!" },
                { name: 'Mr Opinionated', text: "Excellent speedy service! Taxaccolega wasted no time. I worked with Jazzy and he was spectacular always kept me in the loop and worked very efficiently would recommend to all those looking for competent and quick accounting service" }
            ].map(review => (
                <div key={review.name} className="border-2 p-6 bg-white shadow-sm text-left">
                    <p className="font-bold text-teal-900 mb-1">{review.name}</p>
                    <p className="text-yellow-500 mb-3">⭐⭐⭐⭐⭐</p>
                    <p className="text-sm text-gray-700 italic">"{review.text}"</p>
                </div>
            ))}
            </div>
        </section>

        {/* [COMPONENT INDEX 14]: Intervention Framework */}
        <section className="py-16 px-4 md:px-8 bg-gray-50 mb-16">
            <div className="max-w-4xl mx-auto bg-white p-8 border-2">
                <h2 className="text-3xl font-bold text-teal-900 mb-4">What Our Worldwide Disclosure Facility Services Actually Change</h2>
                <p className="mb-4">This is not simply about reporting offshore tax irregularities. It is about controlling how the disclosure position is understood before HMRC defines it independently. Submitting a disclosure is expected.</p>
                <p className="mb-4 font-semibold">The real difference lies in how the disclosure is prepared, positioned, evidenced, and defended.</p>
                <p className="mb-4 font-semibold">Our approach focuses on:</p>
                <ul className="mb-6 space-y-1">
                    {['reconstructing offshore tax exposure properly', 'identifying connected reporting risks early', 'reviewing behavioural classification carefully', 'structuring disclosures coherently', 'aligning supporting documentation before submission', 'identifying areas where HMRC scrutiny is likely'].map(i => <li key={i} className="font-semibold text-orange-600">● <span className="text-gray-900 font-normal">{i}</span></li>)}
                </ul>
                <p className="mb-4 font-semibold">This changes the process materially because strong disclosures reduce:</p>
                <ul className="mb-6 space-y-1">
                    {['unnecessary penalty escalation', 'contradictory reporting', 'avoidable HMRC challenge', 'prolonged investigation risk'].map(i => <li key={i} className="font-semibold text-orange-600">● <span className="text-gray-900 font-normal">{i}</span></li>)}
                </ul>
                <p className="font-bold text-lg mb-2">The goal is not simply disclosure.</p>
                <p className="font-bold text-lg text-teal-900">The goal is controlled resolution.</p>
            </div>
        </section>

        {/* [COMPONENT INDEX 15]: Timeline */}
        <section className="py-16 px-4 bg-white mb-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl font-bold text-teal-900 mb-4">When You Should Speak to a Worldwide Disclosure Facility Advisor</h2>
                    <p className="mb-4">Many taxpayers delay seeking advice because they hope the issue remains unnoticed.</p>
                    <p className="mb-4">Usually, the opposite happens.</p>
                    <p className="mb-4 font-semibold">The strongest time to review offshore disclosure exposure is:</p>
                    <ul className="mb-6 space-y-1">
                        {['before HMRC contact', 'before investigation begins', 'before offshore assets are transferred', 'before overseas property disposals', 'before residency changes', 'before inheritance restructuring', 'before responding to HMRC correspondence'].map(i => <li key={i} className="font-semibold text-orange-600">● <span className="text-gray-900 font-normal">{i}</span></li>)}
                    </ul>
                    <p className="mb-4">Once HMRC opens formal enquiry routes, strategic flexibility reduces significantly.</p>
                    <p className="mb-4 font-semibold">That can affect:</p>
                    <ul className="space-y-1">
                        {['penalty mitigation', 'behavioural classification', 'negotiation position', 'disclosure scope', 'long-term investigation risk'].map(i => <li key={i} className="font-semibold text-orange-600">● <span className="text-gray-900 font-normal">{i}</span></li>)}
                    </ul>
                </div>
                <div className="border-2 border-gray-200 h-96 bg-gray-50 flex items-center justify-center font-bold text-gray-500">Operational Workspace Graphic</div>
            </div>
        </section>
        
        {/* [COMPONENT INDEX 16]: Risk Categorisation */}
        <section className="py-16 px-4 bg-gray-50 mb-16">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold text-teal-900 mb-6">Common Worldwide Disclosure Facility Risks</h2>
                <table className="w-full border-collapse">
                    <thead className="bg-teal-900 text-white">
                        <tr>
                            <th className="p-3 border">Offshore Reporting Issue</th>
                            <th className="p-3 border">Why Happens</th>
                            <th className="p-3 border">Potential Consequence</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {[
                            ['Foreign income omitted', 'Assumed taxed abroad already', 'Income tax exposure'],
                            ['Overseas gains unreported', 'Residency misunderstanding', 'CGT liabilities'],
                            ['Offshore accounts undeclared', 'Historic banking assumptions and offshore property holdings', 'HMRC investigation risk'],
                            ['Incomplete disclosure', 'Partial reconstruction only', 'Increased penalties'],
                            ['Informal corrections attempted', 'No structured review first', 'Credibility concerns']
                        ].map((row, i) => (
                            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                {row.map((cell, j) => <td key={j} className="border p-3 font-semibold">{cell}</td>)}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p className="mt-4 italic">This section belongs here because it reinforces real-world disclosure triggers rather than theoretical examples.</p>
            </div>
        </section>

        <ContactForm source="WorldwideDisclosureFacility" />

        {/* [COMPONENT INDEX 18]: Structural Closing Summary */}
        <section className="py-16 bg-teal-900 text-white px-4 text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Speak to Worldwide Disclosure Facility Advisors in London UK</h2>
            <p className="mb-6 max-w-2xl mx-auto font-semibold">If offshore income, overseas assets, foreign gains, or historic non-disclosure issues may exist within your tax position, delaying review usually increases risk rather than reducing it. Taxaccolega supports individuals and businesses dealing with:</p>
            <ul className="mb-6 text-orange-400 font-semibold space-y-1">
                {['HMRC Worldwide Disclosure Facility disclosures', 'offshore income reporting', 'non-UK resident tax issues', 'overseas property income', 'offshore capital gains', 'cryptocurrency tax disclosures', 'Let Property Campaign cases', 'inheritance and offshore estate exposure'].map(i => <li key={i}>● {i}</li>)}
            </ul>
            <p className="font-bold text-lg mb-2">The objective is not simply filing forms.</p>
            <p className="font-bold text-lg">It is bringing the position under control before HMRC controls the direction of the process instead.</p>
        </section>

        {/* [COMPONENT INDEX 19]: Interactive FAQ Accordion */}
        <section className="py-16 px-4 bg-white mb-16">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-teal-900">FAQs on Worldwide Disclosure Facility</h2>
                {[
                    {q: "What is the Worldwide Disclosure Facility (WDF)?", a: "The Worldwide Disclosure Facility is an HMRC disclosure route allowing taxpayers to report unpaid UK tax connected to offshore matters."},
                    {q: "How many years back can HMRC review under the Worldwide Disclosure Facility?", a: ""},
                    {q: "What are Worldwide Disclosure Facility penalties?", a: ""},
                    {q: "Can non-UK residents use the Worldwide Disclosure Facility?", a: ""},
                    {q: "Does HMRC already receive offshore financial information?", a: ""},
                    {q: "Can cryptocurrency be disclosed through the Worldwide Disclosure Facility?", a: ""},
                    {q: "What happens if I ignore an HMRC Bank letter before disclosure?", a: ""}
                ].map((faq, i) => (
                    <details key={i} className="border-b-2 py-4">
                        <summary className="font-bold cursor-pointer text-teal-900">{faq.q}</summary>
                        <p className="mt-2 text-sm text-gray-700">{faq.a}</p>
                    </details>
                ))}
            </div>
        </section>
      </div>
    </div>
  );
};

export default WorldwideDisclosureFacility;
