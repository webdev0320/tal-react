import React from 'react';
import HeroBanner from '../components/HeroBanner';
import ContactForm from '../components/ContactForm';

const ReferAndEarn = () => {
  return (
    <div>
      <HeroBanner />
      
      <section className="py-5">
        <div className="container">
          <h1 className="mb-4">Refer and Earn With Taxaccolega</h1>
          <p className="lead text-muted mb-5">Helping You Earn While Helping Others</p>
          
          <div className="row g-4 mb-5">
            <div className="col-md-6">
              <h3>How It Works</h3>
              <ol>
                <li className="mb-2"><strong>Sign Up:</strong> Register for the scheme to receive a unique referral link or code.</li>
                <li className="mb-2"><strong>Spread the Word:</strong> Share your link or refer people in your network who need accounting services.</li>
                <li className="mb-2"><strong>Earn Rewards:</strong> Once your referral signs up, we process your commission.</li>
              </ol>
            </div>
            <div className="col-md-6">
              <h3>Rewards</h3>
              <p>You receive a handsome percentage of the referred client's monthly payment directly into your account. There is no limit to how much you can earn.</p>
            </div>
          </div>
          
          <div className="bg-light p-4 rounded-4 shadow-sm text-center">
            <h3>Ready to get started?</h3>
            <p>Join the Refer and Earn Program Today!</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReferAndEarn;
