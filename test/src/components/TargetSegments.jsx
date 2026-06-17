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
                    <h2 className="text-brand-dark display-5 mt-2 mb-4 brand-font">Who Do We Help</h2>
                    <img src="/wp-content/uploads/2025/08/Who-Do-We-help-300x268.webp" alt="Who we assist collage illustration" className="img-fluid rounded-4 shadow-sm bg-white p-2 border border-light mt-3" style={{ maxHeight: "220px" }} />
                </div>
                <div className="col-lg-8">
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        {industries.map((industry, index) => (
                            <Link 
                                key={index} 
                                to={industry.link} 
                                className="group inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 hover:!bg-[#d2601a] hover:!text-white hover:!border-[#d2601a] transition-all duration-300 shadow-sm hover:shadow-md font-semibold text-sm"
                            >
                                <i className={`${industry.icon} text-[#d2601a] transition-colors duration-300 group-hover:!text-white`}></i> 
                                {industry.name}
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

