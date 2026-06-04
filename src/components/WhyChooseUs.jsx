const WhyChooseUs = () => {
  return (
    <section className="py-5 bg-white">
        <div className="container py-4">
            <div className="row align-items-center g-5">
                {/* Left Image Column with frame design */}
                <div className="col-lg-6 position-relative">
                    <div className="position-absolute" style={{ top: "-20px", left: "-10px", width: "85%", height: "95%", borderLeft: "8px solid var(--brand-orange)", borderTop: "8px solid var(--brand-orange)", zIndex: 1, pointerEvents: "none" }}></div>
                    <img src="/images/2025/10/WHy-Choose-Us-509x458-1.webp" alt="Why Choose Us Taxaccolega" className="img-fluid rounded-3 position-relative shadow-lg" style={{ zIndex: 2, width: "100%", maxWidth: "509px", display: "block" }} />
                    <div className="position-absolute" style={{ bottom: "-15px", left: "-25px", width: "50px", height: "50px", borderBottom: "8px solid var(--brand-orange)", borderLeft: "8px solid var(--brand-orange)", zIndex: 1 }}></div>
                </div>
                {/* Right Accordion Column */}
                <div className="col-lg-6">
                    <span className="text-brand-orange fs-4 brand-font d-block mb-1" style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 500 }}>Services</span>
                    <h2 className="text-brand-orange display-5 fw-bold mb-4 brand-font">Why Choose Us</h2>
                    
                    <div className="accordion custom-dark-accordion" id="whyChooseUsAccordion">
                        {/* Item 1 */}
                        <div className="accordion-item border-0 mb-2">
                            <h2 className="accordion-header">
                                <button className="accordion-button py-3 px-4 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#why1" aria-expanded="true">
                                    Dedicated Local & Online Accountant
                                </button>
                            </h2>
                            <div id="why1" className="accordion-collapse collapse show" data-bs-parent="#whyChooseUsAccordion">
                                <div className="accordion-body bg-white border border-top-0 border-light p-4 small text-secondary">
                                    Taxaccolega provides personalised assistance. You get a dedicated accountant when you work with us who fully knows the ins and outs of your finances. No call centers, no general advice, but a real expert focusing on your specific tax and accounting needs.
                                </div>
                            </div>
                        </div>
                        {/* Item 2 */}
                        <div className="accordion-item border-0 mb-2">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed py-3 px-4 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#why2" aria-expanded="false">
                                    Accredited Chartered Accountant
                                </button>
                            </h2>
                            <div id="why2" className="accordion-collapse collapse" data-bs-parent="#whyChooseUsAccordion">
                                <div className="accordion-body bg-white border border-top-0 border-light p-4 small text-secondary">
                                    Your finances are in the hands of qualified accountants and credible experts since we are licensed and regulated by ICAEW and ACCA. Whether it's tax planning, accounting advice, or compliance, we 100% guarantee everything is done honestly, accurately, and completely aligned with UK tax laws.
                                </div>
                            </div>
                        </div>
                        {/* Item 3 */}
                        <div className="accordion-item border-0 mb-2">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed py-3 px-4 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#why3" aria-expanded="false">
                                    Optimised Taxation
                                </button>
                            </h2>
                            <div id="why3" className="accordion-collapse collapse" data-bs-parent="#whyChooseUsAccordion">
                                <div className="accordion-body bg-white border border-top-0 border-light p-4 small text-secondary">
                                    Have been paying too much tax? We will optimise and curtail your unnecessary payable taxes. While we plan and structure strategically and carefully, we help you maximize tax efficiency, claim available reliefs, and avoid unnecessary liabilities, all while staying HMRC-compliant.
                                </div>
                            </div>
                        </div>
                        {/* Item 4 */}
                        <div className="accordion-item border-0 mb-2">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed py-3 px-4 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#why4" aria-expanded="false">
                                    Total Transparency
                                </button>
                            </h2>
                            <div id="why4" className="accordion-collapse collapse" data-bs-parent="#whyChooseUsAccordion">
                                <div className="accordion-body bg-white border border-top-0 border-light p-4 small text-secondary">
                                    No hidden fees. No surprise charges. We believe in clear, upfront pricing and full transparency in our work. We also use reliable, industry-leading accounting softwares like Xero, Taxcalc, btc, & VT to ensure your tax and financial security, total accuracy and efficiency.
                                </div>
                            </div>
                        </div>
                        {/* Item 5 */}
                        <div className="accordion-item border-0 mb-2">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed py-3 px-4 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#why5" aria-expanded="false">
                                    Timely Reminders
                                </button>
                            </h2>
                            <div id="why5" className="accordion-collapse collapse" data-bs-parent="#whyChooseUsAccordion">
                                <div className="accordion-body bg-white border border-top-0 border-light p-4 small text-secondary">
                                    Deadlines creep up fast, but we won't let you miss them. We provide timely reminders for tax filings, payments, and compliance requirements, so you never have to worry about penalties or last-minute stress ever again.
                                </div>
                            </div>
                        </div>
                        {/* Item 6 */}
                        <div className="accordion-item border-0 mb-2">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed py-3 px-4 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#why6" aria-expanded="false">
                                    Expert Value Added Guidance
                                </button>
                            </h2>
                            <div id="why6" className="accordion-collapse collapse" data-bs-parent="#whyChooseUsAccordion">
                                <div className="accordion-body bg-white border border-top-0 border-light p-4 small text-secondary">
                                    Beyond just the numbers, we provide cash flow forecasting to help you plan for the future. Tax-saving opportunities, investment structuring, or business growth tactics, we're here to guide you toward smarter tax-saving decisions.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default WhyChooseUs;
