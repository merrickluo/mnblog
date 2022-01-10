import Head from "next/head";
import Image from "next/image";

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
    <div className="w-full p-6 md:w-2/3 md:px-0 md:mx-auto xl:w-2/5">
      <Head>
        <title>A.I.&#39;s Blog</title>
        <meta name="description" content="A.I. Writes here." />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Overpass+Mono|Overpass:400,700&display=swap"
        />
      </Head>

      <header className="mb-6">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-4xl font-bold">A.I.&#39;s Blog</h1>
        </div>
        <p>A.I. writes here.</p>
      </header>

      <main className="mb-24">
        <PostList posts={posts} />
      </main>

      <footer className="w-full">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="w-6">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
