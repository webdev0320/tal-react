"use client";

import React, { useState, useCallback, useRef } from "react";
import countries from "../data/countries";
import "./IDVerificationModal.css";

const TOTAL_STEPS = 7; // 0-6

/* ── Reusable country <option> list ── */
function CountryOptions({ defaultCode = "GB" }) {
  return (
    <>
      <option value="">Select Country</option>
      {countries.map((c) => (
        <option key={c.code} value={c.code} data-countryname={c.name}>
          {c.name}
        </option>
      ))}
    </>
  );
}

/* ── Price helper ── */
function getPricing(overseas) {
  if (overseas) return { base: 45, vat: 9, total: 54, regular: 94.99 };
  return { base: 35, vat: 7, total: 42, regular: 49.99 };
}

export default function IDVerificationModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [termsVisible, setTermsVisible] = useState(false);
  const [showStripe, setShowStripe] = useState(false);
  const [showPaypal, setShowPaypal] = useState(false);

  // Form data
  const [form, setForm] = useState({
    fornames: "", lastName: "", dob: "", nationality: "GB", placeOfBirth: "",
    currentAddress: "", moveInDate: "", previousAddress: "", email: "", phone: "",
    isDirector: false, isPSC: false,
    overseasSelect: "",
    agree: false,
    billingName: "", billingAddress: "", billingCity: "", billingPostcode: "", billingCountry: "GB",
  });
  const [files, setFiles] = useState({ idDocument: null, addressDocument: null, overseasDoc: null });
  const [errors, setErrors] = useState({});

  const boxRef = useRef(null);

  const scrollTop = () => boxRef.current?.scrollTo({ top: 0, behavior: "smooth" });

  const set = (key, val) => {
    setForm((p) => ({ ...p, [key]: val }));
    setErrors((p) => ({ ...p, [key]: false }));
  };

  const setFile = (key, fileList) => {
    setFiles((p) => ({ ...p, [key]: fileList?.[0] || null }));
    setErrors((p) => ({ ...p, [key]: false }));
  };

  const isOverseas = form.overseasSelect === "yes";
  const pricing = getPricing(isOverseas);
  const progress = ((step + 1) / TOTAL_STEPS) * 100;

  /* ── Validation ── */
  const validateStep = useCallback(() => {
    const e = {};
    if (step === 0) {
      if (!form.fornames.trim()) e.fornames = true;
      if (!form.lastName.trim()) e.lastName = true;
      if (!form.dob) e.dob = true;
      if (!form.nationality) e.nationality = true;
      if (!form.placeOfBirth.trim()) e.placeOfBirth = true;
    }
    if (step === 1) {
      if (!form.currentAddress.trim()) e.currentAddress = true;
      if (!form.moveInDate) e.moveInDate = true;
      if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = true;
      if (!form.phone.trim() || !/^\d{7,15}$/.test(form.phone)) e.phone = true;
    }
    if (step === 2) {
      if (!form.isDirector && !form.isPSC) { e.isDirector = true; e.isPSC = true; }
    }
    if (step === 3) {
      if (!files.idDocument) e.idDocument = true;
      if (!files.addressDocument) e.addressDocument = true;
      if (!form.overseasSelect) e.overseasSelect = true;
    }
    if (step === 4) {
      if (!files.overseasDoc) e.overseasDoc = true;
    }
    if (step === 5) {
      if (!form.agree) e.agree = true;
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }, [step, form, files]);

  /* ── Navigation ── */
  const goNext = () => {
    if (!validateStep()) return;
    // Skip overseas step if not overseas
    if (step === 3 && !isOverseas) { setStep(5); scrollTop(); return; }
    if (step < TOTAL_STEPS - 1) { setStep(step + 1); scrollTop(); }
  };

  const goPrev = () => {
    if (step === 5 && form.overseasSelect !== "yes") { setStep(3); scrollTop(); return; }
    if (step > 0) { setStep(step - 1); scrollTop(); }
  };

  const openModal = () => { setOpen(true); setStep(0); document.body.style.overflow = "hidden"; };
  const closeModal = () => { setOpen(false); document.body.style.overflow = ""; };

  /* ── Input helper ── */
  const inputClass = (key) => `idv-input${errors[key] ? " error" : ""}`;
  const selectClass = (key) => `idv-select${errors[key] ? " error" : ""}`;

  return (
    <>
      {/* ── Trigger Button ── */}
      <button type="button" className="idv-trigger" onClick={openModal} id="idv-open-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="9" cy="10" r="2" />
          <path d="M15 8h2M15 12h2M7 16h10" />
        </svg>
        ID Verification
      </button>

      {/* ── Modal Overlay ── */}
      {open && (
        <div className="idv-overlay" onClick={(e) => e.target === e.currentTarget && closeModal()}>
          <div className="idv-box" ref={boxRef}>
            <button className="idv-close" onClick={closeModal} aria-label="Close">&times;</button>
            <h2>ID Verification Form For Companies House</h2>

            {/* Progress */}
            <div className="idv-progress-track">
              <div className="idv-progress-fill" style={{ width: `${progress}%` }} />
            </div>

            {/* ── Step 0: Personal Details ── */}
            {step === 0 && (
              <div className="idv-step" key="step0">
                <p style={{ fontSize: 14, color: "#4b5563", marginBottom: 12, lineHeight: 1.6 }}>
                  From 18 November 2025, UK law requires all company Directors and PSCs to verify their identity with Companies House.
                </p>
                <ul className="idv-intro-list">
                  <li>Companies House will issue a personal code to PSCs.</li>
                  <li>Taxaccolega (ACSP) can help collect data and assist.</li>
                  <li>Please answer the questions and upload documents.</li>
                </ul>
                <h3><span className="step-icon">1</span> Personal Details</h3>
                <div className="idv-row">
                  <div className="idv-col">
                    <label className="idv-label">Forenames <span className="idv-required">*</span></label>
                    <input className={inputClass("fornames")} value={form.fornames} onChange={(e) => set("fornames", e.target.value)} />
                  </div>
                  <div className="idv-col">
                    <label className="idv-label">Last Name <span className="idv-required">*</span></label>
                    <input className={inputClass("lastName")} value={form.lastName} onChange={(e) => set("lastName", e.target.value)} />
                  </div>
                  <div className="idv-col">
                    <label className="idv-label">Date of Birth <span className="idv-required">*</span></label>
                    <input type="date" className={inputClass("dob")} value={form.dob} onChange={(e) => set("dob", e.target.value)} max={new Date().toISOString().split("T")[0]} />
                  </div>
                </div>
                <div className="idv-row">
                  <div className="idv-col">
                    <label className="idv-label">Nationality <span className="idv-required">*</span></label>
                    <select className={selectClass("nationality")} value={form.nationality} onChange={(e) => set("nationality", e.target.value)}>
                      <CountryOptions />
                    </select>
                  </div>
                  <div className="idv-col">
                    <label className="idv-label">Place of Birth <span className="idv-required">*</span></label>
                    <input className={inputClass("placeOfBirth")} value={form.placeOfBirth} onChange={(e) => set("placeOfBirth", e.target.value)} />
                  </div>
                </div>
                <div className="idv-actions">
                  <button type="button" className="idv-btn idv-btn-primary" onClick={goNext}>Next →</button>
                </div>
              </div>
            )}

            {/* ── Step 1: Contact Details ── */}
            {step === 1 && (
              <div className="idv-step" key="step1">
                <h3><span className="step-icon">2</span> Contact Details</h3>
                <div className="idv-row">
                  <div className="idv-col" style={{ flex: "1 1 100%" }}>
                    <label className="idv-label">Current Address <span className="idv-required">*</span></label>
                    <input className={inputClass("currentAddress")} value={form.currentAddress} onChange={(e) => set("currentAddress", e.target.value)} />
                  </div>
                </div>
                <div className="idv-row">
                  <div className="idv-col">
                    <label className="idv-label">Date you moved in <span className="idv-required">*</span></label>
                    <input type="date" className={inputClass("moveInDate")} value={form.moveInDate} onChange={(e) => set("moveInDate", e.target.value)} max={new Date().toISOString().split("T")[0]} />
                  </div>
                  <div className="idv-col">
                    <label className="idv-label">Previous Address(es) in last 12 months</label>
                    <input className="idv-input" value={form.previousAddress} onChange={(e) => set("previousAddress", e.target.value)} />
                  </div>
                </div>
                <div className="idv-row">
                  <div className="idv-col">
                    <label className="idv-label">Email <span className="idv-required">*</span></label>
                    <input type="email" className={inputClass("email")} value={form.email} onChange={(e) => set("email", e.target.value)} />
                  </div>
                  <div className="idv-col">
                    <label className="idv-label">Phone <span className="idv-required">*</span></label>
                    <input className={inputClass("phone")} value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="e.g. 07911123456" />
                  </div>
                </div>
                <div className="idv-actions">
                  <button type="button" className="idv-btn idv-btn-secondary" onClick={goPrev}>← Back</button>
                  <button type="button" className="idv-btn idv-btn-primary" onClick={goNext}>Next →</button>
                </div>
              </div>
            )}

            {/* ── Step 2: Role ── */}
            {step === 2 && (
              <div className="idv-step" key="step2">
                <h3><span className="step-icon">3</span> Role in the Company</h3>
                <label className={`idv-checkbox-label${errors.isDirector ? " error" : ""}`}>
                  <input type="checkbox" checked={form.isDirector} onChange={(e) => set("isDirector", e.target.checked)} />
                  I am a Director
                </label>
                <label className={`idv-checkbox-label${errors.isPSC ? " error" : ""}`}>
                  <input type="checkbox" checked={form.isPSC} onChange={(e) => set("isPSC", e.target.checked)} />
                  I am a Person with Significant Control (PSC)
                </label>
                {(errors.isDirector || errors.isPSC) && (
                  <p style={{ color: "#ef4444", fontSize: 13, marginTop: 4 }}>Please select at least one role.</p>
                )}
                <div className="idv-actions">
                  <button type="button" className="idv-btn idv-btn-secondary" onClick={goPrev}>← Back</button>
                  <button type="button" className="idv-btn idv-btn-primary" onClick={goNext}>Next →</button>
                </div>
              </div>
            )}

            {/* ── Step 3: Documents ── */}
            {step === 3 && (
              <div className="idv-step" key="step3">
                <h3><span className="step-icon">4</span> Identity Documents</h3>
                <div className="idv-row">
                  <div className="idv-col">
                    <label className="idv-label">ID Document <span className="idv-required">*</span></label>
                    <input type="file" className={inputClass("idDocument")} accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" onChange={(e) => setFile("idDocument", e.target.files)} />
                  </div>
                  <div className="idv-col">
                    <label className="idv-label">Address Document <span className="idv-required">*</span></label>
                    <input type="file" className={inputClass("addressDocument")} accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" onChange={(e) => setFile("addressDocument", e.target.files)} />
                  </div>
                </div>
                <div className="idv-row">
                  <div className="idv-col">
                    <label className="idv-label">Are you an Overseas Director and PSC? <span className="idv-required">*</span></label>
                    <select className={selectClass("overseasSelect")} value={form.overseasSelect} onChange={(e) => set("overseasSelect", e.target.value)}>
                      <option value="">-- Select --</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>
                <div className="idv-actions">
                  <button type="button" className="idv-btn idv-btn-secondary" onClick={goPrev}>← Back</button>
                  <button type="button" className="idv-btn idv-btn-primary" onClick={goNext}>Next →</button>
                </div>
              </div>
            )}

            {/* ── Step 4: Overseas Docs ── */}
            {step === 4 && (
              <div className="idv-step" key="step4">
                <h3><span className="step-icon">5</span> Additional (Overseas)</h3>
                <label className="idv-label">Overseas Supporting Docs <span className="idv-required">*</span></label>
                <input type="file" className={inputClass("overseasDoc")} accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" onChange={(e) => setFile("overseasDoc", e.target.files)} />
                <p className="idv-note">An additional fee of £10 + VAT will apply for overseas verification.</p>
                <div className="idv-actions">
                  <button type="button" className="idv-btn idv-btn-secondary" onClick={goPrev}>← Back</button>
                  <button type="button" className="idv-btn idv-btn-primary" onClick={goNext}>Next →</button>
                </div>
              </div>
            )}

            {/* ── Step 5: Consent ── */}
            {step === 5 && (
              <div className="idv-step" key="step5">
                <h3><span className="step-icon">{isOverseas ? "6" : "5"}</span> Privacy &amp; Consent</h3>
                <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.6, marginBottom: 12 }}>
                  <strong>You are declaring that all documents and information provided by you are true and correct.</strong> You consent to the use and storage of your personal data and for Taxaccolega Chartered Accountants to act as Authorised Corporate Service Provider (ACSP) on your behalf.
                </p>
                <label className="idv-checkbox-label">
                  <input type="checkbox" checked={form.agree} onChange={(e) => set("agree", e.target.checked)} />
                  <span>
                    I agree to Terms <span className="idv-required">*</span>
                    {" "}
                    <button type="button" className="idv-terms-toggle" onClick={() => setTermsVisible(!termsVisible)}>
                      (see T&amp;Cs)
                    </button>
                  </span>
                </label>
                {errors.agree && <p style={{ color: "#ef4444", fontSize: 13 }}>You must agree to the terms before continuing.</p>}

                {termsVisible && (
                  <div className="idv-terms-box">
                    <p><strong>1. Purpose of this Agreement</strong><br />
                      1.1 These Terms apply to the collection and processing of personal data and identity documents required under the Economic Crime and Corporate Transparency Act 2023.<br />
                      1.2 By submitting your details, you authorise Taxaccolega Chartered Accountants (ACSP) to process your information for identity verification with Companies House.</p>
                    <p><strong>2. Client Responsibilities</strong><br />
                      2.1 You confirm that all information and documents you provide are true, accurate, complete, and current.<br />
                      2.2 You accept full responsibility for any false or misleading information supplied.<br />
                      2.3 You must notify us promptly of any changes affecting the verification process.</p>
                    <p><strong>3. Our Role &amp; Limitation</strong><br />
                      3.1 We act solely as an intermediary in submitting your information to Companies House.<br />
                      3.2 We do not guarantee the acceptance, speed, or outcome of any identity verification.<br />
                      3.3 We shall not be liable for any loss arising from inaccurate information, Companies House delays, or rejection of verification.</p>
                    <p><strong>4. Data Protection</strong><br />
                      4.1 We process your data in accordance with UK GDPR and Data Protection Act 2018.<br />
                      4.2 Your data is used solely for identity verification and related compliance.<br />
                      4.3 We retain your information only as long as required by law.</p>
                    <p><strong>5. Client Consent</strong><br />
                      By ticking the consent box, you confirm you have read, understood, and agreed to these Terms &amp; Conditions.</p>
                    <p><strong>6. Governing Law</strong><br />
                      These Terms are governed by the laws of England and Wales.</p>
                  </div>
                )}

                <div className="idv-actions">
                  <button type="button" className="idv-btn idv-btn-secondary" onClick={goPrev}>← Back</button>
                  <button type="button" className="idv-btn idv-btn-primary" onClick={goNext}>Next →</button>
                </div>
              </div>
            )}

            {/* ── Step 6: Checkout ── */}
            {step === 6 && (
              <div className="idv-step" key="step6">
                <h3><span className="step-icon">{isOverseas ? "7" : "6"}</span> Checkout</h3>

                <div className="idv-price-box">
                  <span className="idv-price-regular">Regular Price: £{pricing.regular.toFixed(2)} + VAT</span>
                  <span className="idv-price-sale">£{pricing.base.toFixed(2)} + VAT</span>
                  <div className="idv-price-details">
                    <p>Net Amount: £{pricing.base.toFixed(2)}</p>
                    <p>VAT @ 20%: £{pricing.vat.toFixed(2)}</p>
                    <p className="total">Total: £{pricing.total.toFixed(2)}</p>
                  </div>
                </div>

                <div className="idv-actions" style={{ justifyContent: "center" }}>
                  <button type="button" className="idv-btn idv-btn-secondary" onClick={goPrev}>← Back</button>
                  <button type="button" className="idv-btn idv-btn-pay" onClick={() => { setShowStripe(true); setShowPaypal(false); }}>
                    💳 Pay Via Stripe
                  </button>
                  <button type="button" className="idv-btn idv-btn-pay" onClick={() => { setShowPaypal(true); setShowStripe(false); }}>
                    🅿 Pay Via PayPal
                  </button>
                </div>

                {/* Stripe Form */}
                {showStripe && (
                  <div className="idv-stripe-form">
                    <h4>Secure Payment</h4>
                    <div className="idv-row">
                      <div className="idv-col">
                        <label className="idv-label">Full Name</label>
                        <input className="idv-input" value={form.billingName} onChange={(e) => set("billingName", e.target.value)} />
                      </div>
                    </div>
                    <div className="idv-row">
                      <div className="idv-col">
                        <label className="idv-label">Address</label>
                        <input className="idv-input" value={form.billingAddress} onChange={(e) => set("billingAddress", e.target.value)} />
                      </div>
                    </div>
                    <div className="idv-row">
                      <div className="idv-col">
                        <label className="idv-label">City</label>
                        <input className="idv-input" value={form.billingCity} onChange={(e) => set("billingCity", e.target.value)} />
                      </div>
                      <div className="idv-col">
                        <label className="idv-label">Postcode</label>
                        <input className="idv-input" value={form.billingPostcode} onChange={(e) => set("billingPostcode", e.target.value)} />
                      </div>
                    </div>
                    <div className="idv-row">
                      <div className="idv-col">
                        <label className="idv-label">Country</label>
                        <select className="idv-select" value={form.billingCountry} onChange={(e) => set("billingCountry", e.target.value)}>
                          <CountryOptions />
                        </select>
                      </div>
                    </div>
                    <label className="idv-label">Card Details</label>
                    <div id="idv-card-element" style={{ padding: 12, border: "1.5px solid #d1d5db", borderRadius: 8, background: "#fff", marginBottom: 16 }}>
                      <p style={{ color: "#9ca3af", fontSize: 13 }}>Stripe card element will mount here</p>
                    </div>
                    <div id="idv-card-errors" role="alert" />
                    <button type="button" className="idv-btn idv-btn-primary" style={{ width: "100%" }}>
                      Pay £{pricing.total.toFixed(2)}
                    </button>
                  </div>
                )}

                {/* PayPal placeholder */}
                {showPaypal && (
                  <div className="idv-stripe-form" style={{ textAlign: "center" }}>
                    <h4>PayPal Checkout</h4>
                    <div id="idv-paypal-button-container" style={{ minHeight: 50 }}>
                      <p style={{ color: "#9ca3af", fontSize: 13, padding: 16 }}>PayPal button will render here</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
