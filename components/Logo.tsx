import Link from "next/link";

function Logo() {
  // Returned JSX
  return (
    <div className="font-popping text-2xl">
      <Link href="/">
        Next<span className="font-semibold uppercase">Blog</span>
      </Link>
    </div>
  );
}

export default Logo;
