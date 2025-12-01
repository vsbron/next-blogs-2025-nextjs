import { Metadata } from "next";

import SectionTitle from "@/components/SectionTitle";
import TrendingPosts from "@/components/PostLists/TrendingPosts";
import { Suspense } from "react";
import SkeletonPostsList from "@/components/skeletons/SkeletonPostsList";

// Meta data
export const metadata: Metadata = {
  title: "Trending Posts",
  description:
    "Explore the hottest posts on NextBlogs - trending stories and popular reads shared by our community.",
};

function HotPostsPage() {
  // Returned JSX
  return (
    <section>
      <SectionTitle>Trending Posts</SectionTitle>
      <Suspense fallback={<SkeletonPostsList />}>
        <TrendingPosts />
      </Suspense>
    </section>
  );
}

export default HotPostsPage;
