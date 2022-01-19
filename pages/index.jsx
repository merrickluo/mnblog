import Head from "next/head";
import Link from "next/link";
import PostList from "../components/post_list";

import { getSortedPostsData } from "../lib/posts";

export function getStaticProps() {
  return {
    props: {
      posts: getSortedPostsData(),
    },
  };
}

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>{process.env.title}</title>
        <meta name="description" content={process.env.description} />
      </Head>
      <PostList posts={posts} />
    </>
  );
}

Home.getHeader = () => {
  return (
    <header className="mb-6 flex justify-between items-center">
      <div>
        <div className="w-full flex justify-between items-center">
          <h1 className="text-4xl font-bold">{process.env.title}</h1>
        </div>
        <p>{process.env.description}</p>
      </div>
      <div>
        <Link href="/posts">
          <a className="text-xl ml-2">/Posts</a>
        </Link>
        <Link href="/posts/feed.xml">
          <a className="text-xl ml-4">/RSS</a>
        </Link>
      </div>
    </header>
  );
};
