"use client";
// Import the new taxation assets
import cryptoImg from '../assets/taxation-cryptocurrency.png';
import filmImg from '../assets/taxation-film-tax-relief.png';
import letPropertyImg from '../assets/taxation-let-property-campaign.png';
import personalIncomeImg from '../assets/taxation-personal-income-tax-professionals-and-chartered-accountants.png';
import worldwideImg from '../assets/taxation-worldwide-disclosure-facility.png';

// New imports
import companyTaxReturnImg from '../assets/taxation-company-tax-return.png';
import vatAccountantsImg from '../assets/taxation-vat-accountants.png';
import inheritanceTaxImg from '../assets/taxation-inheritance-tax.png';
// import taxInvestigationImg from '../assets/taxation-tax-investigation.png';
const taxInvestigationImg = 'https://placehold.co/800x600?text=Tax+Investigation';
import capitalGainsTaxImg from '../assets/taxation-capital-gains-tax.png';
import estatePropertyTaxImg from '../assets/taxation-estate-tax-planning.png';
import taxAdvisorsImg from '../assets/taxation-tax-advisors.png';
import nonUkResidentTaxationImg from '../../../images_old/non-uk-resident-taxation.png';
// Reusing an existing taxation image for EMI and SEIS as no specific assets were provided for them in the list.
import emiSeisPlaceholderImg from '../assets/taxation-company-tax-return.png';


