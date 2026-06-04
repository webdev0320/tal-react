import React from 'react';

const ForeignIncome = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="border-4 border-dashed border-gray-300 flex items-center justify-center min-h-[300px]">
          <p className="text-gray-400 font-semibold italic">Cross-Border Currency Channels Blueprint</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Foreign Income and Non-UK Earnings</h2>
          <p className="text-gray-600 mb-4">
            Foreign income is one of the areas where people make assumptions most confidently — and often incorrectly. Paying tax abroad does not automatically remove UK reporting obligations. Residency status, domicile position, double taxation agreements, overseas rental income, and foreign employment arrangements all affect the final position differently.
          </p>
          <p className="text-gray-600">
            Some individuals accidentally overpay because they report income inefficiently. Others underreport because they misunderstand what HMRC still expects to see declared. This is where working with tax accountant foreign income specialists becomes essential, especially where income crosses multiple jurisdictions. These situations also connect naturally with non-UK resident taxation services because residency and reporting obligations are closely linked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ForeignIncome;
