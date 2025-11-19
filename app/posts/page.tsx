import { Metadata } from "next";

import SectionTitle from "@/components/SectionTitle";
import AllPosts from "@/components/PostLists/AllPosts";
import { Suspense } from "react";
import SkeletonPostsGrid from "@/components/skeletons/SkeletonPostsGrid";

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
      <Suspense fallback={<SkeletonPostsGrid />}>
        <AllPosts />
      </Suspense>
    </section>
  );
}

export default AllPostsPage;
