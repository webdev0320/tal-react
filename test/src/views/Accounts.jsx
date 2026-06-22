"use client";
import { useState } from 'react';
import Link from 'next/link';
import Partners from '../components/Partners';
import ReviewsSlider from '../components/ReviewsSlider';
import Footer from '../components/Footer';
import AccountsServiceGrid from '../components/AccountsServiceGrid';
import { accountsLinks } from '../data/accountsLinks';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const accountsTags = [
  'BOOKKEEPING', 'STATUTORY ACCOUNTS', 'MANAGEMENT ACCOUNTS',
  'PAYROLL SERVICES', 'SELF-ASSESSMENT & TAX RETURN', 'PENSION & AUTO ENROLMENT',
  'CONSOLIDATED ACCOUNTS', 'FINANCIAL FORECASTING', 'CASHFLOW FORECASTING',
];

const primaryServices = [
  {
    title: 'Bookkeeping',
    img: '/images/2024/07/bookkeeping-1.jpg',
    desc: 'Our specialised team of certified accountants is dedicated to enhancing your business\'s performance by managing your accounts efficiently and profitably. We offer comprehensive bookkeeping solutions tailored to your business needs.',
    link: '/accounts/bookkeeping-services/',
  },
  {
    title: 'Statutory Accounts',
    img: '/images/2024/07/statuary-accounts.jpg',
    desc: 'Taxaccolega ensures your business reporting is accurate and a powerful tool for growth. Our team of highly qualified professionals navigates complex financial regulations to produce accurate, compliant statutory accounts.',
    link: '/accounts/statutory-accounts/',
  },
  {
    title: 'Management Accounts',
    img: '/images/2024/07/16.jpg',
    desc: 'Taxaccolega transforms your financial data into valuable insights through our Management Accounts services. Our experts ensure your financial data is clear and actionable, facilitating strategic decision-making.',
    link: '/accounts/management-accounts/',
  },
];

const secondaryServices = [
  {
    title: 'Payroll Services',
    img: '/images/2024/07/06-1.jpg',
    desc: 'Taxaccolega streamlines your payroll processes, ensuring timely and accurate payroll management. Our experts handle all aspects of payroll, from calculating wages and deductions to HMRC real-time information filings.',
    link: '/accounts/payroll-services/',
  },
  {
    title: 'Self-Assessment & Tax Return',
    img: '/images/2024/07/14-1.jpg',
    desc: 'Taxaccolega simplifies the process of self-assessment and tax returns, ensuring accuracy and compliance. Our experts meticulously record and interpret your financial data, minimising tax liabilities and ensuring timely submission.',
    link: '/accounts/self-assessment/',
  },
  {
    title: 'Pension & auto Enrolment',
    img: '/images/2024/07/17.jpg',
    desc: 'Taxaccolega manages workplace pension schemes and auto-enrolment compliance, helping businesses fulfill their legal obligations while handling assessment, calculations, and communications.',
    link: '/accounts/auto-enrolment-pension-contributions/',
  },
];

const tertiaryServices = [
  {
    title: 'Consolidated Accounts',
    img: '/images/2024/07/13.jpg',
    desc: 'Taxaccolega specialises in Consolidated Accounts, streamlining fiscal reporting for multinational corporations and interconnected businesses to deliver a single clear financial overview.',
    link: '/accounts/consolidated-accounts/',
  },
  {
    title: 'Financial Forecasting',
    img: '/images/2024/07/15.jpg',
    desc: 'Taxaccolega specialises in financial forecasting, streamlining fiscal reporting for multinational corporations and interconnected businesses. Our team compiles and projects future financial positions.',
    link: '/accounts/financial-forecasting/',
  },
  {
    title: 'Cashflow Forecasting',
    img: '/images/2023/10/Maximise-your-liquid-cash.jpg',
    desc: 'Taxaccolega streamlines your financial planning with cashflow forecasting, ensuring you maintain healthy liquidity and can prepare for upcoming capital requirements, cycles, or investments.',
    link: '/accounts/cash-flow-forecasting/',
  },
];

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */

