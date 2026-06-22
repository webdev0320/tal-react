import React from 'react';
import ReferralHero from '../components/ReferralHero';
import ReferralProcess from '../components/ReferralProcess';
import ReferralForm from '../components/ReferralForm';
import Partners from '../components/Partners'; // Re-using existing component
import Footer from '../components/Footer';

const ReferAndEarn = () => {
  return (
    <div className="bg-white">
      <ReferralHero />
      <ReferralProcess />
      <Footer />
      </div>
  );
};

export default ReferAndEarn;
