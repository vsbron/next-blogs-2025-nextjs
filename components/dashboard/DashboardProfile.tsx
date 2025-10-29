"use client";
import { useState } from "react";

import useCurrentUser from "@/hooks/useCurrentUser";

import EditCredentials from "./EditCredentials";
import ProfileDetails from "@/components/ProfileDetails";
import SectionTitle from "@/components/SectionTitle";
import EditProfile from "@/components/dashboard/EditProfile";
import { Button } from "@/components/ui/button";

function DashboardProfile() {
  // Get the user details and auth state and function
  const { user, isPending } = useCurrentUser();

  // Create state value for editing mode
  const [isEditingDetails, setIsEditingDetails] = useState<boolean>(false);
  const [isEditingCredentials, setIsEditingCredentials] =
    useState<boolean>(false);

  // Mode toggle function
  const enterEditDetails = () => {
    setIsEditingDetails(true);
  };
  const enterEditCredentials = () => {
    setIsEditingCredentials(true);
  };
  const exitEditMode = () => {
    setIsEditingDetails(false);
    setIsEditingCredentials(false);
  };

  // Guard clause
  if (!user) return null;

  // Returned JSX
  return (
    <section>
      <SectionTitle>Manage profile</SectionTitle>
      {!(isEditingCredentials || isEditingDetails) && (
        <>
          <ProfileDetails user={user} />
          <div className="flex gap-x-4 mt-10">
            <Button onClick={enterEditCredentials} disabled={isPending}>
              Change email/password
            </Button>
            <Button onClick={enterEditDetails} disabled={isPending}>
              Edit profile
            </Button>
          </div>
        </>
      )}
      {isEditingDetails && <EditProfile user={user} exitFn={exitEditMode} />}
      {isEditingCredentials && (
        <EditCredentials clerkId={user.clerkId} exitFn={exitEditMode} />
      )}
    </section>
  );
}

export default DashboardProfile;
