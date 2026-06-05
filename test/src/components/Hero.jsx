const Hero = () => {
  return (
    <section className="position-relative" style={{ zIndex: 5 }}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="floating-rating-card p-4 text-center">
                        <div className="row align-items-center justify-content-center g-3">
                            <div className="col-sm-4 text-center border-end border-light">
                                <img src="/images/2025/08/Google.webp" alt="Google logo" height="32" className="mb-2" />
                                <h5 className="mb-0 text-brand-dark fw-bold">Google Reviews</h5>
                            </div>
                            <div className="col-sm-4 text-center border-end border-light">
                                <div className="text-warning fs-4 mb-1">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h3 className="mb-0 text-brand-dark fw-bold">5.0 / 5.0 Rating</h3>
                            </div>
                            <div className="col-sm-4 text-center">
                                <p className="mb-1 text-secondary">Based on <strong>193</strong> client reviews</p>
                                <a href="https://www.google.com/search?q=taxaccolega+google+reviews" target="_blank" rel="noreferrer" className="small text-brand-orange fw-bold text-decoration-none">Verify Real Submissions <i className="fas fa-external-link-alt ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;
