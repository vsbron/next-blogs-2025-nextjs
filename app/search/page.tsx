import { Metadata } from "next";
import { Suspense } from "react";

import SectionTitle from "@/components/SectionTitle";
import SearchResults from "@/components/Search/SearchResults";
import SkeletonSearch from "@/components/skeletons/SkeletonSearch";

// Interface for the User ID
interface SearchPageProps {
  searchParams: { query: string };
}

// Generate metadata function
export function generateMetadata({ searchParams }: SearchPageProps): Metadata {
  // Get the query from search params
  const query = searchParams.query ?? "";

  // Returned Metadata
  return {
    title: `${query ? query + " - " : ""} Search Results`,
    description:
      "Browse posts matching your search query on NextBlogs. Find articles, authors, and trending content quickly with powerful filters and a clean reading experience.",
  };
}

function SearchPage({ searchParams }: SearchPageProps) {
  // Get the query from search params
  const query = searchParams.query ?? "";

  // Returned JSX
  return (
    <section>
      <SectionTitle>{query ? query + " - " : ""} Search Results</SectionTitle>
      <Suspense fallback={<SkeletonSearch />}>
        <SearchResults />
      </Suspense>
    </section>
  );
}

export default SearchPage;
