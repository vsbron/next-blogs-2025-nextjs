"use client";
import PostPreviewTile from "@/components/PostPreview/PostPreviewTile";
import PostsGridLayout from "@/components/PostPreview/PostsGridLayout";

import useAllPosts from "@/hooks/useAllPosts";

function AllPosts() {
  // Get the posts from database
  const { data: posts, isLoading, error } = useAllPosts();

  // Show skeleton while data is being loaded
  if (isLoading) return <p>Loading</p>;

  // Returned JSX
  return (
    <PostsGridLayout>
      {posts!.map((post) => {
        return <PostPreviewTile key={post.id} post={post} />;
      })}
    </PostsGridLayout>
  );
}

export default AllPosts;
