/** @typedef {{ title: string, description: string, keywords?: string[], image?: string, type?: 'website'|'article' }} StaticPageSeo */

/** @type {Record<string, StaticPageSeo>} */
export const staticPages = {
  '/': {
    title: 'Chartered Accountants London | Tax & Accounting Firm Online UK',
    description:
      'Award-winning London chartered accountants for tax, bookkeeping, payroll, VAT and company accounts. Fixed-fee packages, 5-star rated. Book a free consultation today.',
    keywords: [
      'chartered accountants london',
      'accountants near me',
      'tax accountants uk',
      'online accounting firm',
    ],
  },
  '/about-us': {
    title: 'About Us | London Chartered Accountants',
    description:
      'Meet Taxaccolega — trusted London chartered accountants serving SMEs, contractors and landlords with proactive tax and accounting advice since 2009.',
    keywords: ['about taxaccolega', 'chartered accountants croydon', 'accountancy firm london'],
  },
  '/accounts': {
    title: 'Accounts & Bookkeeping Services UK',
    description:
      'Complete accounts services for UK businesses: bookkeeping, statutory accounts, management reporting, payroll, pensions and cash flow forecasting. Speak to an expert accountant.',
    keywords: ['accounts services uk', 'business bookkeeping', 'management accounts', 'payroll services'],
  },
  '/accounts/annual-accounts': {
    title: 'Annual Accounts Preparation & Filing UK',
    description:
      'Year-end annual accounts prepared and filed accurately for limited companies and sole traders. HMRC and Companies House compliant reporting from expert UK accountants.',
    keywords: ['annual accounts', 'year end accounts', 'company accounts filing'],
  },
  '/accounts/bookkeeping': {
    title: 'Bookkeeping Services For Small and Medium Businesses in UK',
    description:
      'Outsource bookkeeping to qualified UK accountants. Accurate records, bank reconciliations and VAT-ready data for SMEs. Fixed monthly fees available.',
    keywords: ['bookkeeping services uk', 'small business bookkeeper', 'online bookkeeping'],
  },
  '/accounts/self-assessment': {
    title: 'Self Assessment Tax Return Accountants UK',
    description:
      'Expert self assessment tax return preparation for directors, landlords and freelancers. Avoid HMRC penalties with accurate filing and proactive tax planning.',
    keywords: ['self assessment accountant', 'tax return uk', 'hmrc self assessment'],
  },
  '/awards-accolades-accreditations': {
    title: 'Awards, Accolades & Accreditations',
    description:
      'Taxaccolega awards, professional accreditations and industry recognition. ACCA chartered accountants trusted by UK businesses.',
    keywords: ['accountant awards', 'ACCA accountants', 'trusted accountants london'],
  },
  '/banks': {
    title: 'Business Bank Accounts for UK Companies',
    description:
      'Compare business bank accounts for startups, contractors and limited companies. Guidance on opening accounts with leading UK business banking providers.',
    keywords: ['business bank account uk', 'company bank account', 'startup banking'],
  },
  '/blog': {
    title: 'Tax & Accounting Blog | UK Business Insights',
    description:
      'Practical tax, VAT and accounting guides for UK business owners, landlords and contractors. Expert insights from Tal & Co chartered accountants.',
    keywords: ['accounting blog', 'tax advice uk', 'hmrc guides'],
    type: 'website',
  },
  '/company-formation': {
    title: 'Company Formation Services UK | Register a Limited Company',
    description:
      'Fast UK company formation with registered office, share structure and Companies House filing. Start your limited company with expert accountant support.',
    keywords: ['company formation uk', 'register limited company', 'companies house formation'],
  },
  '/company-secretarial': {
    title: 'Company Secretarial Services UK',
    description:
      'Company secretarial support including confirmation statements, director changes, share transfers and statutory registers. Stay compliant with Companies House.',
    keywords: ['company secretarial', 'confirmation statement', 'companies house compliance'],
  },
  '/contact-us': {
    title: 'Contact Us | Book a Free Consultation',
    description:
      'Contact Taxaccolega in Croydon, London. Call 020 8127 0728 or book a free consultation for tax, accounts and business advisory services.',
    keywords: ['contact accountant london', 'taxaccolega contact', 'accountant consultation'],
  },
  '/employment-agreement': {
    title: 'Employment Agreement & Contract Services',
    description:
      'Employment contracts and agreements drafted for UK employers. Compliant documentation for hiring staff, directors and contractors.',
    keywords: ['employment agreement uk', 'employment contract', 'hr documentation'],
  },
  '/legal': {
    title: 'Legal Information & Terms',
    description:
      'Legal information, disclaimers and terms relating to Taxaccolega website and professional services.',
    keywords: ['legal information', 'accountant terms'],
  },
  '/privacy-policy': {
    title: 'Privacy Policy',
    description:
      'Privacy policy for Taxaccolega. How we collect, use and protect your personal data in accordance with UK GDPR.',
    keywords: ['privacy policy', 'data protection'],
  },
  '/refer-a-friend': {
    title: 'Refer a Friend | Accountant Referral Scheme',
    description:
      'Refer a friend to Taxaccolega and earn rewards when they become a client. Share trusted accounting services across your network.',
    keywords: ['refer a friend', 'accountant referral'],
  },
  '/refer-and-earn': {
    title: 'Refer and Earn | Client Referral Rewards',
    description:
      'Refer and earn with Taxaccolega. Recommend our chartered accountancy services and receive referral rewards.',
    keywords: ['refer and earn', 'accountant referral scheme'],
  },
  '/registered-address': {
    title: 'Registered Office Address Service UK',
    description:
      'Affordable registered office address service for UK limited companies. Mail handling for HMRC and Companies House correspondence from £8/month.',
    keywords: ['registered office address', 'companies house address', 'virtual office uk'],
  },
  '/schedule-a-phone-call-or-video-meeting': {
    title: 'Schedule a Call | Free Accountant Consultation',
    description:
      'Book a phone or video consultation with a London chartered accountant. Discuss tax, accounts, payroll or company setup at a time that suits you.',
    keywords: ['book accountant call', 'free tax consultation', 'video meeting accountant'],
  },
  '/share-transfer': {
    title: 'Share Transfer & Company Share Changes',
    description:
      'Share transfer services for UK limited companies including stock transfer forms, board resolutions and Companies House updates.',
    keywords: ['share transfer uk', 'company shares', 'stock transfer form'],
  },
  '/software': {
    title: 'Accounting Software Setup & Integration',
    description:
      'Accounting software advice and setup for Xero, QuickBooks, Sage, FreeAgent and Dext. Cloud bookkeeping integration for UK businesses.',
    keywords: ['accounting software uk', 'xero accountant', 'quickbooks setup'],
  },
  '/switch-accountant': {
    title: 'Switch Accountant | Hassle-Free Transfer',
    description:
      'Switch to Taxaccolega with a smooth, hassle-free transfer. We liaise with HMRC, migrate records and get your accounts back on track.',
    keywords: ['switch accountant', 'change accountant uk', 'transfer accounting records'],
  },
  '/taxation': {
    title: 'Tax Services UK | Personal & Business Tax Accountants',
    description:
      'Comprehensive UK tax services: corporation tax, VAT, self assessment, inheritance tax, crypto tax and HMRC disclosures. Expert tax planning from chartered accountants.',
    keywords: ['tax services uk', 'tax accountants london', 'business tax advice'],
  },
  '/taxation/worldwide-disclosure-facility': {
    title: 'Worldwide Disclosure Facility | HMRC Offshore Tax',
    description:
      'Confidential HMRC Worldwide Disclosure Facility support for undeclared offshore income. Reduce penalties with structured voluntary disclosure.',
    keywords: ['worldwide disclosure facility', 'offshore tax disclosure', 'hmrc voluntary disclosure'],
  },
  '/taxation/cryptocurrency': {
    title: 'Cryptocurrency Tax Accountants UK',
    description:
      'Cryptocurrency tax reporting for traders, investors and businesses. Capital gains, staking income and HMRC-compliant crypto tax returns.',
    keywords: ['cryptocurrency tax uk', 'crypto tax accountant', 'bitcoin tax return'],
  },
  '/taxation/let-property-campaign': {
    title: 'Let Property Campaign | HMRC Landlord Disclosure',
    description:
      'HMRC Let Property Campaign disclosure for undeclared rental income. Correct historic landlord tax errors before HMRC investigation.',
    keywords: ['let property campaign', 'landlord tax disclosure', 'rental income hmrc'],
  },
  '/taxation/personal-income-tax-professionals-and-chartered-accountants': {
    title: 'Personal Income Tax Accountants UK',
    description:
      'Personal income tax advice for directors, high earners, landlords and freelancers. Multi-source income planning and self assessment support.',
    keywords: ['personal income tax', 'income tax accountant', 'director tax planning'],
  },
  '/taxation/company-tax-return-accountants': {
    title: 'Company Tax Return Accountants | Corporation Tax',
    description:
      'Corporation tax return preparation and CT600 filing for UK limited companies. Tax-efficient planning and HMRC compliance from expert accountants.',
    keywords: ['company tax return', 'corporation tax accountant', 'ct600 filing'],
  },
  '/taxation/vat-accountants': {
    title: 'VAT Accountants UK | VAT Returns & Registration',
    description:
      'VAT registration, quarterly returns and MTD-compliant filing for UK businesses. Expert VAT accountants to reduce errors and HMRC penalties.',
    keywords: ['vat accountants uk', 'vat return accountant', 'vat registration'],
  },
  '/taxation/inheritance-tax-planning': {
    title: 'Inheritance Tax Planning UK',
    description:
      'Inheritance tax planning to protect your estate. Trusts, lifetime gifts and IHT mitigation strategies from experienced UK tax advisors.',
    keywords: ['inheritance tax planning', 'iht planning uk', 'estate tax advice'],
  },
  '/taxation/emi-schemes': {
    title: 'EMI Schemes UK | Employee Share Option Plans',
    description:
      'EMI share option scheme setup, HMRC valuations and compliance for UK companies. Tax-efficient employee incentives from expert advisors.',
    keywords: ['emi scheme uk', 'employee share options', 'emi tax scheme'],
  },
  '/packages/sole-trader': {
    title: 'Sole Trader Accounting Package',
    description:
      'Fixed-fee sole trader accounting packages including self assessment, bookkeeping and tax advice. Affordable support for self-employed professionals.',
    keywords: ['sole trader accountant', 'self employed accounting package'],
  },
  '/packages/sole-trader-pricing': {
    title: 'Sole Trader Package Pricing',
    description:
      'Transparent sole trader accounting package pricing. Compare plans for bookkeeping, tax returns and ongoing accountant support.',
    keywords: ['sole trader accounting fees', 'self employed accountant cost'],
  },
  '/packages/ltd-company': {
    title: 'Limited Company Accounting Package',
    description:
      'All-in-one limited company accounting packages: accounts, corporation tax, payroll, VAT and director self assessment. Fixed monthly fees.',
    keywords: ['limited company accountant', 'ltd company accounting package'],
  },
  '/packages/ltd-company-pricing': {
    title: 'Limited Company Package Pricing',
    description:
      'Compare limited company accounting package tiers and pricing. Essential, Extensive and Supreme plans for growing UK businesses.',
    keywords: ['limited company accountant fees', 'ltd company accounting cost'],
  },
  '/packages/contractor-ltd': {
    title: 'Contractor LTD Accounting Package',
    description:
      'Specialist contractor limited company accounting. IR35-aware support, dividend planning, payroll and year-end accounts for UK contractors.',
    keywords: ['contractor accountant', 'contractor limited company', 'ir35 accountant'],
  },
  '/packages/contractor-ltd-pricing': {
    title: 'Contractor LTD Package Pricing',
    description:
      'Contractor limited company accounting package pricing. Fixed fees for tax returns, bookkeeping and ongoing contractor support.',
    keywords: ['contractor accountant fees', 'contractor accounting cost'],
  },
  '/packages/landlords': {
    title: 'Landlords Accounting Package',
    description:
      'Landlord accounting packages for rental property portfolios. Self assessment, mortgage interest, capital gains and property tax planning.',
    keywords: ['landlord accountant', 'property tax accountant', 'rental accounts'],
  },
  '/packages/landlords-3': {
    title: 'Landlords Accounting Package',
    description:
      'Comprehensive landlord accounting for UK property investors. Tax returns, portfolio reporting and HMRC-compliant rental accounts.',
    keywords: ['landlord accounting package', 'property investor accountant'],
  },
  '/packages/spvs-ltd': {
    title: 'SPV Limited Company Accounting Package',
    description:
      'Specialist SPV limited company accounting for property investors. Separate company accounts, tax returns and compliance for each SPV.',
    keywords: ['spv accountant', 'property spv accounting', 'special purpose vehicle tax'],
  },
  '/packages/spvs-ltd-pricing': {
    title: 'SPV LTD Package Pricing',
    description:
      'SPV limited company accounting package pricing for property investors. Transparent fees for multiple SPV structures.',
    keywords: ['spv accounting fees', 'property company accountant cost'],
  },
  '/packages/charities': {
    title: 'Charities Accounting Package',
    description:
      'Charity accounting and reporting packages for UK non-profits. SORP-compliant accounts, Gift Aid and trustee reporting support.',
    keywords: ['charity accountant uk', 'non profit accounting', 'charity accounts'],
  },
  '/packages/charities-pricing': {
    title: 'Charities Package Pricing',
    description:
      'Charity accounting package pricing for UK charities and non-profits. Fixed-fee plans for compliant financial reporting.',
    keywords: ['charity accountant fees', 'non profit accounting cost'],
  },
};

/**
 * @param {string} path
 * @returns {StaticPageSeo | undefined}
 */
export function getStaticPageSeo(path) {
  const normalized = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
  return staticPages[normalized];
}

