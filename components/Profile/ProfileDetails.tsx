import Image from "next/image";

import ProfileDetailsLine from "@/components/Profile/ProfileDetailsLine";
import ProfileSocials from "@/components/Profile/ProfileSocials";

import { formatDate } from "@/utils/helpers";
import { User as UserType } from "@/utils/types";

import { VenusAndMars, Mail, Calendar, Flag, User, Cake } from "lucide-react";
import defaultAvatar from "@/assets/defaultUser.png";

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
  } = user;

  // Format dates
  const dateJoined = formatDate(dateCreated);
  const dateBirth = birthday ? formatDate(new Date(birthday)) : "Unknown";

  // Returned JSX
  return (
    <div className="flex flex-col gap-y-1">
      <div className="flex items-center gap-x-6 mt-2 mb-4">
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
        <ProfileSocials user={user} />
      </div>
    </div>
  );
}

export default ProfileDetails;
