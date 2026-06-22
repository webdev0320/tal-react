"use client";
import TopBar from '../TopBar';
import Navbar from '../Navbar';
import Footer from '../Footer';
import FloatingConsultationButton from '../FloatingConsultationButton';

function MainLayout({ children }) {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
      <FloatingConsultationButton />
    </>
  );
}

export default MainLayout;
