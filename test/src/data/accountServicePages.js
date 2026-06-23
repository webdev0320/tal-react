export const accountServiceLinks = [
  { label: 'Bookkeeping', to: '/accounts/bookkeeping-services/' },
  { label: 'Statutory Accounts', to: '/accounts/statutory-accounts' },
  { label: 'Management Accounts', to: '/accounts/management-accounts' },
  { label: 'Payroll Services', to: '/accounts/payroll-services' },
  { label: 'Self-Assessment & Tax Return', to: '/accounts/hmrc-self-assessment-tax-returns-accountant' },
  { label: 'Pension & Auto Enrolment', to: '/accounts/auto-enrolment-pension-contributions/' },
  { label: 'Consolidated Accounts', to: '/accounts/consolidated-accounts' },
  { label: 'Financial Forecasting', to: '/accounts/financial-forecasting/' },
  { label: 'Cashflow Forecasting', to: '/accounts/cash-flow-forecasting' },
];

const contact = {
  phone: '020 8127 0728',
  whatsapp: '074 7117 0484',
  email: 'info@taxaccolega.co.uk',
  address: '187a London Road, Croydon, Surrey, CR0 2RJ',
};

const placeholder = (slug, filename, alt) => ({
  src: `/images/accounts/${slug}/${filename}.jpg`,
  alt,
});

