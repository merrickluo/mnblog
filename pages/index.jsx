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
        <title>A.I.&#39;s Blog</title>
        <meta name="description" content="A.I. Writes here." />
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
          <h1 className="text-4xl font-bold">A.I.&#39;s Blog</h1>
        </div>
        <p>A.I. writes here.</p>
      </div>
      <div>
        <Link href="/posts">
          <a className="text-xl ml-2">/Posts</a>
        </Link>
        <Link href="/posts/feeds.xml">
          <a className="text-xl ml-4">/RSS</a>
        </Link>
      </div>
    </header>
  );
};
