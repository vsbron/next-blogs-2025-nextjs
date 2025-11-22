"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

import ArticleLayout from "@/components/ArticleLayout";
import PostsFilters from "@/components/PostLists/PostsFilters";
import PaginationLine from "@/components/PostLists/PaginationLine";
import PostPreviewTile from "@/components/PostPreview/PostPreviewTile";
import PostsGridLayout from "@/components/PostPreview/PostsGridLayout";
import SkeletonPostsGrid from "@/components/skeletons/SkeletonPostsGrid";

import useAllPosts from "@/hooks/useAllPosts";
import { ARTICLES_PER_PAGE } from "@/utils/constants";
import FiltersTrigger from "../FiltersTrigger";

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

  // Destructure the posts data and calculate range
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
          {posts.length > 0
            ? `Showing ${range} posts out of ${total}`
            : "Showing 0 posts"}
        </span>
        <FiltersTrigger closeFn={toggleFilters} isOpen={showFilters} />
      </div>

      {/* Filters */}
      {showFilters && (
        <PostsFilters searchParams={searchParams} closeFn={toggleFilters} />
      )}

      {/* Post list */}
      {posts.length > 0 ? (
        <PostsGridLayout>
          {posts!.map((post) => {
            return <PostPreviewTile key={post.id} post={post} />;
          })}
        </PostsGridLayout>
      ) : (
        <p>
          No posts match your current filters. <br />
          Try adjusting the category, or removing &quot;Popular posts&quot;
          filters to see more posts.
        </p>
      )}

      {/* Pagination */}
      {posts.length > 0 && (
        <PaginationLine
          pageCount={Math.ceil(total / ARTICLES_PER_PAGE)}
          page={page}
        />
      )}
    </>
  );
}

export default AllPosts;
