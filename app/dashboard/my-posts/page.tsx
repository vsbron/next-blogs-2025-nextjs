import { Metadata } from "next";
import { Suspense } from "react";

import SectionTitle from "@/components/SectionTitle";
import UserPosts from "@/components/dashboard/UserPosts";
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
        <UserPosts />
      </Suspense>
    </section>
  );
}

export default ProfilePostsPage;
