import { Metadata } from "next";

import SectionTitle from "@/components/SectionTitle";
import { fetchRecentPosts } from "@/utils/actions/posts";

// Metadata
export const metadata: Metadata = {
  title: "My Posts",
  description:
    "View, edit, and manage all the posts you've created on NextBlogs.",
};

// The page
async function ProfilePostsPage() {
  // Temp
  const posts = await fetchRecentPosts();

  // Returned JSX
  return (
    <section>
      <SectionTitle>List of my posts</SectionTitle>
      {posts.map((post) => (
        <h2 key={post.id}>{post.title}</h2>
      ))}
    </section>
  );
}

export default ProfilePostsPage;
