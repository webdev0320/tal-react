import React from 'react';

const DirectorExtractions = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="border-4 border-dashed border-gray-300 flex items-center justify-center min-h-[300px]">
          <p className="text-gray-400 font-semibold italic">Company Profit Distribution Blueprint</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Income Tax for Directors and Business Owners</h2>
          <p className="text-gray-600 mb-6">
            For limited company directors, personal tax and company tax rarely stay separate. The way profits are extracted from the business directly affects the personal income tax position. Salary, dividends, pension contributions, retained profits, and reimbursement structures all influence the final liability. This is where income tax naturally overlaps with corporation tax services and management accounts because the business structure itself affects personal taxation.
          </p>
          <p className="font-semibold text-gray-900 mb-4">A poorly structured withdrawal strategy can lead to:</p>
          <ul className="space-y-2 mb-6 text-gray-600 list-inside">
            <li className="flex items-center"><span className="text-[#EA580C] mr-2">●</span> unnecessary higher-rate tax exposure</li>
            <li className="flex items-center"><span className="text-[#EA580C] mr-2">●</span> inefficient dividend extraction</li>
            <li className="flex items-center"><span className="text-[#EA580C] mr-2">●</span> missed allowance opportunities</li>
            <li className="flex items-center"><span className="text-[#EA580C] mr-2">●</span> cash flow pressure later in the tax year</li>
          </ul>
          <p className="text-gray-600 italic">Many directors only realise this after the year-end position is already fixed.</p>
        </div>
      </div>
    </section>
  );
};

export default DirectorExtractions;
