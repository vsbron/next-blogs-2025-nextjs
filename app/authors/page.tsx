import { Metadata } from "next";

import SectionTitle from "@/components/SectionTitle";

// Meta data
export const metadata: Metadata = {
  title: "All Authors",
  description:
    "Discover every author on NextBlogs - explore all stories, insights, and ideas from our community of writers.",
};

function AllAuthorsPage() {
  // Returned JSX
  return (
    <section>
      <SectionTitle>All Authors</SectionTitle>
    </section>
  );
}

export default AllAuthorsPage;
