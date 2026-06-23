import React from 'react';
// react-router-dom removed;
import Home from './Home';
import AboutUs from './views/AboutUs';
import Blog from './views/Blog';
import ContactUs from './views/ContactUs';
import SwitchAccountant from './views/SwitchAccountant';
import ReferAndEarn from './views/ReferAndEarn';
import Awards from './views/Awards';
import ScheduleCall from './views/ScheduleCall';
import Taxation from './views/Taxation';
import Accounts from './views/Accounts';
import Legal from './views/Legal';
import CompanyFormation from './views/CompanyFormation';
import RegisteredAddress from './views/RegisteredAddress';
import CompanySecretarial from './views/CompanySecretarial';
import EmploymentAgreement from './views/EmploymentAgreement';
import ShareTransfer from './views/ShareTransfer';
import Software from './views/Software';
import Banks from './views/Banks';
import BookkeepingServices from './views/BookkeepingServices';
import PayrollServices from './views/PayrollServices';
import SelfAssessment from './views/SelfAssessment';
import Pensions from './views/Pensions';
import FinancialForecasting from './views/FinancialForecasting';
import IndustryPage from './views/IndustryPage';
import PackagePage from './views/PackagePage';
import TaxationSubPage from './views/TaxationSubPage';

// New Imports
import AnnualAccounts from './views/AnnualAccounts';
import StatutoryAccounts from './views/StatutoryAccounts';
import ManagementAccounts from './views/ManagementAccounts';
import CashFlowForecasting from './views/CashFlowForecasting';
import SoleTraderPackage from './views/SoleTraderPackage';
import LtdCompanyPackage from './views/LtdCompanyPackage';
import ContractorLtdPackage from './views/ContractorLtdPackage';
import LandlordsPackage from './views/LandlordsPackage';
import SpvsLtdPackage from './views/SpvsLtdPackage';
import CharitiesPackage from './views/CharitiesPackage';
import ReferAFriend from './views/ReferAFriend';
import PrivacyPolicy from './views/PrivacyPolicy';
import CompanyTaxReturn from './views/CompanyTaxReturn';
import VatAccountants from './views/VatAccountants';
import InheritanceTaxPlanning from './views/InheritanceTaxPlanning';
import EmiSchemesPage from './views/EmiSchemes';
import LetPropertyCampaign from './views/LetPropertyCampaign';
import WorldwideDisclosureFacility from './views/WorldwideDisclosureFacility';
import CryptocurrencyTax from './views/CryptocurrencyTax';
import PersonalIncomeTax from './views/PersonalIncomeTax';
import ConsolidatedAccounts from './views/ConsolidatedAccounts';
import SingleBlog from './views/SingleBlog';
import MainLayout from './components/Layout/MainLayout';
import DynamicWpPage from './views/DynamicWpPage';
import IDVerificationModal from './components/IDVerificationModal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/about-us" element={<MainLayout><AboutUs /></MainLayout>} />
        <Route path="/blog" element={<MainLayout><Blog /></MainLayout>} />
        <Route path="/blog/:slug" element={<MainLayout><SingleBlog /></MainLayout>} />
        <Route path="/contact-us" element={<MainLayout><ContactUs /></MainLayout>} />
        <Route path="/switch-accountant" element={<MainLayout><SwitchAccountant /></MainLayout>} />
        <Route path="/refer-and-earn" element={<MainLayout><ReferAndEarn /></MainLayout>} />
        <Route path="/awards-accolades-accreditations" element={<MainLayout><Awards /></MainLayout>} />
        <Route path="/schedule-a-phone-call-or-video-meeting" element={<MainLayout><ScheduleCall /></MainLayout>} />
        <Route path="/taxation" element={<MainLayout><Taxation /></MainLayout>} />
        <Route path="/accounts" element={<MainLayout><Accounts /></MainLayout>} />
        <Route path="/accounts/bookkeeping-services/" element={<MainLayout><BookkeepingServices /></MainLayout>} />
        <Route path="/accounts/payroll-services" element={<MainLayout><PayrollServices /></MainLayout>} />
        <Route path="/accounts/hmrc-self-assessment-tax-returns-accountant" element={<MainLayout><SelfAssessment /></MainLayout>} />
        <Route path="/accounts/auto-enrolment-pension-contributions/" element={<MainLayout><Pensions /></MainLayout>} />
        <Route path="/accounts/financial-forecasting/" element={<MainLayout><FinancialForecasting /></MainLayout>} />
        <Route path="/company-formation" element={<MainLayout><CompanyFormation /></MainLayout>} />
        <Route path="/registered-address" element={<MainLayout><RegisteredAddress /></MainLayout>} />
        <Route path="/company-secretarial" element={<MainLayout><CompanySecretarial /></MainLayout>} />
        <Route path="/employment-agreement" element={<MainLayout><EmploymentAgreement /></MainLayout>} />
        <Route path="/share-transfer" element={<MainLayout><ShareTransfer /></MainLayout>} />
        <Route path="/legal" element={<MainLayout><Legal /></MainLayout>} />
        <Route path="/software" element={<MainLayout><Software /></MainLayout>} />
        <Route path="/banks" element={<MainLayout><Banks /></MainLayout>} />
        <Route path="/taxation/company-tax-return-accountants" element={<MainLayout><CompanyTaxReturn /></MainLayout>} />
        <Route path="/taxation/vat-accountants" element={<MainLayout><VatAccountants /></MainLayout>} /> 
        <Route path="/taxation/inheritance-tax-planning" element={<MainLayout><InheritanceTaxPlanning /></MainLayout>} />
        <Route path="/taxation/emi-schemes" element={<MainLayout><EmiSchemesPage /></MainLayout>} />
        <Route path="/taxation/let-property-campaign" element={<MainLayout><LetPropertyCampaign /></MainLayout>} />
        <Route path="/taxation/worldwide-disclosure-facility" element={<MainLayout><WorldwideDisclosureFacility /></MainLayout>} />
        <Route path="/taxation/cryptocurrency" element={<MainLayout><CryptocurrencyTax /></MainLayout>} />
        <Route path="/taxation/personal-income-tax-professionals-and-chartered-accountants" element={<MainLayout><PersonalIncomeTax /></MainLayout>} />

        {/* New Accounting Routes */}

        <Route path="/accounts/annual-accounts" element={<MainLayout><AnnualAccounts /></MainLayout>} />
        <Route path="/accounts/statutory-accounts" element={<MainLayout><StatutoryAccounts /></MainLayout>} />
        <Route path="/accounts/management-accounts" element={<MainLayout><ManagementAccounts /></MainLayout>} />
        <Route path="/accounts/consolidated-accounts" element={<MainLayout><ConsolidatedAccounts /></MainLayout>} />
        <Route path="/accounts/cash-flow-forecasting" element={<MainLayout><CashFlowForecasting /></MainLayout>} />

        {/* New Package Routes */}
        <Route path="/packages/sole-trader" element={<MainLayout><SoleTraderPackage /></MainLayout>} />
        <Route path="/packages/sole-trader-pricing" element={<MainLayout><SoleTraderPackage /></MainLayout>} />
        <Route path="/packages/ltd-company" element={<MainLayout><LtdCompanyPackage /></MainLayout>} />
        <Route path="/packages/ltd-company-pricing" element={<MainLayout><LtdCompanyPackage /></MainLayout>} />
        <Route path="/packages/contractor-ltd" element={<MainLayout><ContractorLtdPackage /></MainLayout>} />
        <Route path="/packages/contractor-ltd-pricing" element={<MainLayout><ContractorLtdPackage /></MainLayout>} />
        <Route path="/packages/landlords" element={<MainLayout><LandlordsPackage /></MainLayout>} />
        <Route path="/packages/landlords-3" element={<MainLayout><LandlordsPackage /></MainLayout>} />
        <Route path="/packages/spvs-ltd" element={<MainLayout><SpvsLtdPackage /></MainLayout>} />
        <Route path="/packages/spvs-ltd-pricing" element={<MainLayout><SpvsLtdPackage /></MainLayout>} />
        <Route path="/packages/charities" element={<MainLayout><CharitiesPackage /></MainLayout>} />
        <Route path="/packages/charities-pricing" element={<MainLayout><CharitiesPackage /></MainLayout>} />

        {/* General Routes */}
        <Route path="/refer-a-friend" element={<MainLayout><ReferAFriend /></MainLayout>} />
        <Route path="/privacy-policy" element={<MainLayout><PrivacyPolicy /></MainLayout>} />
        
        {/* Dynamic Industry Routes */}
        <Route path="/industries/:slug" element={<MainLayout><IndustryPage /></MainLayout>} />
        <Route path="/charities" element={<MainLayout><IndustryPage slug="charities" /></MainLayout>} />

        {/* Dynamic Package Routes */}
        <Route path="/packages/:slug" element={<MainLayout><PackagePage /></MainLayout>} />

        {/* Dynamic Taxation Routes */}
        <Route path="/taxation/:slug" element={<MainLayout><TaxationSubPage /></MainLayout>} />

        {/* Catch-all for imported WordPress Pages */}
        <Route path="*" element={<MainLayout><DynamicWpPage /></MainLayout>} />
      </Routes>
      <IDVerificationModal />
    </Router>
  );
}

export default App;
