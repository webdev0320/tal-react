"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';
import AccountsLinksBar from './AccountsLinksBar';
import ContactForm from './ContactForm';
import Partners from './Partners';
import ReviewsSlider from './ReviewsSlider';
import '../views/wp-content.css';
import './AccountsSubPage.css';

const cleanBody = (html) => {
  let content = html;
  content = content.replace(/<h2[^>]*>\s*Our Clients and Collaborative Partners[\s\S]*?(?=<h2|$)/i, '');
  content = content.replace(/<h2[^>]*>\s*Our Recent Google Reviews[\s\S]*?(?=<h2|$)/i, '');
  content = content.replace(/<h2[^>]*>\s*Get in Touch[\s\S]*?(?=<h2[^>]*>\s*FAQs|$)/i, '');
  content = content.replace(/<h2[^>]*>\s*Other Areas In London We Serve[\s\S]*?(?=<h2[^>]*>\s*FAQs|$)/i, '');
  content = content.replace(/<h2[^>]*>\s*FAQs[\s\S]*$/i, '');
  content = content.replace(/<h2[^>]*>\s*Email Address:[\s\S]*$/i, '');
  return content.trim();
};

const AccountsSubPage = ({ config }) => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);

    fetch(`/wp-data/accounts/${config.slug}.json`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load page content');
        return res.json();
      })
      .then((data) => {
        setContent(cleanBody(data.content || ''));
        setLoading(false);
      })
      .catch(() => {
        setContent('');
        setLoading(false);
      });
  }, [config.slug]);

  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Accounts', link: '/accounts' },
    { label: config.title, active: true },
  ];

  return (
    <div className="accounts-sub-page min-h-screen bg-white">
      <header
        className="accounts-sub-hero position-relative text-white overflow-hidden"
        style={{
          backgroundImage: config.heroImage
            ? `linear-gradient(rgba(29, 60, 69, 0.72), rgba(29, 60, 69, 0.82)), url(${config.heroImage})`
            : 'linear-gradient(135deg, #1d3c45 0%, #173941 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container position-relative py-5" style={{ zIndex: 2, paddingTop: '7rem' }}>
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <span className="text-uppercase small fw-bold text-brand-orange d-inline-block mb-2" style={{ letterSpacing: '2px' }}>
                Accounts Services
              </span>
              <h1 className="display-5 fw-bold text-white mb-3">{config.title}</h1>
              {config.subtitle && (
                <p className="lead text-white-50 mx-auto mb-4" style={{ maxWidth: '760px' }}>
                  {config.subtitle}
                </p>
              )}
              <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
                <a href="#contact-block" className="btn btn-brand px-4 py-2">Contact Us</a>
                <a href="/schedule-a-phone-call-or-video-meeting" className="btn btn-outline-light px-4 py-2">
                  Schedule a Call
                </a>
              </div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center mb-0 small">
                  {breadcrumbs.map((crumb, i) => (
                    <li key={i} className={`breadcrumb-item ${crumb.active ? 'active text-white-50' : ''}`}>
                      {crumb.active ? crumb.label : <Link href={crumb.link} className="text-brand-orange text-decoration-none">{crumb.label}</Link>}
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <AccountsLinksBar />

      <section className="py-5 bg-white">
        <div className="container py-2">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {loading ? (
                <div className="text-center py-5">
                  <div className="spinner-border text-warning mb-3" role="status" />
                  <p className="text-secondary">Loading page content...</p>
                </div>
              ) : (
                <div
                  className="wp-content-wrapper accounts-sub-content"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {config.faqs?.length > 0 && (
        <section className="py-5 bg-light border-top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <h2 className="h3 fw-bold text-brand-dark mb-4">Frequently asked questions</h2>
                <div className="d-flex flex-column gap-3">
                  {config.faqs.map((faq, index) => (
                    <div key={faq.q} className="border rounded-0 bg-white">
                      <button
                        type="button"
                        className="w-100 d-flex justify-content-between align-items-center gap-3 p-4 border-0 bg-white text-start fw-bold"
                        onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                      >
                        <span>{faq.q}</span>
                        {activeFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                      {activeFaq === index && (
                        <div className="px-4 pb-4 text-secondary">{faq.a}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <Partners />

      <div id="contact-block">
        <ContactForm />
      </div>

      <ReviewsSlider />
    </div>
  );
};

export default AccountsSubPage;
