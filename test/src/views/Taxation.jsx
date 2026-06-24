"use client";
import Link from 'next/link';
import Partners from '../components/Partners';
import ReviewsSlider from '../components/ReviewsSlider';
import ContactForm from '../components/ContactForm';
import ExpertTaxServices from '../components/ExpertTaxServices';

const tagRoutes = {
  'Cryptocurrency': '/taxation/cryptocurrency',
  'Film Tax Relief': '/taxation/film-tax-relief',
  'LET Property Campaign': '/taxation/let-property-campaign',
  'Income Tax': '/taxation/personal-income-tax',
  'Worldwide Disclosure Facility': '/taxation/worldwide-disclosure-facility',
  'Corporation Tax': '/taxation/company-tax-return-accountants',
  'Value Added Tax': '/taxation/vat-accountants',
  'Inheritance Tax': '/taxation/inheritance-tax-planning',
  'Tax Investigation': '/taxation/tax-investigation-insurance',
  'Capital Gains Tax': '/taxation/capital-gains-tax-accountants',
  'Estate Tax Planning': '/taxation/estate-property-tax-planning',
  'Research & Development': '/taxation/rd/', // Keep external link for now
  'Tax Advisory': '/taxation/tax-advisors',
  'EMI Scheme': '/taxation/emi-schemes',
  'SEIS and EIS Accountants': '/taxation/seis-tax-relief',
  'Non-UK Resident': '/taxation/non-uk-resident-taxation',
};

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const taxTags = [
  'Corporation Tax', 'Value Added Tax', 'Inheritance Tax', 'Tax Investigation',
  'Capital Gains Tax', 'Estate Tax Planning', 'Research & Development', 'Tax Advisory',
  'EMI Scheme', 'SEIS and EIS Accountants', 'Non-UK Resident', 'LET Property Campaign',
  'Worldwide Disclosure Facility', 'Cryptocurrency', 'Income Tax', 'Film Tax Relief',
];

const primaryServices = [
  {
    title: 'Corporation Tax',
    img: '/images/2024/07/01.jpg',
    desc: 'Taxaccolega ensures compliance with corporation tax obligations, managing your tax efficiently. Our services include preparing CT600 returns, calculating tax liabilities, and advising on tax-saving strategies to minimise your burden legally.',
    link: '/taxation/company-tax-return-accountants',
  },
  {
    title: 'Income Tax',
    img: '/images/2024/07/statuary-accounts.jpg',
    desc: 'Taxaccolega specialises in assessing and optimising your income tax obligations, ensuring you are filing the correct amounts and benefiting from available reliefs. Our services include completing Self Assessment tax returns.',
    link: '/taxation/personal-income-tax',
  },
  {
    title: 'Value Added Tax',
    img: '/images/2024/07/03.jpg',
    desc: 'Taxaccolega manages all aspects of VAT compliance and advisory services, ensuring your business adheres to HMRC VAT requirements, can help with VAT registration, preparation and submission of VAT returns.',
    link: '/taxation/vat-accountants',
  },
];

const secondaryServices = [
  {
    title: 'Capital Gain Tax',
    img: '/images/2024/07/04.jpg',
    desc: 'Taxaccolega specialises in optimising Capital Gains Tax (CGT) outcomes by offering strategic planning to reduce the impact of CGT on assets including property and investments.',
    link: '/taxation/capital-gains-tax-accountants',
  },
  {
    title: 'Estate Tax Planning',
    img: '/images/2021/03/airbnb-income.jpg',
    desc: 'Taxaccolega provides expert estate tax planning and management services, helping you to efficiently manage assets and minimise inheritance tax liability including estate planning.',
    link: '/taxation/estate-property-tax-planning',
  },
  {
    title: 'Inheritance Tax',
    img: '/images/2023/06/inheritance-tax3-600.jpg',
    desc: 'Taxaccolega assists with Inheritance Tax (IHT) planning, including strategies to efficiently manage estate taxation, efficient capital gains, trusts, and exemptions.',
    link: '/taxation/inheritance-tax-planning',
  },
];

