import IndustryPageClient from './IndustryPageClient';
import Footer from '../components/Footer';

const IndustryPage = ({ slug: propSlug }) => {
  return <IndustryPageClient slug={propSlug} />;
};

export default IndustryPage;
