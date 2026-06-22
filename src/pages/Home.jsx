import React from 'react';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Top Rated Chartered Accountants in London - Local Tax & Accounting Firm</h1>
      
      <div className="prose lg:prose-xl mb-4">
        <p><strong>Discover Simple and Effective Accounting Solutions with Taxaccolega.</strong></p>
        <p>Taxaccolega wasnâ€™t built to be just another accountancy firm. Since we don't just do the numbers, so it grew from a simple belief: real support goes beyond spreadsheets. It means promptly answering the call when a clientâ€™s unsure. It means patiently explaining things without using jargons. And it means celebrating growth, not just tracking it.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Expertise Grid - Condensed representation */}
        <div className="p-4 border rounded-lg">
          <h3 className="font-bold">Self Assessment Tax Accountant</h3>
          <p>Login made easy. Get help with registering and filing your self-assessment tax return accurately and on time.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-bold">Payroll Services</h3>
          <p>Stress-free online payroll outsourcing services for small and medium businesses. Accurate and Compliant.</p>
        </div>
      </div>
      <Footer />
      </div>
  );
};

export default Home;
