import PostPreviewTile from "@/components/PostPreview/PostPreviewTile";
import PostsGridLayout from "@/components/PostPreview/PostsGridLayout";
import ProfileDetailsLine from "@/components/Profile/ProfileDetailsLine";

import { fetchUserStats } from "@/utils/actions/posts";
import { MdArticle, MdRemoveRedEye } from "react-icons/md";

async function MyProfileStats() {
  // Fetch user's posts
  const data = await fetchUserStats();

  // Guard clause
  if (!data) return <p>There was some error. Please try again later</p>;

  // Destructure fetched data
  const { totalPosts, totalViews, mostViewedPosts } = data;

  // Returned JSX
  return (
    <div className="flex flex-col gap-y-1">
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
      {/* Top posts */}
      <h2 className="text-2xl mt-6 mb-2">Most viewed posts</h2>
      <PostsGridLayout>
        {mostViewedPosts.map((post) => (
          <PostPreviewTile key={post.id} post={post} />
        ))}
      </PostsGridLayout>
    </div>
  );
}

export default MyProfileStats;
