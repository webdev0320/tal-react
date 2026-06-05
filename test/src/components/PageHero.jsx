import { Link } from 'react-router-dom';

const PageHero = ({ title, subtitle, breadcrumbs = [], sidebarItems = [] }) => {
    return (
        <header className="position-relative text-white overflow-hidden py-5" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)', minHeight: '380px' }}>
            <div className="position-absolute w-100 h-100" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(210, 96, 26, 0.15) 0%, transparent 60%)', top: 0, left: 0, zIndex: 1 }}></div>
            <div className="container position-relative py-4" style={{ zIndex: 2 }}>
                <div className="row g-4 align-items-center">
                    <div className={sidebarItems.length > 0 ? "col-lg-8 text-center text-lg-start" : "col-lg-12 text-center"}>
                        <span className="text-uppercase small tracking-wider fw-bold mb-2 d-inline-block text-brand-orange" style={{ letterSpacing: '2px' }}>
                            Corporate Tax Specialists
                        </span>
                        <h1 className="display-4 fw-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                            {title}
                        </h1>
                        <p className={`lead text-white-50 mb-4 ${sidebarItems.length === 0 ? 'mx-auto' : ''}`} style={{ maxWidth: '680px', fontSize: '1.1rem', lineHeight: 1.6 }}>
                            {subtitle}
                        </p>
                        
                        <div className={`d-flex flex-wrap ${sidebarItems.length > 0 ? 'justify-content-center justify-content-lg-start' : 'justify-content-center'} gap-3 mb-4`}>
                            <a href="#contact-block" className="btn btn-brand px-4 py-2 shadow">
                                CONTACT US
                            </a>
                        </div>

                        <nav aria-label="breadcrumb">
                            <ol className={`breadcrumb ${sidebarItems.length > 0 ? 'justify-content-center justify-content-lg-start' : 'justify-content-center'} mb-0 small`} style={{ background: 'transparent' }}>
                                {breadcrumbs.map((crumb, i) => (
                                    <li key={i} className={`breadcrumb-item ${crumb.active ? 'active text-white-50' : ''}`}>
                                        {crumb.active ? crumb.label : <Link to={crumb.link} className="text-decoration-none text-brand-orange">{crumb.label}</Link>}
                                    </li>
                                ))}
                            </ol>
                        </nav>
                    </div>
                    
                    {/* HERO OVERLAPPING SIDEBAR */}
                    {sidebarItems.length > 0 && (
                        <div className="col-lg-4 d-none d-lg-block position-relative" style={{ zIndex: 3 }}>
                            <div className="p-4 rounded-4 shadow-lg" style={{ background: 'linear-gradient(180deg, rgba(232,162,116,0.9) 0%, rgba(212,108,36,0.95) 50%, rgba(184,80,14,1) 100%)' }}>
                                <h5 className="text-white fw-bold mb-4 text-center border-bottom pb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>Quick Navigation</h5>
                                <div className="d-flex flex-column gap-3">
                                    {sidebarItems.map((item, idx) => (
                                        <Link key={idx} to={item.link} className="card border-0 shadow rounded-3 p-3 text-decoration-none bg-white hover-shadow transition" style={{ transition: 'all 0.3s' }}>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="fw-bold text-brand-dark" style={{ fontSize: '0.95rem' }}>{item.title}</span>
                                                <span className="text-brand-orange fw-bold">READ MORE &raquo;</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default PageHero;