export const accountServicePages = {
  bookkeeping: {
    eyebrow: 'Bookkeeping Services',
    title: 'Bookkeeping Services For Small and Medium Businesses in UK',
    subtitle: 'Taxaccolega online bookkeeping keeps records accurate, current, and useful before year-end pressure appears.',
    path: '/accounts/bookkeeping-services/',
    accent: 'Records that stay usable',
    stats: ['Cloud bookkeeping', 'VAT-ready records', 'London & UK support'],
    introTitle: "Bookkeeping does not usually fail suddenly. It slowly slips out of control.",
    intro: [
      "A few invoices are not recorded, expenses are left for later, and bank transactions stop matching what is in the system. At first, the business still runs, so nothing feels urgent.",
      "Then the numbers stop making sense. The records no longer reflect what is actually happening, and bookkeeping becomes something that needs to be corrected rather than simply maintained.",
      "Our bookkeeping services are built around consistency, so financial records remain clear throughout the year rather than being rescued at year end.",
    ],
    highlights: ['Accurate transaction records', 'Regular bank reconciliation', 'Cloud bookkeeping visibility', 'Expense and receipt tracking', 'Useful reporting foundations', 'VAT and accounts alignment'],
    sections: [
      {
        title: 'Built Around Control, Not Just Recording',
        body: [
          "Bookkeeping is often treated as a task to complete. In practice, it is the foundation of how a business understands its finances.",
          "Whether you need outsourced bookkeeping, online bookkeeping, or local bookkeeping support in London, the goal is the same: keep the records accurate, up to date, and usable.",
        ],
        bullets: ['accurate records', 'current reconciliations', 'usable financial data'],
      },
      {
        title: 'Where Bookkeeping Starts to Go Wrong',
        body: [
          "Most businesses do not ignore bookkeeping. They delay it.",
          "Transactions are imported but not categorised, invoices are recorded but payments are not matched, and reports appear complete while the underlying figures are unreliable.",
        ],
        bullets: ['transactions not recorded on time', 'receipts not properly tracked', 'accounts not reconciled regularly'],
      },
    ],
    tableTitle: 'Bookkeeping and Accounting: Different Jobs, One System',
    table: {
      headers: ['Area', 'Bookkeeping', 'Accounting'],
      rows: [
        ['Function', 'Records transactions', 'Interprets financial data'],
        ['Timing', 'Ongoing', 'Periodic'],
        ['Focus', 'Accuracy of records', 'Insight and decisions'],
        ['Outcome', 'Organised data', 'Business understanding'],
      ],
    },
    insight: 'When bookkeeping is consistent, VAT, payroll, management accounts, statutory accounts, and tax planning all become easier to trust.',
    ctaTitle: 'Speak to Taxaccolega Bookkeepers',
    ctaText: 'If your financial records are starting to feel incomplete, delayed, or difficult to rely on, structured bookkeeping support can bring the numbers back under control.',
    faqs: [
      ['What do bookkeeping services include?', 'Recording transactions, reconciling bank accounts, tracking invoices and expenses, maintaining ledgers, and preparing records for VAT, accounts, and tax work.'],
      ['Can bookkeeping be handled online?', 'Yes. Cloud systems allow records to be updated, reviewed, and reconciled without relying on manual year-end clean-up.'],
      ['Why outsource bookkeeping?', 'Outsourcing gives the business a consistent process, reduces internal admin pressure, and helps prevent small record issues becoming larger reporting problems.'],
    ],
    images: {
      hero: placeholder('bookkeeping-services', 'accountant-bookkeeper-or-cpa', 'Accountant reviewing bookkeeping records with a client'),
      sections: [
        placeholder('bookkeeping-services', 'still-life-office-supplies', 'Office supplies and financial documents on a desk'),
        placeholder('bookkeeping-services', 'view-messy-office-workspace-with-tablet-device', 'Business owner reviewing records on a tablet in a busy workspace'),
      ],
      insight: placeholder('bookkeeping-services', 'cropped-view-sales-manager-using-calculator', 'Sales manager using a calculator to reconcile figures'),
    },
    contact,
  },
  statutory: {
    eyebrow: 'Statutory Accounts',
    title: 'Statutory Accounts UK - Preparation, Filing & Reporting',
    subtitle: 'Formal accounts prepared with the structure, disclosures, and accuracy needed before filing with Companies House.',
    path: '/accounts/statutory-accounts',
    accent: 'Final, public, relied upon',
    stats: ['Companies House filing', 'Year-end adjustments', 'Disclosure review'],
    introTitle: "Statutory accounts do not go wrong suddenly. They fall out of sync.",
    intro: [
      "Transactions may exist, invoices may be issued, and bank activity may be visible. The question is whether everything still connects when formal accounts are prepared.",
      "Statutory accounts bring the whole year into one position. That is where unreconciled balances, unclear expense treatment, payroll mismatches, and timing errors surface.",
      "Once submitted, statutory accounts are public and relied upon, so the preparation needs to hold together technically, legally, and logically.",
    ],
    highlights: ['Balance sheet and profit and loss', 'Notes and disclosures', 'Companies House format', 'Year-end reconciliations', 'Corporation tax alignment', 'Public record confidence'],
    sections: [
      {
        title: 'Built Around Accuracy, Structure and Compliance',
        body: [
          "Statutory accounts are not internal summaries. They are the official version of your financial position.",
          "Our preparation process reviews the records behind the accounts, applies necessary adjustments, checks disclosures, and makes sure the final accounts reflect the business correctly.",
        ],
        bullets: ['figures align with records', 'disclosures are complete', 'formatting meets requirements', 'final output reflects the business'],
      },
      {
        title: 'Where Statutory Accounts Become Complicated',
        body: [
          "Accounts become sensitive when transactions span periods, directors take mixed salary and dividends, costs are unclear, intercompany balances exist, or prior-period errors carry forward.",
          "At that point, preparation is not a formatting exercise. It is correction, alignment, and judgement.",
        ],
      },
    ],
    tableTitle: 'Preparing Statutory Accounts',
    table: {
      headers: ['Stage', 'What Happens', 'Where It Commonly Breaks'],
      rows: [
        ['Record review', 'Financial data assessed', 'Missing or inconsistent entries'],
        ['Adjustments', 'Corrections applied', 'Misclassified costs or income'],
        ['Alignment', 'Figures reconciled', 'Differences across systems'],
        ['Structuring', 'Accounts formatted', 'Non-compliant presentation'],
        ['Filing', 'Submitted to Companies House', 'Deadline pressure'],
      ],
    },
    insight: 'Most statutory account issues start months before year end, inside bookkeeping, payroll, VAT, and record classification.',
    ctaTitle: 'Speak to Taxaccolega Statutory Accountants',
    ctaText: 'If year end is approaching and the records are not fully aligned, the issue is usually the structure behind the numbers, not just the deadline.',
    faqs: [
      ['What are statutory accounts?', 'They are formal financial statements prepared for a company and filed with Companies House.'],
      ['Why do statutory accounts matter?', 'They become part of the public record and are relied on by lenders, regulators, shareholders, and other third parties.'],
      ['Do statutory accounts connect to corporation tax?', 'Yes. The profit in statutory accounts is the starting point for corporation tax calculations, so alignment matters.'],
    ],
    images: {
      hero: placeholder('statutory-accounts', 'statutory-accounts-3', 'Statutory accounts preparation and Companies House filing'),
      sections: [
        placeholder('statutory-accounts', 'edit-11', 'Accountant preparing statutory financial statements'),
      ],
      insight: placeholder('statutory-accounts', 'services-accounts-statutory-accounts-expert-statutory-accountant-services', 'Expert statutory accountant reviewing year-end accounts'),
    },
    contact,
  },
  management: {
    eyebrow: 'Management Accounts',
    title: 'Management Accounts UK - Reporting, Analysis & Business Insights',
    subtitle: 'Operational reporting that explains what the numbers mean while decisions are still unfolding.',
    path: '/accounts/management-accounts',
    accent: 'Earlier visibility for better decisions',
    stats: ['Monthly or quarterly packs', 'Margin and cost review', 'Cash and forecast alignment'],
    introTitle: 'Businesses rarely struggle because information is unavailable.',
    intro: [
      "They struggle because nobody can interpret the financial position while decisions are still unfolding.",
      "Invoices, bank balances, revenue, costs, and software reports may all exist, yet owners still reach month end unsure why profit feels tight or cash pressure appeared unexpectedly.",
      "Management accounts close the gap between business activity and financial understanding.",
    ],
    highlights: ['Profit and loss reporting', 'Cash position analysis', 'Trend review', 'Department or project tracking', 'Forecast alignment', 'Decision support'],
    sections: [
      {
        title: 'Built for Decision-Making, Not Compliance',
        body: [
          "Statutory accounts present a completed period for compliance. Management accounts help you understand performance while the business is still moving.",
          "Margins narrow, costs drift, and cash leaves faster than expected long before year-end accounts reveal the issue.",
        ],
      },
      {
        title: 'What Our Management Accounting Changes',
        body: [
          "Most firms can generate reports. The value is in interpreting them around operational reality.",
          "We review revenue behaviour, timing differences, margin movement, cost structures, and financial trends that sit beneath overall growth.",
        ],
      },
    ],
    tableTitle: 'What Management Accounts Usually Include',
    table: {
      headers: ['Reporting Area', 'What It Shows', 'Why It Matters'],
      rows: [
        ['Profit & loss', 'Revenue, expenses, margins', 'Measures performance'],
        ['Cash position', 'Inflows, outflows, liquidity timing', 'Identifies pressure early'],
        ['Project tracking', 'Performance across activities', 'Highlights inefficiency'],
        ['Comparative review', 'Month-on-month movement', 'Detects trends'],
        ['Forecast alignment', 'Future direction', 'Supports planning'],
      ],
    },
    insight: 'Management accounts are most useful when connected to cashflow forecasting, financial forecasting, tax planning, and year-end accounts.',
    ctaTitle: 'Speak to Management Accountants',
    ctaText: 'If your business produces financial information but still cannot explain performance clearly, the issue may be the reporting structure behind the numbers.',
    faqs: [
      ['Are management accounts legally required?', 'No. They are internal reports used for control, planning, and decision-making.'],
      ['How often should management accounts be prepared?', 'Monthly or quarterly reporting is common, depending on the pace and complexity of the business.'],
      ['Can management accounts improve cashflow control?', 'Yes. They help identify liquidity pressure and performance trends before they become urgent.'],
    ],
    images: {
      hero: placeholder('management-accounts', 'management-accounts-2', 'Management accounts report pack on a desk'),
      sections: [
        placeholder('management-accounts', 'project-management-5441394_1280', 'Team reviewing project performance and financial metrics'),
        placeholder('management-accounts', 'management-coaching-business-dealing-mentor-concept', 'Business mentor discussing financial decisions with a company director'),
      ],
      insight: placeholder('management-accounts', 'time-management-7258198_1280', 'Business owner reviewing monthly management accounts against deadlines'),
    },
    contact,
  },
  payroll: {
    eyebrow: 'Payroll Services',
    title: 'Payroll Services UK - HMRC PAYE for Small & Medium Businesses',
    subtitle: 'Payroll support structured around accuracy, timing, RTI reporting, and employee confidence.',
    path: '/accounts/payroll-services',
    accent: 'Correct pay, correct reporting, every cycle',
    stats: ['PAYE and NI', 'RTI submissions', 'Pension alignment'],
    introTitle: 'Payroll problems usually start before payday arrives.',
    intro: [
      "Most payroll mistakes are not caused on the day salaries are processed. They begin earlier in the month.",
      "A starter is missing tax details, hours change without reaching payroll, pension deductions continue at an old rate, or a director payment is treated incorrectly.",
      "Payroll services are not only about processing wages. They keep the monthly sequence accurate before pressure builds.",
    ],
    highlights: ['Salary calculations', 'PAYE and NI deductions', 'RTI submissions', 'Payslips', 'Pension deductions', 'Payroll reconciliations'],
    sections: [
      {
        title: 'Built Around Consistency and Timing',
        body: [
          "Payroll repeats under fixed deadlines regardless of what else is happening in the business.",
          "Employees expect correct payment, HMRC expects reporting, and pension figures must align every cycle.",
        ],
      },
      {
        title: 'Payroll Sits Between Employees, HMRC, Pensions and Accounts',
        body: [
          "Employee net pay, HMRC deductions, pension provider contributions, and wage costs in the accounts all need to match.",
          "When payroll and bookkeeping drift apart, corrections become more complicated later.",
        ],
      },
    ],
    tableTitle: 'Payroll Processing Flow',
    table: {
      headers: ['Payroll Stage', 'What Happens', 'What Causes Problems'],
      rows: [
        ['Employee updates', 'Hours, salaries, starters, leavers', 'Delayed or incomplete information'],
        ['Calculations', 'PAYE, NI, pension deductions', 'Incorrect coding or setup'],
        ['RTI submissions', 'Payroll data sent to HMRC', 'Filing inconsistencies'],
        ['Salary payments', 'Net wages processed', 'Payment timing issues'],
        ['Record alignment', 'Payroll reconciled with accounts', 'Differences across systems'],
      ],
    },
    insight: 'Payroll pressure usually comes from timing, not calculation. The problem is often discovered at the exact moment it becomes urgent.',
    ctaTitle: 'Speak to Payroll Service Providers',
    ctaText: 'If payroll feels rushed, reactive, or difficult to control internally, the process may have outgrown its current structure.',
    faqs: [
      ['What do payroll services include?', 'Salary calculations, PAYE deductions, RTI submissions, pension processing, payslips, and payroll reporting.'],
      ['What is RTI in payroll?', 'Real Time Information is the HMRC reporting system used each time employees are paid.'],
      ['Why outsource payroll?', 'To reduce internal pressure, improve accuracy, and keep payroll deadlines under control.'],
    ],
    images: {
      hero: placeholder('payroll-services', 'gettyimages-618761192', 'Payroll team processing employee wages'),
      sections: [
        placeholder('payroll-services', 'businessman-analyzing-graph-office', 'Payroll manager reviewing PAYE and NI deductions'),
        placeholder('payroll-services', 'payroll-automation', 'Automated payroll system dashboard'),
      ],
      insight: placeholder('payroll-services', 'corporate-business-handshake-between-business-partners', 'Employer and payroll adviser agreeing structured payroll support'),
    },
    contact,
  },
  selfAssessment: {
    eyebrow: 'Self Assessment',
    title: 'Self Assessment Tax Return Accountants UK',
    subtitle: 'Tax return preparation that brings income sources, records, deadlines, and allowances into one clear filing position.',
    path: '/accounts/hmrc-self-assessment-tax-returns-accountant',
    accent: 'Clear returns before deadline pressure',
    stats: ['Directors and landlords', 'Foreign income review', 'HMRC online filing'],
    introTitle: "Self assessment does not feel urgent until the deadline is already close.",
    intro: [
      "A tax return can look simple until salary, dividends, rental income, freelance work, foreign income, capital gains, student loans, pension contributions, and expenses need to be brought together.",
      "The risk is rarely one large mistake. It is missing context across several small areas.",
      "Our self assessment support is designed to prepare the return accurately while helping you understand how the figures interact.",
    ],
    highlights: ['Income consolidation', 'Expense review', 'Director tax returns', 'Rental income reporting', 'Foreign income checks', 'HMRC submission support'],
    sections: [
      {
        title: 'More Than Submitting Figures',
        body: [
          "A self assessment tax return is about bringing all relevant income and reliefs together correctly.",
          "That includes checking the records behind the figures and identifying where tax treatment needs careful handling.",
        ],
      },
      {
        title: 'Who Usually Needs Support',
        body: [
          "Company directors, landlords, sole traders, investors, high earners, people with foreign income, and anyone with multiple income sources usually benefit from structured tax return preparation.",
          "The more income streams involved, the more important it becomes to avoid treating each item in isolation.",
        ],
      },
    ],
    tableTitle: 'Common Self Assessment Areas',
    table: {
      headers: ['Area', 'What Needs Reviewing', 'Why It Matters'],
      rows: [
        ['Employment and dividends', 'PAYE, benefits, dividends', 'Avoids duplicated or missed income'],
        ['Rental income', 'Rent, expenses, finance costs', 'Supports correct property reporting'],
        ['Self-employment', 'Turnover and allowable costs', 'Controls taxable profit'],
        ['Foreign income', 'Overseas income and tax paid', 'Reduces reporting risk'],
        ['Capital gains', 'Disposals and reliefs', 'Prevents underreported gains'],
      ],
    },
    insight: 'Most self assessment mistakes happen when income sources are reviewed separately instead of as one personal tax position.',
    ctaTitle: 'Speak to Self Assessment Accountants',
    ctaText: 'If your return involves more than one income source, professional review can reduce deadline stress and improve filing accuracy.',
    faqs: [
      ['Who needs to file a self assessment tax return?', 'Common cases include directors, landlords, sole traders, high earners, people with foreign income, and people with untaxed income or gains.'],
      ['Can you file my return online?', 'Yes. We prepare and submit self assessment tax returns through HMRC online filing.'],
      ['What records are needed?', 'Income records, expense evidence, P60s or P45s, dividend vouchers, rental statements, pension details, and any relevant tax documents.'],
    ],
    images: {
      hero: placeholder('hmrc-self-assessment-tax-returns-accountant', 'self-assessment-tax', 'Self assessment tax return documents and calculator'),
      sections: [
        placeholder('hmrc-self-assessment-tax-returns-accountant', 'accounting-2', 'Tax adviser reviewing income sources for a self assessment return'),
        placeholder('hmrc-self-assessment-tax-returns-accountant', 'magnifying-glass-fallen-coins-infographic-template', 'Detailed review of tax deductions and allowances'),
      ],
      insight: placeholder('hmrc-self-assessment-tax-returns-accountant', 'close-up-coins-table', 'Tax return figures reconciled against financial records'),
    },
    contact,
  },
  pensions: {
    eyebrow: 'Pension & Auto Enrolment',
    title: 'Auto Enrolment Pension UK - Contributions, Rates & Eligibility',
    subtitle: 'Workplace pension support connected to payroll, eligibility checks, contribution calculations, and ongoing employer duties.',
    path: '/accounts/auto-enrolment-pension-contributions/',
    accent: 'Pension duties move with payroll',
    stats: ['Eligibility assessment', 'Contribution checks', 'Re-enrolment support'],
    introTitle: 'Pension compliance becomes stressful after the setup, not during it.',
    intro: [
      "A new employee joins, earnings change because of overtime, someone crosses the auto enrolment threshold, or an opt-out request arrives after payroll has been processed.",
      "Auto enrolment is not a static setup. It is a live process connected to every payroll run and every employee change.",
      "We support employers with pension eligibility reviews, contribution checks, payroll-linked pension administration, and ongoing compliance support.",
    ],
    highlights: ['Worker eligibility', 'Contribution calculations', 'Opt-in and opt-out records', 'Payroll pension alignment', 'Re-enrolment duties', 'Compliance evidence'],
    sections: [
      {
        title: 'Why the Process Becomes Difficult Over Time',
        body: [
          "The challenge is rarely the first contribution. The challenge is maintaining consistency as staffing, pay, bonuses, worker categories, and payroll cycles change.",
          "A pension contribution that was correct last month can become inaccurate after a payroll adjustment if the assessment is not updated.",
        ],
      },
      {
        title: 'Why Auto Enrolment Problems Start Inside Payroll',
        body: [
          "Most pension issues begin with payroll movement: salary changes, late starters, statutory pay, variable earnings, or missing opt-out records.",
          "Small inconsistencies then repeat quietly across multiple payroll cycles.",
        ],
      },
    ],
    tableTitle: 'Auto Enrolment Assessment',
    table: {
      headers: ['Assessment Area', 'What Needs Reviewing', 'Why It Matters'],
      rows: [
        ['Worker age', 'Automatic enrolment age rules', 'Determines pension category'],
        ['Earnings level', 'Workplace pension thresholds', 'Controls eligibility'],
        ['Pay frequency', 'Weekly or monthly payroll', 'Affects assessment timing'],
        ['Worker type', 'Employee, director, contractor', 'Determines duties'],
        ['Pensionable pay', 'Qualifying earnings or full pay', 'Impacts contributions'],
      ],
    },
    insight: 'Pension errors often stay hidden for months because payslips are processed and deductions exist, even when the underlying treatment is wrong.',
    ctaTitle: 'Speak to Pension Auto Enrolment Accountants',
    ctaText: 'If auto enrolment is being handled as a secondary payroll task, important changes may not be reviewed closely enough.',
    faqs: [
      ['What is auto enrolment?', 'It is the UK workplace pension duty requiring employers to assess eligible workers and enrol them into a qualifying pension scheme.'],
      ['Do pensions need to be reviewed every payroll?', 'Yes. Eligibility, earnings, contribution basis, and employee status can change each pay period.'],
      ['Can payroll and pensions be managed together?', 'Yes. They should be aligned because pension deductions and payroll figures affect one another.'],
    ],
    images: {
      hero: placeholder('auto-enrolment-pension-contributions', 'auto-enrolment', 'Workplace pension auto enrolment compliance review'),
      sections: [
        placeholder('auto-enrolment-pension-contributions', 'edit-3', 'Employer reviewing pension contribution rates'),
        placeholder('auto-enrolment-pension-contributions', 'how-to-negotiate-a-salary-increase-13-800x407', 'Payroll and pension eligibility assessment'),
      ],
      insight: placeholder('auto-enrolment-pension-contributions', 'edit-6', 'Pension scheme re-enrolment and compliance checklist'),
    },
    contact,
  },
  consolidated: {
    eyebrow: 'Consolidated Accounts',
    title: 'Consolidated Accounts UK - Consolidation Accounting & Financial Statements',
    subtitle: 'Group reporting that removes internal distortion and shows connected companies as one economic position.',
    path: '/accounts/consolidated-accounts',
    accent: 'One view of the group',
    stats: ['Intercompany eliminations', 'Group balance sheet', 'Consolidated reporting'],
    introTitle: 'A group structure usually starts with a practical reason.',
    intro: [
      "A second company separates risk, another holds property, or a holding company supports investment planning. At first, each company still feels manageable.",
      "Then money starts moving between entities, shared costs are allocated differently, and directors need to understand what the group looks like as one business.",
      "That is where consolidated accounts begin: not as a formality, but as the clearest way to understand connected entities together.",
    ],
    highlights: ['Consolidated statements', 'Intercompany reconciliation', 'Internal transaction removal', 'Ownership adjustments', 'Group reporting support', 'Management visibility'],
    sections: [
      {
        title: 'What Consolidation Actually Means',
        body: [
          "Consolidated accounts combine multiple companies into one reporting position, so the group can be seen as a single economic entity.",
          "The purpose is not simply combining numbers. It is removing distortion caused by internal transactions, duplicated revenue, and intercompany balances.",
        ],
      },
      {
        title: 'Where Consolidation Problems Begin',
        body: [
          "Intercompany activity is usually the sensitive area. One company records a sale, another records a purchase, and the balances should cancel exactly.",
          "In reality, timing differences, classification issues, manual adjustments, and inconsistent periods often mean they do not.",
        ],
      },
    ],
    tableTitle: 'Core Consolidation Structure',
    table: {
      headers: ['Component', 'Purpose', 'Why It Matters'],
      rows: [
        ['Income statement', 'Combines group income and costs', 'Shows group performance'],
        ['Balance sheet', 'Combines assets and liabilities', 'Reflects group position'],
        ['Intercompany eliminations', 'Removes internal transactions', 'Prevents duplication'],
        ['Non-controlling interests', 'Separates minority ownership', 'Clarifies ownership'],
        ['Group reporting', 'Connects entity results', 'Improves visibility'],
      ],
    },
    insight: 'Most consolidation problems exist long before consolidation begins, inside inconsistent bookkeeping and unresolved intercompany activity.',
    ctaTitle: 'Speak to Consolidated Accounts Accountants',
    ctaText: 'If individual company accounts no longer explain the wider financial picture, group-level reporting can restore clarity.',
    faqs: [
      ['What are consolidated accounts?', 'They combine connected companies into one set of financial statements showing the group as a single entity.'],
      ['Do all groups need consolidated accounts?', 'No. Some groups qualify for exemptions, but the structure and thresholds should be reviewed properly.'],
      ['Why are intercompany eliminations important?', 'They remove internal transactions and balances so group revenue, costs, assets, and liabilities are not overstated.'],
    ],
    images: {
      hero: placeholder('consolidated-accounts', 'consolidated-accounts-2', 'Group consolidated accounts and intercompany reconciliation'),
      sections: [
        placeholder('consolidated-accounts', 'man-calculating-monthly-savings_23-2148294829', 'Accountant consolidating group financial data'),
        placeholder('consolidated-accounts', 'money-bank-card-keyboard_144627-47420', 'Group treasury and intercompany balance review'),
      ],
      insight: placeholder('consolidated-accounts', 'edit-1-6', 'Consolidated financial statements prepared for group reporting'),
    },
    contact,
  },
  financialForecasting: {
    eyebrow: 'Financial Forecasting',
    title: 'Financial Forecasting Service',
    subtitle: 'Commercial forecasting that models direction, assumptions, growth pressure, and future financial commitments.',
    path: '/accounts/financial-forecasting/',
    accent: 'Planning before pressure appears',
    stats: ['Scenario modelling', 'Growth assumptions', 'Future tax visibility'],
    introTitle: 'Most financial pressure starts months before it becomes visible.',
    intro: [
      "Margins tighten quietly, costs rise faster than revenue, hiring decisions are made on expected growth, and cash reserves start shrinking faster than expected.",
      "Forecasting does not predict the future perfectly. It helps businesses understand how today’s decisions are likely to behave under real operating conditions.",
      "Our financial forecasting services build visibility before commitments become fixed or growth creates instability.",
    ],
    highlights: ['Revenue forecasting', 'Cost forecasting', 'Scenario modelling', 'Forecast assumptions', 'Strategic planning', 'Tax and cashflow alignment'],
    sections: [
      {
        title: 'Not Guesswork. Financial Direction.',
        body: [
          "Useful forecasting is not just a spreadsheet exercise. It shows how decisions interact financially over time.",
          "Hiring affects payroll, expansion affects overheads, revenue growth changes VAT exposure, delayed payments affect liquidity, and borrowing reshapes cash behaviour.",
        ],
      },
      {
        title: 'Growth and Stability Are Not the Same Thing',
        body: [
          "Growth can increase pressure faster than it increases stability.",
          "More clients may require more staffing, larger projects may delay payment cycles, and higher turnover may increase tax liabilities before cash has caught up.",
        ],
      },
    ],
    tableTitle: 'What a Financial Forecast Usually Includes',
    table: {
      headers: ['Forecast Area', 'What It Measures', 'Why It Matters'],
      rows: [
        ['Revenue forecasting', 'Expected income growth', 'Tests commercial assumptions'],
        ['Cost forecasting', 'Fixed and operational expenses', 'Tracks sustainability'],
        ['Cashflow forecasting', 'Timing of cash movement', 'Identifies liquidity pressure'],
        ['Financial projections', 'Multi-period direction', 'Supports planning'],
        ['Scenario modelling', 'Best-case and risk scenarios', 'Improves decisions'],
      ],
    },
    insight: 'Businesses often mistake turnover growth for financial progress. Forecasting exposes the pressure that can sit beneath higher activity.',
    ctaTitle: 'Speak to Financial Forecasting Consultants',
    ctaText: 'If future decisions are being made from assumptions rather than structured forecasting, the financial direction may not yet be visible enough.',
    faqs: [
      ['What is financial forecasting?', 'It projects future performance using assumptions around revenue, costs, cashflow, tax, and operations.'],
      ['How often should a forecast be updated?', 'Regularly. Forecasts become unreliable when assumptions change but the model stays frozen.'],
      ['Is forecasting useful for startups?', 'Yes. It supports funding, planning, and viability discussions when grounded in realistic assumptions.'],
    ],
    images: {
      hero: placeholder('financial-forecasting', 'people-office-analyzing-checking-finance-graphs_23-2150377130', 'Finance team analysing forecast graphs in the office'),
      sections: [
        placeholder('financial-forecasting', 'business-concept-young-business-man-woking-financial-plan-strategy-analysis_1258-307-2', 'Business owner working on a financial plan and strategy'),
        placeholder('financial-forecasting', 'edit-4-2', 'Financial forecast model with revenue and cost projections'),
      ],
      insight: placeholder('financial-forecasting', 'edit-8-2', 'Long-range financial forecast aligned to business growth plans'),
    },
    contact,
  },
  cashflow: {
    eyebrow: 'Cashflow Forecasting',
    title: 'Cash Flow Forecasting UK - Forecasts, Projections & Management',
    subtitle: 'Cashflow forecasting that models when money enters, when it leaves, and where timing pressure forms.',
    path: '/accounts/cash-flow-forecasting',
    accent: 'Liquidity visibility before pressure',
    stats: ['13-week forecasts', 'Tax timing', 'Growth cash pressure'],
    introTitle: 'Cash rarely creates problems loudly at the beginning.',
    intro: [
      "Sales move, invoices go out, and the bank balance still looks stable enough. Then timing shifts underneath the surface.",
      "A client pays late, VAT falls due, payroll lands before invoices clear, and one pressure point overlaps with another.",
      "Cashflow forecasting closes the gap between profitability and cash position before reactive decisions take over.",
    ],
    highlights: ['Customer receipts', 'Supplier payments', 'Payroll timing', 'VAT and corporation tax', 'Director drawings', 'Liquidity scenarios'],
    sections: [
      {
        title: 'Built Around Real Business Movement',
        body: [
          "A cashflow forecast is a working model of how money moves through a business over time.",
          "It should reflect payment behaviour, supplier terms, payroll timing, tax liabilities, overheads, seasonal changes, debt commitments, and operational spending patterns.",
        ],
      },
      {
        title: 'Why Profitable Businesses Still Feel Cash Pressure',
        body: [
          "Profitability does not automatically protect cash position.",
          "Delayed debtor collection, rapid growth, payroll expansion, VAT liabilities, director drawings, and loan repayments can all create pressure even when the business is profitable.",
        ],
      },
    ],
    tableTitle: 'What a Structured Cashflow Forecast Includes',
    table: {
      headers: ['Forecast Area', 'Why It Matters'],
      rows: [
        ['Expected customer receipts', 'Shows when cash is realistically likely to arrive'],
        ['Payroll and pensions', 'Identifies fixed outgoing pressure'],
        ['VAT and corporation tax', 'Prevents future tax pressure appearing unexpectedly'],
        ['Supplier schedules', 'Tracks commitments against inflows'],
        ['Director drawings and dividends', 'Prevents over-withdrawal during unstable periods'],
      ],
    },
    insight: 'Most cashflow crises begin months before they become visible. Forecasting earlier creates room for adjustment while decisions are still flexible.',
    ctaTitle: 'Speak to Cashflow Forecasting Consultants',
    ctaText: 'If decisions are being made from assumptions about future cash, structured forecasting can show pressure before it controls current choices.',
    faqs: [
      ['What is a cashflow forecast?', 'It estimates future cash inflows and outflows over a defined period to show upcoming liquidity.'],
      ['What is a 13-week cashflow forecast?', 'A short-term forecast used to monitor operational cash movement and near-term liquidity.'],
      ['Is cashflow forecasting only for struggling businesses?', 'No. Growing and profitable businesses use it to manage timing, investment, staffing, and tax pressure.'],
    ],
    images: {
      hero: placeholder('cash-flow-forecasting', 'analyzing-diagram', 'Cashflow forecast diagram showing inflows and outflows'),
      sections: [
        placeholder('cash-flow-forecasting', 'technology-hologram-indoors', 'Digital cashflow projection dashboard'),
        placeholder('cash-flow-forecasting', 'close-up-of-business-people-working-with-business-document-durin', 'Finance team reviewing a cashflow forecast document'),
      ],
      insight: placeholder('cash-flow-forecasting', 'cashflow-forecasting-2', '13-week cashflow forecast highlighting upcoming liquidity pressure'),
    },
    contact,
  },
};
