"use client";

import React, { useEffect, useMemo, useState } from 'react';
import { ArrowRight, Clock3, ExternalLink, FileText, Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import { accountServiceLinks } from '../data/accountServicePages';
import { buildAccountServiceHtml } from '../utils/buildAccountServiceContent';
import './AccountServicePage.css';

const normalizePath = (path) => path.replace(/\/$/, '');

const slugify = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const cleanWpHtml = (html) => {
  if (typeof document === 'undefined') return html;

  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;

  wrapper.querySelectorAll('h2, h3, h4').forEach((heading, index) => {
    const id = `${slugify(heading.textContent || 'section')}-${index}`;
    heading.setAttribute('id', id);
  });

  return wrapper.innerHTML;
};

const getOutline = (html) => {
  if (typeof document === 'undefined') return [];

  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;

  return [...wrapper.querySelectorAll('h2, h3')].map((heading) => ({
    id: heading.getAttribute('id') || slugify(heading.textContent || 'section'),
    title: heading.textContent?.trim() || '',
    level: heading.tagName.toLowerCase(),
  }));
};

const ContactCard = ({ contact }) => (
  <div className="account-service-panel rounded-none p-5 text-white">
    <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#f4b06c]">Contact</p>
    <div className="space-y-3 text-sm text-white/78">
      <p className="flex items-start gap-3"><Phone size={17} className="mt-0.5 shrink-0 text-[#f4b06c]" /> {contact.phone}</p>
      <p className="flex items-start gap-3"><Mail size={17} className="mt-0.5 shrink-0 text-[#f4b06c]" /> {contact.email}</p>
      <p className="flex items-start gap-3"><MapPin size={17} className="mt-0.5 shrink-0 text-[#f4b06c]" /> {contact.address}</p>
    </div>
  </div>
);

const AccountServicePage = ({ page }) => {
  const [contentHtml, setContentHtml] = useState('');
  const [outline, setOutline] = useState([]);
  const rawContent = useMemo(() => buildAccountServiceHtml(page), [page]);

  useEffect(() => {
    const content = cleanWpHtml(rawContent);
    setContentHtml(content);
    setOutline(getOutline(content));
  }, [rawContent]);

  const heroBullets = page.stats || [];

  return (
    <div className="account-service-shell">
      <section className="account-service-hero text-white">
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.28fr_.72fr] lg:px-8 lg:py-20">
          <div className="relative z-10">
            <div className="account-service-panel mb-5 inline-flex items-center gap-2 border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase text-[#f4b06c]">
              <Sparkles size={16} />
              {page.eyebrow}
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-tight text-white md:text-5xl">
              {page.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/78">
              {page.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/contact-us" className="inline-flex items-center gap-2 bg-[#d2601a] px-5 py-3 text-sm font-bold text-white no-underline transition hover:bg-[#b84d10]">
                Contact Us
                <ArrowRight size={16} />
              </a>
              <a href="/schedule-a-phone-call-or-video-meeting" className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-sm font-bold text-white no-underline transition hover:bg-white/10">
                Schedule a Call
                <ExternalLink size={16} />
              </a>
            </div>

            {heroBullets.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-3">
                {heroBullets.map((item) => (
                  <span key={item} className="border border-white/15 bg-white/8 px-3 py-2 text-sm font-semibold text-white/86">
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>

          <aside className="relative z-10 space-y-4">
            <div className="account-service-panel p-5 text-white">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#f4b06c]">Pages</p>
              <div className="grid gap-2">
                {accountServiceLinks.map((link) => {
                  const active = normalizePath(link.to) === normalizePath(page.path);
                  return (
                    <a
                      key={link.label}
                      href={link.to}
                      className={`flex items-center justify-between gap-3 border px-3 py-2 text-sm font-bold no-underline transition ${
                        active
                          ? 'border-[#d2601a] bg-[#d2601a] text-white'
                          : 'border-white/12 bg-white/8 text-white/90 hover:border-[#f4b06c] hover:bg-white/12'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight size={15} />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="account-service-panel p-5 text-white">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#f4b06c]">At a glance</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock3 size={18} className="text-[#f4b06c]" />
                  <span className="text-sm text-white/80">Structured service content with section-by-section guidance</span>
                </div>
                <div className="flex items-center gap-3">
                  <FileText size={18} className="text-[#f4b06c]" />
                  <span className="text-sm text-white/80">Tables, FAQs, and image placeholders ready for your assets</span>
                </div>
              </div>
            </div>

            <ContactCard contact={page.contact} />
          </aside>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
          <article className="account-service-article px-5 py-8 sm:px-8 lg:px-10">
            {contentHtml ? (
              <div
                className="wp-content"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />
            ) : (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#173941]">Loading content</h2>
                <p className="text-[#53666a]">Preparing the page content.</p>
              </div>
            )}
          </article>

          <aside className="space-y-6">
            <div className="rounded-none border border-[#e7ded3] bg-white p-5 shadow-sm">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#d2601a]">Outline</p>
              {outline.length > 0 ? (
                <div className="account-service-outline space-y-3">
                  {outline.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={item.level === 'h3' ? 'pl-4' : ''}
                    >
                      <span className="block text-sm font-semibold">{item.title}</span>
                      <small>{item.level === 'h2' ? 'Section' : 'Detail'}</small>
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-sm leading-7 text-[#53666a]">The outline appears once the page content is loaded.</p>
              )}
            </div>

            <div className="rounded-none border border-[#e7ded3] bg-white p-5 shadow-sm">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#d2601a]">Contact</p>
              <div className="space-y-3 text-sm text-[#53666a]">
                <p className="flex items-start gap-3"><Phone size={17} className="mt-0.5 shrink-0 text-[#d2601a]" /> {page.contact.phone}</p>
                <p className="flex items-start gap-3"><Mail size={17} className="mt-0.5 shrink-0 text-[#d2601a]" /> {page.contact.email}</p>
                <p className="flex items-start gap-3"><MapPin size={17} className="mt-0.5 shrink-0 text-[#d2601a]" /> {page.contact.address}</p>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default AccountServicePage;
