import { draftMode } from 'next/headers';
import Date from '../../date';
import { Markdown } from '../../../lib/markdown';
import { getAllPosts, getPostAndMorePosts } from '../../../lib/api';
import NavBar from '../../components/NavBar';
import Link from 'next/link';

export async function generateStaticParams() {
  const allPosts = await getAllPosts(false);

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostLayout({ params }) {
  const { isEnabled } = draftMode();
  const { post } = await getPostAndMorePosts(params.slug, isEnabled);

  const h2Headings = post.content.json.content.filter(
    (node) => node.nodeType === 'heading-2'
  );

  return (
    <>
      <NavBar />
      <div className="py-8 mx-auto md:max-w-[50%] max-w-[80%] prose flex justify-center">
        <article>
          <h1 className="text-4xl mb-4">{post.title}</h1>
          <time
            dateTime={post.date}
            className="block mb-4 text-lg text-gray-600"
          >
            <Date dateString={post.date} />
          </time>
          <div className="leading-8">
            <Markdown content={post.content} />
          </div>
        </article>
        <aside>
          <nav className="sticky md:ml-20 top-32">
            <h4 className="mt-0 w-48 mb-6 text-lg">TABLE OF CONTENTS</h4>
            {h2Headings.map((heading, index) => (
              <div key={index}>
                <Link
                  href={`#${`section-${heading.content[0].value}`}`}
                  className="text-sm no-underline text-gray-600"
                >
                  <div className="mt-4">{heading.content[0].value}</div>
                </Link>
              </div>
            ))}
          </nav>
        </aside>
      </div>
    </>
  );
}
