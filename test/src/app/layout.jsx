import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingConsultationButton from '../components/FloatingConsultationButton';
import IDVerificationModal from '../components/IDVerificationModal';
import JsonLd from '../components/JsonLd';
import { rootMetadata } from '../lib/seo';
import '../tailwind.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Force all pages to render dynamically (SSR on-demand) instead of static
// prerendering at build time. This prevents react-calendly and other browser-only
// libraries from crashing during the Next.js build prerender phase.
export const dynamic = 'force-dynamic';

export const metadata = rootMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body className="antialiased">
        <JsonLd />
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
