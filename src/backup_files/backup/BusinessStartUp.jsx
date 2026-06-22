"use client";
import React, { useState } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import Partners from '../components/Partners';
import Footer from '../components/Footer';

const BusinessStartUp = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const handleFaqToggle = (tab) => {
    setActiveFaq(activeFaq === tab ? null : tab);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs Placeholder */}
      {/* <Breadcrumbs /> */}

      <div className="mb-8">
        <p className="text-lg font-bold">Startups</p>
        <p className="text-xl mt-2">We empower startups for success.</p>
      </div>

      <img
        width="650"
        height="600"
        src="/wp-content/uploads/2023/08/Untitled-design-5.png"
        alt="Startup support illustration"
        srcSet="/wp-content/uploads/2023/08/Untitled-design-5.png 650w, /wp-content/uploads/2023/08/Untitled-design-5-600x554.png 600w, /wp-content/uploads/2023/08/Untitled-design-5-300x277.png 300w"
        sizes="(max-width: 650px) 100vw, 650px"
        className="mx-auto my-8 rounded-lg shadow-md"
      />

      <h2 className="text-3xl font-bold mb-4">How do we help Startups?</h2>
      <p className="mb-4">
        Our start-up support provides essential services to nurture emerging businesses. We offer expert financial guidance for
        robust business planning and budgeting, optimising tax strategies, and selecting the ideal legal structure.
        Compliance is a priority, including precise bookkeeping and financial reporting.
      </p>
      <p className="mb-4">
        We identify funding sources and facilitate connections among businesses, aiding business development. Streamline
        operations through technology tools. We also offer educational resources.
      </p>
      <p className="mb-8">
        This comprehensive support empowers start-ups to focus on core activities with strong financial foundations.
      </p>

      <a href="/contact-us/" className="inline-block bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-700 transition duration-300 mb-8">
        Contact us
      </a>

      <Partners />

      <h2 className="text-3xl font-bold mb-4">The Benefits Of Hiring An Accountant</h2>
      <p className="mb-4">
        Hiring an accountant will be beneficial even for a small business at different stages of a company’s growth. An
        accountant will almost certainly charge less per hour than you would if you hired them to handle time-consuming
        duties like taxes. Not only will you have more time to devote to earning money, but you’ll also feel more at
        ease knowing that a professional is handling the specifics.
      </p>

      <div className="flex flex-wrap gap-4 my-8">
        <a role="button" className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
          Join Us Today
        </a>
        <a href="tel:02083929375" className="inline-block bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition duration-300">
          Find Out More
        </a>
      </div>

      <img
        width="500"
        height="400"
        src="/wp-content/uploads/2023/08/Untitled-design-7.png"
        alt="Accountant benefits illustration"
        srcSet="/wp-content/uploads/2023/08/Untitled-design-7.png 500w, /wp-content/uploads/2023/08/Untitled-design-7-300x240.png 300w"
        sizes="(max-width: 500px) 100vw, 500px"
        className="mx-auto my-8 rounded-lg shadow-md"
      />

      <h2 className="text-3xl font-bold mb-4">FAQs</h2>
      <div className="my-8">
        {/* FAQ Item 1 */}
        <div className="border-b border-gray-200 py-4">
          <h3
            id="faq-title-1"
            className="flex items-center justify-between text-xl font-semibold cursor-pointer text-orange-600 hover:text-orange-700"
            onClick={() => handleFaqToggle('2541')}
            role="button"
            aria-controls="faq-content-1"
            aria-expanded={activeFaq === '2541'}
          >
            WHEN TO HIRE AN ACCOUNTANT
            <span>
              {activeFaq === '2541' ? (
                <svg viewBox="0 0 320 512" className="w-4 h-4 fill-current">
                  <path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"></path>
                </svg>
              ) : (
                <svg viewBox="0 0 320 512" className="w-4 h-4 fill-current">
                  <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                </svg>
              )}
            </span>
          </h3>
          {activeFaq === '2541' && (
            <div id="faq-content-1" className="mt-2 text-gray-700 animate-fadeIn" aria-labelledby="faq-title-1">
              <p>
                <strong>It makes</strong> perfect sense for a growing business with complex accounting issues to hire Taxaccolega and take advantage of knowledge and expertise. Not only do we offer advice about how best to progress your business with an in-depth business model and financial plan, but will also save you hundreds if not thousands of pounds in tax breaks and potential HMRC penalties. Even if you are a sole trader or freelancer working from home, Taxaccolega can help you prepare your year-end accounts and ensure you avoid fines for late submission or incorrect completion of your Self Assessment Tax Return form. We also offer a bookkeeping service to ensure your finances are kept up to date and to save your valuable time doing it yourself.
              </p>
            </div>
          )}
        </div>

        {/* FAQ Item 2 */}
        <div className="border-b border-gray-200 py-4">
          <h3
            id="faq-title-2"
            className="flex items-center justify-between text-xl font-semibold cursor-pointer text-orange-600 hover:text-orange-700"
            onClick={() => handleFaqToggle('2542')}
            role="button"
            aria-controls="faq-content-2"
            aria-expanded={activeFaq === '2542'}
          >
            REGISTERED OFFICE SERVICES
            <span>
              {activeFaq === '2542' ? (
                <svg viewBox="0 0 320 512" className="w-4 h-4 fill-current">
                  <path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"></path>
                </svg>
              ) : (
                <svg viewBox="0 0 320 512" className="w-4 h-4 fill-current">
                  <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                </svg>
              )}
            </span>
          </h3>
          {activeFaq === '2542' && (
            <div id="faq-content-2" className="mt-2 text-gray-700 animate-fadeIn" aria-labelledby="faq-title-2">
              <p style={{ textAlign: 'left' }}>
                Every business needs a registered office which must be lodged with Companies House and HM Revenue &amp;
                Customs. For a small monthly fee of just £8.00 you can use our offices as your official Registered Office
                address. We will therefore receive and handle on your behalf you’re your correspondence from HM Revenue
                &amp; Customs and Companies House. The benefit of this service gives you peace of mind and allows you
                to concentrate on growing your business without the hassle of maintaining the postal administration
                from governing authorities.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Contact Info (Repeated sections consolidated) */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 my-10 text-center">
        <div className="flex flex-col items-center">
          <FaPhone className="text-orange-600 text-3xl mb-2" />
          <h3 className="font-bold text-lg">Phone:</h3>
          <p>
            <a href="tel:02081270728" className="text-blue-600 hover:underline">
              020 8127 0728
            </a>
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FaWhatsapp className="text-green-500 text-3xl mb-2" />
          <h3 className="font-bold text-lg">Whatsapp:</h3>
          <p>
            <a href="https://wa.me/447471170484" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              074 7117 0484
            </a>
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FaEnvelope className="text-red-600 text-3xl mb-2" />
          <h3 className="font-bold text-lg">Email:</h3>
          <p>
            <a href="mailto:info@taxaccolega.co.uk" className="text-blue-600 hover:underline">
              info@taxaccolega.co.uk
            </a>
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FaMapMarkerAlt className="text-gray-700 text-3xl mb-2" />
          <h3 className="font-bold text-lg">Address:</h3>
          <p>187a London Road, Croydon, Surrey, CR0 2RJ</p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center gap-6 my-8">
        <a href="https://www.facebook.com/Taxaccolega" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800 transition-colors duration-300">
          <FaFacebookF className="text-3xl" aria-label="Facebook" />
        </a>
        <a href="https://twitter.com/Taxaccolega" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition-colors duration-300">
          <FaTwitter className="text-3xl" aria-label="Twitter" />
        </a>
        <a href="https://plus.google.com/u/0/100672948850520944033" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700 transition-colors duration-300">
          {/* Icon-google-review - Assuming a generic icon or custom SVG */}
          <svg viewBox="0 0 488 512" className="w-8 h-8 fill-current" aria-label="Google Reviews">
            <path d="M488 261.8C488 116.6 379.2 8 244 8S0 116.6 0 261.8c0 144.3 104.9 261.8 244 261.8 19.3 0 38.6-2 57.5-6.8L488 512l-58.8-154.2c29.1-36.5 48.8-80.1 48.8-130zM120 236h-40v40h40V236zm80 0h-40v40h40V236zm80 0h-40v40h40V236zm80 0h-40v40h40V236z"></path>
          </svg>
        </a>
      </div>

      <h2 className="text-3xl font-bold mb-4">Our Recent Google Reviews</h2>
      {/* Google Reviews Widget Placeholder */}
      <div className="bg-gray-100 p-6 rounded-lg my-8 text-center text-gray-600">
        <p>[ Google Reviews Widget would be integrated here, e.g., using a third-party React library or iframe ]</p>
      </div>

      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      {/* Contact Info (Repeated but different formatting) */}
      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="flex flex-col items-center text-center">
          <FaPhone className="text-orange-600 text-4xl mb-2" />
          <h3 className="font-bold text-xl">
            <a href="tel:02081270728" className="text-gray-800 hover:text-orange-600 transition-colors duration-300">Phone Number</a>
          </h3>
          <p>
            <a href="tel:02081270728" className="text-blue-600 hover:underline">020 8127 0728</a>
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaWhatsapp className="text-green-500 text-4xl mb-2" />
          <h3 className="font-bold text-xl">
            <a href="https://wa.me/07471170484" className="text-gray-800 hover:text-green-500 transition-colors duration-300">Whatsapp</a>
          </h3>
          <p>
            <a href="https://wa.me/447471170484" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">074 7117 0484</a>
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaEnvelope className="text-red-600 text-4xl mb-2" />
          <h3 className="font-bold text-xl">
            <a href="mailto:info@taxaccolega.co.uk" className="text-gray-800 hover:text-red-600 transition-colors duration-300">Email</a>
          </h3>
          <p>
            <a href="mailto:info@taxaccolega.co.uk" className="text-blue-600 hover:underline">info@taxaccolega.co.uk</a>
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center text-center my-8">
        <FaMapMarkerAlt className="text-gray-700 text-4xl mb-2" />
        <h3 className="font-bold text-xl">Address</h3>
        <p>187a London Road, Croydon, Surrey, CR0 2RJ</p>
      </div>

      <iframe
        loading="lazy"
        src="https://maps.google.com/maps?q=187a%20London%20Road%2C%20Croydon%2C%20Surrey%2C%20CR0%202RJ&#038;t=m&#038;z=11&#038;output=embed&#038;iwloc=near"
        title="187a London Road, Croydon, Surrey, CR0 2RJ"
        aria-label="187a London Road, Croydon, Surrey, CR0 2RJ"
        className="w-full h-96 border-0 rounded-lg shadow-md mb-8"
      ></iframe>

      <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
      <form method="post" name="New Form" noValidate className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="form-field-name" className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="form-field-name"
            placeholder="Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="form-field-email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="form-field-email"
            placeholder="Email"
            required
            aria-required="true"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="form-field-message" className="block text-gray-700 text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            name="message"
            id="form-field-message"
            rows="7"
            placeholder="Message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
        >
          Send
        </button>
      </form>
      <Footer />
      </div>
  );
};

export default BusinessStartUp;

