import TopBar from '../TopBar';
import Navbar from '../Navbar';
import Footer from '../Footer';

function MainLayout({ children }) {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
