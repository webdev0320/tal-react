"use client";
import React from 'react';

const Hero = () => {
  const links = [
    { title: "Tax Investigation", link: "#" },
    { title: "VAT Tax Accounting official", link: "#" },
    { title: "Non Uk Resident Taxation", link: "#" },
    { title: "Tax Advisory", link: "#" },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
        <div className="md:w-[60%]">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Personal Income Tax Accountants</h1>
          <p className="text-xl text-gray-700 mb-6 font-semibold">Income tax problems usually begin long before the tax return is filed</p>
          <div className="space-y-4 text-gray-600">
            <p>
              Very few people suddenly wake up one morning and realise their income tax position has become complicated. It happens gradually. A director starts taking dividends alongside salary because the business is growing. A property that was originally bought as a long-term investment begins generating rental income. Freelance work starts as a side project and slowly becomes regular income. Overseas earnings remain outside attention because tax has already been paid somewhere else.
            </p>
            <p>
              Nothing feels especially serious while each part is happening individually. The problem usually appears later, when all of it has to be brought together properly. That is the point where people start noticing that income tax is not simply about earnings. It is about how different sources interact, how they are reported, which allowances still apply, and whether the structure behind the income is actually efficient.
            </p>
            <p>
              This is why working with experienced income tax chartered accountants is not only about filing returns. It is about understanding how your overall financial position is being taxed before mistakes become expensive to correct. Taxaccolega supports individuals, company directors, landlords, consultants, and business owners across London and the UK with personal income tax accounting, HMRC tax return preparation, income structuring, and personal tax planning.
            </p>
          </div>
        </div>
        <div className="md:w-[40%] flex flex-col gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="block p-4 border-2 border-[#EA580C] text-[#EA580C] font-semibold hover:bg-[#EA580C] hover:text-white transition-colors"
            >
              {link.title} <span className="float-right">Read More »</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
