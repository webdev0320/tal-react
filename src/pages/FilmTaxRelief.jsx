"use client";
import React, { useState } from 'react';
import TaxationLinksBar from '../components/TaxationLinksBar';
import Footer from '../components/Footer';

const FilmTaxRelief = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <main className="pt-20">
        {/* Component Index 2: Main Page Banner Context */}
        <section className="relative w-full h-80 bg-teal-900 flex items-center justify-center">
          <div className="absolute inset-0 bg-teal-900 opacity-60"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Film Tax Relief</h1>
            <p className="text-xl">Empowering Creativity, Fueling Growth</p>
          </div>
        </section>
        <TaxationLinksBar />
        {/* Component Index 3: FTR Core Overview Section */}
        <section className="container mx-auto px-6 py-12">
          <p className="text-gray-500 mb-6">Home / Taxation / Film tax relief</p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center text-gray-500">Camera Operator Graphic Scene</div>
            <div>
              <h2 className="text-orange-600 font-bold text-lg mb-2">FTR</h2>
              <p className="mb-4">We specialise in offering comprehensive support for Film Tax Relief (FTR), tailored for filmmakers and production companies throughout the UK. Our team of industry experts is dedicated to navigating the complexities of FTR to maximise your financial benefits and contribute to the growth of the British film sector.</p>
              <p className="mb-4">We begin with thorough consultations to assess your project’s eligibility for FTR, strategising the most effective approach to optimise your claim and maximise financial returns. Our team manages the meticulous preparation and timely submission of your FTR application to HMRC, ensuring all required documentation is meticulously compiled and submitted in compliance with regulatory standards.</p>
              <p className="mb-6">Throughout the production process, we provide continuous support to ensure adherence to FTR regulations, including monitoring expenditures, verifying compliance with qualifying conditions, and maintaining essential records crucial for successful claims.</p>
              <button className="bg-teal-900 text-white px-6 py-3 rounded">Contact us</button>
            </div>
          </div>
        </section>

        {/* Component Index 4: Collaborative Partner Carousel Strip 1 */}
        <section className="bg-gray-100 py-8">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-teal-900">Our Clients and Collaborative Partners</h2>
            <div className="flex justify-center space-x-8 mt-6">
              <div className="w-20 h-10 bg-gray-300"></div>
              <div className="w-20 h-10 bg-gray-300"></div>
              <div className="w-20 h-10 bg-gray-300"></div>
            </div>
          </div>
        </section>

        {/* Component Index 5: The Benefits of Hiring an Accountant Module */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-teal-900 mb-6 border-l-4 border-orange-600 pl-4">The Benefits Of Hiring An Accountant</h2>
              <h3 className="text-xl font-bold mb-2">Eligibility Assessment</h3>
              <p className="mb-4">We begin by conducting a thorough assessment of your film project to determine its eligibility for Film Tax Relief under HMRC guidelines. This involves evaluating various criteria such as cultural significance, British certification, and expenditure thresholds.</p>
              <h3 className="text-xl font-bold mb-2">Strategic Planning</h3>
              <p className="mb-4">Based on the eligibility assessment, we develop a tailored strategy to optimise your FTR claim. This strategic planning is essential to maximise the financial benefits while ensuring compliance with all regulatory requirements.</p>
              <h3 className="text-xl font-bold mb-2">Application Preparation</h3>
              <p className="mb-4">Our team accurately prepares and manages the entire process of your FTR application to HMRC. This includes compiling all necessary documentation, ensuring accuracy, and adhering to strict submission deadlines to facilitate a smooth and timely approval process.</p>
              <h3 className="text-xl font-bold mb-2">Compliance Monitoring</h3>
              <p className="mb-6">Throughout the production phase, we provide diligent monitoring of expenditures and activities to verify ongoing compliance with FTR qualifying conditions. This includes maintaining essential records and documentation to substantiate your claim.</p>
              <div className="flex space-x-4">
                <button className="border border-orange-600 text-orange-600 px-6 py-3 rounded">Book Free Consultancy</button>
                <button className="bg-orange-600 text-white px-6 py-3 rounded">Find Out More</button>
              </div>
            </div>
            <div className="bg-yellow-100 h-96 rounded-lg flex items-center justify-center text-yellow-700 font-bold">Creative Production Media Visual Placer</div>
          </div>
        </section>

        {/* Component Index 6: FAQ Dropdown Accordion Component */}
        <section className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-teal-900 mb-8">FAQs</h2>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="mb-4 border-b border-gray-200">
                <button onClick={() => toggleFAQ(i)} className="w-full text-left py-4 font-bold">What is Lorem Ipsum?</button>
                {activeFAQ === i && (
                  <p className="pb-4 text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                )}
              </div>
            ))}
          </div>
          <div className="border border-gray-200 p-6 rounded-lg">
            <p>Phone: 020 8127 0728</p>
            <p>Email Address: info@taxaccolega.co.uk</p>
            <div className="flex space-x-2 mt-4">
              <span className="w-8 h-8 bg-gray-300 rounded-full"></span>
              <span className="w-8 h-8 bg-gray-300 rounded-full"></span>
              <span className="w-8 h-8 bg-gray-300 rounded-full"></span>
            </div>
          </div>
        </section>

        {/* Component Index 7: Verified Google Review Feedback Stacks */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-center mb-8">Our Recent Google Reviews</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Md Sajib Miah", text: "Outstanding and quick service! Really supportive and affordable! As a start up company, they supported us a lot while filling the 1st accounts! Thanks Jazzy Khalid for your kind and prompt response on my needs! Read more" },
                { name: "OYINTONYE EMELEDOH", text: "Excellent service from Taxaccolega. Despite my many questions and follow-ups, they remained patient, thorough, and consistently helpful. I really appreciate the effort from the team and the clear guidance throughout. Highly recommended. Read more" },
                { name: "Joe Schofield", text: "Exactly what it says on the tin. Could not recommend enough! Will be using again! Thank you!!" }
              ].map((review, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow">
                  <h4 className="font-bold mb-2">{review.name}</h4>
                  <p className="text-gray-600">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Component Index 8: Conversion Engine Contact Form Panel */}
        <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-teal-900 mb-6">Contact - Us</h2>
            <p>Address: 187a London Road, Croydon, Surrey, CR0 2RJ</p>
            <p>Phone No: 02081446811 | 020 8127 0728</p>
            <p>Email: info@taxaccolega.co.uk</p>
            <p>Opening Hours: Monday - Friday | 9:00 am - 5:30 pm</p>
          </div>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
            <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
            <input type="text" placeholder="Subject" className="w-full p-2 border rounded" />
            <textarea placeholder="Message" className="w-full p-2 border rounded h-32"></textarea>
            <button className="bg-teal-900 text-white px-6 py-3 rounded">Send</button>
          </form>
        </section>

        {/* Component Index 9: Collaborative Partner Carousel Strip 2 */}
        <section className="bg-gray-100 py-8">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-teal-900">Our Clients and Collaborative Partners</h2>
            <div className="flex justify-center space-x-8 mt-6">
              <div className="w-20 h-10 bg-gray-300"></div>
              <div className="w-20 h-10 bg-gray-300"></div>
              <div className="w-20 h-10 bg-gray-300"></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      </div>
  );
};

export default FilmTaxRelief;
