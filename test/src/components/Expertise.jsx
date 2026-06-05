const Expertise = () => {
  const services = [
    { icon: "fas fa-user-tie", title: "Self Assessment Tax Accountant", description: "Login made easy. Get help with registering and filing your self-assessment tax return accurately and on time.", link: "https://www.taxaccolega.co.uk/accounts/hmrc-self-assessment-tax-returns-accountant/" },
    { icon: "fas fa-file-invoice-dollar", title: "Payroll Services", description: "Stress-free online payroll outsourcing services for small and medium businesses. Accurate and Compliant.", link: "https://www.taxaccolega.co.uk/accounts/payroll-services/" },
    { icon: "fas fa-calculator", title: "Income Tax Accountant", description: "Expert personal income tax accountant services. Top professionals ensuring accurate tax filing and maximum saving.", link: "https://www.taxaccolega.co.uk/taxation/personal-income-tax-professionals-and-chartered-accountants/" },
    { icon: "fas fa-users", title: "Inheritance Tax Planning", description: "Expert inheritance tax advice near you to protect your wealth. Personalised estate planning tips for your family’s future.", link: "https://www.taxaccolega.co.uk/taxation/inheritance-tax-planning/" },
    { icon: "fas fa-globe", title: "Worldwide Disclosure Facility", description: "Expert HMRC tax accountant advice to help you safely disclose offshore income in the UK and avoid penalties.", link: "https://www.taxaccolega.co.uk/taxation/worldwide-disclosure-facility/" },
    { icon: "fas fa-home", title: "Let Property Campaign", description: "Clear and trusted tax advice to help you disclose your rental income to HMRC, handle submissions and stay penalty-free", link: "https://www.taxaccolega.co.uk/taxation/let-property-campaign/" },
    { icon: "fas fa-plane-departure", title: "Non- UK Resident Taxation", description: "Advice by expert taxation accountants, guiding Non-UK resients for compliance and helping them in UK tax rules.", link: "https://www.taxaccolega.co.uk/taxation/non-uk-resident-taxation/" },
    { icon: "fas fa-film", title: "Film Tax Relief", description: "Empowering creativity, boosting growth, ensuring your production qualifies and helping you claim UK film tax credits.", link: "https://www.taxaccolega.co.uk/taxation/film-tax-relief/" },
    { icon: "fab fa-bitcoin", title: "Cryptocurrency", description: "Trusted accountants helping you report transactions, calculate tax on crypto gains while staying in line with Crypto tax rules.", link: "https://www.taxaccolega.co.uk/taxation/cryptocurrency/" },
    { icon: "fas fa-percentage", title: "Capital Gain Tax", description: "Get expert capital gains tax advice from trusted and specialist accountants for minimising liabilities and letting relief.", link: "https://www.taxaccolega.co.uk/taxation/capital-gains-tax-accountants/" },
    { icon: "fas fa-chart-line", title: "SEIS/EIS Tax Relief", description: "Save money, claim tax relief, and grow your investments with SEIS tax relief advice and support by expert EIS accountants.", link: "https://www.taxaccolega.co.uk/taxation/seis-tax-relief/" },
    { icon: "fas fa-shield-halved", title: "Estate Tax Planning", description: "Structure your wealth the best, reduce liabilities, and secure your family's financial future with our expert estate tax accountants.", link: "https://taxaccolega.co.uk/taxation/estate-property-tax-planning/" },
  ];

  return (
    <section id="expertise" className="py-5 mt-5">
        <div className="container py-4">
            <div className="text-center max-w-xl mx-auto mb-5">
                <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Professional Capabilities</span>
                <h2 className="mt-2 text-brand-dark display-5">Our Expertise</h2>
                <div className="bg-brand-orange mx-auto my-3" style={{ width: "80px", height: "3px" }}></div>
                <p className="text-secondary lead fs-6">We are the largest online firm of accountants in London, United Kingdom.</p>
            </div>
            
            <div className="row g-4">
              {services.map((service, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                    <div className="card h-100 shadow-sm service-card p-4 d-flex flex-column justify-content-between">
                        <div>
                            <div className="bg-brand-orange text-white rounded-circle d-flex align-items-center justify-content-center mb-4" style={{ width: "60px", height: "60px", fontSize: "1.5rem" }}>
                                <i className={service.icon}></i>
                            </div>
                            <h4 className="card-title text-brand-dark h5 mb-3">{service.title}</h4>
                            <p className="card-text text-secondary small">{service.description}</p>
                        </div>
                        <a href={service.link} className="text-brand-orange fw-bold text-decoration-none small mt-4 d-inline-block">Read More <i className="fas fa-arrow-right ms-1"></i></a>
                    </div>
                </div>
              ))}
            </div>
        </div>
    </section>
  );
};

export default Expertise;
