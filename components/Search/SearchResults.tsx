"use client";
import { useSearchParams } from "next/navigation";

import ArticleLayout from "@/components/ArticleLayout";
import PaginationLine from "@/components/PostLists/PaginationLine";
import PostsGridLayout from "@/components/PostPreview/PostsGridLayout";
import PostPreviewTile from "@/components/PostPreview/PostPreviewTile";
import SearchForm from "@/components/Search/SearchForm";
import SkeletonPostsGrid from "@/components/skeletons/SkeletonPostsGrid";

import { useListParams } from "@/hooks/useFilterListParams";
import useSearchPosts from "@/hooks/useSearchPosts";
import { ARTICLES_PER_PAGE } from "@/utils/constants";

function SearchResults() {
  // Get the search params
  const searchParams = useSearchParams();

  // Get the query, filters and current page
  const query = searchParams.get("query") ?? "";
  const { filters, page } = useListParams(searchParams);

  // Get the searched posts from database (null query is handle)
  const { data, isLoading, error } = useSearchPosts(query, filters, page);

  // Guard clauses
  if (isLoading) return <SkeletonPostsGrid />;
  if (!data || error)
    return (
      <ArticleLayout>
        <h3 className="mb-2">Something went wrong</h3>
        <p>We could not get the searched posts due to error.</p>
        <p>{error?.message}</p>
      </ArticleLayout>
    );

  // Destructure the posts data
  const { posts, total } = data;

  // Calculate range and set up the label
  const rangeStart = (page - 1) * ARTICLES_PER_PAGE + 1;
  const rangeEnd = Math.min(rangeStart + ARTICLES_PER_PAGE - 1, total);
  const range = `${rangeStart}-${rangeEnd}`;
  const label = posts.length > 0 ? `${range} of ${total}` : "0";

  // Returned JSX
  return (
    <>
      {/* Top UI */}
      <SearchForm searchParams={searchParams} query={query} />

      {/* Post list */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-foreground/50 text-sm md:text-md">
          Showing {label} results
        </span>
      </div>
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

export default SearchResults;
