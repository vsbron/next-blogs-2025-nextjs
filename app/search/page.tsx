import { Metadata } from "next";
import { Suspense } from "react";

import SectionTitle from "@/components/SectionTitle";
import SearchResults from "@/components/Search/SearchResults";
import SkeletonPostsGrid from "@/components/skeletons/SkeletonPostsGrid";

// Interface for the User ID
interface SearchPageProps {
  searchParams: Promise<{ query: string }>;
}

// Generate metadata function
export async function generateMetadata({
  searchParams,
}: SearchPageProps): Promise<Metadata> {
  // Get the query from search params
  const { query } = await searchParams;

  // Returned Metadata
  return {
    title: `${query ? query + " - " : ""} Search Results`,
    description:
      "Browse posts matching your search query on NextBlogs. Find articles, authors, and trending content quickly with powerful filters and a clean reading experience.",
  };
}

async function SearchPage({ searchParams }: SearchPageProps) {
  // Get the query from search params
  const { query } = await searchParams;

  if (!query)
    return (
      <section>
        <SectionTitle>Search Results</SectionTitle>
        <p>
          No search query was provided.
          <br />
          Please try to search again
        </p>
      </section>
    );

  // Returned JSX
  return (
    <section>
      <SectionTitle>{query ? query + " - " : ""} Search Results</SectionTitle>
      <Suspense fallback={<SkeletonPostsGrid />}>
        <SearchResults />
      </Suspense>
    </section>
  );
}

export default SearchPage;
