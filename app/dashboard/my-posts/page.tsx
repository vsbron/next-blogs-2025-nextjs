import { Metadata } from "next";
import { Suspense } from "react";

import SectionTitle from "@/components/SectionTitle";
import MyPosts from "@/components/dashboard/MyPosts";
import SkeletonPostsList from "@/components/skeletons/SkeletonPostsList";

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
      <Suspense fallback={<SkeletonPostsList />}>
        <MyPosts />
      </Suspense>
    </section>
  );
}

export default ProfilePostsPage;
