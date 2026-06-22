"use client";
const Footer = () => {
  return (
    <footer className="bg-dark text-white-50 py-12">
        <div className="container">
            <div className="row g-5 border-bottom border-secondary pb-5 mb-5">
                <div className="col-md-3">
                    <img src="/images/logo/tal-logo.png" alt="TAL Bottom Logo" height="40" className="mb-4" />
                    <p className="small leading-relaxed">Empowering your financial journey with expertise and precision. Certified ACSP partners for corporate mapping and tax execution.</p>
                </div>
                <div className="col-md-3">
                    <h5 className="text-white mb-4">Contact Nodes</h5>
                    <ul className="list-unstyled small d-flex flex-column gap-3">
                        <li className="d-flex align-items-center">
                            <i className="fas fa-map-marker-alt me-3" style={{ color: '#d2601a' }}></i> 
                            187a London Road, Croydon, Surrey, CR0 2RJ
                        </li>
                        <li className="d-flex align-items-center">
                            <i className="fas fa-phone-alt me-3" style={{ color: '#d2601a' }}></i> 
                            020 8127 0728
                        </li>
                        <li className="d-flex align-items-center">
                            <i className="fab fa-whatsapp me-3" style={{ color: '#d2601a' }}></i> 
                            074 7117 0484
                        </li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5 className="text-white mb-4">Compliance Matrix</h5>
                    <div className="d-flex gap-3">
                        <img src="/images/2023/06/ICA.webp" alt="ICAEW" height="40" className="bg-white p-1 rounded" />
                        <img src="/images/2023/06/ACCA-1.webp" alt="ACCA" height="40" className="bg-white p-1 rounded" />
                    </div>
                </div>
                <div className="col-md-3">
                    <h5 className="text-white mb-4">Connect</h5>
                    <div className="flex gap-3">
                        <a href="https://www.facebook.com/Taxaccolega/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-[#d2601a] text-white transition-all"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/Taxaccolega/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-[#d2601a] text-white transition-all"><i className="fab fa-instagram"></i></a>
                        <a href="https://x.com/taxaccolega" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-[#d2601a] text-white transition-all"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.linkedin.com/company/taxaccolega/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-[#d2601a] text-white transition-all"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://www.tiktok.com/@taxaccolega" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-[#d2601a] text-white transition-all"><i className="fab fa-tiktok"></i></a>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small gap-3">
                <p className="mb-0">&copy; 2011 - 2026 Taxaccolega. All Copyrights reserved.</p>
                <div className="d-flex gap-4">
                    <a href="#" className="text-white-50 text-decoration-none hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="text-white-50 text-decoration-none hover:text-white transition-colors">Terms of Use</a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
