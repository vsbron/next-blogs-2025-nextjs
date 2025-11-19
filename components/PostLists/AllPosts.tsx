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
import { Filter, FilterX } from "lucide-react";
import { useSearchParams } from "next/navigation";

function AllPosts() {
  // Create state value for showing filters
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const toggleFilters = () => setShowFilters((sF) => !sF);

  // Getting the state from URL
  const searchParams = useSearchParams();

  // Getting the current page number
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // Get the posts from database
  const { data, isLoading, error } = useAllPosts(page);

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
      <div className="flex justify-between items-center mb-2">
        <span className="text-foreground/50 text-sm md:text-md">
          Showing {range} posts out of {total}
        </span>
        <ButtonsContainer className="m-0">
          <Button
            variant="outline"
            size="xs"
            className="ml-auto"
            onClick={toggleFilters}
          >
            {showFilters ? <FilterX /> : <Filter />}
          </Button>
        </ButtonsContainer>
      </div>

      {showFilters && (
        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-xl">Filters</h2>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      )}

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
