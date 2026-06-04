import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AccountsLinksBar from '../components/AccountsLinksBar';

const AnnualAccounts = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <AccountsLinksBar />
      <div className="container py-5">
        <h1>Annual Accounts</h1>
        <p>Information about annual accounts services...</p>
      </div>
      <Footer />
    </div>
  );
};

export default AnnualAccounts;
