import Link from "next/link";

export default function Navbar() {
  return (
    <>
      {/* normal menu */}
      <div className="flex">
        <Link href="/posts">
          <a className="text-xl mx-2">/Posts</a>
        </Link>
        <Link href="/posts/feed.xml">
          <a className="text-xl mx-2">/RSS</a>
        </Link>
      </div>
    </>
  );
}
