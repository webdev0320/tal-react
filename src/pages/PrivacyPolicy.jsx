import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <div className="container py-5">
        <h1>Privacy Policy</h1>
        <p>Information about privacy policy...</p>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
