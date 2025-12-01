"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

import ArticleLayout from "@/components/ArticleLayout";
import ListTopBar from "@/components/ListTopBar";
import AuthorsFilters from "@/components/AuthorList/AuthorsFilters";
import AuthorsGridLayout from "@/components/AuthorPreview/AuthorsGridLayout";
import AuthorPreviewTile from "@/components/AuthorPreview/AuthorPreviewTile";
import PaginationLine from "@/components/PostLists/PaginationLine";
import SkeletonAuthorList from "@/components/skeletons/SkeletonAuthorList";

import useAllAuthors from "@/hooks/useAllAuthors";
import { USERS_PER_PAGE } from "@/utils/constants";
import { useListParams } from "@/hooks/useFilterListParams";

function AllAuthors() {
  // Create state value for showing filters
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const toggleFilters = () => setShowFilters((sF) => !sF);

  // Getting the search params from URL and use it to get filters and page
  const searchParams = useSearchParams();
  const { filters, page } = useListParams(searchParams);

  // Get the posts from database
  const { data, isLoading, error } = useAllAuthors(filters, page);

  // Guard clauses
  if (isLoading) return <SkeletonAuthorList />;
  if (!data || error)
    return (
      <ArticleLayout>
        <h3 className="mb-2">Something went wrong</h3>
        <p>We could not get the authors due to error.</p>
        <p>{error?.message}</p>
      </ArticleLayout>
    );

  // Destructure the posts data
  const { users, total } = data;

  // Returned JSX
  return (
    <>
      {/* Top UI */}
      <ListTopBar
        units="authors"
        countData={{ count: users.length, total, page }}
        showFilters={showFilters}
        toggleFilters={toggleFilters}
      />

      {/* Filters */}
      {showFilters && (
        <AuthorsFilters searchParams={searchParams} closeFn={toggleFilters} />
      )}

      {/* User list */}
      {users.length > 0 ? (
        <AuthorsGridLayout>
          {users!.map((author) => {
            return <AuthorPreviewTile key={author.username} author={author} />;
          })}
        </AuthorsGridLayout>
      ) : (
        <p>
          No authors match your current filters. <br />
          Try adjusting the country, gender filters to see more authors.
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
