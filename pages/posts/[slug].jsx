import Head from "next/head";
import Link from "next/link";
import Tag from "@components/tag";
import { useRouter } from "next/router";

import { getPostData, getSortedPostsData } from "@lib/posts";

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

export function getStaticProps({ params }) {
  return {
    props: { postData: getPostData(params.slug) },
  };
}

export default function Post({ postData }) {
  const { asPath } = useRouter();
  const permanentUrl = `${process.env.baseUrl}${asPath}`;
  return (
    <>
      <Head>
        <title>{`${postData.title} - ${process.env.title}`}</title>
        <meta name="author" content={postData.author || "A.I."} />
        <meta property="og:locale" content={postData.language} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={postData.description} />
        <meta property="og:url" content={permanentUrl} />
        <meta property="og:site_name" content={process.env.title} />
        <meta property="og:image" content="" /> {/* TODO add avatar */}
        <meta name="description" content={postData.description} />
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
              <li key={c} className="inline-block mr-2 text-sm">
                <Link
                  href={`/categories/${encodeURIComponent(c)}`}
                  passHref
                  legacyBehavior
                >
                  <Tag>{c}</Tag>
                </Link>
              </li>
            ))}
        </ol>
      </section>
      <article dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </>
  );
}
