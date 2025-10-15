import Link from "next/link";

import { Button } from "./ui/button";
import { PencilLine } from "lucide-react";

function Navbar() {
  // Returned JSX
  return (
    <div className="flex items-center gap-4">
      <Link href="/posts">Explore</Link>
      <Button asChild>
        <Link href="/dashboard/add-post">
          <PencilLine />
          Post
        </Link>
      </Button>
    </div>
  );
}

export default Navbar;
