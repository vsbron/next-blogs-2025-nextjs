"use client";
import { useSearchParams } from "next/navigation";

import ArticleLayout from "@/components/ArticleLayout";
import PaginationLine from "@/components/PostLists/PaginationLine";
import SkeletonPostsGrid from "@/components/skeletons/SkeletonPostsGrid";

import useAllAuthors from "@/hooks/useAllAuthors";
import { USERS_PER_PAGE } from "@/utils/constants";
import AuthorsGridLayout from "../AuthorPreview/AuthorsGridLayout";
import AuthorPreviewTile from "../AuthorPreview/AuthorPreviewTile";

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

  console.log(users);

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
        <AuthorsGridLayout>
          {users!.map((author) => {
            return <AuthorPreviewTile key={author.username} author={author} />;
          })}
        </AuthorsGridLayout>
      ) : (
        <>
          <p>
            We could not find any users...
            <br />
            Which is weird, because we are sure we have some.
          </p>
          <p>Please try again later!</p>
        </>
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
