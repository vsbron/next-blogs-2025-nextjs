"use client";
import { useState } from "react";

import PostPreviewLine from "@/components/PostPreview/PostPreviewLine";
import PostPreviewTile from "@/components/PostPreview/PostPreviewTile";
import PostsGridLayout from "@/components/PostPreview/PostsGridLayout";
import PostsListLayout from "@/components/PostPreview/PostsListLayout";

import useAllPosts from "@/hooks/useAllPosts";

function AllPosts() {
  // Set state value for the view
  const [gridView, setGridView] = useState<boolean>(true);

  // Get the posts from database
  const { data: posts, isLoading, error } = useAllPosts();

  // Show skeleton while data is being loaded
  if (isLoading) return <p>Loading</p>;

  // Returned JSX
  return gridView ? (
    <PostsGridLayout>
      {posts!.map((post) => {
        return <PostPreviewTile key={post.id} post={post} />;
      })}
    </PostsGridLayout>
  ) : (
    <PostsListLayout>
      {posts!.map((post) => {
        return <PostPreviewLine key={post.id} post={post} />;
      })}
    </PostsListLayout>
  );
}

export default AllPosts;
