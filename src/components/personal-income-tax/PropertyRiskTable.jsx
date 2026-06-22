import React from 'react';

const PropertyRiskTable = () => {
  const data = [
    { area: 'Rental income reporting', issue: 'Incomplete expense tracking', outcome: 'Higher taxable profit' },
    { area: 'Joint ownership', issue: 'Incorrect income allocation', outcome: 'HMRC adjustment risk' },
    { area: 'Mortgage interest treatment', issue: 'Misunderstood restrictions', outcome: 'Unexpected liability' },
    { area: 'Property improvements', issue: 'Incorrect categorisation', outcome: 'Relief issues later' },
    { area: 'Overseas property income', issue: 'Double reporting confusion', outcome: 'Compliance risk' },
  ];

  return (
    <section className="bg-[#F9FAFB] py-12">
      <div className="container mx-auto px-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#064E3B] text-white">
              <th className="p-4 text-left">Area of Property Taxation</th>
              <th className="p-4 text-left">Common Issue</th>
              <th className="p-4 text-left">Potential Outcome</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                <td className="p-4 border-b">{row.area}</td>
                <td className="p-4 border-b">{row.issue}</td>
                <td className="p-4 border-b">{row.outcome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PropertyRiskTable;
