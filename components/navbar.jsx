import Link from "next/link";

export default function Navbar() {
  return (
    <>
      {/* normal menu */}
      <div className="flex sm:hidden">
        <Link href="/about">
          <a className="text-xl mx-2">/About</a>
        </Link>
        <Link href="/posts">
          <a className="text-xl mx-2">/Posts</a>
        </Link>
        <Link href="/posts/feed.xml">
          <a className="text-xl mx-2">/RSS</a>
        </Link>
      </div>
      {/* mobile menu */}
      <div className="md:hidden">
        <ol>
          <li>/Posts</li>
          <li>/About</li>
          <li>/RSS</li>
        </ol>
      </div>
    </>
  );
}
