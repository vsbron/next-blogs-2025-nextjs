import Image from "next/image";
import { type User as UserType } from "@prisma/client";

import ProfileDetailsLine from "@/components/ProfileDetailsLine";
import defaultAvatar from "@/assets/defaultUser.png";
import { formatDate } from "@/utils/helpers";

import { VenusAndMars, Mail, Calendar, Flag, User, Cake } from "lucide-react";

function ProfileDetails({ user }: { user: UserType }) {
  // Destructure the user
  const {
    imageUrl,
    displayName,
    email,
    bio,
    dateCreated,
    username,
    birthday,
    gender,
    country,
    socials,
  } = user;

  // Format dates and socials
  const dateJoined = formatDate(dateCreated);
  const dateBirth = birthday ? formatDate(new Date(birthday)) : "Unknown";
  const socialsArray = socials as { key: string; value: string }[];

  // Returned JSX
  return (
    <div className="flex flex-col gap-y-1">
      <div className="flex items-center gap-x-6 mb-6">
        <div className="w-22 h-22 relative">
          <Image
            src={imageUrl || defaultAvatar}
            fill
            alt={displayName || "Unknown user"}
            sizes="100px"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col items-start font-poppins">
          <h2 className="text-3xl">{displayName}</h2>
          <h4 className="text-2xl text-foreground/50">{username}</h4>
        </div>
      </div>
      <h5 className="text-xl font-medium">Details:</h5>
      <ProfileDetailsLine icon={<Mail />} label="Email">
        {email}
      </ProfileDetailsLine>
      <ProfileDetailsLine
        icon={<Calendar />}
        label="Date joined"
        className="mb-3"
      >
        {dateJoined}
      </ProfileDetailsLine>
      <ProfileDetailsLine icon={<Cake />} label="Birthday">
        {dateBirth}
      </ProfileDetailsLine>
      <ProfileDetailsLine icon={<VenusAndMars />} label="Gender">
        {gender}
      </ProfileDetailsLine>
      <ProfileDetailsLine icon={<Flag />} label="Country" className="mb-3">
        {country || "Unknown"}
      </ProfileDetailsLine>
      <div className="mb-4 max-w-[550px]">
        <ProfileDetailsLine icon={<User />} label="About" column={true}>
          {bio || "No info on user"}
        </ProfileDetailsLine>
      </div>
      <div>
        <div className="text-xl font-poppins">Social accounts:</div>
        <div className="flex items-center gap-x-4 mt-2">
          {socialsArray.map(({ key, value }) => (
            <a
              href={value}
              key={key}
              target="_blank"
              rel="noreferrer"
              className={value ? "" : "opacity-50 pointer-events-none"}
            >
              <svg className="fill-foreground hover:fill-primary-light transition-all w-5 h-5">
                <use href={`/set-socials.svg#${key}`}></use>
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
