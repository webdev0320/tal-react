import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ReferAFriend = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <div className="container py-5">
        <h1>Refer A Friend</h1>
        <p>Information about refer a friend...</p>
      </div>
      <Footer />
    </div>
  );
};

export default ReferAFriend;
