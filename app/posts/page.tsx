import { Metadata } from "next";
import { Suspense } from "react";

import AllPostsPageContent from "@/components/PostLists/AllPostsPageContent";
import SkeletonPostsGrid from "@/components/skeletons/SkeletonPostsGrid";
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
    <Suspense
      fallback={
        <>
          <SectionTitle>All Posts</SectionTitle>
          <SkeletonPostsGrid />
        </>
      }
    >
      <AllPostsPageContent />
    </Suspense>
  );
}

export default AllPostsPage;
