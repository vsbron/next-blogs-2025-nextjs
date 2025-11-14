import { Metadata } from "next";
import { Suspense } from "react";
import { redirect } from "next/navigation";

import ProfileInfo from "@/components/Profile/ProfileInfo";
import SectionTitle from "@/components/SectionTitle";
import SkeletonProfile from "@/components/skeletons/SkeletonProfile";

import { fetchCurrentUser } from "@/utils/actions/users";

// Metadata
export const metadata: Metadata = {
  title: "Manage Profile",
  description:
    "See your account details, including Username, Displayed name, email and more.",
};

// The page
async function ProfilePage() {
  // Get current user
  const user = await fetchCurrentUser();

  // Guard clause
  if (!user) redirect("/");

  // Returned JSX
  return (
    <section>
      <SectionTitle>Manage profile</SectionTitle>
      <Suspense fallback={<SkeletonProfile />}>
        <ProfileInfo user={user} editBtns={true} />
      </Suspense>
    </section>
  );
}

export default ProfilePage;
