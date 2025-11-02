import { Metadata } from "next";

import DashboardProfile from "@/components/dashboard/DashboardProfile";
import SectionTitle from "@/components/SectionTitle";
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

  // Returned JSX
  return (
    <>
      <SectionTitle>Manage profile</SectionTitle>
      {!user ? <p>Loading...</p> : <DashboardProfile user={user} />}
    </>
  );
}

export default ProfilePage;
