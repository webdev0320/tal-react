import React from 'react';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <header className="position-relative text-white d-flex align-items-center" style={{ minHeight: "600px", backgroundImage: "url('/images/young-asian.webp')", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover" }}>
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-brand-dark" style={{ opacity: 0.65, zIndex: 1 }}></div>
        <div className="container py-5 position-relative" style={{ zIndex: 2 }}>
            <div className="row align-items-center min-vh-50 py-5">
                <div className="col-lg-8 col-xl-7">
                    <span className="badge bg-brand-orange px-3 py-2 fs-6 mb-3 text-uppercase tracking-wider">Expert Financial Partners</span>
                    <h1 className="display-3 fw-bold mb-4 brand-font" style={{ lineHeight: 1.15 }}>Your Dedicated Online Accounting Firm</h1>
                    <p className="lead mb-4 text-white-50 fs-5">Save time, reduce stress, and maximize tax efficiency with certified UK Chartered Accountants who handle spreadsheets while you build your dream.</p>
                    <div className="d-flex flex-wrap gap-3">
                        <Link to="/contact-us/" className="btn btn-brand btn-lg px-4 py-3">Book Free Consultancy</Link>
                        <a href="#expertise" className="btn btn-outline-light btn-lg px-4 py-3">Explore Our Services</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
};

export default HeroBanner;
