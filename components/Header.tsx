import Link from "next/link";
import { MenuIcon, PencilLine } from "lucide-react";

import Authentication from "./Header/Authentication";
import HeaderNavbar from "./Header/HeaderNavbar";
import HeaderSeparator from "./Header/HeaderSeparator";
import Logo from "./Header/Logo";
import Search from "./Header/Search";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";
import Container from "./Container";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { personalAreaLinks } from "@/utils/links";
import { SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs";

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
        <div className="flex gap-x-4 items-center">
          <SignedIn>
            <Button size="sm" asChild>
              <Link href="/profile/add-post">
                <PencilLine />
                Post
              </Link>
            </Button>
          </SignedIn>
          <ThemeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" variant="outline">
                <MenuIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              sideOffset={10}
              className="bg-background pt-2 pb-3 px-8 rounded-md border border-border"
            >
              <SignedIn>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {personalAreaLinks.map(({ label, href }) => (
                  <DropdownMenuItem key={href}>
                    <Link href={href}>{label}</Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <SignOutButton />
                </DropdownMenuItem>
              </SignedIn>
              <SignedOut>
                <Authentication />
              </SignedOut>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Container>
    </header>
  );
}

export default Header;
