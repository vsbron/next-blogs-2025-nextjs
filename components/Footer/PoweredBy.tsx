import Link from "next/link";

import { poweredIcons } from "@/utils/poweredIcons";

function PoweredBy() {
  // Returned JSX
  return (
    <div>
      <h4 className="mb-2 text-lg">Powered By</h4>
      <div className="flex gap-x-4 sm:gap-x-6">
        {poweredIcons.map(({ title, target, href }) => (
          <Link
            key={title}
            href={href}
            className="fill-muted-foreground hover:fill-foreground/90 transition-all"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8">
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
