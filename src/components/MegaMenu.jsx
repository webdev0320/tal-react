"use client";
import React, { useState } from 'react';
import Link from './NextLinkShim';
import { PieChart, BookOpen, Scale, Code, Landmark } from 'lucide-react';

const menuData = {
  Taxation: {
    to: '/taxation',
    icon: <PieChart size={18} />,
    sections: [
      {
        title: 'Corporate & Business Tax',
        items: [
          { label: 'Corporation Tax', desc: 'Compliance & returns', to: '/taxation/company-tax-return-accountants' },
          { label: 'Value Added Tax', desc: 'VAT registration & filings', to: '/taxation/vat-accountants' },
          { label: 'Tax Investigation', desc: 'Expert defense & guidance', to: '/taxation/tax-investigation-insurance' },
          { label: 'Research & Development', desc: 'Incentives & claims', to: '/taxation/rd/' },
          { label: 'Tax Advisory', desc: 'Strategic planning advice', to: '/taxation/tax-advisors' },
          { label: 'EMI Scheme', desc: 'Employee share plans', to: '/taxation/emi-schemes' },
          { label: 'SEIS and EIS Accountants', desc: 'Investment scheme support', to: '/taxation/seis-tax-relief' },
          { label: 'Film Tax Relief', desc: 'Relief & compliance', to: '/taxation/film-tax-relief' },
        ]
      },
      {
        title: 'Private & Personal Tax',
        items: [
          { label: 'Inheritance Tax', desc: 'Strategic wealth planning', to: '/taxation/inheritance-tax-planning' },
          { label: 'Capital Gains Tax', desc: 'Asset disposal planning', to: '/taxation/capital-gains-tax-accountants' },
          { label: 'Estate Tax Planning', desc: 'Future security planning', to: '/taxation/estate-property-tax-planning' },
          { label: 'Non-UK Resident', desc: 'Expat tax solutions', to: '/taxation/non-uk-resident-taxation' },
          { label: 'LET Property Campaign', desc: 'Property income compliance', to: '/taxation/let-property-campaign' },
          { label: 'Worldwide Disclosure Facility', desc: 'Offshore compliance', to: '/taxation/worldwide-disclosure-facility' },
          { label: 'Cryptocurrency', desc: 'Digital asset tax advice', to: '/taxation/cryptocurrency' },
          { label: 'Income Tax', desc: 'Personal tax efficiency', to: '/taxation/personal-income-tax' },
        ]
      }
    ]
  },
  Accounts: {
    to: '/accounts',
    icon: <BookOpen size={18} />,
    sections: [
      {
        title: 'Accounting Services',
        items: [
          { label: 'Bookkeeping', to: '/accounts/bookkeeping' },
          { label: 'Statutory Accounts', to: '/accounts/statutory' },
          { label: 'Management Accounts', to: '/accounts/management' },
          { label: 'Payroll Services', to: '/accounts/payroll' },
          { label: 'Self-Assessment & Tax Return', to: '/accounts/self-assessment' },
          { label: 'Pension & Auto Enrolment', to: '/accounts/pension' },
          { label: 'Consolidated Accounts', to: '/accounts/consolidated' },
          { label: 'Financial Forecasting', to: '/accounts/forecasting' },
          { label: 'Cashflow Forecasting', to: '/accounts/cashflow' },
        ]
      }
    ]
  },
  Legal: {
    to: '/legal',
    icon: <Scale size={18} />,
    sections: [
      {
        title: 'Legal & Secretarial',
        items: [
          { label: 'Company Formation', desc: 'Setup & registration', to: '/legal/formation' },
        ]
      }
    ]
  },
  Software: {
    to: '/software',
    icon: <Code size={18} />,
    sections: [
      {
        title: 'Financial Software',
        items: [
          { label: 'Xero', desc: 'Cloud accounting', to: '/software/xero' },
          { label: 'QuickBooks', desc: 'Business finance', to: '/software/quickbooks' },
        ]
      }
    ]
  },
  Banks: {
    to: '/banks',
    icon: <Landmark size={18} />,
    sections: [
      {
        title: 'Banking Solutions',
        items: [
          { label: 'Starling', desc: 'Digital banking', to: '/banks/starling' },
          { label: 'Monzo', desc: 'Smart accounts', to: '/banks/monzo' },
        ]
      }
    ]
  }
};

const MegaMenu = () => {
  const [activeCategory, setActiveCategory] = useState('Taxation');

  return (
    <div className="absolute top-full left-0 w-[950px] bg-white border border-slate-100 rounded-3xl shadow-xl z-50 flex overflow-hidden">
      {/* Sidebar - 28% */}
      <div className="w-[28%] bg-slate-50/50 border-r border-slate-100 p-6 space-y-2">
        {Object.keys(menuData).map((category) => (
          <Link
            key={category}
            href={menuData[category].to}
            onMouseEnter={() => setActiveCategory(category)}
            className={`relative w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-200 ease-in-out rounded-xl border-0 no-underline ${
              activeCategory === category
                ? 'bg-white text-orange-600 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]'
                : 'text-slate-400 hover:bg-slate-100/50 hover:text-slate-900'
            }`}
          >
            {activeCategory === category && (
              <div className="absolute left-0 top-3 bottom-3 w-[3px] bg-orange-500 rounded-r-full" />
            )}
            {React.cloneElement(menuData[category].icon, { 
              className: activeCategory === category ? 'text-orange-600' : 'text-slate-400' 
            })}
            {category}
          </Link>
        ))}
      </div>

      {/* Content - 72% */}
      <div className="w-[72%] p-5 grid grid-cols-4 gap-3">
        {menuData[activeCategory].sections.map((section, index) => (
          <React.Fragment key={index}>
            {section.items.map((item) => (
              <Link
                key={item.label}
                href={item.to}
                className="group block p-2 rounded-lg hover:bg-slate-50/50 no-underline transition-all duration-200 ease-in-out"
              >
                <div className="text-[13px] font-semibold text-slate-700 group-hover:text-orange-600 transition-colors duration-200">
                  {item.label}
                </div>
              </Link>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;

