import { Metadata } from "next";
import { Suspense } from "react";

import { ArticlePreviewTileSkeleton } from "@/components/ArticlePreviewTile";
import PreviewTilesGrid from "@/components/PreviewTilesGrid";
import SectionTitle from "@/components/SectionTitle";
import MyPosts from "@/components/dashboard/MyPosts";

// Metadata
export const metadata: Metadata = {
  title: "My Posts",
  description:
    "View, edit, and manage all the posts you've created on NextBlogs.",
};

// The page
async function ProfilePostsPage() {
  // Returned JSX
  return (
    <section>
      <SectionTitle>List of my posts</SectionTitle>
      <Suspense fallback={<SkeletonTemp />}>
        <MyPosts />
      </Suspense>
    </section>
  );
}

export default ProfilePostsPage;

// Skeleton layout
function SkeletonTemp() {
  // Returned JSX
  return (
    <PreviewTilesGrid>
      <ArticlePreviewTileSkeleton />
      <ArticlePreviewTileSkeleton />
      <ArticlePreviewTileSkeleton />
    </PreviewTilesGrid>
  );
}
