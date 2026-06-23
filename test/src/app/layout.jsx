import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingConsultationButton from '../components/FloatingConsultationButton';
import IDVerificationModal from '../components/IDVerificationModal';
import '../tailwind.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Force all pages to render dynamically (SSR on-demand) instead of static
// prerendering at build time. This prevents react-calendly and other browser-only
// libraries from crashing during the Next.js build prerender phase.
export const dynamic = 'force-dynamic';

export const metadata = {
  title: {
    default: 'Tal & Co Accountants | London Chartered Accountants',
    template: '%s | Tal & Co Accountants',
  },
  description:
    'Expert chartered accountancy services in London. Tax returns, bookkeeping, payroll, VAT, company formation and more. Rated 5-stars on Google & Trustpilot.',
  keywords: ['accountants london', 'chartered accountants', 'tax return', 'bookkeeping'],
  authors: [{ name: 'Tal & Co Accountants' }],
  icons: {
    icon: '/images/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://taxaccolega.co.uk',
    siteName: 'Tal & Co Accountants',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <TopBar />
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <FloatingConsultationButton />
        <IDVerificationModal />
      </body>
    </html>
  );
}

