import DynamicWpPage from '../../src/pages/DynamicWpPage.jsx';

export const metadata = {
  title: 'Packages — Taxaccolega',
  description: 'Our service packages and pricing.'
};

export default function PackagesPage() {
  return <DynamicWpPage slug="packages" />;
}
