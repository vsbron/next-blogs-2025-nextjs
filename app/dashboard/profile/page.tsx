import { Metadata } from "next";

import DashboardProfile from "@/components/dashboard/DashboardProfile";

// Metadata
export const metadata: Metadata = {
  title: "Manage Profile",
  description:
    "Update your personal details, avatar, bio, and account settings on NextBlogs.",
};

// The page
function ProfilePage() {
  // Returned JSX
  return <DashboardProfile />;
}

export default ProfilePage;
