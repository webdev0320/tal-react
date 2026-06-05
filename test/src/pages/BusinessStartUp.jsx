```jsx
import React, { useState } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaMapMarkerAlt,
} from 'react-icons/fa'; // Assuming you have react-icons installed for SVG replacements

const BusinessStartUp = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [currentIdVerificationStep, setCurrentIdVerificationStep] = useState(0);
  const [showTerms, setShowTerms] = useState(false);
  const [showIdVerificationPopup, setShowIdVerificationPopup] = useState(false);
  const [idFormData, setIdFormData] = useState({
    fornames: '',
    lastName: '',
    dob: '',
    nationality: 'GB',
    place_of_birth: '',
    current_address: '',
    move_in_date: '',
    previous_address: '',
    email: '',
    phone: '',
    isDirector: false,
    isPSC: false,
    id_document: null,
    address_document: null,
    overseas: '',
    overseas_doc: null,
    agree: false,
    billing_name: '',
    billing_address: '',
    billing_city: '',
    billing_postcode: '',
    billing_country: 'GB',
  });
  const [showStripeCheckout, setShowStripeCheckout] = useState(false);

  const handleFaqToggle = (tab) => {
    setActiveFaq(activeFaq === tab ? null : tab);
  };

  const handleIdFormChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setIdFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : files ? files[0] : value,
    }));
  };

  const handleNationalityChange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    setIdFormData((prevData) => ({
      ...prevData,
      nationality: e.target.value,
      selectedNationality: selectedOption.dataset.countryname, // For the hidden input
    }));
  };

  const handleBillingCountryChange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    setIdFormData((prevData) => ({
      ...prevData,
      billing_country: e.target.value,
      selectedBillingCountry: selectedOption.dataset.countryname, // For the hidden input
    }));
  };

  const handleIdVerificationNav = (action) => {
    let newStep = currentIdVerificationStep;
    if (action === 'next') {
      // Basic validation for current step before moving next
      const currentSectionInputs = document.querySelectorAll(`[data-step="${currentIdVerificationStep}"] input[required], [data-step="${currentIdVerificationStep}"] select[required]`);
      let isValid = true;
      currentSectionInputs.forEach(input => {
        if (!input.value && input.type !== 'file' || (input.type === 'file' && !idFormData[input.name])) {
          isValid = false;
          input.classList.add('border-red-500'); // Add a visual error indicator
        } else {
          input.classList.remove('border-red-500');
        }
      });

      // Specific validation for checkboxes
      if (currentIdVerificationStep === 2) { // Role in the Company section
        if (!idFormData.isDirector && !idFormData.isPSC) {
          isValid = false;
          alert('Please select at least one role.');
        }
      }
      if (currentIdVerificationStep === 5) { // Privacy & Consent
        if (!idFormData.agree) {
          isValid = false;
          alert('You must agree to the Terms & Conditions.');
        }
      }


      if (isValid) {
        newStep++;
      }
    } else if (action === 'prev') {
      newStep--;
    }

    if (newStep >= 0 && newStep < 7) { // Assuming 7 steps (0-6)
      setCurrentIdVerificationStep(newStep);
    }
  };

  const handleSubmitIdVerification = (e) => {
    e.preventDefault();
    console.log('ID Verification Form submitted:', idFormData);
    // Here you would typically send idFormData to your backend
    alert('Form Submitted! (This is a mock submission)');
    setShowIdVerificationPopup(false);
    setCurrentIdVerificationStep(0); // Reset form
    setIdFormData({ // Reset form data
      fornames: '',
      lastName: '',
      dob: '',
      nationality: 'GB',
      place_of_birth: '',
      current_address: '',
      move_in_date: '',
      previous_address: '',
      email: '',
      phone: '',
      isDirector: false,
      isPSC: false,
      id_document: null,
      address_document: null,
      overseas: '',
      overseas_doc: null,
      agree: false,
      billing_name: '',
      billing_address: '',
      billing_city: '',
      billing_postcode: '',
      billing_country: 'GB',
    });
  };

  const today = new Date().toISOString().split('T')[0];

  const countries = [
    { code: "GB", name: "United Kingdom" }, { code: "AF", name: "Afghanistan" }, { code: "AL", name: "Albania" }, { code: "DZ", name: "Algeria" }, { code: "AD", name: "Andorra" }, { code: "AO", name: "Angola" }, { code: "AG", name: "Antigua and Barbuda" }, { code: "AR", name: "Argentina" }, { code: "AM", name: "Armenia" }, { code: "AU", name: "Australia" }, { code: "AT", name: "Austria" }, { code: "AZ", name: "Azerbaijan" }, { code: "BS", name: "Bahamas" }, { code: "BH", name: "Bahrain" }, { code: "BD", name: "Bangladesh" }, { code: "BB", name: "Barbados" }, { code: "BY", name: "Belarus" }, { code: "BE", name: "Belgium" }, { code: "BZ", name: "Belize" }, { code: "BJ", name: "Benin" }, { code: "BT", name: "Bhutan" }, { code: "BO", name: "Bolivia" }, { code: "BA", name: "Bosnia and Herzegovina" }, { code: "BW", name: "Botswana" }, { code: "BR", name: "Brazil" }, { code: "BN", name: "Brunei" }, { code: "BG", name: "Bulgaria" }, { code: "BF", name: "Burkina Faso" }, { code: "BI", name: "Burundi" }, { code: "KH", name: "Cambodia" }, { code: "CM", name: "Cameroon" }, { code: "CA", name: "Canada" }, { code: "CV", name: "Cape Verde" }, { code: "CF", name: "Central African Republic" }, { code: "TD", name: "Chad" }, { code: "CL", name: "Chile" }, { code: "CN", name: "China" }, { code: "CO", name: "Colombia" }, { code: "KM", name: "Comoros" }, { code: "CG", name: "Congo" }, { code: "CD", name: "Congo (Democratic Republic)" }, { code: "CR", name: "Costa Rica" }, { code: "HR", name: "Croatia" }, { code: "CU", name: "Cuba" }, { code: "CY", name: "Cyprus" }, { code: "CZ", name: "Czech Republic" }, { code: "DK", name: "Denmark" }, { code: "DJ", name: "Djibouti" }, { code: "DM", name: "Dominica" }, { code: "DO", name: "Dominican Republic" }, { code: "EC", name: "Ecuador" }, { code: "EG", name: "Egypt" }, { code: "SV", name: "El Salvador" }, { code: "GQ", name: "Equatorial Guinea" }, { code: "ER", name: "Eritrea" }, { code: "EE", name: "Estonia" }, { code: "SZ", name: "Eswatini" }, { code: "ET", name: "Ethiopia" }, { code: "FJ", name: "Fiji" }, { code: "FI", name: "Finland" }, { code: "FR", name: "France" }, { code: "GA", name: "Gabon" }, { code: "GM", name: "Gambia" }, { code: "GE", name: "Georgia" }, { code: "DE", name: "Germany" }, { code: "GH", name: "Ghana" }, { code: "GR", name: "Greece" }, { code: "GD", name: "Grenada" }, { code: "GT", name: "Guatemala" }, { code: "GN", name: "Guinea" }, { code: "GW", name: "Guinea-Bissau" }, { code: "GY", name: "Guyana" }, { code: "HT", name: "Haiti" }, { code: "HN", name: "Honduras" }, { code: "HU", name: "Hungary" }, { code: "IS", name: "Iceland" }, { code: "IN", name: "India" }, { code: "ID", name: "Indonesia" }, { code: "IR", name: "Iran" }, { code: "IQ", name: "Iraq" }, { code: "IE", name: "Ireland" }, { code: "IL", name: "Israel" }, { code: "IT", name: "Italy" }, { code: "CI", name: "Ivory Coast" }, { code: "JM", name: "Jamaica" }, { code: "JP", name: "Japan" }, { code: "JO", name: "Jordan" }, { code: "KZ", name: "Kazakhstan" }, { code: "KE", name: "Kenya" }, { code: "KI", name: "Kiribati" }, { code: "KW", name: "Kuwait" }, { code: "KG", name: "Kyrgyzstan" }, { code: "LA", name: "Laos" }, { code: "LV", name: "Latvia" }, { code: "LB", name: "Lebanon" }, { code: "LS", name: "Lesotho" }, { code: "LR", name: "Liberia" }, { code: "LY", name: "Libya" }, { code: "LI", name: "Liechtenstein" }, { code: "LT", name: "Lithuania" }, { code: "LU", name: "Luxembourg" }, { code: "MG", name: "Madagascar" }, { code: "MW", name: "Malawi" }, { code: "MY", name: "Malaysia" }, { code: "MV", name: "Maldives" }, { code: "ML", name: "Mali" }, { code: "MT", name: "Malta" }, { code: "MH", name: "Marshall Islands" }, { code: "MR", name: "Mauritania" }, { code: "MU", name: "Mauritius" }, { code: "MX", name: "Mexico" }, { code: "FM", name: "Micronesia" }, { code: "MD", name: "Moldova" }, { code: "MC", name: "Monaco" }, { code: "MN", name: "Mongolia" }, { code: "ME", name: "Montenegro" }, { code: "MA", name: "Morocco" }, { code: "MZ", name: "Mozambique" }, { code: "MM", name: "Myanmar" }, { code: "NA", name: "Namibia" }, { code: "NR", name: "Nauru" }, { code: "NP", name: "Nepal" }, { code: "NL", name: "Netherlands" }, { code: "NZ", name: "New Zealand" }, { code: "NI", name: "Nicaragua" }, { code: "NE", name: "Niger" }, { code: "NG", name: "Nigeria" }, { code: "NO", name: "Norway" }, { code: "OM", name: "Oman" }, { code: "PK", name: "Pakistan" }, { code: "PA", name: "Panama" }, { code: "PG", name: "Papua New Guinea" }, { code: "PY", name: "Paraguay" }, { code: "PE", name: "Peru" }, { code: "PH", name: "Philippines" }, { code: "PL", name: "Poland" }, { code: "PT", name: "Portugal" }, { code: "QA", name: "Qatar" }, { code: "RO", name: "Romania" }, { code: "RU", name: "Russia" }, { code: "RW", name: "Rwanda" }, { code: "KN", name: "Saint Kitts and Nevis" }, { code: "LC", name: "Saint Lucia" }, { code: "VC", name: "Saint Vincent and the Grenadines" }, { code: "WS", name: "Samoa" }, { code: "SM", name: "San Marino" }, { code: "ST", name: "Sao Tome and Principe" }, { code: "SA", name: "Saudi Arabia" }, { code: "SN", name: "Senegal" }, { code: "RS", name: "Serbia" }, { code: "SC", name: "Seychelles" }, { code: "SL", name: "Sierra Leone" }, { code: "SG", name: "Singapore" }, { code: "SK", name: "Slovakia" }, { code: "SI", name: "Slovenia" }, { code: "SB", name: "Solomon Islands" }, { code: "SO", name: "Somalia" }, { code: "ZA", name: "South Africa" }, { code: "KR", name: "South Korea" }, { code: "ES", name: "Spain" }, { code: "LK", name: "Sri Lanka" }, { code: "SD", name: "Sudan" }, { code: "SR", name: "Suriname" }, { code: "SE", name: "Sweden" }, { code: "CH", name: "Switzerland" }, { code: "SY", name: "Syria" }, { code: "TW", name: "Taiwan" }, { code: "TJ", name: "Tajikistan" }, { code: "TZ", name: "Tanzania" }, { code: "TH", name: "Thailand" }, { code: "TG", name: "Togo" }, { code: "TO", name: "Tonga" }, { code: "TT", name: "Trinidad and Tobago" }, { code: "TN", name: "Tunisia" }, { code: "TR", name: "Turkey" }, { code: "TM", name: "Turkmenistan" }, { code: "TV", name: "Tuvalu" }, { code: "UG", name: "Uganda" }, { code: "UA", name: "Ukraine" }, { code: "AE", name: "United Arab Emirates" }, { code: "US", name: "United States" }, { code: "UY", name: "Uruguay" }, { code: "UZ", name: "Uzbekistan" }, { code: "VU", name: "Vanuatu" }, { code: "VE", name: "Venezuela" }, { code: "VN", name: "Vietnam" }, { code: "YE", name: "Yemen" }, { code: "ZM", name: "Zambia" }, { code: "ZW", name: "Zimbabwe" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs Placeholder */}
      {/* <Breadcrumbs /> */}

      <div className="mb-8">
        <p className="text-lg font-bold">Startups</p>
        <p className="text-xl mt-2">We empower startups for success.</p>
      </div>

      <img
        width="650"
        height="600"
        src="https://www.taxaccolega.co.uk/wp-content/uploads/2023/08/Untitled-design-5.png"
        alt="Startup support illustration"
        srcSet="https://www.taxaccolega.co.uk/wp-content/uploads/2023/08/Untitled-design-5.png 650w, https://www.taxaccolega.co.uk/wp-content/uploads/2023/08/Untitled-design-5-600x554.png 600w, https://www.taxaccolega.co.uk/wp-content/uploads/2023/08/Untitled-design-5-300x277.png 300w"
        sizes="(max-width: 650px) 100vw, 650px"
        className="mx-auto my-8 rounded-lg shadow-md"
      />

      <h2 className="text-3xl font-bold mb-4">How do we help Startups?</h2>
      <p className="mb-4">
        Our start-up support provides essential services to nurture emerging businesses. We offer expert financial guidance for
        robust business planning and budgeting, optimising tax strategies, and selecting the ideal legal structure.
        Compliance is a priority, including precise bookkeeping and financial reporting.
      </p>
      <p className="mb-4">
        We identify funding sources and facilitate connections among businesses, aiding business development. Streamline
        operations through technology tools. We also offer educational resources.
      </p>
      <p className="mb-8">
        This comprehensive support empowers start-ups to focus on core activities with strong financial foundations.
      </p>

      <a href="/contact-us/" className="inline-block bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-700 transition duration-300 mb-8">
        Contact us
      </a>

      <h2 className="text-3xl font-bold mb-4">Our Clients and Collaborative Partners</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 my-8">
        {[
          { src: "https://www.taxaccolega.co.uk/wp-content/uploads/2023/06/A.webp", alt: "A" },
          { src: "https://www.taxaccolega.co.uk/wp-content/uploads/2023/06/ACCA.webp", alt: "ACCA" },
          { src: "https://www.taxaccolega.co.uk/wp-content/uploads/2023/06/BTC-Softwares.webp", alt: "BTC Softwares" },
          { src: "https://www.taxaccolega.co.uk/wp-content/uploads/2023/06/Croydon-Chamber.webp", alt: "Croydon Chamber" },
          { src: "https://www.taxaccolega.co.uk/wp-content/uploads/2023/06/Croydon.webp", alt: "Croydon" },
          { src: "https://www.taxaccolega.co.uk/wp-content/uploads/2023/06/Dext.webp", alt: "Dext" },
          { src: "https://www.taxaccolega.co.uk/wp-content/uploads/2023/06/Go-Cardless.webp", alt: "Go Cardless" },
          { src: "https://www.taxaccolega.co.uk/wp-content/uploads/2023/06/Intuit-Quick-Books.webp", alt: "Intuit Quick Books" },
          { src: "https://www.taxaccolega.co.uk/wp-content/uploads/2023/06/Lewisham.webp", alt: "Lewisham" },
          { src: "https://www.taxaccolega.co.uk/wp-content/uploads/2023/06/Simply-Business.webp", alt: "Simply Business" },
          { src: "https://www.taxaccolega.co.uk/wp-content/uploads/2023/06/SME-News.webp", alt: "SME News" },
          { src: "https://www.taxaccolega.co.uk/wp-content/uploads/2023/06/TAXCALC-1.webp", alt: "TAXCALC (1)" },
          { src: "https://www.taxaccolega.co.uk/wp-content/uploads/2023/06/Three-Best-Rated.webp", alt: "Three Best Rated" },
          { src: "https://www.taxaccolega.co.uk/wp-content/uploads/2023/06/VT-Software.webp", alt: "VT Software" },
          { src: "https://www.taxaccolega.co.uk/wp-content/uploads/2023/06/XERO-1.webp", alt: "XERO (1)" },
          { src: "https://www.taxaccolega.co.uk/wp-content/uploads/2023/06/Xpert-SM.webp", alt: "Xpert SM" },
        ].map((image, index) => (
          <figure key={index} className="flex justify-center items-center p-2 bg-gray-50 rounded-lg">
            <img src={image.src} alt={image.alt} className="max-w-full h-auto max-h-24 object-contain" />
          </figure>
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-4">The Benefits Of Hiring An Accountant</h2>
      <p className="mb-4">
        Hiring an accountant will be beneficial even for a small business at different stages of a company’s growth. An
        accountant will almost certainly charge less per hour than you would if you hired them to handle time-consuming
        duties like taxes. Not only will you have more time to devote to earning money, but you’ll also feel more at
        ease knowing that a professional is handling the specifics.
      </p>

      <div className="flex flex-wrap gap-4 my-8">
        <a role="button" className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
          Join Us Today
        </a>
        <a href="tel:02083929375" className="inline-block bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition duration-300">
          Find Out More
        </a>
      </div>

      <img
        width="500"
        height="400"
        src="https://www.taxaccolega.co.uk/wp-content/uploads/2023/08/Untitled-design-7.png"
        alt="Accountant benefits illustration"
        srcSet="https://www.taxaccolega.co.uk/wp-content/uploads/2023/08/Untitled-design-7.png 500w, https://www.taxaccolega.co.uk/wp-content/uploads/2023/08/Untitled-design-7-300x240.png 300w"
        sizes="(max-width: 500px) 100vw, 500px"
        className="mx-auto my-8 rounded-lg shadow-md"
      />

      <h2 className="text-3xl font-bold mb-4">FAQs</h2>
      <div className="my-8">
        {/* FAQ Item 1 */}
        <div className="border-b border-gray-200 py-4">
          <h3
            id="faq-title-1"
            className="flex items-center justify-between text-xl font-semibold cursor-pointer text-orange-600 hover:text-orange-700"
            onClick={() => handleFaqToggle('2541')}
            role="button"
            aria-controls="faq-content-1"
            aria-expanded={activeFaq === '2541'}
          >
            WHEN TO HIRE AN ACCOUNTANT
            <span>
              {activeFaq === '2541' ? (
                <svg viewBox="0 0 320 512" className="w-4 h-4 fill-current">
                  <path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"></path>
                </svg>
              ) : (
                <svg viewBox="0 0 320 512" className="w-4 h-4 fill-current">
                  <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                </svg>
              )}
            </span>
          </h3>
          {activeFaq === '2541' && (
            <div id="faq-content-1" className="mt-2 text-gray-700 animate-fadeIn" aria-labelledby="faq-title-1">
              <p>
                <strong>It makes</strong> perfect sense for a growing business with complex accounting issues to hire Taxaccolega and take advantage of knowledge and expertise. Not only do we offer advice about how best to progress your business with an in-depth business model and financial plan, but will also save you hundreds if not thousands of pounds in tax breaks and potential HMRC penalties. Even if you are a sole trader or freelancer working from home, Taxaccolega can help you prepare your year-end accounts and ensure you avoid fines for late submission or incorrect completion of your Self Assessment Tax Return form. We also offer a bookkeeping service to ensure your finances are kept up to date and to save your valuable time doing it yourself.
              </p>
            </div>
          )}
        </div>

        {/* FAQ Item 2 */}
        <div className="border-b border-gray-200 py-4">
          <h3
            id="faq-title-2"
            className="flex items-center justify-between text-xl font-semibold cursor-pointer text-orange-600 hover:text-orange-700"
            onClick={() => handleFaqToggle('2542')}
            role="button"
            aria-controls="faq-content-2"
            aria-expanded={activeFaq === '2542'}
          >
            REGISTERED OFFICE SERVICES
            <span>
              {activeFaq === '2542' ? (
                <svg viewBox="0 0 320 512" className="w-4 h-4 fill-current">
                  <path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"></path>
                </svg>
              ) : (
                <svg viewBox="0 0 320 512" className="w-4 h-4 fill-current">
                  <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                </svg>
              )}
            </span>
          </h3>
          {activeFaq === '2542' && (
            <div id="faq-content-2" className="mt-2 text-gray-700 animate-fadeIn" aria-labelledby="faq-title-2">
              <p style={{ textAlign: 'left' }}>
                Every business needs a registered office which must be lodged with Companies House and HM Revenue &amp;
                Customs. For a small monthly fee of just £8.00 you can use our offices as your official Registered Office
                address. We will therefore receive and handle on your behalf you’re your correspondence from HM Revenue
                &amp; Customs and Companies House. The benefit of this service gives you peace of mind and allows you
                to concentrate on growing your business without the hassle of maintaining the postal administration
                from governing authorities.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Contact Info (Repeated sections consolidated) */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 my-10 text-center">
        <div className="flex flex-col items-center">
          <FaPhone className="text-orange-600 text-3xl mb-2" />
          <h3 className="font-bold text-lg">Phone:</h3>
          <p>
            <a href="tel:02081270728" className="text-blue-600 hover:underline">
              020 8127 0728
            </a>
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FaWhatsapp className="text-green-500 text-3xl mb-2" />
          <h3 className="font-bold text-lg">Whatsapp:</h3>
          <p>
            <a href="https://wa.me/447471170484" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              074 7117 0484
            </a>
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FaEnvelope className="text-red-600 text-3xl mb-2" />
          <h3 className="font-bold text-lg">Email:</h3>
          <p>
            <a href="mailto:info@taxaccolega.co.uk" className="text-blue-600 hover:underline">
              info@taxaccolega.co.uk
            </a>
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FaMapMarkerAlt className="text-gray-700 text-3xl mb-2" />
          <h3 className="font-bold text-lg">Address:</h3>
          <p>187a London Road, Croydon, Surrey, CR0 2RJ</p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center gap-6 my-8">
        <a href="https://www.facebook.com/Taxaccolega" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800 transition-colors duration-300">
          <FaFacebookF className="text-3xl" aria-label="Facebook" />
        </a>
        <a href="https://twitter.com/Taxaccolega" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition-colors duration-300">
          <FaTwitter className="text-3xl" aria-label="Twitter" />
        </a>
        <a href="https://plus.google.com/u/0/100672948850520944033" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700 transition-colors duration-300">
          {/* Icon-google-review - Assuming a generic icon or custom SVG */}
          <svg viewBox="0 0 488 512" className="w-8 h-8 fill-current" aria-label="Google Reviews">
            <path d="M488 261.8C488 116.6 379.2 8 244 8S0 116.6 0 261.8c0 144.3 104.9 261.8 244 261.8 19.3 0 38.6-2 57.5-6.8L488 512l-58.8-154.2c29.1-36.5 48.8-80.1 48.8-130zM120 236h-40v40h40V236zm80 0h-40v40h40V236zm80 0h-40v40h40V236zm80 0h-40v40h40V236z"></path>
          </svg>
        </a>
      </div>

      <h2 className="text-3xl font-bold mb-4">Our Recent Google Reviews</h2>
      {/* Google Reviews Widget Placeholder */}
      <div className="bg-gray-100 p-6 rounded-lg my-8 text-center text-gray-600">
        <p>[ Google Reviews Widget would be integrated here, e.g., using a third-party React library or iframe ]</p>
      </div>

      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      {/* Contact Info (Repeated but different formatting) */}
      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="flex flex-col items-center text-center">
          <FaPhone className="text-orange-600 text-4xl mb-2" />
          <h3 className="font-bold text-xl">
            <a href="tel:02081270728" className="text-gray-800 hover:text-orange-600 transition-colors duration-300">Phone Number</a>
          </h3>
          <p>
            <a href="tel:02081270728" className="text-blue-600 hover:underline">020 8127 0728</a>
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaWhatsapp className="text-green-500 text-4xl mb-2" />
          <h3 className="font-bold text-xl">
            <a href="https://wa.me/07471170484" className="text-gray-800 hover:text-green-500 transition-colors duration-300">Whatsapp</a>
          </h3>
          <p>
            <a href="https://wa.me/447471170484" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">074 7117 0484</a>
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaEnvelope className="text-red-600 text-4xl mb-2" />
          <h3 className="font-bold text-xl">
            <a href="mailto:info@taxaccolega.co.uk" className="text-gray-800 hover:text-red-600 transition-colors duration-300">Email</a>
          </h3>
          <p>
            <a href="mailto:info@taxaccolega.co.uk" className="text-blue-600 hover:underline">info@taxaccolega.co.uk</a>
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center text-center my-8">
        <FaMapMarkerAlt className="text-gray-700 text-4xl mb-2" />
        <h3 className="font-bold text-xl">Address</h3>
        <p>187a London Road, Croydon, Surrey, CR0 2RJ</p>
      </div>

      <iframe
        loading="lazy"
        src="https://maps.google.com/maps?q=187a%20London%20Road%2C%20Croydon%2C%20Surrey%2C%20CR0%202RJ&#038;t=m&#038;z=11&#038;output=embed&#038;iwloc=near"
        title="187a London Road, Croydon, Surrey, CR0 2RJ"
        aria-label="187a London Road, Croydon, Surrey, CR0 2RJ"
        className="w-full h-96 border-0 rounded-lg shadow-md mb-8"
      ></iframe>

      <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
      <form method="post" name="New Form" noValidate className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="form-field-name" className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="form-field-name"
            placeholder="Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="form-field-email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="form-field-email"
            placeholder="Email"
            required
            aria-required="true"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="form-field-message" className="block text-gray-700 text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            name="message"
            id="form-field-message"
            rows="7"
            placeholder="Message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
        >
          Send
        </button>
      </form>

      {/* ID Verification Section (Extracted and converted from nested HTML) */}
      {/* Note: The extensive inline styles from the original HTML are omitted here.
                  In a real React app, these would be moved to external CSS files or
                  handled by a CSS-in-JS solution (e.g., Tailwind utilities, styled-components).
                  The multi-step logic and form submission would require state management. */}
      <div className="my-12 p-6 bg-blue-50 rounded-lg shadow-inner relative">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">ID Verification for Companies House</h2>
        <button
          onClick={() => setShowIdVerificationPopup(true)}
          className="fixed bottom-20 left-5 md:static md:bottom-auto md:left-auto md:mb-6 bg-orange-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-orange-700 transition-colors duration-300 z-50"
        >
          ID Verification
        </button>

        {showIdVerificationPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-55 z-[999999]">
            <div className="bg-white rounded-lg p-6 relative w-11/12 max-w-3xl max-h-[92vh] overflow-y-auto shadow-xl">
              <button
                onClick={() => setShowIdVerificationPopup(false)}
                className="absolute top-3 right-4 text-gray-600 hover:text-gray-900 text-3xl font-light"
              >
                &times;
              </button>
              <h1 className="font-bold text-2xl text-orange-600 mb-4">ID Verification Form For Companies House</h1>

              {/* Progress bar */}
              <div className="w-full h-2 bg-gray-200 rounded-md mb-5">
                <div
                  className="h-full bg-orange-600 rounded-md transition-all duration-300"
                  style={{ width: `${((currentIdVerificationStep + 1) / 7) * 100}%` }}
                ></div>
              </div>

              <form onSubmit={handleSubmitIdVerification} className="space-y-4">
                <input type="hidden" name="action" value="custom_form_submit" />
                <input type="hidden" name="paymentMethod" value={idFormData.paymentMethod} />
                <input type="hidden" name="paymentId" value={idFormData.paymentId} />
                <input type="hidden" name="payment_amount" value={idFormData.payment_amount} />
                <input type="hidden" name="nationality" value={idFormData.selectedNationality} />
                <input type="hidden" name="billing_country" value={idFormData.selectedBillingCountry} />

                {/* Section A */}
                <section data-step="0" className={currentIdVerificationStep === 0 ? 'block' : 'hidden'}>
                  <p>From 18 November 2025, UK law will require all company Directors and Persons with Significant Control (PSCs) to verify their identity with Companies House.</p>
                  <ul className="list-disc list-inside ml-4 my-2">
                    <li>Companies House will issue a personal code to PSCs.</li>
                    <li>Taxaccolega (ACSP) can help collect data and assist.</li>
                    <li>Please answer the questions and upload documents.</li>
                  </ul>
                  <h3 className="text-xl font-semibold my-3">Personal Details</h3>
                  <label className="block mb-2">
                    Fornames *
                    <input
                      type="text"
                      id="fornames"
                      name="fornames"
                      value={idFormData.fornames}
                      onChange={handleIdFormChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md mt-1"
                    />
                  </label>
                  <label className="block mb-2">
                    Last Name *
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={idFormData.lastName}
                      onChange={handleIdFormChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md mt-1"
                    />
                  </label>
                  <label className="block mb-2">
                    Date of Birth *
                    <input
                      id="dob"
                      name="dob"
                      type="date"
                      max={today}
                      value={idFormData.dob}
                      onChange={handleIdFormChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md mt-1"
                    />
                  </label>
                  <label className="block mb-2">
                    Nationality *
                    <select
                      id="nationality"
                      name="nationality"
                      value={idFormData.nationality}
                      onChange={handleNationalityChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md mt-1"
                    >
                      <option value="">Select Nationality</option>
                      {countries.map((country) => (
                        <option key={country.code} value={country.code} data-countryname={country.name}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block mb-2">
                    Place of Birth *
                    <input
                      id="place_of_birth"
                      name="place_of_birth"
                      type="text"
                      value={idFormData.place_of_birth}
                      onChange={handleIdFormChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md mt-1"
                    />
                  </label>
                  <div className="text-right mt-4">
                    <button type="button" onClick={() => handleIdVerificationNav('next')} className="bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors duration-300">
                      Next
                    </button>
                  </div>
                </section>

                {/* Section B */}
                <section data-step="1" className={currentIdVerificationStep === 1 ? 'block' : 'hidden'}>
                  <h3 className="text-xl font-semibold my-3">Contact Details</h3>
                  <label className="block mb-2">
                    Current Address *
                    <input
                      type="text"
                      id="current_address"
                      name="current_address"
                      value={idFormData.current_address}
                      onChange={handleIdFormChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md mt-1"
                    />
                  </label>
                  <label className="block mb-2">
                    Date you moved in at current address? *
                    <input
                      type="date"
                      max={today}
                      id="move_in_date"
                      name="move_in_date"
                      value={idFormData.move_in_date}
                      onChange={handleIdFormChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md mt-1"
                    />
                  </label>
                  <label className="block mb-2">
                    Previous Address(es) in last 12 months (if Any)
                    <input
                      type="text"
                      id="previous_address"
                      name="previous_address"
                      value={idFormData.previous_address}
                      onChange={handleIdFormChange}
                      className="w-full p-2 border border-gray-300 rounded-md mt-1"
                    />
                  </label>
                  <label className="block mb-2">
                    Email *
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={idFormData.email}
                      onChange={handleIdFormChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md mt-1"
                    />
                  </label>
                  <label className="block mb-2">
                    Phone *
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={idFormData.phone}
                      onChange={handleIdFormChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md mt-1"
                    />
                  </label>
                  <div className="flex justify-between mt-4">
                    <button type="button" onClick={() => handleIdVerificationNav('prev')} className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors duration-300">
                      Back
                    </button>
                    <button type="button" onClick={() => handleIdVerificationNav('next')} className="bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors duration-300">
                      Next
                    </button>
                  </div>
                </section>

                {/* Section C */}
                <section data-step="2" className={currentIdVerificationStep === 2 ? 'block' : 'hidden'}>
                  <h3 className="text-xl font-semibold my-3">Role in the Company *</h3>
                  <label className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      name="isDirector"
                      checked={idFormData.isDirector}
                      onChange={handleIdFormChange}
                      className="w-4 h-4 accent-orange-600"
                    />
                    I am a Director
                  </label>
                  <label className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      name="isPSC"
                      checked={idFormData.isPSC}
                      onChange={handleIdFormChange}
                      className="w-4 h-4 accent-orange-600"
                    />
                    I am a Person with Significant Control (PSC)
                  </label>
                  <div className="flex justify-between mt-4">
                    <button type="button" onClick={() => handleIdVerificationNav('prev')} className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors duration-300">
                      Back
                    </button>
                    <button type="button" onClick={() => handleIdVerificationNav('next')} className="bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors duration-300">
                      Next
                    </button>
                  </div>
                </section>

                {/* Section D */}
                <section data-step="3" className={currentIdVerificationStep === 3 ? 'block' : 'hidden'}>
                  <h3 className="text-xl font-semibold my-3">Identity Documents</h3>
                  <label className="block mb-2">
                    ID Document *
                    <input
                      type="file"
                      id="id_document"
                      name="id_document"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      onChange={handleIdFormChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md mt-1"
                    />
                  </label>
                  <label className="block mb-2">
                    Address Document *
                    <input
                      type="file"
                      id="address_document"
                      name="address_document"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      onChange={handleIdFormChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md mt-1"
                    />
                  </label>
                  <br />
                  <label className="block mb-2">
                    Are you an Overseas Director and PSC? *
                    <select
                      id="overseasSelect"
                      name="overseas"
                      value={idFormData.overseas}
                      onChange={handleIdFormChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md mt-1"
                    >
                      <option value="">--Select--</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </label>
                  <div className="flex justify-between mt-4">
                    <button type="button" onClick={() => handleIdVerificationNav('prev')} className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors duration-300">
                      Back
                    </button>
                    <button type="button" onClick={() => handleIdVerificationNav('next')} className="bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors duration-300">
                      Next
                    </button>
                  </div>
                </section>

                {/* Section F (Conditional for "Yes" to overseas) */}
                <section data-step="4" className={currentIdVerificationStep === 4 ? 'block' : 'hidden'}>
                  <h3 className="text-xl font-semibold my-3">Additional (Overseas)</h3>
                  {idFormData.overseas === 'yes' ? (
                    <>
                      <label className="block mb-2">
                        Overseas Supporting Docs *
                        <input
                          type="file"
                          id="overseas_doc"
                          name="overseas_doc"
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                          onChange={handleIdFormChange}
                          required
                          className="w-full p-2 border border-gray-300 rounded-md mt-1"
                        />
                      </label>
                      <p className="text-sm text-gray-600 mt-2">An additional fee of £10 + VAT will apply.</p>
                    </>
                  ) : (
                    <p className="text-gray-600">No overseas documents required as you selected "No".</p>
                  )}
                  <div className="flex justify-between mt-4">
                    <button type="button" onClick={() => handleIdVerificationNav('prev')} className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors duration-300">
                      Back
                    </button>
                    <button type="button" onClick={() => handleIdVerificationNav('next')} className="bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors duration-300">
                      Next
                    </button>
                  </div>
                </section>

                {/* Section G */}
                <section data-step="5" className={currentIdVerificationStep === 5 ? 'block' : 'hidden'}>
                  <h3 className="text-xl font-semibold my-3">Privacy & Consent</h3>
                  <p className="mb-2">
                    <strong>You are declaring that all documents and information provided by you are true and correct, you are consenting to use and store your personal data and consenting for Taxaccolega Chartered Accountants to act as Authorised Corporate Service Provider (ACSP) on your behalf.</strong>
                  </p>
                  <p className="mb-2">I confirm that I have read and agree to the above Terms & Conditions and consent to the processing of my data by Taxaccolega Chartered Accountants for the purposes of identity verification with Companies House.</p>
                  <p className="mb-3"><strong>Terms & Conditions – Identity Verification Process</strong></p>
                  <p className="mb-2">By submitting, you authorise Taxaccolega to process your data for ID verification with Companies House.</p>
                  <label className="flex items-center gap-2 mb-4 text-sm">
                    <input
                      type="checkbox"
                      id="agree"
                      name="agree"
                      checked={idFormData.agree}
                      onChange={handleIdFormChange}
                      required
                      className="w-4 h-4 accent-orange-600"
                    />
                    I agree to Terms*
                    <button type="button" onClick={() => setShowTerms(!showTerms)} className="font-bold text-orange-600 underline hover:text-blue-700 transition-colors duration-300">
                      (see T&Cs)
                    </button>
                  </label>
                  {showTerms && (
                    <div className="border border-gray-300 p-4 rounded-md bg-gray-50 max-h-48 overflow-y-auto mb-4 text-sm">
                      <p className="mb-2"><strong>1. Purpose of this Agreement</strong><br />
                        1.1 These Terms & Conditions apply to the collection and processing of personal data and identity documents required under the Economic Crime and Corporate Transparency Act 2023 and Companies House identity verification rules effective from 18 November 2025.<br />
                        1.2 By submitting your details through our online form, you authorise Taxaccolega Chartered Accountants (as an Authorised Corporate Service Provider – ACSP) to process your information for the sole purpose of fulfilling the identity verification obligations set by Companies House.
                      </p>
                      <p className="mb-2"><strong>2. Client Responsibilities</strong><br />
                        2.1 You confirm that all information and documents you provide are true, accurate, complete, and current.<br />
                        2.2 You accept full responsibility for any false, misleading, or incomplete information supplied, and acknowledge that this may lead to penalties or rejection of your verification by Companies House.<br />
                        2.3 You must notify us promptly of any change in your details (such as name, address, or role in the company) which may affect the verification process.
                      </p>
                      <p className="mb-2"><strong>3. Our Role &amp; Limitation</strong><br />
                        3.1 We act solely as an intermediary in submitting your information to Companies House.<br />
                        3.2 We do not guarantee the acceptance, speed, or outcome of any identity verification by Companies House. The final decision rests solely with Companies House.<br />
                        3.3 We shall not be liable for any loss, delay, penalty, or consequence arising from:<br />
                        * (a) inaccurate or incomplete information provided by you,<br />
                        * (b) delays or failures within Companies House systems,<br />
                        * (c) rejection or failure of verification by Companies House, or<br />
                        * (d) events outside our reasonable control.<br />
                        3.4 Nothing in these Terms excludes liability for death, personal injury, fraud, or any liability which cannot be excluded under law..</p>
                      <p className="mb-2"><strong>4. Data Protection</strong><br />
                        4.1 We will process your personal data in accordance with the UK GDPR and the Data Protection Act 2018.<br />
                        4.2 Your data will be used solely for the purpose of identity verification and related compliance requirements.<br />
                        4.3 We will retain your information only as long as required by law or regulatory obligations.<br />
                        4.4 We will not disclose your information to third parties other than Companies House or other parties legally entitled to it.</p>
                      <p className="mb-2"><strong>5. Client Consent</strong><br />
                        By ticking the consent box and submitting your details, you confirm that:<br />
                        • You have read, understood, and agreed to these Terms & Conditions.<br />
                        • You consent to Taxaccolega Chartered Accountants acting as your Authorised Corporate Service Provider (ACSP) for identity verification purposes.<br />
                        • You consent to the processing, storage, and transfer of your personal data and documents in accordance with Section 4 above..</p>
                      <p><strong>6. Governing Law & Jurisdiction</strong><br />
                        These Terms & Conditions are governed by and construed in accordance with the laws of England and Wales, and any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
                    </div>
                  )}
                  <div className="flex justify-between mt-4">
                    <button type="button" onClick={() => handleIdVerificationNav('prev')} className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors duration-300">
                      Back
                    </button>
                    <button type="button" onClick={() => handleIdVerificationNav('next')} className="bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors duration-300">
                      Next
                    </button>
                  </div>
                </section>

                {/* Section H */}
                <section data-step="6" className={currentIdVerificationStep === 6 ? 'block' : 'hidden'}>
                  <h3 className="text-xl font-semibold my-3">Checkout</h3>
                  <div className="price-box my-4 text-center">
                    <span className="regular-price inline-block bg-orange-600 text-white line-through decoration-slate-800 decoration-2 px-2 py-1 rounded-md font-bold mr-2">£49.99+VAT</span>
                    <span className="sale-price inline-block text-black text-3xl font-bold px-3 py-1 rounded-md">£35.00 + VAT</span>
                  </div>
                  <p className="mb-1">Net Amount: £35.00</p>
                  <p className="mb-1">VAT @ 20%: £7.00</p>
                  <p className="font-bold text-lg mb-4">Total: £42.00</p>
                  <div className="flex justify-between mt-4">
                    <button type="button" onClick={() => handleIdVerificationNav('prev')} className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors duration-300">
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowStripeCheckout(true)}
                      className="bg-slate-800 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors duration-300"
                    >
                      Pay Via Stripe
                    </button>
                    <button type="button" className="bg-slate-800 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors duration-300">
                      Pay Via Paypal {/* This would link to a PayPal integration */}
                    </button>
                  </div>
                </section>
              </form>

              {/* Stripe Checkout Form (Shown conditionally) */}
              {showStripeCheckout && (
                <form id="checkout-form" className="stripe-checkout-form max-w-md mx-auto p-6 bg-white rounded-lg shadow-md my-8">
                  <h2 className="text-2xl text-center text-blue-900 mb-6">Secure Payment</h2>
                  <label htmlFor="billing-name" className="block text-sm font-semibold mb-1">Full Name</label>
                  <input type="text" id="billing-name" name="billing_name" value={idFormData.billing_name} onChange={handleIdFormChange} required className="w-full p-2 border border-gray-300 rounded-md mb-3" />
                  <label htmlFor="billing-address" className="block text-sm font-semibold mb-1">Address</label>
                  <input type="text" id="billing-address" name="billing_address" value={idFormData.billing_address} onChange={handleIdFormChange} required className="w-full p-2 border border-gray-300 rounded-md mb-3" />
                  <label htmlFor="billing-city" className="block text-sm font-semibold mb-1">City</label>
                  <input type="text" id="billing-city" name="billing_city" value={idFormData.billing_city} onChange={handleIdFormChange} required className="w-full p-2 border border-gray-300 rounded-md mb-3" />
                  <label htmlFor="billing-postcode" className="block text-sm font-semibold mb-1">Postcode</label>
                  <input type="text" id="billing-postcode" name="billing_postcode" value={idFormData.billing_postcode} onChange={handleIdFormChange} required className="w-full p-2 border border-gray-300 rounded-md mb-3" />
                  <label htmlFor="billing-country" className="block text-sm font-semibold mb-1">Country</label>
                  <select
                    id="billing-country"
                    name="billing_country"
                    value={idFormData.billing_country}
                    onChange={handleBillingCountryChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md mb-3"
                  >
                    <option value="">Select Country</option>
                    {countries.map((country) => (
                      <option key={country.code} value={country.code} data-countryname={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                  {/* Stripe Card Element Placeholder */}
                  <label htmlFor="card-element" className="block text-sm font-semibold mb-1">Card Details</label>
                  <div id="card-element" className="p-3 border border-gray-300 rounded-md mb-4 bg-gray-50">
                    {/* A Stripe Card Element would be mounted here in a real application */}
                    <p className="text-gray-500 italic">Stripe Card Element goes here</p>
                  </div>
                  <div id="card-errors" role="alert" className="text-red-600 text-sm mb-3"></div>
                  <button type="submit" id="pay-button" className="w-full bg-orange-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-orange-700 transition-colors duration-300">
                    Pay
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowStripeCheckout(false)}
                    className="w-full mt-2 bg-gray-300 text-gray-800 py-3 px-4 rounded-md font-semibold hover:bg-gray-400 transition-colors duration-300"
                  >
                    Cancel Payment
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessStartUp;
```