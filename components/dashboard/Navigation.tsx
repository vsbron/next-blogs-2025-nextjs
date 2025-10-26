"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { personalAreaLinks } from "@/utils/links";

function Navigation() {
  // Get the pathname
  const pathname = usePathname();

  // Returned JSX
  return (
    <div className="flex items-center font-poppins border-b">
      {personalAreaLinks.map(({ label, href }) => (
        <div
          key={href}
          className={`border-1 border-b-0 rounded-t-lg hover:bg-accent-light transition-colors ${
            pathname === href ? "!bg-primary !text-background" : ""
          }`}
        >
          <Link href={href} className="inline-block py-2 px-5">
            {label}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Navigation;
