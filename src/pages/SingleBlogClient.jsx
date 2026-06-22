"use client";
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Footer from '../components/Footer';

const SingleBlogClient = () => {
  const params = useParams();
  const slug = params?.slug;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    fetch('/blogs.json')
      .then(response => response.json())
      .then(data => {
        const foundPost = data.posts.find(p => p.slug === slug);
        if (foundPost) {
          let cleanedContent = foundPost.content;
          const flexibleRegex = (str) => new RegExp(str.split(/\s+/).join('\\s*(?:<[^>]+>)*\\s*'), 'gi');
          const patternsToRemove = [
            'Book a free Consultancy',
            'Related Posts',
            'Personal Details',
            'Fornames',
            'id="openPopupBtn"',
            'id=openPopupBtn'
          ];

          patternsToRemove.forEach(pattern => {
            cleanedContent = cleanedContent.replace(flexibleRegex(pattern), '');
          });

          cleanedContent = cleanedContent.replace(/\[wpforms\s+id="34483"\]/g, '');
          cleanedContent = cleanedContent.replace(/From 18 November 2025.*?<\/p>/gs, '');

          setPost({ ...foundPost, content: cleanedContent });
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div className="container py-5 text-center">Loading...</div>;
  if (!post) return <div className="container py-5 text-center">Post not found.</div>;

  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-3">{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <Footer />
      </div>
  );
};

export default SingleBlogClient;
