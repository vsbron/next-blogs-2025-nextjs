"use client";
import Link from "next/link";
import { Suspense } from "react";
import { MenuIcon } from "lucide-react";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";

import Authentication from "@/components/Header/Authentication";
import DropdownUserDetails from "@/components/Header/DropdownUserDetails";
import SkeletonDropdownUserDetails from "@/components/skeletons/SkeletonDropdownUserDetails";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { personalAreaLinks, primaryLinks } from "@/utils/links";

function Dropdown() {
  // Get the user and isSignedIn state
  const { user, isSignedIn } = useUser();
  console.log(user);

  // Returned JSX
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" aria-label="Toggle menu" variant="outline">
          <MenuIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={10}
        className={`bg-background py-2 rounded-md border border-border z-150 ${
          isSignedIn ? "w-72 " : "w-auto"
        }`}
      >
        {/* USER DETAILS */}
        <SignedIn>
          <Suspense fallback={<SkeletonDropdownUserDetails />}>
            {/* <DropdownUserDetails id={user.id} /> */}
          </Suspense>
          <DropdownMenuSeparator />
        </SignedIn>

        {/* MENUS */}
        <div
          className={` flex flex-col items-start ${
            isSignedIn ? "py-2 px-6" : "py-1 px-2"
          }`}
        >
          {/* MOBILE MENU */}
          <div className="lg:hidden">
            {primaryLinks.map(({ label, href }) => (
              <DropdownMenuItem
                key={href}
                className="focus:bg-transparent"
                asChild
              >
                <Link href={href} className="link-primary cursor-pointer">
                  {label}
                </Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator className="mt-3 mb-2" />
          </div>
          {/* SIGNED IN MENU */}
          <SignedIn>
            {personalAreaLinks.map(({ label, href }) => (
              <DropdownMenuItem
                key={href}
                className="focus:bg-transparent"
                asChild
              >
                <Link href={href} className="link-primary cursor-pointer">
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
