import Link from "next/link";
import Tag from "./tag";

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
            <Link
              href={`/posts/${encodeURIComponent(p.slug)}`}
              className="text-lg md:ml-12">
              {p.title}
            </Link>
            <div className="ml-1 text-xs">
              <Tag>{p.language == "zh" ? "文" : "En"}</Tag>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
