"use client";
import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';
import ContactSection from '../components/ContactSection';
import StatsCounter from '../components/StatsCounter';
import ReviewsSlider from '../components/ReviewsSlider';
import ContactUs from './ContactUs';
const SwitchAccountant = () => {
  return (
    <div>
      
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-md-6">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/2023/10/Untitled-design-600x554.png"
                  alt="Switch Accountant"
                  className="w-100 object-cover"
                  style={{ width: '100%', height: 'auto', maxHeight: '480px', objectFit: 'cover' }}
                />
              </div>
            </div>

            <div className="col-md-6">
              <h2 className="mb-4">Are You Looking To Switch Accountants?</h2>
              <ul className="list-unstyled text-slate-600">
                <li className="mb-2">● Have you had an unexpected tax bill or fee?</li>
                <li className="mb-2">● Are you struggling to contact your accountant?</li>
                <li className="mb-2">● Are you concerned about cyber security?</li>
                <li className="mb-2">● Current accountant not using the latest tech?</li>
              </ul>

              <p className="mt-3 fw-semibold">Join Us Today</p>
              <a href="tel:02083929375" className="btn btn-brand btn-lg mt-3">Find Out More</a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-md-12">
                    <StatsCounter />
            </div>
            </div>
            </div>
            </section>

      <section className="py-12 bg-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h2 className="text-3xl font-bold mb-4">Why Taxaccolega?</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">Our tailored accounting packages are great value and our pricing is transparent so there are no hidden fees or surprises.</p>

              <p className="text-slate-600 mb-4 leading-relaxed">We operate under a Client Service Guarantee. This means that all requests made to your accountant before 3pm will be responded to that very same day or we’ll issue you with a £50 compensation payment.</p>

              <p className="text-slate-600 mb-0 leading-relaxed">You will have your own dedicated accountant with access to their email address and direct dial number for unlimited advice and support.</p>
            </div>

            <div className="col-md-6">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/2023/08/Untitled-design-13-600x554.png"
                  alt="Why Taxaccolega"
                  className="w-100 object-cover"
                  style={{ width: '100%', height: 'auto', maxHeight: '420px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReviewsSlider />
      
      <section className="py-12 bg-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-md-6">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/2023/10/5554900040c08883758b9976_60b92ba6d5551-600x711.jpg"
                  alt="We Make Switching Easy"
                  className="w-100 object-cover"
                  style={{ width: '100%', height: 'auto', maxHeight: '480px', objectFit: 'cover' }}
                />
              </div>
            </div>

            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h2 className="text-3xl font-bold mb-4">We Make Switching Easy</h2>
              <p className="text-slate-600 leading-relaxed">1. Switching to Taxaccolega is a hassle-free process, thanks to our efficient and streamlined procedures. We’ll handle the entire transition for you, taking care of communication with your previous accountant and ensuring a seamless switch. To initiate the process, simply reach out to a member of our New Business team at 020 8127 0728 or request a call back through our website. They will guide you through your options, address any inquiries, and help determine the optimal time, considering your year-end, to join Taxaccolega.</p>
              <p className="text-slate-600 leading-relaxed">Here’s a step-by-step breakdown of the process:
              1. Contact our New Business team and discuss your options.
              2. Complete our online application form.
              3. Notify your current accountant about the switch (we can handle this on your behalf).
              4. We’ll gather all necessary accounting records and information from your previous accountant.
              5. We’ll set you up on FreeAgent, and you’ll be ready to experience the comprehensive Taxaccolega Accounting Service.</p>
              <a href="https://www.taxaccolega.co.uk/contact-us/" className="btn btn-brand mt-4">Contact us</a>
            </div>
          </div>
        </div>
      </section>

      <ContactUs />
      


    </div>
  );
};

export default SwitchAccountant;
