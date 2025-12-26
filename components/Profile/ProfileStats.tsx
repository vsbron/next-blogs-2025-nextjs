import ProfileDetailsLine from "@/components/Profile/ProfileDetailsLine";
import { Card } from "@/components/ui/card";

import { fetchUserStats } from "@/utils/actions/users";
import { countDays, formatDate } from "@/utils/helpers";
import {
  MdArticle,
  MdRemoveRedEye,
  MdMessage,
  MdThumbUp,
  MdCalendarMonth,
} from "react-icons/md";

// Props type
type ProfileStatsProps = {
  userId: string;
  dateCreated: Date;
};

async function ProfileStats({ userId, dateCreated }: ProfileStatsProps) {
  // Fetch user's posts
  const data = await fetchUserStats(userId);

  // Guard clause
  if (!data) return <p>Could not fetch user stats. Please try again later</p>;

  // Destructure fetched data
  const { totalPosts, totalViews, totalLikes, totalComments } = data;
  const dateJoined = formatDate(dateCreated);

  // Returned JSX
  return (
    <div className="flex flex-col gap-y-1">
      <Card className="contents">
        <h5 className="text-xl font-medium">Stats:</h5>
        <ProfileDetailsLine
          icon={<MdCalendarMonth />}
          label="Date joined"
          className="!mb-3"
          wide={true}
        >
          {dateJoined}{" "}
          <span className="text-sm hidden xs:inline-block">
            ({countDays(dateJoined)} days ago)
          </span>
        </ProfileDetailsLine>

        {/* Basic stats */}
        <ProfileDetailsLine
          icon={<MdArticle className="w-5 h-5" />}
          label="Total posts"
          wide={true}
        >
          {totalPosts}
        </ProfileDetailsLine>
        <ProfileDetailsLine
          icon={<MdMessage className="w-5 h-5" />}
          label="Total comments"
          wide={true}
        >
          {totalComments}
        </ProfileDetailsLine>
        <ProfileDetailsLine
          icon={<MdThumbUp className="w-5 h-5" />}
          label="Total likes"
          wide={true}
        >
          {totalLikes}
        </ProfileDetailsLine>
        <ProfileDetailsLine
          icon={<MdRemoveRedEye className="w-5 h-5" />}
          label="Total views"
          wide={true}
        >
          {totalViews}
        </ProfileDetailsLine>
      </Card>
    </div>
  );
}

export default ProfileStats;
