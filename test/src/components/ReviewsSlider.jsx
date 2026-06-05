const ReviewsSlider = () => {
  const reviews = [
    {
      text: "Outstanding and quick service! Really supportive and affordable! As a start up company, they supported us a lot while filling the 1st accounts! Thanks Jazzy Khalid for your kind and prompt response on my needs!",
      name: "Md Sajib Miah",
      title: "Verified Google Submission",
    },
    {
      text: "Excellent service from Taxaccolega. Despite my many questions and follow-ups, they remained patient, thorough, and consistently helpful. I really appreciate the effort from the team and the clear guidance throughout. Highly recommended.",
      name: "OYINTONYE EMELEDOH",
      title: "Verified Google Submission",
    },
    {
      text: "I can’t recommend my accountant highly enough. Jazzy at Taxaccolega handled my business tax case with exceptional professionalism and attention to detail, and successfully won an appeal on my behalf. Outstanding service.",
      name: "Krishan Wagay",
      title: "Barber Krish Ltd",
    },
  ];

  return (
    <section className="py-5 bg-light">
        <div className="container py-4">
            <div className="text-center max-w-xl mx-auto mb-5">
                <span className="text-brand-orange fw-bold text-uppercase small tracking-wider">Social Proof</span>
                <h2 className="mt-2 text-brand-dark display-5">Our Recent Google Reviews</h2>
                <div className="bg-brand-orange mx-auto my-3" style={{ width: "80px", height: "3px" }}></div>
                <div className="d-flex align-items-center justify-content-center gap-2">
                    <img src="https://www.taxaccolega.co.uk/wp-content/uploads/2023/06/Google-2-300x45.webp" alt="Google 5 star reviews" style={{ maxHeight: "30px" }} />
                    <span className="fw-semibold text-brand-dark">5.0  |  193 reviews</span>
                </div>
            </div>

            <div className="row g-4">
                {reviews.map((review, index) => (
                    <div key={index} className="col-md-4">
                        <div className="card h-100 p-4 shadow-sm review-card justify-content-between">
                            <div>
                                <div className="text-warning small mb-3">
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                </div>
                                <p className="text-secondary small mb-4" style={{ lineHeight: 1.7 }}>"{review.text}"</p>
                            </div>
                            <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="text-brand-dark fw-bold mb-0 small">{review.name}</h6>
                                    <span className="text-muted small" style={{ fontSize: "0.75rem" }}>{review.title}</span>
                                </div>
                                <i className="fab fa-google text-muted"></i>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default ReviewsSlider;
