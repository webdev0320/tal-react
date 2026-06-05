import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({
  title,
  subtitle,
  breadcrumbItems = [], // Array of { label, to }
  backgroundImage = '/images/young-asian.webp', // Default background image
  overlayOpacity = 0.65,
  showSubtitle = true,
  showTaxationSpecialistText = true,
}) => {
  return (
    <header
      className="relative flex items-center justify-center overflow-hidden text-white"
      style={{
        minHeight: '280px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-brand-dark-blue" // Using brand-dark-blue directly
        style={{ opacity: overlayOpacity, zIndex: 1 }}
      />
      
      <div className="container relative py-5 text-center" style={{ zIndex: 2 }}>
        {showTaxationSpecialistText && (
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-brand-orange">
            Taxation Specialist Services
          </span>
        )}
        <h1 className="mb-3 font-extrabold leading-tight text-white" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '3rem' /* display-3 equivalent */ }}>
          {title}
        </h1>
        {showSubtitle && subtitle && (
          <p className="mx-auto mb-5 max-w-3xl text-lg leading-relaxed text-white/80">
            {subtitle}
          </p>
        )}

        {breadcrumbItems.length > 0 && (
          <nav aria-label="breadcrumb">
            <ol className="flex justify-center space-x-2 text-sm text-white/70">
              {breadcrumbItems.map((item, index) => (
                <React.Fragment key={index}>
                  <li>
                    <Link to={item.to} className="hover:text-brand-orange transition-colors">
                      {item.label}
                    </Link>
                  </li>
                  {index < breadcrumbItems.length - 1 && <li>/</li>}
                </React.Fragment>
              ))}
            </ol>
          </nav>
        )}
      </div>
    </header>
  );
};

export default PageHeader;
