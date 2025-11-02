import { Metadata } from "next";
import { Suspense } from "react";

import SectionTitle from "@/components/SectionTitle";
import DashboardProfile from "@/components/dashboard/DashboardProfile";
import SkeletonProfile from "@/components/skeletons/SkeletonProfile";

// Metadata
export const metadata: Metadata = {
  title: "Manage Profile",
  description:
    "See your account details, including Username, Displayed name, email and more.",
};

// The page
async function ProfilePage() {
  // Returned JSX
  return (
    <>
      <SectionTitle>Manage profile</SectionTitle>
      <Suspense fallback={<SkeletonProfile />}>
        <DashboardProfile />
      </Suspense>
    </>
  );
}

export default ProfilePage;
