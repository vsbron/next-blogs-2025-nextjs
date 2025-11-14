import { Metadata } from "next";

import SectionTitle from "@/components/SectionTitle";
import UserPosts from "@/components/dashboard/MyPosts";

// Metadata
export const metadata: Metadata = {
  title: "My Posts",
  description:
    "View, edit, and manage all the posts you've created on NextBlogs.",
};

// The page
function ProfilePostsPage() {
  // Returned JSX
  return (
    <section>
      <SectionTitle>List of my posts</SectionTitle>
      <UserPosts />
    </section>
  );
}

export default ProfilePostsPage;
