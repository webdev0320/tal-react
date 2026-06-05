const Footer = () => {
  return (
    <footer className="bg-dark text-white-50 py-5">
        <div className="container">
            <div className="row g-4 border-bottom border-secondary pb-4 mb-4">
                <div className="col-md-4">
                    <img src="/images/2023/06/TAL-Logo-1.webp" alt="TAL Bottom Logo" height="32" className="mb-3" />
                    <p className="small">Empowering your financial journey with expertise and precision. Certified ACSP partners for corporate mapping and tax execution.</p>
                </div>
                <div className="col-md-4">
                    <h5 className="text-white mb-3">Contact Nodes</h5>
                    <ul className="list-unstyled small d-flex flex-column gap-2">
                        <li><i className="fas fa-map-marker-alt me-2 text-warning"></i> 187a London Road, Croydon, Surrey, CR0 2RJ</li>
                        <li><i className="fas fa-phone-alt me-2 text-warning"></i> 020 8127 0728</li>
                        <li><i className="fab fa-whatsapp me-2 text-warning"></i> 074 7117 0484</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h5 className="text-white mb-3">Compliance Matrix</h5>
                    <div className="d-flex gap-2">
                        <img src="/images/2023/06/ICA.webp" alt="ICAEW" height="30" className="bg-white p-1 rounded" />
                        <img src="/images/2023/06/ACCA-1.webp" alt="ACCA" height="30" className="bg-white p-1 rounded" />
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small">
                <p className="mb-0">&copy; 2011 - 2026 Taxaccolega. All Copyrights reserved.</p>
                <div className="d-flex gap-3 mt-3 mt-md-0">
                    <a href="#" className="text-white-50 text-decoration-none">Privacy Policy</a>
                    <a href="#" className="text-white-50 text-decoration-none">Terms of Use</a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
