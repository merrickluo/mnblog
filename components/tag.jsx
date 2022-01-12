export default function Tag({ children, href }) {
  return (
    <a
      href={href}
      className="p-1 border-none bg-background-alt hover:bg-background-dark hover:text-secondary rounded-sm"
    >
      {children}
    </a>
  );
}
