import { poweredIcons } from "@/utils/poweredIcons";
import Link from "next/link";

function PoweredBy() {
  // Returned JSX
  return (
    <div>
      <h4 className="font-poppins mb-2 text-lg">Powered By</h4>
      <div className="flex gap-x-6">
        {poweredIcons.map(({ title, target, href }) => (
          <Link
            key={title}
            href={href}
            className="fill-foreground/90 hover:fill-muted-foreground transition-all"
          >
            <svg width="32" height="32">
              <title>{title}</title>
              <use href={`/set-powered.svg#${target}`}></use>
            </svg>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PoweredBy;
