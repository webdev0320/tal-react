const FAQSection = () => {
  const faqs = [
    { id: "faq1", question: "What is the process for non-domiciled tax filings?", answer: "Non-domiciled individuals first report UK income and can choose to pay tax on foreign income only when the income is brought in to the UK. From April 2025 new rules will apply. so it’s worth checking your tax status, as new arrivals qualify for 100% tax relief on foreign income and gains during their first 4 years in the UK." },
    { id: "faq2", question: "What should I do if I’ve missed a tax deadline?", answer: "Act quickly file or pay as immediately to avoid penalties and interest. Then contact HMRC or your tax consultant to discuss late filing or paying." },
    { id: "faq3", question: "What’s the difference between tax avoidance and tax evasion?", answer: "Tax avoidance occurs within legal confines to reduce taxation whereas tax evasion is illegal and involves deliberately hiding income or falsifying information. We guide to help you to stay in compliance and legality." },
    { id: "faq4", question: "How can I reduce my tax bill legally?", answer: "You can reduce tax by using allowances, structuring income efficiently, claiming expenses, and timing income or asset sales smartly. We provide personalised tax planning to help you do this legally." },
    { id: "faq5", question: "What should I do if I disagree with a tax bill or HMRC assessment?", answer: "You have the right to appeal or request a review. Start by contacting HMRC or your tax adviser quickly. We can help with appeals, negotiations, and representing you if needed." },
    { id: "faq6", question: "How can I protect my business from future tax audits or disputes?", answer: "Maintain accurate records, stay compliant with reporting rules, and check your tax strategy regularly. We offer audit protection, risk evaluation, and ongoing support to keep you prepared." },
    { id: "faq7", question: "How do I ensure compliance with the IR35 rules?", answer: "IR35 applies if you’re hired through a limited company but are actually an employee. Regular checking of your contracts and your employment status is important. We can examine your arrangements and advise you on compliance." },
  ];

  return (
    <section className="py-5 bg-light">
        <div className="container py-4">
            <div className="text-center max-w-xl mx-auto mb-5">
                <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Common Inquiries</span>
                <h2 className="mt-2 text-brand-dark display-5 brand-font">FAQs</h2>
                <div className="bg-brand-orange mx-auto my-3" style={{ width: "80px", height: "3px" }}></div>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-9">
                    <div className="accordion mb-5" id="faqAccordion">
                        {faqs.map((faq, index) => (
                            <div key={faq.id} className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#${faq.id}`}>
                                        {faq.question}
                                    </button>
                                </h2>
                                <div id={faq.id} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default FAQSection;
