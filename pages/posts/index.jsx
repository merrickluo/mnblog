import Head from "next/head";
import PostList from "@components/post_list";
import { getSortedPostsData } from "@lib/posts";

export function getStaticProps() {
  return {
    props: {
      posts: getSortedPostsData(),
    },
  };
}

export default function Posts({ posts }) {
  return (
    <>
      <Head>
        <title>{`All Posts - ${process.env.title}`}</title>
        <meta name="description" content={process.env.description} />
      </Head>
      <h2 className="text-3xl font-bold mb-8">All posts:</h2>
      <PostList posts={posts} />
    </>
  );
}
