"use client";
import { SignedIn, SignedOut, useClerk } from "@clerk/nextjs";
import { LogOut, MenuIcon } from "lucide-react";
import Link from "next/link";

import Authentication from "./Authentication";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { personalAreaLinks, primaryLinks } from "@/utils/links";

function Dropdown() {
  // Get the Clerk object
  const clerk = useClerk();

  // Returned JSX
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="outline">
          <MenuIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={10}
        className="bg-background py-2 rounded-md border border-border w-72 z-150"
      >
        <div className="pt-2 pb-4 pl-8 pr-4 flex justify-between items-center gap-x-8">
          <div className="flex items-center gap-x-3">
            <div className="w-9 h-9 rounded-full border border-primary mt-0.5"></div>
            <div className="text-sm">
              <div>{clerk.isSignedIn ? "Display name" : "Unknown user"}</div>
              <div className="text-muted-foreground/75 text-sm">
                {clerk.isSignedIn ? "Username" : "No username"}
              </div>
            </div>
          </div>
          <SignedIn>
            <Button variant="outline" size="sm" onClick={() => clerk.signOut()}>
              <LogOut className="stroke-muted-foreground" />
            </Button>
          </SignedIn>
        </div>
        <DropdownMenuSeparator />
        <div className="py-2 px-6">
          {/* MOBILE MENU */}
          <div className="md:hidden">
            {primaryLinks.map(({ label, href }) => (
              <DropdownMenuItem key={href} className="focus:bg-transparent">
                <Link href={href} className="link-primary">
                  {label}
                </Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
          </div>
          <SignedIn>
            {personalAreaLinks.map(({ label, href }) => (
              <DropdownMenuItem key={href} className="focus:bg-transparent">
                <Link href={href} className="link-primary">
                  {label}
                </Link>
              </DropdownMenuItem>
            ))}
          </SignedIn>

          {/* SIGNED OUT MENU */}
          <SignedOut>
            <Authentication />
          </SignedOut>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Dropdown;
