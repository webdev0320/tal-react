import React from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TaxationLinksBar from '../components/TaxationLinksBar';

const CryptocurrencyTax = () => {
  return (
    <div className="w-full bg-white text-gray-800">
      <TaxationLinksBar />
      
      {/* ── HERO SECTION WITH SIDEBAR OVERLAP ── */}
      <header className="position-relative text-white overflow-hidden py-5" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)', minHeight: '380px' }}>
        <div className="position-absolute w-100 h-100" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(210, 96, 26, 0.15) 0%, transparent 60%)', top: 0, left: 0, zIndex: 1 }}></div>
        <div className="container position-relative py-4" style={{ zIndex: 2 }}>
          <div className="row g-4 align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <span className="text-uppercase small tracking-wider fw-bold mb-2 d-inline-block text-brand-orange" style={{ letterSpacing: '2px' }}>
                Cryptocurrency Tax Specialists
              </span>
              <h1 className="display-4 fw-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Cryptocurrency Tax UK
              </h1>
              <p className="lead text-white-50 mb-4" style={{ maxWidth: '680px', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Expert Guidance for HMRC Cryptocurrency Tax Disclosures: Tailored Solutions for Tax-Efficient Business Strategies at Taxaccolega.
              </p>
              
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mb-4">
                <a href="#contact-section" className="btn btn-brand px-4 py-2 shadow" style={{ backgroundColor: '#D2601A', color: 'white' }}>
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
                    <Link key={idx} to={item.link} className="card border-0 shadow rounded-3 p-3 text-decoration-none bg-white hover-shadow transition" style={{ transition: 'all 0.3s' }}>
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
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none" style={{ color: '#D2601A' }}>Home</Link></li>
              <li className="breadcrumb-item"><Link to="/taxation" className="text-decoration-none" style={{ color: '#D2601A' }}>Taxation</Link></li>
              <li className="breadcrumb-item active text-secondary">Cryptocurrency Tax</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Component Index 3: Technical Difficulty Module */}
      <section className="bg-white container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-teal-900">Cryptocurrency Tax UK – Why Crypto Becomes Difficult to Report</h2>
          <p>The technical side of cryptocurrency often moves faster than the reporting side. People focus on markets, pricing, timing, and volatility. Very few initially focus on transaction reconstruction or future tax reporting. That usually comes later, often when gains become significant or when HMRC cryptocurrency tax letters begin arriving. By then, the transaction trail is rarely simple.</p>
          <p className="font-semibold">A taxpayer may have:</p>
          <ul className="space-y-2">
            {["moved assets across multiple exchanges", "transferred tokens between wallets", "used decentralised platforms", "received staking rewards", "traded without converting to GBP", "lost access to historic data", "mixed personal and business activity together"].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#EA580C] rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
          <p>The result is that cryptocurrency taxes stop being about “one gain” and become a reconstruction exercise involving timing, valuation, and classification.</p>
          <p className="text-sm border-t pt-4">This is where many generic cryptocurrency tax calculators and cryptocurrency tax software tools start falling short. They may process raw transaction data, but they cannot always determine how HMRC cryptocurrency tax rules apply to unusual transaction patterns or incomplete records.</p>
        </div>
        <div className="border-4 border-dashed border-gray-300 flex items-center justify-center p-12">
          Tech Reconstruction Visual
        </div>
      </section>

      {/* Component Index 4: Inter-Service Pill Cloud Element (shared component) */}
      <TaxationLinksBar />

      {/* Component Index 5: HMRC Interpretation Row Blocks */}
      <section className="bg-[#F9FAFB] py-12">
        <div className="container mx-auto px-6 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-teal-900">How HMRC Views Cryptocurrency and Taxes</h3>
              <p>One of the most misunderstandings surrounding tax on cryptocurrency UK issues is the belief that tax only applies when profits are cashed out into pounds. In reality, HMRC may still view several crypto activities as taxable even where no traditional withdrawal took place. A disposal can occur through selling, swapping, gifting, or exchanging crypto assets. This means a person can create a capital gains tax cryptocurrency UK liability without ever feeling like they “withdrew profit” in the traditional sense. The gap between what taxpayers emotionally view as profit and what HMRC treats as a taxable event is where most cryptocurrency tax confusion begins. That confusion becomes even more serious when activity spans several tax years.</p>
            </div>
            <div className="border border-gray-300 bg-white flex items-center justify-center">Token Swap Visual Placer</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border border-gray-300 bg-white flex items-center justify-center">Pooling Math Visual Placer</div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-teal-900">Capital Gains Tax Cryptocurrency UK – Where Most Reporting Errors Happen</h3>
              <p>For many investors, cryptocurrency capital gains tax UK rules become difficult because gains are rarely isolated into clean transactions. A single crypto holder may acquire the same asset repeatedly over time at different prices, move portions between wallets, exchange tokens rapidly during market volatility, and later dispose of only part of the holding. At that point, the calculation stops being intuitive. Pooling rules, acquisition sequencing, allowable costs, transaction history, and disposal timing all begin affecting the position. Even taxpayers attempting to report honestly often discover later that the gains were calculated incorrectly because the underlying history was incomplete.</p>
              <p className="font-semibold">This becomes particularly common where:</p>
              <ul className="space-y-2">
                {["exchange histories are missing", "assets were transferred between platforms", "stablecoins were treated incorrectly", "wallet movements were duplicated", "historic acquisition values were never recorded properly"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#EA580C]">●</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm pt-4 italic">The issue is not always deliberate non-compliance. Often, the structure simply became too fragmented to follow manually.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Component Index 6: Income Tax vs CGT Classification Panel */}
      <section className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 bg-white">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-teal-900">Cryptocurrency and Income Tax – Where Investors Misclassify Activity</h2>
          <p>Not every crypto-related profit falls under capital gains tax. In certain situations, HMRC may instead treat cryptocurrency activity as income. This can apply to mining, staking, token rewards, employment-related crypto, or organised trading activity depending on how the transactions are structured and carried out.</p>
          <p>That distinction matters because the tax treatment changes significantly. A person focusing only on capital gains tax cryptocurrency may completely overlook cryptocurrency and income tax exposure arising from rewards or recurring receipts.</p>
          <p className="text-sm pt-4 border-t">This is why cryptocurrency tax advice cannot rely on assumptions or generic online articles alone. The actual transaction behaviour matters more than the label a taxpayer gives themselves.</p>
        </div>
        <div className="border border-gray-300 bg-white flex items-center justify-center p-12">Income Classification Placer</div>
      </section>

      {/* Component Index 7: Corporate Partner Validation Carousel */}
      <section className="container mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-center text-teal-900 mb-6">Our Clients and Collaborative Partners</h2>
        <div className="flex justify-center gap-6 border-t border-b py-4">
            <div className="w-24 h-12 bg-gray-200"></div>
            <div className="w-24 h-12 bg-gray-200"></div>
            <div className="w-24 h-12 bg-gray-200"></div>
            <div className="w-24 h-12 bg-gray-200"></div>
        </div>
      </section>

      {/* Component Index 8: Enforcement Risk Expansion Framework */}
      <section className="bg-[#F9FAFB] py-12">
        <div className="container mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl font-bold text-teal-900">Why HMRC Cryptocurrency Tax Investigations Are Increasing</h2>
          <p className="max-w-3xl mx-auto">HMRC cryptocurrency tax avoidance measures have expanded considerably in recent years. Crypto activity is no longer viewed as invisible. International reporting agreements, exchange cooperation, digital audit systems, and data requests have increased HMRC’s visibility into cryptocurrency transactions. Many taxpayers who assumed older activity could not realistically be reviewed are now discovering that HMRC is actively comparing reported income against digital transaction histories.</p>
          <p className="font-semibold text-teal-900">This increasingly overlaps with:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold uppercase">
            {["tax investigation matters", "worldwide disclosure facility disclosures", "non-UK resident taxation issues", "capital gains tax reporting", "personal income tax compliance"].map((tag, i) => (
              <span key={i}> {i > 0 ? '|' : ''} {tag}</span>
            ))}
          </div>
          <p className="text-gray-600">especially where offshore exchanges or international crypto activity exist.</p>
        </div>
      </section>

      {/* Component Index 9: Strategic Blind Spot Callout System */}
      <section className="container mx-auto px-6 py-12">
        <div className="border-2 border-[#EA580C] p-8 space-y-4">
          <h3 className="text-2xl font-bold text-[#EA580C]">Insight Section – Most Crypto Tax Problems Start Years Before HMRC Contacts You</h3>
          <p>The largest cryptocurrency tax liabilities are often created silently. Not through one dramatic mistake, but through small assumptions repeated over time. Someone assumes swapping one token for another is not taxable. Someone believes moving assets through decentralised platforms removes reporting obligations. Someone thinks exchange statements will always remain available later. Someone forgets older wallets entirely.</p>
          <p>Then eventually, perhaps years later, the taxpayer attempts to calculate gains and realises the transaction history no longer connects properly. That is the point where crypto taxation becomes expensive. Because once records become fragmented across multiple tax years, the position changes from “filing accurately” to “repairing history.” The earlier cryptocurrency tax problems are identified, the more flexibility usually exists around:</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p>{"disclosure | reconstruction | penalty mitigation"}</p>
            </div>
            <div>
              <p>{"evidence gathering | tax planning | voluntary correction"}</p>
            </div>
          </div>
          <p className="font-bold text-red-600 pt-4">After HMRC contact begins, those options narrow considerably.</p>
        </div>
      </section>

      {/* Component Index 10: Corporate Structures and Treasury Management */}
      <section className="bg-[#F9FAFB] py-12">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border border-gray-300 bg-white flex items-center justify-center p-12">Company Portfolio Assets Placeholder</div>
            <div className="space-y-4">
                <h2 className="text-3xl font-bold text-teal-900">Cryptocurrency Tax and Business Structures</h2>
                <p>Cryptocurrency held inside companies creates another layer of complexity entirely. In those situations, the issue is no longer limited to personal capital gains tax. The business may also face corporation tax cryptocurrency implications, accounting treatment considerations, valuation questions, and reporting obligations within statutory accounts.</p>
                <p className="font-semibold">This is why cryptocurrency activity often overlaps naturally with:</p>
                <p className="text-sm text-gray-700">{"bookkeeping | management accounts | statutory accounts | corporation tax planning | financial forecasting | consolidated accounts"}</p>
                <p className="text-sm text-gray-600 pt-4">because the crypto activity begins affecting wider financial reporting, not just tax returns. Where businesses hold cryptocurrency as part of treasury activity or operational transactions, the accounting structure itself becomes increasingly important.</p>
            </div>
        </div>
      </section>

      {/* Component Index 11: Aggregated Review Panel Modules */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-center text-teal-900 mb-2">Our Recent Google Reviews</h2>
        <p className="text-center mb-6 font-semibold">5.0 | 193 reviews EXCELLENT | Based on 193 reviews</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
                {name: "Md Sajib Miah", text: "Outstanding and quick service! Really supportive and affordable! As a start up company, they supported us a lot while filling the 1st accounts! Thanks Jazzy Khalid for your kind and prompt response on my needs! Read more"},
                {name: "OYINTONYE EMELEDOH", text: "Excellent service from Taxaccolega. Despite my many questions and follow-ups, they remained patient, thorough, and consistently helpful. I really appreciate the effort from the team and the clear guidance throughout. Highly recommended. Read more"},
                {name: "Joe Schofield", text: "Exactly what it says on the tin. Could not recommend enough! Will be using again! Thank you!!"},
                {name: "Krishan Wagay", text: "I can’t recommend my accountant highly enough. Jazzy at Taxaccolega handled my business tax case with exceptional professionalism and attention to detail, and successfully won an appeal on my behalf. Their knowledge, persistence, and clear communication throughout the process gave me real confidence during what could have been a very stressful time. An outstanding service and a true expert in his field. Thanks again Jazzy. Read more"},
                {name: "Quentin Asamoah", text: "Very professional, worked with Jazzy from Taxaccolega. Very helpful and patient and was able to clarify the issue I needed assistance with Read more"},
                {name: "Hespari Properties", text: "This user only left a rating."},
                {name: "Philip James McGoldrick", text: "This user only left a rating."},
                {name: "KINICHA DA COSTA", text: "Excellent! Taxccolega Accountants, every year exceed my expectations with their commitment of excellence and expertise. It's a privilege to collaborate with them, so I highly recommend them. Thank you Read more"},
                {name: "Abdul Nayeem Mohammed", text: "Excellent service!!! Can’t describe in words thanks to the whole team!!!"},
                {name: "Mr Opinionated", text: "Excellent speedy service! Taxaccolega wasted no time. I worked with Jazzy and he was spectacular always kept me in the loop and worked very efficiently would recommend to all those looking for competent and quick accounting service Read more"}
            ].map((review, i) => (
                <div key={i} className="border p-4 bg-gray-50 rounded">
                    <p className="font-bold">{review.name}</p>
                    <p className="text-sm mt-2">{review.text}</p>
                </div>
            ))}
        </div>
      </section>

      {/* Component Index 12: Remediation Deliverables Matrix */}
      <section className="bg-[#F9FAFB] py-12">
        <div className="container mx-auto px-6 text-center space-y-4">
            <h2 className="text-3xl font-bold text-teal-900">What Our Cryptocurrency Tax Services Actually Help With</h2>
            <p>This is not simply about calculating cryptocurrency gains. It is about rebuilding financial visibility across activity that often became fragmented long before tax reporting was properly considered. Many firms can process numbers once the records already exist. The more difficult part is understanding whether the records themselves are reliable.</p>
            <p>Our cryptocurrency tax services focus on building a defensible reporting position around activity that often became disorganised long before the taxpayer sought professional advice. That may involve reviewing:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left p-6 bg-white border">
                <div>
                    <p>{"historic wallet transfers | exchange activity | staking income | disposal sequencing | overseas transactions"}</p>
                </div>
                <div>
                    <p>{"capital gains calculations | income classification | HMRC disclosure exposure | incomplete transaction histories"}</p>
                </div>
            </div>
            <p className="pt-4 font-semibold">The objective is not simply producing a tax figure. It is producing a reporting position that can still be explained coherently if HMRC later reviews the activity.</p>
        </div>
      </section>

      {/* Component Index 13: Advisory Timeline Threshold Grid */}
      <section className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4">
            <h2 className="text-3xl font-bold text-teal-900">When Cryptocurrency Tax Advice Becomes Important</h2>
            <p>Most people wait until after the difficult part has already happened. Usually after:</p>
            <p className="font-semibold text-gray-700">{"major gains occurred | records became incomplete | HMRC letters arrived | exchanges stopped providing data | overseas reporting complications emerged | disposal decisions were already finalised"}</p>
            <p>At that stage, the work becomes corrective rather than strategic. Earlier cryptocurrency tax advice allows:</p>
            <p className="font-semibold text-gray-700">{"transaction structures to be reviewed properly | gains to be monitored before disposal | reporting risks to be identified earlier | disclosure options to remain broader | tax planning opportunities to still exist"}</p>
            <p className="pt-4 text-sm text-gray-600">This becomes especially important where crypto activity overlaps with overseas residency, property disposals, business ownership, or high-income tax positions.</p>
        </div>
        <div className="border border-gray-300 bg-white flex items-center justify-center p-12">Executive Team Visual Placer</div>
      </section>

      {/* Component Index 14: Error Classification Diagnostic Layout */}
      <section className="bg-[#F9FAFB] py-12">
        <div className="container mx-auto px-6">
            <h2 className="text-xl font-bold mb-4">Common Areas Where Cryptocurrency Reporting Fails</h2>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-teal-900 text-white">
                        <th className="p-3 border">Issue</th>
                        <th className="p-3 border">What It Happens</th>
                        <th className="p-3 border">Result</th>
                    </tr>
                </thead>
                <tbody>
                    {[
                        {i: "Wallet transfers treated as disposals", w: "Transaction history misunderstood", r: "Gains overstated"},
                        {i: "Crypto-to-crypto swaps ignored", w: "No GBP withdrawal occurred", r: "Taxable disposals omitted"},
                        {i: "Historic exchange data missing", w: "Platforms changed or closed", r: "Reconstruction difficulties"},
                        {i: "Staking income excluded", w: "Treated as unrealised growth", r: "Income tax exposure"},
                        {i: "Overseas exchange activity ignored", w: "Reporting obligations misunderstood", r: "HMRC enquiry risk"}
                    ].map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                            <td className="p-3 border">{row.i}</td>
                            <td className="p-3 border">{row.w}</td>
                            <td className="p-3 border">{row.r}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </section>

      {/* Component Index 15: Conversion Engine Intake Panel */}
      <section className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-2">
            <h2 className="text-2xl font-bold">Get in Touch</h2>
            <p>Phone Number: 020 8127 0728</p>
            <p>Whatsapp: 074 7117 0484</p>
            <p>Email: info@taxaccolega.co.uk</p>
            <p>Address: 187a London Road, Croydon, Surrey, CR0 2RJ</p>
        </div>
        <div className="space-y-4">
            <h2 className="text-2xl font-bold">Send Us a Message</h2>
            <input type="text" placeholder="Name" className="w-full p-2 border" />
            <input type="email" placeholder="Email" className="w-full p-2 border" />
            <textarea placeholder="Message" className="w-full p-2 border h-32"></textarea>
            <button className="bg-[#EA580C] text-white px-6 py-3 font-bold">Send Us a Message</button>
        </div>
      </section>

      {/* Component Index 16: Macro Financial Planning Context */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 text-center space-y-4">
            <h2 className="text-3xl font-bold text-teal-900">Cryptocurrency Tax and Long-Term Financial Planning</h2>
            <p>Crypto taxation rarely exists in isolation. A significant disposal may also affect:</p>
            <p className="text-sm font-semibold text-gray-700">{"capital gains tax planning | personal income tax exposure | inheritance tax planning | non-resident tax positioning | self assessment obligations | business structuring decisions"}</p>
            <p className="pt-4">For some individuals, cryptocurrency gains eventually become tied to wider wealth planning decisions rather than isolated investment activity. That is why cryptocurrency tax planning increasingly overlaps with broader tax advisory work rather than existing as a standalone calculation exercise.</p>
        </div>
      </section>

      {/* Component Index 17: Comprehensive Closing Summary CTA */}
      <section className="bg-[#F9FAFB] py-12">
        <div className="container mx-auto px-6 text-center space-y-4">
            <h2 className="text-3xl font-bold text-teal-900">Speak to Cryptocurrency Tax Accountants London UK</h2>
            <p className="max-w-4xl mx-auto">If your cryptocurrency activity has expanded beyond a few isolated trades, if transaction histories no longer feel fully clear, or if you are uncertain how HMRC cryptocurrency tax rules apply to your position, addressing the issue earlier is usually far safer than waiting for HMRC scrutiny later. Taxaccolega supports individuals and businesses across London and the UK with cryptocurrency tax reporting, capital gains tax cryptocurrency calculations, HMRC disclosures, transaction reconstruction, tax investigations, and wider crypto tax planning support. The goal is not simply filing numbers. It is creating clarity around activity that often becomes significantly harder to explain once time passes.</p>
        </div>
      </section>

      {/* Component Index 18: Interactive Dropdown FAQ Accordion */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Cryptocurrency Tax FAQs</h2>
        <div className="space-y-2">
            {[
                "Do you have to pay tax on cryptocurrency UK? -> Answer: Yes, depending on the type of crypto activity involved. HMRC may apply capital gains tax, income tax, or corporation tax.",
                "Is cryptocurrency taxed even if I did not withdraw money?",
                "How is cryptocurrency taxed in the UK?",
                "Can HMRC track cryptocurrency transactions?",
                "Do staking rewards create tax liabilities?",
                "What happens if previous cryptocurrency gains were not reported?",
                "Can a cryptocurrency tax accountant help reconstruct old crypto activity?"
            ].map((faq, i) => (
                <div key={i} className="border p-4 bg-gray-50">{faq}</div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default CryptocurrencyTax;
