import Head from "next/head";
import Tag from "../../components/tag";

import { getPostData, getSortedPostsData } from "../../lib/posts";

export function getStaticPaths() {
  const allPosts = getSortedPostsData();
  return {
    paths: allPosts.map((it) => ({
      params: {
        slug: it.slug,
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
    <>
      <Head>
        <title>{postData.title} - A.I.&#39;s Blog</title>
      </Head>
      <section className="mb-6">
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
                <Tag text={c} href={`/categories/${encodeURIComponent(c)}`} />
              </li>
            ))}
        </ol>
      </section>
      <article dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </>
  );
}
