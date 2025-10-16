import Link from "next/link";

import { links } from "@/utils/links";

function Navbar() {
  // Returned JSX
  return (
    <nav className="flex flex-col items-start gap-y-2">
      {links.map(({ href, label }) => (
        <Link key={href} href={href}>
          {label}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
