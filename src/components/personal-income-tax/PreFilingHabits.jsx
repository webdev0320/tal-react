import React from 'react';

const PreFilingHabits = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
        <div className="p-6 border-2 border-[#EA580C]">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Insight: most personal tax problems are created before the accountant ever sees the figures</h3>
          <p className="text-gray-600">
            By the time many people contact an income tax accountant, the financial decisions themselves have already happened. The salary has already been drawn. The dividends have already been distributed. The overseas income has already been received. The property expenses have already been mixed together without structure. This matters because some tax inefficiencies can be corrected before filing — but others cannot. That is why experienced personal tax advisors focus on timing as much as calculations. The earlier the review happens, the more flexibility still exists.
          </p>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Income Tax Planning Throughout the Year</h3>
          <p className="text-gray-600">
            Strong personal tax planning is rarely about finding one dramatic tax-saving trick. It usually comes from consistent small decisions being handled properly throughout the year. That may involve reviewing director remuneration, managing pension contributions efficiently, separating personal and business expenses correctly, or preparing properly for large changes in income. Income tax planning also becomes stronger when connected with bookkeeping services, payroll services, and financial forecasting because better records create better decisions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PreFilingHabits;
