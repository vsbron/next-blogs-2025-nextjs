"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

import ArticleLayout from "@/components/ArticleLayout";
import ListTopBar from "@/components/ListTopBar";
import PaginationLine from "@/components/PostLists/PaginationLine";
import PostsFilters from "@/components/PostLists/PostsFilters";
import PostPreviewTile from "@/components/PostPreview/PostPreviewTile";
import PostsGridLayout from "@/components/PostPreview/PostsGridLayout";
import SkeletonPostsGrid from "@/components/skeletons/SkeletonPostsGrid";

import useAuthorPosts from "@/hooks/useAuthorPosts";
import { ARTICLES_PER_PAGE } from "@/utils/constants";
import { User } from "@/utils/types";
import { useListParams } from "@/hooks/useFilterListParams";

function AuthorPosts({ user }: { user: User }) {
  // Create state value for showing filters
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const toggleFilters = () => setShowFilters((sF) => !sF);

  // Getting the search params from URL and use it to get filters and page
  const searchParams = useSearchParams();
  const { filters, page } = useListParams(searchParams);

  // Fetch the user's posts
  const { data, isLoading, error } = useAuthorPosts(
    user.clerkId,
    filters,
    page
  );

  // Guard clauses (temp)
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
        <PostsFilters
          searchParams={searchParams}
          closeFn={toggleFilters}
          url={`/authors/${user.username}`}
        />
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

export default AuthorPosts;
