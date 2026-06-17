import React, { useState } from 'react';

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const reasons = [
    {
      title: "Dedicated Local & Online Accountant",
      body: "Taxaccolega provides personalised assistance. You get a dedicated accountant when you work with us who fully knows the ins and outs of your finances. No call centers, no general advice, but a real expert focusing on your specific tax and accounting needs."
    },
    {
      title: "Accredited Chartered Accountant",
      body: "Your finances are in the hands of qualified accountants and credible experts since we are licensed and regulated by ICAEW and ACCA. Whether it’s tax planning, accounting advice, or compliance, we 100% guarantee everything is done honestly, accurately, and completely aligned with UK tax laws."
    },
    {
      title: "Optimised Taxation",
      body: "Have been paying too much tax? We will optimise and curtail your unnecessary payable taxes. While we plan and structure strategically and carefully, we help you maximize tax efficiency, claim available reliefs, and avoid unnecessary liabilities, all while staying HMRC-compliant."
    },
    {
      title: "Total Transparency",
      body: "No hidden fees. No surprise charges. We believe in clear, upfront pricing and full transparency in our work. We also use reliable, industry-leading accounting softwares like Xero, Taxcalc, btc, & VT to ensure your tax and financial security, total accuracy and efficiency."
    },
    {
      title: "Timely Reminders",
      body: "Deadlines creep up fast, but we won’t let you miss them. We provide timely reminders for tax filings, payments, and compliance requirements, so you never have to worry about penalties or last-minute stress ever again."
    },
    {
      title: "Expert Value Added Guidance",
      body: "Beyond just the numbers, we provide cashflow forecasting to help you plan for the future. Tax-saving opportunities, investment structuring, or business growth tactics, we’re here to guide you toward smarter tax-saving decisions."
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Image Column */}
          <div className="lg:col-span-6">
            <img
              src="/images/2025/10/WHy-Choose-Us-509x458-1.webp"
              alt="Why Choose Us Taxaccolega"
              className="w-full h-auto rounded-3xl shadow-lg"
            />
          </div>

          {/* Accordion Column */}
          <div className="lg:col-span-6">
            <div className="mb-8">
              <span style={{ fontFamily: '"Pinyon Script", Sans-serif', fontSize: '30px', fontWeight: 400, color: '#1D3C45', textAlign: 'start', columns: 1 }}>Services</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-2">Why Choose Us</h2>
            </div>

            <div className="flex flex-col gap-3">
              {reasons.map((item, index) => {
                const isOpen = activeIndex === index;
                return (
                  <div key={index} className="overflow-hidden">
                    <button
                      onClick={() => setActiveIndex(isOpen ? null : index)}
                      className={`w-full flex justify-between items-center py-3 px-5 text-left font-semibold text-white bg-[#1D3C45] transition-colors duration-300`}
                    >
                      <span className="text-sm">{item.title}</span>
                      <span className="text-xl font-light">
                        {isOpen ? '-' : '+'}
                      </span>
                    </button>
                    <div 
                      className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                      <div className="overflow-hidden">
                        <div className="p-5 text-slate-600 text-sm leading-relaxed border-l border-r border-b border-gray-200">
                          {item.body}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Box (Full Width) */}
          <div className="lg:col-span-12 mt-8 p-8 bg-white border-2 border-[#d2601a] rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1D3C45]">See How Much You Can Save</h3>
              <p className="text-slate-600 text-sm mt-2 max-w-2xl">Take the stress out of UK taxes and accounting today — speak with a top-rated Taxaccolega chartered accountant for personalised advice tailored to your business or personal needs.</p>
            </div>
            <a href="tel:+447912357096" className="px-8 py-4 bg-[#d2601a] text-white text-sm font-semibold rounded-full hover:bg-[#b85014] transition-all whitespace-nowrap uppercase tracking-wider shadow-md hover:shadow-lg">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
