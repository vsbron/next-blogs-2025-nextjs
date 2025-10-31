"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { personalAreaLinks } from "@/utils/links";

function Navigation() {
  // Get the pathname
  const pathname = usePathname();

  // Returned JSX
  return (
    <div className="flex flex-col font-poppins border-r max-content-width">
      {personalAreaLinks.map(({ label, href }) => (
        <div
          key={href}
          className={`border-1 border-r-0 rounded-l-lg hover:bg-accent-light transition-colors ${
            pathname === href ? "!bg-primary !text-background" : ""
          }`}
        >
          <Link href={href} className="block py-2.5 px-6.5 whitespace-nowrap">
            {label}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Navigation;
