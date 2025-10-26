import { Metadata } from "next";

import SectionTitle from "@/components/SectionTitle";

// Metadata
export const metadata: Metadata = {
  title: "Manage Profile",
  description:
    "Update your personal details, avatar, bio, and account settings on NextBlogs.",
};

// The page

function ProfilePage() {
  // Returned JSX
  return (
    <section>
      <SectionTitle>Manage profile</SectionTitle>
    </section>
  );
}

export default ProfilePage;
