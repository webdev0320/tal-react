"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
  const pathname = usePathname();

  return (
    <section className="bg-white border-y border-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-3 justify-center">
          {links.map(({ label, to }) => {
            const isActive = pathname === to || pathname === to.replace(/\/$/, "");

            return (
              <Link 
                key={label} 
                href={to} 
                className={`industry-badge text-decoration-none btn btn-brand ${isActive ? 'active' : ''}`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AccountsLinksBar;
