import Footer from '../components/Footer';
const BasePage = ({ title, children }) => {
  return (
    <main className="container my-5">
      <h1 className="display-4 mb-4">{title}</h1>
      {children}
      <Footer />
      </main>
  );
};

export default BasePage;
