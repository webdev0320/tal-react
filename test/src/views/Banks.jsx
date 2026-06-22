"use client";
import { useState } from 'react';
import Partners from '../components/Partners';
import ReviewsSlider from '../components/ReviewsSlider';

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */

const InlineContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); alert('Message sent!'); };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="text"
          name="name"
          className="form-control form-control-sm border"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          name="email"
          className="form-control form-control-sm border"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <textarea
          name="message"
          rows="4"
          className="form-control form-control-sm border"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn w-100" style={{ background: '#e07b39', color: '#fff', fontWeight: 600 }}>
        Send
      </button>
    </form>
  );
};

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); alert('Message sent!'); };

  return (
    <section className="py-5 border-top">
      <div className="container py-4">
        <h2 className="text-center fw-bold mb-5" style={{ color: '#1a2332' }}>
          <span className="text-muted fw-normal">— </span>Contact - Us<span className="text-muted fw-normal"> —</span>
        </h2>
        <div className="row g-4">
          {/* Address */}
          <div className="col-md-3">
            <div className="d-flex align-items-start gap-3">
              <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: 48, height: 48, background: '#e07b3920' }}>
                <i className="fas fa-map-marker-alt" style={{ color: '#e07b39' }}></i>
              </div>
              <div>
                <h6 className="fw-bold mb-1" style={{ color: '#1a2332' }}>Address</h6>
                <p className="text-secondary small mb-0">187a London Road, Croydon, Surrey, CR0 2RJ</p>
              </div>
            </div>
          </div>
          {/* Phone/Fax */}
          <div className="col-md-3">
            <div className="d-flex align-items-start gap-3">
              <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: 48, height: 48, background: '#e07b3920' }}>
                <i className="fas fa-phone-alt" style={{ color: '#e07b39' }}></i>
              </div>
              <div>
                <h6 className="fw-bold mb-1" style={{ color: '#1a2332' }}>Phone No</h6>
                <p className="text-secondary small mb-0">020 8127 0728<br />074 7117 0484</p>
              </div>
            </div>
          </div>
          {/* Email */}
          <div className="col-md-3">
            <div className="d-flex align-items-start gap-3">
              <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: 48, height: 48, background: '#e07b3920' }}>
                <i className="fas fa-envelope" style={{ color: '#e07b39' }}></i>
              </div>
              <div>
                <h6 className="fw-bold mb-1" style={{ color: '#1a2332' }}>Email</h6>
                <p className="text-secondary small mb-0">info@taxaccolega.co.uk</p>
              </div>
            </div>
          </div>
          {/* Opening Hours */}
          <div className="col-md-3">
            <div className="d-flex align-items-start gap-3">
              <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: 48, height: 48, background: '#e07b3920' }}>
                <i className="fas fa-clock" style={{ color: '#e07b39' }}></i>
              </div>
              <div>
                <h6 className="fw-bold mb-1" style={{ color: '#1a2332' }}>Opening Hours</h6>
                <p className="text-secondary small mb-0">Monday - Friday<br />9:00 am - 5:00 pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="row g-4 mt-2">
          <div className="col-md-8 offset-md-2">
            <form onSubmit={handleSubmit} className="p-4 border rounded-3 shadow-sm bg-white">
              <div className="row g-3">
                <div className="col-md-6">
                  <input type="text" name="name" className="form-control" placeholder="Name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <input type="email" name="email" className="form-control" placeholder="Email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="col-12">
                  <textarea name="message" rows="4" className="form-control" placeholder="Message" value={formData.message} onChange={handleChange} required />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn px-5" style={{ background: '#e07b39', color: '#fff', fontWeight: 600 }}>
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
const Banks = () => (
  <div>
    {/* ── 3. Page Hero Banner ── */}
    <header
      className="position-relative text-white d-flex align-items-center"
      style={{
        minHeight: '280px',
        backgroundImage: "url('/images/young-asian.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ background: 'rgba(20,32,54,0.65)', zIndex: 1 }}
      />
      <div className="container position-relative py-5 text-center text-md-start" style={{ zIndex: 2 }}>
        <h1 className="display-3 fw-bold text-white mb-1">Bank</h1>
      </div>
    </header>

    {/* ── 4. Breadcrumb ── */}
    <div className="bg-white border-bottom py-2">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0 small">
            <li className="breadcrumb-item"><a href="/" className="text-decoration-none" style={{ color: '#e07b39' }}>Home</a></li>
            <li className="breadcrumb-item active text-secondary">Bank</li>
          </ol>
        </nav>
      </div>
    </div>

    {/* ── 5. How do we help Banking? ── */}
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5">
            <img
              src="/images/2024/07/bank-image.jpg"
              alt="How do we help Banking"
              className="img-fluid rounded-3 shadow"
            />
          </div>
          <div className="col-lg-7">
            <div className="border-start border-3 border-warning ps-3 mb-3">
              <h2 className="fw-bold mb-0" style={{ color: '#1a2332' }}>
                How do we help Banking?
              </h2>
            </div>
            <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>
              We provide a range of banking services that are tailored to each individual client's requirements. Support for regulatory compliance is part of this, making sure banks follow the most recent rules and laws to avoid fines and improve their reputation. By identifying, evaluating, and reducing financial risks, our risk management services assist banks in protecting their assets and gaining long-term stability.
            </p>
            <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>
              In addition, we offer strategic planning services, where we offer professional guidance on market entry, growth strategies, and competitive positioning. We also provide operational efficiency solutions, which assist banks in streamlining their operations, enhancing customer support, and cutting expenses. We help our clients meet their strategic goals, stay in compliance with regulations, and improve their financial performance by providing them with individualised and all-inclusive banking solutions.
            </p>
            <a
              href="/contact-us/"
              className="btn px-4 py-2 text-white"
              style={{ background: '#e07b39', fontWeight: 600, borderRadius: '4px' }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* ── 6. Partners Strip ── */}
    <Partners />

    {/* ── 7. Title: The Best Partner for Banking Excellence ── */}
    <section className="py-5 bg-white">
      <div className="container text-center">
        <h2 className="fw-bold mb-1" style={{ color: '#1a2332' }}>
          <span className="text-muted fw-normal">— </span>The Best Partner for<span className="text-muted fw-normal"> —</span>
        </h2>
        <h3 className="fw-bold mb-5" style={{ color: '#e07b39' }}>Banking Excellence</h3>
      </div>
    </section>

    {/* ── 8. METTLE Segment ── */}
    <section className="py-4 bg-light">
      <div className="container">
        <div className="card border-0 shadow-sm p-4 rounded-3" style={{ background: '#fff' }}>
          <div className="row g-4 align-items-center">
            <div className="col-md-5 text-center">
              <img
                src="/images/2024/07/mettle-images.jpg"
                alt="Mettle Bank"
                className="img-fluid rounded-3"
                style={{ maxHeight: '280px', objectFit: 'contain' }}
              />
            </div>
            <div className="col-md-7">
              <h4 className="fw-bold mb-3" style={{ color: '#1a2332' }}>METTLE</h4>
              <p className="text-secondary small mb-3" style={{ lineHeight: 1.8 }}>
                Selecting Mettle Bank for your business is a strategic decision that sets you on a path to financial empowerment and efficiency. Mettle, a part of the NatWest Group, offers a comprehensive suite of digital banking services tailored to entrepreneurs, freelancers, and small businesses. Mettle lets you manage your business finances seamlessly through their user-friendly mobile app.
              </p>
              <p className="text-secondary small mb-3" style={{ lineHeight: 1.8 }}>
                They provide features like invoicing, expense tracking, and intuitive financial insights to help you stay in control. Plus, Mettle's partnership with FreeAgent simplifies accounting, making tax returns easy. Your business deserves a bank that understands your challenges and empowers your growth, and Mettle does just that with its innovative approach to banking.
              </p>
              <p className="text-secondary small mb-4" style={{ lineHeight: 1.8 }}>
                What sets Anna Bank apart is our commitment to delivering personalised service and expert guidance to navigate the financial landscape. As your trusted financial ally, we're here to help your business thrive. We ensure that you have the tools and support you need to succeed in today's dynamic business world.
              </p>
              <a
                href="/contact-us/"
                className="btn px-4 py-2 text-white"
                style={{ background: '#e07b39', fontWeight: 600, borderRadius: '4px' }}
              >
                Book Free Consultancy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── 9. Get In Touch + Send Us a Message ── */}
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row g-5">
          {/* Left: contact info + map */}
          <div className="col-lg-5">
            <h4 className="fw-bold mb-4" style={{ color: '#1a2332' }}>Get in Touch</h4>
            <div className="d-flex flex-column gap-3 mb-4">
              <div className="d-flex align-items-center gap-3">
                <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: 42, height: 42, background: '#e07b3920' }}>
                  <i className="fas fa-phone-alt small" style={{ color: '#e07b39' }}></i>
                </div>
                <div>
                  <span className="text-muted small d-block">Phone Number</span>
                  <a href="tel:02081270728" className="fw-semibold text-decoration-none" style={{ color: '#1a2332' }}>020 8127 0728</a>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3">
                <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: 42, height: 42, background: '#25d36620' }}>
                  <i className="fab fa-whatsapp small text-success"></i>
                </div>
                <div>
                  <span className="text-muted small d-block">Whatsapp</span>
                  <a href="https://wa.me/447471170484" target="_blank" rel="noreferrer" className="fw-semibold text-decoration-none" style={{ color: '#1a2332' }}>074 7117 0484</a>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3">
                <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: 42, height: 42, background: '#e07b3920' }}>
                  <i className="fas fa-envelope small" style={{ color: '#e07b39' }}></i>
                </div>
                <div>
                  <span className="text-muted small d-block">Email</span>
                  <a href="mailto:info@taxaccolega.co.uk" className="fw-semibold text-decoration-none" style={{ color: '#1a2332' }}>info@taxaccolega.co.uk</a>
                </div>
              </div>
              <div className="d-flex align-items-start gap-3">
                <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 mt-1" style={{ width: 42, height: 42, background: '#e07b3920' }}>
                  <i className="fas fa-map-marker-alt small" style={{ color: '#e07b39' }}></i>
                </div>
                <div>
                  <span className="text-muted small d-block">Address</span>
                  <span className="fw-semibold small" style={{ color: '#1a2332' }}>187a London Road, Croydon, Surrey, CR0 2RJ</span>
                </div>
              </div>
            </div>
            {/* Embedded map */}
            <div className="rounded-3 overflow-hidden border" style={{ height: '200px' }}>
              <iframe
                title="Taxaccolega Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2491.2!2d-0.0922!3d51.3727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876056bd5f35c5f%3A0x5d3b14c5da9f0def!2s187a%20London%20Rd%2C%20Croydon%20CR0%202RJ!5e0!3m2!1sen!2suk!4v1234567890"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: message form */}
          <div className="col-lg-7">
            <h4 className="fw-bold mb-4" style={{ color: '#1a2332' }}>Send Us a Message</h4>
            <InlineContactForm />
          </div>
        </div>
      </div>
    </section>

    {/* ── 10. Reviews Slider ── */}
    <ReviewsSlider />

    {/* ── 11. Contact - Us ── */}
    <ContactUs />

    {/* ── 12. Partners Strip ── */}
    <Partners />
  </div>
);

export default Banks;

