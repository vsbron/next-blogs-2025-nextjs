"use client";
import { useState } from "react";

import ProfileDetails from "@/components/ProfileDetails";
import SectionTitle from "@/components/SectionTitle";
import ProfileEdit from "@/components/dashboard/ProfileEdit";
import { Button } from "@/components/ui/button";
import useCurrentUser from "@/hooks/useCurrentUser";

function DashboardProfile() {
  // Get the user details and auth state and function
  const { user, isPending } = useCurrentUser();

  // Create state value for editing mode
  const [isEditing, setIsEditing] = useState<boolean>(false);

  // Mode toggle function
  const toggleEditingMode = () => {
    setIsEditing((iE) => !iE);
  };

  // Guard clause
  if (!user) return null;

  // Returned JSX
  return (
    <section>
      <SectionTitle>Manage profile</SectionTitle>
      {isEditing ? <ProfileEdit user={user} /> : <ProfileDetails user={user} />}
      <Button
        onClick={toggleEditingMode}
        className="mt-10"
        disabled={isPending}
      >
        {isEditing ? "Save changes" : "Edit profile"}
      </Button>
    </section>
  );
}

export default DashboardProfile;
