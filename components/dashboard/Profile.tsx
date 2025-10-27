"use client";
import Image from "next/image";
import useCurrentUser from "@/hooks/useCurrentUser";
import SectionTitle from "../SectionTitle";

import defaultAvatar from "@/assets/defaultUser.png";
import { Facebook, Github, Instagram, TwitterIcon } from "lucide-react";
import { useState } from "react";

function Profile() {
  // Get the user details and auth state and function
  const { user, isPending } = useCurrentUser();

  // Create state value for editing mode
  const [isEditing, setIsEditing] = useState<boolean>(false);

  // Guard clause
  if (!user) return null;

  // Destructure the user
  const { avatarUrl, displayName, email, id, bio, dateCreated, username } =
    user!;

  // Returned JSX
  return (
    <section>
      <SectionTitle>Manage profile</SectionTitle>
      <div className="flex items-center gap-x-6">
        <div className="w-32 h-32 relative">
          <Image
            src={avatarUrl || defaultAvatar}
            fill
            alt={displayName || "Unknown user"}
            className="rounded-full"
          />
        </div>
        <div>
          <h2 className="text-3xl">{displayName}</h2>
          <h4 className="text-2xl text-foreground/60">{username}</h4>
        </div>
      </div>
      <h5 className="text-lg">Details:</h5>
      <div>ID: {id}</div>
      <div>Email: {email}</div>
      <div>Date joined: {dateCreated.toString()}</div>
      <div>Bio:{bio}</div>
      <div>
        Social accounts:{" "}
        <div className="flex items-center gap-x-4">
          <Facebook /> <TwitterIcon /> <Instagram /> <Github />
        </div>
      </div>
    </section>
  );
}

export default Profile;
