import PostPreviewTile from "@/components/PostPreviewTile";
import PostsGridLayout from "@/components/PostsGridLayout";

import { fetchRecentPosts } from "@/utils/actions/posts";

async function MyPosts() {
  // Fetch user's post
  const posts = await fetchRecentPosts();

  // Returned JSX
  return (
    <PostsGridLayout>
      {posts.map((post) => {
        return <PostPreviewTile key={post.id} post={post} />;
      })}
    </PostsGridLayout>
  );
}

export default MyPosts;
