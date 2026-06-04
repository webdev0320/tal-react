import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';

const SingleBlog = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/blogs.json')
      .then(response => response.json())
      .then(data => {
        const foundPost = data.posts.find(p => p.slug === slug);
        if (foundPost) {
          // Cleanup content
          let cleanedContent = foundPost.content;
          
          // Regex helper to handle potential HTML tags between words
          const flexibleRegex = (str) => new RegExp(str.split(/\s+/).join('\\s*(?:<[^>]+>)*\\s*'), 'gi');

          const patternsToRemove = [
            'Book a free Consultancy',
            'Related Posts',
            'ID Verification',
            'ID Verification Form For Companies House',
            'Personal Details',
            'Fornames',
            'ID verification button',
            'id="openPopupBtn"',
            'id=openPopupBtn'
          ];

          patternsToRemove.forEach(pattern => {
            cleanedContent = cleanedContent.replace(flexibleRegex(pattern), '');
          });

          // Specific block removals
          cleanedContent = cleanedContent.replace(/\[wpforms\s+id="34483"\]/g, '');
          cleanedContent = cleanedContent.replace(/From 18 November 2025.*?<\/p>/gs, '');

          setPost({ ...foundPost, content: cleanedContent });
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching blog post:', error);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div className="container py-5">Loading...</div>;
  if (!post) return <div className="container py-5">Post not found.</div>;

  return (
    <div className="blog-post-page bg-light">
      <header className="py-5 text-center" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)' }}>
        <div className="container py-4">
          <h1 className="display-4 fw-bold text-white">{post.title}</h1>
          <p className="text-white-50">{new Date(post.date).toLocaleDateString()} | By {post.author}</p>
        </div>
      </header>
      
      <main className="container py-5">
        <article className="card border-0 shadow-sm p-4 p-md-5">
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </main>

      <div className="container mb-5">
        <Link to="/blog" className="btn btn-brand">&laquo; Back to Blog</Link>
      </div>

      <ContactSection />
    </div>
  );
};

export default SingleBlog;
