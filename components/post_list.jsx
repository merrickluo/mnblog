import Link from "next/link";

export default function PostList({ posts }) {
  if (!posts || posts.length === 0) {
    return <div>Nothing here.</div>;
  }

  return (
    <ol className="text-lg tracking-wide text-secondary">
      {posts.map((p) => (
        <li className="mb-6 md:flex md:flex-row" key={p.slug}>
          <time className="block md:flex-l-32" dateTime={p.date}>
            {new Date(p.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
          <div className="flex flex-row items-baseline">
            <Link href={`/posts/${encodeURIComponent(p.slug)}`}>
              <a className="text-lg md:ml-12">{p.title}</a>
            </Link>
          </div>
        </li>
      ))}
    </ol>
  );
}
