import Link from "next/link";
import { HiRss, HiMail } from "react-icons/hi";

export default function Navbar() {
  return (
    <>
      {/* normal menu */}
      <div className="flex items-center justify-center">
        <Link href="mailto:merrick@luois.me" className="mx-2 text-2xl icon">
          <HiMail />
        </Link>
        <Link href="/posts/feed.xml" className="mx-2 text-2xl icon">
          <HiRss />
        </Link>
      </div>
    </>
  );
}
