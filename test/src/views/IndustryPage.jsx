"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Partners from '../components/Partners';
import ReviewsSlider from '../components/ReviewsSlider';
import ContactForm from '../components/ContactForm';
import IndustryLinksBar from '../components/IndustryLinksBar';
import { CheckIcon } from '../components/accounts/AccountsPageIcons';
import './wp-content.css';

const WHY_CHOOSE_ITEMS = [
  {
    title: 'DEDICATED LOCAL & ONLINE ACCOUNTANT',
    content:
      'Taxaccolega provides personalised assistance. You get a dedicated accountant when you work with us who fully knows the ins and outs of your finances. No call centers, no general advice, but a real expert focusing on your specific tax and accounting needs.',
  },
  {
    title: 'OPTIMIZED TAXATION',
    content:
      'We actively check and optimize all available allowances, deductions, and expenses specific to your sector to legally minimize your tax liability.',
  },
  {
    title: 'ACCREDITED CHARTERED ACCOUNTANT',
    content:
      'Our firm is comprised of accredited professionals who strictly follow high standards of tax accounting, compliance, and reporting.',
  },
  {
    title: 'TIMELY REMINDERS',
    content:
      'We provide proactive, automatic reminders for all upcoming filing dates, ensuring you avoid late-submission fines and keep on track with HMRC.',
  },
  {
    title: 'TOTAL TRANSPARENCY',
    content:
      'We offer fixed-fee quotes so you have complete cost clarity from the start, with zero hidden extras or unexpected advisory bills.',
  },
  {
    title: 'EXPERT VALUE ADDED GUIDANCE',
    content:
      'We help you choose the best systems and structures to streamline invoicing, record keeping, and growth planning for your business.',
  },
];

