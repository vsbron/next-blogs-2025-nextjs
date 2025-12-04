import SectionTitle from "@/components/SectionTitle";
import { Metadata } from "next";

// Meta data
export const metadata: Metadata = {
  title: "Search Results",
  description:
    "Browse posts matching your search query on NextBlogs. Find articles, authors, and trending content quickly with powerful filters and a clean reading experience.",
};

function SearchPage() {
  // Returned JSX
  return (
    <section>
      <SectionTitle>Search Results</SectionTitle>
      <h2>Search term</h2>
    </section>
  );
}

export default SearchPage;
