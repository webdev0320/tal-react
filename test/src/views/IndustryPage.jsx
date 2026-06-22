"use client";
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Partners from '../components/Partners';
import ReviewsSlider from '../components/ReviewsSlider';
import { industriesConfig } from '../data/industriesConfig';
import DynamicWpPage from './DynamicWpPage';

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */

const AccordionItem = ({ id, title, content, isOpen, onClick }) => (
  <div className="accordion-item border mb-2 rounded-3 overflow-hidden shadow-sm" style={{ background: '#fff' }}>
    <h2 className="accordion-header" id={`heading-choose-${id}`}>
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
        <span>{title}</span>
      </button>
    </h2>
    <div
      className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
      aria-labelledby={`heading-choose-${id}`}
      style={{ transition: 'all 0.3s ease-out' }}
    >
      <div className="accordion-body text-secondary small py-3 px-4" style={{ lineHeight: 1.8 }}>
        {content}
      </div>
    </div>
  </div>
);

const FaqItem = ({ id, question, answer, isOpen, onClick }) => (
  <div className="accordion-item border mb-2 rounded-3 overflow-hidden shadow-sm" style={{ background: '#fff' }}>
    <h2 className="accordion-header" id={`heading-faq-${id}`}>
      <button
        className={`accordion-button ${isOpen ? '' : 'collapsed'} fw-semibold`}
        type="button"
        onClick={onClick}
        style={{
          background: isOpen ? '#1a2332' : '#f8f9fa',
          color: isOpen ? '#fff' : '#1a2332',
          boxShadow: 'none',
          padding: '14px 18px',
          fontSize: '0.95rem',
        }}
      >
        {question}
      </button>
    </h2>
    <div
      className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
      aria-labelledby={`heading-faq-${id}`}
      style={{ transition: 'all 0.3s ease-out' }}
    >
      <div className="accordion-body text-secondary small py-3 px-4" style={{ lineHeight: 1.8 }}>
        {answer}
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
   MAIN DYNAMIC COMPONENT
───────────────────────────────────────────── */
const IndustryPage = ({ slug: propSlug }) => {
  const params = useParams();
  const slug = propSlug || params.slug;

  const data = industriesConfig[slug];

  if (!data) {
    return <DynamicWpPage slug={`industries/${slug}`} />;
  }

  const [openAccordionId, setOpenAccordionId] = useState(1);
  const [openFaqId, setOpenFaqId] = useState(1);

  const accordionData = [
    {
      id: 1,
      title: 'DEDICATED LOCAL & ONLINE ACCOUNTANT',
      content: 'Taxaccolega provides personalised assistance. You get a dedicated accountant when you work with us who fully knows the ins and outs of your finances. No call centers, no general advice, but a real expert focusing on your specific tax and accounting needs.',
    },
    {
      id: 2,
      title: 'OPTIMIZED TAXATION',
      content: 'We actively check and optimize all available allowances, deductions, and expenses specific to your sector to legally minimize your tax liability.',
    },
    {
      id: 3,
      title: 'ACCREDITED CHARTERED ACCOUNTANT',
      content: 'Our firm is comprised of accredited professionals who strictly follow high standards of tax accounting, compliance, and reporting.',
    },
    {
      id: 4,
      title: 'TIMELY REMINDERS',
      content: 'We provide proactive, automatic reminders for all upcoming filing dates, ensuring you avoid late-submission fines and keep on track with HMRC.',
    },
    {
      id: 5,
      title: 'TOTAL TRANSPARENCY',
      content: 'We offer fixed-fee quotes so you have complete cost clarity from the start, with zero hidden extras or unexpected advisory bills.',
    },
    {
      id: 6,
      title: 'EXPERT VALUE ADDED GUIDANCE',
      content: 'We help you choose the best systems and structures to streamline invoicing, record keeping, and growth planning for your consulting business.',
    },
  ];

  return (
    <div>
      {/* ── 4. Breadcrumbs ── */}
      <div className="bg-white border-bottom py-2">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 small">
              <li className="breadcrumb-item">
                <a href="/" className="text-decoration-none" style={{ color: '#e07b39' }}>Home</a>
              </li>
              {data.breadcrumbs.map((crumb, idx) => {
                const isLast = idx === data.breadcrumbs.length - 1;
                return isLast ? (
                  <li key={idx} className="breadcrumb-item active text-secondary" aria-current="page">
                    {crumb}
                  </li>
                ) : (
                  <li key={idx} className="breadcrumb-item text-secondary">
                    {crumb}
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </div>

      {/* ── 5. How We Help Section (Section 1) ── */}
      <section className="py-5 bg-white" id="how-we-help">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <img
                src={data.sec1.img}
                alt={data.sec1.title}
                className="img-fluid rounded-3 shadow"
              />
            </div>
            <div className="col-lg-7">
              <div className="border-start border-3 border-warning ps-3 mb-3">
                <h2 className="fw-bold mb-0" style={{ color: '#1a2332' }}>
                  {data.sec1.title}
                </h2>
              </div>
              <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>
                {data.sec1.para1}
              </p>
              <p className="text-secondary mb-4" style={{ lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                {data.sec1.para2}
              </p>
              <a
                href={data.sec1.btnLink}
                className="btn px-4 py-2 text-white"
                style={{ background: '#e07b39', fontWeight: 600, borderRadius: '4px' }}
              >
                {data.sec1.btnText}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Partners Strip ── */}
      <Partners />

      {/* ── 7. Secondary Details Section (Section 2) ── */}
      <section className="py-5 bg-light" id="secondary-details">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <img
                src={data.sec2.img}
                alt={data.sec2.title}
                className="img-fluid rounded-3 shadow"
              />
            </div>
            <div className="col-lg-7">
              <h3 className="fw-bold mb-3" style={{ color: '#1a2332' }}>{data.sec2.title}</h3>
              <p className="text-secondary mb-4" style={{ lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                {data.sec2.para}
              </p>
              <a
                href={data.sec2.btnLink}
                className="btn px-4 py-2 text-white"
                style={{ background: '#e07b39', fontWeight: 600, borderRadius: '4px' }}
              >
                {data.sec2.btnText}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Why Choose Us Section (Section 3) ── */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 text-center">
              <img
                src="/images/2025/08/book-a-call-or-meeting.webp"
                alt="Why Choose Us"
                className="img-fluid rounded-3 shadow-sm"
                style={{ maxHeight: '420px', objectFit: 'cover' }}
              />
            </div>
            <div className="col-lg-7">
              <span className="text-muted text-uppercase small tracking-wider">Services</span>
              <h3 className="fw-bold mb-4" style={{ color: '#1a2332' }}>Why Choose Us</h3>
              <div className="accordion" id="chooseAccordion">
                {accordionData.map((item) => (
                  <AccordionItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    content={item.content}
                    isOpen={openAccordionId === item.id}
                    onClick={() => setOpenAccordionId(openAccordionId === item.id ? null : item.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. Google Reviews Slider ── */}
      <ReviewsSlider />

      {/* ── 10. FAQs Section (Section 4) ── */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="py-5 bg-white border-top">
          <div className="container">
            <h3 className="fw-bold mb-4" style={{ color: '#1a2332' }}>— FAQs</h3>
            <div className="row g-4">
              <div className="col-lg-8">
                <div className="accordion" id="faqAccordion">
                  {data.faqs.map((item, index) => (
                    <FaqItem
                      key={index}
                      id={index}
                      question={item.q}
                      answer={item.a}
                      isOpen={openFaqId === index}
                      onClick={() => setOpenFaqId(openFaqId === index ? null : index)}
                    />
                  ))}
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card border-0 p-4 rounded-3 text-white text-center shadow-sm" style={{ background: '#f8f9fa', border: '1px solid #eee' }}>
                  <div className="card-body py-4 text-dark">
                    <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: 64, height: 64, background: '#e07b3920' }}>
                      <i className="fas fa-headset fa-2x" style={{ color: '#e07b39' }}></i>
                    </div>
                    <h5 className="fw-bold mb-3" style={{ color: '#1a2332' }}>Need Help?</h5>
                    <p className="text-secondary small mb-4">Feel free to contact our expert team via phone or email for any questions.</p>
                    
                    <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
                      <i className="fas fa-phone-alt text-brand-orange" style={{ color: '#e07b39' }}></i>
                      <span className="fw-semibold text-secondary small">020 8127 0728</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-center gap-2 mb-4">
                      <i className="fas fa-envelope text-brand-orange" style={{ color: '#e07b39' }}></i>
                      <span className="fw-semibold text-secondary small">info@taxaccolega.co.uk</span>
                    </div>

                    <div className="d-flex justify-content-center gap-2">
                      <a href="#" className="btn btn-sm btn-outline-secondary rounded-circle" style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justify: 'center' }}>
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="btn btn-sm btn-outline-secondary rounded-circle" style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justify: 'center' }}>
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="btn btn-sm btn-outline-secondary rounded-circle" style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justify: 'center' }}>
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 11. Contact - Us (Section 5) ── */}
      <div id="contact-form">
        <ContactUs />
      </div>

      {/* ── 12. Partners Strip ── */}
      <Partners />
    </div>
  );
};

export default IndustryPage;
