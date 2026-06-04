import { Link } from 'react-router-dom';

const TargetSegments = () => {
  const industries = [
    { icon: "fas fa-laptop-code", name: "IT Professional", link: "/industries/it-professionals" },
    { icon: "fas fa-hard-hat", name: "Construction", link: "/industries/construction" },
    { icon: "fas fa-hotel", name: "Hospitality", link: "/industries/hospitality" },
    { icon: "fas fa-car", name: "Auto Mobile", link: "/industries/automobile" },
    { icon: "fas fa-globe-europe", name: "Non-UK-Resident", link: "/industries/non-uk-resident-taxation" },
    { icon: "fas fa-building", name: "Real Estate", link: "/industries/real-estate" },
    { icon: "fas fa-utensils", name: "Restaurants", link: "/industries/restaurants" },
    { icon: "fas fa-shopping-cart", name: "Ecommerce", link: "/industries/ecommerce" },
    { icon: "fas fa-user-md", name: "Health Care", link: "/industries/healthcare-professionals" },
    { icon: "fas fa-hand-holding-heart", name: "Charity", link: "/charities" },
    { icon: "fas fa-store", name: "Wholesale & Retailers", link: "/industries/wholesellers-retailers" },
    { icon: "fas fa-passport", name: "Expatriates", link: "/industries/expatriates" },
    { icon: "fas fa-dumbbell", name: "Leisure Industry", link: "/industries/leisure-industry" },
    { icon: "fas fa-truck-moving", name: "Logistics", link: "/industries/logistics" },
  ];

  return (
    <section className="py-5 bg-light">
        <div className="container py-4">
            <div className="row align-items-center g-5">
                <div className="col-lg-4 text-center text-lg-start">
                    <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Target Segments</span>
                    <h2 className="text-brand-dark display-5 mt-2 mb-4 brand-font">Who Do We Help</h2>
                    <img src="https://www.taxaccolega.co.uk/wp-content/uploads/2025/08/Who-Do-We-help-300x268.webp" alt="Who we assist collage illustration" className="img-fluid rounded-4 shadow-sm bg-white p-2 border border-light mt-3" style={{ maxHeight: "220px" }} />
                </div>
                <div className="col-lg-8">
                    <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                        {industries.map((industry, index) => (
                            <Link key={index} to={industry.link} className="industry-badge d-inline-flex align-items-center border px-3 py-2 rounded text-decoration-none" style={{ color: '#1a2332', background: '#fff', borderColor: '#eee', transition: 'all 0.2s' }}>
                                <i className={`${industry.icon} me-2 text-brand-orange`}></i> {industry.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default TargetSegments;
