"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { label: 'Corporation Tax', to: '/taxation/company-tax-return-accountants' },
  { label: 'Value Added Tax', to: '/taxation/vat-accountants' },
  { label: 'Inheritance Tax', to: '/taxation/inheritance-tax-planning' },
  { label: 'Tax Investigation', to: '/taxation/tax-investigation-insurance' },
  { label: 'Capital Gains Tax', to: '/taxation/capital-gains-tax-accountants' },
  { label: 'Estate Tax Planning', to: '/taxation/estate-property-tax-planning' },
  { label: 'Research & Development', to: '/taxation/rd/', external: true },
  { label: 'Tax Advisory', to: '/taxation/tax-advisors' },
  { label: 'EMI Scheme', to: '/taxation/emi-schemes' },
  { label: 'SEIS and EIS Accountants', to: '/taxation/seis-tax-relief' },
  { label: 'Non-UK Resident', to: '/taxation/non-uk-resident-taxation' },
  { label: 'LET Property Campaign', to: '/taxation/let-property-campaign' },
  { label: 'Worldwide Disclosure Facility', to: '/taxation/worldwide-disclosure-facility' },
  { label: 'Cryptocurrency', to: '/taxation/cryptocurrency' },
  { label: 'Income Tax', to: '/taxation/personal-income-tax-professionals-and-chartered-accountants' },
  { label: 'Film Tax Relief', to: '/taxation/film-tax-relief' },
];

const TaxationLinksBar = () => {
  const pathname = usePathname();

  return (
    <section className="bg-white border-y border-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-3 justify-center">
          {links.map(({ label, to, external }) => {
            const isActive = !external && pathname === to;


            if (external) {
              return (
                <a
                  key={label}
                  href={to}
                  target="_blank"
                  rel="noreferrer"
                  className={`industry-badge text-decoration-none btn btn-brand ${isActive ? 'active' : ''}`}
                >
                  {label}
                </a>
              );
            }

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

export default TaxationLinksBar;

