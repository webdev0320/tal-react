import { Link, useLocation } from 'react-router-dom';

const links = [
  { label: 'Bookkeeping',                  to: '/accounts/bookkeeping-services/' },
  { label: 'Statutory Accounts',           to: '/accounts/statutory-accounts' },
  { label: 'Management Accounts',          to: '/accounts/management-accounts' },
  { label: 'Payroll Services',             to: '/accounts/payroll-services' },
  { label: 'Self-Assessment & Tax Return', to: '/accounts/hmrc-self-assessment-tax-returns-accountant' },
  { label: 'Pension & Auto Enrolment',     to: '/accounts/auto-enrolment-pension-contributions/' },
  { label: 'Consolidated Accounts',        to: '/accounts/consolidated-accounts' },
  { label: 'Financial Forecasting',        to: '/accounts/financial-forecasting/' },
  { label: 'Cashflow Forecasting',         to: '/accounts/cash-flow-forecasting' },
];

const AccountsLinksBar = () => {
  const { pathname } = useLocation();

  return (
    <section className="bg-white border-bottom border-top py-4">
      <div className="container">
        <div className="d-flex flex-wrap gap-2 justify-content-center">
          {links.map(({ label, to }) => {
            const isActive = pathname === to || pathname === to.replace(/\/$/, "");

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

export default AccountsLinksBar;
