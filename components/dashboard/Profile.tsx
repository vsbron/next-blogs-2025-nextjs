"use client";
import Image from "next/image";
import useCurrentUser from "@/hooks/useCurrentUser";
import SectionTitle from "../SectionTitle";

import defaultAvatar from "@/assets/defaultUser.png";
import { Facebook, Github, Instagram, TwitterIcon } from "lucide-react";
import { useState } from "react";
import { formatDate } from "@/utils/helpers";
import { Button } from "../ui/button";

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
  const date = formatDate(dateCreated);

  // Returned JSX
  return (
    <section>
      <SectionTitle>Manage profile</SectionTitle>
      {isEditing ? (
        <>
          <h2>Under construction</h2>
          <Button
            size="sm"
            className="mt-1"
            onClick={() => setIsEditing(false)}
          >
            Save changes
          </Button>
        </>
      ) : (
        <>
          <div className="flex items-center gap-x-6 mb-6">
            <div className="w-32 h-32 relative">
              <Image
                src={avatarUrl || defaultAvatar}
                fill
                alt={displayName || "Unknown user"}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col items-start gap-1 font-poppins">
              <h2 className="text-3xl">
                <span className="text-foreground/60">Display name:</span>{" "}
                {displayName}
              </h2>
              <h4 className="text-2xl">
                <span className="text-foreground/60">Username:</span> {username}
              </h4>
              <Button
                variant="outline"
                size="sm"
                className="mt-1"
                onClick={() => setIsEditing(true)}
              >
                Edit profile
              </Button>
            </div>
          </div>
          <h5 className="text-lg font-medium font-poppins">Details:</h5>
          <ProfileDetailLine label="ID">{id}</ProfileDetailLine>
          <ProfileDetailLine label="Email">{email}</ProfileDetailLine>
          <ProfileDetailLine label="Date joined" className="mb-3">
            {date}
          </ProfileDetailLine>
          <ProfileDetailLine label="Birthday">Unknown</ProfileDetailLine>
          <ProfileDetailLine label="Gender">Unknown</ProfileDetailLine>
          <ProfileDetailLine label="Country">Unknown</ProfileDetailLine>
          <div className="mb-3 max-w-[550px]">
            Bio:
            <br />
            <b>
              {bio ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iste hic atque doloremque cupiditate quo distinctio dolore accusantium a doloribus dicta eligendi numquam recusandae iusto tempora exercitationem, cum fuga! Debitis."}
            </b>
          </div>
          <div>
            Social accounts:{" "}
            <div className="flex items-center gap-x-4 mt-1">
              <Facebook /> <TwitterIcon /> <Instagram /> <Github />
            </div>
          </div>
        </>
      )}
    </section>
  );
}

function ProfileDetailLine({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div>
      <span className={`inline-block w-30 ${className}`}>{label}:</span>
      <b>{children}</b>
    </div>
  );
}

export default Profile;
