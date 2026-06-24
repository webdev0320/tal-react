"use client";
import Partners from '../components/Partners';
import ReviewsSlider from '../components/ReviewsSlider';
import ContactForm from '../components/ContactForm';

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */


/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
const Banks = () => (
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
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ background: 'rgba(20,32,54,0.65)', zIndex: 1 }}
      />
      <div className="container position-relative py-5 text-center text-md-start" style={{ zIndex: 2 }}>
        <h1 className="display-3 fw-bold text-white mb-1">Bank</h1>
      </div>
    </header>

    {/* ── 4. Breadcrumb ── */}
    <div className="bg-white border-bottom py-2">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0 small">
            <li className="breadcrumb-item"><a href="/" className="text-decoration-none" style={{ color: '#e07b39' }}>Home</a></li>
            <li className="breadcrumb-item active text-secondary">Bank</li>
          </ol>
        </nav>
      </div>
    </div>

    {/* ── 5. How do we help Banking? ── */}
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5">
            <img
              src="/images/2024/07/bank-image.jpg"
              alt="How do we help Banking"
              className="img-fluid rounded-3 shadow"
            />
          </div>
          <div className="col-lg-7">
            <div className="border-start border-3 border-warning ps-3 mb-3">
              <h2 className="fw-bold mb-0" style={{ color: '#1a2332' }}>
                How do we help Banking?
              </h2>
            </div>
            <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>
              We provide a range of banking services that are tailored to each individual client's requirements. Support for regulatory compliance is part of this, making sure banks follow the most recent rules and laws to avoid fines and improve their reputation. By identifying, evaluating, and reducing financial risks, our risk management services assist banks in protecting their assets and gaining long-term stability.
            </p>
            <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>
              In addition, we offer strategic planning services, where we offer professional guidance on market entry, growth strategies, and competitive positioning. We also provide operational efficiency solutions, which assist banks in streamlining their operations, enhancing customer support, and cutting expenses. We help our clients meet their strategic goals, stay in compliance with regulations, and improve their financial performance by providing them with individualised and all-inclusive banking solutions.
            </p>
            <a
              href="/contact-us/"
              className="btn px-4 py-2 text-white"
              style={{ background: '#e07b39', fontWeight: 600, borderRadius: '4px' }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* ── 6. Partners Strip ── */}
    <Partners />

    {/* ── 7. Title: The Best Partner for Banking Excellence ── */}
    <section className="py-5 bg-white">
      <div className="container text-center">
        <h2 className="fw-bold mb-1" style={{ color: '#1a2332' }}>
          <span className="text-muted fw-normal">— </span>The Best Partner for<span className="text-muted fw-normal"> —</span>
        </h2>
        <h3 className="fw-bold mb-5" style={{ color: '#e07b39' }}>Banking Excellence</h3>
      </div>
    </section>

    {/* ── 8. METTLE Segment ── */}
    <section className="py-4 bg-light">
      <div className="container">
        <div className="card border-0 shadow-sm p-4 rounded-3" style={{ background: '#fff' }}>
          <div className="row g-4 align-items-center">
            <div className="col-md-5 text-center">
              <img
                src="/images/2024/07/mettle-images.jpg"
                alt="Mettle Bank"
                className="img-fluid rounded-3"
                style={{ maxHeight: '280px', objectFit: 'contain' }}
              />
            </div>
            <div className="col-md-7">
              <h4 className="fw-bold mb-3" style={{ color: '#1a2332' }}>METTLE</h4>
              <p className="text-secondary small mb-3" style={{ lineHeight: 1.8 }}>
                Selecting Mettle Bank for your business is a strategic decision that sets you on a path to financial empowerment and efficiency. Mettle, a part of the NatWest Group, offers a comprehensive suite of digital banking services tailored to entrepreneurs, freelancers, and small businesses. Mettle lets you manage your business finances seamlessly through their user-friendly mobile app.
              </p>
              <p className="text-secondary small mb-3" style={{ lineHeight: 1.8 }}>
                They provide features like invoicing, expense tracking, and intuitive financial insights to help you stay in control. Plus, Mettle's partnership with FreeAgent simplifies accounting, making tax returns easy. Your business deserves a bank that understands your challenges and empowers your growth, and Mettle does just that with its innovative approach to banking.
              </p>
              <p className="text-secondary small mb-4" style={{ lineHeight: 1.8 }}>
                What sets Anna Bank apart is our commitment to delivering personalised service and expert guidance to navigate the financial landscape. As your trusted financial ally, we're here to help your business thrive. We ensure that you have the tools and support you need to succeed in today's dynamic business world.
              </p>
              <a
                href="/contact-us/"
                className="btn px-4 py-2 text-white"
                style={{ background: '#e07b39', fontWeight: 600, borderRadius: '4px' }}
              >
                Book Free Consultancy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ContactForm source="Banks" />

    {/* ── 10. Reviews Slider ── */}
    <ReviewsSlider />

    {/* ── 12. Partners Strip ── */}
    <Partners />
  </div>
);

export default Banks;

