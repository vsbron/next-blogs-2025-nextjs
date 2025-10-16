import Link from "next/link";

function Navbar() {
  // Returned JSX
  return (
    <div className="flex items-center gap-4 text-lg">
      <Link href="/posts" className="text-foreground">
        Browse Posts
      </Link>
    </div>
  );
}

export default Navbar;
