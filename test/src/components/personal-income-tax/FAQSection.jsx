import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
    { q: "What does an income tax accountant do?", a: "An income tax accountant reviews income sources, calculates tax liability, prepares returns, and identifies inefficiencies or reporting risks before submission." },
    { q: "Do I need to file a self-assessment tax return?", a: "Generally, yes, if you have income not covered by PAYE, such as rental income, dividends, or foreign income." },
    { q: "Can foreign income still be taxed in the UK?", a: "Yes, even if taxed abroad, UK residents must often declare foreign income and may be subject to UK tax, subject to double taxation agreements." },
    { q: "When should I speak to a personal tax advisor?", a: "Ideally, before major financial decisions or when your income structure becomes complex, not just at the filing deadline." },
    { q: "Can a tax advisor reduce income tax legally?", a: "Yes, by ensuring you utilize all available allowances, reliefs, and efficient structures." },
    { q: "What happens if income is reported incorrectly?", a: "Incorrect reporting can lead to HMRC investigations, penalties, and interest charges." }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 shadow-sm">
              <button
                className="w-full text-left p-4 font-bold text-gray-900 bg-gray-50 flex justify-between"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                {faq.q}
                <span>{activeIndex === index ? '-' : '+'}</span>
              </button>
              {activeIndex === index && (
                <div className="p-4 text-gray-600 bg-white">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
