import Link from "next/link";

import { primaryLinks, secondaryLinks } from "@/utils/links";

function FooterNavbar() {
  // Returned JSX
  return (
    <div>
      <h3 className="font-poppins text-xl mb-1">Menu</h3>
      <div className="flex gap-20 text-[17px]">
        <nav className="flex flex-col gap-y-0.5">
          {primaryLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className=" text-primary hover:text-primary-light"
            >
              {label}
            </Link>
          ))}
        </nav>
        <nav className="flex flex-col gap-y-0.5">
          {secondaryLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className=" text-primary hover:text-primary-light"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default FooterNavbar;
