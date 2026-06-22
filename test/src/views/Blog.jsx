"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ContactSection from '../components/ContactSection';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 15;

  useEffect(() => {
    fetch('/blogs.json')
      .then(response => response.json())
      .then(data => {
        // Sort posts by date descending (latest first)
        const sortedPosts = data.posts.sort((a, b) => new Date(b.date) - new Date(a.date));
        setPosts(sortedPosts);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching blog posts:', error);
        setLoading(false);
      });
  }, []);

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  if (loading) return <div className="container py-5 text-center">Loading...</div>;

  return (
    <div className="bg-light">
      <header className="py-5 text-center" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)' }}>
        <div className="container py-4">
          <h1 className="display-3 fw-bold text-white">Insights & Knowledge</h1>
          <p className="lead text-white-50">Expert tax advice, accounting guides, and business insights from Taxaccolega.</p>
        </div>
      </header>
      
      <main className="container py-5">
        <section>
          <div className="row g-4">
            {currentPosts.map((post, index) => (
              <div className="col-md-4" key={post.id || index}>
                <div className="card h-100 border-0 shadow-sm hover-shadow transition" style={{ transition: 'all 0.3s' }}>
                  <div className="position-relative overflow-hidden bg-light" style={{ height: '200px' }}>
                    <img 
                      src={post.featured_image_url || (post.content.match(/<img[^>]+src="([^">]+)"/i)?.[1]) || '/images/logo/tal-logo.png'} 
                      alt={post.title} 
                      className="w-100 h-100 object-fit-cover" 
                      style={{ objectFit: 'cover' }}
                      onError={(e) => { e.target.onerror = null; e.target.src = '/images/logo/tal-logo.png'; }}
                    />
                  </div>
                  <div className="card-body p-4">
                    <h5 className="card-title fw-bold text-brand-dark mb-3">{post.title}</h5>
                    <p className="card-text text-muted small mb-4">{new Date(post.date).toLocaleDateString()}</p>
                    <Link href={`/blog/${post.slug}`} className="text-brand-orange fw-bold text-decoration-none">Read More &raquo;</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <nav className="mt-5" aria-label="Blog pagination">
            <ul className="pagination justify-content-center">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>&laquo; Previous</button>
              </li>
              {[...Array(totalPages)].map((_, i) => (
                <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>Next &raquo;</button>
              </li>
            </ul>
          </nav>
        </section>
      </main>

      <ContactSection />
    </div>
  );
};

export default Blog;
