import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BasePage = ({ title, children }) => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <main className="container my-5">
        <h1 className="display-4 mb-4">{title}</h1>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default BasePage;
