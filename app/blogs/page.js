import Link from 'next/link';
import NavBar from '../components/NavBar';
import { compareDesc, format, parseISO, getYear } from 'date-fns';
import { allPosts } from 'contentlayer/generated';

function PostCard(post) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl hover:text-blue-500 mb-4">
        <Link href={post.slug}>{post.title}</Link>
      </h2>
      <time dateTime={post.date} className="mb-2 text-sm text-gray-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <p className="text-sm md:max-w-xl">
        <Link href={post.slug}>{post.description}</Link>
      </p>
    </div>
  );
}

export default function BlogsPage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  // Group posts by year
  const postsByYear = posts.reduce((acc, post) => {
    const year = getYear(parseISO(post.date));
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {});

  // Get the unique years in descending order
  const years = Object.keys(postsByYear).sort((a, b) => b - a);

  return (
    <div>
      <NavBar />
      <div className="flex flex-col ml-[20%] md:ml-[35%]">
        {years.map((year) => (
          <div key={year}>
            <h2 className="text-2xl my-4 text-gray-400 max-w-7xl">{year}</h2>
            <div className="flex flex-col justify-start">
              {postsByYear[year].map((post, idx) => (
                <PostCard key={idx} {...post} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
