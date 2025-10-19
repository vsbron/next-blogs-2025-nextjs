"use client";
import Image from "next/image";
import { LogOut } from "lucide-react";
import { useClerk } from "@clerk/nextjs";
import { SignedIn } from "@clerk/clerk-react";

import { Button } from "../ui/button";

import defaultAvatar from "@/assets/defaultUser.png";

function DropdownUserDetails() {
  // Get some user data and signOut function from Clerk
  const { user, signOut, isSignedIn } = useClerk();
  const username = user?.username as string;
  const imageUrl = user?.imageUrl as string;

  // Returned JSX
  return (
    <div className="pt-2 pb-4 pl-8 pr-4 flex justify-between items-center gap-x-8">
      <div className="flex items-center gap-x-3">
        <Image
          src={isSignedIn ? imageUrl : defaultAvatar}
          width={40}
          height={40}
          className="mt-0.5 rounded-full"
          alt={isSignedIn ? username : "Unknown user"}
        />
        <div className="text-sm">
          <div>{isSignedIn ? "Display name" : "Unknown user"}</div>
          <div className="text-muted-foreground/75 text-sm">
            {isSignedIn ? username : "No username"}
          </div>
        </div>
      </div>
      <SignedIn>
        <Button variant="outline" size="sm" onClick={() => signOut()}>
          <LogOut className="stroke-muted-foreground" />
        </Button>
      </SignedIn>
    </div>
  );
}

export default DropdownUserDetails;
