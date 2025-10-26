"use client";
import Image from "next/image";
import useCurrentUser from "@/hooks/useCurrentUser";
import SectionTitle from "../SectionTitle";

import defaultAvatar from "@/assets/defaultUser.png";

function Profile() {
  // Get the user details and auth state and function
  const { user, isPending } = useCurrentUser();

  // Guard clause
  if (!user) return null;

  // Destructure the user
  const { avatarUrl, displayName, email, id, bio, dateCreated } = user!;

  // Returned JSX
  return (
    <section>
      <SectionTitle>Manage profile</SectionTitle>
      <div className="w-40 h-40 relative">
        <Image
          src={avatarUrl || defaultAvatar}
          fill
          alt={displayName || "Unknown user"}
          className="rounded-full"
        />
      </div>
      <h2>{displayName}</h2>
      <div>{id}</div>
      <div>{email}</div>
      <div>{bio}</div>
      <div>{dateCreated.toString()}</div>
    </section>
  );
}

export default Profile;
