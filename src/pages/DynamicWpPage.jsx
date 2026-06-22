"use client";
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import ReviewsSlider from '../components/ReviewsSlider';
import FAQSection from '../components/FAQSection';
import './wp-content.css';
import Footer from '../components/Footer';

/**
 * Strips HTML tags from a string and returns plain text.
 */
const stripTags = (html) =>
  html.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').trim();

/**
 * Extracts the heading text to use in the PageHero.
 * ONLY uses the <h1><a href="...">Title</a></h1> pattern — this is
 * uniquely the WordPress post title injected by the theme template.
 * Bare <h1> tags inside content are section headings, not page titles,
 * so we leave them alone and fall back to data.title instead.
 */
const extractHeading = (html) => {
  const linkedH1 = html.match(/<h1[^>]*>\s*<a[^>]*>([\s\S]*?)<\/a>\s*<\/h1>/i);
  if (linkedH1) return stripTags(linkedH1[1]);
  return null;
};

/**
 * Cleans raw WordPress HTML for display:
 * - Removes the linked <h1><a> title block (shown in PageHero instead)
 * - Removes WP shortcodes
 * - Removes theme-injected "Your path to success" subtitle
 * - Removes leading empty <p> tags
 * Bare <h1> section headings are left untouched.
 * Also removes broken hardcoded FAQ section.
 */
const cleanContent = (html) => {
  let c = html;

  // Remove ONLY the linked-anchor h1 (WordPress post title — shown in hero)
  c = c.replace(/<h1[^>]*>\s*<a[^>]*>[\s\S]*?<\/a>\s*<\/h1>/gi, '');

  // WP shortcodes
  c = c.replace(/\[rank_math_breadcrumb\]/g, '');
  c = c.replace(/\[insert phone number\]/gi, '020 8127 0728');
  c = c.replace(/\[[^\]]+\]/g, '');

  // Theme subtitle injected by Elementor/theme
  c = c.replace(/<p[^>]*>\s*Your path to success\s*<\/p>/gi, '');

  // Leading empty paragraphs
  c = c.replace(/^(\s*<p[^>]*>\s*<\/p>\s*)*/i, '');

  // Remove FAQ section
  c = c.replace(/<h2>FAQs<\/h2>[\s\S]*?<a href="tel:02081270728"/gi, '<a href="tel:02081270728"');

  return c.trim();
};

const DynamicWpPage = ({ slug: propSlug }) => {
  const pathname = usePathname() || '/';
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
      <Footer />
      </>
  );
};

export default DynamicWpPage;
