import { Metadata } from "next";
import { Suspense } from "react";

import SectionTitle from "@/components/SectionTitle";
import MyProfileStats from "@/components/dashboard/MyProfileStats";
import SkeletonProfileStats from "@/components/skeletons/SkeletonProfileStats";

// Metadata
export const metadata: Metadata = {
  title: "Profile Statistics",
  description:
    "Analyze your engagement, post performance, and interactions on NextBlogs.",
};

// The page
function ProfileStatsPage() {
  // Returned JSX
  return (
    <section>
      <SectionTitle>Profile statistics</SectionTitle>
      <Suspense fallback={<SkeletonProfileStats />}>
        <MyProfileStats />
      </Suspense>
    </section>
  );
}

export default ProfileStatsPage;
