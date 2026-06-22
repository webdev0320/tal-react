"use client";
import { useState } from 'react';
import Partners from '../components/Partners';
import ReviewsSlider from '../components/ReviewsSlider';
import Footer from '../components/Footer';

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */

const AccordionItem = ({ id, title, icon, content, isOpen, onClick }) => (
  <div className="accordion-item border mb-2 rounded-3 overflow-hidden shadow-sm" style={{ background: '#fff' }}>
    <h2 className="accordion-header" id={`heading-${id}`}>
      <button
        className={`accordion-button ${isOpen ? '' : 'collapsed'} fw-bold d-flex align-items-center gap-3`}
        type="button"
        onClick={onClick}
        style={{
          background: isOpen ? '#1a2332' : '#f8f9fa',
          color: isOpen ? '#fff' : '#1a2332',
          boxShadow: 'none',
          padding: '16px 20px',
        }}
      >
        <i className={`${icon} ${isOpen ? 'text-warning' : 'text-secondary'}`} style={{ width: '20px' }}></i>
        <span>{title}</span>
      </button>
    </h2>
    <div
      className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
      aria-labelledby={`heading-${id}`}
      style={{ transition: 'all 0.3s ease-out' }}
    >
      <div className="accordion-body text-secondary small py-3 px-4" style={{ lineHeight: 1.8 }}>
        {content}
      </div>
    </div>
  </div>
);

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

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
const Software = () => {
  const [openAccordionId, setOpenAccordionId] = useState(1);

  const accordionData = [
    {
      id: 1,
      title: 'DEDICATED LOCAL & ONLINE ACCOUNTANT',
      icon: 'fas fa-user-tie',
      content: 'Taxaccolega provides personalised assistance. You get a dedicated accountant when you work with us who fully knows the ins and outs of your finances. No call centers, no general advice, but a real expert focusing on your specific tax and accounting needs.',
    },
    {
      id: 2,
      title: 'ACCREDITED CHARTERED ACCOUNTANT',
      icon: 'fas fa-award',
      content: 'Our team comprises registered and fully certified chartered accountants, assuring you of the highest professional standards, compliance, and strategic financial planning expertise.',
    },
    {
      id: 3,
      title: 'OPTIMISED TAXATION',
      icon: 'fas fa-percentage',
      content: 'We actively seek out every legal deduction, allowance, and relief to minimise your business\'s tax footprint and keep more of your hard-earned profits inside your business.',
    },
    {
      id: 4,
      title: 'TOTAL TRANSPARENCY',
      icon: 'fas fa-shield-alt',
      content: 'No hidden charges or surprise invoices. We offer clear, agreed fixed-fee packages so you can plan your cashflow with total confidence and ease.',
    },
    {
      id: 5,
      title: 'TIMELY REMINDERS',
      icon: 'fas fa-clock',
      content: 'Never worry about missing an HMRC or Companies House deadline again. We send proactive reminders well ahead of time and handle submissions promptly.',
    },
    {
      id: 6,
      title: 'EXPERT VALUE ADDED GUIDANCE',
      icon: 'fas fa-lightbulb',
      content: 'We go beyond basic numbers. We offer valuable insights into business structure, systems efficiency, scaling strategies, and growth planning.',
    },
  ];

  return (
    <div>
      {/* ── 1. Top bar ── */}
      {/* ── 2. Navbar ── */}
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
          <h1 className="display-3 fw-bold text-white mb-1">Software</h1>
        </div>
      </header>
      {/* ── 4. Breadcrumb ── */}
      <div className="bg-white border-bottom py-2">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 small">
              <li className="breadcrumb-item"><a href="/" className="text-decoration-none" style={{ color: '#e07b39' }}>Home</a></li>
              <li className="breadcrumb-item active text-secondary">Software</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* ── 5. How Do We Help with Software Services? (Top Section) ── */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
            <img
              src="/images/2024/06/software-menue.jpg"
              alt="How Do We Help with Software Services"
              className="img-fluid rounded-3 shadow"
            />
            </div>
            <div className="col-lg-7">
              <div className="border-start border-3 border-warning ps-3 mb-3">
                <h2 className="fw-bold mb-0" style={{ color: '#1a2332' }}>
                  How Do We Help with<br />Software Services?
                </h2>
              </div>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>
                Software solutions are essential to any business's success in the current digital era. Our all-inclusive software services offer customised solutions that improve operational effectiveness, expedite procedures, and stimulate creativity. Our primary focus is on comprehending the distinct requirements of our clientele and providing tailored software solutions that correspond with their corporate objectives.
              </p>
              <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>
                Our group of skilled IT consultants and software developers provides a variety of services, including system integration and support as well as software development and implementation. We guarantee that our clients have the resources necessary to maintain their competitiveness in their industry by utilizing cutting-edge technologies and industry best practices.
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

      {/* ── 6. Accordion Services Section ── */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 text-center">
              <img
                src="/images/2025/04/WhatsApp-Image-2025-04-22-at-14.46.31_c1fe8fe6.jpg"
                alt="Our Services Overview"
                className="img-fluid rounded-3 shadow-sm"
                style={{ maxHeight: '420px', objectFit: 'cover' }}
              />
            </div>
            <div className="col-lg-7">
              <h3 className="fw-bold mb-4" style={{ color: '#1a2332' }}>Services</h3>
              <div className="accordion mb-4" id="servicesAccordion">
                {accordionData.map((item) => (
                  <AccordionItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    icon={item.icon}
                    content={item.content}
                    isOpen={openAccordionId === item.id}
                    onClick={() => setOpenAccordionId(openAccordionId === item.id ? null : item.id)}
                  />
                ))}
              </div>

              {/* Lower description block */}
              <div className="mt-5">
                <h4 className="fw-bold mb-3" style={{ color: '#1a2332' }}>How Do We Help with Software Services?</h4>
                <p className="text-secondary small mb-3" style={{ lineHeight: 1.8 }}>
                  Software solutions are essential to any business's success in the current digital era. Our all-inclusive software services offer customised solutions that improve operational effectiveness, expedite procedures, and stimulate creativity. Our primary focus is on comprehending the distinct requirements of our clientele and providing tailored software solutions that correspond with their corporate objectives.
                </p>
                <p className="text-secondary small" style={{ lineHeight: 1.8 }}>
                  Our group of skilled IT consultants and software developers provides a variety of services, including system integration and support as well as software development and implementation. We guarantee that our clients have the resources necessary to maintain their competitiveness in their industry by utilizing cutting-edge technologies and industry best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Partners Strip ── */}
      <Partners />

      {/* ── 8. Title: Best Accountants in UK with Advance Softwares ── */}
      <section className="py-5 bg-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-1" style={{ color: '#1a2332' }}>
            <span className="text-muted fw-normal">— </span>Best Accountants in UK<span className="text-muted fw-normal"> —</span>
          </h2>
          <h3 className="fw-bold mb-5" style={{ color: '#e07b39' }}>with Advance Softwares</h3>
        </div>
      </section>

      {/* ── 9. XERO Segment ── */}
      <section className="py-4 bg-light">
        <div className="container">
          <div className="card border-0 shadow-sm p-4 rounded-3" style={{ background: '#fff' }}>
            <div className="row g-4 align-items-center">
              <div className="col-md-5 text-center">
                <img
                  src="/images/2024/07/Xero.jpg"
                  alt="Xero Accounting Software"
                  className="img-fluid rounded-3"
                  style={{ maxHeight: '200px', objectFit: 'contain' }}
                />
              </div>
              <div className="col-md-7">
                <h4 className="fw-bold mb-1" style={{ color: '#1a2332' }}>XERO</h4>
                <h6 className="text-secondary fw-semibold mb-3">Your Finances with Advanced Software Solutions</h6>
                <p className="text-secondary small mb-4" style={{ lineHeight: 1.8 }}>
                  As a leading Chartered Accounting firm in London, we specialise in Xero Accounting software. We provide comprehensive accounting and tax advisory services for startups, small businesses, and eCommerce vendors. As Xero Platinum Partners, we simplify financial processes, offer expert migration assistance, and recommend third-party Xero apps. Enhance your business with our personalised support and cutting-edge solutions today!
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

      {/* ── 10. Get In Touch + Send Us a Message ── */}
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

      {/* ── 11. TAXCALC Segment ── */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="card border-0 shadow-sm p-4 rounded-3" style={{ background: '#fff' }}>
            <div className="row g-4 align-items-center">
              <div className="col-md-5 text-center">
                <img
                  src="/images/2024/07/Taxcalc.jpg"
                  alt="TaxCalc Software"
                  className="img-fluid rounded-3"
                  style={{ maxHeight: '200px', objectFit: 'contain' }}
                />
              </div>
              <div className="col-md-7">
                <h4 className="fw-bold mb-3" style={{ color: '#1a2332' }}>TAXCALC</h4>
                <p className="text-secondary small mb-4" style={{ lineHeight: 1.8 }}>
                  At Taxaccolega, we're committed to providing best-in-class solutions to meet your tax needs, which is why we proudly utilise TaxCalc Software. This powerful tax software is designed to streamline and simplify taxation, ensuring efficient tax return preparation, compliance, and accurate calculations, all while meeting tax deadlines with ease. The user-friendly interface makes it accessible to individuals, businesses, and professionals, allowing for seamless collaboration and precise financial management. Our team of tax experts is well-versed in TaxCalc, ensuring your financial affairs are in capable hands. Join us in embracing this cutting-edge solution to navigate your tax journey effortlessly.
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

      {/* ── 12. Reviews Slider ── */}
      <ReviewsSlider />

      <Footer />
      </div>
  );
};

export default Software;

