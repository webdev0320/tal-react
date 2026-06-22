import React from 'react';

const ExposureAnomalies = () => {
  const bullets = [
    "tax bands have shifted unexpectedly",
    "dividend tax exposure is higher than assumed",
    "rental profits were tracked incorrectly",
    "overseas earnings still needed reporting",
    "allowances have reduced or disappeared"
  ];

  return (
    <section className="bg-[#F9FAFB] py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Income Tax Errors Usually Appear Late</h2>
          <p className="text-gray-600 mb-6">
            One of the most weaknesses with income tax is timing. During the year, income arrives gradually. Nothing feels alarming because no single transaction looks dramatic on its own. The problem appears when the figures are finally combined properly. That is when people realise:
          </p>
          <ul className="space-y-2 mb-6 text-gray-600 list-inside">
            {bullets.map((bullet, index) => (
              <li key={index} className="flex items-center"><span className="text-[#EA580C] mr-2">●</span> {bullet}</li>
            ))}
          </ul>
          <p className="text-gray-600 italic">At that stage, the tax return becomes a clean-up exercise instead of a planned position.</p>
        </div>
        <div className="border-4 border-dashed border-gray-300 flex items-center justify-center min-h-[300px]">
          <p className="text-gray-400 font-semibold italic">Tax Band Shifting Graphic Placer</p>
        </div>
      </div>
    </section>
  );
};

export default ExposureAnomalies;
