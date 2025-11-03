import { fetchUserStats } from "@/utils/actions/posts";
import { ProfileDetailLine } from "../ProfileDetails";

import { MdArticle, MdRemoveRedEye } from "react-icons/md";
import PostPreviewTile from "../PostPreviewTile";
import PostsGridLayout from "../PostsGridLayout";

async function MyProfileStats() {
  // Fetch user's posts
  const data = await fetchUserStats();

  // Guard clause
  if (!data) return <p>There was some error. Please try again later</p>;

  // Destructure fetched data
  const { totalPosts, totalViews, mostViewedPosts } = data;

  // Returned JSX
  return (
    <>
      {/* Basic stats */}
      <ProfileDetailLine icon={<MdArticle />} label="Total posts">
        {totalPosts}
      </ProfileDetailLine>
      <ProfileDetailLine icon={<MdRemoveRedEye />} label="Total views">
        {totalViews}
      </ProfileDetailLine>
      {/* Top posts */}
      <h2 className="font-poppins text-2xl mt-6 mb-2">Most viewed posts</h2>
      <PostsGridLayout>
        {mostViewedPosts.map((post) => (
          <PostPreviewTile key={post.id} post={post} />
        ))}
      </PostsGridLayout>
    </>
  );
}

export default MyProfileStats;
