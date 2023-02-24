import Link from "next/link";

export default function Navbar() {
  return <>
    {/* normal menu */}
    <div className="flex">
      <Link href="/posts" className="text-xl mx-2">
        /Posts
      </Link>
      <Link href="/posts/feed.xml" className="text-xl mx-2">
        /RSS
      </Link>
    </div>
  </>;
}
