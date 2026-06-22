"use client";
import React, { useState } from 'react';
import Link from '../components/NextLinkShim';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import ReviewsSlider from '../components/ReviewsSlider';
import TaxationLinksBar from '../components/TaxationLinksBar';
import { CheckCircle, ChevronDown, ChevronUp, Star } from 'lucide-react';
import ClientScroll from '../components/ClientScroll';
import Footer from '../components/Footer';

const EmiSchemesPage = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  

  const toggleFaq = (index) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  const faqs = [
    { q: 'What is an EMI scheme?', a: 'An EMI scheme is a tax-advantaged employee share option scheme designed for qualifying UK businesses.' },
    { q: 'How does an EMI share scheme work?', a: 'Employees receive options to acquire company shares later under agreed conditions and pricing structures.' },
    { q: 'Who qualifies for an EMI scheme UK?', a: 'Eligibility depends on company size, trade activity, employee conditions, and HMRC qualifying rules.' },
    { q: 'What are the benefits of an EMI scheme?', a: 'Potential benefits include employee retention, tax efficiency, long-term incentives, and growth alignment.' },
    { q: 'Can HMRC challenge an EMI valuation?', a: 'Yes. EMI scheme valuation HMRC reviews are important because unsupported valuations may create future disputes.' },
    { q: 'What happens if an employee leaves an EMI scheme?', a: 'The outcome depends on the option agreement, timing, and whether the employee qualifies as a good or bad leaver.' },
    { q: 'When should a company set up an EMI scheme?', a: 'Usually before major growth, investment activity, or valuation increases make structuring less flexible.' }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <ClientScroll />

      <PageHero
        title="EMI Schemes"
        subtitle="Expert Guidance for EMI Share Option Schemes: Tailored Solutions for Tax-Efficient Strategies at Taxaccolega."
        breadcrumbs={[
            { label: 'Home', link: '/' },
            { label: 'Taxation', link: '/taxation' },
            { label: 'EMI Schemes', active: true }
        ]}
        sidebarItems={[
            { title: 'Tax Investigation', link: '/taxation/tax-investigation-insurance' },
            { title: 'Corporate Tax Accountant', link: '/taxation/company-tax-return-accountants' },
            { title: 'Income Tax Accountant', link: '/taxation/personal-income-tax' }
        ]}
      />

      <main className="py-16">
        <div className="container mx-auto px-4 space-y-16">
          <section className="space-y-4 text-slate-700 leading-relaxed">
            <h2 className="text-3xl font-bold text-slate-950 mb-6">EMI Scheme UK | EMI Share Option Scheme Advice & Tax Support</h2>
            <p>Most growing businesses eventually reach the same uncomfortable point.</p>
            <p>The company is moving forward. Revenue improves. The team becomes stronger. Key employees start taking on responsibilities that directly affect growth. The founder knows certain people are becoming commercially critical to the future of the business.</p>
            <p>But salary alone stops feeling like the right long-term answer.</p>
            <p>Not because the business does not value the employee.</p>
            <p>Because scaling companies rarely have unlimited room for aggressive payroll expansion without affecting cashflow, forecasting, hiring flexibility, or future investment positioning.</p>
            <p>That is where EMI schemes usually enter the conversation.</p>
            <p>Not as a tax product first.</p>
            <p>As a retention problem.</p>
            <p>A growth problem.</p>
            <p>A long-term alignment problem.</p>
            <p>The difficulty is that many EMI share schemes are introduced too late, structured incorrectly, or implemented without fully understanding how HMRC EMI scheme rules actually operate in practice.</p>
            <p>An EMI scheme can create substantial tax advantages when structured properly. It can also create unexpected tax exposure, valuation disputes, disqualifying events, or employee complications when the setup is handled casually.</p>
            <p>At Taxaccolega, we support businesses across London and the wider UK with EMI schemes, EMI share option scheme structuring, HMRC valuation support, tax planning, and long-term compliance management.</p>
          </section>

          <section className="grid md:grid-cols-2 gap-12 items-center bg-slate-50 p-8 rounded-lg">
            <div>
              <h2 className="text-3xl font-bold text-slate-950 mb-6">EMI Scheme Explained – What an EMI Scheme Actually Does</h2>
              <p className="mb-4">An EMI scheme allows qualifying UK businesses to grant selected employees the option to acquire shares in the company under tax-advantaged conditions.</p>
              <p className="mb-4">The full structure is known as the Enterprise Management Incentive scheme.</p>
              <p className="mb-4">Instead of issuing immediate shares outright, the business grants options that may be exercised later under defined conditions.</p>
              <p className="font-semibold mb-2">This creates alignment between:</p>
              <ul className="list-unstyled mb-4">
                <li>● company growth</li>
                <li>● employee performance</li>
                <li>● long-term value creation</li>
                <li>● future business outcomes</li>
              </ul>
              <p className="font-semibold mb-2">An EMI share option scheme is particularly common among:</p>
              <ul className="list-unstyled">
                <li>● startups | ● scaling businesses | ● founder-led companies</li>
                <li>● technology businesses | ● high-growth companies | ● investment-backed businesses</li>
              </ul>
              <p className="mt-4">because these companies often need strong employee retention while preserving operational cash.</p>
            </div>
            <div className="bg-slate-200 rounded-lg flex items-center justify-center" style={{ minHeight: '400px' }}>
                <span className="text-slate-500">EMI Scheme Diagram Placeholder</span>
            </div>
          </section>

          <TaxationLinksBar />

          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h3 className="text-2xl font-bold mb-4">EMI Schemes and Strategic Alignment</h3>
                <p className="leading-relaxed text-slate-700 mb-4">An EMI scheme allows qualifying UK businesses to grant selected employees the option to acquire shares under tax-advantaged conditions. It creates alignment between company growth, employee performance, and long-term value creation.</p>
            </div>
            <img src="/placeholder-hero-image.jpg" alt="EMI Schemes" className="rounded-lg shadow-lg" />
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-950 mb-8">Why EMI Schemes Become Strategically Important as Businesses Grow</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                  <h4 className="text-xl font-bold text-brand-orange">Growth changes how employees think</h4>
                  <p>In early-stage businesses, employees often join because of opportunity. As the business matures, expectations shift.</p>
                  <p>Key staff start evaluating:</p>
                  <ul className="list-unstyled space-y-2">
                    <li>● long-term upside</li>
                    <li>● ownership participation</li>
                    <li>● value creation</li>
                    <li>● future exits</li>
                    <li>● strategic involvement</li>
                  </ul>
                  <p className="font-italic">"Over time, the reporting trail becomes fragmented."</p>
              </div>
              <div className="space-y-4">
                  <h4 className="text-xl font-bold text-brand-orange">Founders often delay EMI schemes longer than they should</h4>
                  <p>One of the most common EMI scheme mistakes is waiting until:</p>
                  <ul className="list-unstyled space-y-2">
                    <li>● investment discussions begin</li>
                    <li>● employees are already considering leaving</li>
                    <li>● valuations increase sharply</li>
                    <li>● ownership becomes more complex</li>
                    <li>● acquisition conversations emerge</li>
                  </ul>
              </div>
            </div>
            <div className="mt-8 space-y-4">
                <p>At that stage, an EMI employee share scheme can become commercially important because it changes how employees relate to the company’s growth itself.</p>
                <p>The employee no longer views success only through salary progression.</p>
                <p>They begin participating in future equity value as well.</p>
                <p>By that point, option structuring usually becomes harder.</p>
                <p>The earlier an EMI scheme is reviewed, the more flexibility exists around:</p>
                <ul className="list-unstyled space-y-2">
                    <li>● valuation</li>
                    <li>● share structure</li>
                    <li>● tax efficiency</li>
                    <li>● employee allocation</li>
                    <li>● future planning</li>
                </ul>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-200 rounded-lg flex items-center justify-center" style={{ minHeight: '400px' }}>
                <span className="text-slate-500">EMI Scheme Works Diagram Placeholder</span>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-950 mb-6">How an EMI Share Scheme Works in Practice</h3>
              <p className="mb-4">An EMI scheme grants qualifying employees the right to acquire shares later at a pre-agreed exercise price.</p>
              <p className="mb-4">If the company increases in value after the option grant, the employee may benefit from that growth when exercising or selling shares later.</p>
              <p className="font-semibold mb-2">The tax treatment depends heavily on:</p>
              <ul className="list-unstyled mb-4 space-y-1">
                <li>● EMI scheme eligibility</li>
                <li>● HMRC valuation agreement</li>
                <li>● exercise timing</li>
                <li>● qualifying conditions</li>
                <li>● disqualifying events</li>
                <li>● share structure</li>
                <li>● option terms</li>
              </ul>
              <p className="mb-4">This is why EMI schemes explained online often oversimplify the process.</p>
              <p className="font-semibold">The technical detail underneath the structure matters heavily.</p>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-12 items-center bg-slate-50 p-8 rounded-lg">
            <div>
              <h3 className="text-3xl font-bold text-slate-950 mb-6">EMI Scheme Eligibility – Where Many Businesses Misjudge Qualification</h3>
              <p className="mb-4">Not every company qualifies for an EMI scheme UK structure.</p>
              <p className="font-semibold mb-2">Eligibility depends on multiple conditions involving:</p>
              <ul className="list-unstyled mb-4 space-y-1">
                <li>● company size</li>
                <li>● trading activity</li>
                <li>● gross assets</li>
                <li>● employee numbers</li>
                <li>● independence requirements</li>
                <li>● qualifying trade rules</li>
              </ul>
              <p className="mb-4">Certain activities may prevent qualification entirely.</p>
              <p className="mb-4">Similarly, employee eligibility must also be assessed carefully.</p>
              <p className="font-semibold mb-2">Issues commonly arise where:</p>
              <ul className="list-unstyled mb-4 space-y-1">
                <li>● working time requirements are misunderstood</li>
                <li>● directors hold multiple roles</li>
                <li>● overseas employees are involved</li>
                <li>● holding company structures complicate control</li>
                <li>● part-time arrangements affect qualification</li>
              </ul>
              <p className="mb-4">This is particularly important for EMI scheme holding company structures, where ownership layering can affect EMI qualification unexpectedly.</p>
            </div>
            <div className="bg-slate-200 rounded-lg flex items-center justify-center" style={{ minHeight: '400px' }}>
                <span className="text-slate-500">EMI Eligibility Diagram Placeholder</span>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-950 mb-6">EMI Scheme Valuation HMRC – Why Valuation Timing Matters</h3>
              <p className="mb-4">Valuation is one of the most commercially sensitive parts of setting up an EMI scheme.</p>
              <p className="mb-4">That approach can become dangerous if the valuation position lacks proper support.</p>
              <p className="font-semibold mb-2">The agreed valuation affects:</p>
              <ul className="list-unstyled mb-4 space-y-1">
                <li>● option pricing</li>
                <li>● future gains</li>
                <li>● tax exposure</li>
                <li>● employee upside</li>
                <li>● future investment positioning</li>
              </ul>
              <p className="font-semibold mb-2">HMRC may later challenge:</p>
              <ul className="list-unstyled mb-4 space-y-1">
                <li>● growth assumptions</li>
                <li>● share value calculations</li>
                <li>● discount treatment</li>
                <li>● minority share adjustments</li>
                <li>● marketability considerations</li>
              </ul>
            </div>
            <div className="bg-slate-200 rounded-lg flex items-center justify-center" style={{ minHeight: '400px' }}>
                <span className="text-slate-500">EMI Valuation Diagram Placeholder</span>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-12 items-center bg-slate-50 p-8 rounded-lg">
              <div>
                  <h3 className="text-3xl font-bold text-slate-950 mb-6">EMI Schemes and SEIS/EIS Investment Structures</h3>
                  <p className="font-semibold mb-2">EMI schemes frequently intersect with:</p>
                  <ul className="list-unstyled mb-4 space-y-1">
                      <li>● SEIS accounting</li>
                      <li>● EIS investment structures</li>
                      <li>● investor protection clauses</li>
                      <li>● startup funding rounds</li>
                  </ul>
                  <p className="font-semibold mb-2">Because investors often want:</p>
                  <ul className="list-unstyled mb-4 space-y-1">
                      <li>● clarity over dilution</li>
                      <li>● structured option pools</li>
                      <li>● defined ownership rights</li>
                      <li>● controlled employee participation</li>
                  </ul>
                  <p className="font-semibold mb-2">This creates a direct relationship between:</p>
                  <ul className="list-unstyled mb-4 space-y-1">
                      <li>● EMI schemes</li>
                      <li>● SEIS/EIS accounting</li>
                      <li>● corporation tax planning</li>
                      <li>● long-term equity strategy</li>
                  </ul>
                  <p className="mt-4">Especially where scaling businesses expect future investment rounds or acquisition discussions.</p>
              </div>
              <div className="bg-slate-200 rounded-lg flex items-center justify-center" style={{ minHeight: '400px' }}>
                  <span className="text-slate-500">EMI SEIS/EIS Diagram Placeholder</span>
              </div>
          </section>

          <section className="bg-slate-50 p-8 rounded-lg">
            <h3 className="text-3xl font-bold text-slate-950 mb-6">Where EMI Share Option Schemes Usually Become Problematic</h3>
            <p className="mb-4">The HMRC Worldwide Disclosure Facility process normally follows several stages.</p>
            <div className="table-responsive rounded-4 shadow-sm border bg-white overflow-hidden">
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
            <p className="mt-4 font-semibold italic text-slate-700">This authority section matters because it shows the practical failure points businesses actually encounter.</p>
          </section>

          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-200 rounded-lg flex items-center justify-center" style={{ minHeight: '400px' }}>
                <span className="text-slate-500">EMI Insight Diagram Placeholder</span>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-950 mb-6">Insight Section: The Biggest EMI Mistake Usually Happens Before the Scheme Even Starts</h3>
              <p className="mb-4">Most businesses assume the real risk begins after options are granted.</p>
              <p className="mb-4">In reality, the biggest EMI scheme mistakes often happen during the initial structuring stage.</p>
              <p className="font-semibold mb-2">Founders focus heavily on:</p>
              <ul className="list-unstyled mb-4 space-y-1">
                <li>● percentage allocation</li>
                <li>● future exits</li>
                <li>● employee incentives</li>
              </ul>
              <p className="font-semibold mb-2">but underestimate:</p>
              <ul className="list-unstyled mb-4 space-y-1">
                <li>● valuation methodology</li>
                <li>● growth timing</li>
                <li>● investment interaction</li>
                <li>● share rights</li>
                <li>● future restructuring impact</li>
              </ul>
              <p className="mb-4">A poorly timed EMI scheme can accidentally reduce the very tax advantages the business intended to create.</p>
              <p className="font-semibold mb-2">For example:</p>
              <ul className="list-unstyled mb-4 space-y-1">
                <li>● a valuation agreed after major growth milestones</li>
                <li>● option grants issued before investment restructuring</li>
                <li>● disqualifying changes after acquisition activity</li>
                <li>● incorrect employee qualification assumptions</li>
              </ul>
              <p className="mb-4">can materially alter the future tax position.</p>
              <p>That is why strong EMI schemes are usually designed with future events in mind, not only current conditions.</p>
            </div>
          </section>

          <section className="space-y-4 text-slate-700 leading-relaxed">
            <h3 className="text-3xl font-bold text-slate-950 mb-6">EMI Scheme Tax Benefits – Why Timing Changes Everything</h3>
            <p className="mb-6">The tax efficiency of an EMI scheme depends heavily on timing and compliance continuity. But these outcomes are not automatic.</p>
            <div className="row g-4">
              <div className="col-md-4">
                <p className="font-semibold mb-2">Potential advantages may include:</p>
                <ul className="list-unstyled mb-4 space-y-1">
                  <li>● reduced income tax exposure</li>
                  <li>● capital gains treatment improvements</li>
                  <li>● Business Asset Disposal Relief eligibility</li>
                  <li>● lower National Insurance exposure</li>
                </ul>
              </div>
              <div className="col-md-4">
                <p className="font-semibold mb-2">The tax treatment changes significantly depending on:</p>
                <ul className="list-unstyled mb-4 space-y-1">
                  <li>● when options are exercised</li>
                  <li>● whether HMRC requirements remain satisfied</li>
                  <li>● whether disqualifying events occur</li>
                  <li>● how shares are structured</li>
                  <li>● whether valuations were agreed properly</li>
                </ul>
              </div>
              <div className="col-md-4">
                <p className="font-semibold mb-2">This creates a natural connection between EMI schemes and:</p>
                <ul className="list-unstyled mb-4 space-y-1">
                  <li>● capital gains tax planning</li>
                  <li>● income tax advice</li>
                  <li>● corporation tax strategy</li>
                  <li>● tax advisory services</li>
                </ul>
                <p>Because option planning affects multiple tax areas simultaneously.</p>
              </div>
            </div>
          </section>

          <section className="row g-4 align-items-center">
              <div className="col-md-4">
                  <div className="bg-slate-200 rounded-lg flex items-center justify-center" style={{ minHeight: '400px' }}>
                      <span className="text-slate-500">EMI Services Image Placeholder</span>
                  </div>
              </div>
              <div className="col-md-8">
                  <h3 className="text-3xl font-bold text-slate-950 mb-6">What Our EMI Scheme Services Actually Change</h3>
                  <p className="mb-4">This is not simply about creating employee share options. It is about designing an ownership structure that can still function commercially after growth, investment, and future restructuring begin changing the business. Most firms can technically prepare EMI paperwork.</p>
                  <p className="mb-4">That alone is not the difficult part.</p>
                  
                  <div className="row g-4">
                      <div className="col-md-6">
                          <p className="font-semibold mb-2">The real challenge is designing a structure that:</p>
                          <ul className="list-unstyled mb-4 space-y-1">
                              <li>● survives future investment</li>
                              <li>● remains commercially workable</li>
                              <li>● protects tax efficiency</li>
                              <li>● aligns employee incentives properly</li>
                              <li>● withstands HMRC scrutiny</li>
                              <li>● scales with business growth</li>
                          </ul>
                      </div>
                      <div className="col-md-6">
                          <p className="font-semibold mb-2">Our approach focuses on:</p>
                          <ul className="list-unstyled mb-4 space-y-1">
                              <li>● strategic EMI scheme planning</li>
                              <li>● valuation positioning</li>
                              <li>● HMRC compliance review</li>
                              <li>● share structure assessment</li>
                              <li>● growth-stage planning</li>
                              <li>● future transaction readiness</li>
                              <li>● employee scenario modelling</li>
                          </ul>
                      </div>
                  </div>
                  
                  <p className="mb-4">The difference is not simply “having an EMI scheme.”</p>
                  <p className="font-semibold">It is having one that still works properly several years later when the business becomes larger, more valuable, and commercially more complex.</p>
              </div>
          </section>

          <section className="row g-4 align-items-center">
              <div className="col-md-8">
                  <h3 className="text-3xl font-bold text-slate-950 mb-6">When Businesses Should Speak to EMI Scheme Advisors</h3>
                  <p className="mb-4">Businesses usually benefit most from EMI advice:</p>
                  <ul className="list-unstyled mb-4 space-y-1">
                      <li>● before investment rounds</li>
                      <li>● before rapid growth phases</li>
                      <li>● before acquisitions</li>
                      <li>● before key employee exits</li>
                      <li>● before valuation increases</li>
                      <li>● before restructuring ownership</li>
                      <li>● before granting options informally</li>
                  </ul>
                  <p className="mb-4">Once growth accelerates significantly, flexibility narrows.</p>
                  <p className="mb-4 font-semibold">Valuations increase.</p>
                  <p className="mb-4 font-semibold">Tax efficiency opportunities reduce.</p>
                  <p className="mb-4 font-semibold">Commercial complexity expands.</p>
                  <p>That is why earlier EMI planning usually creates stronger long-term outcomes.</p>
              </div>
              <div className="col-md-4">
                  <div className="bg-slate-200 rounded-lg flex items-center justify-center" style={{ minHeight: '400px' }}>
                      <span className="text-slate-500">EMI Advice Image Placeholder</span>
                  </div>
              </div>
          </section>

          <section className="row g-4 align-items-center bg-slate-50 p-8 rounded-lg">
              <div className="col-md-6">
                  <h3 className="text-3xl font-bold text-slate-950 mb-6">EMI Schemes and Wider Business Reporting</h3>
                  <p className="mb-4">An EMI scheme does not operate independently from the wider business structure.</p>
                  <p className="font-semibold mb-2">It often overlaps with:</p>
                  <ul className="list-unstyled mb-4 space-y-1">
                      <li>● management accounts</li>
                      <li>● statutory accounts</li>
                      <li>● payroll services</li>
                      <li>● financial forecasting</li>
                      <li>● corporation tax planning</li>
                      <li>● share restructuring</li>
                      <li>● long-term business valuation</li>
                  </ul>
                  <p>Because once employee ownership enters the structure, financial reporting and tax planning both become more commercially interconnected.</p>
              </div>
              <div className="col-md-6">
                  <div className="bg-slate-200 rounded-lg flex items-center justify-center" style={{ minHeight: '400px' }}>
                      <span className="text-slate-500">EMI Business Reporting Image Placeholder</span>
                  </div>
              </div>
          </section>

          <section className="row g-4 align-items-center">
              <div className="col-md-6">
                  <div className="bg-slate-200 rounded-lg flex items-center justify-center" style={{ minHeight: '400px' }}>
                      <span className="text-slate-500">EMI Advisors Contact Image Placeholder</span>
                  </div>
              </div>
              <div className="col-md-6">
                  <h3 className="text-3xl font-bold text-slate-950 mb-6">Speak to EMI Scheme Advisors in London UK</h3>
                  <p className="mb-4">If your business is growing and long-term employee retention, equity structuring, or tax-efficient incentives are becoming commercially important, an EMI scheme should be reviewed carefully before decisions become fixed.</p>
                  <p className="font-semibold mb-2">Taxaccolega supports businesses across London and the UK with:</p>
                  <ul className="list-unstyled mb-4 space-y-1">
                      <li>● EMI share option schemes</li>
                      <li>● EMI valuation support</li>
                      <li>● HMRC EMI scheme compliance</li>
                      <li>● employee share scheme planning</li>
                      <li>● option structuring</li>
                      <li>● growth-stage tax planning</li>
                      <li>● startup equity planning</li>
                      <li>● SEIS and EIS integration</li>
                  </ul>
                  <p className="mb-4">The goal is not simply creating options on paper.</p>
                  <p className="font-semibold">It is building an EMI structure that remains commercially useful, tax-efficient, and strategically workable as the business evolves.</p>
              </div>
          </section>

          <section className="py-12 bg-slate-50">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-bold text-slate-950 mb-12 text-center">Our Recent Google Reviews</h2>
              <ReviewsSlider />
            </div>
          </section>

        </div>
      </main>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-950 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
                <button 
                    className="w-full flex justify-between items-center p-6 text-left font-semibold text-slate-950 hover:bg-slate-50 transition duration-150" 
                    onClick={() => toggleFaq(idx)}
                >
                  {faq.q}
                  <span className="ml-4 flex-shrink-0">
                    {activeFaqIndex === idx ? <ChevronUp size={20} className="text-brand-orange"/> : <ChevronDown size={20} className="text-slate-400"/>}
                  </span>
                </button>
                {activeFaqIndex === idx && (
                    <div className="px-6 pb-6 text-slate-600 border-t border-slate-100 pt-4 bg-slate-50/50">
                        {faq.a}
                    </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <div id="contact-section">
        <ContactForm />
      </div>
      <Footer />
      </div>
  );
};

export default EmiSchemesPage;
