import ProfileDetailsLine from "@/components/Profile/ProfileDetailsLine";
import PostPreviewTileMini from "@/components/PostPreview/PostPreviewTileMini";
import { fetchUserStats } from "@/utils/actions/users";

import { MdArticle, MdRemoveRedEye, MdMessage } from "react-icons/md";
import { Card } from "../ui/card";

async function ProfileStats({ userId }: { userId: string }) {
  // Fetch user's posts
  const data = await fetchUserStats(userId);

  // Guard clause
  if (!data) return <p>There was some error. Please try again later</p>;

  // Destructure fetched data
  const { totalPosts, totalViews, totalComments, mostPopularPost } = data;

  // Returned JSX
  return (
    <div className="flex flex-col gap-y-1">
      <Card className="contents">
        <h5 className="text-xl font-medium">Stats:</h5>
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
          icon={<MdRemoveRedEye className="w-5 h-5" />}
          label="Total views"
          wide={true}
        >
          {totalViews}
        </ProfileDetailsLine>
      </Card>
      {/* Popular post */}
      <h2 className="text-2xl mt-6 mb-2">Most popular post</h2>
      {mostPopularPost ? (
        <PostPreviewTileMini post={mostPopularPost} />
      ) : (
        <p>This author does not have popular post yet</p>
      )}
    </div>
  );
}

export default ProfileStats;
