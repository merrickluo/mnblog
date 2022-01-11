import PostList from "../../components/post_list";
import { getPostCategories, getSortedPostsData } from "../../lib/posts";

export function getStaticPaths() {
  return {
    fallback: false,
    paths: getPostCategories().map((it) => ({
      params: {
        name: it,
      },
    })),
  };
}

export function getStaticProps({ params }) {
  return {
    props: {
      name: params.name,
      allPosts: getSortedPostsData({ category: params.name }),
    },
  };
}

export default function Category({ name, allPosts }) {
  return (
    <>
      <h1 className="text-3xl font-bold mb-8">All posts in category: {name}</h1>
      <PostList posts={allPosts} />
    </>
  );
}
