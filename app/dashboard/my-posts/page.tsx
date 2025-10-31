import { Metadata } from "next";

import SectionTitle from "@/components/SectionTitle";

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
    </section>
  );
}

export default ProfilePostsPage;
