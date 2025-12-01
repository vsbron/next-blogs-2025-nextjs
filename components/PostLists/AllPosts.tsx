import { useState } from "react";
import { ReadonlyURLSearchParams } from "next/navigation";

import ArticleLayout from "@/components/ArticleLayout";
import ListTopBar from "@/components/ListTopBar";
import PostsFilters from "@/components/PostLists/PostsFilters";
import PaginationLine from "@/components/PostLists/PaginationLine";
import PostPreviewTile from "@/components/PostPreview/PostPreviewTile";
import PostsGridLayout from "@/components/PostPreview/PostsGridLayout";
import SkeletonPostsGrid from "@/components/skeletons/SkeletonPostsGrid";

import useAllPosts from "@/hooks/useAllPosts";
import { ARTICLES_PER_PAGE } from "@/utils/constants";
import { useListParams } from "@/hooks/useFilterListParams";

function AllPosts({ searchParams }: { searchParams: ReadonlyURLSearchParams }) {
  // Create state value for showing filters
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const toggleFilters = () => setShowFilters((sF) => !sF);

  // Get the filters and current page
  const { filters, page } = useListParams(searchParams);

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

  // Destructure the posts data
  const { posts, total } = data;

  // Returned JSX
  return (
    <>
      {/* Top UI */}
      <ListTopBar
        units="posts"
        countData={{ count: posts.length, total, page }}
        showFilters={showFilters}
        toggleFilters={toggleFilters}
      />

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
