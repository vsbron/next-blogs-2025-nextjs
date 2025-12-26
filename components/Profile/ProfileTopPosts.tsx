import PostsGridLayout from "@/components/PostPreview/PostsGridLayout";
import PostPreviewTile from "@/components/PostPreview/PostPreviewTile";
import { fetchUserTopsPosts } from "@/utils/actions/users";

async function ProfileTopPosts({ userId }: { userId: string }) {
  // Fetch user's posts
  const data = await fetchUserTopsPosts(userId);

  // Guard clause
  if (!data || !data.topPosts?.length) {
    return <p>No top posts yet.</p>;
  }

  // Destructure data
  const { topPosts } = data;

  // Returned JSX
  return (
    <>
      <h2 className="text-2xl mt-6 mb-2">Most popular posts</h2>
      <PostsGridLayout>
        {topPosts.map((post, i) =>
          post ? (
            <div key={i} className="flex flex-col gap-1">
              <h4 className="text-lg">
                {i === 0
                  ? "Most liked post"
                  : i === 1
                  ? "Most viewed post"
                  : "Most commented post"}
              </h4>
              <PostPreviewTile post={post} />
            </div>
          ) : null
        )}
      </PostsGridLayout>
    </>
  );
}

export default ProfileTopPosts;
