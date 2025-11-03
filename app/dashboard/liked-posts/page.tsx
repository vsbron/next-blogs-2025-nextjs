import { Metadata } from "next";

import SectionTitle from "@/components/SectionTitle";
import { Suspense } from "react";
import SkeletonPostsGrid from "@/components/skeletons/SkeletonPostsGrid";
import LikePosts from "@/components/dashboard/LikedPosts";

// Metadata
export const metadata: Metadata = {
  title: "Liked posts",
  description:
    "Discover and keep track of your favorite articles from the NextBlogs community.",
};

// The page
function LikedPostsPage() {
  // Returned JSX
  return (
    <section>
      <SectionTitle>Posts you liked</SectionTitle>
      <Suspense fallback={<SkeletonPostsGrid />}>
        <LikePosts />
      </Suspense>
    </section>
  );
}

export default LikedPostsPage;
