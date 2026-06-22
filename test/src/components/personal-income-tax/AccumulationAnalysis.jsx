"use client";
import React from 'react';

const AccumulationAnalysis = () => {
  return (
    <section className="bg-[#F9FAFB] py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 shadow-sm border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">How Income Tax Actually Becomes Complicated</h3>
          <p className="text-gray-700 font-semibold mb-4">The issue is rarely one income source on its own</p>
          <p className="text-gray-600">
            Most income tax problems develop because different income streams begin overlapping without proper review. A business owner may take dividends without realising how they interact with rental income. Someone working overseas may assume foreign tax removes UK reporting obligations entirely. A landlord may offset expenses incorrectly because the property was previously a personal residence. Individually, none of these situations look unusual. Together, they can completely change the final tax position. A common example is where dividends, rental income, and freelance earnings each appear manageable individually, but collectively push the taxpayer into a higher-rate position they were not expecting. That is why personal tax accounting requires context, not just calculations.
          </p>
        </div>
        <div className="bg-white p-6 shadow-sm border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Income Tax Often Exposes Decisions Made Years Earlier</h3>
          <p className="text-gray-700 font-semibold mb-4">The issue is rarely one income source on its own</p>
          <p className="text-gray-600">
            Many tax issues are created gradually through financial habits that initially seemed harmless. A director takes irregular withdrawals from the business without structured planning. Rental profits are tracked inconsistently over several years. Small freelance earnings are treated casually because they never felt significant enough to review professionally. By the time everything reaches the HMRC income tax account, those small decisions have combined into a much larger issue.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AccumulationAnalysis;