const DarkServiceCard = ({ service }) => (
  <div className="col-md-4">
    <div className="card service-card border-0 shadow overflow-hidden h-100">
      <div className="position-relative" style={{ height: '200px', overflow: 'hidden' }}>
        <img
          src={service.img}
          alt={service.title}
          className="w-100 h-100"
          style={{ objectFit: 'cover', filter: 'brightness(0.55)' }}
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end p-3">
          <h5 className="text-white fw-bold mb-0">{service.title}</h5>
        </div>
      </div>
      <div className="card-body bg-brand-dark text-white-50 d-flex flex-column">
        <p className="small mb-4" style={{ lineHeight: 1.7, color: '#adb5bd' }}>{service.desc}</p>
        <a href={service.link} className="btn btn-sm btn-brand mt-auto align-self-start">
          Read More &rarr;
        </a>
      </div>
    </div>
  </div>
);

const LightServiceCard = ({ service }) => (
  <div className="col-md-4">
    <div className="card service-card border shadow-sm overflow-hidden h-100">
      <div style={{ height: '180px', overflow: 'hidden' }}>
        <img
          src={service.img}
          alt={service.title}
          className="w-100 h-100"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="fw-bold mb-2 text-brand-dark">{service.title}</h5>
        <p className="text-secondary small mb-4" style={{ lineHeight: 1.7 }}>{service.desc}</p>
        <a href={service.link} className="btn btn-sm btn-brand mt-auto align-self-start">
          Read More &rarr;
        </a>
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
const Accounts = () => (
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
        className="position-absolute top-0 start-0 w-100 h-100 bg-brand-dark"
        style={{ opacity: 0.65, zIndex: 1 }}
      />
      <div className="position-absolute end-0 bottom-0" style={{ zIndex: 1, opacity: 0.85 }}>

      </div>
      <div className="container position-relative py-5 text-center text-md-start" style={{ zIndex: 2 }}>
        <h1 className="display-3 fw-bold text-white mb-1">Accounts</h1>
        <p className="lead text-white-50">Your path to success</p>
      </div>
    </header>

    {/* ── 4. Breadcrumb ── */}
    <div className="bg-white border-bottom py-2">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0 small">
            <li className="breadcrumb-item"><a href="/" className="text-decoration-none" style={{ color: '#e07b39' }}>Home</a></li>
            <li className="breadcrumb-item active text-secondary">Accounts</li>
          </ol>
        </nav>
      </div>
    </div>

    {/* ── 5. Cloud Online Accountants Title + Tag Pills ── */}
    <section className="py-5 bg-white">
      <div className="container text-center">
        <h2 className="fw-bold mb-2 text-brand-orange">Cloud Online Accountants</h2>
        <h3 className="fw-bold mb-3 text-brand-dark">Services For Limited Companies</h3>
        <h5 className="fw-semibold text-secondary mb-2">Cloud-Based Accounting Solutions and Services</h5>
        <p className="text-secondary mb-4">
          Cloud Including Software Packages and Programs for<br/>
          Cloud Businesses Across the United Kingdom
        </p>
        
        {/* Service Navigation Buttons */}
        <AccountsServiceGrid items={accountsLinks} />
      </div>
    </section>

    {/* ── 6. Partners Strip ── */}
    <Partners />

    {/* ── 7. "Our Accounts Services" ── */}
    <section className="py-5" style={{ background: '#f8f9fa' }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5" style={{ color: '#1a2332' }}>
          <span className="text-muted fw-normal">— </span>Our Accounts Services<span className="text-muted fw-normal"> —</span>
        </h2>
        <div className="row g-4">
          {primaryServices.map((s) => <LightServiceCard key={s.title} service={s} />)}
        </div>
      </div>
    </section>

    {/* ── 8. How Do We Help with Accounting? ── */}
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5">
            <img
              src="/images/2024/07/accounting.jpg"
              alt="How do we help in Accounting"
              className="img-fluid rounded-3 shadow"
            />
          </div>
          <div className="col-lg-7">
            <h2 className="fw-bold mb-3 text-brand-dark">How Do We Help with<br /><span className="text-brand-orange">Accounting?</span></h2>
            <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>
              Effective accounting involves a thorough examination of an individual's or company's financial activities, aimed at ensuring accuracy, transparency, and compliance with regulatory standards. Our comprehensive accounting services encompass the systematic recording, reporting, and analysis of financial transactions, utilising legal frameworks to optimise financial health and operational efficiency.
            </p>
            <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>
              Our team of experienced chartered accountants and financial consultants offers solutions that go beyond mere bookkeeping, delivering insight, visibility, and control over all financial records.
            </p>
            <a
              href="/contact-us/"
              className="btn btn-lg px-5 btn-brand"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* ── 9. Second row of service cards (dark) ── */}
    <section className="py-5" style={{ background: '#f8f9fa' }}>
      <div className="container">
        <div className="row g-4">
          {secondaryServices.map((s) => <DarkServiceCard key={s.title} service={s} />)}
        </div>
      </div>
    </section>

    {/* ── 10. Get In Touch + Send Us a Message ── */}
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row g-5">
          {/* Left: contact info + map */}
          <div className="col-lg-5">
            <h4 className="fw-bold mb-4 text-brand-dark">Get In Touch</h4>
            <div className="d-flex flex-column gap-3 mb-4">
              <div className="d-flex align-items-center gap-3">
                <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: 42, height: 42, background: '#e07b3920' }}>
                  <i className="fas fa-phone-alt small text-brand-orange"></i>
                </div>
                <div>
                  <span className="text-muted small d-block">Phone Number</span>
                  <a href="tel:02081270728" className="fw-semibold text-decoration-none text-brand-dark">020 8127 0728</a>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3">
                <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: 42, height: 42, background: '#25d36620' }}>
                  <i className="fab fa-whatsapp small text-success"></i>
                </div>
                <div>
                  <span className="text-muted small d-block">Whatsapp</span>
                  <a href="https://wa.me/447471170484" target="_blank" rel="noreferrer" className="fw-semibold text-decoration-none text-brand-dark">074 7117 0484</a>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3">
                <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: 42, height: 42, background: '#e07b3920' }}>
                  <i className="fas fa-envelope small text-brand-orange"></i>
                </div>
                <div>
                  <span className="text-muted small d-block">Email</span>
                  <a href="mailto:info@taxaccolega.co.uk" className="fw-semibold text-decoration-none text-brand-dark">info@taxaccolega.co.uk</a>
                </div>
              </div>
              <div className="d-flex align-items-start gap-3">
                <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 mt-1" style={{ width: 42, height: 42, background: '#e07b3920' }}>
                  <i className="fas fa-map-marker-alt small text-brand-orange"></i>
                </div>
                <div>
                  <span className="text-muted small d-block">Address</span>
                  <span className="fw-semibold small text-brand-dark">187a London Road, Croydon, Surrey, CR0 2RJ</span>
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
            <h4 className="fw-bold mb-4 text-brand-dark">Send Us a Message</h4>
            <InlineContactForm />
          </div>
        </div>
      </div>
    </section>

    {/* ── 11. Third row of service cards (dark) ── */}
    <section className="py-5" style={{ background: '#f8f9fa' }}>
      <div className="container">
        <div className="row g-4">
          {tertiaryServices.map((s) => <DarkServiceCard key={s.title} service={s} />)}
        </div>
      </div>
    </section>

    {/* ── 12. Google Reviews ── */}
    <ReviewsSlider />

    {/* ── 13. Contact - Us ── */}
    <ContactUs />

    {/* ── 14. Partners Strip ── */}
    <Partners />
  </div>
);

export default Accounts;

