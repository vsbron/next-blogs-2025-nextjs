import Link from "next/link";
import { PencilLine } from "lucide-react";

import Container from "./Container";
import ThemeToggle from "./ThemeToggle";
import HeaderNavbar from "./Header/HeaderNavbar";
import HeaderSeparator from "./Header/HeaderSeparator";
import Dropdown from "./Header/Dropdown";
import Logo from "./Header/Logo";
import Search from "./Header/Search";
import { Button } from "./ui/button";

function Header() {
  // Returned JSX
  return (
    <header className="sticky top-0 z-100 shadow-xl bg-background dark:border-b dark:border-b-foreground-muted py-4">
      <Container className="flex justify-between">
        <div className="flex gap-x-8">
          <Logo />
          <HeaderSeparator />
          <div className="flex gap-x-6 items-center">
            <HeaderNavbar />
            <Search />
          </div>
        </div>
        <div className="flex gap-x-3 sm:gap-x-4 items-center">
          <Button size="sm" asChild>
            <Link href="/profile/add-post">
              <PencilLine />
              Post
            </Link>
          </Button>
          <ThemeToggle />
          <Dropdown />
        </div>
      </Container>
    </header>
  );
}

export default Header;
