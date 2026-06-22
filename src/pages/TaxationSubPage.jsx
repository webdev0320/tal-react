import TaxationSubPageClient from './TaxationSubPageClient';
import Footer from '../components/Footer';

const TaxationSubPage = ({ slug: propSlug }) => {
  return <TaxationSubPageClient slug={propSlug} />;
};

export default TaxationSubPage;
