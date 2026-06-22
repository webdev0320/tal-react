import DynamicWpPage from './DynamicWpPage';
import PackagePageClient from './PackagePageClient';
import Footer from '../components/Footer';

const packagesConfig = {
  'sole-trader': { title: 'Sole Trader Package', img: null },
  'ltd-company': { title: 'LTD Company Package', img: null },
  'contractor-ltd': { title: 'Contractor LTD Package', img: null },
  'landlords': { title: 'Landlords Package', img: null },
  'spvs-ltd': { title: "SPV's LTD Package", img: null },
  'charities': { title: 'Charities Package', img: null }
};

const PackagePage = async ({ slug: propSlug }) => {
  if (!propSlug) return <PackagePageClient />;

  const pkg = packagesConfig[propSlug];
  if (!pkg) return <DynamicWpPage slug={`packages/${propSlug}`} />;

  return (
    <div>
      <header className="position-relative text-white d-flex align-items-center justify-content-center" style={{ minHeight: '220px', background: '#1a2332' }}>
        <div className="container position-relative py-5 text-center" style={{ zIndex: 2 }}>
          <h1 className="display-4 fw-bold text-white mb-2">{pkg.title}</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0 small">
              <li className="breadcrumb-item">
                <a href="/" className="text-decoration-none" style={{ color: '#e07b39' }}>Home</a>
              </li>
              <li className="breadcrumb-item text-white-50" aria-current="page">Packages</li>
              <li className="breadcrumb-item active text-white" aria-current="page">{pkg.title}</li>
            </ol>
          </nav>
        </div>
      </header>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <div className="p-4 border rounded shadow-sm bg-light">
                <img src={pkg.img || 'https://via.placeholder.com/800x600?text=Pricing+Coming+Soon'} alt={pkg.title} className="img-fluid rounded" style={{ maxWidth: '100%', height: 'auto' }} />
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-5 text-center">
            <div className="col-lg-8">
              <h3 className="fw-bold" style={{ color: '#1a2332' }}>Ready to get started?</h3>
              <p className="text-secondary mb-4">Contact our team to discuss which package is best for you.</p>
              <a href="/contact" className="btn px-4 py-2 text-white" style={{ background: '#e07b39', fontWeight: 600 }}>Contact Us Today</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      </div>
  );
};

export default PackagePage;
