"use client";
import Image from "next/image";
import { LogOut } from "lucide-react";
import { useClerk } from "@clerk/nextjs";
import { SignedIn } from "@clerk/clerk-react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import defaultAvatar from "@/assets/defaultUser.png";
import useUser from "@/hooks/useUser";

function DropdownUserDetails() {
  // Get some user data and signOut function from Clerk
  const { user: clerkUser, signOut } = useClerk();
  const clerkId = clerkUser?.id as string;

  const { user, isPending } = useUser(clerkId);

  // const isPending = true;

  // Returned JSX
  return (
    <div className="pt-2 pb-4 pl-8 pr-4 flex justify-between items-center gap-x-8">
      <div className="flex items-center gap-x-3">
        {isPending ? (
          <>
            <Skeleton className="h-10 w-10 rounded-full mt-0.5" />
            <div className="space-y-2">
              <Skeleton className="h-3 w-15" />
              <Skeleton className="h-3 w-12" />
            </div>
          </>
        ) : (
          <>
            <Image
              src={user?.avatarUrl ?? defaultAvatar}
              width={40}
              height={40}
              className="mt-0.5 rounded-full"
              alt={user ? user.username : "Unknown user"}
            />
            <div className="text-sm">
              <div>{user ? user.displayName : "Unknown user"}</div>
              <div className="text-muted-foreground/75 text-sm">
                {user ? user.username : "No username"}
              </div>
            </div>
          </>
        )}
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
