"use client";
import ArticleLayout from "@/components/ArticleLayout";
import PostPreviewTile from "@/components/PostPreview/PostPreviewTile";
import PostsGridLayout from "@/components/PostPreview/PostsGridLayout";
import SkeletonPostsGrid from "@/components/skeletons/SkeletonPostsGrid";

import useAllPosts from "@/hooks/useAllPosts";

function AllPosts() {
  // Get the posts from database
  const { data: posts, isLoading, error } = useAllPosts();

  // Show skeleton while data is being loaded
  if (isLoading) return <SkeletonPostsGrid />;

  // Guard clause - error
  if (error)
    return (
      <ArticleLayout>
        <h3 className="mb-2">Something went wrong</h3>
        <p>{error.message}</p>
      </ArticleLayout>
    );

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
