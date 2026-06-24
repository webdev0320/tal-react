import SingleBlog from '../../../views/SingleBlog';
import { metadataForBlogSlug } from '../../../lib/seo-generators';
import { createMetadata } from '../../../lib/seo';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return (
    metadataForBlogSlug(slug) ||
    createMetadata({
      title: 'Blog Post',
      description: 'Tax and accounting insights from Taxaccolega.',
      path: `/blog/${slug}`,
      type: 'article',
    })
  );
}

export default function Page({ params }) {
  return <SingleBlog params={params} />;
}
