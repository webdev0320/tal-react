"use client";

const SwitchAccountantsCTA = () => {
  return (
    <section 
      className="parallax-section" 
      style={{ 
        background: "linear-gradient(135deg, #3d5259 0%, #2a383d 100%)" 
      }}
    >
      <div className="container parallax-content text-white py-16 px-6">
        <div className="row align-items-center g-5" style={{marginBottom:75}}>
          <div className="col-lg-8 pe-lg-5">
            <h2 className="display-5 fw-bold mb-4 brand-font" style={{ lineHeight: 1.25 }}>
              Switch Accountants to Taxaccolega — Hassle-Free, Expert Accounting in Croydon & London
            </h2>
            <p className="text-white mb-3 fs-5" style={{ opacity: 0.9 }}>
              If your current accountant / accounting firm is unable to compile your accounts and figures or not being up to the mark that you expect, it may be time for a change. Though changing accountants might be intimidating, we follow the correct procedures and make it simple, stress-free, and profitable for your company.
            </p>
            <p className="text-white mb-0" style={{ opacity: 0.8 }}>
              Top-rated Chartered Accountants at Taxaccolega, with professional accounting experience serving UK clients since 2011, make the entire transition process of changing an accountant easy for you. Whether you are upset due to poor communication, no tax-saving ideas, or hidden costs, our accounting is transparent, proactive, and client-centered. Don’t settle for mediocre service. Switch today!
            </p>
          </div>
          <div className="col-lg-4 text-center">
            <a href="/switch-accountant/" className="btn btn-brand btn-lg px-5 py-3 fs-5 rounded-full">
              Switch Account
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwitchAccountantsCTA;