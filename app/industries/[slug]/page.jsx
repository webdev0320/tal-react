import IndustryPage from '../../../src/pages/IndustryPage.jsx';

export async function generateMetadata({ params }) {
  const slug = params.slug || '';
  return { title: `${decodeURIComponent(slug)} — Industries` };
}

export default function IndustryRoute({ params }) {
  return <IndustryPage slug={params.slug} />;
}
