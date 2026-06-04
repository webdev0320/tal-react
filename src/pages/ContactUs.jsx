import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import ContactSection from '../components/ContactSection';

const ContactUs = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      
      <section className="py-5">
        <div className="container">
          <h1 className="text-center mb-5">Contact Us</h1>
          <div className="row g-5">
            <div className="col-lg-6">
              <ContactSection />
            </div>
            <div className="col-lg-6">
              <div className="bg-light p-4 rounded-4 shadow-sm">
                <h4 className="mb-4">Send us a message</h4>
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

export default ContactUs;
