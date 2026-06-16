const TeamRefer = () => {
  return (
    <section className="py-5">
        <div className="container py-4">
            <div className="row g-4">
                <div className="col-md-6">
                    <div className="card p-4 p-md-5 border-0 bg-light rounded-4 h-100 d-flex flex-column justify-content-between shadow-sm">
                        <div>
                            <div className="bg-brand-dark text-white rounded-circle d-flex align-items-center justify-content-center mb-4" style={{ width: "50px", height: "50px" }}>
                                <i className="fas fa-user-friends fs-5"></i>
                            </div>
                            <h3 className="text-brand-dark brand-font h4 mb-3">Get in touch with the Taxaccolega team</h3>
                            <p className="text-secondary small" style={{ lineHeight: 1.7 }}>Managing your finances is now easier. With years of expertise in accountancy and finance, Taxaccolega Chartered Accountants are here to eliminate the complexities of running your business. This ensures you can focus on your core activities worry-free. Your peace of mind is our priority, and our seasoned team of contractor accountants is ready to assist you with any accounting concerns.</p>
                            <p className="text-secondary small mt-3" style={{ lineHeight: 1.7 }}>You can stay on top of relevant industry news by checking out our blog page, where we discuss topical subjects. To learn more about how we can help you grow your business, contact us today:</p>
                        </div>
                        <a href="https://www.taxaccolega.co.uk/contact-us/" className="btn btn-brand btn-lg mt-4 align-self-start py-3 px-4">Contact Us Today</a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card p-4 p-md-5 border-0 bg-light rounded-4 h-100 d-flex flex-column justify-content-between shadow-sm">
                        <div>
                            <div className="bg-brand-orange text-white rounded-circle d-flex align-items-center justify-content-center mb-4" style={{ width: "50px", height: "50px" }}>
                                <i className="fas fa-gift fs-5"></i>
                            </div>
                            <h3 className="text-brand-dark brand-font h4 mb-3">Refer and Earn with Taxaccolega</h3>
                            <p className="text-secondary small" style={{ lineHeight: 1.7 }}>Know someone who could benefit from expert accounting services or is probably unhappy or apprehensive with his/her current accountant? You can refer them to Taxaccolega and earn quite a handsome sum of money out of that payment! Whether you’re a client, visitor, or a friend, our Refer and Earn programme is your nice chance to make some extra money reliably.</p>
                            <p className="text-secondary small mt-3" style={{ lineHeight: 1.7 }}>It’s easy! Just refer a new client to us, and once they sign up, you’ll receive a handsome percentage as a thank you for your referral. No limits, no complicated rules — just a straightforward way to earn for helping others.</p>
                        </div>
                        <a href="https://www.taxaccolega.co.uk/refer-and-earn/" className="btn btn-lg mt-4 align-self-start py-3 px-4 text-white" style={{ backgroundColor: "#d2601a", borderColor: "#d2601a" }}>Refer & Earn</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default TeamRefer;
