import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactSection from '../components/ContactSection';
import HomeContact from '../components/HomeContact';
import StatsCounter from '../components/StatsCounter';
import Partners from '../components/Partners';
import ReviewsSlider from '../components/ReviewsSlider';
import Footer from '../components/Footer';
const ContactUs = () => {
  return (
    <section className="">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-12">
            <HomeContact />
          </div>
          <div className="col-lg-12">
              <StatsCounter />
              <ReviewsSlider />
              <Partners />
          </div>
        </div>
      </div>
      <Footer />
      </section>
  );
};

export default ContactUs;
