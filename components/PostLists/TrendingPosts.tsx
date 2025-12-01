"use client";
import { useSearchParams } from "next/navigation";

import ArticleLayout from "@/components/ArticleLayout";
import PaginationLine from "@/components/PostLists/PaginationLine";
import PostPreviewTile from "@/components/PostPreview/PostPreviewTile";
import PostsGridLayout from "@/components/PostPreview/PostsGridLayout";
import SkeletonPostsGrid from "@/components/skeletons/SkeletonPostsGrid";

import useTrendingPosts from "@/hooks/useTrendingPosts";
import { ARTICLES_PER_PAGE } from "@/utils/constants";

function TrendingPosts() {
  // Getting the search params from URL and use it to get the page
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") || 1);

  // Fetch the trending posts
  const { data, isLoading, error } = useTrendingPosts(page);

  // Guard clauses
  if (isLoading) return <SkeletonPostsGrid />;
  if (!data || error)
    return (
      <ArticleLayout>
        <h3 className="mb-2">Something went wrong</h3>
        <p>We could not get the trending posts due to error.</p>
        <p>{error?.message}</p>
      </ArticleLayout>
    );

  // Destructure the posts data
  const { posts, total } = data;

  // Returned JSX
  return (
    <>
      {/* Post list */}
      {posts.length > 0 ? (
        <PostsGridLayout>
          {posts!.map((post) => {
            return <PostPreviewTile key={post.id} post={post} />;
          })}
        </PostsGridLayout>
      ) : (
        <p>
          There are currently no trending posts.
          <br />
          Please try again later
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

export default TrendingPosts;
