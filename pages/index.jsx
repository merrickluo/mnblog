import Head from "next/head";
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
    <header className="mb-6">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-4xl font-bold">A.I.&#39;s Blog</h1>
      </div>
      <p>A.I. writes here.</p>
    </header>
  );
};
