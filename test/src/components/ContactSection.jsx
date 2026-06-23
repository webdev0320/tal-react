"use client";
const ContactSection = () => {
  return (
    <section className="py-5">
        <div className="container py-4 px-4">
            <div className="row g-5 align-items-stretch">
                {/* Promise Column */}
                <div className="col-lg-12">
                    <h2 className="text-brand-dark display-5 mt-2 mb-4 text-center">Your Tax, Our Expertise</h2>
                    <div className="bg-brand-orange mx-auto my-3" style={{ width: "80px", height: "3px" }}></div>
                </div>
                
                {/* Our Promise to Clients - Column 1 */}
                <div className="col-lg-5">
                    <div className="h-100 p-4 bg-white border border-slate-200 rounded-3 d-flex flex-column justify-content-center">
                        <span className="text-[#d2601a] font-semibold tracking-wide uppercase text-xs mb-1 block">Our Promise to Clients</span>
                        <h3 className="text-[#1D3C45] font-bold mb-2">The promptest response is Guaranteed.</h3>
                        <p className="text-slate-600 fs-6 mb-0" style={{ lineHeight: 1.5 }}>
                            We understand that tax matters often take place at the last minute near the deadline dates. Taxaccolega can still accommodate you even at short notice. Nevertheless, this haste, our top-rated tax experts can still outdo and save handsome sums of money for you.
                        </p>
                    </div>
                </div>

                {/* Fast Contact Column - Column 2 */}
                <div className="col-lg-7">
                    <div className="card bg-[#1D3C45] text-white p-4 rounded-3 shadow-lg border-0 position-relative overflow-hidden h-100 d-flex flex-column justify-content-center">
                        <div className="position-absolute rounded-circle" style={{ width: "150px", height: "150px", top: "-50px", right: "-50px", opacity: 0.1, backgroundColor: "#d2601a" }}></div>
                        <h3 className="mb-2 text-[#d2601a] font-bold">Get in Touch</h3>
                        <p className="text-dark mb-2 text-sm">Tax returns, financial strategies, bookkeeping… this all can seem quite intimidating, but we assure you that you don’t have to navigate it alone. We commit to giving you peace of mind by bringing clarity to complexity.</p>
                        <p className="text-dark mb-3 text-sm">What’s next? Get in touch for a free, no-obligation consultation – no pressure, just real, actionable guidance and let us take the tax stress off your shoulders.</p>
                        
                        <div className="d-flex flex-row flex-wrap justify-content-center gap-3 mb-3">
                            <a href="tel:02081270728" className="d-flex align-items-center text-white text-decoration-none">
                                <span className="fs-6"><i className="fas fa-phone-alt me-2 text-[#d2601a]"></i> 020 8127 0728</span>
                            </a>
                            <a href="mailto:info@taxaccolega.co.uk" className="d-flex align-items-center text-white text-decoration-none">
                                <span className="fs-6"><i className="fas fa-envelope me-2 text-[#d2601a]"></i> info@taxaccolega.co.uk</span>
                            </a>
                            <a href="https://wa.me/447471170484" target="_blank" rel="noreferrer" className="d-flex align-items-center text-white text-decoration-none">
                                <span className="fs-6"><i className="fab fa-whatsapp me-2 text-[#d2601a]"></i> 074 7117 0484</span>
                            </a>
                        </div>
                        
                        <div className="mt-2">
                            <a href="https://wa.me/447471170484" target="_blank" rel="noreferrer" className="btn w-100 py-2 text-white font-semibold rounded-full" style={{ backgroundColor: "#d2601a" }}>Book Free Consultancy</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ContactSection;
