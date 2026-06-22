"use client";
import React from 'react';
import Partners from './Partners';
import ReviewsSlider from './ReviewsSlider';
import ContactUs from '../views/ContactUs';

const ReferralProcess = () => {
  return (
    <>
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
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/2024/11/modern-business-scaled.jpg"
                alt="How it works"
                className="w-100 object-cover"
                style={{ width: '100%', height: 'auto', maxHeight: '420px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        <div className="row align-items-stretch g-5 mt-12">
          <div className="col-lg-6 d-flex flex-column justify-content-center order-lg-1">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/2024/11/entrepreneur-man-brainstorming-management-strategy-working-hard-meeting-office-scaled.jpg"
                alt="Refer and earn"
                className="w-100 object-cover"
                style={{ width: '100%', height: 'auto', maxHeight: '420px', objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center order-lg-2">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D3C45] mb-6">How Does the Refer and Earn Program Work?</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              It’s amazingly simple. When you refer a new client to Taxaccolega, and they sign up for any of our services, you get rewarded with a handsome percentage of their monthly payment straight in your account. It’s that easy!
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed">Here’s how the process works:</p>
            <ul className="text-slate-600 list-disc pl-5 space-y-3">
              <li>
                <strong>A Friend, Family Member, or Colleague Can Be Referred</strong>
                <div>Spread the word in your network about the services we offer; small or medium business accounting services, tax consulting, or personal finance help. Anyone in your network could benefit from our personalised services while you receive a generous reward.</div>
              </li>
              <li>
                <strong>Your Referral Signs Up with Us</strong>
                <div>Once your referral gets in touch with us and signs up for any of our services, they’ll enjoy personalized accounting solutions designed to fit their needs.</div>
              </li>
              <li>
                <strong>You Get Rewarded</strong>
                <div>For every successful referral that becomes a Taxaccolega client, we’ll pay you a generous commission, a percentage of their monthly payment. The more you refer, the more you can earn.</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </section>
      <Partners />    

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="row align-items-stretch g-5">
            <div className="col-lg-8 d-flex flex-column justify-content-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1D3C45] mb-6">Why Refer to Taxaccolega?</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">You might be wondering, “Why should I refer my friends to Taxaccolega?” Here’s why:</p>

              <h3 className="text-xl font-semibold mt-4 mb-2">1. Trusted by Clients Across the UK</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">Taxaccolega isn’t just another accountancy firm. We’re a trusted partner to businesses and individuals alike. We offer a versatile range of services from tax relief to bookkeeping, corporate tax returns, and SEIS/EIS. Our client-first approach and transparency enable us to build long-lasting relationships and partnerships.</p>
              <p className="text-slate-600 mb-4 leading-relaxed">Industry bodies like ACCA and ICAEW also completely accredit us, therefore you can be confident your reference is in secure, qualified, and professional hands.</p>

              <h3 className="text-xl font-semibold mt-4 mb-2">2. Simple Process with No Hassles</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">We’ve made the referral process as easy as possible. There’s no complex paperwork, no fine print — just refer someone, and once they sign up, you’ll get rewarded. We want you to enjoy the process, not be bogged down with unnecessary steps.</p>

              <h3 className="text-xl font-semibold mt-4 mb-2">3. Generous Rewards</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">We believe in rewarding our referrers well. The more you refer, the more you can earn. And since our services are highly sought after, we’re confident that you’ll have no problem finding new clients for us.</p>

              <h3 className="text-xl font-semibold mt-4 mb-2">4. Services That Make a Difference</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">Referring someone to us brings them to more than just an accounting business. You are connecting them with a professional team of specialists who will assist and seamlessly streamline their finances, save on their taxes, and enhance their business. Our clients always praise us for the positive influence we have had on their activities.</p>
            </div>

            <div className="col-lg-4 d-flex flex-column justify-content-center">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/2024/07/Untitled-2.jpg"
                  alt="Why refer to Taxaccolega"
                  className="w-100 object-cover"
                  style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

        <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="row">
            <div className="col-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1D3C45] mb-6">Who Can Participate in the Refer and Earn Program?</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">This program is open to everyone — whether you’re a current client, a first-time visitor, or someone who simply knows a business or individual who could benefit from our services. If you know someone who could use professional accounting advice, we want you to help them while earning a reward.</p>

              <h3 className="sr-only">Examples</h3>
              <p className="text-slate-600 mb-4 leading-relaxed"><strong>Here are some examples of who might benefit from referring someone to Taxaccolega:</strong></p>
              <ul className="text-slate-600 list-disc pl-5 space-y-2">
                <li>Freelancers and Contractors looking for advice on self-assessment and tax relief.</li>
                <li>Small Business Owners who need tax planning, bookkeeping, or corporate tax filing.</li>
                <li>Property Owners or Investors seeking assistance with capital gains tax or property tax.</li>
                <li>Startups and Growing Businesses needing SEIS/EIS advice or general business consultancy.</li>
              </ul>

              <p className="text-slate-600 mt-4 leading-relaxed">No matter who they are, if they need trusted accounting services, your referral could make all the difference — and reward you in the process.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="row">
            <div className="col-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1D3C45] mb-6">How to Get Started</h2>
            </div>
          </div>

          <div className="row align-items-stretch g-5 mt-6">
            <div className="col-lg-4 d-flex flex-column justify-content-center">
              <h3 className="text-xl font-semibold mb-3">1. Sign Up and Get Your Unique Referral Link</h3>
              <p className="text-slate-600 leading-relaxed">Just sign up for our Refer and Earn scheme through the user-friendly registration form. Next you will get a unique referral link or code that you can share via email, social media, or word of mouth.</p>
            </div>

            <div className="col-lg-4 d-flex flex-column justify-content-center">
              <h3 className="text-xl font-semibold mb-3">2. Share and Spread the Word</h3>
              <p className="text-slate-600 leading-relaxed">Let your network know about Taxaccolega’s services and the benefits of working with our experts. You can share your unique link or simply send people our way — it’s up to you!</p>
            </div>

            <div className="col-lg-4 d-flex flex-column justify-content-center">
              <h3 className="text-xl font-semibold mb-3">3. Earn Your Rewards</h3>
              <p className="text-slate-600 leading-relaxed">We will process your commission and guarantee you are paid quickly and easily once your referral signs up as a customer.

              It’s as easy as that! We want to maximize the simplicity and advantage of your “Refer and Earn” experience.</p>
            </div>
          </div>
        </div>
      </section>
      
    

      

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="row align-items-stretch g-5">
            <div className="col-lg-4 d-flex flex-column justify-content-center">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/2024/11/payroll-automation.jpg"
                  alt="Join refer and earn"
                  className="w-100 object-cover"
                  style={{ width: '100%', height: 'auto', maxHeight: '420px', objectFit: 'cover' }}
                />
              </div>
            </div>

            <div className="col-lg-8 d-flex flex-column justify-content-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1D3C45] mb-6">Join the Refer and Earn Program Today!</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">So, what are you waiting for? Join the Taxaccolega Refer and Earn program today, start referring new clients, and earn generous rewards for each successful sign-up.</p>
              <p className="text-slate-600 mb-4 leading-relaxed">Help us grow, and we’ll reward you in return. It’s a win-win!</p>
              <p className="text-slate-600 mb-4 leading-relaxed">Call now to get started or click below to sign up for the Refer and Earn Program. You’re just a referral away from your first monthly reward.</p>
            </div>
          </div>
        </div>
      </section>

      <ContactUs />

      
    </>
  );
};

export default ReferralProcess;
