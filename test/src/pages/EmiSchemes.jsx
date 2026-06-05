import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import ReviewsSlider from '../components/ReviewsSlider';
import TaxationLinksBar from '../components/TaxationLinksBar';
import { taxationConfig } from './taxationConfig';

const EmiSchemesPage = () => {
  const service = taxationConfig['emi-schemes'];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: '#f8f9fa', minHeight: '100vh' }}>
      <TaxationLinksBar />

      <PageHero
        title={service.title}
        subtitle={service.subtitle}
        breadcrumbs={[
            { label: 'Home', link: '/' },
            { label: 'Taxation', link: '/taxation' },
            { label: service.title, active: true }
        ]}
      />

      {/* Hero Section */}
      <section className="py-5 bg-white">
        <div className="container py-3">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <h1 className="display-5 fw-bold text-brand-dark mb-4">EMI Scheme UK | EMI Share Option Scheme Advice & Tax Support</h1>
              <p className="text-secondary mb-3">Most growing businesses eventually reach the same uncomfortable point. The company is moving forward. Revenue improves. The team becomes stronger. Key employees start taking on responsibilities that directly affect growth. The founder knows certain people are becoming commercially critical to the future of the business.</p>
              <p className="text-secondary mb-3">But salary alone stops feeling like the right long-term answer. Not because the business does not value the employee. Because scaling companies rarely have unlimited room for aggressive payroll expansion without affecting cashflow, forecasting, hiring flexibility, or future investment positioning.</p>
              <p className="text-secondary mb-4">An EMI scheme can create substantial tax advantages when structured properly. It can also create unexpected tax exposure, valuation disputes, disqualifying events, or employee complications when the setup is handled casually. At Taxaccolega, we support businesses across London and the wider UK with EMI schemes, EMI share option scheme structuring, HMRC valuation support, tax planning, and long-term compliance management.</p>
              
              <div className="d-flex flex-wrap gap-3">
                <a href="#contact-section" className="btn btn-brand px-4 py-2">Book Free Consultation</a>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="d-flex flex-column gap-3">
                {[
                    { title: "Tax Investigation", link: "/taxation/tax-investigation-insurance" },
                    { title: "Income Tax Accountant official", link: "/taxation/personal-income-tax" },
                    { title: "VAT Tax Accounting official", link: "/taxation/vat-accountants" },
                    { title: "Non Uk Resident Taxation", link: "/taxation/non-uk-resident-taxation" },
                    { title: "Tax Advisory", link: "/taxation/tax-advisors" }
                ].map((card, i) => (
                    <div key={i} className="p-3 border-start border-4 border-brand-orange bg-light rounded-end shadow-sm">
                      <h5 className="fw-bold text-brand-dark mb-1">{card.title}</h5>
                      <Link to={card.link} className="text-brand-orange text-decoration-none small fw-bold">Read More »</Link>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <TaxationLinksBar />

      {/* Growth Strategy Dilemmas (Section 5) */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-brand-dark mb-5 text-center">Why EMI Schemes Become Strategically Important as Businesses Grow</h2>
          
          <div className="row g-5 align-items-center mb-5">
            <div className="col-lg-7">
              <h4 className="text-brand-orange mb-3">Growth changes how employees think</h4>
              <p className="text-secondary mb-3">In early-stage businesses, employees often join because of opportunity. As the business matures, expectations shift. Key staff start evaluating:</p>
              <ul className="list-unstyled">
                <li>● long-term upside</li>
                <li>● ownership participation</li>
                <li>● value creation</li>
                <li>● future exits</li>
                <li>● strategic involvement</li>
              </ul>
              <p className="text-secondary small mt-3 font-italic">"Over time, the reporting trail becomes fragmented."</p>
            </div>
            <div className="col-lg-5 bg-secondary rounded-4" style={{ height: '300px' }}></div>
          </div>

          <div className="row g-5 align-items-center">
            <div className="col-lg-5 bg-secondary rounded-4" style={{ height: '300px' }}></div>
            <div className="col-lg-7">
              <h4 className="text-brand-orange mb-3">Founders often delay EMI schemes longer than they should</h4>
              <p className="text-secondary mb-3">One of the most common EMI scheme mistakes is waiting until:</p>
              <ul className="list-unstyled">
                <li>● Founders often delay EMI schemes longer than they should</li>
                <li>● investment discussions begin</li>
                <li>● employees are already considering leaving</li>
                <li>● valuations increase sharply</li>
                <li>● ownership becomes more complex</li>
                <li>● acquisition conversations emerge</li>
              </ul>
              <p className="text-secondary">At that stage, an EMI employee share scheme can become commercially important because it changes how employees relate to the company’s growth itself. The employee no longer views success only through salary progression. They begin participating in future equity value as well. By that point, option structuring usually becomes harder. The earlier an EMI scheme is reviewed, the more flexibility exists around:</p>
              <ul className="list-unstyled">
                <li>● valuation</li>
                <li>● share structure</li>
                <li>● tax efficiency</li>
                <li>● employee allocation</li>
                <li>● future planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Implementation Framework */}
      <section className="py-5 bg-white">
        <div className="container py-4">
            <h2 className="fw-bold text-brand-dark mb-4">How an EMI Share Scheme Works in Practice</h2>
            <p className="text-secondary mb-4">An EMI scheme grants qualifying employees the right to acquire shares later at a pre-agreed exercise price.</p>
            <p className="text-secondary mb-4">If the company increases in value after the option grant, the employee may benefit from that growth when exercising or selling shares later.</p>
            <p className="text-secondary mb-4">The tax treatment depends heavily on:</p>
            <ul className="list-unstyled mb-4">
                <li>● EMI scheme eligibility</li>
                <li>● HMRC valuation agreement</li>
                <li>● exercise timing</li>
                <li>● qualifying conditions</li>
                <li>● disqualifying events</li>
                <li>● share structure</li>
                <li>● option terms</li>
            </ul>
            <p className="text-secondary mb-4">This is why EMI schemes explained online often oversimplify the process.</p>
            <p className="text-secondary mb-4">The technical detail underneath the structure matters heavily.</p>
            
            <h4 className="fw-bold text-brand-dark mb-4">Core Structure Within an EMI Option Scheme</h4>

            <div className="table-responsive rounded-4 shadow-sm border bg-white overflow-hidden">
                <table className="table table-hover align-middle mb-0">   
                    <thead style={{ background: '#1d3c45', color: '#fff' }}>
                        <tr>
                            <th>EMI Scheme Component</th>
                            <th>What It Controls</th>
                            <th>Why It Matters</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>EMI option agreement</td><td>Employee option rights</td><td>Defines entitlement</td></tr>
                        <tr><td>HMRC valuation</td><td>Share market value</td><td>Influences tax treatment</td></tr>
                        <tr><td>Exercise conditions</td><td>When options can be used</td><td>Controls timing</td></tr>
                        <tr><td>Share structure</td><td>Type of shares issued</td><td>Affects ownership rights</td></tr>
                        <tr><td>Disqualifying event rules</td><td>Ongoing eligibility</td><td>Protect tax advantages</td></tr>
                    </tbody>
                </table>
            </div>
            <p className="p-3 mt-3 bg-light text-secondary rounded">"This table belongs here because businesses often misunderstand how many moving parts exist beneath an apparently simple option structure."</p>
        </div>
      </section>

      {/* Qualification Limits (Section 8) */}
      <section className="py-5 bg-light">
          <div className="container">
              <div className="row g-5 align-items-center">
                  <div className="col-lg-5 bg-secondary rounded-4" style={{ height: '300px' }}></div>
                  <div className="col-lg-7">
                      <h2 className="fw-bold text-brand-dark mb-4">EMI Scheme Eligibility – Where Many Businesses Misjudge Qualification</h2>
                      <p className="text-secondary">Not every company qualifies for an EMI scheme UK structure. Eligibility depends on multiple conditions involving:</p>
                      <ul className="list-unstyled">
                        <li>● company size | ● trading activity | ● gross assets | ● employee numbers | ● independence requirements | ● qualifying trade rules</li>
                      </ul>
                      <p className="text-secondary mt-3">Certain activities may prevent qualification entirely. Similarly, employee eligibility must also be assessed carefully. Issues commonly arise where:</p>
                      <ul className="list-unstyled">
                        <li>● working time requirements are misunderstood</li>
                        <li>● directors hold multiple roles</li>
                        <li>● overseas employees are involved</li>
                        <li>● holding company structures complicate control</li>
                        <li>● part-time arrangements affect qualification</li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>

      {/* Valuation Milestones (Section 9) */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <h2 className="fw-bold text-brand-dark mb-4">EMI Scheme Valuation HMRC – Why Valuation Timing Matters</h2>
              <p className="text-secondary">Valuation is one of the most commercially sensitive parts of setting up an EMI scheme. That approach can become dangerous if the valuation position lacks proper support. The agreed valuation affects:</p>
              <ul className="list-unstyled">
                <li>● option pricing | ● future gains | ● tax exposure | ● employee upside | ● future investment positioning</li>
              </ul>
              <p className="text-secondary mt-3">HMRC may later challenge:</p>
              <ul className="list-unstyled">
                <li>● growth assumptions | ● share value calculations | ● discount treatment | ● minority share adjustments | ● marketability considerations</li>
              </ul>
              <p className="text-secondary mt-3">Many businesses focus only on maximising employee upside. Strong EMI scheme valuation HMRC work requires technical justification, not optimistic projections.</p>
            </div>
            <div className="col-lg-5 bg-secondary rounded-4" style={{ height: '300px' }}></div>
          </div>
        </div>
      </section>

      {/* Investment Structures Intersections (Section 10) */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="p-4 border-start border-4 border-brand-orange bg-white rounded shadow-sm">
            <h2 className="fw-bold text-brand-dark mb-4">EMI Schemes and SEIS/EIS Investment Structures</h2>
            <p className="text-secondary">EMI schemes frequently intersect with: SEIS accounting, EIS investment structures, investor protection clauses, startup funding rounds. Because investors often want: clarity over dilution, structured option pools, defined ownership rights, controlled employee participation.</p>
            <p className="font-weight-bold text-brand-dark">This creates a direct relationship between: EMI schemes, SEIS/EIS accounting, corporation tax planning, long-term equity strategy. Especially where scaling businesses expect future investment rounds or acquisition discussions.</p>
          </div>
        </div>
      </section>

      {/* Failure Points Risk Assessment (Section 11) */}
      <section className="py-5 bg-white">
        <div className="container py-4">
            <h2 className="fw-bold text-brand-dark mb-4">Where EMI Share Option Schemes Usually Become Problematic</h2>
            <p className="text-secondary mb-4">The HMRC Worldwide Disclosure Facility process normally follows several stages.</p>

            <div className="table-responsive rounded-4 shadow-sm border bg-light overflow-hidden">
                <table className="table table-hover align-middle mb-0">   
                    <thead style={{ background: '#1d3c45', color: '#fff' }}>
                        <tr>
                            <th>EMI Scheme Issue</th>
                            <th>Why It Happens</th>
                            <th>Potential Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Valuation unsupported</td><td>Weak HMRC position</td><td>Future tax dispute</td></tr>
                        <tr><td>Employee eligibility misunderstood</td><td>Working conditions fail</td><td>Tax advantages lost</td></tr>
                        <tr><td>Disqualifying event ignored</td><td>Changes not monitored</td><td>Unexpected tax exposure</td></tr>
                        <tr><td>Share structure weak</td><td>Rights unclear</td><td>Commercial conflict</td></tr>
                        <tr><td>Scheme introduced too late</td><td>Valuation already high</td><td>Reduced employee benefit</td></tr>
                    </tbody>
                </table>
            </div>
            <p className="p-3 mt-3 bg-light text-secondary rounded">"This authority section matters because it shows the practical failure points businesses actually encounter."</p>
        </div>
      </section>

      {/* Structural Strategic Blind Spot (Section 13) */}
      <section className="py-5 bg-light">
          <div className="container">
              <div className="p-5 border-4 border-brand-orange border shadow-lg rounded-4" style={{ borderStyle: 'solid' }}>
                  <h3 className="fw-bold text-brand-dark mb-3">Insight Section: The Biggest EMI Mistake Usually Happens Before the Scheme Even Starts</h3>
                  <p className="text-secondary mb-3">Most businesses assume the real risk begins after options are granted. In reality, the biggest EMI scheme mistakes often happen during the initial structuring stage. Founders focus heavily on: percentage allocation, future exits, employee incentives but underestimate: valuation methodology, growth timing, investment interaction, share rights, future restructuring impact.</p>
                  <p className="text-secondary">A poorly timed EMI scheme can accidentally reduce the very tax advantages the business intended to create. For example: a valuation agreed after major growth milestones, option grants issued before investment restructuring, disqualifying changes after acquisition activity, incorrect employee qualification assumptions can materially alter the future tax position. That is why strong EMI schemes are usually designed with future events in mind, not only current conditions.</p>
              </div>
          </div>
      </section>

      {/* Multi-Channel Benefit Framework (Section 14) */}
      <section className="py-5 bg-white">
          <div className="container">
              <div className="row g-5 align-items-center mb-5">
                  <div className="col-lg-7">
                      <h3 className="fw-bold text-brand-dark mb-3">EMI Scheme Tax Benefits – Why Timing Changes Everything</h3>
                      <p className="text-secondary">The tax efficiency of an EMI scheme depends heavily on timing and compliance continuity. Potential advantages may include: reduced income tax exposure, capital gains treatment improvements, Business Asset Disposal Relief eligibility, lower National Insurance exposure. But these outcomes are not automatic. The tax treatment changes significantly depending on: when options are exercised, whether HMRC requirements remain satisfied, whether disqualifying events occur, how shares are structured, whether valuations were agreed properly.</p>
                      <p className="text-secondary font-weight-bold">This creates a natural connection between EMI schemes and: capital gains tax planning, income tax advice, corporation tax strategy, tax advisory services because option planning affects multiple tax areas simultaneously.</p>
                  </div>
                  <div className="col-lg-5 bg-secondary rounded-4" style={{ height: '300px' }}></div>
              </div>

              <div className="row g-5 align-items-center mb-5">
                  <div className="col-lg-5 bg-secondary rounded-4" style={{ height: '300px' }}></div>
                  <div className="col-lg-7">
                      <h3 className="fw-bold text-brand-dark mb-3">What Our EMI Scheme Services Actually Change</h3>
                      <p className="text-secondary">This is not simply about creating employee share options. It is about designing an ownership structure that can still function commercially after growth, investment, and future restructuring begin changing the business. Most firms can technically prepare EMI paperwork. That alone is not the difficult part. The real challenge is designing a structure that:</p>
                      <ul className="list-unstyled">
                        <li>● survives future investment | ● remains commercially workable | ● protects tax efficiency | ● aligns employee incentives properly | ● withstands HMRC scrutiny | ● scales with business growth</li>
                      </ul>
                      <p className="text-secondary mt-3">Our approach focuses on: strategic EMI scheme planning, valuation positioning, HMRC compliance review, share structure assessment, growth-stage planning, future transaction readiness, employee scenario modelling. The difference is not simply “having an EMI scheme.” It is having one that still works properly several years later when the business becomes larger, more valuable, and commercially more complex.</p>
                  </div>
              </div>

              <div className="row g-5 align-items-center">
                  <div className="col-lg-7">
                      <h3 className="fw-bold text-brand-dark mb-3">When Businesses Should Speak to EMI Scheme Advisors</h3>
                      <p className="text-secondary">Businesses usually benefit most from EMI advice: before investment rounds, before rapid growth phases, before acquisitions, before key employee exits, before valuation increases, before restructuring ownership, before granting options informally. Once growth accelerates significantly, flexibility narrows. Valuations increase. Tax efficiency opportunities reduce. Commercial complexity expands. That is why earlier EMI planning usually creates stronger long-term outcomes.</p>
                  </div>
                  <div className="col-lg-5 bg-secondary rounded-4" style={{ height: '300px' }}></div>
              </div>
          </div>
      </section>

      {/* Review Star Metrics (Section 12) */}
      <section className="py-5 bg-white text-center border-top">
        <div className="container">
            <h3 className="fw-bold">Our Recent Google Reviews</h3>
            <div className="fs-4 text-warning">5.0 ★★★★★ <span className="text-muted fs-6">193 reviews EXCELLENT</span></div>
            <ReviewsSlider />
        </div>
      </section>

      {/* Interactive Intake Form Layout Container (Section 15) */}
      <section className="py-5 bg-light">
          <div className="container">
              <div className="row g-5">
                  <div className="col-lg-4">
                      <h3 className="fw-bold text-brand-dark mb-4">Contact Us</h3>
                      <div className="text-secondary">
                          <p>Phone: 020 8127 0728</p>
                          <p>Whatsapp: 074 7117 0484</p>
                          <p>Email: info@taxaccolega.co.uk</p>
                          <p>Address: 187a London Road, Croydon, Surrey, CR0 2RJ</p>
                      </div>
                  </div>
                  <div className="col-lg-8">
                      <ContactForm />
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};

export default EmiSchemesPage;