export const taxationConfig = {
  'worldwide-disclosure-facility': {
    title: `Worldwide Disclosure Facility`,
    subtitle: `Confidential HMRC Offshore Income Disclosures`,
    img: worldwideImg,
    heroIntro: `Tax problems connected to offshore income usually do not begin with concealment. They begin with assumption. Someone moves abroad but continues receiving UK rental income, or a foreign bank account earns interest quietly for years. The individual assumes the UK position is covered or that HMRC cannot trace it.`,
    heroDetails: `That assumption is outdated. International data-sharing agreements (Common Reporting Standard) now automatically share bank and financial details with HMRC. Once HMRC becomes aware first, the process is far more aggressive, expensive, and difficult to control. The Worldwide Disclosure Facility (WDF) exists to let taxpayers voluntarily correct offshore tax irregularities before HMRC escalates. At Taxaccolega, we support property owners, non-UK residents, and investors in bringing their offshore affairs under control.`,
    sections: [
        {
            type: `difficult`,
            title: `HMRC Worldwide Disclosure Facility - What It Covers`,
            subtitle: `An HMRC disclosure route designed to report unpaid UK tax on offshore matters.`,
            content: `The WDF process is not limited to intentional tax evasion. A significant number of disclosures involve residency misunderstandings, accounting gaps, or unstructured foreign asset income.`,
            bullets: [
                `Overseas rental property income and foreign real estate disposals`,
                `Interest earned on foreign bank accounts and offshore savings`,
                `Dividends and capital gains from international investment portfolios`,
                `Non-UK employment or consultancy income`,
                `Undeclared inheritance-related overseas assets and trusts`,
                `Cryptocurrency activity processed through overseas or international exchanges`,
                `Failing to meet UK statutory tests for non-UK residency classification`
            ],
            footer: `The behaviour classification (careless, deliberate, or unprompted) directly affects Worldwide Disclosure Facility penalties. Strategy is critical: a poorly structured disclosure can increase penalty exposure unnecessarily.`
        },
        {
            type: `table`,
            title: `Stages of the Worldwide Disclosure Facility Process`,
            subtitle: `Understanding the step-by-step disclosure path`,
            headers: [
                `WDF Stage`,
                `What Happens`,
                `Why It Matters`
            ],
            rows: [
                [
                    `Taxpayer Registration`,
                    `Formally register for the Worldwide Disclosure Facility`,
                    `Starts the official disclosure process and sets the timeline`
                ],
                [
                    `Disclosure Preparation`,
                    `Review and reconstruct historic offshore tax positions`,
                    `Identifies and documents all reporting gaps and details`
                ],
                [
                    `Calculation Stage`,
                    `Assess unpaid tax, interest, and specific behavioural penalties`,
                    `Determines and shapes the final financial outcome`
                ],
                [
                    `Disclosure Submission`,
                    `Formally present the completed WDF pack to HMRC`,
                    `Submits the formal case and supporting evidence`
                ],
                [
                    `HMRC Review & Approval`,
                    `HMRC evaluates the quality and completeness of disclosure`,
                    `Can trigger further questions or result in formal closure`
                ]
            ]
        },
        {
            type: `table`,
            title: `Common Worldwide Disclosure Facility Risks`,
            subtitle: `Pitfalls that can compromise a voluntary disclosure`,
            headers: [
                `Offshore Reporting Issue`,
                `Why It Happens`,
                `Potential Consequence`
            ],
            rows: [
                [
                    `Residency Misunderstanding`,
                    `Taxpayer assumed foreign taxes paid removed UK tax filing duties`,
                    `HMRC enquiry, interest charges, and double taxation exposure`
                ],
                [
                    `Offshore Accounts Undeclared`,
                    `Historic banking assumptions and offshore property holdings`,
                    `Severe penalties and risk of audit expansion to UK affairs`
                ],
                [
                    `Incomplete Disclosure`,
                    `Misunderstanding Worldwide Disclosure Facility scope or omitting assets`,
                    `Rejected WDF disclosure and formal tax fraud investigation`
                ],
                [
                    `Informal Corrections Attempted`,
                    `Trying to explain the issue over the phone without preparation`,
                    `Credibility concerns, higher penalty rates, and audits`
                ]
            ]
        }
    ],
    faqs: [
        {
            q: `What is the Worldwide Disclosure Facility (WDF)?`,
            a: `The WDF is an HMRC disclosure route designed to let UK tax residents disclose undeclared offshore income, gains, or assets to HMRC, and settle their tax liabilities under voluntary disclosure terms.`
        },
        {
            q: `How many years back can HMRC review under the WDF?`,
            a: `HMRC can review up to 4 years for innocent errors, up to 6 years for careless mistakes, and up to 20 years for deliberate tax omissions or non-compliance.`
        },
        {
            q: `What are Worldwide Disclosure Facility penalties?`,
            a: `WDF penalties depend on behavior (careless vs. deliberate) and whether the disclosure is prompted or unprompted. They range from 30% up to 200% of the unpaid tax, though voluntary disclosure yields the lowest rate.`
        },
        {
            q: `Does HMRC already receive offshore financial information?`,
            a: `Yes. Under the Common Reporting Standard (CRS) and FATCA agreements, over 100 countries automatically share financial account information with HMRC annually.`
        },
        {
            q: `Can cryptocurrency be disclosed through the WDF?`,
            a: `Yes. If your crypto activity is connected to overseas exchanges or international wallets, it falls under offshore matters and can be disclosed through the Worldwide Disclosure Facility.`
        },
        {
            q: `What happens if HMRC contacts me before I disclose?`,
            a: `If HMRC contacts you first, any subsequent disclosure is treated as "prompted," which leads to significantly higher penalties, a greater likelihood of a full tax audit, and potentially public naming.`
        }
    ]
  },
  'cryptocurrency': {
    title: `Cryptocurrency Taxation`,
    subtitle: `Confidently navigate cryptocurrency with Taxaccolega’s expertise`,
    img: cryptoImg,
    heroIntro: `Crypto investors seldom realise the tax problem when the profit happens. They usually realise it later, sometimes months or even years later, after moving funds between wallets or converting one token into another without cashing out a single pound.`,
    heroDetails: `Throughout that entire period, cryptocurrency activity rarely feels connected to normal taxation. However, HMRC does not see crypto as detached. In many situations, UK tax obligations begin long before money is ever withdrawn into a bank account. At Taxaccolega, we help individuals and businesses across London and the UK understand how crypto tax actually works in practice — not just theoretically, but in relation to real transaction histories, fragmented records, and HMRC reporting.`,
    sections: [
      {
        type: `difficult`,
        title: `Why Crypto Becomes Difficult to Report`,
        subtitle: `The technical side of cryptocurrency often moves faster than the reporting side.`,
        content: `People focus on markets, pricing, timing, and volatility rather than transaction reconstruction or future tax reporting. By the time gains become significant or HMRC letters arrive, the transaction trail is rarely simple.`,
        bullets: [
          `Moved assets across multiple exchanges and offshore platforms`,
          `Transferred tokens between personal or decentralised wallets`,
          `Used decentralised finance (DeFi) platforms and liquidity pools`,
          `Received staking rewards, mining income, or airdrops`,
          `Swapped or traded tokens without converting to GBP`,
          `Lost access to historic exchange transaction data or account keys`,
          `Mixed personal investment and business trading activity together`
        ],
        footer: `The result is that cryptocurrency taxes stop being about "one gain" and become a reconstruction exercise. This is where generic crypto calculators and software tools start falling short: they process raw data but cannot always apply HMRC's specific rules to unusual patterns or incomplete records.`
      },
      {
        type: `cards`,
        title: `How HMRC Views Cryptocurrency and Taxes`,
        intro: `One of the biggest misunderstandings surrounding tax on cryptocurrency UK issues is the belief that tax only applies when profits are cashed out into pounds.`,
        cards: [
          {
            title: `Disposals & Capital Gains`,
            text: `A disposal occurs through selling, swapping one token for another, gifting, or spending assets. This creates a Capital Gains Tax (CGT) liability without ever cashing out to a bank account.`
          },
          {
            title: `Staking & Staking Income`,
            text: `Staking rewards, mining, and token receipts are typically classified as Income Tax events upon receipt, and are subject to Capital Gains Tax when subsequently disposed of.`
          },
          {
            title: `Corporation Tax on Crypto`,
            text: `If a company holds cryptocurrency as treasury assets or uses it for business transactions, it is subject to corporation tax, custom statutory accounting, and strict valuation rules.`
          }
        ]
      },
      {
        type: `table`,
        title: `Common Areas Where Cryptocurrency Reporting Fails`,
        subtitle: `Understanding potential pitfalls in crypto calculations`,
        headers: ['Issue', 'Why It Happens', 'Result'],
        rows: [
          ['Wallet transfers treated as disposals', 'Transaction history misunderstood by automated tools', 'Gains are overstated and double taxed'],
          ['Crypto-to-crypto swaps ignored', 'No fiat/GBP withdrawal occurred, leading to false security', 'Taxable disposals are omitted entirely'],
          ['Historic exchange data missing', 'Exchange platforms changed, closed down, or restricted API access', 'Extreme difficulty in reconstructing acquisition costs'],
          ['Staking income excluded', 'Taxpayers treated rewards as unrealised growth', 'Under-reported income subject to penalties'],
          ['Overseas exchange activity ignored', 'Assumption that offshore exchanges escape HMRC visibility', 'High risk of HMRC tax enquiries']
        ]
      }
    ],
    faqs: [
      {
        q: `Do you have to pay tax on cryptocurrency in the UK?`,
        a: `Yes. HMRC does not treat cryptocurrency as currency or money, but as assets. Depending on your activity (trading, mining, swapping, staking), you may be liable for Capital Gains Tax, Income Tax, or Corporation Tax.`
      },
      {
        q: `Is cryptocurrency taxed even if I did not withdraw money?`,
        a: `Yes. Swapping one cryptocurrency for another (e.g. Bitcoin to Ethereum) or using crypto to purchase goods is treated as a disposal for Capital Gains Tax. You do not need to convert to GBP for a tax liability to arise.`
      },
      {
        q: `How is cryptocurrency taxed in the UK?`,
        a: `If you hold cryptocurrency as a personal investment, you will pay Capital Gains Tax on any gains above your annual tax-free allowance when you dispose of it. If you are treated as a professional trader, or receive crypto as payment, mining, or staking, it is subject to Income Tax.`
      },
      {
        q: `Can HMRC track cryptocurrency transactions?`,
        a: `Yes. HMRC works closely with major crypto exchanges (including Coinbase, Binance, and others) and receives transaction reports containing UK user details. They also use sophisticated blockchain analytics software to trace wallet transactions.`
      },
      {
        q: `Do staking rewards create tax liabilities?`,
        a: `Yes. Staking rewards are generally treated as miscellaneous income at the point of receipt, valued at the fair market value in GBP. When you eventually sell or swap those rewards, they are also subject to Capital Gains Tax.`
      },
      {
        q: `What happens if previous cryptocurrency gains were not reported?`,
        a: `You should make a voluntary disclosure to HMRC as soon as possible. Making an unprompted disclosure significantly reduces penalties and interest charges. Our accountants can help you prepare and submit a Worldwide Disclosure Facility (WDF) filing.`
      }
    ]
  },
  'film-tax-relief': {
    title: `Film Tax Relief`,
    subtitle: `Empowering Creativity, Fueling Growth`,
    img: filmImg,
    heroIntro: `We specialise in offering comprehensive support for Film Tax Relief (FTR), tailored for filmmakers and production companies throughout the UK. Our team of industry experts is dedicated to navigating the complexities of FTR to maximise your financial benefits and contribute to the growth of the British film sector.`,
    heroDetails: `We begin with thorough consultations to assess your project's eligibility for FTR, strategising the most effective approach to optimise your claim and maximise financial returns. Our team manages the meticulous preparation and timely submission of your FTR application to HMRC, ensuring all required documentation is meticulously compiled and submitted in compliance with regulatory standards. Throughout the production process, we provide continuous support to ensure adherence to FTR regulations, including monitoring expenditures, verifying compliance with qualifying conditions, and maintaining essential records crucial for successful claims.`,
    sections: [
      {
        type: `cards`,
        title: `The Benefits Of Hiring An FTR Accountant`,
        intro: `Navigating HMRC's creative industry tax credits requires structured accounting and careful execution.`,
        cards: [
          {
            title: `Eligibility Assessment`,
            text: `We conduct a thorough assessment of your film project under HMRC guidelines, evaluating key criteria such as cultural significance, British certification, and core expenditure thresholds.`
          },
          {
            title: `Optimisation Strategy`,
            text: `Based on the eligibility assessment, we develop a tailored strategy to optimise your FTR claim, maximising the financial benefits while maintaining strict compliance with all regulatory requirements.`
          },
          {
            title: `Application Management`,
            text: `Our team manages the entire process of your FTR application to HMRC, compiling all necessary documentation, ensuring absolute accuracy, and adhering to strict deadlines to facilitate a smooth and timely approval.`
          },
          {
            title: `Expenditure Monitoring`,
            text: `Throughout the production phase, we provide diligent monitoring of expenditures and activities to verify ongoing compliance, maintaining essential records and documentation to fully substantiate your claim.`
          }
        ]
      }
    ],
    faqs: [
      {
        q: `What is Film Tax Relief (FTR) in the UK?`,
        a: `Film Tax Relief is a UK government tax incentive that allows qualifying film production companies to claim a cash rebate or a reduction in corporation tax based on their core production expenditure.`
      },
      {
        q: `What qualifies a film as a "British Film" for FTR?`,
        a: `A film must either pass the BFI Cultural Test (scoring a minimum number of points for cultural content, contribution, hubs, and practitioners) or be certified as an official co-production under a UK bilateral treaty.`
      },
      {
        q: `What counts as "Core Expenditure" for Film Tax Relief?`,
        a: `Core expenditure includes production costs incurred during pre-production, principal photography, and post-production. It explicitly excludes development costs, distribution, marketing, and financing costs.`
      },
      {
        q: `How much cash rebate can a film production company claim?`,
        a: `Under the current Audio-Visual Expenditure Credit (AVEC), film production companies can claim an effective credit rate of up to 34% (or 39% for children's television/animation) on qualifying core expenditure.`
      },
      {
        q: `Can a company claim FTR if it makes a loss?`,
        a: `Yes. If the film production company is loss-making, it can surrender the qualifying loss to HMRC in exchange for a cash payout (surrendered tax credit).`
      }
    ]
  },
  'let-property-campaign': {
    title: `Let Property Campaign`,
    subtitle: `Declare Undisclosed Property Income Confidently`,
    img: letPropertyImg,
    heroIntro: `Most landlords do not deliberately decide to ignore tax. What usually happens is slower than that. A property gets rented temporarily after a move. Mortgage interest rules change. Records become inconsistent. A return is submitted once, then missed later. Expenses are estimated instead of tracked.`,
    heroDetails: `Throughout that time, the landlord often still believes the situation is manageable. Then the HMRC letter arrives — not aggressive, not accusatory, but enough to make the situation suddenly feel real. At Taxaccolega, we help landlords across London and the UK deal with HMRC Let Property Campaign disclosures properly, especially where undeclared rental income, historic reporting gaps, overseas ownership, capital gains exposure, or incomplete records have already built up over several years.`,
    sections: [
      {
        type: `difficult`,
        title: `HMRC Let Property Campaign - What It Actually Is`,
        subtitle: `An opportunity to correct historic rental tax errors before HMRC discovers them.`,
        content: `The Let Property Campaign is a dedicated HMRC disclosure facility designed for landlords who need to correct previously undeclared or incorrectly reported rental income. In practice, the campaign applies to far more situations than most landlords initially realise.`,
        bullets: [
          'Landlords who never declared rental income at all',
          'Landlords who declared parts of their rental income incorrectly',
          'Property owners who missed tax filings entirely for several years',
          'Misunderstanding allowable mortgage interest relief and expenses',
          'Failing to report overseas rental property income in the UK',
          'Incorrectly splitting property income between spouses or family members'
        ],
        footer: `The issue is not always deliberate concealment. Very often, the reporting structure simply became inconsistent over time. That is why HMRC Let Property Campaign disclosures frequently overlap with self assessment corrections, income tax liabilities, capital gains tax exposure, non-UK resident taxation, bookkeeping failures, and historic record reconstruction.`
      },
      {
        type: `cards`,
        title: `Property Income & HMRC Compliance`,
        intro: `Property income rarely stays simple, and delaying disclosure quietly increases risk over time.`,
        cards: [
          {
            title: `Property Income Growth`,
            text: `At the beginning, owning one property feels straightforward. But once multiple units, overseas portfolios, or company structures are introduced, calculations become complex.`
          },
          {
            title: `HMRC Enforcement`,
            text: `HMRC uses massive digital databases (such as land registry and letting agent records) to match property owners against reported self-assessment income.`
          },
          {
            title: `Strategic Disclosure`,
            text: `Making a voluntary disclosure allows you to control the narrative, benefit from significantly lower penalties, and set up manageable payment arrangements.`
          }
        ]
      },
      {
        type: `table`,
        title: `Common Let Property Campaign Risks`,
        subtitle: `Key pitfalls that trigger HMRC enforcement and audits`,
        headers: ["Offshore Reporting Issue", "Why It Happens", "Potential Consequence"],
        rows: [
          ["Assumed taxed abroad already", "Residency and double taxation treaties misunderstood", "HMRC enquiry, interest charges, and double taxation"],
          ["Offshore accounts undeclared", "Historic banking assumptions and offshore property holdings", "Severe penalties and risk of audit expansion"],
          ["Incomplete disclosure", "Misunderstanding Let Property Campaign scope", "Rejected disclosure and formal HMRC tax investigation"],
          ["Informal corrections attempted", "Trying to explain the issue over the phone without preparation", "Credibility concerns, higher penalty rates, and audits"]
        ]
      }
    ],
    faqs: [
      {
        q: `What is the HMRC Let Property Campaign?`,
        a: `The Let Property Campaign is an ongoing disclosure opportunity offered by HMRC. It allows residential landlords with undisclosed rental income to voluntarily bring their tax affairs up to date under highly favorable penalty terms.`
      },
      {
        q: `Who can use the Let Property Campaign?`,
        a: `It is open to individual residential landlords letting out properties in the UK or abroad. This includes single-property landlords, multi-property portfolios, student lets, holiday lets, and those letting out inherited property.`
      },
      {
        q: `How many years back does HMRC look for property disclosures?`,
        a: `Depending on the behaviour (careless, deliberate, or reasonable excuse), HMRC can go back up to 20 years to calculate tax liabilities, interest, and penalties.`
      },
      {
        q: `What are the penalties under the Let Property Campaign?`,
        a: `If you make a voluntary, unprompted disclosure, penalties are usually significantly lower than if HMRC finds out first. Penalties can range from 0% to 20% of the unpaid tax, depending on whether it was a careless error or a reasonable excuse.`
      },
      {
        q: `What happens if I receive an HMRC letter before making a voluntary disclosure?`,
        a: `Once HMRC contacts you, any disclosure you make is classed as "prompted," which carries higher penalty rates. However, it is still critical to respond professionally and make a structured disclosure to avoid formal audits or prosecution.`
      }
    ]
  },
  'personal-income-tax': {
    title: `Personal Income Tax`,
    subtitle: `Expert Personal Income Tax Accountants`,
    img: personalIncomeImg,
    heroIntro: `Income tax problems usually begin long before the tax return is filed. Very few people wake up one morning and realise their tax position has become complicated. It happens gradually: a director starts taking dividends alongside salary, a rental property starts generating profit, or freelance work slowly grows into a regular business.`,
    heroDetails: `Nothing feels especially serious while each part is happening individually. The problem appears later when all of it has to be brought together. That is the point where people notice that income tax is not simply about earnings; it is about how different sources interact, allowances, and structures. Taxaccolega supports individuals, company directors, landlords, and business owners across London and the UK with comprehensive personal income tax returns, structuring, and strategic tax planning.`,
    sections: [
      {
        type: `difficult`,
        title: `Income Tax for Complex and Multi-Source Income`,
        subtitle: `PAYE employment is straightforward, but multi-source income requires professional care.`,
        content: `When income starts arriving from several directions, the UK tax position changes completely. Different types of income follow entirely different rules and interact with tax bands, allowances, and reporting obligations.`,
        bullets: [
          `Directors taking a combination of salary, dividends, and loans`,
          `Self-employed sole traders and freelancers navigating allowable business expenses`,
          `Landlords managing rental portfolios and interest deductions`,
          `Individuals receiving investment dividends and capital gains`,
          `Consultants and professionals with dual employment or side businesses`,
          `High earners losing their personal allowance over the £100,000 threshold`,
          `Expatriates and non-UK residents with overseas income and international assets`
        ],
        footer: `A personal income tax accountant does not simply calculate tax after the year ends. The real value comes from identifying how your income flows, where tax inefficiencies exist, and establishing a structured, compliant personal tax plan.`
      },
      {
        type: `cards`,
        title: `Who We Assist with Personal Income Tax`,
        intro: `We provide specialized support tailored to your unique financial situation.`,
        cards: [
          {
            title: `Company Directors`,
            text: `Optimising the balance between salary, dividends, and director loans to ensure maximum tax efficiency and fully compliant withdrawals.`
          },
          {
            title: `High Earners & Professionals`,
            text: `Helping individuals with income over £100k navigate the tapering of the personal allowance, pension contributions, and annual tax-free allowances.`
          },
          {
            title: `Sole Traders & Freelancers`,
            text: `Preparing annual Self Assessment returns, calculating allowable business expenses, and managing Payment on Account obligations.`
          }
        ]
      }
    ],
    faqs: [
      {
        q: `Who needs to file a UK Self Assessment tax return?`,
        a: `You must file a tax return if you are self-employed with earnings over £1,000, a director of a limited company, have rental income, have income over £100,000, or have undisclosed foreign income.`
      },
      {
        q: `How are dividends taxed in the UK?`,
        a: `Dividends have their own tax-free allowance (£500 for the 24/25 tax year). Above this allowance, they are taxed at dividend tax rates (8.75% for basic rate, 33.75% for higher rate, and 39.35% for additional rate taxpayers).`
      },
      {
        q: `What is the Personal Savings Allowance?`,
        a: `The Personal Savings Allowance allows basic rate taxpayers to earn up to £1,000 in savings interest tax-free. Higher rate taxpayers have an allowance of £500, while additional rate taxpayers have no allowance.`
      },
      {
        q: `Can I claim expenses if I work from home as a sole trader?`,
        a: `Yes. You can either claim a proportion of your actual home utility bills based on the hours worked or use HMRC's simplified flat-rate expenses for working from home.`
      },
      {
        q: `What happens if I miss the Self Assessment filing deadline?`,
        a: `Missing the January 31st online deadline results in an immediate £100 penalty. After 3 months, daily penalties of £10 are charged. Interest also accrues on any unpaid tax liabilities from the due date.`
      }
    ]
  },
  'company-tax-return-accountants': {
    title: `Company Tax Return Accountants`,
    subtitle: `Your Trusted Partner for Expert Corporation Tax Compliance and Optimisation`,
    img: companyTaxReturnImg,
    heroIntro: `Navigating corporation tax can be complex, especially with evolving regulations. Our specialist Corporation Tax Accountants ensure your business remains compliant and tax-efficient.`,
    heroDetails: `We offer comprehensive services for limited companies, from accurate tax calculations to preparing and filing CT600 forms. Our proactive approach minimizes your tax burden legally, ensuring adherence to all HMRC regulations and maximizing available reliefs.`,
    sections: [
      {
        type: `difficult`,
        title: `Challenges in Corporation Tax`,
        subtitle: `Corporation tax legislation is complex, requiring expert knowledge to avoid penalties and maximise savings.`,
        content: `Many businesses encounter difficulties with corporation tax, particularly in areas such as allowable expenses, capital allowances, and tax planning strategies. Mistakes can lead to significant penalties and missed opportunities for tax savings.`,
        bullets: [
          `Understanding allowable expenses and capital allowances`,
          `Accurate calculation of taxable profits and liabilities`,
          `Timely submission of CT600 forms and supporting documents`,
          `Navigating group relief and transfer pricing rules`,
          `Maximising research and development (R&D) tax credits`,
          `Dealing with HMRC enquiries and investigations`
        ],
        footer: `Proactive corporation tax planning is essential to ensure compliance and optimise your company's financial position, turning potential liabilities into strategic advantages.`
      },
      {
        type: `cards`,
        title: `Our Corporation Tax Services`,
        intro: `We offer a full spectrum of corporation tax services tailored to meet the needs of your business, ensuring efficiency and compliance.`,
        cards: [
          { title: `Corporation Tax Planning`, text: `Developing bespoke strategies to legally reduce your company's corporation tax liability and improve cash flow.` },
          { title: `CT600 Preparation & Filing`, text: `Accurate preparation and timely submission of your company tax returns to HMRC, ensuring compliance.` },
          { title: `Tax Enquiries & Disputes`, text: `Expert representation and support during HMRC enquiries, investigations, and tax disputes.` }
        ]
      }
    ],
    faqs: [
      { q: `What is Corporation Tax?`, a: `Corporation Tax is a tax paid by UK limited companies on their taxable profits, which include trading profits, investment profits, and chargeable gains.` },
      { q: `When is Corporation Tax due?`, a: `Corporation Tax is due nine months and one day after the end of your company's accounting period. The company tax return (CT600) filing deadline is 12 months after the end of the accounting period.` },
      { q: `What are capital allowances?`, a: `Capital allowances allow businesses to deduct the cost of certain capital expenditures from their profits before tax, effectively reducing their corporation tax liability.` },
      { q: `Can I claim R&D tax credits?`, a: `If your company is undertaking qualifying research and development activities, you may be eligible to claim generous R&D tax credits, significantly reducing your tax bill or providing a cash payment.` },
      { q: `What happens if I file my CT600 late?`, a: `HMRC imposes automatic penalties for late filing of your CT600, even if there is no Corporation Tax to pay. Interest will also be charged on any overdue tax.` }
    ]
  },
  'vat-accountants': {
    title: `VAT Accountants UK`,
    subtitle: `Your Expert Partner for Seamless VAT Returns and Compliance`,
    img: vatAccountantsImg,
    heroIntro: `Navigating Value Added Tax (VAT) can be a complex and time-consuming task for businesses. Our dedicated VAT accountants ensure your business remains fully compliant with HMRC regulations, helping you avoid penalties and streamline your financial operations.`,
    heroDetails: `From initial VAT registration and choosing the most suitable scheme to accurate preparation and timely submission of your VAT returns, we handle all aspects of your VAT obligations. We provide expert advice on complex VAT issues, optimize your processes, and identify potential savings, allowing you to focus on your core business activities.`,
    sections: [
      {
        type: `difficult`,
        title: `Common VAT Challenges`,
        subtitle: `VAT rules are intricate and constantly evolving, demanding meticulous attention to detail.`,
        content: `Many businesses, especially those with diverse operations or international dealings, find VAT compliance particularly challenging. Misinterpretations or errors can lead to significant financial repercussions and disputes with HMRC.`,
        bullets: [
          `Understanding VAT registration thresholds and obligations`,
          `Applying correct VAT rates to a variety of goods and services`,
          `Managing international VAT implications (imports, exports, reverse charge)`,
          `Navigating industry-specific VAT schemes and partial exemption rules`,
          `Accurate record-keeping and digital submission requirements`,
          `Dealing with VAT inspections and HMRC enquiries`
        ],
        footer: `Given the potential for substantial penalties for non-compliance, entrusting your VAT affairs to expert accountants is not just a convenience, but a strategic business decision to safeguard your finances.`
      },
      {
        type: `cards`,
        title: `Our Comprehensive VAT Services`,
        intro: `We offer a full suite of VAT accounting services designed to simplify your compliance and optimize your financial position.`,
        cards: [
          { title: `VAT Registration & De-registration`, text: `Assisting with initial registration, advising on voluntary registration, and handling de-registration processes.` },
          { title: `VAT Return Preparation & Submission`, text: `Accurate and timely compilation and digital submission of your periodic VAT returns to HMRC.` },
          { title: `VAT Planning & Advisory`, text: `Expert guidance on complex VAT issues, scheme optimization, and strategic tax planning to minimize liabilities.` }
        ]
      }
    ],
    faqs: [
      { q: `Who needs to register for VAT in the UK?`, a: `You must register for VAT if your VAT taxable turnover exceeds the current registration threshold (currently £90,000) within a 12-month period, or if you expect to exceed it in the next 30 days.` },
      { q: `What is 'Making Tax Digital for VAT'?`, a: `Making Tax Digital (MTD) for VAT requires most VAT-registered businesses to keep digital records and submit their VAT returns using MTD-compatible software.` },
      { q: `Can I reclaim VAT on all business expenses?`, a: `Generally, you can reclaim VAT on most goods and services purchased for business use, provided you have valid VAT invoices. However, there are exceptions, such as certain business entertainment expenses and cars.` },
      { q: `What are the different VAT schemes available?`, a: `HMRC offers various VAT schemes, including the Standard Accounting Scheme, Cash Accounting Scheme, Flat Rate Scheme, and Annual Accounting Scheme, each suited to different business types and sizes.` },
      { q: `What happens if I submit my VAT return late?`, a: `Late submission of VAT returns can result in penalties from HMRC. The penalty system is points-based, with charges increasing for repeated late submissions. Interest may also be charged on overdue payments.` }
    ]
  },
  'inheritance-tax-planning': {
    title: `Inheritance Tax Planning`,
    subtitle: `Preserving Your Wealth for Future Generations`,
    img: inheritanceTaxImg,
    heroIntro: `Inheritance Tax (IHT) can significantly erode the value of the estate you pass on to your loved ones. Effective and timely planning is crucial to minimise this burden and ensure your legacy is preserved according to your wishes.`,
    heroDetails: `Our specialist Inheritance Tax advisors provide comprehensive and tailored planning advice. We guide you through the complexities of IHT rules, helping you understand available reliefs, exemptions, and strategies such as trusts and lifetime giving, to legally reduce your IHT liability. Our goal is to ensure that your beneficiaries receive the maximum possible inheritance.`,
    sections: [
      {
        type: `difficult`,
        title: `Challenges in Inheritance Tax Planning`,
        subtitle: `IHT rules are intricate and often misunderstood, leading to unexpected tax liabilities.`,
        content: `Many individuals are unaware of the various ways their estate could be subject to IHT, or they miss opportunities to plan effectively. This can result in a significant portion of their wealth being paid in tax rather than benefiting their family.`,
        bullets: [
          `Understanding the Nil-Rate Band and Residence Nil-Rate Band`,
          `Effective use of gifts and exemptions (e.g., annual exemption, normal expenditure out of income)`,
          `The complexities of different types of trusts (e.g., discretionary, bare, interest in possession)`,
          `Planning for business property relief (BPR) and agricultural property relief (APR)`,
          `Addressing overseas assets, domicile status, and international implications`,
          `Reviewing wills and ensuring they align with IHT planning objectives`
        ],
        footer: `Proactive and expert Inheritance Tax planning is not merely about tax avoidance; it's about responsible wealth management and ensuring your intentions for your estate are realised, protecting your family's future.`
      },
      {
        type: `cards`,
        title: `Our Comprehensive IHT Planning Services`,
        intro: `We offer a holistic approach to Inheritance Tax planning, providing peace of mind and financial security for your family.`,
        cards: [
          { title: `Estate Review & Valuation`, text: `A thorough analysis of your assets, liabilities, and current will to assess potential IHT exposure.` },
          { title: `Tax-Efficient Gifting Strategies`, text: `Advising on making lifetime gifts, utilising exemptions, and navigating the 7-year rule to reduce your estate for IHT.` },
          { title: `Trust Creation & Management`, text: `Guidance on establishing suitable trusts (e.g., bare, discretionary) to protect assets and control their distribution.` }
        ]
      }
    ],
    faqs: [
      { q: `What is Inheritance Tax (IHT)?`, a: `Inheritance Tax is a tax on the value of a person's estate (their property, money, and possessions) when they die. It can also be charged on certain gifts made during their lifetime.` },
      { q: `What is the IHT Nil-Rate Band?`, a: `The Nil-Rate Band (NRB) is the threshold up to which an estate pays no IHT. For the 2024/25 tax year, this is £325,000. Any unused NRB can often be transferred to a surviving spouse or civil partner.` },
      { q: `What is the Residence Nil-Rate Band (RNRB)?`, a: `The Residence Nil-Rate Band is an additional IHT allowance available when a main residence is passed to direct descendants (children, grandchildren, etc.). For 2024/25, this is £175,000 per individual.` },
      { q: `How do gifts affect Inheritance Tax?`, a: `Gifts made more than 7 years before death are generally exempt from IHT. Gifts made within 7 years may be subject to IHT, with the tax reducing on a sliding scale (taper relief) after 3 years.` },
      { q: `Can I use a trust to reduce IHT?`, a: `Yes, trusts can be an effective tool for IHT planning, allowing you to legally remove assets from your estate while retaining some control or specifying how they are to be used. The rules surrounding trusts are complex, and professional advice is essential.` }
    ]
  },
  'tax-investigation-insurance': {
    title: `Tax Investigation Insurance UK`,
    subtitle: `Protecting You from Unforeseen HMRC Inquiry Costs`,
    img: taxInvestigationImg,
    heroTitle: `An HMRC enquiry doesn’t ask whether you’re ready for it`,
    heroIntro: `Most people assume a tax investigation starts because something has gone wrong. In many cases, that isn’t how it begins.`,
    heroDetails: `Most people assume a tax investigation starts because something has gone wrong.

In many cases, that isn’t how it begins.

HMRC enquiries are often triggered by patterns, inconsistencies, or routine checks across sectors. A return can be selected even when everything appears correct on the surface. Once that process starts, the focus shifts quickly from “what was submitted” to “how it can be evidenced.”

That shift is where the real pressure sits.

Because at that point, the question is no longer about filing — it’s about whether every figure can be supported, explained, and defended.

This is where tax investigation insurance and specialist support become relevant. Not as a precaution in theory, but as a practical way to manage what happens once an enquiry is already in motion.`,
    sections: [
      {
        type: `text-image`,
        title: `Tax Investigation Insurance UK – What It Covers in Practice`,
        content: `Tax investigation insurance is designed to cover the professional costs involved in handling an HMRC enquiry.

It does not remove the investigation.

It ensures that:

●  you are represented throughout the process
●  responses are handled professionally
●  the cost of dealing with the enquiry does not escalate unpredictably

Whether you are dealing with a personal tax investigation, a business enquiry, or want to put protection in place in advance, the objective remains:

to manage the process properly without financial strain influencing decisions.`,
        img: taxInvestigationImg
      },
      {
        type: `text-split`,
        title: ``,
        subtitle: ``,
        leftContent: `Not all investigations follow the same route
HMRC enquiries vary in scope and depth. Some focus on specific areas, while others involve a full review of financial activity.`,
        rightContent: `Evidence matters more than explanation
During an enquiry, what matters is not what you intended — but what can be demonstrated.`
      },
      {
        type: `text-split`,
        title: `How HMRC Tax Investigations Actually Work`,
        subtitle: `Not all investigations follow the same route`,
        leftContent: `HMRC enquiries vary in scope and depth. Some focus on specific areas, while others involve a full review of financial activity.

Evidence matters more than explanation
During an enquiry, what matters is not what you intended — but what can be demonstrated.

Common types include:
● aspect enquiries (focused on one area)
● full enquiries (covering the entire return)
● compliance checks across multiple years`,
        rightContent: `Each requires a different level of response and preparation.

This includes:
● supporting records
● transaction history
● consistency across submissions

Where records are incomplete or inconsistent, the enquiry tends to expand rather than narrow.

This is why structured records maintained through bookkeeping services for small businesses often determine how smoothly an enquiry progresses.`
      },
      {
        type: `table`,
        title: `The 5 Stages of a Tax Investigation`,
        subtitle: `Each stage requires controlled handling. Delays or unclear responses can extend the process significantly.`,
        headers: [`Stage`, `What Happens`, `Where Pressure Builds`],
        rows: [
          [`Initial Contact`, `HMRC opens enquiry`, `Uncertainty about scope`],
          [`Information Request`, `Documents requested`, `Availability of records`],
          [`Review & Analysis`, `HMRC examines data`, `Inconsistencies identified`],
          [`Clarification`, `Questions raised`, `Responses must be precise`],
          [`Outcome`, `Adjustments or closure`, `Financial implications`]
        ]
      },
      {
        type: `text-image`,
        title: `Where Tax Investigations Become Difficult`,
        content: `Investigations tend to become more complex when multiple areas overlap.

For example:

● income reported through self assessment tax return services does not align with underlying records

● company figures differ from those used in corporation tax services

● VAT submissions show patterns that conflict with reported income via VAT return accountants

Individually, these may seem minor. During an enquiry, they are reviewed together. A common example is where turnover figures reported through VAT returns differ slightly from income reflected within company accounts, creating questions that expand beyond the original enquiry scope.`,
        img: taxInvestigationImg
      },
      {
        type: `text-image`,
        title: `Why Most Tax Investigations Escalate Instead of Resolve`,
        content: `The turning point in an investigation is rarely the initial enquiry.

It is how the response is handled.

Common patterns include:

● incomplete information provided early

● inconsistent figures across documents

● assumptions made instead of verified responses

These do not immediately lead to penalties.

They lead to further questions.

And each additional question widens the scope of the enquiry.

Where responses are delayed or records are assembled reactively, the investigation often becomes harder to contain as the process continues. What could have remained focused becomes extended, not because of the original issue, but because the responses introduce uncertainty.

This is why handling an investigation is not just about answering questions — it is about controlling how the enquiry develops.`,
        img: taxInvestigationImg
      },
      {
        type: `text-image`,
        title: `Tax Investigation and Personal Income`,
        content: `Personal tax investigations often involve multiple income sources.

This may include:

● employment income

● dividends

● rental income

● foreign income

Where these have not been aligned properly, the enquiry tends to expand across all areas.

This is where coordination with income tax services UK becomes critical, ensuring that responses reflect the full position rather than isolated figures.`,
        img: taxInvestigationImg
      },
      {
        type: `text-image`,
        title: `Business Tax Investigations and Company Records`,
        content: `For businesses, investigations often extend beyond a single return.

HMRC may review:

● company accounts

● expense treatment

● director transactions

● payroll records

Where these are not aligned, the enquiry can move across multiple reporting areas.

This includes interaction with payroll services UK and financial outputs that feed into statutory reporting.`,
        img: taxInvestigationImg
      },
      {
        type: `text-split`,
        title: `Tax Investigation Insurance – Where It Makes a Difference`,
        subtitle: `The cost of handling an investigation is often underestimated.`,
        leftContent: `It is not a single interaction.

It involves:

● ongoing correspondence
● detailed review of records
● preparation of structured responses`,
        rightContent: `Tax investigation insurance ensures that:

● professional time is covered
● responses are handled thoroughly
● decisions are not influenced by cost constraints

Without cover, individuals and businesses may limit the level of support they engage — which can affect the outcome.`
      },
      {
        type: `text-image`,
        title: `What Our Tax Investigation Services Actually Change`,
        content: `Most providers will:

● respond to HMRC

● provide general support

● assist with documentation

That is expected.

What changes the outcome is how the investigation is managed from the start. This is not simply about responding to HMRC — it is about managing how the enquiry evolves from the moment it begins.

Our approach focuses on:
● controlling the scope of the enquiry early
● ensuring consistency across all responses
● aligning records before they are presented

This results in:
● more focused enquiries
● fewer unnecessary extensions
● clearer resolution pathways

The difference is not in responding — it is in how the enquiry is handled strategically.`,
        img: taxInvestigationImg
      },
      {
        type: `text-split`,
        title: `When You Should Speak to a Tax Investigation Specialist`,
        subtitle: `Most people seek support after:`,
        leftContent: `Most people seek support after:

● receiving an HMRC letter
● attempting an initial response
● realising the scope is wider than expected

At that point, the process has already started.`,
        rightContent: `You should seek specialist support when:

● an enquiry is opened
● information is requested
● there is uncertainty about how to respond

Because early responses shape how the investigation develops. Later responses only react to it.`
      },
      {
        type: `text-image`,
        title: `Tax Investigation and Long-Term Risk`,
        content: `Investigations do not exist in isolation.

They often highlight:

● weaknesses in record keeping

● inconsistencies in reporting

● structural issues across tax areas

This is why they often lead to broader reviews involving tax advisory services UK, ensuring that similar issues do not arise again.`,
        img: taxInvestigationImg
      },
      {
        type: `text-image-reversed`,
        title: `Speak to Tax Investigation Specialists in London UK`,
        content: `If you are under HMRC enquiry, the process is already underway.

What matters now is how it is handled.

Whether you need:

● tax investigation insurance

● professional representation

● structured response support

delaying action does not pause the enquiry — it allows it to develop without control.`,
        img: taxInvestigationImg
      }
    ],
    faqs: [
      { q: `What does Tax Investigation Insurance cover?`, a: `Our Tax Investigation Insurance covers the professional fees charged by your accountant or tax advisor for handling a wide range of HMRC inquiries and investigations, including income tax, corporation tax, VAT, PAYE, and IR35 status disputes.` },
      { q: `Who needs this type of insurance?`, a: `Anyone who submits a tax return, whether individuals, sole traders, partnerships, limited companies, or landlords, can benefit. All tax-paying entities are potentially subject to HMRC investigation.` },
      { q: `Does the insurance cover penalties or unpaid tax?`, a: `No, the insurance exclusively covers the professional fees incurred for defending you during an investigation. It does not cover any tax liabilities, interest, or penalties that HMRC may levy as a result of the investigation findings.` },
      { q: `How common are HMRC tax investigations?`, a: `HMRC conducts hundreds of thousands of inquiries each year. While full-scale investigations are less frequent, many businesses and individuals face aspect inquiries, compliance checks, or random audits.` },
      { q: `Can I get this insurance if I'm already under investigation?`, a: `Typically, tax investigation insurance cannot be purchased once an investigation has already been initiated. It is designed to cover future, unforeseen inquiries, making proactive purchase essential.` }
    ]
  }
};