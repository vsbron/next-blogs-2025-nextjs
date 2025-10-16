import Link from "next/link";

import { primaryLinks, secondaryLinks } from "@/utils/links";

function FooterNavbar() {
  // Returned JSX
  return (
    <div>
      <h3 className="font-poppins text-xl">Menu</h3>
      <nav className="flex items-start gap-x-6">
        {primaryLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-lg text-primary hover:text-primary-light"
          >
            {label}
          </Link>
        ))}
      </nav>
      <nav className="flex items-start gap-x-6">
        {secondaryLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-md text-primary hover:text-primary-light"
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default FooterNavbar;
