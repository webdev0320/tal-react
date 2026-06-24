"use client";
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import ReviewsSlider from '../components/ReviewsSlider';
import FAQSection from '../components/FAQSection';
import { cleanContent, extractHeading } from '../lib/wp-content';
import './wp-content.css';

const DynamicWpPage = ({ slug: propSlug }) => {
  const pathname = usePathname();
  const slug = propSlug || pathname.replace(/^\/|\/$/g, '');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(false);
    fetch(`/wp-data/${slug}.json`)
      .then(res => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      })
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
        <div className="text-center">
          <div className="spinner-border text-warning mb-3" role="status" style={{ width: '3rem', height: '3rem' }}></div>
          <p className="text-secondary">Loading page...</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
        <div className="text-center">
          <i className="fas fa-exclamation-triangle fa-3x text-warning mb-3"></i>
          <h4 className="text-secondary">Page Not Found</h4>
          <p className="text-muted">The page you're looking for doesn't exist or has been moved.</p>
          <a href="/" className="btn btn-brand mt-2">Return Home</a>
        </div>
      </div>
    );
  }

  const rawContent = data.content || '';
  const pageHeading = extractHeading(rawContent) || data.title || 'Our Services';
  const bodyContent = cleanContent(rawContent);

  // Build breadcrumbs from URL segments
  const segments = slug.split('/').filter(Boolean);
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    ...segments.slice(0, -1).map((seg, i) => ({
      label: seg.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
      link: '/' + segments.slice(0, i + 1).join('/'),
    })),
    { label: pageHeading, active: true },
  ];

  return (
    <>
      <PageHero
        title={pageHeading}
        subtitle="Expert Services Tailored to Your Needs"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-5 bg-white">
        <div className="container py-3">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div
                className="wp-content-wrapper"
                dangerouslySetInnerHTML={{ __html: bodyContent }}
              />
            </div>
          </div>
        </div>
      </section>

      <FAQSection />

      <div id="contact-form">
        <ContactForm />
      </div>

      <ReviewsSlider />
    </>
  );
};

export default DynamicWpPage;
