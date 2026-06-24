"use client";
import { useState } from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Partners from '../components/Partners';
import ReviewsSlider from '../components/ReviewsSlider';
import ContactForm from '../components/ContactForm';
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
      <TopBar />

      {/* ── 2. Navbar ── */}
      <Navbar />

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

    <ContactForm source="Software" />

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

      {/* ── 13. Footer ── */}
      <Footer />
    </div>
  );
};

export default Software;

