import Link from "next/link";

export default function Tag({ text, href }) {
  return (
    <Link href={href}>
      <a className="border-none mr-2 text-primary text-xs bg-background-alt hover:bg-background-dark hover:text-secondary rounded-sm px-3 py-1">
        {text}
      </a>
    </Link>
  );
}
