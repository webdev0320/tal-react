import React from 'react';

const ReferralProcess = () => {
  const steps = [
    { title: "Refer", desc: "Share your referral link or introduce us to someone needing expert accounting." },
    { title: "Connect", desc: "We contact them and provide a free, no-obligation consultation." },
    { title: "Earn", desc: "Once they sign up as a client, you receive your reward payment." }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D3C45] mb-6">How Does the Refer and Earn Program Work?</h2>
            <div className="space-y-8">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-[#d2601a] text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#1D3C45] mb-2">{step.title}</h4>
                    <p className="text-slate-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://www.taxaccolega.co.uk/wp-content/uploads/2024/11/entrepreneur-man-brainstorming-management-strategy-working-hard-meeting-office-scaled.jpg" 
              alt="How it works" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralProcess;