const tertiaryServices = [
  {
    title: 'Tax Investigation',
    img: '/images/2024/07/24.jpg',
    desc: 'Taxaccolega provides expert support during tax investigations, offering strategic advice and representation to protect your interests throughout the investigation process.',
    link: '/taxation/tax-investigation-insurance',
  },
  {
    title: 'Research & Development',
    img: '/images/2024/07/19.jpg',
    desc: 'Taxaccolega specialises in R&D tax credits, identifying qualifying activities and expenditures to maximise your company\'s research and development tax relief claims.',
    link: '/taxation/rd/',
  },
  {
    title: 'Tax Advisory',
    img: '/images/2024/07/09.jpg',
    desc: 'Taxaccolega provides expert Tax Advisory services, helping individuals and businesses navigate complex tax legislation and optimise their tax positions.',
    link: '/taxation/tax-advisors',
  },
];

const emiServices = [
  {
    title: 'EMI Scheme',
    img: '/images/2024/07/12.jpg',
    desc: 'Taxaccolega specialises in Enterprise Management Incentive (EMI) schemes, enabling you to attract and retain top talent by offering tax-advantaged share options from your business.',
    link: '/taxation/emi-schemes',
  },
  {
    title: 'SEIS and EIS Accounting',
    img: '/images/2024/07/06.jpg',
    desc: 'Taxaccolega provides expert guidance on SEIS (Seed Enterprise Investment Scheme) and EIS (Enterprise Investment Scheme) to help businesses and investors maximise tax relief opportunities.',
    link: '/taxation/seis-tax-relief',
  },
];

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */

/** Dark service card (as seen in screenshot rows 2 & 3) */
const DarkServiceCard = ({ service }) => (
  <div className="col-md-4">
    <div className="card service-card border-0 shadow overflow-hidden h-100">
      <div className="position-relative" style={{ height: '200px', overflow: 'hidden' }}>
        <img
          src={service.img}
          alt={service.title}
          className="w-100 h-100"
          style={{ objectFit: 'cover', filter: 'brightness(0.55)' }}
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end p-3">
          <h5 className="text-white fw-bold mb-0">{service.title}</h5>
        </div>
      </div>
      <div className="card-body bg-brand-dark text-white-50 d-flex flex-column">
        <p className="small mb-4" style={{ lineHeight: 1.7, color: '#adb5bd' }}>{service.desc}</p>
        <a href={service.link} className="btn btn-sm btn-brand mt-auto align-self-start">
          Read More &rarr;
        </a>
      </div>
    </div>
  </div>
);

/** Dark service card for EMI section (col-12 layout) */
const EMICard = ({ service }) => (
  <div className="col-12">
    <div className="card service-card border-0 shadow overflow-hidden h-100">
      <div className="position-relative" style={{ height: '200px', overflow: 'hidden' }}>
        <img
          src={service.img}
          alt={service.title}
          className="w-100 h-100"
          style={{ objectFit: 'cover', filter: 'brightness(0.55)' }}
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end p-3">
          <h5 className="text-white fw-bold mb-0">{service.title}</h5>
        </div>
      </div>
      <div className="card-body bg-brand-dark text-white-50 d-flex flex-column">
        <p className="small mb-4" style={{ lineHeight: 1.7, color: '#adb5bd' }}>{service.desc}</p>
        <a href={service.link} className="btn btn-sm btn-brand mt-auto align-self-start">
          Read More &rarr;
        </a>
      </div>
    </div>
  </div>
);

/** Light service card (first row – white background) */
const LightServiceCard = ({ service }) => (
  <div className="col-md-4">
    <div className="card service-card border shadow-sm overflow-hidden h-100">
      <div style={{ height: '180px', overflow: 'hidden' }}>
        <img
          src={service.img}
          alt={service.title}
          className="w-100 h-100"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="fw-bold mb-2 text-brand-dark">{service.title}</h5>
        <p className="text-secondary small mb-4" style={{ lineHeight: 1.7 }}>{service.desc}</p>
        <a href={service.link} className="btn btn-sm btn-brand mt-auto align-self-start">
          Read More &rarr;
        </a>
      </div>
    </div>
  </div>
);


