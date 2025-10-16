import Link from "next/link";

function HeaderNavbar() {
  // Returned JSX
  return (
    <div className="flex items-center gap-4 text-lg">
      <Link href="/posts" className="text-foreground hover:text-primary-light">
        Browse Posts
      </Link>
    </div>
  );
}

export default HeaderNavbar;
