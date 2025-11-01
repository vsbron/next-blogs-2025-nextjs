import { Metadata } from "next";

import SectionTitle from "@/components/SectionTitle";
import EditProfile from "@/components/dashboard/EditProfile";
import { fetchCurrentUser } from "@/utils/actions/users";

// Metadata
export const metadata: Metadata = {
  title: "Edit profile details",
  description:
    "Update your personal details, avatar and social links on NextBlogs.",
};

// The page
async function EditProfilePage() {
  // Get current user
  const user = await fetchCurrentUser();

  // Returned JSX
  return (
    <>
      <SectionTitle>Edit profile details</SectionTitle>
      {!user ? <div>Loading</div> : <EditProfile user={user} />}
    </>
  );
}

export default EditProfilePage;
