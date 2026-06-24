import pageConfig from '../../../data/accountsPages/financial-forecasting.js';
import { createAccountPageMetadata } from '../../../lib/seo';
import FinancialForecasting from '../../../views/FinancialForecasting';

export const metadata = createAccountPageMetadata(pageConfig);

export default function Page() {
  return <FinancialForecasting />;
}
