"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

import ArticleLayout from "@/components/ArticleLayout";
import { ButtonsContainer } from "@/components/form/Buttons";
import Filters from "@/components/PostLists/Filters";
import PaginationLine from "@/components/PostLists/PaginationLine";
import PostPreviewTile from "@/components/PostPreview/PostPreviewTile";
import PostsGridLayout from "@/components/PostPreview/PostsGridLayout";
import SkeletonPostsGrid from "@/components/skeletons/SkeletonPostsGrid";
import { Button } from "@/components/ui/button";

import useAllPosts from "@/hooks/useAllPosts";
import { ARTICLES_PER_PAGE } from "@/utils/constants";
import { Filter, FilterX } from "lucide-react";

function AllPosts() {
  // Create state value for showing filters
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const toggleFilters = () => setShowFilters((sF) => !sF);

  // Getting the state from URL
  const searchParams = useSearchParams();

  // Convert all params into an object
  const filters: Record<string, string> = {};
  searchParams.forEach((value, key) => {
    filters[key] = value;
  });

  // Getting the current page number
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // Get the posts from database
  const { data, isLoading, error } = useAllPosts(filters, page);

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
      {/* Top UI */}
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

      {/* Filters */}
      {showFilters && <Filters searchParams={searchParams} />}

      {/* Post list */}
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
