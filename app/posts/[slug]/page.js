import { draftMode } from 'next/headers';
import Date from '../../date';
import { Markdown } from '../../../lib/markdown';
import { getAllPosts, getPostAndMorePosts } from '../../../lib/api';
import NavBar from '../../components/NavBar';

export async function generateStaticParams() {
  const allPosts = await getAllPosts(false);

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostLayout({ params }) {
  const { isEnabled } = draftMode();
  const { post } = await getPostAndMorePosts(params.slug, isEnabled);
  return (
    <>
      <NavBar />
      <article className="py-8 mx-auto md:max-w-[50%] max-w-[80%]">
        <h1 className="text-4xl mb-4">{post.title}</h1>
        <time dateTime={post.date} className="block mb-4 text-lg text-gray-600">
          <Date dateString={post.date} />
        </time>
        <div className="leading-8">
          <Markdown content={post.content} />
        </div>
      </article>
    </>
  );
}
