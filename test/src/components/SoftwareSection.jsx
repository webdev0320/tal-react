import React, { useState } from 'react';

const SoftwareSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const softwares = [
    {
      title: "QUICKBOOKS",
      description: "Taxaccolega sees QuickBooks not only as a tool but as a One Stop Solution for organizing the finances of your company. One can envision smoothly managing payroll, automatically handling VAT returns, and easily tracking costs, all simultaneously. QuickBooks makes your accounting work easier whether you are a freelancer or an expanding SME, so you can focus on growing your company. Taxaccolega being QuickBooks certified accountants customizes the software for you, therefore guaranteeing your tax filing, financial reports always on target, and providing current insights. Let us demonstrate to you how QuickBooks might revolutionize your company’s workflow.",
      link: "/quickbooks/"
    },
    {
      title: "SAGE",
      description: "Your Finances with Advanced Software Solutions. As a leading Chartered Accounting firm in London, we specialise in Xero Accounting software. We provide comprehensive accounting and tax advisory services for startups, small businesses, and eCommerce vendors. As Xero Platinum Partners, we simplify financial processes, offer expert migration assistance, and recommend third-party Xero apps. Enhance your business with our personalised support and cutting-edge solutions today!",
      link: "#"
    },
    {
      title: "BTC SOFTWARE",
      description: "BTC, an Ideal accounting software for companies searching for a complete tax and accounting solution in Croydon and London. At Taxaccolega, our BTC Software accountants make it easy for businesses to negotiate capital allowances, company tax returns, and tax compliance chores. Our BTC Software professionals guarantee compliance with HMRC regardless of handling regular accounting tasks or automating tax return. Streamlining your tax returns for dependable and efficient financial management, BTC Software integrates effortlessly with HMRC.",
      link: "/btc-softwares/"
    },
    {
      title: "VT SOFTWARE",
      description: "Running a small business in London or Croydon entails managing several balls simultaneously. VT Software takes your place as your unobtrusive assistant in budgeting, tax returns, and financial reports running. It is the tool that runs in the background keeping everything in order when your business is on the front or in center. VT Software enables you to manage the basics with least effort and utmost effectiveness, whether you run a startup or work as a freelancer. Taxaccolega accountants save your time even more than you probably want to save.",
      link: "/vt-softwares/"
    },
    {
      title: "TAXCALC",
      description: "Running a small business in London or Croydon entails managing several balls simultaneously. VT Software takes your place as your unobtrusive assistant in budgeting, tax returns, and financial reports running. It is the tool that runs in the background keeping everything in order when your business is on the front or in center. VT Software enables you to manage the basics with least effort and utmost effectiveness, whether you run a startup or work as a freelancer.",
      link: "/vt-softwares/"
    },
    {
      title: "FREEAGENT",
      description: "We are accredited accountants serving small businesses and contractors throughout the UK. Our core belief is in enhancing your business’s financial transparency, achieved through award-winning cloud accounting software, Free Agent. As accredited Free Agent accountants for 2022, we offer seamless services to both existing Free Agent users and newcomers. We efficiently synchronise all your financial transactions onto our platform and provide complimentary training to ensure proficiency with Free Agent accounting software. Switching to our services is hassle-free, with a streamlined process that assures a swift and straightforward transfer of your financial data.",
      link: "#"
    },
    {
      title: "XERO",
      description: "Imagine having the power to control and steer your finances, not just manage them. Xero serves as a financial control center, not just accounting software for companies in London and Croydon. Xero offers you a coherent, up-to-date picture of the financial condition of your company regardless of whether you’re reconciling your bank accounts, monitoring cash flow, or getting ready for VAT returns. Perfect for companies that rely on efficiency and invention, it integrates effortlessly with third-party applications. Taxaccolega changes the way you use Xero; we don’t just get you started with it.",
      link: "/xero/"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#1D3C45] mb-12 text-center uppercase tracking-wider">Softwares</h2>
        
        {/* Tabs */}
        <div className="flex flex-nowrap justify-center gap-1.5 mb-10">
          {softwares.map((software, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 rounded-full font-semibold text-xs transition-all duration-300 whitespace-nowrap ${
                activeTab === index 
                  ? 'bg-[#1D3C45] text-white shadow-md' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {software.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100">
          <h3 className="text-2xl font-bold text-[#1D3C45] mb-6">{softwares[activeTab].title}</h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            {softwares[activeTab].description}
          </p>
          {softwares[activeTab].link !== "#" && (
            <a href={softwares[activeTab].link} className="inline-block px-6 py-3 bg-[#d2601a] text-white font-semibold rounded-full hover:bg-[#b85014] transition-all">
              Read More
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default SoftwareSection;
