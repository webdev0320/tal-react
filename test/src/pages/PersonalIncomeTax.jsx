import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import local components
import Hero from '../components/personal-income-tax/Hero';
import MultiSourceIncome from '../components/personal-income-tax/MultiSourceIncome';
import AccumulationAnalysis from '../components/personal-income-tax/AccumulationAnalysis';
import TaxationLinksBar from '../components/TaxationLinksBar';
import DirectorExtractions from '../components/personal-income-tax/DirectorExtractions';
import PropertyTaxation from '../components/personal-income-tax/PropertyTaxation';
import PropertyRiskTable from '../components/personal-income-tax/PropertyRiskTable';
import ForeignIncome from '../components/personal-income-tax/ForeignIncome';
import PartnerCarousel from '../components/personal-income-tax/PartnerCarousel';
import ExposureAnomalies from '../components/personal-income-tax/ExposureAnomalies';
import PreFilingHabits from '../components/personal-income-tax/PreFilingHabits';
import OptimizationDeliverables from '../components/personal-income-tax/OptimizationDeliverables';
import IncomeSourceReviewTable from '../components/personal-income-tax/IncomeSourceReviewTable';
import ReviewPanel from '../components/personal-income-tax/ReviewPanel';
import AdvisoryTimeline from '../components/personal-income-tax/AdvisoryTimeline';
import WealthPreservation from '../components/personal-income-tax/WealthPreservation';
import SummaryCTA from '../components/personal-income-tax/SummaryCTA';
import IntakePanel from '../components/personal-income-tax/IntakePanel';
import FAQSection from '../components/personal-income-tax/FAQSection';
import LondonDirectory from '../components/personal-income-tax/LondonDirectory';

const PersonalIncomeTaxPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-light min-h-screen">
      <TaxationLinksBar />

      {/* ── HERO SECTION WITH SIDEBAR OVERLAP ── */}
      <header className="position-relative text-white overflow-hidden py-5" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)', minHeight: '380px' }}>
        <div className="position-absolute w-100 h-100" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(210, 96, 26, 0.15) 0%, transparent 60%)', top: 0, left: 0, zIndex: 1 }}></div>
        <div className="container position-relative py-4" style={{ zIndex: 2 }}>
          <div className="row g-4 align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <span className="text-uppercase small tracking-wider fw-bold mb-2 d-inline-block text-brand-orange" style={{ letterSpacing: '2px' }}>
                Income Tax Specialists
              </span>
              <h1 className="display-4 fw-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Personal Income Tax Accountants
              </h1>
              <p className="lead text-white-50 mb-4" style={{ maxWidth: '680px', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Expert Guidance for Personal Income Tax Services: Tailored Solutions for Tax-Efficient Financial Strategies at Taxaccolega.
              </p>
              
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mb-4">
                <a href="#contact-block" className="btn btn-brand px-4 py-2 shadow">
                  CONTACT US
                </a>
              </div>

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0 small" style={{ background: 'transparent' }}>
                  <li className="breadcrumb-item"><Link to="/" className="text-decoration-none text-brand-orange">Home</Link></li>
                  <li className="breadcrumb-item"><Link to="/taxation" className="text-decoration-none text-brand-orange">Taxation</Link></li>
                  <li className="breadcrumb-item active text-white-50" aria-current="page">Personal Income Tax</li>
                </ol>
              </nav>
            </div>
            
            {/* HERO OVERLAPPING SIDEBAR */}
            <div className="col-lg-4 d-none d-lg-block position-relative" style={{ zIndex: 3 }}>
              <div className="p-4 rounded-4 shadow-lg" style={{ background: 'linear-gradient(180deg, rgba(232,162,116,0.9) 0%, rgba(212,108,36,0.95) 50%, rgba(184,80,14,1) 100%)' }}>
                <h5 className="text-white fw-bold mb-4 text-center border-bottom pb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>Quick Navigation</h5>
                <div className="d-flex flex-column gap-3">
                  {[
                    { title: 'Tax Investigation', link: '/taxation/tax-investigation-insurance' },
                    { title: 'VAT Tax Accounting', link: '/taxation/vat-accountants' },
                    { title: 'Inheritance Tax', link: '/taxation/inheritance-tax-planning' }
                  ].map((item, idx) => (
                    <Link key={idx} to={item.link} className="card border-0 shadow rounded-3 p-3 text-decoration-none bg-white hover-shadow transition" style={{ transition: 'all 0.3s' }}>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-bold text-brand-dark" style={{ fontSize: '0.95rem' }}>{item.title}</span>
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

      {/* Breadcrumb */}
      <div className="bg-white border-bottom py-3">
        <div className="container px-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 small">
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none" style={{ color: '#D2601A' }}>Home</Link></li>
              <li className="breadcrumb-item"><Link to="/taxation" className="text-decoration-none" style={{ color: '#D2601A' }}>Taxation</Link></li>
              <li className="breadcrumb-item active text-secondary">Personal Income Tax</li>
            </ol>
          </nav>
        </div>
      </div>

      <Hero />
      <MultiSourceIncome />
      <AccumulationAnalysis />
      <TaxationLinksBar />
      <DirectorExtractions />
      <PropertyTaxation />
      <PropertyRiskTable />
      <ForeignIncome />
      <PartnerCarousel />
      <ExposureAnomalies />
      <PreFilingHabits />
      <OptimizationDeliverables />
      <IncomeSourceReviewTable />
      <ReviewPanel />
      <AdvisoryTimeline />
      <WealthPreservation />
      <SummaryCTA />
      <IntakePanel />
      <FAQSection />
      <LondonDirectory />
      
    </div>
  );
};

export default PersonalIncomeTaxPage;
