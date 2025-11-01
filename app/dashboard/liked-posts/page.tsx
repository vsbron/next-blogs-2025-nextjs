import { Metadata } from "next";

import SectionTitle from "@/components/SectionTitle";

// Metadata
export const metadata: Metadata = {
  title: "Liked posts",
  description:
    "Discover and keep track of your favorite articles from the NextBlogs community.",
};

// The page

function LikedPostsPage() {
  // Returned JSX
  return (
    <section>
      <SectionTitle>Posts you liked</SectionTitle>
    </section>
  );
}

export default LikedPostsPage;
