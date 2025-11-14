import ProfileDetailsLine from "@/components/Profile/ProfileDetailsLine";
import PostPreviewTileMini from "@/components/PostPreview/PostPreviewTileMini";
import { fetchUserStats } from "@/utils/actions/users";

import { MdArticle, MdRemoveRedEye } from "react-icons/md";

async function UserProfileStats({ userId }: { userId: string }) {
  // Fetch user's posts
  const data = await fetchUserStats(userId);

  // Guard clause
  if (!data) return <p>There was some error. Please try again later</p>;

  // Destructure fetched data
  const { totalPosts, totalViews, mostPopularPost } = data;

  // Returned JSX
  return (
    <div className="flex flex-col gap-y-1">
      <h5 className="text-xl font-medium">Stats:</h5>
      {/* Basic stats */}
      <ProfileDetailsLine
        icon={<MdArticle className="w-5 h-5" />}
        label="Total posts"
      >
        {totalPosts}
      </ProfileDetailsLine>
      <ProfileDetailsLine
        icon={<MdRemoveRedEye className="w-5 h-5" />}
        label="Total views"
      >
        {totalViews}
      </ProfileDetailsLine>

      {/* Popular post */}
      {mostPopularPost && (
        <>
          <h2 className="text-2xl mt-6 mb-2">Most popular post</h2>
          <PostPreviewTileMini post={mostPopularPost} />
        </>
      )}
    </div>
  );
}

export default UserProfileStats;
