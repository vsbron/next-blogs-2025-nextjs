import { Metadata } from "next";

import SectionTitle from "@/components/SectionTitle";
import MyPosts from "@/components/dashboard/MyPosts";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import PreviewTilesGrid from "@/components/PreviewTilesGrid";
import { ArticlePreviewTileSkeleton } from "@/components/ArticlePreviewTile";

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

function SkeletonTemp() {
  return (
    <PreviewTilesGrid>
      <ArticlePreviewTileSkeleton />
      <ArticlePreviewTileSkeleton />
      <ArticlePreviewTileSkeleton />
    </PreviewTilesGrid>
  );
}
