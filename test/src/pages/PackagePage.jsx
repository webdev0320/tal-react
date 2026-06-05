import React from 'react';
import { useParams, Link } from 'react-router-dom';

import charitiesImg from '../assets/packages-contractor-ltd-pricing.png'; // Fallback
import contractorImg from '../assets/packages-contractor-ltd-pricing.png';
import landlordsImg from '../assets/packages-landlords-3.png';
import ltdCompanyImg from '../assets/packages-ltd-company-pricing.png';
import spvsLtdImg from '../assets/packages-spvs-ltd-pricing.png';

const packagesConfig = {
  'sole-trader': {
    title: 'Sole Trader Package',
    img: null, // Placeholder or default
  },
  'ltd-company': {
    title: 'LTD Company Package',
    img: ltdCompanyImg,
    pricingTiers: [
      {
        name: 'Essential',
        price: '£45',
        features: [
          'Free Initial Consultation',
          'Bookkeeping Spreadsheet',
          'Full Set of Accounts',
          'Corporation Tax Return',
          'Director Personal Tax Return',
          'Confirmation Statement inc. CH Fee',
          'Payroll for 1 Employee',
          'Automated Email Reminders',
          '64-8 Authority - Dealing with HMRC',
          'Online Submission to HMRC and CH'
        ]
      },
      {
        name: 'Extensive',
        price: '£60',
        isPopular: true,
        features: [
          'Essential Package Services',
          'Bookkeeping up to 120 Transactions a month',
          'Payroll for up to 5 Employees',
          'Quarterly VAT Returns',
          'Unlimited Telephonic, Whatsapp & Email Support',
          'Tax Planning Advice'
        ]
      },
      {
        name: 'Supreme',
        price: '£85',
        features: [
          'Extensive Package Services',
          'Payroll for up to 10 Employees',
          'Setting up Accounting System',
          'Company Secretarial',
          'Tax Investigation Insurance',
          'Business Health Meeting up to 2 Annually',
          'Dedicated Accountant Upon Request'
        ]
      }
    ]
  },
  'contractor-ltd': {
    title: 'Contractor LTD Package',
    img: contractorImg,
    pricingTiers: [
      {
        name: 'Essential',
        price: '£50',
        features: [
          'Free Initial Consultation',
          'Bookkeeping Spreadsheet',
          'Full Set of Accounts',
          'Corporation Tax Return',
          'Director Personal Tax Return',
          'Confirmation Statement inc. CH Fee',
          'Payroll for 1 Employee',
          'Automated Email Reminders',
          '64-8 Authority - Dealing with HMRC',
          'Online Submission to HMRC and CH'
        ]
      },
      {
        name: 'Extensive',
        price: '£65',
        isPopular: true,
        features: [
          'Essential Package Services',
          'Bookkeeping up to 120 Transactions a month',
          'Payroll for up to 5 Employees',
          'Quarterly VAT Returns',
          'Unlimited Telephonic, Whatsapp & Email Support',
          'Tax Planning Advice'
        ]
      },
      {
        name: 'Supreme',
        price: '£85',
        features: [
          'Extensive Package Services',
          'Payroll for up to 10 Employees',
          'Setting up Accounting System',
          'Company Secretarial',
          'Tax Investigation Insurance',
          'Business Health Meeting up to 2 Annually',
          'Dedicated Accountant Upon Request'
        ]
      }
    ]
  },
  'landlords': {
    title: 'Landlords Package',
    img: landlordsImg,
  },
  'spvs-ltd': {
    title: "SPV's LTD Package",
    img: spvsLtdImg,
  },
  'charities': {
    title: 'Charities Package',
    img: null,
  }
};

const PackagePage = () => {
  const { slug } = useParams();
  const pkg = packagesConfig[slug] || packagesConfig['ltd-company'];

  return (
    <div>

      {/* Page Header */}
      <header
        className="position-relative text-white d-flex align-items-center justify-content-center"
        style={{
          minHeight: '220px',
          background: '#1a2332',
        }}
      >
        <div className="container position-relative py-5 text-center" style={{ zIndex: 2 }}>
          <h1 className="display-4 fw-bold text-white mb-2">{pkg.title}</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0 small">
              <li className="breadcrumb-item">
                <Link to="/" className="text-decoration-none" style={{ color: '#e07b39' }}>Home</Link>
              </li>
              <li className="breadcrumb-item text-white-50" aria-current="page">Packages</li>
              <li className="breadcrumb-item active text-white" aria-current="page">{pkg.title}</li>
            </ol>
          </nav>
        </div>
      </header>

      {/* Pricing Section */}
      <section className="py-5 bg-white">
        <div className="container">
          {pkg.pricingTiers ? (
            <div className="row g-4 justify-content-center mt-3">
              {pkg.pricingTiers.map((tier, idx) => (
                <div key={idx} className="col-lg-4 col-md-6">
                  <div className={`card h-100 border-0 shadow-sm ${tier.isPopular ? 'border-brand-orange' : ''}`} style={{ transition: 'transform 0.3s', position: 'relative' }}>
                    {tier.isPopular && (
                      <div className="position-absolute top-0 start-50 translate-middle badge rounded-pill" style={{ background: '#e07b39', zIndex: 1 }}>
                        Most Popular
                      </div>
                    )}
                    <div className="card-header text-center py-4 border-0" style={{ background: tier.isPopular ? '#1a2332' : '#f8f9fa', color: tier.isPopular ? '#fff' : '#1a2332' }}>
                      <h4 className="fw-bold mb-1">{tier.name}</h4>
                      <h2 className="display-5 fw-bold mb-0" style={{ color: tier.isPopular ? '#e07b39' : '#1a2332' }}>{tier.price}</h2>
                      <span className="small text-muted">+VAT/m</span>
                    </div>
                    <div className="card-body p-4 bg-white">
                      <ul className="list-unstyled mb-0">
                        {tier.features.map((feature, fIdx) => (
                          <li key={fIdx} className="mb-3 d-flex align-items-start">
                            <i className="fas fa-check-circle mt-1 me-3" style={{ color: '#e07b39' }}></i>
                            <span className="text-secondary small">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="card-footer bg-white border-0 p-4 text-center">
                      <Link to="/contact" className={`btn w-100 ${tier.isPopular ? 'text-white' : 'btn-outline-dark'}`} style={tier.isPopular ? { background: '#e07b39', fontWeight: 600 } : { fontWeight: 600 }}>
                        Choose {tier.name}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center">
                <div className="p-4 border rounded shadow-sm bg-light">
                  <img 
                    src={pkg.img || 'https://via.placeholder.com/800x600?text=Pricing+Coming+Soon'} 
                    alt={pkg.title} 
                    className="img-fluid rounded"
                    style={{ maxWidth: '100%', height: 'auto' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/800x600?text=Pricing+Coming+Soon';
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          <div className="row justify-content-center mt-5 text-center">
            <div className="col-lg-8">
              <h3 className="fw-bold" style={{ color: '#1a2332' }}>Ready to get started?</h3>
              <p className="text-secondary mb-4">Contact our team to discuss which package is best for you.</p>
              <Link to="/contact" className="btn px-4 py-2 text-white" style={{ background: '#e07b39', fontWeight: 600 }}>
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PackagePage;
