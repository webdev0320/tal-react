const FAQSection = ({ faqs: propFaqs }) => {
  const defaultFaqs = [
    { id: "faq1", question: "What is the process for non-domiciled tax filings?", answer: "Non-domiciled individuals first report UK income and can choose to pay tax on foreign income only when the income is brought in to the UK. From April 2025 new rules will apply. so it’s worth checking your tax status, as new arrivals qualify for 100% tax relief on foreign income and gains during their first 4 years in the UK." },
    { id: "faq2", question: "What should I do if I’ve missed a tax deadline?", answer: "Act quickly file or pay as immediately to avoid penalties and interest. Then contact HMRC or your tax consultant to discuss late filing or paying." },
    { id: "faq3", question: "What’s the difference between tax avoidance and tax evasion?", answer: "Tax avoidance occurs within legal confines to reduce taxation whereas tax evasion is illegal and involves deliberately hiding income or falsifying information. We guide to help you to stay in compliance and legality." },
    { id: "faq4", question: "How can I reduce my tax bill legally?", answer: "You can reduce tax by using allowances, structuring income efficiently, claiming expenses, and timing income or asset sales smartly. We provide personalised tax planning to help you do this legally." },
    { id: "faq5", question: "What should I do if I disagree with a tax bill or HMRC assessment?", answer: "You have the right to appeal or request a review. Start by contacting HMRC or your tax adviser quickly. We can help with appeals, negotiations, and representing you if needed." },
    { id: "faq6", question: "How can I protect my business from future tax audits or disputes?", answer: "Maintain accurate records, stay compliant with reporting rules, and check your tax strategy regularly. We offer audit protection, risk evaluation, and ongoing support to keep you prepared." },
    { id: "faq7", question: "How do I ensure compliance with the IR35 rules?", answer: "IR35 applies if you’re hired through a limited company but are actually an employee. Regular checking of your contracts and your employment status is important. We can examine your arrangements and advise you on compliance." },
  ];
  
  const faqs = propFaqs || defaultFaqs;

  return (
    <section className="py-20 bg-slate-50">
        <div className="container max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-orange-600 font-bold tracking-[0.2em] uppercase text-[11px]">Frequently Asked Questions</span>
                <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-6">Common Inquiries</h2>
                <div className="h-1 w-20 bg-orange-500 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={faq.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-orange-200">
                        <details className="group">
                            <summary className="flex items-center justify-between p-6 font-semibold text-slate-800 cursor-pointer list-none text-lg">
                                {faq.question}
                                <span className="transition group-open:rotate-180 text-orange-600">
                                    <svg fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <div className="px-6 pb-6 text-slate-600 leading-relaxed pt-0 border-t border-slate-100 pt-4">
                                {faq.answer}
                            </div>
                        </details>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default FAQSection;
