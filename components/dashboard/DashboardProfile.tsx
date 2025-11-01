"use client";
import Link from "next/link";

import ProfileDetails from "@/components/ProfileDetails";
import { Button } from "@/components/ui/button";
import { User } from "@prisma/client";

function DashboardProfile({ user }: { user: User }) {
  // Returned JSX
  return (
    <section>
      <ProfileDetails user={user} />
      <div className="flex gap-x-4 mt-10">
        <Button asChild>
          <Link href="/dashboard/profile/edit-credentials/">
            Change username/password
          </Link>
        </Button>
        <Button asChild>
          <Link href="/dashboard/profile/edit-profile/">
            Edit profile details
          </Link>
        </Button>
      </div>
    </section>
  );
}

export default DashboardProfile;
