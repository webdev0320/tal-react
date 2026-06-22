"use client";
const TopBar = () => {
  return (
    <div className="bg-light py-2 border-bottom d-none d-md-block">
      <div className="container d-flex justify-content-between align-items-center">
        <div>

        </div>
        <div className="d-flex gap-4 align-items-center">
          <a href="https://manager.brightsg.com/registration/SNAT2S3z8oYpA7Cd7e70ORo1eDcx0ktDw9AZ0jKwlWJ9kSLkOlD" className="btn btn-sm btn-outline-dark fw-semibold rounded-pill px-3">Sign In</a>
          <a href="/refer-and-earn/" className="btn btn-sm text-muted fw-semibold text-decoration-none">Refer a Friend</a>
          <div className="d-flex gap-3 ms-3">
            <a href="https://www.facebook.com/Taxaccolega/" target="_blank" rel="noreferrer" style={{ color: '#d2601a' }}><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/Taxaccolega/" target="_blank" rel="noreferrer" style={{ color: '#d2601a' }}><i className="fab fa-instagram"></i></a>
            <a href="https://x.com/taxaccolega" target="_blank" rel="noreferrer" style={{ color: '#d2601a' }}><i className="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/company/taxaccolega/" target="_blank" rel="noreferrer" style={{ color: '#d2601a' }}><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.tiktok.com/@taxaccolega" target="_blank" rel="noreferrer" style={{ color: '#d2601a' }}><i className="fab fa-tiktok"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

