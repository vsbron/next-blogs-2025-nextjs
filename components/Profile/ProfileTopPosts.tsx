import PostsGridLayout from "@/components/PostPreview/PostsGridLayout";
import PostPreviewTile from "@/components/PostPreview/PostPreviewTile";
import { fetchUserTopsPosts } from "@/utils/actions/users";

async function ProfileTopPosts({ userId }: { userId: string }) {
  // Fetch user's posts
  const data = await fetchUserTopsPosts(userId);

  // Guard clause
  if (!data) return <p>There was some error. Please try again later</p>;

  // Destructure fetched data
  const { mostCommentedPost, mostViewedPost, mostLikedPost } = data;

  // Returned JSX
  return (
    <>
      {/* Popular post */}
      <h2 className="text-2xl mt-6 mb-2">Most popular posts</h2>
      <PostsGridLayout>
        {mostCommentedPost && (
          <div className="flex flex-col gap-1">
            <h4 className="text-lg">Most commented post</h4>
            <PostPreviewTile post={mostCommentedPost} />
          </div>
        )}
        {mostViewedPost && (
          <div className="flex flex-col gap-1">
            <h4 className="text-lg">Most viewed post</h4>
            <PostPreviewTile post={mostViewedPost} />
          </div>
        )}
        {mostLikedPost && (
          <div className="flex flex-col gap-1">
            <h4 className="text-lg">Most liked post</h4>
            <PostPreviewTile post={mostLikedPost} />
          </div>
        )}
      </PostsGridLayout>
    </>
  );
}

export default ProfileTopPosts;
