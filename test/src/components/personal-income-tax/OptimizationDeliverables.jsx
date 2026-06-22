"use client";
import React from 'react';

const OptimizationDeliverables = () => {
  const points = [
    "where the income originates",
    "how it interacts with other income streams",
    "whether the current setup is creating unnecessary exposure",
    "whether future liabilities are already developing quietly"
  ];

  return (
    <section className="bg-[#F9FAFB] py-12">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What Our Income Tax Services Actually Change</h2>
        <p className="text-gray-600 mb-6">
          Most tax accountants can submit a return. That alone is no longer enough. The real difference comes from how the position is reviewed before submission. This is not simply about preparing an HMRC return — it is about understanding how the full income structure behaves once everything is taxed together. At Taxaccolega, the focus is on understanding the structure behind the income itself:
        </p>
        <ul className="space-y-2 mb-8 text-gray-700 font-semibold list-disc list-inside text-left">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <div className="bg-white p-6 border border-gray-200 shadow-sm">
          <p className="text-gray-600 italic">
            That changes outcomes because the return becomes the final step of a reviewed position — not the first time the numbers are properly examined.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OptimizationDeliverables;
