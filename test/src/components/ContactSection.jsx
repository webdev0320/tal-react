const ContactSection = () => {
  return (
    <section className="py-5">
        <div className="container py-4">
            <div className="row g-5">
                {/* Promise Column */}
                <div className="col-lg-6">
                    <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Your Tax, Our Expertise</span>
                    <h2 className="text-brand-dark display-5 mt-2 mb-4">Our Promise to Clients</h2>
                    <h4 className="text-brand-orange fw-semibold mb-3">The promptest response is Guaranteed.</h4>
                    <p className="text-secondary mb-4 fs-5" style={{ lineHeight: 1.8 }}>We understand that tax matters often take place at the last minute near the deadline dates. Taxaccolega can still accommodate you even at short notice. Nevertheless, this haste, our top-rated tax experts can still outdo and save handsome sums of money for you.</p>
                </div>
                {/* Fast Contact Column */}
                <div className="col-lg-6">
                    <div className="card bg-dark text-white p-4 p-md-5 rounded-4 shadow-sm border-0 position-relative overflow-hidden">
                        <div className="position-absolute bg-warning rounded-circle" style={{ width: "200px", height: "200px", top: "-100px", right: "-100px", opacity: 0.15 }}></div>
                        <h3 className="mb-4 brand-font text-white">Get in Touch</h3>
                        <p className="text-white-50 mb-4">Tax returns, financial strategies, bookkeeping… this all can seem quite intimidating, but we assure you that you don’t have to navigate it alone. We commit to giving you peace of mind by bringing clarity to complexity.</p>
                        
                        <div className="d-flex flex-column gap-3 mb-4">
                            <a href="tel:02081270728" className="d-flex align-items-center text-white text-decoration-none gap-3">
                                <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center" style={{ width: "45px", height: "45px", minWidth: "45px" }}>
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <span className="fs-5 fw-medium">020 8127 0728</span>
                            </a>
                            <a href="mailto:info@taxaccolega.co.uk" className="d-flex align-items-center text-white text-decoration-none gap-3">
                                <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center" style={{ width: "45px", height: "45px", minWidth: "45px" }}>
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <span className="fs-5 fw-medium">info@taxaccolega.co.uk</span>
                            </a>
                            <a href="https://wa.me/447471170484" target="_blank" rel="noreferrer" className="d-flex align-items-center text-white text-decoration-none gap-3">
                                <div className="bg-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: "45px", height: "45px", minWidth: "45px" }}>
                                    <i className="fab fa-whatsapp fs-4"></i>
                                </div>
                                <span className="fs-5 fw-medium">074 7117 0484</span>
                            </a>
                        </div>
                        
                        <div className="d-flex flex-wrap gap-3">
                            <a href="https://wa.me/447471170484" target="_blank" rel="noreferrer" className="btn btn-warning btn-lg w-100 py-3">Book Free Consultancy</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ContactSection;
