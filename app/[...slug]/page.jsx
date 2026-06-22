import DynamicWpPage from '../../src/pages/DynamicWpPage.jsx';
import Home from '../../src/Home.jsx';
import AboutUs from '../../src/pages/AboutUs.jsx';
import Blog from '../../src/pages/Blog.jsx';
import SingleBlog from '../../src/pages/SingleBlog.jsx';
import PackagePage from '../../src/pages/PackagePage.jsx';
import Taxation from '../../src/pages/Taxation.jsx';
import TaxationSubPage from '../../src/pages/TaxationSubPage.jsx';
import Accounts from '../../src/pages/Accounts.jsx';
import BookkeepingServices from '../../src/pages/BookkeepingServices.jsx';
import PayrollServices from '../../src/pages/PayrollServices.jsx';
import SelfAssessment from '../../src/pages/SelfAssessment.jsx';
import Pensions from '../../src/pages/Pensions.jsx';
import IndustryPage from '../../src/pages/IndustryPage.jsx';
import ContactUs from '../../src/pages/ContactUs.jsx';
import SwitchAccountant from '../../src/pages/SwitchAccountant.jsx';
import ReferAndEarn from '../../src/pages/ReferAndEarn.jsx';

export default function CatchAll({ params }) {
  const slugArray = params.slug || [];
  if (slugArray.length === 0) return <Home />;

  const first = slugArray[0];

  // /about-us
  if (first === 'about-us') return <AboutUs />;

  // /contact-us
  if (first === 'contact-us') return <ContactUs />;

  // /switch-accountant
  if (first === 'switch-accountant') return <SwitchAccountant />;

  // /refer-and-earn
  if (first === 'refer-and-earn') return <ReferAndEarn />;

  // /blog and /blog/:slug
  if (first === 'blog') {
    if (slugArray[1]) {
      return <SingleBlog slug={slugArray[1]} />;
    }
    return <Blog />;
  }

  // /packages routes
  if (first === 'packages') {
    if (slugArray[1]) {
      return <PackagePage slug={slugArray[1]} />;
    }
    return <DynamicWpPage slug="packages" />;
  }

  // top-level bookkeeping services pages often exist as their own slugs
  if (first.startsWith('bookkeeping-services')) {
    const joined = slugArray.join('/');
    return <DynamicWpPage slug={joined} />;
  }

  // some WP exports use a taxation- prefix for static pages
  if (first.startsWith('taxation-')) {
    const joined = slugArray.join('/');
    return <TaxationSubPage slug={joined} />;
  }

  // /taxation routes
  if (first === 'taxation') {
    if (slugArray[1]) {
      return <TaxationSubPage slug={slugArray[1]} />;
    }
    return <Taxation />;
  }

  // /accounts routes
  if (first === 'accounts') {
    if (!slugArray[1]) return <Accounts />;
    const sub = slugArray[1];
    if (sub === 'bookkeeping-services') return <BookkeepingServices />;
    if (sub === 'payroll-services') return <PayrollServices />;
    if (sub === 'hmrc-self-assessment-tax-returns-accountant') return <SelfAssessment />;
    if (sub === 'auto-enrolment-pension-contributions') return <Pensions />;
    // unknown account subpage, delegate to WP extractor
    return <DynamicWpPage slug={slugArray.join('/')} />;
  }

  // /industries/:slug
  if (first === 'industries' && slugArray[1]) {
    return <IndustryPage slug={slugArray[1]} />;
  }

  // fallback: join all segments and render DynamicWpPage
  const joined = slugArray.join('/');
  return <DynamicWpPage slug={joined} />;
}

export async function generateMetadata({ params }) {
  const slugArray = params.slug || [];
  const first = slugArray[0];

  if (!first) return { title: 'Taxaccolega — Home' };
  if (first === 'about-us') return { title: 'About Us — Taxaccolega' };
  if (first === 'contact-us') return { title: 'Contact Us — Taxaccolega' };
  if (first === 'blog') {
    if (slugArray[1]) return { title: `${decodeURIComponent(slugArray[1])} — Blog` };
    return { title: 'Blog — Taxaccolega' };
  }
  if (first === 'packages') return { title: 'Packages — Taxaccolega' };
  if (first === 'taxation') return { title: 'Taxation — Taxaccolega' };
  if (first === 'accounts') return { title: 'Accounts — Taxaccolega' };
  if (first === 'industries') return { title: 'Industries — Taxaccolega' };

  // default fallback metadata
  return { title: `${decodeURIComponent(first)} — Taxaccolega` };
}
