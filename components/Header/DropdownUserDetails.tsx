import Image from "next/image";
import { LogOut } from "lucide-react";
import { SignOutButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

import defaultAvatar from "@/assets/defaultUser.png";
import { fetchCurrentUser } from "@/utils/actions/users";

async function DropdownUserDetails() {
  // Get current user
  const user = await fetchCurrentUser();

  // Guard clause
  if (!user) return;

  // Destructure user data
  const { imageUrl, username, displayName } = user;

  // Returned JSX
  return (
    <div className="pt-2 pb-4 pl-8 pr-4 flex justify-between items-center gap-x-8">
      <div className="flex items-center gap-x-3">
        <Image
          src={imageUrl ?? defaultAvatar}
          width={40}
          height={40}
          className="rounded-full"
          alt={username ?? "Unknown user"}
        />
        <div className="text-sm">
          <div>{displayName ?? "Unknown user"}</div>
          <div className="text-muted-foreground/75 text-sm">
            {username ?? "No username"}
          </div>
        </div>
      </div>
      <SignOutButton>
        <Button variant="outline" size="sm" aria-label="Sign out">
          <LogOut className="stroke-muted-foreground" />
        </Button>
      </SignOutButton>
    </div>
  );
}

export default DropdownUserDetails;
