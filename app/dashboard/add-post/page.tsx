import { Metadata } from "next";

import SectionTitle from "@/components/SectionTitle";
import AddNewPost from "@/components/dashboard/AddNewPost";

// Metadata
export const metadata: Metadata = {
  title: "Add a Post",
  description:
    "Create and publish new articles to share your stories with the NextBlogs community.",
};

// The page
function AddPostPage() {
  // Returned JSX
  return (
    <section>
      <SectionTitle>Add a new post</SectionTitle>
      <AddNewPost />
    </section>
  );
}

export default AddPostPage;
