import { links } from "@/utils/links";
import Link from "next/link";

function Footer() {
  // Returned JSX
  return (
    <footer>
      <div className="max-w-7xl mx-auto py-6">
        <nav className="flex flex-col items-start gap-y-2">
          {links.map(({ href, label }) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
