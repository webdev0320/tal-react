"use client";

import { accountServiceLinks } from '../data/accountServicePages';

const normalizePath = (path) => path.replace(/\/$/, '');

const AccountsLinksBar = () => {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';

  return (
    <section className="bg-white border-y border-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-3 justify-center">
          {accountServiceLinks.map(({ label, to }) => {
            const isActive = normalizePath(pathname) === normalizePath(to);

            return (
              <a
                key={label} 
                href={to}
                className={`industry-badge text-decoration-none btn btn-brand ${isActive ? 'active' : ''}`}
              >
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AccountsLinksBar;
