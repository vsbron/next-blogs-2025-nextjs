import { Metadata } from "next";

import SectionTitle from "@/components/SectionTitle";

// Meta data
export const metadata: Metadata = {
  title: "All Posts",
  description:
    "Discover every post on NextBlogs - explore all stories, insights, and ideas from our community of writers.",
};

function AllPostsPage() {
  // Returned JSX
  return (
    <section>
      <SectionTitle>All Posts</SectionTitle>
    </section>
  );
}

export default AllPostsPage;
