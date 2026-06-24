"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { industryServiceLinks } from '../data/industryServicePages';

const normalizePath = (path) => path.replace(/\/$/, '');

const IndustryLinksBar = () => {
  const pathname = usePathname();

  return (
    <section className="bg-white border-y border-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-3 justify-center">
          {industryServiceLinks.map(({ label, to }) => {
            const isActive = normalizePath(pathname) === normalizePath(to);

            return (
              <Link
                key={label}
                href={to}
                className={`accounts-link-pill btn btn-brand ${isActive ? 'active' : ''}`}
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

export default IndustryLinksBar;
