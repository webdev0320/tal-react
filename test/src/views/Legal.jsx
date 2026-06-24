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
const Legal = () => (
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
      <div className="position-absolute end-0 bottom-0" style={{ zIndex: 1, opacity: 0.85 }}>
      </div>
      <div className="container position-relative py-5 text-center text-md-start" style={{ zIndex: 2 }}>
        <h1 className="display-3 fw-bold text-white mb-1">Legal</h1>
        <p className="lead text-white-50">Your path to success</p>
      </div>
    </header>

    {/* ── 4. Breadcrumb ── */}
    <div className="bg-white border-bottom py-2">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0 small">
            <li className="breadcrumb-item"><a href="/" className="text-decoration-none" style={{ color: '#e07b39' }}>Home</a></li>
            <li className="breadcrumb-item active text-secondary">Legal</li>
          </ol>
        </nav>
      </div>
    </div>

    {/* ── 5. How Do We Help with Legal Services? ── */}
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-5">
            <img
              src="/images/2024/07/25.jpg"
              alt="How Do We Help with Legal Services"
              className="img-fluid rounded-3 shadow"
            />
          </div>
          <div className="col-lg-7">
            <h2 className="fw-bold mb-3 text-brand-dark">How Do We Help with<br /><span className="text-brand-orange">Legal Services?</span></h2>
            <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>
              For people and companies alike, navigating the complexities of legal requirements is essential. Our all-inclusive legal services guarantee adherence to all pertinent laws and regulations by offering professional advice and assistance. Our primary focus is providing clients with customised legal solutions that are both practical and efficient, enabling them to minimise risks and accomplish their goals.
            </p>
            <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>
              Our team of seasoned legal experts provides a broad range of services, including regulatory compliance, dispute resolution, and contract drafting and review. We offer our clients strategic advice and representation that is intended to safeguard their interests and promote their long-term success because we are aware of the unique legal difficulties they face.
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

    {/* ── 6. Partners Strip ── */}
    <Partners />

    {/* ── 7. Title: The best Accountant for legal advice ── */}
    <section className="py-5 bg-white">
      <div className="container text-center">
        <h2 className="fw-bold mb-1" style={{ color: '#1a2332' }}>
          <span className="text-muted fw-normal">— </span>The best Accountant<span className="text-muted fw-normal"> —</span>
        </h2>
        <h3 className="fw-bold mb-5" style={{ color: '#e07b39' }}>for legal advice</h3>
      </div>
    </section>

    {/* ── 8. Company Formation Segment ── */}
    <section className="py-4 bg-light">
      <div className="container">
        <div className="card border-0 shadow-sm p-4 rounded-3" style={{ background: '#fff' }}>
          <div className="row g-4 align-items-center">
            <div className="col-md-5">
              <img
                src="/images/2024/07/10.jpg"
                alt="Company Formation"
                className="img-fluid rounded-3"
              />
            </div>
            <div className="col-md-7">
              <h4 className="fw-bold mb-3" style={{ color: '#1a2332' }}>Company Formation</h4>
              <p className="text-secondary small mb-4" style={{ lineHeight: 1.8 }}>
                Creating your legal entity in the UK is easy with Taxaccolega's expert team. We simplify business setup, from selecting the right structure to registering with authorities. Our services include drafting legal documents, obtaining licences, and ensuring regulatory compliance. Focus on growing your business while we handle the company formation process efficiently and accurately. Contact us today for seamless business setup!
              </p>
              <a
                href="/contact-us/"
                className="btn px-4 py-2"
                style={{ background: '#e07b39', color: '#fff', fontWeight: 600, borderRadius: '4px' }}
              >
                Book Free Consultancy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ContactForm source="Legal" />

    {/* ── 10. Reviews Slider ── */}
    <ReviewsSlider />

    {/* ── 11. Non-Disclosure Agreement Segment ── */}
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-md-5">
            <img
              src="/images/2024/07/NDA2.jpg"
              alt="Non-Disclosure Agreement"
              className="img-fluid rounded-3 shadow"
            />
          </div>
          <div className="col-md-7">
            <h4 className="fw-bold mb-3" style={{ color: '#1a2332' }}>Non-Disclosure Agreement</h4>
            <p className="text-secondary small mb-3" style={{ lineHeight: 1.8 }}>
              A Non-Disclosure Agreement (NDA) is essential for protecting sensitive information in various professional contexts. NDAs safeguard proprietary data, trade secrets, and confidential information, ensuring they are not used for financial gain or to create competing products or services. At Taxaccolega, we understand the importance of maintaining confidentiality in today's competitive business landscape.
            </p>
            <p className="text-secondary small mb-3" style={{ lineHeight: 1.8 }}>
              Our NDAs protect your valuable information when sharing it with potential partners, employees, or other entities. These agreements specify the duration of confidentiality and outline the consequences and penalties for breaches, as well as procedures for resolving disputes through arbitration or legal action. With our expert NDA services, you can share information confidently, knowing your business interests are secure. Protect your business with Taxaccolega's comprehensive and reliable NDA solutions.
            </p>
            <p className="text-secondary small mb-3" style={{ lineHeight: 1.8 }}>
              With Taxaccolega, you can have peace of mind knowing that your business address is managed by experts. Our services not only fulfill regulatory requirements but also project a solid, trustworthy image to your stakeholders. Partner with us to ensure your business's registered address is in capable hands, allowing you to focus on what you do best.
            </p>
            <p className="text-secondary small mb-4" style={{ lineHeight: 1.8 }}>
              Discover the benefits of our Registered Address services today and give your business the professional edge it deserves.
            </p>
            <a
              href="/contact-us/"
              className="btn px-4 py-2"
              style={{ background: '#e07b39', color: '#fff', fontWeight: 600, borderRadius: '4px' }}
            >
              Book Free Consultancy
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* ── 12. Partners Strip ── */}
    <Partners />
    </div>
    );

export default Legal;

