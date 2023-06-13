import { format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';
import NavBar from '../../components/NavBar';

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return { title: post.title };
};

const PostLayout = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  const Content = getMDXComponent(post.body.code);
  return (
    <>
      <NavBar />
      <article className="py-8 mx-auto md:max-w-[80%] max-w-[80%]">
        <h1 className="text-center text-4xl mb-4">{post.title}</h1>
        <time
          dateTime={post.date}
          className="block mb-4 text-center text-lg text-gray-600"
        >
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <div className="text-lg leading-8 max-w-4xl mx-auto">
          <Content />
        </div>
      </article>
    </>
  );
};

export default PostLayout;
