import React from 'react';

const PropertyTaxation = () => {
  return (
    <section className="bg-[#F9FAFB] py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Rental Income and Property Taxation</h2>
          <p className="text-gray-600 mb-6">
            Property income creates some of the most misunderstood personal tax situations in the UK. Many landlords assume the tax position is straightforward because rent appears predictable month to month. In reality, rental taxation often becomes complicated because ownership structure, finance costs, maintenance treatment, and future disposal planning all affect the outcome. This becomes even more important where property tax overlaps with capital gains tax accountants and inheritance tax planning services. A property may generate income tax exposure today while also creating CGT exposure later and estate tax implications in the future. That is why property taxation should never be reviewed in isolation.
          </p>
        </div>
        <div className="border-4 border-dashed border-gray-300 flex items-center justify-center min-h-[300px]">
          <p className="text-gray-400 font-semibold italic">Real Estate Metrics Placeholder</p>
        </div>
      </div>
    </section>
  );
};

export default PropertyTaxation;
