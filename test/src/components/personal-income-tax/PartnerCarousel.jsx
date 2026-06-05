import React from 'react';

const PartnerCarousel = () => {
  return (
    <section className="bg-white py-12 border-y border-gray-200">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Clients and Collaborative Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="h-24 bg-gray-100 flex items-center justify-center font-semibold text-gray-500 border border-gray-200">
              Partner Logo {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerCarousel;
