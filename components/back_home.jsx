import Link from "next/link";

export default function BackHome() {
  return (
    <header>
      <div className="mb-6 md:flex md:items-center flex justify-between">
        <Link href="/" className="text-lg inline-block">
          ← Back Home
        </Link>
      </div>
    </header>
  );
}
