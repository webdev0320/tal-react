const Achievements = () => {
  return (
    <section className="py-5 mt-4">
        <div className="container py-4">
            <div className="row align-items-center g-5">
                <div className="col-lg-5 order-2 order-lg-1">
                    <img src="https://www.taxaccolega.co.uk/wp-content/uploads/2025/08/Award-Winning-1024x1020.webp" alt="Award Winning Recognitions and Accreditations" className="img-fluid rounded-4" />
                </div>
                <div className="col-lg-7 order-1 order-lg-2">
                    <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Our Achievements</span>
                    <h2 className="text-brand-dark display-5 mt-2 mb-4 brand-font">Taxaccolega — Award-Winning. Accredited. Trusted.</h2>
                    <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>From prestigious ACCA and ICAEW certifications and accreditations to honours from mayors, media, business networks, and industry leaders, Taxaccolega is more than just an accountancy firm. Being the top-rated, we are a symbol of trust, professional excellence and community-driven impact. Our accreditations, recognitions, and awards have backend stories of commitment. They reflect years of dedication to our clients, the people we proudly serve, and our craft. Whether you’re a budding startup, a growing business, managing wealth, or an opportunistic like a seasoned investor, you’re in safe and certified hands backed by top-rated chartered accountants and a team that will always go the extra mile for you.</p>
                    <a href="https://www.taxaccolega.co.uk/awards-accolades-accreditations/" className="btn btn-brand btn-lg px-4 py-3">Achievements</a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Achievements;
