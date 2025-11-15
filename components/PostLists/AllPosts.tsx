"use client";
import ArticleLayout from "@/components/ArticleLayout";
import PostPreviewTile from "@/components/PostPreview/PostPreviewTile";
import PostsGridLayout from "@/components/PostPreview/PostsGridLayout";
import SkeletonPostsGrid from "@/components/skeletons/SkeletonPostsGrid";

import useAllPosts from "@/hooks/useAllPosts";
import { Card, CardContent, CardHeader } from "../ui/card";
import { useState } from "react";
import { Button } from "../ui/button";
import { ButtonsContainer } from "../form/Buttons";

function AllPosts() {
  // Get the posts from database
  const { data: posts, isLoading, error } = useAllPosts();

  // Create state value for showing filters
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const toggleFilters = () => setShowFilters((sF) => !sF);

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
    <>
      {showFilters && (
        <Card>
          <CardHeader>
            <h2 className="text-xl">Filters</h2>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      )}
      <ButtonsContainer className="mt-2 mb-4">
        <Button
          variant="outline"
          size="xs"
          className="ml-auto"
          onClick={toggleFilters}
        >
          {showFilters ? "Hide" : "Show"} filters
        </Button>
      </ButtonsContainer>

      <PostsGridLayout>
        {posts!.map((post) => {
          return <PostPreviewTile key={post.id} post={post} />;
        })}
      </PostsGridLayout>
    </>
  );
}

export default AllPosts;
