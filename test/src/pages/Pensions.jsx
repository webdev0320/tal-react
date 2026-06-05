import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import Partners from '../components/Partners';
import ReviewsSlider from '../components/ReviewsSlider';

const Pensions = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Proposal request submitted!');
    setFormData({ name: '', email: '', message: '' });
  };

  const faqs = [
    { q: "What do payroll services include?", a: "Payroll services include salary calculations, PAYE deductions, RTI submissions, pension processing, payslips, and payroll reporting." },
    { q: "What is RTI in payroll?", a: "RTI (Real Time Information) is the HMRC reporting system used each time employees are paid." },
    { q: "Can payroll services handle pension auto enrolment?", a: "Yes. Payroll services can manage pension eligibility, deductions, and contribution reporting." },
    { q: "Why do businesses outsource payroll services?", a: "Businesses outsource payroll to reduce internal workload, improve accuracy, and ensure payroll deadlines are met consistently." },
    { q: "How often should payroll be processed?", a: "Most UK businesses process payroll monthly, although weekly and fortnightly payroll cycles are also common." },
    { q: "What happens if payroll is submitted incorrectly?", a: "Incorrect payroll submissions can create HMRC discrepancies, pension issues, employee underpayments, and correction work across future payroll periods." }
  ];

  return (
    <div className="bg-white">

      {/* ── HERO SECTION WITH SIDEBAR OVERLAP ── */}
      <header className="position-relative text-white overflow-hidden py-5" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)', minHeight: '380px' }}>
        <div className="position-absolute w-100 h-100" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(210, 96, 26, 0.15) 0%, transparent 60%)', top: 0, left: 0, zIndex: 1 }}></div>
        <div className="container position-relative py-4" style={{ zIndex: 2 }}>
          <div className="row g-4 align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <span className="text-uppercase small tracking-wider fw-bold mb-2 d-inline-block text-brand-orange" style={{ letterSpacing: '2px' }}>
                Auto Enrolment Specialists
              </span>
              <h1 className="display-4 fw-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Auto Enrolment Pension UK – Contributions, Rates & Eligibility
              </h1>
              <p className="lead text-white-50 mb-4" style={{ maxWidth: '680px', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Expert Guidance for Auto Enrolment: Tailored Solutions for Seamless Compliance at Taxaccolega.
              </p>
              
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mb-4">
                <a href="#contact-block" className="btn btn-brand px-4 py-2 shadow">
                  CONTACT US
                </a>
              </div>

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0 small" style={{ background: 'transparent' }}>
                  <li className="breadcrumb-item"><Link to="/" className="text-decoration-none text-brand-orange">Home</Link></li>
                  <li className="breadcrumb-item"><Link to="/accounts" className="text-decoration-none text-brand-orange">Accounts</Link></li>
                  <li className="breadcrumb-item active text-white-50" aria-current="page">Auto Enrolment</li>
                </ol>
              </nav>
            </div>
            
            {/* HERO OVERLAPPING SIDEBAR */}
            <div className="col-lg-4 d-none d-lg-block position-relative" style={{ zIndex: 3 }}>
              <div className="p-4 rounded-4 shadow-lg" style={{ background: 'linear-gradient(180deg, rgba(232,162,116,0.9) 0%, rgba(212,108,36,0.95) 50%, rgba(184,80,14,1) 100%)' }}>
                <h5 className="text-white fw-bold mb-4 text-center border-bottom pb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>Quick Navigation</h5>
                <div className="d-flex flex-column gap-3">
                  {[
                    { title: 'Management Accounts', link: '/accounts/management-accounts' },
                    { title: 'Statutory Accounts', link: '/accounts/statutory-accounts' },
                    { title: 'Bookkeeping', link: '/accounts/bookkeeping-services' }
                  ].map((item, idx) => (
                    <Link key={idx} to={item.link} className="card border-0 shadow rounded-3 p-3 text-decoration-none bg-white hover-shadow transition" style={{ transition: 'all 0.3s' }}>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-bold text-brand-dark" style={{ fontSize: '0.95rem' }}>{item.title}</span>
                        <span className="text-brand-orange fw-bold">READ MORE &raquo;</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-bottom py-3">
        <div className="container px-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 small">
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none" style={{ color: '#D2601A' }}>Home</Link></li>
              <li className="breadcrumb-item"><Link to="/accounts" className="text-decoration-none" style={{ color: '#D2601A' }}>Accounts</Link></li>
              <li className="breadcrumb-item active text-secondary">Auto Enrolment</li>
            </ol>
          </nav>
        </div>
      </div>
      
      <main className="py-5">
        <div className="container">
          <section className="mb-5">
            <p>For many employers, pension compliance does not become stressful when the scheme is first set up.</p>
            <p>It becomes stressful three months later.</p>
            <p>A new employee joins halfway through a payroll cycle. Someone’s pay changes because overtime suddenly increases. Another employee turns eligible because their earnings cross the threshold for automatic enrolment. An opt-out request arrives after payroll has already been processed. Then re-enrolment dates appear in the background while payroll deadlines are already tight.</p>
            <p>That is usually when businesses realise pension auto enrolment is not a static setup.</p>
            <p>It is a live process connected to every payroll run, every employee change, and every contribution calculation moving through the business.</p>
            <p>On paper, workplace pension rules can appear straightforward. In practice, employers are expected to monitor eligibility, apply automatic enrolment pension contributions correctly, maintain records, reassess workers at the right points, and keep payroll and pension data aligned continuously.</p>
            <p>This is where many businesses start relying on structured pension and payroll support rather than trying to manage auto enrolment internally while balancing daily operations.</p>
            <p>At Taxaccolega, we support employers across London and the UK with auto enrolment pension contributions, pension eligibility reviews, workplace pension calculations, payroll-linked pension administration, and ongoing compliance support built around how businesses actually operate.</p>
          </section>
          
          <section className="mb-5">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2 className="text-deepTeal">Auto Enrolment Pension Contributions UK – Why the Process Becomes Difficult Over Time</h2>
                <p>The challenge with pension auto enrolment is rarely the first contribution.</p>
                <p>The challenge is maintaining consistency as the business changes.</p>
                <p>A business with five employees may initially manage pension deductions comfortably. Then staffing grows. Payroll becomes more variable. Salaries change more often. Bonuses are introduced. Different worker categories start appearing across the workforce.</p>
                <p>That is when pension administration becomes operational rather than administrative.</p>
                <p>Automatic enrolment rules require employers to continually assess:</p>
                <ul>
                  <li>employee age</li>
                  <li>earnings thresholds</li>
                  <li>pension eligibility</li>
                  <li>contribution rates</li>
                  <li>opt-in rights</li>
                  <li>re-enrolment duties</li>
                  <li>pensionable pay treatment</li>
                </ul>
                <p>The difficulty is that these factors move constantly.</p>
                <p>A pension contribution that was correct last month may become inaccurate after a payroll adjustment or earnings change if the assessment process is not updated alongside it.</p>
                <p>This is why pension auto enrolment usually works best when connected directly with payroll services rather than treated as a separate process operating independently.</p>
              </div>
              <div className="col-md-6">
                <div className="bg-secondary rounded p-5 text-center text-white">Placeholder Image</div>
              </div>
            </div>
          </section>
          
          <section className="mb-5">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2 className="text-deepTeal">How Pension Auto Enrolment Actually Works in Practice</h2>
                <h4 className="text-brand-orange">Worker eligibility changes more often than most employers expect</h4>
                <p>Automatic enrolment eligibility is based primarily on:</p>
                <ul>
                  <li>age</li>
                  <li>earnings</li>
                  <li>worker classification</li>
                </ul>
                <p>That sounds simple until payroll becomes active in real conditions.</p>
                <p>An employee who was previously below the earnings threshold may become eligible because of overtime. A part-time worker may temporarily cross pension limits during seasonal periods. A common example is where overtime or irregular monthly earnings temporarily move an employee into a different eligibility category without pension treatment being reassessed alongside payroll. A younger employee may move into the qualifying age bracket without anyone noticing immediately.</p>
                <p>The rules themselves are not necessarily complicated.</p>
                <p>The risk comes from assuming eligibility stays static when workforce conditions keep changing.</p>
              </div>
              <div className="col-md-6">
                <div className="bg-secondary rounded p-5 text-center text-white">Placeholder Image</div>
              </div>
            </div>
          </section>

          <section className="mb-5">
            <h3 className="text-center mb-4">Auto Enrolment Eligibility and Pension Assessment</h3>
            <div className="table-responsive">
              <table className="table table-bordered text-center">
                <thead>
                  <tr><th>Assessment Area</th><th>What Needs Reviewing</th><th>Why It Matters</th></tr>
                </thead>
                <tbody>
                  <tr><td>Worker age</td><td>Automatic enrolment age rules</td><td>Determines pension category</td></tr>
                  <tr><td>Earnings level</td><td>Workplace pension thresholds</td><td>Controls eligibility status</td></tr>
                  <tr><td>Pay frequency</td><td>Weekly or monthly payroll</td><td>Affects timing of assessment</td></tr>
                  <tr><td>Worker type</td><td>Employee, director, contractor</td><td>Determines employer duties</td></tr>
                  <tr><td>Pensionable pay basis</td><td>Qualifying earnings or full pay</td><td>Impacts contribution calculation</td></tr>
                </tbody>
              </table>
            </div>
            <p className="small text-muted"><em>This section works best here because pension assessment comes before contribution processing. Employers first need to establish who should be assessed and how pension treatment should apply before deductions are calculated.</em></p>
          </section>

          <section className="mb-5">
            <h2 className="text-deepTeal">Why Auto Enrolment Problems Usually Start Inside Payroll</h2>
            <p>Most pension issues do not begin with pension providers.</p>
            <p>They begin with payroll movement.</p>
            <p>A salary increase is processed but pension rates are not reviewed. A new starter is added after payroll cut-off dates. Statutory sick pay changes contribution calculations. Variable pay alters eligibility status. An employee opts out but the records supporting that action are incomplete.</p>
            <p>The issue is rarely one major failure.</p>
            <p>It is small inconsistencies repeating quietly across multiple payroll cycles.</p>
            <p>This is why pension auto enrolment should not be treated as a one-time compliance task completed during initial setup.</p>
            <p>It is an ongoing operational process that moves with payroll every single pay period.</p>
            <p>That operational connection is also why accurate bookkeeping services and management accounts become important. Pension contributions affect wage reporting, employer costs, payroll liabilities, and future staffing decisions across the wider financial structure of the business.</p>
          </section>

          <section className="mb-5">
            <h2 className="text-deepTeal">Automatic Enrolment Pension Rates and Employer Contributions</h2>
            <p>Automatic enrolment minimum contributions require both employer and employee pension contributions to be maintained at compliant levels under workplace pension rules.</p>
            <p>What many businesses underestimate is how sensitive those contribution levels become once payroll grows more complex.</p>
            <p>For example:</p>
            <ul>
              <li>bonuses may affect pensionable pay</li>
              <li>maternity pay may change contribution treatment</li>
              <li>directors may require separate assessment</li>
              <li>irregular pay patterns may shift thresholds</li>
              <li>multiple payroll frequencies may affect calculations</li>
            </ul>
            <p>This is why businesses often search for:</p>
            <ul>
              <li>auto enrolment pension calculator</li>
              <li>automatic enrolment pension rates</li>
              <li>minimum workplace pension contributions</li>
              <li>pension auto enrolment UK</li>
              <li>how do you calculate pension contributions</li>
            </ul>
            <p>The technical formula itself is rarely the hardest part.</p>
            <p>The real difficulty is applying the right formula to the correct employee category at the correct point in time.</p>
          </section>

          <section className="mb-5">
            <h3 className="text-center mb-4">Where Pension Auto Enrolment Usually Breaks Down</h3>
            <div className="table-responsive">
              <table className="table table-bordered text-center">
                <thead>
                  <tr><th>Risk Area</th><th>What Typically Happens</th><th>Operational Consequence</th></tr>
                </thead>
                <tbody>
                  <tr><td>Delayed worker assessment</td><td>New starters not reviewed promptly</td><td>Missed enrolment duties</td></tr>
                  <tr><td>Incorrect earnings basis</td><td>Contributions calculated on wrong figures</td><td>Under or overpayment</td></tr>
                  <tr><td>Poor pension records</td><td>Opt-outs or notices undocumented</td><td>Weak compliance evidence</td></tr>
                  <tr><td>Payroll and pension mismatch</td><td>Payslip and pension data differ</td><td>Reconciliation problems</td></tr>
                  <tr><td>Re-enrolment ignored</td><td>Previous opt-outs not reassessed</td><td>Employer duties missed</td></tr>
                </tbody>
              </table>
            </div>
            <p className="small text-muted"><em>This section creates the authority layer of the page because it demonstrates how pension compliance problems develop operationally rather than theoretically.</em></p>
          </section>

          <section className="mb-5">
            <h2 className="text-deepTeal">Insight Section: Pension Errors Usually Stay Hidden Until Someone Looks Closely</h2>
            <p>One of the biggest misconceptions around pension auto enrolment is assuming that errors become obvious immediately.</p>
            <p>Most do not.</p>
            <p>A contribution can be slightly incorrect for months without triggering visible concern. A worker may be assessed under the wrong category quietly across several payroll cycles. Re-enrolment obligations may be missed simply because nobody realised reassessment dates had arrived.</p>
            <p>Everything appears stable on the surface: payslips are processed, payroll runs complete, pension deductions exist, employees are being paid.</p>
            <p>The problem only becomes visible later: during payroll review, during pension provider checks, during compliance follow-up, when employees question contribution levels, or when records need to be reconstructed historically.</p>
            <p>At that point, the issue is no longer setup. It becomes correction work.</p>
            <p>That is usually far more time-consuming than maintaining accurate pension processes properly from the beginning.</p>
          </section>

          <section className="mb-5">
            <h2 className="text-deepTeal">Pension Auto Enrolment and Wider Business Cost Planning</h2>
            <p>These two areas are closely connected but often misunderstood.</p>
            <p>Employer pension contributions are not isolated payroll figures.</p>
            <p>They directly affect: employment cost structure, staffing affordability, hiring decisions, operational forecasting, and future cash commitments.</p>
            <p>This is why pension planning naturally connects with: financial forecasting, cashflow forecasting, payroll services, management accounts, and statutory accounts preparation.</p>
            <p>For growing businesses especially, pension obligations need to be modelled realistically alongside salary costs rather than treated as a minor add-on.</p>
            <p>A business may budget successfully for wages while still underestimating the combined effect of employer pension contributions, National Insurance, payroll administration, and future staffing obligations.</p>
            <p>Forecasting these costs properly creates more stable hiring decisions over time.</p>
          </section>

          <section className="mb-5">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2 className="text-deepTeal">What Our Pension & Auto Enrolment Services Actually Improve</h2>
                <p>Basic pension administration usually focuses on processing deductions.</p>
                <p>This is not simply about processing pension deductions. It is about keeping pension compliance aligned with changing payroll conditions over time. Our approach focuses on keeping the entire process aligned operationally.</p>
                <p>That includes:</p>
                <ul>
                  <li>reviewing worker eligibility properly</li>
                  <li>maintaining pension assessment consistency</li>
                  <li>aligning pension treatment with payroll activity</li>
                  <li>checking contribution calculations against the correct basis</li>
                  <li>maintaining compliance records clearly</li>
                  <li>reducing reconciliation issues later</li>
                  <li>monitoring ongoing pension duties rather than only initial setup</li>
                </ul>
                <p>The outcome is not simply “a pension scheme.”</p>
                <p>The outcome is a cleaner payroll and pension process that remains stable as the business changes.</p>
              </div>
              <div className="col-md-6">
                <div className="bg-secondary rounded p-5 text-center text-white">Placeholder Image</div>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="py-5 bg-light">
            <div className="container">
              <h3>FAQs on Auto Enrolment Pension Contributions</h3>
              {faqs.map((faq, idx) => (
                <div key={idx} className="accordion-item border rounded mb-2">
                  <button className="btn w-100 text-start p-3" onClick={() => setActiveFaqIndex(activeFaqIndex === idx ? null : idx)}>
                    {faq.q}
                  </button>
                  {activeFaqIndex === idx && <div className="p-3 bg-white">{faq.a}</div>}
                </div>
              ))}
            </div>
          </section>

          <section className="py-5 bg-white">
            <div className="container">
              <h2 className="text-deepTeal">Speak to Payroll Service Providers in London UK</h2>
              <p>If payroll is beginning to feel rushed, reactive, or difficult to control internally, it is usually a sign the process has outgrown its current structure.</p>
              <p>Payroll services should remove pressure, not create more of it.</p>
              <p>Taxaccolega supports businesses across London and the UK with outsourced payroll services, RTI reporting, payroll processing, and pension alignment designed to keep payroll accurate before deadlines arrive — not corrected afterwards.</p>
            </div>
          </section>

          <section className="mb-5">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2 className="text-deepTeal">When Employers Should Review Pension Auto Enrolment</h2>
                <p>Many employers wait until a problem appears before reviewing pension compliance.</p>
                <p>Usually the stronger time to review is earlier:</p>
                <ul>
                  <li>before staff numbers increase</li>
                  <li>before payroll complexity grows</li>
                  <li>before variable pay structures expand</li>
                  <li>before re-enrolment dates arrive</li>
                  <li>before payroll corrections become repetitive</li>
                  <li>before pension records become inconsistent</li>
                </ul>
                <p>Once errors spread across multiple payroll periods, reconstruction becomes far more difficult because historic payroll data may need to be reviewed individually.</p>
              </div>
              <div className="col-md-6">
                <div className="bg-secondary rounded p-5 text-center text-white">Placeholder Image</div>
              </div>
            </div>
          </section>

          <section className="mb-5">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2 className="text-deepTeal">Speak to Pension Auto Enrolment Accountants in London UK</h2>
                <p>If pension auto enrolment is currently being handled as a secondary payroll task rather than an active compliance process, there is a strong chance important changes are not being reviewed closely enough.</p>
                <p>At Taxaccolega, we support employers across London and the UK with:</p>
                <ul>
                  <li>auto enrolment pension contributions</li>
                  <li>workplace pension calculations</li>
                  <li>payroll-linked pension administration</li>
                  <li>pension eligibility reviews</li>
                  <li>contribution checks</li>
                  <li>re-enrolment support</li>
                  <li>ongoing pension compliance management</li>
                </ul>
                <p>The focus is not simply setting up workplace pensions.</p>
                <p>It is making sure pension treatment continues working properly every payroll cycle as the business evolves.</p>
              </div>
              <div className="col-md-6">
                <div className="bg-secondary rounded p-5 text-center text-white">Placeholder Image</div>
              </div>
            </div>
          </section>

          {/* Ratings & Contact */}
          <section className="py-5">
            <div className="container" id="contact-block">
              <ReviewsSlider />
              <ReviewsSlider />
              <div className="row mt-5">
                <div className="col-md-6">
                  <h3>Request a Tailored Pension Proposal</h3>
                  <form onSubmit={handleFormSubmit}>
                    <input className="form-control mb-2" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" required />
                    <input className="form-control mb-2" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" required />
                    <textarea className="form-control mb-2" name="message" value={formData.message} onChange={handleInputChange} placeholder="Message" required></textarea>
                    <button className="btn btn-brand">Submit Details</button>
                  </form>
                </div>
              </div>
              </div>
              </section>

              <Partners />
            </div>
          </main>
        </div>
      );
    };

    export default Pensions;
