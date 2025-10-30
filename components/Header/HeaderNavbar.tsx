import Link from "next/link";

import { primaryLinks } from "@/utils/links";

function HeaderNavbar() {
  // Remove the home page link
  const headerLinks = primaryLinks.slice(1, primaryLinks.length);

  // Returned JSX
  return (
    <div className="flex items-center gap-8 text-[17px] font-poppins">
      {headerLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="text-primary hover:text-foreground"
        >
          {label}
        </Link>
      ))}
    </div>
  );
}

export default HeaderNavbar;
