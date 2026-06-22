"use client";
import React from 'react';

const ReviewPanel = () => {
  const reviews = [
    { name: "Md Sajib Miah", text: "Outstanding and quick service! Really supportive and affordable! As a start up company, they supported us a lot while filling the 1st accounts! Thanks Jazzy Khalid for your kind and prompt response on my needs! Read more" },
    { name: "OYINTONYE EMELEDOH", text: "Excellent service from Taxaccolega. Despite my many questions and follow-ups, they remained patient, thorough, and consistently helpful. I really appreciate the effort from the team and the clear guidance throughout. Highly recommended. Read more" },
    { name: "Joe Schofield", text: "Exactly what it says on the tin. Could not recommend enough! Will be using again! Thank you!!" },
    { name: "Krishan Wagay", text: "I can’t recommend my accountant highly enough. Jazzy at Taxaccolega handled my business tax case with exceptional professionalism and attention to detail, and successfully won an appeal on my behalf. Their knowledge, persistence, and clear communication throughout the process gave me real confidence during what could have been a very stressful time. An outstanding service and a true expert in his field. Thanks again Jazzy. Read more" },
    { name: "Quentin Asamoah", text: "Very professional, worked with Jazzy from Taxaccolega. Very helpful and patient and was able to clarify the issue I needed assistance with Read more" },
    { name: "Hespari Properties", text: "This user only left a rating." },
    { name: "Philip James McGoldrick", text: "This user only left a rating." },
    { name: "KINICHA DA COSTA", text: "Excellent! Taxccolega Accountants, every year exceed my expectations with their commitment of excellence and expertise. It's a privilege to collaborate with them, so I highly recommend them. Thank you Read more" },
    { name: "Abdul Nayeem Mohammed", text: "Excellent service!!! Can’t describe in words thanks to the whole team!!!" },
    { name: "Mr Opinionated", text: "Excellent speedy service! Taxaccolega wasted no time. I worked with Jazzy and he was spectacular always kept me in the loop and worked very efficiently would recommend to all those looking for competent and quick accounting service Read more" }
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Recent Google Reviews</h2>
        <div className="text-xl font-semibold text-gray-700 mb-8">5.0 | 193 reviews EXCELLENT | Based on 193 reviews</div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="p-6 border border-gray-200 shadow-sm text-left">
              <h4 className="font-bold text-gray-900 mb-2">{review.name}</h4>
              <p className="text-gray-600 text-sm">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewPanel;
