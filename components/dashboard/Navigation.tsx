"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { personalAreaLinks } from "@/utils/links";

function Navigation() {
  const pathname = usePathname();

  console.log("Current path:", pathname);

  // Returned JSX
  return (
    <div className="flex items-center font-poppins border-b mb-2">
      {personalAreaLinks.map(({ label, href }) => (
        <div
          key={href}
          className={`border-1 border-b-0 rounded-t-lg ${
            pathname === href ? "bg-primary text-background" : ""
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
