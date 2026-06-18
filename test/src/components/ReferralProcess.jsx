import React from 'react';

const ReferralProcess = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="row align-items-stretch g-5">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D3C45] mb-6">Helping You Earn While Helping Others</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              At Taxaccolega, we believe that success is best when shared. Whether you are an old client, a first-time visitor, or someone only checking our services, our Refer and Earn program lets you earn a decent reward by simply informing others about our professional accounting services.
            </p>
            <p className="text-slate-600 leading-relaxed mb-0">
              We know how strong positive word-of-mouth referrals can be. If you have already availed Taxaccolega’s top rated accounting services, then you know how much of a difference we can make in the lives of small businesses and individuals. Now, we’re giving you the chance to earn if you can share your positive experience.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl h-100">
              <img 
                src="/images/2024/11/modern-business-scaled.jpg" 
                alt="How it works" 
                className="w-100 h-100 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralProcess;
