import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Partners from '../components/Partners';
import TaxationLinksBar from '../components/TaxationLinksBar';
import { CheckCircle, ChevronDown, ChevronUp, Star } from 'lucide-react';

const InheritanceTaxPlanning = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  const faqs = [
    { q: 'What does an inheritance tax advisor do?', a: 'An inheritance tax advisor reviews your estate structure, ownership arrangements, gifts, and long-term tax exposure to help reduce unnecessary inheritance tax risk.' },
    { q: 'What is the 7 year gift rule in inheritance tax?', a: 'Gifts made more than 7 years before death are generally exempt from IHT. Gifts made within 7 years may be subject to IHT, with the tax reducing on a sliding scale (taper relief) after 3 years.' },
    { q: 'When should inheritance tax planning start?', a: 'Planning works best early, while ownership and structure still remain flexible, before events like retirement or asset transfers occur.' },
    { q: 'Can inheritance tax planning involve property?', a: 'Yes, property usually sits at the centre of inheritance tax exposure in the UK due to value increases and complex ownership arrangements.' },
    { q: 'Is inheritance tax planning only for wealthy families?', a: 'No, with rising property values, many ordinary estates can become liable to inheritance tax if not structured appropriately.' },
    { q: 'Why do inheritance tax problems appear late?', a: 'Inheritance tax issues are often created gradually through ordinary decisions over years, rather than one major mistake, becoming visible only during estate administration.' }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">

      <PageHero
        title="Inheritance Tax Planning Advice"
        subtitle="Expert Guidance for Inheritance Tax Planning: Tailored Solutions for Tax-Efficient Strategies at Taxaccolega."
        breadcrumbs={[
            { label: 'Home', link: '/' },
            { label: 'Taxation', link: '/taxation' },
            { label: 'Inheritance Tax Planning Advice', active: true }
        ]}
        sidebarItems={[
            { title: 'Tax Investigation', link: '/taxation/tax-investigation' },
            { title: 'Corporate Tax Accountant', link: '/taxation/corporate-tax-return' },
            { title: 'Income Tax Accountant', link: '/taxation/income-tax' }
        ]}
      />

      <main className="py-16">
        <div className="container mx-auto px-4 space-y-16">
          <section className="space-y-4 text-slate-700 leading-relaxed">
            <h2 className="text-3xl font-bold text-slate-950 mb-6">Families Usually Realise The Estate Was Unplanned Much Later Than They Think</h2>
            <p>Very few people sit down one day and intentionally create a complicated inheritance tax position.</p>
            <p>It normally develops quietly over years.</p>
            <p>A house bought decades ago increases in value far beyond what anyone originally expected. Another property is added later for rental income. Savings accumulate. Investments grow. Business ownership changes. One generation starts helping another financially, often informally and without much documentation because it feels like a family matter rather than a tax matter.</p>
            <p>Nothing about it feels urgent while life is moving normally.</p>
            <p>The pressure usually appears later — after death, during estate administration, or when someone suddenly asks questions that should have been asked years earlier.</p>
            <div className="bg-slate-50 p-6 rounded-lg font-semibold text-slate-900 border-l-4 border-amber-600">
              <p>Who owns what?</p>
              <p>When was the asset transferred?</p>
              <p>Was it gifted properly?</p>
              <p>Did the seven-year rule apply?</p>
              <p>Was inheritance tax planning ever reviewed while the estate was growing?</p>
            </div>
            <p>That is why inheritance tax planning is rarely about “avoiding tax” in a simplistic sense. It is about understanding how an estate is actually structured before decisions become fixed and options become limited.</p>
          </section>

          <TaxationLinksBar />

          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h3 className="text-2xl font-bold mb-4">Inheritance Tax Planning Advisors for Individuals, Families, and Property Owners</h3>
                <p className="leading-relaxed text-slate-700 mb-4">A proper inheritance tax advisor reviews how wealth is held during life, because that structure is usually what determines the eventual tax exposure later.</p>
                <ul className="space-y-3">
                    {['Capital gains tax accountants', 'Estate property tax planning', 'Personal income tax professionals and chartered accountants'].map((item, i) => (
                        <li key={i} className="flex gap-2"><CheckCircle className="text-teal-600" /> {item}</li>
                    ))}
                </ul>
            </div>
            <img src="/placeholder-hero-image.jpg" alt="Inheritance Tax Planning" className="rounded-lg shadow-lg" />
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-950 mb-8">Why Inheritance Tax Planning Often Gets Delayed</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Most estates do not 'large' while they are being built", text: "One reason inheritance tax planning gets delayed is because people often judge estate size based on its current value, not its future potential." },
                { title: "Families assume they will 'sort it later'", text: "Inheritance tax planning is one of the most common, postponed areas of financial planning because there is no urgent writing a cheque, unlike tax on current income." }
              ].map((card, i) => (
                <div key={i} className="border p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-lg mb-3">{card.title}</h4>
                  <p className="text-slate-700">{card.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-12 items-center">
              <img src="/placeholder-review-image.jpg" alt="Review" className="rounded-lg shadow-lg" />
              <div>
                  <h3 className="text-2xl font-bold mb-4">What an Inheritance Tax Advisor Actually Reviews</h3>
                  <p className="leading-relaxed text-slate-700">The review usually involves checking how assets are owned, whether ownership structures still make sense, how gifts have been handled, and whether future exposure is increasing unnecessarily.</p>
              </div>
          </section>

          <section>
             <h3 className="text-2xl font-bold mb-6">Common Areas Reviewed During Inheritance Tax Planning</h3>
             <table className="w-full border-collapse border border-slate-300">
                 <thead className="bg-slate-100">
                     <tr>
                         <th className="p-4 border">Planning Area</th>
                         <th className="p-4 border">Why It Matters</th>
                         <th className="p-4 border">Where Problems Often Begin</th>
                     </tr>
                 </thead>
                 <tbody>
                     {[
                         { a: 'Property ownership', b: 'Determines estate exposure', c: 'Assets held without long-term review' },
                         { a: 'Gifts and transfers', b: 'May fall under the 7 year gift rule', c: 'Poor records or incorrect assumptions' },
                         { a: 'Business assets', b: 'Relief eligibility can vary', c: 'Ownership structure changes over time' },
                         { a: 'Investment planning', b: 'Tax treatment differs by structure', c: 'Investment decisions made without estate review' },
                         { a: 'Family succession', b: 'Transfers between generations', c: 'Informal arrangements without planning' }
                     ].map((row, i) => (
                        <tr key={i}>
                            <td className="p-4 border font-semibold">{row.a}</td>
                            <td className="p-4 border">{row.b}</td>
                            <td className="p-4 border">{row.c}</td>
                        </tr>
                     ))}
                 </tbody>
             </table>
          </section>

          <section className="bg-slate-50 p-12 rounded-lg grid md:grid-cols-2 gap-12 items-center">
              <div>
                  <h3 className="text-2xl font-bold mb-4">Inheritance Tax and the 7 Year Rule</h3>
                  <p className="mb-4">More specifically, gifts made more than 7 years before death are generally exempt from IHT. Gifts made within 7 years may be subject to IHT, with the tax reducing on a sliding scale (taper relief) after 3 years.</p>
                  <p className="mb-4">In settling the estate, the advisor will:</p>
                  <ul className="list-disc pl-5 space-y-2">
                      <li>Check gifts</li>
                      <li>Whether they were documented</li>
                      <li>How ownership was transferred</li>
                      <li>Whether the 7 year rule applies</li>
                  </ul>
                  <p className="mt-4 font-semibold">The 7-year rule is often a major hurdle if records are not kept.</p>
              </div>
              <img src="/placeholder-rule-image.jpg" alt="7 Year Rule" className="rounded-lg shadow-lg" />
          </section>

          <Partners />
          
          <section className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                  <h3 className="text-2xl font-bold mb-4">Insight: Families often create inheritance tax exposure while trying to simplify things</h3>
                  <p className="leading-relaxed text-slate-700">One of the common, non-urgent, yet complex area in planning is IHT. A rarely discussed fact is that IHT exposure often develops not from complex tax schemes, but from everyday life decisions. Families do not realise that the assets they have created are already caught in an IHT liability.</p>
              </div>
              <img src="/placeholder-insight-image.jpg" alt="Insight" className="rounded-lg shadow-lg" />
          </section>
          
          <section className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                  <h3 className="text-2xl font-bold mb-4">Inheritance Tax Planning for Property Owners</h3>
                  <p className="leading-relaxed text-slate-700 mb-4">Property ownership is at the centre of inheritance tax exposure in the UK. Assets such as properties often increase in value. One property may be formerly owned, then made a second, or a third, often with complex ownership arrangements.</p>
                  <p className="leading-relaxed text-slate-700">The estate these property owners have created often has an IHT liability far higher than they expected. For these there are ways to manage ownership and reduce IHT.</p>
              </div>
              <img src="/placeholder-property-image.jpg" alt="Property Owners" className="rounded-lg shadow-lg" />
          </section>

          <section>
             <h3 className="text-2xl font-bold mb-6">Where Inheritance Tax Planning Usually Fails</h3>
             <table className="w-full border-collapse border border-slate-300">
                 <thead className="bg-slate-100">
                     <tr>
                         <th className="p-4 border">IHT Planning Approach</th>
                         <th className="p-4 border">What Gets Missed</th>
                         <th className="p-4 border">Possible Long-Term Result</th>
                     </tr>
                 </thead>
                 <tbody>
                     {[
                         { a: 'Managing gifts, transfers', b: 'No documentation', c: 'IHT exposure on death' },
                         { a: 'Ignoring IHT relief transfers', b: 'Ownership utility', c: 'Dispute or unexpected liabilities' },
                         { a: 'Delaying asset review/IHT', b: 'Reduced planning flexibility', c: 'Limited control later' },
                         { a: 'Ignoring IHT advice', b: 'Asset growth/IHT exposure', c: 'Higher IHT risk' },
                         { a: 'Assuming all gifts are exempt', b: 'Seven-year rule assumptions', c: 'Exposure to more IHT' }
                     ].map((row, i) => (
                        <tr key={i}>
                            <td className="p-4 border font-semibold">{row.a}</td>
                            <td className="p-4 border">{row.b}</td>
                            <td className="p-4 border">{row.c}</td>
                        </tr>
                     ))}
                 </tbody>
             </table>
          </section>

          {/* Reviews */}
          <section className="py-12 bg-slate-50">
            <h2 className="text-3xl font-bold text-center mb-12">Our Recent Google Reviews</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {[1,2,3].map(i => (
                    <div key={i} className="bg-white p-6 rounded-lg shadow">
                        <div className="flex gap-1 text-amber-400 mb-2">{[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor"/>)}</div>
                        <p className="text-slate-700 mb-4">"Excellent service, very professional and helpful."</p>
                        <h5 className="font-bold">Customer Name</h5>
                    </div>
                ))}
            </div>
          </section>

          {/* Specialists */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                  <h3 className="text-2xl font-bold mb-4">Inheritance Tax Specialists and Long-Term Financial Planning</h3>
                  <p className="leading-relaxed text-slate-700">Inheritance tax planning is not a one-time event. It requires ongoing review to ensure it remains aligned with changing laws and estate goals.</p>
              </div>
              <img src="/placeholder-specialist-image.jpg" alt="Specialist" className="rounded-lg shadow-lg" />
          </section>

          {/* Services Change */}
          <section>
              <h3 className="text-2xl font-bold mb-4">What Our Inheritance Tax Planning Services Actually Change</h3>
              <p>The difference with structured inheritance tax planning is that the estate is monitored as a living system, rather than a final product.</p>
          </section>

          {/* When to Speak */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                  <h3 className="text-2xl font-bold mb-4">When You Should Speak To An Inheritance Tax Advisor</h3>
                  <p>People often wait until a crisis occurs before speaking to an advisor.</p>
              </div>
              <img src="/placeholder-speak-image.jpg" alt="Speak" className="rounded-lg shadow-lg" />
          </section>
        </div>
      </main>

      <section className="py-16 bg-slate-950 text-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p>Send us a message or call us today.</p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-950 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-slate-200 shadow-sm">
                <button className="w-full flex justify-between items-center p-6 text-left font-semibold text-slate-950" onClick={() => toggleFaq(idx)}>
                  {faq.q}
                  {activeFaqIndex === idx ? <ChevronUp size={20}/> : <ChevronDown size={20}/>}
                </button>
                {activeFaqIndex === idx && <div className="px-6 pb-6 text-slate-600 border-t border-slate-100 pt-4">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InheritanceTaxPlanning;
