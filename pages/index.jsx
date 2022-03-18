import Head from "next/head";
import PostList from "@components/post_list";
import Navbar from "@components/navbar";
import { getSortedPostsData } from "@lib/posts";

export function getStaticProps() {
  return {
    props: {
      posts: getSortedPostsData().slice(0, 5),
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
      <section className="mb-8">
        <p>This is my personal site.</p>
      </section>
      <section>
        <h2 className="text-3xl font-bold mb-8">Recent Posts</h2>
        <PostList posts={posts} />
      </section>
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
      <Navbar />
    </header>
  );
};
