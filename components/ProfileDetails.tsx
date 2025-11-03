import Image from "next/image";
import { User } from "@prisma/client";

import ProfileDetailsLine from "@/components/ProfileDetailsLine";
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
      <ProfileDetailsLine icon={<IoMailSharp />} label="Email">
        {email}
      </ProfileDetailsLine>
      <ProfileDetailsLine
        icon={<FaCalendarAlt />}
        label="Date joined"
        className="mb-3"
      >
        {dateJoined}
      </ProfileDetailsLine>
      <ProfileDetailsLine icon={<FaBirthdayCake />} label="Birthday">
        {dateBirth}
      </ProfileDetailsLine>
      <ProfileDetailsLine icon={<BiMaleFemale />} label="Gender">
        {gender}
      </ProfileDetailsLine>
      <ProfileDetailsLine icon={<FaFlag />} label="Country" className="mb-3">
        {country || "Unknown"}
      </ProfileDetailsLine>
      <div className="mb-4 max-w-[550px]">
        <ProfileDetailsLine icon={<FaUser />} label="About" column={true}>
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
