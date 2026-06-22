import React from 'react';
import Link from './NextLinkShim';

const ExpertTaxServices = ({ taxTags, tagRoutes }) => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center fw-bold mb-2 text-brand-dark" style={{ color: '#1D3C45', fontFamily: '"Montserrat Alternates", Sans-serif', fontSize: '63px', fontWeight: '600' }}>
          <span className="text-muted fw-normal">— </span>Expert Tax services<span className="text-muted fw-normal"> —</span>
        </h2>
        <div className="mt-4 d-flex flex-wrap gap-2 justify-content-center">
          {taxTags.map((tag) => {
            const route = tagRoutes[tag];
            return route ? (
              <Link
                key={tag}
                href={route}
                className="industry-badge text-decoration-none"
              >
                {tag}
              </Link>
            ) : (
              <a
                key={tag}
                href="#"
                className="industry-badge"
              >
                {tag}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExpertTaxServices;
