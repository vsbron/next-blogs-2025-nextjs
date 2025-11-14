import Link from "next/link";

import Container from "@/components/Container";
import ThemeToggle from "@/components/ThemeToggle";
import HeaderNavbar from "@/components/Header/HeaderNavbar";
import HeaderSeparator from "@/components/Header/HeaderSeparator";
import Dropdown from "@/components/Header/Dropdown";
import Logo from "@/components/Header/Logo";
import Search from "@/components/Header/Search";
import { Button } from "@/components/ui/button";

import { PencilLine } from "lucide-react";

function Header() {
  // Returned JSX
  return (
    <header className="sticky top-0 z-100 shadow-xl bg-background dark:border-b dark:border-b-foreground-muted py-4">
      <Container className="flex justify-between">
        <div className="flex gap-x-8">
          <Logo />
          <div className="hidden lg:contents">
            <HeaderSeparator />
            <HeaderNavbar />
          </div>
        </div>
        <div className="flex gap-x-2 xs:gap-x-4 items-center">
          <PostButton />
          <Search />
          <ThemeToggle />
          <Dropdown />
        </div>
      </Container>
    </header>
  );
}

// Helper component
function PostButton() {
  // Returned JSX
  return (
    <Button size="sm" aria-label="Add a post" asChild>
      <Link href="/dashboard/add-post" prefetch={false}>
        <PencilLine />
        <span className="hidden xs:inline">Post</span>
      </Link>
    </Button>
  );
}

export default Header;
