import Image from "next/image";
import { User } from "@prisma/client";

import defaultAvatar from "@/assets/defaultUser.png";
import { formatDate } from "@/utils/helpers";
import Link from "next/link";

function ProfileDetails({ user }: { user: User }) {
  // Destructure the user
  const {
    avatarUrl,
    displayName,
    email,
    id,
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
        <div className="w-25 h-25 relative">
          <Image
            src={avatarUrl || defaultAvatar}
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
      <ProfileDetailLine label="ID">{id}</ProfileDetailLine>
      <ProfileDetailLine label="Email">{email}</ProfileDetailLine>
      <ProfileDetailLine label="Date joined" className="mb-3">
        {dateJoined}
      </ProfileDetailLine>
      <ProfileDetailLine label="Birthday">{dateBirth}</ProfileDetailLine>
      <ProfileDetailLine label="Gender">{gender}</ProfileDetailLine>
      <ProfileDetailLine label="Country">
        {country || "Unknown"}
      </ProfileDetailLine>
      <div className="mb-4 max-w-[550px]">
        <span className="block font-semibold">About:</span>
        <span>
          {bio ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iste hic atque doloremque cupiditate quo distinctio dolore accusantium a doloribus dicta eligendi numquam recusandae iusto tempora exercitationem, cum fuga! Debitis."}
        </span>
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
};

// Helper component
function ProfileDetailLine({
  label,
  children,
  className,
}: ProfileDetailLineProps) {
  // Returned JSX
  return (
    <div>
      <span className={`inline-block w-30 font-semibold ${className}`}>
        {label}:
      </span>
      <span>{children}</span>
    </div>
  );
}

export default ProfileDetails;
