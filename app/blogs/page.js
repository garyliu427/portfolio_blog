import Link from 'next/link';
import NavBar from '../components/NavBar';
import { getAllPosts } from '../../lib/api';
import { draftMode } from 'next/headers';
import DateComponent from '../date';

function PostPreview({ title, date, excerpt, slug }) {
  return (
    <div className="my-3">
      <h3 className="text-xl md:text-2xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-base mb-3">
        <DateComponent dateString={date} />
      </div>
      <p className="text-sm text-slate-500">{excerpt}</p>
    </div>
  );
}

export default async function BlogsPage() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  return (
    <div>
      <NavBar />
      <div className="flex flex-col ml-[20%] md:ml-[30%] lg:ml-[40%]">
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
