"use client";
import React from 'react';
import ContactForm from '../components/ContactForm';
import StatsCounter from '../components/StatsCounter';
import Partners from '../components/Partners';
import ReviewsSlider from '../components/ReviewsSlider';
const ContactUs = () => {
  return (
    <section className="">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-12">
            <ContactForm source="ContactUs" />
          </div>
          <div className="col-lg-12">
              <StatsCounter />
              <ReviewsSlider />
              <Partners />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
