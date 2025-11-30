import { Metadata } from "next";
import AllPostsPageContent from "@/components/PostLists/AllPostsPageContent";

// Meta data
export const metadata: Metadata = {
  title: "All Posts",
  description:
    "Discover every post on NextBlogs - explore all stories, insights, and ideas from our community of writers.",
};

function AllPostsPage() {
  // Returned JSX
  return <AllPostsPageContent />;
}

export default AllPostsPage;
