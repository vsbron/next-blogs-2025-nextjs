import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { SignedIn, SignedOut } from "@clerk/nextjs";

import Authentication from "./Authentication";
import DropdownUserDetails from "./DropdownUserDetails";
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
        {/* USER DETAILS */}
        <DropdownUserDetails />
        <DropdownMenuSeparator />

        {/* MENUS */}
        <div className="py-2 px-6 flex flex-col items-start">
          {/* MOBILE MENU */}
          <div className="lg:hidden">
            {primaryLinks.map(({ label, href }) => (
              <DropdownMenuItem key={href} className="focus:bg-transparent" asChild>
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
              <DropdownMenuItem key={href} className="focus:bg-transparent" asChild>
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
