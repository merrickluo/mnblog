import Head from "next/head";
import PostList from "@components/post_list";
import Navbar from "@components/navbar";
import { getSortedPostsData } from "@lib/posts";

export function getStaticProps() {
  return {
    props: {
      posts: getSortedPostsData().slice(0, 13),
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
          <span>
            This is A.I.&#39;s personal site. I post some low quality blog posts
            here. I use emacs with
          </span>
          <span>
            <a href="https://github.com/hlissner/doom-emacs"> doom-emacs</a>
          </span>
          <span>. I also use gentoo(BTW) with i3.</span>
        </p>
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
