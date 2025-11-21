"use client";
import { useSearchParams } from "next/navigation";

import ArticleLayout from "@/components/ArticleLayout";
import PaginationLine from "@/components/PostLists/PaginationLine";
import PostsGridLayout from "@/components/PostPreview/PostsGridLayout";
import SkeletonPostsGrid from "@/components/skeletons/SkeletonPostsGrid";
import { USERS_PER_PAGE } from "@/utils/constants";
import useAllAuthors from "@/hooks/useAllAuthors";

function AllAuthors() {
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
  const { data, isLoading, error } = useAllAuthors(page);

  // Guard clauses
  if (isLoading) return <SkeletonPostsGrid />;
  if (!data || error)
    return (
      <ArticleLayout>
        <h3 className="mb-2">Something went wrong</h3>
        <p>We could not get the authors due to error.</p>
        <p>{error?.message}</p>
      </ArticleLayout>
    );

  // Destructure the posts data and calculate range
  const { users, total } = data;
  const rangeStart = (page - 1) * USERS_PER_PAGE + 1;
  const rangeEnd = Math.min(rangeStart + USERS_PER_PAGE - 1, total);
  const range = `${rangeStart}-${rangeEnd}`;

  // Returned JSX
  return (
    <>
      {/* Top UI */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-foreground/50 text-sm md:text-md">
          {users.length > 0
            ? `Showing ${range} authors out of ${total}`
            : "Showing 0 authors"}
        </span>
      </div>

      {/* User list */}
      {users.length > 0 ? (
        <PostsGridLayout>
          {users!.map((user) => {
            return <div key={user.username}>{user.username}</div>;
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
      {users.length > 0 && (
        <PaginationLine
          pageCount={Math.ceil(total / USERS_PER_PAGE)}
          page={page}
        />
      )}
    </>
  );
}

export default AllAuthors;
