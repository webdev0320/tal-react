const ContactForm = () => {
  return (
    <section className="py-5">
        <div className="container py-4">
            <div className="d-flex flex-wrap" style={{ gap: '2rem' }}>
                {/* Info column */}
                <div style={{ flex: '1 1 45%', minWidth: '300px' }}>
                    <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Contact Nodes</span>
                    <h2 className="text-brand-dark display-5 mt-2 mb-4 brand-font">Get in Touch</h2>
                    <p className="text-secondary mb-4">Connect directly with our customer response desk or drop by our physical consultation offices.</p>
                    
                    <div className="d-flex flex-column gap-3">
                        <div className="card border-0 bg-light p-3 rounded-3 d-flex flex-row align-items-center gap-3">
                            <div className="bg-brand-orange text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px", minWidth: "50px" }}>
                                <i className="fas fa-phone-alt fs-5"></i>
                            </div>
                            <div>
                                <span className="text-muted small d-block">Phone Number</span>
                                <a href="tel:02081270728" className="fw-semibold text-brand-dark text-decoration-none fs-5">020 8127 0728</a>
                            </div>
                        </div>
                        <div className="card border-0 bg-light p-3 rounded-3 d-flex flex-row align-items-center gap-3">
                            <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px", minWidth: "50px" }}>
                                <i className="fab fa-whatsapp fs-4"></i>
                            </div>
                            <div>
                                <span className="text-muted small d-block">Whatsapp Chat</span>
                                <a href="https://wa.me/447471170484" target="_blank" rel="noreferrer" className="fw-semibold text-brand-dark text-decoration-none fs-5">074 7117 0484</a>
                            </div>
                        </div>
                        <div className="card border-0 bg-light p-3 rounded-3 d-flex flex-row align-items-center gap-3">
                            <div className="bg-brand-dark text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px", minWidth: "50px" }}>
                                <i className="fas fa-envelope fs-5"></i>
                            </div>
                            <div>
                                <span className="text-muted small d-block">Email Support</span>
                                <a href="mailto:info@taxaccolega.co.uk" className="fw-semibold text-brand-dark text-decoration-none fs-5">info@taxaccolega.co.uk</a>
                            </div>
                        </div>
                        <div className="card border-0 bg-light p-3 rounded-3 d-flex flex-row align-items-center gap-3">
                            <div className="bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px", minWidth: "50px" }}>
                                <i className="fas fa-map-marker-alt fs-5"></i>
                            </div>
                            <div>
                                <span className="text-muted small d-block">Office Address</span>
                                <span className="fw-semibold text-brand-dark fs-6">187a London Road, Croydon, Surrey, CR0 2RJ</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Form Column */}
                <div style={{ flex: '1 1 45%', minWidth: '300px' }}>
                    <div className="card p-4 p-md-5 border-0 shadow-lg rounded-4 bg-white h-100">
                        <h3 className="mb-4 brand-font text-brand-dark">Send Us a Message</h3>
                        <form action="#" method="POST" onSubmit={(e) => e.preventDefault()}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label className="form-label small fw-semibold">Name <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control form-control-lg border-light bg-light" placeholder="Your Name" required />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label small fw-semibold">Email <span className="text-danger">*</span></label>
                                    <input type="email" className="form-control form-control-lg border-light bg-light" placeholder="Your Email Address" required />
                                </div>
                                <div className="col-12">
                                    <label className="form-label small fw-semibold">Message <span className="text-danger">*</span></label>
                                    <textarea rows="5" className="form-control border-light bg-light" placeholder="How can we assist you with your tax or accounts today?" required></textarea>
                                </div>
                                <div className="col-12 mt-4">
                                    <button type="submit" className="btn btn-brand btn-lg w-100 py-3">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ContactForm;
