import ProfileDetailsLine from "@/components/Profile/ProfileDetailsLine";
import ProfileSocials from "@/components/Profile/ProfileSocials";

import { calculateAge, countDays, formatDate } from "@/utils/helpers";

import { VenusAndMars, Mail, Calendar, Flag, User, Cake } from "lucide-react";
import { User as UserType } from "@/utils/types";

async function ProfileDetails({ user }: { user: UserType }) {
  // Destructure the user
  const { email, bio, dateCreated, birthday, gender, country } = user;

  // Format dates
  const dateJoined = formatDate(dateCreated);
  const dateBirth = birthday ? formatDate(new Date(birthday)) : "Unknown";

  // Returned JSX
  return (
    <div className="flex flex-col gap-y-1">
      <h5 className="text-xl font-medium">Details:</h5>
      <ProfileDetailsLine icon={<Mail />} label="Email">
        {email}
      </ProfileDetailsLine>
      <ProfileDetailsLine
        icon={<Calendar />}
        label="Date joined"
        className="mb-3"
      >
        {dateJoined}{" "}
        <span className="text-sm hidden xs:inline-block">
          ({countDays(dateJoined)} days ago)
        </span>
      </ProfileDetailsLine>
      <ProfileDetailsLine icon={<Cake />} label="Birthday">
        {dateBirth}{" "}
        {birthday && (
          <span className="text-sm hidden xs:inline-block">
            ({calculateAge(dateBirth)} years)
          </span>
        )}
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
