"use client";
import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';
import ContactForm from '../components/ContactForm';
import ContactSection from '../components/ContactSection';

const ScheduleCall = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <HeroBanner />
      
      <section className="py-5">
        <div className="container">
          <h1 className="mb-4">Meeting With Taxaccolega</h1>
          <p className="lead text-muted mb-5">Delivering Tailored Solutions for Businesses Across All Sectors</p>
          
          <div className="row g-5">
            <div className="col-lg-6">
              <ContactSection />
            </div>
            <div className="col-lg-6">
              <div className="bg-light p-4 rounded-4 shadow-sm">
                <h4 className="mb-4">Schedule your consultation</h4>
                <p>Feel free to reach out to us using the methods above or send us a message directly.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ScheduleCall;
