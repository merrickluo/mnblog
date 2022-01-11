import Head from "next/head";
import { getPostData, getSortedPostsData } from "../../lib/posts";

export function getStaticPaths() {
  const allPosts = getSortedPostsData();
  return {
    paths: allPosts.map((it) => ({
      params: {
        slug: encodeURIComponent(it.slug),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: { postData: await getPostData(params.slug) },
  };
}

export default function Post({ postData }) {
  return (
    <div className="w-full p-6 md:w-2/3 md:px-0 md:mx-auto xl:w-2/5">
      <Head>
        <title>{postData.title} - A.I.&#39;s Blog</title>
      </Head>
      <header className="mb-6">
        <div className="mb-6 md:flex md:items-center">
          <div className="w-full">Back Home TBD</div>
        </div>
        <h1 className="text-4xl font-bold">{postData.title}</h1>
        <time dateTime={postData.date}>
          {new Date(postData.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </time>
        <ol className="mt-4">
          {postData.categories &&
            postData.categories.map((c) => (
              <li key={c} className="inline-block">
                <p className="border-none mr-2 text-primary text-xs bg-background-alt hover:bg-background-dark hover:text-secondary rounded-sm px-3 py-1">
                  {c}
                </p>
              </li>
            ))}
        </ol>
      </header>
      <article dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  );
}
