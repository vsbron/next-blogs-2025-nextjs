"use client";
import { useState } from "react";

import ArticleLayout from "@/components/ArticleLayout";
import { ButtonsContainer } from "@/components/form/Buttons";
import PaginationLine from "@/components/PostLists/PaginationLine";
import PostPreviewTile from "@/components/PostPreview/PostPreviewTile";
import PostsGridLayout from "@/components/PostPreview/PostsGridLayout";
import SkeletonPostsGrid from "@/components/skeletons/SkeletonPostsGrid";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import useAllPosts from "@/hooks/useAllPosts";
import { ARTICLES_PER_PAGE } from "@/utils/constants";

function AllPosts() {
  // Create state value for showing filters
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const toggleFilters = () => setShowFilters((sF) => !sF);

  // Get the posts from database
  const { data, isLoading, error, page } = useAllPosts();

  // Guard clauses
  if (isLoading) return <SkeletonPostsGrid />;
  if (!data || error)
    return (
      <ArticleLayout>
        <h3 className="mb-2">Something went wrong</h3>
        <p>We could not get the posts due to error.</p>
        <p>{error?.message}</p>
      </ArticleLayout>
    );

  // Destructure the posts data and count showing posts
  const { posts, total } = data;
  const rangeStart = (page - 1) * ARTICLES_PER_PAGE + 1;
  const rangeEnd = Math.min(rangeStart + ARTICLES_PER_PAGE - 1, total);
  const range = `${rangeStart}-${rangeEnd}`;

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
      <div className="flex justify-between items-center">
        <div>
          Showing {range} posts out of {total}
        </div>
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
      </div>

      <PostsGridLayout>
        {posts!.map((post) => {
          return <PostPreviewTile key={post.id} post={post} />;
        })}
      </PostsGridLayout>

      {/* Pagination */}
      <PaginationLine total={total} page={page} />
    </>
  );
}

export default AllPosts;