const SectionBlock = ({ section, index }) => {
  const altBg = index % 2 === 1 ? 'bg-light border-top border-bottom border-light' : 'bg-white';
  const imageLeft = index % 2 === 1;
  const ctaHref = section.cta?.href?.startsWith('http') || section.cta?.href?.startsWith('tel:')
    ? section.cta.href
    : section.cta?.href || '/contact-us';
  const ctaIsExternal = ctaHref.startsWith('http') || ctaHref.startsWith('tel:');

  const textColumn = (
    <>
      <h2
        className="text-brand-dark display-6 fw-bold mt-2 mb-4"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        {section.title}
      </h2>
      {section.paragraphs.map((paragraph, idx) => (
        <p key={idx} className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>
          {paragraph}
        </p>
      ))}
      {section.bullets.length > 0 && (
        <ul className="list-unstyled mb-4 d-flex flex-column gap-2 text-secondary">
          {section.bullets.map((bullet, idx) => (
            <li key={idx} className="d-flex align-items-start">
              <CheckIcon />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
      {section.cta && (
        ctaIsExternal ? (
          <a href={ctaHref} className="btn btn-brand px-4 py-2">
            {section.cta.text}
          </a>
        ) : (
          <Link href={ctaHref} className="btn btn-brand px-4 py-2">
            {section.cta.text}
          </Link>
        )
      )}
    </>
  );

  const imageColumn = section.image ? (
    <div className="p-2 border rounded-4 shadow-lg bg-white">
      <img
        src={section.image.src}
        alt={section.image.alt}
        className="img-fluid rounded-3"
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        loading="lazy"
      />
    </div>
  ) : null;

  return (
    <section className={`py-5 ${altBg}`}>
      <div className="container">
        {section.image ? (
          <div className="row g-5 align-items-center">
            {imageLeft && (
              <div className="col-lg-5 order-2 order-lg-1">{imageColumn}</div>
            )}
            <div className={`col-lg-7 ${imageLeft ? 'order-1 order-lg-2' : ''}`}>{textColumn}</div>
            {!imageLeft && <div className="col-lg-5">{imageColumn}</div>}
          </div>
        ) : (
          <div className="row g-5">
            <div className="col-lg-10 mx-auto">{textColumn}</div>
          </div>
        )}
      </div>
    </section>
  );
};

const IndustryPage = ({ pageData }) => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);
  const [openAccordionId, setOpenAccordionId] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageData.slug]);

  const heroStyle = pageData.heroImage
    ? {
        backgroundImage: `linear-gradient(rgba(29, 60, 69, 0.72), rgba(29, 60, 69, 0.82)), url(${pageData.heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : { background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)' };

  return (
    <div className="bg-light min-h-screen">
      <header
        className="position-relative text-white overflow-hidden py-5"
        style={{ ...heroStyle, minHeight: '380px' }}
      >
        <div
          className="position-absolute w-100 h-100"
          style={{
            backgroundImage:
              'radial-gradient(circle at 80% 20%, rgba(210, 96, 26, 0.15) 0%, transparent 60%)',
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
        <div className="container position-relative py-4" style={{ zIndex: 2, paddingTop: '5rem' }}>
          <div className="row g-4 align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <span
                className="text-uppercase small tracking-wider fw-bold mb-2 d-inline-block text-brand-orange"
                style={{ letterSpacing: '2px' }}
              >
                Industry Services
              </span>
              <h1
                className="display-4 fw-bold text-white mb-3"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {pageData.title}
              </h1>
              <p
                className="lead text-white-50 mb-4"
                style={{ maxWidth: '680px', fontSize: '1.1rem', lineHeight: 1.6 }}
              >
                {pageData.subtitle}
              </p>
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mb-4">
                <a href="#contact-block" className="btn btn-brand px-4 py-2 shadow">
                  CONTACT US
                </a>
                <a
                  href="/schedule-a-phone-call-or-video-meeting"
                  className="btn btn-outline-light px-4 py-2"
                >
                  Schedule a Call
                </a>
              </div>
              <nav aria-label="breadcrumb">
                <ol
                  className="breadcrumb justify-content-center justify-content-lg-start mb-0 small"
                  style={{ background: 'transparent' }}
                >
                  <li className="breadcrumb-item">
                    <Link href="/" className="text-decoration-none text-brand-orange">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active text-white-50" aria-current="page">
                    {pageData.title}
                  </li>
                </ol>
              </nav>
            </div>
            <div className="col-lg-4 d-none d-lg-block position-relative" style={{ zIndex: 3 }}>
              <div
                className="p-4 rounded-4 shadow-lg"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(232,162,116,0.9) 0%, rgba(212,108,36,0.95) 50%, rgba(184,80,14,1) 100%)',
                }}
              >
                <h5
                  className="text-white fw-bold mb-4 text-center border-bottom pb-2"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Quick Navigation
                </h5>
                <div className="d-flex flex-column gap-3">
                  {pageData.quickNav.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.link}
                      className="card border-0 shadow rounded-3 p-3 text-decoration-none bg-white"
                      style={{ transition: 'all 0.3s' }}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-bold text-brand-dark" style={{ fontSize: '0.95rem' }}>
                          {item.title}
                        </span>
                        <span className="text-brand-orange fw-bold">READ MORE &raquo;</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-white border-bottom py-3">
        <div className="container px-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 small">
              <li className="breadcrumb-item">
                <Link href="/" className="text-decoration-none" style={{ color: '#D2601A' }}>
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active text-secondary">{pageData.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="d-block d-lg-none py-3 bg-white border-bottom shadow-sm">
        <div className="container">
          <div className="row g-2">
            {pageData.quickNav.map((item, idx) => (
              <div className="col-4" key={idx}>
                <Link
                  href={item.link}
                  className="btn btn-sm btn-outline-dark w-100 text-truncate fw-semibold"
                  style={{ fontSize: '0.75rem' }}
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {pageData.contentHtml ? (
        <>
          <section className="py-5 bg-white">
            <div className="container py-3">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div
                    className="wp-content-wrapper"
                    dangerouslySetInnerHTML={{ __html: pageData.contentHtml }}
                  />
                </div>
              </div>
            </div>
          </section>
          <IndustryLinksBar />
        </>
      ) : (
        <>
          {pageData.sections.map((section, index) => (
            <div key={`${section.title}-${index}`}>
              <SectionBlock section={section} index={index} />
              {index === 0 && <IndustryLinksBar />}
            </div>
          ))}

          {pageData.sections.length === 0 && <IndustryLinksBar />}
        </>
      )}

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
              <h3 className="fw-bold mb-4" style={{ color: '#1a2332' }}>
                Why Choose Us
              </h3>
              <div className="accordion" id="chooseAccordion">
                {WHY_CHOOSE_ITEMS.map((item, idx) => {
                  const id = idx + 1;
                  const isOpen = openAccordionId === id;

                  return (
                    <div
                      key={id}
                      className="accordion-item border mb-2 rounded-3 overflow-hidden shadow-sm"
                      style={{ background: '#fff' }}
                    >
                      <h2 className="accordion-header">
                        <button
                          className={`accordion-button ${isOpen ? '' : 'collapsed'} fw-bold`}
                          type="button"
                          onClick={() => setOpenAccordionId(isOpen ? null : id)}
                          style={{
                            background: isOpen ? '#1a2332' : '#f8f9fa',
                            color: isOpen ? '#fff' : '#1a2332',
                            boxShadow: 'none',
                            padding: '16px 20px',
                          }}
                        >
                          {item.title}
                        </button>
                      </h2>
                      <div className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}>
                        <div
                          className="accordion-body text-secondary small py-3 px-4"
                          style={{ lineHeight: 1.8 }}
                        >
                          {item.content}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Partners />

      <ReviewsSlider />

      {pageData.faqs.length > 0 && (
        <section className="py-5 bg-white border-bottom">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-8">
                <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">
                  Knowledge Base
                </span>
                <h2
                  className="text-brand-dark display-6 fw-bold mt-2 mb-4"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Frequently Asked Questions
                </h2>
                <div className="accordion-custom">
                  {pageData.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="accordion-item border rounded-3 mb-3 overflow-hidden shadow-sm"
                    >
                      <button
                        className="btn w-100 text-start p-4 d-flex justify-content-between align-items-center"
                        onClick={() => setActiveFaqIndex(activeFaqIndex === idx ? null : idx)}
                        style={{
                          backgroundColor: activeFaqIndex === idx ? '#1d3c45' : 'white',
                          color: activeFaqIndex === idx ? 'white' : '#1a2332',
                          border: 'none',
                          fontWeight: 600,
                          transition: 'all 0.3s',
                        }}
                      >
                        <span>{faq.q}</span>
                        <i
                          className={`fas fa-chevron-${activeFaqIndex === idx ? 'up' : 'down'} ms-3 text-brand-orange`}
                        />
                      </button>
                      {activeFaqIndex === idx && (
                        <div
                          className="p-4 text-secondary border-top bg-light"
                          style={{ lineHeight: 1.8, fontSize: '0.95rem' }}
                        >
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="card border-0 shadow-lg rounded-4 p-4 text-center text-white"
                  style={{ background: '#1d3c45' }}
                >
                  <h4 className="fw-bold mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    Helpline Desk
                  </h4>
                  <p className="text-white-50 mb-4 small">
                    Need industry-specific accounting advice? Speak directly to our team today.
                  </p>
                  <div className="d-flex flex-column gap-3 mb-4 text-start">
                    <a
                      href="tel:02081270728"
                      className="d-flex align-items-center text-white text-decoration-none gap-3 p-2 rounded bg-white bg-opacity-10"
                    >
                      <div
                        className="bg-brand-orange text-white rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: '45px', height: '45px', minWidth: '45px' }}
                      >
                        <i className="fas fa-phone-alt" />
                      </div>
                      <div>
                        <span className="text-white-50 d-block small" style={{ fontSize: '0.75rem' }}>
                          Call Office
                        </span>
                        <span className="fw-bold" style={{ fontSize: '0.95rem' }}>
                          020 8127 0728
                        </span>
                      </div>
                    </a>
                    <a
                      href="https://wa.me/447471170484"
                      target="_blank"
                      rel="noreferrer"
                      className="d-flex align-items-center text-white text-decoration-none gap-3 p-2 rounded bg-white bg-opacity-10"
                    >
                      <div
                        className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: '45px', height: '45px', minWidth: '45px' }}
                      >
                        <i className="fab fa-whatsapp" />
                      </div>
                      <div>
                        <span className="text-white-50 d-block small" style={{ fontSize: '0.75rem' }}>
                          Whatsapp Chat
                        </span>
                        <span className="fw-bold" style={{ fontSize: '0.95rem' }}>
                          074 7117 0484
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <ContactForm source="IndustryPage" />

      <Partners />
    </div>
  );
};

export default IndustryPage;
