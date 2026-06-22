import TaxationSubPage from '../../../src/pages/TaxationSubPage.jsx';

export async function generateMetadata({ params }) {
  const slug = params.slug || '';
  return { title: `${decodeURIComponent(slug)} — Taxation` };
}

export default function TaxationSubRoute({ params }) {
  return <TaxationSubPage slug={params.slug} />;
}
