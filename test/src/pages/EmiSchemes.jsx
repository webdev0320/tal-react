import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import ReviewsSlider from '../components/ReviewsSlider';
import TaxationLinksBar from '../components/TaxationLinksBar';
import { taxationConfig } from './taxationConfig';

const EmiSchemesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: '#f8f9fa', minHeight: '100vh' }}>
      <TaxationLinksBar />

      <PageHero
        title="EMI Schemes"
        subtitle="EMI Share Option Scheme Advice & Tax Support"
        breadcrumbs={[
            { label: 'Home', link: '/' },
            { label: 'Taxation', link: '/taxation' },
            { label: 'EMI Schemes', active: true }
        ]}
      />

      <section className="py-5 bg-white">
        <div className="container py-3">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <h1 className="display-5 fw-bold text-brand-dark mb-4">EMI Scheme UK | EMI Share Option Scheme Advice & Tax Support</h1>
              <p className="text-secondary mb-3">Most growing businesses eventually reach the same uncomfortable point. The company is moving forward. Revenue improves. The team becomes stronger. Key employees start taking on responsibilities that directly affect growth. The founder knows certain people are becoming commercially critical to the future of the business.</p>
              <p className="text-secondary mb-3">But salary alone stops feeling like the right long-term answer. Not because the business does not value the employee. Because scaling companies rarely have unlimited room for aggressive payroll expansion without affecting cashflow, forecasting, hiring flexibility, or future investment positioning.</p>
              <p className="text-secondary mb-4">An EMI scheme can create substantial tax advantages when structured properly. It can also create unexpected tax exposure, valuation disputes, disqualifying events, or employee complications when the setup is handled casually. At Taxaccolega, we support businesses across London and the wider UK with EMI schemes, EMI share option scheme structuring, HMRC valuation support, tax planning, and long-term compliance management.</p>
              
              <div className="d-flex flex-wrap gap-3">
                <a href="#contact-section" className="btn btn-brand px-4 py-2">Book Free Consultation</a>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="d-flex flex-column gap-3">
                {[
                    { title: "Tax Investigation", link: "/taxation/tax-investigation-insurance" },
                    { title: "Income Tax Accountant", link: "/taxation/personal-income-tax" },
                    { title: "VAT Tax Accounting", link: "/taxation/vat-accountants" },
                    { title: "Non-UK Resident Taxation", link: "/taxation/non-uk-resident-taxation" },
                    { title: "Tax Advisory", link: "/taxation/tax-advisors" }
                ].map((card, i) => (
                    <div key={i} className="p-3 border-start border-4 border-brand-orange bg-light rounded-end shadow-sm">
                      <h5 className="fw-bold text-brand-dark mb-1">{card.title}</h5>
                      <Link to={card.link} className="text-brand-orange text-decoration-none small fw-bold">Read More »</Link>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-brand-dark mb-5 text-center">Why EMI Schemes Become Strategically Important as Businesses Grow</h2>
          
          <div className="row g-5 align-items-center mb-5">
            <div className="col-lg-7">
              <h4 className="text-brand-orange mb-3">Growth changes how employees think</h4>
              <p className="text-secondary mb-3">In early-stage businesses, employees often join because of opportunity. As the business matures, expectations shift. Key staff start evaluating:</p>
              <ul className="list-unstyled">
                <li>● long-term upside</li>
                <li>● ownership participation</li>
                <li>● value creation</li>
                <li>● future exits</li>
                <li>● strategic involvement</li>
              </ul>
            </div>
          </div>

          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <h4 className="text-brand-orange mb-3">Founders often delay EMI schemes longer than they should</h4>
              <p className="text-secondary mb-3">One of the most common EMI scheme mistakes is waiting until investment discussions begin, employees are already considering leaving, or valuations increase sharply.</p>
              <p className="text-secondary">At that stage, an EMI employee share scheme can become commercially important because it changes how employees relate to the company’s growth itself. The earlier an EMI scheme is reviewed, the more flexibility exists around valuation, share structure, and employee allocation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container py-4">
            <h2 className="fw-bold text-brand-dark mb-4">How an EMI Share Scheme Works in Practice</h2>
            <p className="text-secondary mb-4">An EMI scheme grants qualifying employees the right to acquire shares later at a pre-agreed exercise price.</p>
            
            <h4 className="fw-bold text-brand-dark mb-4">Core Structure</h4>
            <div className="table-responsive rounded-4 shadow-sm border bg-white overflow-hidden">
                <table className="table table-hover align-middle mb-0">   
                    <thead style={{ background: '#1d3c45', color: '#fff' }}>
                        <tr>
                            <th>EMI Scheme Component</th>
                            <th>What It Controls</th>
                            <th>Why It Matters</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>EMI option agreement</td><td>Employee option rights</td><td>Defines entitlement</td></tr>
                        <tr><td>HMRC valuation</td><td>Share market value</td><td>Influences tax treatment</td></tr>
                        <tr><td>Exercise conditions</td><td>When options can be used</td><td>Controls timing</td></tr>
                        <tr><td>Share structure</td><td>Type of shares issued</td><td>Affects ownership rights</td></tr>
                        <tr><td>Disqualifying event rules</td><td>Ongoing eligibility</td><td>Protects tax advantages</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
      </section>

      <ReviewsSlider />

      <div id="contact-section">
        <ContactForm />
      </div>
    </div>
  );
};

export default EmiSchemesPage;
