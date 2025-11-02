import Image from "next/image";
import { User } from "@prisma/client";

import defaultAvatar from "@/assets/defaultUser.png";
import { formatDate } from "@/utils/helpers";

import { FaBirthdayCake, FaFlag, FaCalendarAlt, FaUser } from "react-icons/fa";
import { BiMaleFemale } from "react-icons/bi";
import { IoMailSharp } from "react-icons/io5";

function ProfileDetails({ user }: { user: User }) {
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
    <>
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
      <h5 className="text-xl font-medium font-poppins">Details:</h5>
      <ProfileDetailLine icon={<IoMailSharp />} label="Email">
        {email}
      </ProfileDetailLine>
      <ProfileDetailLine
        icon={<FaCalendarAlt />}
        label="Date joined"
        className="mb-3"
      >
        {dateJoined}
      </ProfileDetailLine>
      <ProfileDetailLine icon={<FaBirthdayCake />} label="Birthday">
        {dateBirth}
      </ProfileDetailLine>
      <ProfileDetailLine icon={<BiMaleFemale />} label="Gender">
        {gender}
      </ProfileDetailLine>
      <ProfileDetailLine icon={<FaFlag />} label="Country" className="mb-3">
        {country || "Unknown"}
      </ProfileDetailLine>
      <div className="mb-4 max-w-[550px]">
        <span className="flex gap-1 items-center font-semibold">
          <FaUser /> About:
        </span>
        <span>{bio || "No info on user"}</span>
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
    </>
  );
}

// Helper component props type
type ProfileDetailLineProps = {
  label: string;
  children: React.ReactNode;
  className?: string;
  icon: React.ReactNode;
};

// Helper component
function ProfileDetailLine({
  label,
  children,
  className,
  icon,
}: ProfileDetailLineProps) {
  // Returned JSX
  return (
    <div className={`flex gap-x-1 items-center ${className}`}>
      {icon}
      <span className="w-30 font-semibold">{label}:</span>
      <span>{children}</span>
    </div>
  );
}

export default ProfileDetails;
