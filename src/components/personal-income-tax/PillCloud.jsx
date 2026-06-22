import React from 'react';

const PillCloud = () => {
  const pills = [
    'Corporation Tax', 'Value Added Tax', 'Inheritance Tax', 'Tax Investigation',
    'Capital Gain Tax', 'Estate Tax Planning', 'Research & Development', 'Tax Advisory',
    'EMI Scheme', 'SEIS and EIS Accounting', 'Non-uk-Resident', 'Let Property Campaign',
    'Worldwide Disclosure Facility', 'Cryptocurrency', 'Income Tax', 'Film Tax Relief'
  ];

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4 flex flex-wrap justify-center gap-4">
        {pills.map((pill, index) => (
          <button
            key={index}
            className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {pill}
          </button>
        ))}
      </div>
    </section>
  );
};

export default PillCloud;
