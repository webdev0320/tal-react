import { Link, useLocation } from 'react-router-dom';

const links = [
  { label: 'Corporation Tax',             to: '/taxation/company-tax-return-accountants' },
  { label: 'Value Added Tax',             to: '/taxation/vat-accountants' },
  { label: 'Inheritance Tax',             to: '/taxation/inheritance-tax-planning' },
  { label: 'Tax Investigation',           to: '/taxation/tax-investigation-insurance' },
  { label: 'Capital Gains Tax',           to: '/taxation/capital-gains-tax-accountants' },
  { label: 'Estate Tax Planning',         to: '/taxation/estate-property-tax-planning' },
  { label: 'Research & Development',      to: '/taxation/rd/', external: true },
  { label: 'Tax Advisory',               to: '/taxation/tax-advisors' },
  { label: 'EMI Scheme',                 to: '/taxation/emi-schemes' },
  { label: 'SEIS and EIS Accountants',   to: '/taxation/seis-tax-relief' },
  { label: 'Non-UK Resident',            to: '/taxation/non-uk-resident-taxation' },
  { label: 'LET Property Campaign',       to: '/taxation/let-property-campaign' },
  { label: 'Worldwide Disclosure Facility', to: '/taxation/worldwide-disclosure-facility' },
  { label: 'Cryptocurrency',             to: '/taxation/cryptocurrency' },
  { label: 'Income Tax',                 to: '/taxation/personal-income-tax-professionals-and-chartered-accountants' },
  { label: 'Film Tax Relief',            to: '/taxation/film-tax-relief' },
];

const TaxationLinksBar = () => {
  const { pathname } = useLocation();

  return (
    <section className="bg-white border-bottom border-top py-4">
      <div className="container">
        <div className="d-flex flex-wrap gap-2 justify-content-center">
          {links.map(({ label, to, external }) => {
            const isActive = !external && pathname === to;

            if (external) {
              return (
                <a
                  key={label}
                  href={to}
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none"
                >
                  <span
                    className="badge rounded-pill fw-semibold px-3 py-2"
                    style={{
                      fontSize: '0.85rem',
                      background: '#f1f5f9',
                      color: '#1d3c45',
                      border: '1px solid #e2e8f0',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = '#d2601a';
                      e.currentTarget.style.color = '#fff';
                      e.currentTarget.style.borderColor = '#d2601a';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = '#f1f5f9';
                      e.currentTarget.style.color = '#1d3c45';
                      e.currentTarget.style.borderColor = '#e2e8f0';
                    }}
                  >
                    {label}
                  </span>
                </a>
              );
            }

            return (
              <Link key={label} to={to} className="text-decoration-none">
                <span
                  className="badge rounded-pill fw-semibold px-3 py-2"
                  style={{
                    fontSize: '0.85rem',
                    background: isActive ? '#d2601a' : '#f1f5f9',
                    color: isActive ? '#fff' : '#1d3c45',
                    border: isActive ? '1px solid #d2601a' : '1px solid #e2e8f0',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      e.currentTarget.style.background = '#d2601a';
                      e.currentTarget.style.color = '#fff';
                      e.currentTarget.style.borderColor = '#d2601a';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.currentTarget.style.background = '#f1f5f9';
                      e.currentTarget.style.color = '#1d3c45';
                      e.currentTarget.style.borderColor = '#e2e8f0';
                    }
                  }}
                >
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TaxationLinksBar;

