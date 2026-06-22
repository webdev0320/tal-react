import SingleBlog from '../../../src/pages/SingleBlog.jsx';

export async function generateMetadata({ params }) {
  const slug = params.slug || '';
  return {
    title: `${decodeURIComponent(slug)} — Blog`,
    description: `Article: ${decodeURIComponent(slug)}`
  };
}

export default function SingleBlogPage({ params }) {
  return <SingleBlog slug={params.slug} />;
}