/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
const Taxation = () => (
  <div>
    {/* ── 3. Page Hero Banner ── */}
    <header
      className="position-relative text-white d-flex align-items-center"
      style={{
        minHeight: '280px',
        backgroundImage: "url('/images/young-asian.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100 bg-brand-dark"
        style={{ opacity: 0.65, zIndex: 1 }}
      />
      <div className="container position-relative py-5" style={{ zIndex: 2 }}>
        <h1 className="display-3 fw-bold text-white mb-0">Taxation</h1>
      </div>
    </header>

    {/* ── 4. Breadcrumb ── */}
    <div className="bg-white border-bottom py-2">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0 small">
            <li className="breadcrumb-item"><a href="/" className="text-decoration-none" style={{ color: '#e07b39' }}>Home</a></li>
            <li className="breadcrumb-item active text-secondary">Taxation</li>
          </ol>
        </nav>
      </div>
    </div>

    {/* ── 5. Expert Tax Services + Tag Pills ── */}
    <ExpertTaxServices taxTags={taxTags} tagRoutes={tagRoutes} />

    {/* ── 6. "The experts' choice for Tax Accountant" ── */}
    <section className="py-5" style={{ background: '#f8f9fa' }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-1" style={{ color: '#1a2332' }}>The experts' choice for</h2>
        <h3 className="text-center mb-5" style={{ color: '#e07b39' }}>Tax Accountant</h3>
        <div className="row g-4">
          {primaryServices.map((s) => <LightServiceCard key={s.title} service={s} />)}
        </div>
      </div>
    </section>

    {/* ── 7. How do we help in Taxation? ── */}
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5">
            <img
              src="images/2024/06/taxation.png"
              alt="How do we help in Taxation"
              className="img-fluid rounded-3 shadow"
            />
          </div>
          <div className="col-lg-7">
            <h2 className="fw-bold mb-3 text-brand-dark">How do we help in<br /><span className="text-brand-orange">Taxation?</span></h2>
            <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>
              Tax planning entails a meticulous examination of an individual's or company's financial situation, aimed at mitigating and managing their tax obligations. It encompasses the strategic application of legal provisions that allow government-provided incentives, accelerations, deductions, reliefs, and exemptions.
            </p>
            <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>
              Our team of seasoned chartered accountants and tax consultants extends beyond tax liability management. Our approach involves delivering personalised tax advice tailored to each client's desired tax status, ensuring compliance and financial efficiency.
            </p>
            <a
              href="/contact-us/"
              className="btn btn-lg px-5 btn-brand"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* ── 8. Our Clients and Collaborative Partners ── */}
    <Partners />

    {/* ── 9. Second row of service cards (dark) ── */}
    <section className="py-5" style={{ background: '#f8f9fa' }}>
      <div className="container">
        <div className="row g-4">
          {secondaryServices.map((s) => <DarkServiceCard key={s.title} service={s} />)}
        </div>
      </div>
    </section>

    <ContactForm source="Taxation" />

    {/* ── 11. Third row of service cards (dark) ── */}
    <section className="py-5" style={{ background: '#f8f9fa' }}>
      <div className="container">
        <div className="row g-4">
          {tertiaryServices.map((s) => <DarkServiceCard key={s.title} service={s} />)}
        </div>
      </div>
    </section>

    {/* ── 12. Google Reviews ── */}
    <ReviewsSlider />

    {/* ── 13. EMI & SEIS cards ── */}
    <section className="py-5" style={{ background: '#f8f9fa' }}>
      <div className="container">
        <div className="row g-4 justify-content-center">
          {emiServices.map((s) => (
            <div key={s.title} className="col-12 col-md-6">
              <EMICard service={s} />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── 15. Partners strip ── */}
    <Partners />
  </div>
);

export default Taxation;

