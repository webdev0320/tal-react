import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import SwitchAccountant from './pages/SwitchAccountant';
import ReferAndEarn from './pages/ReferAndEarn';
import Awards from './pages/Awards';
import ScheduleCall from './pages/ScheduleCall';
import Taxation from './pages/Taxation';
import Accounts from './pages/Accounts';
import Legal from './pages/Legal';
import CompanyFormation from './pages/CompanyFormation';
import RegisteredAddress from './pages/RegisteredAddress';
import CompanySecretarial from './pages/CompanySecretarial';
import EmploymentAgreement from './pages/EmploymentAgreement';
import ShareTransfer from './pages/ShareTransfer';
import Software from './pages/Software';
import Banks from './pages/Banks';
import BookkeepingServices from './pages/BookkeepingServices';
import PayrollServices from './pages/PayrollServices';
import SelfAssessment from './pages/SelfAssessment';
import Pensions from './pages/Pensions';
import FinancialForecasting from './pages/FinancialForecasting';
import IndustryPage from './pages/IndustryPage';
import PackagePage from './pages/PackagePage';
import TaxationSubPage from './pages/TaxationSubPage';

// New Imports
import AnnualAccounts from './pages/AnnualAccounts';
import StatutoryAccounts from './pages/StatutoryAccounts';
import ManagementAccounts from './pages/ManagementAccounts';
import CashFlowForecasting from './pages/CashFlowForecasting';
import SoleTraderPackage from './pages/SoleTraderPackage';
import LtdCompanyPackage from './pages/LtdCompanyPackage';
import ContractorLtdPackage from './pages/ContractorLtdPackage';
import LandlordsPackage from './pages/LandlordsPackage';
import SpvsLtdPackage from './pages/SpvsLtdPackage';
import CharitiesPackage from './pages/CharitiesPackage';
import ReferAFriend from './pages/ReferAFriend';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CompanyTaxReturn from './pages/CompanyTaxReturn';
import VatAccountants from './pages/VatAccountants';
import InheritanceTaxPlanning from './pages/InheritanceTaxPlanning';
import EmiSchemesPage from './pages/EmiSchemes';
import LetPropertyCampaign from './pages/LetPropertyCampaign';
import WorldwideDisclosureFacility from './pages/WorldwideDisclosureFacility';
import CryptocurrencyTax from './pages/CryptocurrencyTax';
import PersonalIncomeTax from './pages/PersonalIncomeTax';
import ConsolidatedAccounts from './pages/ConsolidatedAccounts';
import SingleBlog from './pages/SingleBlog';
import MainLayout from './components/Layout/MainLayout';

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
      </Routes>
    </Router>
  );
}

export default App;
