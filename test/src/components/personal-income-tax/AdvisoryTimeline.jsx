"use client";
import React from 'react';

const AdvisoryTimeline = () => {
  const bullets = [
    "income sources begin changing",
    "property income starts growing",
    "overseas earnings become relevant",
    "director remuneration changes",
    "dividends increase significantly",
    "large one-off income events occur"
  ];

  return (
    <section className="bg-[#F9FAFB] py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">When You Should Speak to a Personal Tax Advisor</h2>
          <p className="text-gray-600 mb-6">
            Most people wait until the filing deadline is already approaching. That is usually the worst stage to start reviewing complex income. You should ideally speak to a personal tax advisor when:
          </p>
          <ul className="space-y-2 mb-6 text-gray-600 list-inside">
            {bullets.map((bullet, index) => (
              <li key={index} className="flex items-center"><span className="text-[#EA580C] mr-2">●</span> {bullet}</li>
            ))}
          </ul>
          <p className="text-gray-600 italic">At that point, decisions can still be adjusted. After submission, many of those opportunities disappear completely.</p>
        </div>
        <div className="border-4 border-dashed border-gray-300 flex items-center justify-center min-h-[300px]">
          <p className="text-gray-400 font-semibold italic">Advisory Consultation Visual</p>
        </div>
      </div>
    </section>
  );
};

export default AdvisoryTimeline;
