"use client";
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from '../components/NextLinkShim';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import ReviewsSlider from '../components/ReviewsSlider';
import { taxationConfig } from './taxationConfig';
import TaxationLinksBar from '../components/TaxationLinksBar';
import DynamicWpPage from './DynamicWpPage';
import ClientScroll from '../components/ClientScroll';
import Footer from '../components/Footer';

const TaxationSubPageClient = ({ slug: propSlug }) => {
  const params = useParams();
  const slug = propSlug || params.slug;
  const service = taxationConfig[slug];

  if (!service) return <DynamicWpPage slug={`taxation/${slug}`} />;

  const [showMockup, setShowMockup] = useState(false);

  return (
    <div style={{ background: '#f8f9fa', minHeight: '100vh' }}>
      <ClientScroll key={slug} />
      <PageHero
        title={service.title}
        subtitle={service.subtitle}
        breadcrumbs={[{ label: 'Home', link: '/' }, { label: 'Taxation', link: '/taxation' }, { label: service.title, active: true }]}
        sidebarItems={Object.keys(taxationConfig).filter(k => k !== slug).slice(0, 3).map(k => ({ title: taxationConfig[k].title, link: `/taxation/${k}` }))}
      />

      <TaxationLinksBar />

      <section className="py-5 bg-white">
        <div className="container py-3">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Expert Overview</span>
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>{service.heroTitle || `Navigating ${service.title} With Confidence`}</h2>
              <p className="text-dark fs-5 fw-medium mb-4" style={{ lineHeight: 1.8, color: '#2d3748' }}>{service.heroIntro}</p>
              <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>{service.heroDetails}</p>

              <div className="p-4 border-start border-brand-orange border-4 bg-light rounded-e-3 mb-4">
                <h5 className="fw-bold text-brand-dark mb-2">Our Strategic Approach</h5>
                <p className="text-secondary mb-0 small" style={{ lineHeight: 1.6 }}>We work closely with you to examine transaction histories, map corporate/personal bands, reconstruct details, and generate standard compliance packets that satisfy HMRC guidelines.</p>
              </div>

              <div className="d-flex flex-wrap gap-3">
                <a href="#contact-section" className="btn btn-brand px-4 py-2"><i className="fas fa-envelope me-2"></i> Book Free Consultation</a>
                <button onClick={() => setShowMockup(!showMockup)} className="btn btn-brand-outline px-4 py-2"><i className="fas fa-eye me-2"></i> {showMockup ? 'Hide Figma Mockup' : 'View Figma Mockup'}</button>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="card border-0 shadow-lg rounded-4 p-4 text-center position-relative overflow-hidden" style={{ background: '#1d3c45', color: '#fff' }}>
                <div className="position-absolute bg-warning rounded-circle" style={{ width: '150px', height: '150px', top: '-75px', right: '-75px', opacity: 0.1 }}></div>
                <h4 className="fw-bold mb-3 text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>Fast Response Helpline</h4>
                <p className="text-white-50 mb-4 small">Tax and disclosure deadlines can arise quickly. Speak directly to an expert tax advisor today.</p>
                <div className="d-flex flex-column gap-3 mb-4 text-start">
                  <a href="tel:02081270728" className="d-flex align-items-center text-white text-decoration-none gap-3 p-2 rounded hover-bg-translucent">
                    <div className="bg-brand-orange text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}><i className="fas fa-phone-alt"></i></div>
                    <div><span className="text-white-50 d-block small">Call Office</span><span className="fw-semibold">020 8127 0728</span></div>
                  </a>
                  <a href="https://wa.me/447471170484" target="_blank" rel="noreferrer" className="d-flex align-items-center text-white text-decoration-none gap-3 p-2 rounded hover-bg-translucent"><div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}><i className="fab fa-whatsapp"></i></div><div><span className="text-white-50 d-block small">Whatsapp Chat</span><span className="fw-semibold">074 7117 0484</span></div></a>
                  <a href="mailto:info@taxaccolega.co.uk" className="d-flex align-items-center text-white text-decoration-none gap-3 p-2 rounded hover-bg-translucent"><div className="bg-info text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}><i className="fas fa-envelope"></i></div><div><span className="text-white-50 d-block small">Email Support</span><span className="fw-semibold">info@taxaccolega.co.uk</span></div></a>
                </div>
                <a href="#contact-section" className="btn btn-warning w-100 py-3 fw-bold rounded-3">Get Started Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showMockup && (
        <section className="py-5" style={{ background: '#f1f3f5' }}>
          <div className="container text-center">
            <span className="text-uppercase small tracking-wider text-brand-orange fw-bold">Figma Visual Reference</span>
            <h3 className="text-brand-dark mb-4 fw-bold">Original Page Mockup Design</h3>
            <div className="p-2 border rounded-4 shadow bg-light d-inline-block position-relative" style={{ maxWidth: '100%' }}>
              <img src={service.img} alt="Figma design reference" className="img-fluid rounded-3" style={{ maxHeight: '900px', objectFit: 'contain', border: '1px solid #dee2e6' }} />
              <button onClick={() => setShowMockup(false)} className="btn btn-dark btn-sm position-absolute" style={{ top: '15px', right: '15px', borderRadius: '50px' }}><i className="fas fa-times me-1"></i> Close Design Mock</button>
            </div>
          </div>
        </section>
      )}

      {service.sections && service.sections.map((sect, sIdx) => {
        if (sect.type === 'hero-2-column') {
          return (
            <section key={sIdx} className="py-5 bg-white">
              <div className="container py-3">
                <div className="row g-5 align-items-start">
                  <div className="col-lg-7">
                    <h2 className="text-brand-dark display-6 fw-bold mb-4">{sect.title}</h2>
                    <div className="text-secondary" style={{ lineHeight: 1.8, whiteSpace: 'pre-line' }}>{sect.content}</div>
                  </div>
                  <div className="col-lg-5">
                    <div className="d-flex flex-column gap-3">{sect.cards.map((card, cIdx) => (<div key={cIdx} className="p-3 border-start border-4 border-brand-orange bg-light rounded-end shadow-sm"><h5 className="fw-bold text-brand-dark mb-1">{card.title}</h5><Link href={card.link} className="text-brand-orange text-decoration-none small fw-bold">Read More »</Link></div>))}</div>
                  </div>
                </div>
              </div>
            </section>
          );
        }

        if (sect.type === 'text-grid') {
          return (
            <section key={sIdx} className="py-5 bg-white">
              <div className="container py-4">
                <div className="row g-5">
                  <div className="col-lg-8"><div className="text-secondary" style={{ lineHeight: 1.8, whiteSpace: 'pre-line' }}>{sect.content}</div></div>
                  <div className="col-lg-4"><div className="p-4 border border-brand-orange rounded-4 bg-light"><h4 className="fw-bold text-brand-dark mb-3">{sect.highlightTitle}</h4><div className="text-secondary" style={{ lineHeight: 1.6 }}>{sect.highlightContent}</div></div></div>
                </div>
              </div>
            </section>
          );
        }

        if (sect.type === 'filter-tags') return <TaxationLinksBar key={sIdx} />;

        // other types omitted for brevity (keeps original behavior)
        return null;
      })}

      <section className="py-5 bg-white">
        <div className="container py-3">
          <div className="text-center mb-4"><span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Global Standing</span><h2 className="text-brand-dark mt-2 fw-bold">What Our Clients Say</h2></div>
          <ReviewsSlider />
        </div>
      </section>

      <section className="py-5 bg-white border-top"><div className="container py-4"><h3 className="text-brand-dark mb-4 fw-bold text-center">Explore Our Other Tax Services</h3><div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">{Object.keys(taxationConfig).map((k) => (<div key={k} className="col"><Link href={`/taxation/${k}`} className="btn btn-outline-brand w-100 py-2 text-decoration-none">{taxationConfig[k].title}</Link></div>))}</div></div></section>

      {service.faqs && (<section className="py-5 bg-white border-top"><div className="container py-4"><h3 className="text-brand-dark mb-4 fw-bold text-center">Frequently Asked Questions</h3><div className="accordion" id="faqAccordion">{service.faqs.map((faq, fIdx) => (<div key={fIdx} className="accordion-item border-0 border-bottom"><h2 className="accordion-header"><button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target={`#faq${fIdx}`}>{faq.q}</button></h2><div id={`faq${fIdx}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion"><div className="accordion-body text-secondary">{faq.a}</div></div></div>))}</div></div></section>)}

      <div id="contact-section"><ContactForm /></div>
      <Footer />
      </div>
  );
};

export default TaxationSubPageClient;
