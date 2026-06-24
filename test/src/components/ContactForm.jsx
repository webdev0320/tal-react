"use client";

import { useState } from 'react';

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const ContactForm = ({ source = 'Website contact form' }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('submitting');
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || 'Unable to send your message right now.');
      }

      setFormData(initialFormData);
      setStatus('success');
    } catch (submitError) {
      setError(submitError.message);
      setStatus('error');
    }
  };

  const isSubmitting = status === 'submitting';

  return (
    <section id="contact-block" className="py-12 bg-white">
      <div className="container py-4">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="h-full">
            <div className="p-8 border border-slate-100 shadow-sm rounded-3xl bg-white h-full flex flex-col gap-6">
              <div>
                <span className="text-[#d2601a] font-bold uppercase text-xs tracking-wider">
                  Contact
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1D3C45] mt-2 mb-4">
                  Get in Touch
                </h2>
                <p className="text-slate-600">
                  Connect directly with our customer response desk or drop by our physical consultation offices.
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3 p-2 rounded-xl border border-transparent hover:border-slate-100 transition-colors">
                  <div className="bg-[#d2601a] text-white rounded-full flex items-center justify-center min-w-[32px] w-[32px] h-[32px]">
                    <i className="fas fa-phone-alt text-[10px]" />
                  </div>
                  <div>
                    <span className="text-slate-500 text-[9px] uppercase tracking-wider block">Phone Number</span>
                    <a href="tel:02081270728" className="font-bold text-[#1D3C45] block text-sm leading-tight">
                      020 8127 0728
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-xl border border-transparent hover:border-slate-100 transition-colors">
                  <div className="bg-green-600 text-white rounded-full flex items-center justify-center min-w-[32px] w-[32px] h-[32px]">
                    <i className="fab fa-whatsapp text-[10px]" />
                  </div>
                  <div>
                    <span className="text-slate-500 text-[9px] uppercase tracking-wider block">Whatsapp Chat</span>
                    <a
                      href="https://wa.me/447471170484"
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold text-[#1D3C45] block text-sm leading-tight"
                    >
                      074 7117 0484
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-xl border border-transparent hover:border-slate-100 transition-colors">
                  <div className="bg-[#1D3C45] text-white rounded-full flex items-center justify-center min-w-[32px] w-[32px] h-[32px]">
                    <i className="fas fa-envelope text-[10px]" />
                  </div>
                  <div>
                    <span className="text-slate-500 text-[9px] uppercase tracking-wider block">Email Support</span>
                    <a href="mailto:info@taxaccolega.co.uk" className="font-bold text-[#1D3C45] block text-sm leading-tight">
                      info@taxaccolega.co.uk
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-xl border border-transparent hover:border-slate-100 transition-colors">
                  <div className="bg-slate-400 text-white rounded-full flex items-center justify-center min-w-[32px] w-[32px] h-[32px]">
                    <i className="fas fa-map-marker-alt text-[10px]" />
                  </div>
                  <div>
                    <span className="text-slate-500 text-[9px] uppercase tracking-wider block">Office Address</span>
                    <span className="font-bold text-[#1D3C45] block text-xs leading-tight">
                      187a London Road, Croydon, Surrey, CR0 2RJ
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-auto p-2 rounded-2xl bg-slate-100 border border-slate-200">
                <h4 className="font-bold text-[#1D3C45] mb-2 px-2">Visit Our Office</h4>
                <div className="w-full h-64 rounded-xl overflow-hidden shadow-inner">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d792929.9532949874!2d-0.3106453380781967!3d51.72923465639633!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760640814ce7b7%3A0x4899b8fae2b5b21a!2sTaxaccolega%20Chartered%20Accountants%20%26%20Tax%20Advisers%20-%20Croydon!5e0!3m2!1sen!2sus!4v1781630658856!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="h-full">
            <div className="p-8 border border-slate-100 shadow-sm rounded-3xl bg-white h-full flex flex-col">
              <h3 className="mb-2 font-bold text-[#1D3C45]">Send Us a Message</h3>
              <p className="text-slate-600 text-sm mb-6">
                Request a call back or drop details of your accounts enquiry.
              </p>

              {status === 'success' && (
                <div className="mb-4 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                  Thank you. Your message has been sent and an expert advisor will reply shortly.
                </div>
              )}

              {status === 'error' && (
                <div className="mb-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col flex-grow gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-[#d2601a] outline-none"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-[#d2601a] outline-none"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-[#d2601a] outline-none"
                    placeholder="Contact Number"
                  />
                </div>
                <div className="flex-grow flex flex-col">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-[#d2601a] outline-none flex-grow min-h-36"
                    placeholder="How can we assist you today?"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#d2601a] text-white font-bold py-4 rounded-xl hover:bg-[#b85014] disabled:opacity-60 disabled:cursor-not-allowed transition-all mt-auto"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
