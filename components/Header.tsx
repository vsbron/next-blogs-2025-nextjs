import Link from "next/link";
import { PencilLine } from "lucide-react";

import Authentication from "./Header/Authentication";
import HeaderNavbar from "./Header/HeaderNavbar";
import HeaderSeparator from "./Header/HeaderSeparator";
import Logo from "./Header/Logo";
import Search from "./Header/Search";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";
import Container from "./Container";

function Header() {
  // Returned JSX
  return (
    <header className="sticky top-0 z-100 shadow-xl bg-background dark:border-b dark:border-b-foreground-muted py-4">
      <Container className="flex justify-between gap-x-8">
        <div className="flex gap-8">
          <Logo />
          <HeaderSeparator />
          <div className="flex gap-8 items-center">
            <HeaderNavbar />
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
      </Container>
    </header>
  );
}

export default Header;
