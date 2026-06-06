import { Link } from 'react-router-dom';
import { useState } from 'react';
import MegaMenu from './MegaMenu';

const Navbar = () => {
    const [showMegaMenu, setShowMegaMenu] = useState(false);
    return (
        <>
            <style>{`
        /* Professional Navbar Overrides */
        .navbar {
          border-bottom: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }
        .navbar-light .navbar-nav .nav-link {
          color: #4a5568 !important;
          font-weight: 500;
          padding: 0.75rem 1rem !important;
          transition: color 0.2s ease;
        }
        .navbar-light .navbar-nav .nav-link:hover,
        .navbar-light .navbar-nav .nav-link.active {
          color: #d2601a !important;
        }
        .dropdown-menu {
          border-radius: 0.75rem !important;
          margin-top: 0.5rem !important;
          padding: 1rem !important;
          border: none !important;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1) !important;
        }
        .dropdown-item {
          border-radius: 0.5rem !important;
          padding: 0.6rem 1rem !important;
          font-weight: 500;
          color: #4a5568 !important;
        }
        .dropdown-item:hover {
          background-color: #fff5f0 !important;
          color: #d2601a !important;
        }
        .btn-brand {
          background-color: #d2601a !important;
          color: white !important;
          border-radius: 0.5rem !important;
          padding: 0.5rem 1.25rem !important;
          font-weight: 600;
        }
        .btn-brand:hover {
          background-color: #b8500e !important;
        }

        /* Functional Fixes */
        .navbar-collapse {
          display: none;
          visibility: visible !important;
        }
        .navbar-collapse.show {
          display: block !important;
        }
        @media (min-width: 992px) {
          .navbar-collapse {
            display: flex !important;
          }
        }
      `}</style>
            <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top py-2">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="/images/2023/06/TAL_Logo-149x34-1.webp" alt="Taxaccolega Logo" height="40" />
                    </Link>
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mainNav">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>

                            {/* Services Dropdown */}
                            <li className="nav-item dropdown position-relative" onMouseEnter={() => setShowMegaMenu(true)} onMouseLeave={() => setShowMegaMenu(false)}>
                                <a className="nav-link dropdown-toggle" href="#" role="button" aria-expanded={showMegaMenu}>
                                    Services
                                </a>
                                {showMegaMenu && <MegaMenu />}
                            </li>

                            {/* Who We Assist */}
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Who We Assist
                        </a>
                        <ul className="dropdown-menu" style={{ width: '280px' }}>
                            <li><Link className="dropdown-item" to="/industries/it-professionals">IT Professionals & Contractors</Link></li>
                            <li><Link className="dropdown-item" to="/industries/real-estate">Real Estate & Property</Link></li>
                            <li><Link className="dropdown-item" to="/industries/ecommerce">Ecommerce</Link></li>
                            <li><Link className="dropdown-item" to="/industries/construction">Construction</Link></li>
                            <li><Link className="dropdown-item" to="/industries/automobile">Automobile & Dealerships</Link></li>
                            <li><Link className="dropdown-item" to="/industries/restaurants">Restaurants & Catering</Link></li>
                            <li><Link className="dropdown-item" to="/industries/wholesellers-retailers">Wholesalers & Retailers</Link></li>
                            <li><Link className="dropdown-item" to="/industries/healthcare-professionals">Healthcare Professionals</Link></li>
                            <li><Link className="dropdown-item" to="/industries/leisure-industry">Leisure Industry</Link></li>
                            <li><Link className="dropdown-item" to="/industries/non-uk-resident-taxation">Non-UK Resident Taxation</Link></li>
                            <li><Link className="dropdown-item" to="/industries/logistics">Logistics & Transport</Link></li>
                            <li><Link className="dropdown-item" to="/industries/expatriates">Expatriates</Link></li>
                            <li><Link className="dropdown-item" to="/industries/charities">Charities</Link></li>
                        </ul>
                    </li>

                    {/* Packages */}
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Packages
                        </a>
                        <ul className="dropdown-menu" style={{ width: '260px' }}>
                            {[
                                { to: '/packages/sole-trader-pricing',   label: 'Sole Trader' },
                                { to: '/packages/ltd-company-pricing',   label: 'LTD Company' },
                                { to: '/packages/contractor-ltd-pricing',label: 'Contractor LTD' },
                                { to: '/packages/landlords-3',           label: 'Landlords' },
                                { to: '/packages/spvs-ltd-pricing',      label: 'SPVs & Property LTDs' },
                                { to: '/packages/charities-pricing',     label: 'Charities & Non-Profits' },
                            ].map(item => (
                                <li key={item.to}><Link className="dropdown-item" to={item.to}>{item.label}</Link></li>
                            ))}
                        </ul>
                    </li>

                    <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/about-us">About Us</Link></li>
                </ul>
                <div className="d-flex align-items-center">
                    <Link to="/contact-us" className="btn btn-brand">Contact Us</Link>
                </div>
            </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
