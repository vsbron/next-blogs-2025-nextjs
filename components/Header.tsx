import Logo from "./Logo";
import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";
import Search from "./Search";
import Authentication from "./Authentication";

import { Button } from "./ui/button";
import { PencilLine } from "lucide-react";
import Link from "next/link";
import HeaderSeparator from "./HeaderSeparator";
function Header() {
  // Returned JSX
  return (
    <header className="sticky top-0 z-100 shadow-xl bg-background dark:border-b dark:border-b-foreground-muted py-4">
      <div className="max-w-7xl flex justify-between gap-x-8 mx-auto">
        <div className="flex gap-8">
          <Logo />
          <HeaderSeparator />
          <div className="flex gap-8 items-center">
            <Navbar />
            <Search />
          </div>
        </div>
        <div className="flex gap-x-6 items-center">
          <Button size="sm" asChild>
            <Link href="/dashboard/add-post">
              <PencilLine />
              Post
            </Link>
          </Button>
          <ThemeToggle />
          <Authentication />
        </div>
      </div>
    </header>
  );
}

export default Header;
