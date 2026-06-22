import React from 'react';
import Footer from '../components/Footer';

// BlogPostCard component to render individual blog entries
const BlogPostCard = ({ post }) => {
  return (
    <article className="mb-8 p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
      <a href={post.postLink} className="block mb-4 overflow-hidden rounded-md">
        <img
          src={post.imageUrl}
          alt={post.imageAlt || post.title} // Fallback alt text to title for accessibility
          width={post.imageWidth}
          height={post.imageHeight}
          // Note: srcset and sizes attributes are not directly used here
          // as `src` is sufficient for this representation,
          // but they would be included in a more advanced image component.
          className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </a>
      <h3 className="text-xl font-semibold mb-2 leading-tight">
        <a href={post.postLink} className="text-blue-700 hover:text-blue-900 hover:underline transition-colors">
          {post.title}
        </a>
      </h3>
      <p className="text-gray-700 text-base">{post.excerpt}</p>
    </article>
  );
};

const BlogOld = () => {
  // Extracted blog post data from the raw WordPress HTML content
  // In a real application, this data would typically come from an API call or props.
  const blogPosts = [
    {
      id: 'post-4836',
      postLink: '/chancellor-makes-full-expensing-permanent-in-autumn-statement-9-11/',
      imageUrl: '/wp-content/uploads/2024/01/skynews-jeremy-hunt-autumn-statement_6368432.jpg',
      imageAlt: '',
      imageWidth: 768,
      imageHeight: 432,
      title: 'Work from Home Expenses and What can be claimed?',
      excerpt: 'Work from Home Expenses and What can be claimed? Working from home has become a new normal after the outbreak...',
    },
    {
      id: 'post-4837',
      postLink: '/chancellor-makes-full-expensing-permanent-in-autumn-statement-9-10/',
      imageUrl: '/wp-content/uploads/2024/01/skynews-jeremy-hunt-autumn-statement_6368432.jpg',
      imageAlt: '',
      imageWidth: 768,
      imageHeight: 432,
      title: 'Will I have to pay taxes on my State Pension?',
      excerpt: 'Will I have to pay taxes on my State Pension? What is a State Pension?State Pension is a weekly income...',
    },
    {
      id: 'post-4835',
      postLink: '/chancellor-makes-full-expensing-permanent-in-autumn-statement-9-9/',
      imageUrl: '/wp-content/uploads/2024/01/skynews-jeremy-hunt-autumn-statement_6368432.jpg',
      imageAlt: '',
      imageWidth: 768,
      imageHeight: 432,
      title: 'When will I have to pay Capital Gains Tax on Crypto Assets?',
      excerpt: 'When will I have to pay Capital Gains Tax on Crypto Assets? What are Crypto Assets?Crypto assets also known as...',
    },
    {
      id: 'post-4838',
      postLink: '/chancellor-makes-full-expensing-permanent-in-autumn-statement-9-8/',
      imageUrl: '/wp-content/uploads/2024/01/skynews-jeremy-hunt-autumn-statement_6368432.jpg',
      imageAlt: '',
      imageWidth: 768,
      imageHeight: 432,
      title: 'What do I need to do if I want to close my Limited Company?',
      excerpt: 'What do I need to do if I want to close my Limited Company? If you are thinking of closing...',
    },
    {
      id: 'post-4839',
      postLink: '/chancellor-makes-full-expensing-permanent-in-autumn-statement-9-7/',
      imageUrl: '/wp-content/uploads/2024/01/skynews-jeremy-hunt-autumn-statement_6368432.jpg',
      imageAlt: '',
      imageWidth: 768,
      imageHeight: 432,
      title: 'What are the tax implications if I put my money in a trust?',
      excerpt: 'What are the tax implications if I put my money in a trust? You will be putting money in a...',
    },
    {
      id: 'post-4841',
      postLink: '/chancellor-makes-full-expensing-permanent-in-autumn-statement-9-5/',
      imageUrl: '/wp-content/uploads/2024/01/skynews-jeremy-hunt-autumn-statement_6368432.jpg',
      imageAlt: '',
      imageWidth: 768,
      imageHeight: 432,
      title: 'VAT Deferral Payments',
      excerpt: 'VAT Deferral Payments All the businesses who had their VAT payments deferred till 30 June 2020 need to take action...',
    },
    {
      id: 'post-4842',
      postLink: '/chancellor-makes-full-expensing-permanent-in-autumn-statement-9-4/',
      imageUrl: '/wp-content/uploads/2024/01/skynews-jeremy-hunt-autumn-statement_6368432.jpg',
      imageAlt: '',
      imageWidth: 768,
      imageHeight: 432,
      title: 'I have an Online Store &#8211; What are the VAT implications?',
      excerpt: 'I have an Online Store &#8211; What are the VAT implications? If you are thinking of starting a business online...',
    },
    {
      id: 'post-4843',
      postLink: '/chancellor-makes-full-expensing-permanent-in-autumn-statement-9-3/',
      imageUrl: '/wp-content/uploads/2024/01/skynews-jeremy-hunt-autumn-statement_6368432.jpg',
      imageAlt: '',
      imageWidth: 768,
      imageHeight: 432,
      title: 'I have income from abroad do i report it to HMRC?',
      excerpt: 'I have income from abroad do i report it to HMRC? In the time of pandemic as the economic uncertainty...',
    },
    {
      id: 'post-4834',
      postLink: '/chancellor-makes-full-expensing-permanent-in-autumn-statement-9-2/',
      imageUrl: '/wp-content/uploads/2024/01/skynews-jeremy-hunt-autumn-statement_6368432.jpg',
      imageAlt: '',
      imageWidth: 768,
      imageHeight: 432,
      title: 'Trading loss &#8211; should I de register as being self-employed?',
      excerpt: 'Trading loss &#8211; should I de register as being self-employed? In the past year the performance of many businesses has...',
    },
    {
      id: 'post-4840',
      postLink: '/chancellor-makes-full-expensing-permanent-in-autumn-statement-9-6/',
      imageUrl: '/wp-content/uploads/2024/01/skynews-jeremy-hunt-autumn-statement_6368432.jpg',
      imageAlt: '',
      imageWidth: 768,
      imageHeight: 432,
      title: 'What are dividends and what taxes do I pay on them?',
      excerpt: 'What are dividends and what taxes do I pay on them? If you are running a limited company or about...',
    },
    {
      id: 'post-4700',
      postLink: '/change-in-the-income-tax-additional-rate-threshold-and-how-can-i-reduce-my-taxes-25/',
      imageUrl: '/wp-content/uploads/2024/01/l_969072_122642_updates.webp',
      imageAlt: '',
      imageWidth: 700,
      imageHeight: 390,
      title: 'The Inheritance tax planning and Covid-19',
      excerpt: 'The Inheritance tax planning and Covid-19 After World War two the inheritance tax raised to 80 pc. The current crisis...',
    },
    {
      id: 'post-4702',
      postLink: '/change-in-the-income-tax-additional-rate-threshold-and-how-can-i-reduce-my-taxes-24/',
      imageUrl: '/wp-content/uploads/2024/01/l_969072_122642_updates.webp',
      imageAlt: '',
      imageWidth: 700,
      imageHeight: 390,
      title: 'Starting an Online Business and Covid-19',
      excerpt: 'Starting an Online Business and Covid-19 The Digital Software Companies for video conferencing predicted a boom in the industry. But...',
    },
  ];

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      {/* Page Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-10 text-center">Blogs</h1>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Pagination Links */}
      <div className="flex justify-between items-center mt-12 p-4 border-t border-gray-200">
        <a
          href="#"
          className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                     cursor-not-allowed opacity-70" // Added styles to indicate placeholder/disabled
          title="Previous"
          aria-disabled="true"
        >
          Previous
        </a>
        <a
          href="#"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                     cursor-not-allowed opacity-70" // Added styles to indicate placeholder/disabled
          title="Next"
          aria-disabled="true"
        >
          Next
        </a>
      </div>
      <Footer />
      </div>
  );
};

export default BlogOld;
