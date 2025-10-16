import Link from "next/link";

function Logo() {
  // Returned JSX
  return (
    <div className="font-poppins text-2xl text-primary hover:text-primary-light transition-colors">
      <Link href="/">
        Next<span className="font-semibold uppercase">Blogs</span>
      </Link>
    </div>
  );
}

export default Logo;
