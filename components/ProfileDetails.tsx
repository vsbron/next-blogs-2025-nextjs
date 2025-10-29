import Image from "next/image";
import { User } from "@prisma/client";

import defaultAvatar from "@/assets/defaultUser.png";
import { formatDate } from "@/utils/helpers";

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

  // Format dates
  const dateJoined = formatDate(dateCreated);
  const dateBirth = birthday ? formatDate(new Date(birthday)) : "Unknown";

  console.log(socials);

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
        <div className="flex flex-col items-start gap-1 font-poppins">
          <h2 className="text-3xl">
            <span className="text-foreground/60">Name:</span> {displayName}
          </h2>
          <h4 className="text-2xl">
            <span className="text-foreground/60">Username:</span> {username}
          </h4>
        </div>
      </div>
      <h5 className="text-lg font-medium font-poppins">Details:</h5>
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
      <div className="mb-3 max-w-[550px]">
        Bio:
        <br />
        <b>
          {bio ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iste hic atque doloremque cupiditate quo distinctio dolore accusantium a doloribus dicta eligendi numquam recusandae iusto tempora exercitationem, cum fuga! Debitis."}
        </b>
      </div>
      <div>
        Social accounts: <div className="flex items-center gap-x-4 mt-1"></div>
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
      <span className={`inline-block w-30 ${className}`}>{label}:</span>
      <b>{children}</b>
    </div>
  );
}

export default ProfileDetails;
