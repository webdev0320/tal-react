import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import ReviewsSlider from '../components/ReviewsSlider';
import { taxationConfig } from './taxationConfig';
import TaxationLinksBar from '../components/TaxationLinksBar';

// Smooth interactive accordion item
const TaxationSubPage = () => {
  const { slug } = useParams();
  const service = taxationConfig[slug] || taxationConfig['personal-income-tax'];
  console.log('DEBUG: slug=', slug, 'service=', service);
  
  // State for showing the figma mockup overlay
  const [showMockup, setShowMockup] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div style={{ background: '#f8f9fa', minHeight: '100vh' }}>
      <PageHero
        title={service.title}
        subtitle={service.subtitle}
        breadcrumbs={[
            { label: 'Home', link: '/' },
            { label: 'Taxation', link: '/taxation' },
            { label: service.title, active: true }
        ]}
        sidebarItems={Object.keys(taxationConfig).filter(k => k !== slug).slice(0, 3).map(k => ({ title: taxationConfig[k].title, link: `/taxation/${k}` }))}
      />

      <TaxationLinksBar />

      {/* ── 2. Hero Core Intro Section ── */}
      <section className="py-5 bg-white">
        <div className="container py-3">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Expert Overview</span>
              <h2 className="text-brand-dark display-6 fw-bold mt-2 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {service.heroTitle || `Navigating ${service.title} With Confidence`}
              </h2>
              <p className="text-dark fs-5 fw-medium mb-4" style={{ lineHeight: 1.8, color: '#2d3748' }}>
                {service.heroIntro}
              </p>
              <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>
                {service.heroDetails}
              </p>
              
              <div className="p-4 border-start border-brand-orange border-4 bg-light rounded-e-3 mb-4">
                <h5 className="fw-bold text-brand-dark mb-2">Our Strategic Approach</h5>
                <p className="text-secondary mb-0 small" style={{ lineHeight: 1.6 }}>
                  We work closely with you to examine transaction histories, map corporate/personal bands, reconstruct details, and generate standard compliance packets that satisfy HMRC guidelines.
                </p>
              </div>

              <div className="d-flex flex-wrap gap-3">
                <a href="#contact-section" className="btn btn-brand px-4 py-2">
                  <i className="fas fa-envelope me-2"></i> Book Free Consultation
                </a>
                <button onClick={() => setShowMockup(!showMockup)} className="btn btn-brand-outline px-4 py-2">
                  <i className="fas fa-eye me-2"></i> {showMockup ? 'Hide Figma Mockup' : 'View Figma Mockup'}
                </button>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="card border-0 shadow-lg rounded-4 p-4 text-center position-relative overflow-hidden" style={{ background: '#1d3c45', color: '#fff' }}>
                <div className="position-absolute bg-warning rounded-circle" style={{ width: '150px', height: '150px', top: '-75px', right: '-75px', opacity: 0.1 }}></div>
                
                <h4 className="fw-bold mb-3 text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>Fast Response Helpline</h4>
                <p className="text-white-50 mb-4 small">Tax and disclosure deadlines can arise quickly. Speak directly to an expert tax advisor today.</p>
                
                <div className="d-flex flex-column gap-3 mb-4 text-start">
                  <a href="tel:02081270728" className="d-flex align-items-center text-white text-decoration-none gap-3 p-2 rounded hover-bg-translucent">
                    <div className="bg-brand-orange text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}>
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div>
                      <span className="text-white-50 d-block small">Call Office</span>
                      <span className="fw-semibold">020 8127 0728</span>
                    </div>
                  </a>
                  <a href="https://wa.me/447471170484" target="_blank" rel="noreferrer" className="d-flex align-items-center text-white text-decoration-none gap-3 p-2 rounded hover-bg-translucent">
                    <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}>
                      <i className="fab fa-whatsapp"></i>
                    </div>
                    <div>
                      <span className="text-white-50 d-block small">Whatsapp Chat</span>
                      <span className="fw-semibold">074 7117 0484</span>
                    </div>
                  </a>
                  <a href="mailto:info@taxaccolega.co.uk" className="d-flex align-items-center text-white text-decoration-none gap-3 p-2 rounded hover-bg-translucent">
                    <div className="bg-info text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}>
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <span className="text-white-50 d-block small">Email Support</span>
                      <span className="fw-semibold">info@taxaccolega.co.uk</span>
                    </div>
                  </a>
                </div>

                <a href="#contact-section" className="btn btn-warning w-100 py-3 fw-bold rounded-3">Get Started Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Toggleable Figma Mockup Display ── */}
      {showMockup && (
        <section className="py-5" style={{ background: '#f1f3f5' }}>
          <div className="container text-center">
            <span className="text-uppercase small tracking-wider text-brand-orange fw-bold">Figma Visual Reference</span>
            <h3 className="text-brand-dark mb-4 fw-bold">Original Page Mockup Design</h3>
            <div className="p-2 border rounded-4 shadow bg-light d-inline-block position-relative" style={{ maxWidth: '100%' }}>
              <img 
                src={service.img} 
                alt="Figma design reference" 
                className="img-fluid rounded-3" 
                style={{ maxHeight: '900px', objectFit: 'contain', border: '1px solid #dee2e6' }}
              />
              <button 
                onClick={() => setShowMockup(false)} 
                className="btn btn-dark btn-sm position-absolute" 
                style={{ top: '15px', right: '15px', borderRadius: '50px' }}
              >
                <i className="fas fa-times me-1"></i> Close Design Mock
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ── 4. Dynamic Responsive Custom Sections ── */}
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
                    <div className="d-flex flex-column gap-3">
                      {sect.cards.map((card, cIdx) => (
                        <div key={cIdx} className="p-3 border-start border-4 border-brand-orange bg-light rounded-end shadow-sm">
                          <h5 className="fw-bold text-brand-dark mb-1">{card.title}</h5>
                          <Link to={card.link} className="text-brand-orange text-decoration-none small fw-bold">Read More »</Link>
                        </div>
                      ))}
                    </div>
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
                  <div className="col-lg-8">
                    <div className="text-secondary" style={{ lineHeight: 1.8, whiteSpace: 'pre-line' }}>{sect.content}</div>
                  </div>
                  <div className="col-lg-4">
                    <div className="p-4 border border-brand-orange rounded-4 bg-light">
                      <h4 className="fw-bold text-brand-dark mb-3">{sect.highlightTitle}</h4>
                      <div className="text-secondary" style={{ lineHeight: 1.6 }}>{sect.highlightContent}</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        }

        if (sect.type === 'filter-tags') {
          return (
            <TaxationLinksBar key={sIdx} />
          );
        }

        if (sect.type === 'summary-panels') {
          return (
            <section key={sIdx} className="py-5" style={{ background: '#e9ecef' }}>
              <div className="container">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="p-4 bg-white rounded-4 shadow-sm h-100">
                      <p className="text-secondary mb-0">{sect.leftContent}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-4 bg-white rounded-4 shadow-sm h-100">
                      <p className="text-secondary mb-0">{sect.rightContent}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        }

        if (sect.type === 'collaborative-grid') {
          return (
            <section key={sIdx} className="py-5 bg-white">
              <div className="container py-4">
                <h2 className="text-center mb-5 fw-bold">{sect.title}</h2>
                <div className="text-center p-5 bg-light border rounded">Collaborative Network Carousel Placeholder</div>
              </div>
            </section>
          );
        }

        if (sect.title === 'When You Should Speak to a Tax Investigation Specialist') return null;

        if (sect.type === 'difficult') {
          return (
            <section key={sIdx} className="py-5 bg-light border-bottom border-top" style={{ borderColor: '#eef1f4' }}>
              <div className="container py-4">
                <div className="row g-5">
                  <div className="col-lg-6">
                    <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Crucial Challenges</span>
                    <h2 className="text-brand-dark mt-2 mb-4 fw-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>{sect.title}</h2>
                    <h5 className="text-brand-orange fw-semibold mb-3">{sect.subtitle}</h5>
                    <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>{sect.content}</p>
                    {sect.footer && <p className="text-secondary small italic bg-white p-3 rounded shadow-sm border-start border-3 border-warning">{sect.footer}</p>}
                  </div>
                  
                  <div className="col-lg-6">
                    <div className="card border-0 p-4 rounded-4 shadow-sm bg-white h-100">
                      <h4 className="text-brand-dark mb-4 fw-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>Key Reporting Factors</h4>
                      <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                        {sect.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="d-flex align-items-start gap-3">
                            <div className="bg-brand-orange text-white rounded-circle d-flex align-items-center justify-content-center mt-1" style={{ width: '24px', height: '24px', minWidth: '24px' }}>
                              <i className="fas fa-check" style={{ fontSize: '0.75rem' }}></i>
                            </div>
                            <span className="text-secondary" style={{ fontSize: '0.98rem' }}>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        }

        if (sect.type === 'cards') {
          return (
            <section key={sIdx} className="py-5 bg-white">
              <div className="container py-4">
                <div className="text-center mb-5">
                  <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Service Components</span>
                  <h2 className="text-brand-dark mt-2 mb-3 fw-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>{sect.title}</h2>
                  <p className="text-secondary mx-auto" style={{ maxWidth: '650px', lineHeight: 1.7 }}>{sect.intro}</p>
                </div>

                <div className="row g-4 justify-content-center">
                  {sect.cards.map((card, cIdx) => (
                    <div key={cIdx} className="col-md-6 col-lg-4">
                      <div className="card h-100 p-4 border-0 shadow-sm rounded-4 service-card" style={{ transition: 'all 0.3s ease' }}>
                        <div className="bg-brand-orange text-white rounded-3 d-flex align-items-center justify-content-center mb-4" style={{ width: '50px', height: '50px' }}>
                          <i className={`fas ${cIdx === 0 ? 'fa-project-diagram' : cIdx === 1 ? 'fa-shield-alt' : 'fa-chart-line'} fs-5`}></i>
                        </div>
                        <h4 className="fw-bold mb-3 text-brand-dark" style={{ fontFamily: "'Outfit', sans-serif" }}>{card.title}</h4>
                        <p className="text-secondary mb-0 small" style={{ lineHeight: 1.7 }}>{card.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        }

        if (sect.type === 'table') {
          return (
            <section key={sIdx} className="py-5 bg-light border-bottom" style={{ borderColor: '#eef1f4' }}>
              <div className="container py-4">
                <div className="text-center mb-5">
                  <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Analytical Matrix</span>
                  <h2 className="text-brand-dark mt-2 mb-2 fw-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>{sect.title}</h2>
                  <p className="text-secondary">{sect.subtitle}</p>
                </div>

                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="table-responsive rounded-4 shadow-sm border bg-white overflow-hidden">
                      <table className="table table-hover align-middle mb-0">
                        <thead style={{ background: '#1d3c45', color: '#fff' }}>
                          <tr>
                            {sect.headers.map((h, hIdx) => (
                              <th key={hIdx} className="py-3 px-4 text-white border-0 fw-bold" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.95rem' }}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {sect.rows.map((row, rIdx) => (
                            <tr key={rIdx} style={{ background: rIdx % 2 === 0 ? '#fff' : '#fcfcfc' }}>
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="py-3 px-4 border-bottom border-light" style={{ fontSize: '0.92rem', color: cIdx === 0 ? 'var(--brand-dark)' : 'var(--text-muted)', fontWeight: cIdx === 0 ? 600 : 400 }}>
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        }

        if (sect.type === 'text-image') {
          return (
            <section key={sIdx} className="py-5 bg-white">
              <div className="container py-4">
                <div className="row g-5 align-items-center">
                  <div className="col-lg-6">
                    <h2 className="text-brand-dark mb-4 fw-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>{sect.title}</h2>
                    <div className="text-secondary" style={{ lineHeight: 1.8, whiteSpace: 'pre-line' }}>{sect.content}</div>
                  </div>
                  <div className="col-lg-6">
                    <img src={sect.img} alt={sect.title} className="img-fluid rounded-4 shadow" />
                  </div>
                </div>
              </div>
            </section>
          );
        }

        if (sect.type === 'text-image-reversed') {
          return (
            <section key={sIdx} className="py-5 bg-white">
              <div className="container py-4">
                <div className="row g-5 align-items-center">
                  <div className="col-lg-6">
                    <img src={sect.img} alt={sect.title} className="img-fluid rounded-4 shadow" />
                  </div>
                  <div className="col-lg-6">
                    <h2 className="text-brand-dark mb-4 fw-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>{sect.title}</h2>
                    <div className="text-secondary" style={{ lineHeight: 1.8, whiteSpace: 'pre-line' }}>{sect.content}</div>
                  </div>
                </div>
              </div>
            </section>
          );
        }

        if (sect.type === 'accent-box') {
          return (
            <section key={sIdx} className="py-5 bg-white">
              <div className="container py-4">
                <div className="border border-4 border-brand-orange p-5 rounded-4 shadow-sm" style={{ background: '#fff9f4' }}>
                  <h3 className="text-brand-dark mb-3 fw-bold">{sect.title}</h3>
                  <div className="text-secondary" style={{ lineHeight: 1.8 }}>{sect.content}</div>
                </div>
              </div>
            </section>
          );
        }

        if (sect.type === 'text-block') {
          return (
            <section key={sIdx} className="py-5 bg-white">
              <div className="container py-4">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2 className="text-brand-dark mb-3 fw-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>{sect.title}</h2>
                    {sect.subtitle && <h5 className="text-brand-orange fw-semibold mb-4">{sect.subtitle}</h5>}
                    <div className="text-secondary" style={{ lineHeight: 1.8, whiteSpace: 'pre-line' }}>{sect.content}</div>
                  </div>
                </div>
              </div>
            </section>
          );
        }

        if (sect.type === 'text-split') {
          return (
            <section key={sIdx} className="py-5 bg-white">
              <div className="container py-4">
                <h2 className="text-brand-dark mb-3 fw-bold text-center" style={{ fontFamily: "'Outfit', sans-serif" }}>{sect.title}</h2>
                {sect.subtitle && <h5 className="text-brand-orange fw-semibold mb-5 text-center">{sect.subtitle}</h5>}
                <div className="row g-5">
                  <div className="col-lg-6 text-secondary" style={{ lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                    {sect.leftContent}
                  </div>
                  <div className="col-lg-6 text-secondary" style={{ lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                    {sect.rightContent}
                  </div>
                </div>
              </div>
            </section>
          );
        }

        return null;
      })}

      {/* ── 6. Interactive State-Driven FAQs - Removed ── */}

      {/* ── 6. When You Should Speak to a Tax Investigation Specialist ── */}
      {service.sections && service.sections.filter(s => s.type === 'text-split' && s.title === 'When You Should Speak to a Tax Investigation Specialist').map((sect, sIdx) => (
        <section key={sIdx} className="py-5 bg-white">
          <div className="container py-4">
            <h2 className="text-brand-dark mb-3 fw-bold text-center" style={{ fontFamily: "'Outfit', sans-serif" }}>{sect.title}</h2>
            {sect.subtitle && <h5 className="text-brand-orange fw-semibold mb-5 text-center">{sect.subtitle}</h5>}
            <div className="row g-5">
              <div className="col-lg-6 text-secondary" style={{ lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                {sect.leftContent}
              </div>
              <div className="col-lg-6 text-secondary" style={{ lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                {sect.rightContent}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── 5. Client Reviews Section ── */}
      <section className="py-5 bg-white">
        <div className="container py-3">
          <div className="text-center mb-4">
            <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Global Standing</span>
            <h2 className="text-brand-dark mt-2 fw-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>What Our Clients Say</h2>
          </div>
          <ReviewsSlider />
        </div>
      </section>

      {/* ── 7. All Tax Services Navigation ── */}
      <section className="py-5 bg-white border-top">
        <div className="container py-4">
          <h3 className="text-brand-dark mb-4 fw-bold text-center" style={{ fontFamily: "'Outfit', sans-serif" }}>Explore Our Other Tax Services</h3>
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
            {Object.keys(taxationConfig).map((k) => (
              <div key={k} className="col">
                <Link to={`/taxation/${k}`} className="btn btn-outline-brand w-100 py-2 text-decoration-none">
                  {taxationConfig[k].title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FAQ Section ── */}
      {service.faqs && (
        <section className="py-5 bg-white border-top">
          <div className="container py-4">
            <h3 className="text-brand-dark mb-4 fw-bold text-center">Frequently Asked Questions</h3>
            <div className="accordion" id="faqAccordion">
              {service.faqs.map((faq, fIdx) => (
                <div key={fIdx} className="accordion-item border-0 border-bottom">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target={`#faq${fIdx}`}>
                      {faq.q}
                    </button>
                  </h2>
                  <div id={`faq${fIdx}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-secondary">{faq.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 9. Contact Us Form Section ── */}
      <div id="contact-section">
        <ContactForm />
      </div>
    </div>
  );
};

export default TaxationSubPage;
