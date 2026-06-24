"use client";
import Link from 'next/link';
import Partners from '../components/Partners';
import ReviewsSlider from '../components/ReviewsSlider';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import AccountsServiceGrid from '../components/AccountsServiceGrid';
import { accountsLinks } from '../data/accountsLinks';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const accountsTags = [
  'BOOKKEEPING', 'STATUTORY ACCOUNTS', 'MANAGEMENT ACCOUNTS',
  'PAYROLL SERVICES', 'SELF-ASSESSMENT & TAX RETURN', 'PENSION & AUTO ENROLMENT',
  'CONSOLIDATED ACCOUNTS', 'FINANCIAL FORECASTING', 'CASHFLOW FORECASTING',
];

const primaryServices = [
  {
    title: 'Bookkeeping',
    img: '/images/2024/07/bookkeeping-1.jpg',
    desc: 'Our specialised team of certified accountants is dedicated to enhancing your business\'s performance by managing your accounts efficiently and profitably. We offer comprehensive bookkeeping solutions tailored to your business needs.',
    link: '/accounts/bookkeeping-services/',
  },
  {
    title: 'Statutory Accounts',
    img: '/images/2024/07/statuary-accounts.jpg',
    desc: 'Taxaccolega ensures your business reporting is accurate and a powerful tool for growth. Our team of highly qualified professionals navigates complex financial regulations to produce accurate, compliant statutory accounts.',
    link: '/accounts/statutory-accounts/',
  },
  {
    title: 'Management Accounts',
    img: '/images/2024/07/16.jpg',
    desc: 'Taxaccolega transforms your financial data into valuable insights through our Management Accounts services. Our experts ensure your financial data is clear and actionable, facilitating strategic decision-making.',
    link: '/accounts/management-accounts/',
  },
];

const secondaryServices = [
  {
    title: 'Payroll Services',
    img: '/images/2024/07/06-1.jpg',
    desc: 'Taxaccolega streamlines your payroll processes, ensuring timely and accurate payroll management. Our experts handle all aspects of payroll, from calculating wages and deductions to HMRC real-time information filings.',
    link: '/accounts/payroll-services/',
  },
  {
    title: 'Self-Assessment & Tax Return',
    img: '/images/2024/07/14-1.jpg',
    desc: 'Taxaccolega simplifies the process of self-assessment and tax returns, ensuring accuracy and compliance. Our experts meticulously record and interpret your financial data, minimising tax liabilities and ensuring timely submission.',
    link: '/accounts/self-assessment',
  },
  {
    title: 'Pension & auto Enrolment',
    img: '/images/2024/07/17.jpg',
    desc: 'Taxaccolega manages workplace pension schemes and auto-enrolment compliance, helping businesses fulfill their legal obligations while handling assessment, calculations, and communications.',
    link: '/accounts/auto-enrolment-pension-contributions/',
  },
];

const tertiaryServices = [
  {
    title: 'Consolidated Accounts',
    img: '/images/2024/07/13.jpg',
    desc: 'Taxaccolega specialises in Consolidated Accounts, streamlining fiscal reporting for multinational corporations and interconnected businesses to deliver a single clear financial overview.',
    link: '/accounts/consolidated-accounts/',
  },
  {
    title: 'Financial Forecasting',
    img: '/images/2024/07/15.jpg',
    desc: 'Taxaccolega specialises in financial forecasting, streamlining fiscal reporting for multinational corporations and interconnected businesses. Our team compiles and projects future financial positions.',
    link: '/accounts/financial-forecasting/',
  },
  {
    title: 'Cashflow Forecasting',
    img: '/images/2023/10/Maximise-your-liquid-cash.jpg',
    desc: 'Taxaccolega streamlines your financial planning with cashflow forecasting, ensuring you maintain healthy liquidity and can prepare for upcoming capital requirements, cycles, or investments.',
    link: '/accounts/cash-flow-forecasting/',
  },
];

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */

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
const Accounts = () => (
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
      <div className="position-absolute end-0 bottom-0" style={{ zIndex: 1, opacity: 0.85 }}>

      </div>
      <div className="container position-relative py-5 text-center text-md-start" style={{ zIndex: 2 }}>
        <h1 className="display-3 fw-bold text-white mb-1">Accounts</h1>
        <p className="lead text-white-50">Your path to success</p>
      </div>
    </header>

    {/* ── 4. Breadcrumb ── */}
    <div className="bg-white border-bottom py-2">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0 small">
            <li className="breadcrumb-item"><a href="/" className="text-decoration-none" style={{ color: '#e07b39' }}>Home</a></li>
            <li className="breadcrumb-item active text-secondary">Accounts</li>
          </ol>
        </nav>
      </div>
    </div>

    {/* ── 5. Cloud Online Accountants Title + Tag Pills ── */}
    <section className="py-5 bg-white">
      <div className="container text-center">
        <h2 className="fw-bold mb-2 text-brand-orange">Cloud Online Accountants</h2>
        <h3 className="fw-bold mb-3 text-brand-dark">Services For Limited Companies</h3>
        <h5 className="fw-semibold text-secondary mb-2">Cloud-Based Accounting Solutions and Services</h5>
        <p className="text-secondary mb-4">
          Cloud Including Software Packages and Programs for<br/>
          Cloud Businesses Across the United Kingdom
        </p>
        
        {/* Service Navigation Buttons */}
        <AccountsServiceGrid items={accountsLinks} />
      </div>
    </section>

    {/* ── 6. Partners Strip ── */}
    <Partners />

    {/* ── 7. "Our Accounts Services" ── */}
    <section className="py-5" style={{ background: '#f8f9fa' }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5" style={{ color: '#1a2332' }}>
          <span className="text-muted fw-normal">— </span>Our Accounts Services<span className="text-muted fw-normal"> —</span>
        </h2>
        <div className="row g-4">
          {primaryServices.map((s) => <LightServiceCard key={s.title} service={s} />)}
        </div>
      </div>
    </section>

    {/* ── 8. How Do We Help with Accounting? ── */}
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5">
            <img
              src="/images/2024/07/accounting.jpg"
              alt="How do we help in Accounting"
              className="img-fluid rounded-3 shadow"
            />
          </div>
          <div className="col-lg-7">
            <h2 className="fw-bold mb-3 text-brand-dark">How Do We Help with<br /><span className="text-brand-orange">Accounting?</span></h2>
            <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>
              Effective accounting involves a thorough examination of an individual's or company's financial activities, aimed at ensuring accuracy, transparency, and compliance with regulatory standards. Our comprehensive accounting services encompass the systematic recording, reporting, and analysis of financial transactions, utilising legal frameworks to optimise financial health and operational efficiency.
            </p>
            <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>
              Our team of experienced chartered accountants and financial consultants offers solutions that go beyond mere bookkeeping, delivering insight, visibility, and control over all financial records.
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

    {/* ── 9. Second row of service cards (dark) ── */}
    <section className="py-5" style={{ background: '#f8f9fa' }}>
      <div className="container">
        <div className="row g-4">
          {secondaryServices.map((s) => <DarkServiceCard key={s.title} service={s} />)}
        </div>
      </div>
    </section>

    <ContactForm source="Accounts" />

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

    {/* ── 14. Partners Strip ── */}
    <Partners />
  </div>
);

export default Accounts;

