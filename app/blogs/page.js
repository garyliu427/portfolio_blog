import Link from 'next/link';
import NavBar from '../components/NavBar';
import { getAllPosts } from '../../lib/api';
import { draftMode } from 'next/headers';
import DateComponent from '../date';

function PostPreview({ title, date, excerpt, slug }) {
  return (
    <div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateComponent dateString={date} />
      </div>
      <p className="text-lg mb-4">{excerpt}</p>
    </div>
  );
}

export default async function BlogsPage() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  return (
    <div>
      <NavBar />
      <div className="flex flex-col ml-[20%] md:ml-[35%]">
        {allPosts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </div>
  );
}
