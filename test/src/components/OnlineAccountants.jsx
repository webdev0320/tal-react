const OnlineAccountants = () => {
  return (
    <section className="py-5 bg-light">
        <div className="container py-4">
            <div className="text-center max-w-xl mx-auto mb-5">
                <div className="col-lg-12 flex justify-center">
                    <h2 className="text-brand-dark display-5 mt-2 mb-4 text-center whitespace-nowrap">The UK's Largest Online Accountants</h2>
                </div>
                <div className="bg-brand-orange mx-auto my-3" style={{ width: "80px", height: "3px" }}></div>
            </div>
            
            <div className="row align-items-center g-5">
                <div className="col-lg-7">
                    <p className="text-secondary mb-3 fs-5" style={{ lineHeight: 1.8 }}>Taxaccolega isn’t your average accounting firm. We’re a team of passionate online accountants dedicated to empowering businesses in the UK with the tools and support they need to thrive.</p>
                    <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>We are the largest online accounting company in the United Kingdom, leveraging technology to provide a seamless and efficient experience for our clients.</p>
                    <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>But size doesn’t mean impersonal service. At Taxaccolega, you’ll get a dedicated accountant who understands your unique business needs.</p>
                    <p className="text-secondary fw-semibold mb-4">To learn more about how we can help you grow your business, <a href="/contact-us/" className="text-brand-orange text-decoration-none">contact us today</a>:</p>
                    
                    <a href="https://www.google.com/search?q=taxaccolega+google+reviews" target="_blank" rel="noreferrer" className="text-decoration-none d-inline-block">
                        <img src="/wp-content/uploads/2023/06/Google-2-1024x155.webp" alt="Google 5 Star rating link" className="img-fluid rounded shadow-sm" style={{ maxHeight: "45px" }} />
                    </a>
                </div>
                <div className="col-lg-5">
                    <img 
                        src="/images/2025/08/CEO--1024x715.webp" 
                        alt="CEO of Taxaccolega" 
                        className="img-fluid rounded-3 shadow-lg" 
                    />
                </div>
            </div>
        </div>
    </section>
  );
};

export default OnlineAccountants;

