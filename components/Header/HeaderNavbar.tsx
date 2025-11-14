import Link from "next/link";

import { headerLinks } from "@/utils/links";

function HeaderNavbar() {
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
