import PackagePage from '../../../src/pages/PackagePage.jsx';

export async function generateMetadata({ params }) {
  const slug = params.slug || '';
  return { title: `${decodeURIComponent(slug)} — Package` };
}

export default function PackagePageRoute({ params }) {
  return <PackagePage slug={params.slug} />;
}
