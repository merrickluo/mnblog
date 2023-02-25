import Head from "next/head";
import PostList from "@components/post_list";
import Navbar from "@components/navbar";
import { getSortedPostsData } from "@lib/posts";
import Link from "next/link";

export function getStaticProps() {
  return {
    props: {
      posts: getSortedPostsData().slice(0, 8),
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
        <h2 className="text-3xl font-bold mb-2">About</h2>
        <p>
          Welcome to my personal site, the journal of a simple mind. Here
          you&apos;ll find my musings on various topics, like emacs, linux, and
          software development. along with occasional rants and raves. Thanks
          for stopping by!
        </p>
      </section>
      <section>
        <h2 className="text-3xl font-bold mb-8">Recent Posts</h2>
        <PostList posts={posts} />
      </section>
      <div className="w-full flex text-lg">
        <Link href="/posts" className="ml-auto mr-8">
          {"More>>"}
        </Link>
      </div>
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
