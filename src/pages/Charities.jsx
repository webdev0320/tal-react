"use client";
import React, { useState } from 'react';
import Partners from '../components/Partners';
import Footer from '../components/Footer';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left py-4 px-2 flex justify-between items-center font-semibold text-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <p className="p-2 text-gray-700">{answer}</p>}
    </div>
  );
};

const Charities = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(0);

  const partners = [
    'A', 'ACCA', 'BTC-Softwares', 'Croydon-Chamber', 'Croydon', 'Dext', 'Go-Cardless',
    'Intuit-Quick-Books', 'Lewisham', 'Simply-Business', 'SME-News', 'TAXCALC-1',
    'Three-Best-Rated', 'VT-Software', 'XERO-1', 'Xpert-SM'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Charities</h1>
      <p className="text-xl text-gray-600 mb-6">Empowering Your Mission, Managing Your Finances.</p>
      
      <img src="/wp-content/uploads/2023/08/Untitled-design-6.png" alt="Charity Support" className="w-full max-w-2xl mb-8" />
      
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">How do we help Charities?</h2>
        <p className="mb-4">We help charities by offering tailored services. Our expertise includes financial management, ensuring transparent and compliant record-keeping.</p>
        <p className="mb-4">We navigate intricate tax regulations to provide benefits and maintain tax-exempt status. Effective grant management and precise reporting foster donor trust.</p>
        <a href="/contact-us/" className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold">Contact us</a>
      </section>

      <section className="mb-12">
        <Partners />
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Why Choose Taxaccolega</h2>
        <p className="mb-4">Integrity, honesty, and dedication are the hallmarks of Taxaccolega.</p>
        <p className="mb-4">We are a team of dedicated and experienced accountants committed to providing you with the most comprehensive accountancy services in an agile and realistic manner.</p>
        <div className="flex gap-4">
          <button className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold">Join Us Today</button>
          <a href="tel:02083929375" className="border border-orange-600 text-orange-600 px-6 py-3 rounded-lg font-semibold">Find Out More</a>
        </div>
      </section>

      <img src="/wp-content/uploads/2023/06/fooddrive.webp" alt="Food Drive" className="w-full mb-12" />

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Recent Google Reviews</h2>
        <div className="bg-gray-100 p-8 rounded-lg text-center">Google Reviews Placeholder</div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">FAQs</h2>
        <FAQItem question="What is Lorem Ipsum?" answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry..." />
        <FAQItem question="What is Lorem Ipsum?" answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry..." />
      </section>

      <section className="bg-gray-900 text-white p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p><strong>Phone:</strong> 020 8127 0728</p>
        <p><strong>Email:</strong> info@taxaccolega.co.uk</p>
        <p><strong>Address:</strong> 187a London Road, Croydon, Surrey, CR0 2RJ</p>
      </section>
      <Footer />
      </div>
  );
};

export default Charities;
