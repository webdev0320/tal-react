import pageConfig from '../../../data/accountsPages/cash-flow-forecasting.js';
import { createAccountPageMetadata } from '../../../lib/seo';
import CashFlowForecasting from '../../../views/CashFlowForecasting';

export const metadata = createAccountPageMetadata(pageConfig);

export default function Page() {
  return <CashFlowForecasting />;
}
