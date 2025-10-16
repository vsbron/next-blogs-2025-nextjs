import Link from "next/link";
import { PencilLine } from "lucide-react";

import Authentication from "./Header/Authentication";
import Logo from "./Header/Logo";
import Navbar from "./Header/Navbar";
import Search from "./Header/Search";
import Separator from "./Header/Separator";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";

function Header() {
  // Returned JSX
  return (
    <header className="sticky top-0 z-100 shadow-xl bg-background dark:border-b dark:border-b-foreground-muted py-4">
      <div className="max-w-7xl flex justify-between gap-x-8 mx-auto">
        <div className="flex gap-8">
          <Logo />
          <Separator />
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
