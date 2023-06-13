import Link from 'next/link';
import NavBar from '../components/NavBar';
import { compareDesc, format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';

function PostCard(post) {
  return (
    <div className="flex flex-col justify-center items-center mb-8">
      <h2 className="text-2xl hover:text-blue-500">
        <Link href={post.slug} legacyBehavior>
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 text-sm text-gray-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <p className="text-sm max-w-xs md:max-w-xl">
        <Link href={post.slug} legacyBehavior>
          {post.description}
        </Link>
      </p>
    </div>
  );
}

export default function BlogsPage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div>
      <NavBar />
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
