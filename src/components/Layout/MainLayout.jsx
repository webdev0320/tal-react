import TopBar from '../TopBar';
import Navbar from '../Navbar';
import FloatingConsultationButton from '../FloatingConsultationButton';

function MainLayout({ children }) {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <FloatingConsultationButton />
    </>
  );
}

export default MainLayout;
