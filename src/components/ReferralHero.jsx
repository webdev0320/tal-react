import React from 'react';
import PageHero from './PageHero';

const ReferralHero = () => {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Refer and Earn', active: true },
  ];

  return (
    <div style={{
      backgroundImage: "url('/images/2023/10/e_learning.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '400px', // Ensure visibility
    }}>
      <div style={{ backgroundColor: 'rgba(29, 60, 69, 0.85)', minHeight: '400px' }}>
        <PageHero 
          title="Refer & Earn with Taxaccolega"
          subtitle="Know someone who could benefit from expert accounting services? Share Taxaccolega with your network, help them succeed, and earn a handsome reward for every successful referral."
          breadcrumbs={breadcrumbs}
        />
      </div>
    </div>
  );
};

export default ReferralHero;
