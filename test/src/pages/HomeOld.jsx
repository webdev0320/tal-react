```jsx
import React, { useState } from 'react';

// Reusable Star SVG
const StarIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 inline-block mx-0.5 fill-current text-yellow-500">
    <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path>
  </svg>
);

// Reusable Checkmark SVG (for 'Who Do WE Help' section)
const CheckmarkIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline-block mr-2 fill-current text-green-500">
    <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path>
  </svg>
);

// Reusable Accordion SVG icons (for FAQs)
const ChevronDownIcon = () => (
  <svg viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline-block mr-2 fill-current">
    <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
  </svg>
);

const ChevronUpIcon = () => (
  <svg viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline-block mr-2 fill-current">
    <path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"></path>
  </svg>
);

const ServiceItem = ({ title, description, icon: IconComponent, href }) => (
  <div className="mb-6">
    {href ? (
      <a href={href} className="block text-blue-600 hover:underline" aria-label={title}>
        <div className="flex items-center">
          {IconComponent && <IconComponent />}
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
        </div>
      </a>
    ) : (
      <div className="flex items-center">
        {IconComponent && <IconComponent />}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
      </div>
    )}
    <p className="text-gray-700">{description}</p>
  </div>
);

const ContactItem = ({ icon: IconComponent, title, value, href }) => (
    <div className="flex items-center gap-2 mb-4">
        {IconComponent && <IconComponent />}
        <h3 className="text-lg font-semibold">
            {href ? (
                <a href={href} className="text-blue-600 hover:underline">{title}</a>
            ) : title}
        </h3>
        {value && (
            <p className="text-gray-700">
                {href ? (
                    <a href={href} className="text-blue-600 hover:underline">{value}</a>
                ) : value}
            </p>
        )}
    </div>
);


// Main Component
const HomeOld = () => {
  const [activeTab, setActiveTab] = useState('QUICKBOOKS');
  const [activeFaq, setActiveFaq] = useState(null);

  const starIcons = Array.from({ length: 10 }).map((_, i) => <StarIcon key={i} />);

  const serviceData = [
    { title: "Self Assessment Tax Accountant", description: "Login made easy. Get help with registering and filing your self-assessment tax return accurately and on time.", href: "/accounts/hmrc-self-assessment-tax-returns-accountant" },
    { title: "Payroll Services", description: "Stress-free online payroll outsourcing services for small and medium businesses. Accurate and Compliant.", href: "/accounts/payrol-services-for-small-and-medium-business" },
    { title: "Income Tax Accountant", description: "Expert personal income tax accountant services. Top professionals ensuring accurate tax filing and maximum saving.", href: "/taxation/personal-income-tax-professionals-and-chartered-accountants" },
    { title: "Inheritance Tax Planning", description: "Expert inheritance tax advice near you to protect your wealth. Personalised estate planning tips for your family’s future.", href: "/taxation/inheritance-tax-planning-advisors" },
    {
      title: "Worldwide Disclosure Facility", description: "Expert HMRC tax accountant advice to help you safely disclose offshore income in the UK and avoid penalties.", href: "/worldwide-disclosure-facility",
      icon: () => (
        <svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2 fill-current">
          <path d="M128 148v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12zm140 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-128 96h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm128 0h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-76 84v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm76 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm180 124v36H0v-36c0-6.6 5.4-12 12-12h19.5V24c0-13.3 10.7-24 24-24h337c13.3 0 24 10.7 24 24v440H436c6.6 0 12 5.4 12 12zM79.5 463H192v-67c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v67h112.5V49L80 48l-.5 415z"></path>
        </svg>
      )
    },
    {
      title: "Let Property Campaign", description: "Clear and trusted tax advice to help you disclose your rental income to HMRC, handle submissions and stay penalty-free",
      icon: () => (
        <svg aria-hidden="true" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2 fill-current">
          <path d="M288 115L69.47 307.71c-1.62 1.46-3.69 2.14-5.47 3.35V496a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V311.1c-1.7-1.16-3.72-1.82-5.26-3.2zm96 261a8 8 0 0 1-8 8h-56v56a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8v-56h-56a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8h56v-56a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v56h56a8 8 0 0 1 8 8zm186.69-139.72l-255.94-226a39.85 39.85 0 0 0-53.45 0l-256 226a16 16 0 0 0-1.21 22.6L25.5 282.7a16 16 0 0 0 22.6 1.21L277.42 81.63a16 16 0 0 1 21.17 0L527.91 283.9a16 16 0 0 0 22.6-1.21l21.4-23.82a16 16 0 0 0-1.22-22.59z"></path>
        </svg>
      )
    },
    {
      title: "Non- UK Resident Taxation", description: "Advice by expert taxation accountants, guiding Non-UK resients for compliance and helping them in UK tax rules.",
      icon: () => (
        <svg aria-hidden="true" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2 fill-current">
          <path d="M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z"></path>
        </svg>
      )
    },
    { title: "film-tax-relief", description: "Empowering creativity, boosting growth, ensuring your production qualifies and helping you claim UK film tax credits.", href: "/film-tax-relief" },
    {
      title: "Cryptocurrency", description: "Trusted accountants helping you report transactions, calculate tax on crypto gains while staying in line with Crypto tax rules.", href: "http://cryptocurrency",
      icon: () => (
        <svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2 fill-current">
          <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z"></path>
        </svg>
      )
    },
    { title: "Capital Gain Tax", description: "Get expert capital gains tax advice from trusted and specialist accountants for minimising liabilities and letting relief.", href: "/taxation/capital-gains-tax-accountant" },
    { title: "SEIS/EIS Tax Relief", description: "Save money, claim tax relief, and grow your investments with SEIS tax relief advice and support by expert EIS accountants.", href: "/taxation/seed-enterprise-investment-scheme-tax-relief" },
    { title: "Estate Tax Planning", description: "Structure your wealth the best, reduce liabilities, and secure your family's financial future with our expert estate tax accountants.", href: "http://ht/taxation/estate-and-property-tax-planning-accountants" },
  ];

  const clientLogos = Array.from({ length: 16 }).map((_, i) => ({
    src: `/wp-content/uploads/2024/11/${i + 1}.png`,
    alt: `Client ${i + 1}`,
  }));

  const achievementImages = [
    { src: "/wp-content/uploads/2025/04/Team-2-1.jpg", alt: "Team 2" },
    { src: "/wp-content/uploads/2025/04/Team-3-1.jpg", alt: "Team 3" },
    { src: "/wp-content/uploads/2025/03/cosmetologist-1-2.jpg", alt: "Cosmetologist" },
    { src: "/wp-content/uploads/2025/03/gallery-36.png", alt: "Gallery 36" },
    { src: "/wp-content/uploads/2025/03/gallery-35.png", alt: "Gallery 35" },
    { src: "/wp-content/uploads/2025/03/gallery-34.png", alt: "Gallery 34" },
    { src: "/wp-content/uploads/2025/03/WhatsApp-Image-2025-02-28-at-14.29.50_7903bb51-1152x1536.jpg", alt: "WhatsApp Image 1" },
    { src: "/wp-content/uploads/2025/03/WhatsApp-Image-2025-02-28-at-14.31.06_6acc2339-1536x1152.jpg", alt: "WhatsApp Image 2" },
    { src: "/wp-content/uploads/2025/04/Post-4.jpg", alt: "Post 4" },
    { src: "/wp-content/uploads/2025/03/Team-2-1.jpg", alt: "Team 2" },
  ];

  const industriesWeHelp = [
    { title: "IT Professional", href: "/industries/it-professionals/" },
    { title: "Construction", href: "/industries/construction/" },
    { title: "Hospitality", href: "/industries/hospitality/" },
    { title: "Auto Mobile", href: "/industries/automobile/" },
    { title: "Non-UK-Resident", href: "/industries/non-uk-resident-taxation/" },
    { title: "Real Estate", href: "/industries/real-estate/" },
    { title: "Restaurants", href: "/industries/restaurants/" },
    { title: "Ecommerce", href: "/industries/ecommerce/" },
    { title: "Health Care", href: "/industries/healthcare-professionals/" },
    { title: "Charity", href: "/industries/charity/" },
    { title: "Wholesale & Retailers", href: "/industries/wholesellers-retailers/" },
    { title: "Expatriates", href: "/industries/expatriates/" },
    { title: "Leisure Industry", href: "/industries/leisure-industry/" },
    { title: "Logistics", href: "/industries/logistics/" },
  ];

  const softwareTabs = [
    { name: "QUICKBOOKS", content: (
        <>
          <h3 className="text-xl font-bold mb-2"><strong>QUICKBOOKS</strong></h3>
          <p className="mb-4">Taxaccolega sees QuickBooks not only as a tool but as a One Stop Solution for organizing the finances of your company. One can envision smoothly managing payroll, automatically handling VAT returns, and easily tracking costs, all simultaneously. QuickBooks makes your accounting work easier whether you are a freelancer or an expanding SME, so you can focus on growing your company. Taxaccolega being QuickBooks certified accountants customizes the software for you, therefore guaranteeing your tax filing, financial reports always on target, and providing current insights. Let us demonstrate to you how QuickBooks might revolutionize your company&apos;s workflow. <a href="/quickbooks/" className="text-blue-600 hover:underline"><strong>Read More</strong></a></p>
        </>
      )
    },
    { name: "SAGE", content: (
        <>
          <h3 className="text-xl font-bold mb-2"><strong>SAGE</strong></h3>
          <p className="mb-4">Your Finances with Advanced Software Solutions</p>
          <p className="mb-4">As a leading Chartered Accounting firm in London, we specialise in Xero Accounting software. We provide comprehensive accounting and tax advisory services for startups, small businesses, and eCommerce vendors. As Xero Platinum Partners, we simplify financial processes, offer expert migration assistance, and recommend third-party Xero apps. Enhance your business with our personalised support and cutting-edge solutions today!</p>
        </>
      )
    },
    { name: "BTC SOFTWARE", content: (
        <>
          <h3 className="text-xl font-bold mb-2"><strong>BTC SOFTWARE</strong></h3>
          <p className="mb-4">BTC, an Ideal accounting software for companies searching for a complete tax and accounting solution in Croydon and London. At Taxaccolega, our BTC Software accountants make it easy for businesses to negotiate capital allowances, company tax returns, and tax compliance chores. Our BTC Software professionals guarantee compliance with HMRC regardless of handling regular accounting tasks or automating tax return.</p>
          <p className="mb-4">Streamlining your tax returns for dependable and efficient financial management, BTC Software integrates effortlessly with HMRC. We help to optimize your tax savings and make certain seamless operation by means of Custom BTC Software Help that our team offers. Trust and try the top-rated chartered accountant at Taxaccolega to assist you to maximize the use of BTC Software for effective and secure financial management and you will not be let down. <a href="/btc-softwares/" className="text-blue-600 hover:underline"><strong>Read More</strong></a></p>
        </>
      )
    },
    { name: "VT SOFTWARE", content: (
        <>
          <h3 className="text-xl font-bold mb-2"><strong>VT SOFTWARE</strong></h3>
          <p className="mb-4">Running a small business in London or Croydon entails managing several balls simultaneously. VT Software takes your place as your unobtrusive assistant in budgeting, tax returns, and financial reports running. It is the tool that runs in the background keeping everything in order when your business is on the front or in center. VT Software enables you to manage the basics with least effort and utmost effectiveness, whether you run a startup or work as a freelancer.</p>
          <p className="mb-4">Taxaccolega accountants save your time even more than you probably want to save. This is why we walk you through the easy installation of VT Software so you can start running soon. Having access to live financial information, you can surely handle VAT returns and keep up with your tax duties. We will show you how VT Software may be the unobtrusive, behind-the-scenes solution that helps your company run smoothly and stress-free. <a href="/vt-softwares/" className="text-blue-600 hover:underline"><strong>Read More</strong></a></p>
        </>
      )
    },
    { name: "TAXCALC", content: (
        <>
          <h3 className="text-xl font-bold mb-2"><strong>TAXCALC</strong></h3>
          <p className="mb-4">Running a small business in London or Croydon entails managing several balls simultaneously. VT Software takes your place as your unobtrusive assistant in budgeting, tax returns, and financial reports running. It is the tool that runs in the background keeping everything in order when your business is on the front or in center. VT Software enables you to manage the basics with least effort and utmost effectiveness, whether you run a startup or work as a freelancer.</p>
          <p className="mb-4">Taxaccolega accountants save your time even more than you probably want to save. This is why we walk you through the easy installation of VT Software so you can start running soon. Having access to live financial information, you can surely handle VAT returns and keep up with your tax duties. We will show you how VT Software may be the unobtrusive, behind-the-scenes solution that helps your company run smoothly and stress-free. <a href="/vt-softwares/" className="text-blue-600 hover:underline"><strong>Read More</strong></a></p>
        </>
      )
    },
    { name: "FREEAGENT", content: (
        <>
          <h3 className="text-xl font-bold mb-2"><strong>FREEAGENT</strong></h3>
          <p className="mb-4">We are accredited accountants serving small businesses and contractors throughout the UK. Our core belief is in enhancing your business’s financial transparency, achieved through award-winning cloud accounting software, Free Agent. As accredited Free Agent accountants for 2022, we offer seamless services to both existing Free Agent users and newcomers. We efficiently synchronise all your financial transactions onto our platform and provide complimentary training to ensure proficiency with Free Agent accounting software. Switching to our services is hassle-free, with a streamlined process that assures a swift and straightforward transfer of your financial data, eliminating data loss risks. From day one, we are well-prepared to manage your financial records, making it easy for us to collaborate and address any accounting challenges.</p>
          <img width="800" height="534" src="/wp-content/uploads/2024/07/Free-agent.jpg" alt="Free agent software"
            srcSet="/wp-content/uploads/2024/07/Free-agent.jpg 1024w, /wp-content/uploads/2024/07/Free-agent-600x400.jpg 600w, /wp-content/uploads/2024/07/Free-agent-300x200.jpg 300w, /wp-content/uploads/2024/07/Free-agent-768x512.jpg 768w"
            sizes="(max-width: 800px) 100vw, 800px"
            className="my-4 rounded-lg shadow-md"
          />
        </>
      )
    },
    { name: "XERO", content: (
        <>
          <h3 className="text-xl font-bold mb-2"><strong>XERO</strong></h3>
          <p className="mb-4">Imagine having the power to control and steer your finances, not just manage them. Xero serves as a financial control center, not just accounting software for companies in London and Croydon. Xero offers you a coherent, up-to-date picture of the financial condition of your company regardless of whether you&apos;re reconciling your bank accounts, monitoring cash flow, or getting ready for VAT returns. Perfect for companies that rely on efficiency and invention, it integrates effortlessly with third-party applications. </p>
          <p className="mb-4">Taxaccolega changes the way you use Xero; we don&apos;t just get you started with it. With our expertise in Xero software, we assist you go deep into the program, revealing sophisticated capabilities such project tracking, multi-currency support, and automatic invoicing. Taxaccolega lets Xero be more than just a tool; it is your growth partner who gives you active information from your numbers and enables you to make better business decisions more quickly. <a href="/xero/" className="text-blue-600 hover:underline"><strong>Read More</strong></a></p>
        </>
      )
    },
  ];

  const faqs = [
    {
      question: "What is the process for non-domiciled tax filings?",
      answer: "Non-domiciled individuals first report UK income and can choose to pay tax on foreign income only when the income is brought in to the UK. From April 2025 new rules will apply. so it’s worth checking your tax status, as new arrivals qualify for 100% tax relief on foreign income and gains during their first 4 years in the UK."
    },
    {
      question: "What should I do if I’ve missed a tax deadline?",
      answer: "Act quickly file or pay as immediately to avoid penalties and interest. Then contact HMRC or your tax consultant to discuss late filing or paying."
    },
    {
      question: "What’s the difference between tax avoidance and tax evasion?",
      answer: "Tax avoidance occurs within legal confines to reduce taxation whereas tax evasion is illegal and involves deliberately hiding income or falsifying information. We guide to help you to stay in compliance and legality."
    },
    {
      question: "How can I reduce my tax bill legally?",
      answer: "You can reduce tax by using allowances, structuring income efficiently, claiming expenses, and timing income or asset sales smartly. We provide personalised tax planning to help you do this legally."
    },
    {
      question: "What should I do if I disagree with a tax bill or HMRC assessment?",
      answer: "You have the right to appeal or request a review. Start by contacting HMRC or your tax adviser quickly. We can help with appeals, negotiations, and representing you if needed."
    },
    {
      question: "How can I protect my business from future tax audits or disputes?",
      answer: "Maintain accurate records, stay compliant with reporting rules, and check your tax strategy regularly. We offer audit protection, risk evaluation, and ongoing support to keep you prepared."
    },
    {
      question: "How do I ensure compliance with the IR35 rules?",
      answer: "IR35 applies if you’re hired through a limited company but are actually an employee. Regular checking of your contracts and your employment status is important. We can examine your arrangements and advise you on compliance."
    },
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="py-4 text-sm text-gray-500">[Breadcrumb Placeholder]</div>

      {/* Google Reviews */}
      <section className="my-8 text-center">
        <img
          width="512"
          height="512"
          src="/wp-content/uploads/2025/03/google-logo.png"
          alt="Google logo"
          srcSet="/wp-content/uploads/2025/03/google-logo.png 512w, /wp-content/uploads/2025/03/google-logo-300x300.png 300w, /wp-content/uploads/2025/03/google-logo-100x100.png 100w, /wp-content/uploads/2025/03/google-logo-150x150.png 150w"
          sizes="(max-width: 512px) 100vw, 512px"
          className="mx-auto mb-4 w-32 h-32 object-contain"
        />
        <h2 className="text-3xl font-bold mb-2">Google</h2>
        <div className="flex justify-center mb-2">
          {starIcons}
        </div>
        <p className="text-lg font-bold">5.0</p>
        <p className="text-gray-600">Based on 187 Reviews</p>
      </section>

      {/* Trustpilot Reviews */}
      <section className="my-8 text-center">
        {/* The raw HTML had <h2>T</h2> then <h2>Trustpilot</h2> - assuming Trustpilot is the correct one. */}
        <h2 className="text-3xl font-bold mb-2">Trustpilot</h2>
        <div className="flex justify-center mb-2">
          {starIcons}
        </div>
        <p className="text-lg font-bold">4.9</p>
        <p className="text-gray-600">Based on 80 Reviews</p>
      </section>

      {/* Services Section */}
      <section className="my-12">
        <p className="text-lg text-gray-500 mb-2">Services</p>
        <h2 className="text-4xl font-extrabold mb-8">Why Choose Us</h2>
        <h2 className="text-3xl font-bold mb-6">Our Expertise</h2>
        <h3 className="text-2xl font-semibold mb-8">We are the largest online firm of accountants in London, United Kingdom.</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </section>

      {/* Our Clients and Collaborative Partners */}
      <section className="my-12">
        <h2 className="text-4xl font-extrabold mb-8">Our Clients and Collaborative Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {clientLogos.map((logo, index) => (
            <figure key={index} className="flex justify-center items-center p-2 border rounded-md shadow-sm">
              <img src={logo.src} alt={logo.alt} className="max-w-full h-auto object-contain max-h-24" />
            </figure>
          ))}
        </div>
      </section>

      {/* Our Promise to Clients */}
      <section className="my-12 bg-gray-50 p-8 rounded-lg">
        <p className="text-xl font-semibold text-center mb-4">Your Tax, Our Expertise</p>
        <h2 className="text-4xl font-extrabold text-center mb-6">The promptest response is <span className="text-orange-600">Guaranteed.</span></h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto mb-8">
          We understand that tax matters often take place at the last minute near the deadline dates. Taxaccolega can still accommodate you even at short notice. Nevertheless, this haste, our top-rated tax experts can still outdo and save handsome sums of money for you.
        </p>
        <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto mb-6">
          Tax returns, financial strategies, bookkeeping… this all can seem quite intimidating, but we assure you that you don't have to navigate it alone. We commit to giving you peace of mind by bringing clarity to complexity.
        </p>
        <p className="text-gray-700 text-center max-w-2xl mx-auto mb-8">
          <b>What’s next?</b> Get in touch for a free, no-obligation consultation – no pressure, just real, actionable guidance and let us take the tax stress off your shoulders.
        </p>
        <ul className="flex flex-col md:flex-row justify-center gap-4 mb-8">
          <li>
            <a href="tel:02083929375" className="text-blue-600 hover:underline block text-center">020 8392 9375</a>
          </li>
          <li>
            <a href="mailto:info@taxaccolega.co.uk" className="text-blue-600 hover:underline block text-center">info@taxaccolega.co.uk</a>
          </li>
          <li>
            <a href="https://wa.me/07471170484" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline block text-center">074 7117 0484</a>
          </li>
        </ul>
        <div className="text-center mb-8">
          <a role="button" className="inline-block bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors" href="#">
            Get In Touch
          </a>
        </div>
        <div className="text-center">
          <a href="https://www.google.com/search?q=taxaccolega+google+reviews&#038;sca_esv=297d5f19dea10a07&#038;sca_upv=1&#038;sxsrf=ADLYWIJ23bi6HGNvbxp15gnfhlga0Kxqeg%3A1720107419671&#038;source=hp&#038;ei=m8GGZvarJpaH7NYP1v-p2AE&#038;iflsig=AL9hbdgAAAAAZobPq_DmNkAfESl5SRggHQUhI1c0qF5J&#038;ved=0ahUKEwi25eO9242HAxWWA9sEHdZ_ChsQ4dUDCBU&#038;uact=5&#038;oq=taxaccolega+google+reviews&#038;gs_lp=Egdnd3Mtd2l6Ihp0YXhhY2NvbGVnYSBnb29nbGUgcmV2aWV3czIFECEYoAFIySBQAFjgHnAAeACQAQCYAY8CoAH-K6oBBDItMjW4AQPIAQD4AQGYAhmgAs8swgIQEC4YgAQYxwEYJxiKBRivAcICBBAjGCfCAgoQIxiABBgnGIoFwgIREC4YgAQYkQIY0QMYxwEYigXCAgsQABiABBiRAhiKBcICCxAAGIAEGLEDGIMBwgIFEAAYgATCAg4QABiABBixAxiDARiKBcICCBAAGIAEGLEDwgIFEC4YgATCAgcQABiABBgKwgILEC4YgAQYxwEYrwHCAggQABiABBiiBMICChAuGNEDGMcBGB7CAgQQABgewgIHECEYoAEYCpgDAJIHBDItMjWgB5-3AQ&#038;sclient=gws-wiz#lrd=0x48760640814ce7b7:0x4899b8fae2b5b21a,1,,,," target="_blank" rel="noopener noreferrer">
            <img width="489" height="75" src="/wp-content/uploads/2024/07/google-1.png" alt="Google reviews" srcSet="/wp-content/uploads/2024/07/google-1.png 489w, /wp-content/uploads/2024/07/google-1-300x46.png 300w" sizes="(max-width: 489px) 100vw, 489px" className="mx-auto" />
          </a>
        </div>
      </section>

      {/* Top Rated Chartered Accountants in London */}
      <section className="my-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-5xl font-extrabold mb-4">Top Rated Chartered Accountants in London - Local Tax &amp; Accounting Firm</h1>
          <h3 className="text-2xl font-bold mb-4"><strong>Discover Simple and Effective Accounting Solutions with Taxaccolega.</strong></h3>
          <p className="text-gray-700 mb-6">
            Taxaccolega wasn’t built to be just another accountancy firm. Since we don't just do the numbers, so it grew from a simple belief: real support goes beyond spreadsheets. It means promptly answering the call when a client’s unsure. It means patiently explaining things without using jargons. And it means celebrating growth, not just tracking it.
          </p>
          <a href="/about-us/" className="inline-block bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors">
            About-Us
          </a>
        </div>
        <div>
          <img
            width="2301"
            height="2540"
            src="/wp-content/uploads/2025/04/Tal-About-us-Section-Image-07.png"
            alt="About Us Section Image"
            srcSet="/wp-content/uploads/2025/04/Tal-About-us-Section-Image-07.png 2301w, /wp-content/uploads/2025/04/Tal-About-us-Section-Image-07-600x662.png 600w, /wp-content/uploads/2025/04/Tal-About-us-Section-Image-07-272x300.png 272w, /wp-content/uploads/2025/04/Tal-About-us-Section-Image-07-928x1024.png 928w, /wp-content/uploads/2025/04/Tal-About-us-Section-Image-07-768x848.png 768w, /wp-content/uploads/2025/04/Tal-About-us-Section-Image-07-1391x1536.png 1391w, /wp-content/uploads/2025/04/Tal-About-us-Section-Image-07-1855x2048.png 1855w"
            sizes="(max-width: 2301px) 100vw, 2301px"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="lg:col-span-2 mt-8">
          <p className="text-gray-700">
            Chartered Accountants are financial professionals with specialised knowledge and expertise in tax laws, accounting, and financial management. They’re an essential resource for anyone seeking to optimise their tax efficiency and financial performance. Below, we’ll explore the different types of individuals and businesses who can benefit from chartered accountant services:
          </p>
        </div>
      </section>

      {/* Our Achievements */}
      <section className="my-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <img
            width="800"
            height="800"
            src="/wp-content/uploads/2025/04/TAL-Website-1.jpg"
            alt="Taxaccolega Website Illustration"
            srcSet="/wp-content/uploads/2025/04/TAL-Website-1.jpg 1008w, /wp-content/uploads/2025/04/TAL-Website-1-300x300.jpg 300w, /wp-content/uploads/2025/04/TAL-Website-1-100x100.jpg 100w, /wp-content/uploads/2025/04/TAL-Website-1-600x600.jpg 600w, /wp-content/uploads/2025/04/TAL-Website-1-150x150.jpg 150w, /wp-content/uploads/2025/04/TAL-Website-1-768x768.jpg 768w"
            sizes="(max-width: 800px) 100vw, 800px"
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Our Achievements</h3>
          <h2 className="text-4xl font-extrabold mb-4">Taxaccolega — Award-Winning. Accredited. Trusted.</h2>
          <p className="text-gray-700 mb-6">
            From prestigious ACCA and ICAEW certifications and accreditations to honours from mayors, media, business networks, and industry leaders, Taxaccolega is more than just an accountancy firm. Being the top-rated, we are a symbol of trust, professional excellence and community-driven impact. Our accreditations, recognitions, and awards have backend stories of commitment. They reflect years of dedication to our clients, the people we proudly serve, and our craft. Whether you're a budding startup, a growing business, managing wealth, or an opportunistic like a seasoned investor, you're in safe and certified hands backed by top-rated chartered accountants and a team that will always go the extra mile for you.
          </p>
          <a href="/awards-accolades-accreditations/" className="inline-block bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors">
            Achievements
          </a>
        </div>
        <div className="lg:col-span-2 mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
          {achievementImages.map((image, index) => (
            <figure key={index} className="flex justify-center items-center p-2">
              <img src={image.src} alt={image.alt} className="max-w-full h-auto object-contain rounded-md shadow-sm" />
            </figure>
          ))}
        </div>
      </section>

      {/* The UK's Largest Online Accountants */}
      <section className="my-12">
        <h2 className="text-4xl font-extrabold mb-6">The UK's Largest Online Accountants</h2>
        <p className="text-gray-700 mb-4">
          Taxaccolega isn’t your average accounting firm. We’re a team of passionate online accountants dedicated to empowering businesses in the UK with the tools and support they need to thrive.
        </p>
        <p className="text-gray-700 mb-4">
          We are the largest online accounting company in the United Kingdom, leveraging technology to provide a seamless and efficient experience for our clients.
        </p>
        <p className="text-gray-700 mb-4">
          But size doesn’t mean impersonal service. At Taxaccolega, you’ll get a dedicated accountant who understands your unique business needs.
        </p>
        <p className="text-gray-700 mb-6">
          To learn more about how we can help you grow your business, <strong><a href="/contact-us/" className="text-blue-600 hover:underline">contact us today</a></strong>:
        </p>
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <a href="https://www.trustpilot.com/review/taxaccolega.co.uk" target="_blank" rel="noopener noreferrer" className="block">
            <img width="800" height="123" src="/wp-content/uploads/2024/07/Trustpilot-1024x157.png" alt="Trustpilot reviews" srcSet="/wp-content/uploads/2024/07/Trustpilot-1024x157.png 1024w, /wp-content/uploads/2024/07/Trustpilot-600x92.png 600w, /wp-content/uploads/2024/07/Trustpilot-300x46.png 300w, /wp-content/uploads/2024/07/Trustpilot-768x118.png 768w, /wp-content/uploads/2024/07/Trustpilot-1536x236.png 1536w, /wp-content/uploads/2024/07/Trustpilot-2048x314.png 2048w" sizes="(max-width: 800px) 100vw, 800px" className="rounded-lg shadow-md" />
          </a>
          <a href="https://www.google.com/search?q=taxaccolega+google+reviews&#038;sca_esv=297d5f19dea10a07&#038;sca_upv=1&#038;sxsrf=ADLYWIJ23bi6HGNvbxp15gnfhlga0Kxqeg%3A1720107419671&#038;source=hp&#038;ei=m8GGZvarJpaH7NYP1v-p2AE&#038;iflsig=AL9hbdgAAAAAZobPq_DmNkAfESl5SRggHQUhI1c0qF5J&#038;ved=0ahUKEwi25eO9242HAxWWA9sEHdZ_ChsQ4dUDCBU&#038;uact=5&#038;oq=taxaccolega+google+reviews&#038;gs_lp=Egdnd3Mtd2l6Ihp0YXhhY2NvbGVnYSBnb29nbGUgcmV2aWV3czIFECEYoAFIySBQAFjgHnAAeACQAQCYAY8CoAH-K6oBBDItMjW4AQPIAQD4AQGYAhmgAs8swgIQEC4YgAQYxwEYJxiKBRivAcICBBAjGCfCAgoQIxiABBgnGIoFwgIREC4YgAQYkQIY0QMYxwEYigXCAgsQABiABBiRAhiKBcICCxAAGIAEGLEDGIMBwgIFEAAYgATCAg4QABiABBixAxiDARiKBcICCBAAGIAEGLEDwgIFEC4YgATCAgcQABiABBgKwgILEC4YgAQYxwEYrwHCAggQABiABBiiBMICChAuGNEDGMcBGB7CAgQQABgewgIHECEYoAEYCpgDAJIHBDItMjWgB5-3AQ&#038;sclient=gws-wiz#mpd=~13810665085480211432/customers/reviews" target="_blank" rel="noopener noreferrer" className="block">
            <img width="800" height="123" src="/wp-content/uploads/2024/07/Googleeeeeeeeeeee-1024x157.png" alt="Google reviews" srcSet="/wp-content/uploads/2024/07/Googleeeeeeeeeeee-1024x157.png 1024w, /wp-content/uploads/2024/07/Googleeeeeeeeeeee-600x92.png 600w, /wp-content/uploads/2024/07/Googleeeeeeeeeeee-300x46.png 300w, /wp-content/uploads/2024/07/Googleeeeeeeeeeee-768x118.png 768w, /wp-content/uploads/2024/07/Googleeeeeeeeeeee-1536x236.png 1536w, /wp-content/uploads/2024/07/Googleeeeeeeeeeee-2048x314.png 2048w" sizes="(max-width: 800px) 100vw, 800px" className="rounded-lg shadow-md" />
          </a>
        </div>
        <img
          width="800"
          height="560"
          src="/wp-content/uploads/2024/07/about-us-with-pic.png"
          alt="About us with picture"
          srcSet="/wp-content/uploads/2024/07/about-us-with-pic.png 1000w, /wp-content/uploads/2024/07/about-us-with-pic-600x420.png 600w, /wp-content/uploads/2024/07/about-us-with-pic-300x210.png 300w, /wp-content/uploads/2024/07/about-us-with-pic-768x538.png 768w"
          sizes="(max-width: 800px) 100vw, 800px"
          className="mt-8 rounded-lg shadow-md"
        />
      </section>

      {/* Get in Touch (Contact Section) */}
      <section className="my-12 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold mb-8 text-center">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ContactItem
            icon={() => (
              <svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600 fill-current">
                <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
              </svg>
            )}
            title="Phone Number"
            value="020 8127 0728"
            href="tel:02081270728"
          />
          <ContactItem
            icon={() => (
              <svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-500 fill-current">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
              </svg>
            )}
            title="Whatsapp"
            value="074 7117 0484"
            href="https://wa.me/07471170484"
          />
          <ContactItem
            icon={() => (
              <svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-600 fill-current">
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
              </svg>
            )}
            title="Email"
            value="info@taxaccolega.co.uk"
            href="mailto:info@taxaccolega.co.uk"
          />
          <ContactItem
            icon={() => (
              <svg aria-hidden="true" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-700 fill-current">
                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
              </svg>
            )}
            title="Address"
            value="187a London Road, Croydon, Surrey, CR0 2RJ"
          />
        </div>

        <div className="my-8">
          <iframe
            loading="lazy"
            src="https://maps.google.com/maps?q=187a%20London%20Road%2C%20Croydon%2C%20Surrey%2C%20CR0%202RJ&#038;t=m&#038;z=11&#038;output=embed&#038;iwloc=near"
            title="187a London Road, Croydon, Surrey, CR0 2RJ"
            aria-label="187a London Road, Croydon, Surrey, CR0 2RJ"
            className="w-full h-80 rounded-lg shadow-inner"
          ></iframe>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-center">Send Us a Message</h2>
        <form method="post" name="New Form" className="max-w-xl mx-auto space-y-4">
          <input type="hidden" name="post_id" value="12" />
          <input type="hidden" name="form_id" value="9633850" />
          <input type="hidden" name="referer_title" value="" />
          <div>
            <label htmlFor="form-field-name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input type="text" name="form_fields[name]" id="form-field-name" placeholder="Name" className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="form-field-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" name="form_fields[email]" id="form-field-email" placeholder="Email" required aria-required="true" className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="form-field-message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea name="form_fields[message]" id="form-field-message" rows="7" placeholder="Message" className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
            Send
          </button>
        </form>
      </section>

      {/* Who Do WE Help */}
      <section className="my-12">
        <h2 className="text-4xl font-extrabold mb-8 text-center">Who Do WE Help</h2>
        <img
          width="300"
          height="267"
          src="/wp-content/uploads/2025/04/Tal-About-us-Section-Image-05-300x267.png"
          alt="Illustration of professionals"
          srcSet="/wp-content/uploads/2025/04/Tal-About-us-Section-Image-05-300x267.png 300w, /wp-content/uploads/2025/04/Tal-About-us-Section-Image-05-600x534.png 600w, /wp-content/uploads/2025/04/Tal-About-us-Section-Image-05-1024x912.png 1024w, /wp-content/uploads/2025/04/Tal-About-us-Section-Image-05-768x684.png 768w, /wp-content/uploads/2025/04/Tal-About-us-Section-Image-05-1536x1368.png 1536w, /wp-content/uploads/2025/04/Tal-About-us-Section-Image-05-2048x1824.png 2048w"
          sizes="(max-width: 300px) 100vw, 300px"
          className="mx-auto my-8 rounded-lg shadow-md"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {industriesWeHelp.map((industry, index) => (
            <a key={index} href={industry.href} className="flex items-center p-4 border rounded-md shadow-sm hover:shadow-md transition-shadow">
              <CheckmarkIcon />
              <h3 className="text-lg font-semibold text-blue-600 hover:underline">{industry.title}</h3>
            </a>
          ))}
        </div>

        <p className="text-gray-700 mb-4">
          If your current accountant / accounting firm is unable to compile your accounts and figures or not being up to the mark that you expect, it may be time for a change. Though changing accountants might be intimidating, we follow the correct procedures and make it simple, stress-free, and profitable for your company.
        </p>
        <p className="text-gray-700 mb-4">
          Top-rated Chartered Accountants at Taxaccolega, with professional accounting experience serving UK clients since 2011, make the entire transition process of changing an accountant easy for you. Whether you are upset due to poor communication, no tax-saving ideas, or hidden costs, our accounting is transparent, proactive, and client-centered.
        </p>
        <p className="text-gray-700 mb-6">
          Don’t settle for mediocre service. Switch today! Get in touch for a smooth, stress-free transition.
        </p>
        <a href="/switch-accountant/" className="inline-block bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors">
          Switch Account
        </a>
      </section>

      {/* Project Statistics */}
      <section className="my-12 text-center bg-blue-600 text-white p-8 rounded-lg shadow-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <p className="text-5xl font-extrabold mb-2">1+</p>
            <p className="text-xl font-semibold">Project Completed</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold mb-2">1+</p>
            <p className="text-xl font-semibold">Client Satisfication</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold mb-2">1+</p>
            <p className="text-xl font-semibold">Business Consultant</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold mb-2">1+</p>
            <p className="text-xl font-semibold">Awards</p>
          </div>
        </div>
      </section>

      {/* Speak To the UK's Top Rated Chartered Accountant Today */}
      <section className="my-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-extrabold mb-4">Speak To the UK's</h2>
          <h2 className="text-4xl font-extrabold text-orange-600 mb-6">Top Rated Chartered Accountant Today</h2>
          <h3 className="text-2xl font-bold mb-4">Are you looking for a local accountant you can trust?</h3>
          <p className="text-gray-700 mb-4">
            Our expert tax consultants, tax specialists, and chartered accountants at Taxaccolega are top-rated in the UK. Whether you need online accountant services or prefer a face-to-face meeting with an accountant in London, consider us always at your doorstep.
          </p>
          <p className="text-gray-700 mb-4">
            Book a call or video meeting with one of our experienced and specialist UK accountants today. Whether you’re looking for an online accountant in Croydon or a chartered accountant in London, UK, get to know how our personalized solutions can take your business off,
          </p>
          <p className="text-gray-700 mb-6">
            Let’s talk - schedule your free consultation now!
          </p>
          <a href="/schedule-a-phone-call-or-video-meeting/" className="inline-block bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors">
            Book a call &amp; Meeting
          </a>
        </div>
        <div>
          <img
            width="2500"
            height="2227"
            src="/wp-content/uploads/2025/04/Tal-About-us-Section-Image-03.png"
            alt="Taxaccolega About Us Section"
            srcSet="/wp-content/uploads/2025/04/Tal-About-us-Section-Image-03.png 2500w, /wp-content/uploads/2025/04/Tal-About-us-Section-Image-03-600x534.png 600w, /wp-content/uploads/2025/04/Tal-About-us-Section-Image-03-300x267.png 300w, /wp-content/uploads/2025/04/Tal-About-us-Section-Image-03-1024x912.png 1024w, /wp-content/uploads/2025/04/Tal-About-us-Section-Image-03-768x684.png 768w, /wp-content/uploads/2025/04/Tal-About-us-Section-Image-03-1536x1368.png 1536w, /wp-content/uploads/2025/04/Tal-About-us-Section-Image-03-2048x1824.png 2048w"
            sizes="(max-width: 2500px) 100vw, 2500px"
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Our Recent Google Reviews */}
      <section className="my-12 text-center bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold mb-4">Our Recent Google Reviews</h2>
        <figure className="mb-4">
          <img width="300" height="46" src="/wp-content/uploads/2024/07/Googleeeeeeeeeeee-300x46.png" alt="Google logo" className="mx-auto" />
        </figure>
        <h3 className="text-2xl font-bold mb-4">5.0 | 187 reviews</h3>
        <div className="text-gray-600">[Trustindex Google Reviews Widget Placeholder]</div>
      </section>

      {/* SOFTWARES Section */}
      <section className="my-12">
        <h2 className="text-4xl font-extrabold mb-8 text-center">SOFTWARES</h2>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {softwareTabs.map((tab) => (
            <button
              key={tab.name}
              className={`py-2 px-4 rounded-md text-sm font-medium ${
                activeTab === tab.name
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              } transition-colors`}
              onClick={() => setActiveTab(tab.name)}
              aria-selected={activeTab === tab.name}
              role="tab"
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
          {softwareTabs.find(tab => tab.name === activeTab)?.content}
        </div>
      </section>

      {/* Get in touch with the Taxaccolega Chartered Accountants team (bottom) */}
      <section className="my-12 bg-blue-100 p-8 rounded-lg text-center">
        <h2 className="text-4xl font-extrabold mb-6">Get in touch with the Taxaccolega Chartered Accountants team</h2>
        <p className="text-gray-700 mb-4 max-w-2xl mx-auto">
          Managing your finances is now easier. With years of expertise in accountancy and finance, Taxaccolega Chartered Accountants are here to eliminate the complexities of running your business. This ensures you can focus on your core activities worry-free. Your peace of mind is our priority, and our seasoned team of contractor accountants is ready to assist you with any accounting concerns.
        </p>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          You can stay on top of relevant industry news by checking out our blog page, where we discuss topical subjects to further help you answer any questions you may have regarding your accounts. If you wish to calculate your take-home pay, we provide a contractor tax calculator that will easily and quickly give you accurate results. To learn more about how we can help you grow your business, contact us today:
        </p>
        <a href="/contact-us/" className="inline-block bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors">
          Contact Us Today
        </a>
      </section>

      {/* Refer and Earn with Taxaccolega */}
      <section className="my-12 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold mb-6 text-center">Refer and Earn with Taxaccolega</h2>
        <p className="text-gray-700 mb-4 max-w-2xl mx-auto">
          Know someone who could benefit from expert accounting services or is probably unhappy or apprehensive with his/her current accountant? You can refer them to Taxaccolega and earn quite a handsome sum of money out of that payment! Whether you're a client, visitor, or a friend, our Refer and Earn programme is your nice chance to make some extra money reliably.
        </p>
        <ol className="list-decimal list-inside text-gray-700 mb-6 max-w-2xl mx-auto">
          <li>It’s easy! Just refer a new client to us, and once they sign up, you’ll receive a handsome percentage as a thank you for your referral. No limits, no complicated rules — just a straightforward way to earn for helping others. Start earning today by referring your friends, family, or colleagues to Taxaccolega. We’re here to take care of the numbers while you enjoy the rewards. </li>
        </ol>
        <div className="text-center">
          <a href="/refer-and-earn" className="inline-block bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors">
            Refer &amp; Earn
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section className="my-12">
        <h2 className="text-4xl font-extrabold mb-8 text-center">FAQs</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-md">
              <button
                className="flex justify-between items-center w-full p-4 text-left font-semibold text-lg bg-gray-50 hover:bg-gray-100 focus:outline-none rounded-t-md"
                onClick={() => toggleFaq(index)}
                aria-expanded={activeFaq === index}
                aria-controls={`faq-content-${index}`}
              >
                <div className="flex items-center">
                  {activeFaq === index ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  <span>{faq.question}</span>
                </div>
              </button>
              {activeFaq === index && (
                <div id={`faq-content-${index}`} className="p-4 text-gray-700 bg-white rounded-b-md">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer-like Contact Info */}
      <footer className="my-12 p-8 bg-gray-800 text-white rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact - Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 text-center">
            <div>
                <h3 className="text-xl font-semibold mb-2">Address</h3>
                <p>187a London Road, Croydon, Surrey, CR0 2RJ</p>
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p><a href="mailto:info@taxaccolega.co.uk" className="text-blue-300 hover:underline">info@taxaccolega.co.uk</a></p>
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-2">Phone No</h3>
                <p><a href="tel:02081270728" className="text-blue-300 hover:underline">020 8127 0728</a></p>
                <p><a href="https://wa.me/447471170484" className="text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer">074 7117 0484</a></p>
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
                <p>Monday - Friday</p>
                <p>9:00 am - 5:00 pm</p>
            </div>
        </div>

        <div className="flex justify-center gap-6 mb-8">
            <a href="https://www.facebook.com/Taxaccolega" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-300 hover:text-blue-400 transition-colors">
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2 fill-current"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
                Facebook
            </a>
            <a href="https://twitter.com/Taxaccolega" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-300 hover:text-blue-400 transition-colors">
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2 fill-current"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                Twitter
            </a>
            {/* Google Plus is deprecated, original HTML had "Jki-google-plus-g" as text without an SVG icon */}
            <a href="https://plus.google.com/u/0/100672948850520944033" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-300 hover:text-blue-400 transition-colors">
                Jki-google-plus-g
            </a>
        </div>


        <h2 className="text-3xl font-bold mb-6 text-center">Send Us a Message</h2>
        <form method="post" name="New Form Footer" className="max-w-xl mx-auto space-y-4">
          <input type="hidden" name="post_id" value="12" />
          <input type="hidden" name="form_id" value="977bb50" />
          <input type="hidden" name="referer_title" value="" />
          <div>
            <label htmlFor="form-field-name-footer" className="block text-sm font-medium text-gray-200 mb-1">Name</label>
            <input type="text" name="form_fields[name]" id="form-field-name-footer" placeholder="Name" className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="form-field-email-footer" className="block text-sm font-medium text-gray-200 mb-1">Email</label>
            <input type="email" name="form_fields[email]" id="form-field-email-footer" placeholder="Email" required aria-required="true" className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="form-field-message-footer" className="block text-sm font-medium text-gray-200 mb-1">Message</label>
            <textarea name="form_fields[message]" id="form-field-message-footer" rows="7" placeholder="Message" className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
            Send
          </button>
        </form>
      </footer>
    </div>
  );
};

export default HomeOld;
```
