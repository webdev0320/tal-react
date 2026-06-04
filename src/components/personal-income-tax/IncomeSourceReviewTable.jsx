import React from 'react';

const IncomeSourceReviewTable = () => {
  const data = [
    { source: 'Salary & PAYE', review: 'Tax bands and allowances', importance: 'Prevent overexposure' },
    { source: 'Dividends', review: 'Extraction structure', importance: 'Improve efficiency' },
    { source: 'Rental income', review: 'Expense treatment', importance: 'Avoid inaccurate profits' },
    { source: 'Foreign income', review: 'Reporting obligations', importance: 'Reduce compliance risk' },
    { source: 'Freelance income', review: 'Record consistency', importance: 'Prevent omissions' },
  ];

  return (
    <section className="bg-[#F9FAFB] py-12">
      <div className="container mx-auto px-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#064E3B] text-white">
              <th className="p-4 text-left">Income Source</th>
              <th className="p-4 text-left">What Needs Reviewing</th>
              <th className="p-4 text-left">Why It Matters</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                <td className="p-4 border-b">{row.source}</td>
                <td className="p-4 border-b">{row.review}</td>
                <td className="p-4 border-b">{row.importance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default IncomeSourceReviewTable;
