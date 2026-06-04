const TopBar = () => {
  return (
    <div className="bg-light py-2 border-bottom d-none d-md-block">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <a href="https://www.google.com/search?q=taxaccolega+google+reviews" target="_blank" rel="noreferrer" className="text-decoration-none">
            <img src="/images/2023/06/Google-reviews-logo-taxaccolega-1024x157.png" alt="Google Reviews" height="24" />
          </a>
        </div>
        <div className="d-flex gap-4 align-items-center">
          <a href="https://manager.brightsg.com/registration/SNAT2S3z8oYpA7Cd7e70ORo1eDcx0ktDw9AZ0jKwlWJ9kSLkOlD" className="btn btn-sm btn-outline-dark fw-semibold rounded-pill px-3">Sign In</a>
          <a href="https://www.taxaccolega.co.uk/refer-and-earn/" className="btn btn-sm text-muted fw-semibold text-decoration-none">Refer a Friend</a>
          <div className="d-flex gap-3 ms-3">
            <a href="https://www.facebook.com/Taxaccolega" target="_blank" rel="noreferrer" style={{ color: '#d2601a' }}><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com/Taxaccolega" target="_blank" rel="noreferrer" style={{ color: '#d2601a' }}><i className="fab fa-twitter"></i></a>
            <a href="https://plus.google.com/u/0/100672948850520944033" target="_blank" rel="noreferrer" style={{ color: '#d2601a' }}><i className="fab fa-google-plus-g"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
